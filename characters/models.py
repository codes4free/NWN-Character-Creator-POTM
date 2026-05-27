from django.db import models
from django.urls import reverse

from rules.models import CharacterClass, Race, Skill, Subrace


class Alignment(models.TextChoices):
    LAWFUL_GOOD = "lawful_good", "Lawful Good"
    NEUTRAL_GOOD = "neutral_good", "Neutral Good"
    CHAOTIC_GOOD = "chaotic_good", "Chaotic Good"
    LAWFUL_NEUTRAL = "lawful_neutral", "Lawful Neutral"
    TRUE_NEUTRAL = "true_neutral", "True Neutral"
    CHAOTIC_NEUTRAL = "chaotic_neutral", "Chaotic Neutral"
    LAWFUL_EVIL = "lawful_evil", "Lawful Evil"
    NEUTRAL_EVIL = "neutral_evil", "Neutral Evil"
    CHAOTIC_EVIL = "chaotic_evil", "Chaotic Evil"


class Character(models.Model):
    name = models.CharField(max_length=120)
    gender = models.CharField(max_length=80, blank=True)
    alignment = models.CharField(max_length=32, choices=Alignment.choices, blank=True)
    deity = models.CharField(max_length=120, blank=True)
    background = models.TextField(blank=True)
    notes = models.TextField(blank=True)
    race = models.ForeignKey(Race, on_delete=models.PROTECT, related_name="characters")
    subrace = models.ForeignKey(
        Subrace,
        on_delete=models.PROTECT,
        related_name="characters",
        null=True,
        blank=True,
    )
    base_str = models.PositiveSmallIntegerField(default=8)
    base_dex = models.PositiveSmallIntegerField(default=8)
    base_con = models.PositiveSmallIntegerField(default=8)
    base_int = models.PositiveSmallIntegerField(default=8)
    base_wis = models.PositiveSmallIntegerField(default=8)
    base_cha = models.PositiveSmallIntegerField(default=8)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["name"]

    def __str__(self) -> str:
        return self.name

    def get_absolute_url(self):
        return reverse("characters:detail", kwargs={"pk": self.pk})

    @property
    def base_ability_scores(self) -> dict[str, int]:
        return {
            "str": self.base_str,
            "dex": self.base_dex,
            "con": self.base_con,
            "int": self.base_int,
            "wis": self.base_wis,
            "cha": self.base_cha,
        }

    @property
    def final_ability_scores(self) -> dict[str, int]:
        scores = self.base_race_ability_scores

        if self.subrace:
            for ability, modifier in self.subrace.attribute_modifiers.items():
                scores[ability] = scores.get(ability, 0) + modifier

        return scores

    @property
    def base_race_ability_scores(self) -> dict[str, int]:
        scores = self.base_ability_scores

        for ability, modifier in self.race.attribute_modifiers.items():
            scores[ability] = scores.get(ability, 0) + modifier

        return scores

    @property
    def total_level(self) -> int:
        return self.class_levels.aggregate(total=models.Sum("level"))["total"] or 0

    @property
    def class_breakdown(self) -> str:
        return " / ".join(
            f"{class_level.character_class.name} {class_level.level}"
            for class_level in self.class_levels.select_related("character_class").order_by(
                "character_class__name"
            )
        )

    @property
    def ability_rows(self) -> list[dict[str, int | str]]:
        names = {
            "str": "Strength",
            "dex": "Dexterity",
            "con": "Constitution",
            "int": "Intelligence",
            "wis": "Wisdom",
            "cha": "Charisma",
        }
        base_scores = self.base_ability_scores
        base_race_scores = self.base_race_ability_scores
        final_scores = self.final_ability_scores

        return [
            {
                "key": ability,
                "name": names[ability],
                "base": base_scores[ability],
                "base_race": base_race_scores[ability],
                "final": final_scores[ability],
                "modifier": ability_modifier(final_scores[ability]),
                "modifier_display": format_modifier(ability_modifier(final_scores[ability])),
            }
            for ability in ["str", "dex", "con", "int", "wis", "cha"]
        ]

    @property
    def base_attack_bonus(self) -> int:
        total = 0

        for class_level in self.class_levels.select_related("character_class"):
            total += class_level.base_attack_bonus

        return total

    @property
    def attack_bonus_rows(self) -> list[tuple[str, str]]:
        strength = self.final_ability_scores["str"]
        dexterity = self.final_ability_scores["dex"]
        base_attack_bonus = self.base_attack_bonus

        return [
            ("Base Attack Bonus", format_modifier(base_attack_bonus)),
            ("Melee", format_modifier(base_attack_bonus + ability_modifier(strength))),
            ("Ranged", format_modifier(base_attack_bonus + ability_modifier(dexterity))),
        ]

    @property
    def saving_throw_bases(self) -> dict[str, int]:
        totals = {"fortitude": 0, "reflex": 0, "will": 0}

        for class_level in self.class_levels.select_related("character_class"):
            saves = class_level.saving_throw_bases
            for save_name, value in saves.items():
                totals[save_name] += value

        return totals

    @property
    def saving_throw_rows(self) -> list[tuple[str, str]]:
        scores = self.final_ability_scores
        bases = self.saving_throw_bases
        rows = [
            ("Fortitude", bases["fortitude"] + ability_modifier(scores["con"])),
            ("Reflex", bases["reflex"] + ability_modifier(scores["dex"])),
            ("Will", bases["will"] + ability_modifier(scores["wis"])),
        ]

        return [(label, format_modifier(value)) for label, value in rows]

    @property
    def intelligence_modifier(self) -> int:
        return ability_modifier(self.final_ability_scores["int"])

    @property
    def is_human(self) -> bool:
        return self.race.key == "human"

    @property
    def available_skill_points(self) -> int:
        class_levels = list(self.class_levels.select_related("character_class").order_by("pk"))
        if not class_levels:
            return 0

        total = 0
        character_level = 0

        for class_level in class_levels:
            for class_rank in range(1, class_level.level + 1):
                character_level += 1
                base_points = (
                    class_level.character_class.skill_points_per_level
                    + self.intelligence_modifier
                )

                if character_level == 1:
                    total += max(1, base_points) * 4
                    if self.is_human:
                        total += 4
                else:
                    total += max(1, base_points)
                    if self.is_human:
                        total += 1

        return total

    def is_class_skill(self, skill: Skill) -> bool:
        character_class_keys = set(
            self.class_levels.values_list("character_class__key", flat=True)
        )
        return bool(character_class_keys.intersection(skill.class_skill_ids))

    def skill_cost_per_rank(self, skill: Skill) -> int:
        return 1 if self.is_class_skill(skill) else 2

    def skill_max_ranks(self, skill: Skill) -> int:
        if self.is_class_skill(skill):
            return self.total_level + 3
        return (self.total_level + 3) // 2

    @property
    def spent_skill_points(self) -> int:
        return sum(skill.point_cost for skill in self.skills.select_related("skill"))

    @property
    def unspent_skill_points(self) -> int:
        return self.available_skill_points - self.spent_skill_points

    @property
    def skill_rows(self) -> list[dict[str, int | str]]:
        final_scores = self.final_ability_scores
        rows = []

        for character_skill in self.skills.select_related("skill").order_by("skill__name"):
            skill = character_skill.skill
            ability_modifier_value = ability_modifier(final_scores[skill.ability])
            race_bonus = self.race.skill_bonuses.get(skill.key, 0)
            if self.subrace:
                race_bonus += self.subrace.skill_bonuses.get(skill.key, 0)
            total = character_skill.ranks + ability_modifier_value + race_bonus
            rows.append(
                {
                    "name": skill.name,
                    "ability": skill.ability.upper(),
                    "ranks": character_skill.ranks,
                    "class_skill": "Yes" if character_skill.is_class_skill else "No",
                    "cost_per_rank": character_skill.cost_per_rank,
                    "point_cost": character_skill.point_cost,
                    "max_ranks": character_skill.max_ranks,
                    "ability_modifier": format_modifier(ability_modifier_value),
                    "race_bonus": format_modifier(race_bonus),
                    "total": format_modifier(total),
                }
            )

        return rows


class CharacterClassLevel(models.Model):
    character = models.ForeignKey(Character, on_delete=models.CASCADE, related_name="class_levels")
    character_class = models.ForeignKey(
        CharacterClass,
        on_delete=models.PROTECT,
        related_name="character_levels",
    )
    level = models.PositiveSmallIntegerField(default=1)

    class Meta:
        ordering = ["character_class__name"]
        constraints = [
            models.UniqueConstraint(
                fields=["character", "character_class"],
                name="unique_character_class_level",
            )
        ]

    def __str__(self) -> str:
        return f"{self.character.name}: {self.character_class.name} {self.level}"

    @property
    def base_attack_bonus(self) -> int:
        progression = self.character_class.special_progression.get("progression", [])

        for row in progression:
            if row.get("level") == self.level and row.get("baseAttackBonus") is not None:
                return row["baseAttackBonus"]

        progression_label = self.character_class.base_attack_bonus
        if progression_label == "high":
            return self.level
        if progression_label == "medium":
            return (self.level * 3) // 4
        if progression_label == "low":
            return self.level // 2
        return 0

    @property
    def saving_throw_bases(self) -> dict[str, int]:
        progression = self.character_class.special_progression.get("progression", [])

        for row in progression:
            if row.get("level") == self.level:
                return {
                    "fortitude": row.get("fortitudeSave") or self._save_from_progression("fortitude"),
                    "reflex": row.get("reflexSave") or self._save_from_progression("reflex"),
                    "will": row.get("willSave") or self._save_from_progression("will"),
                }

        return {
            "fortitude": self._save_from_progression("fortitude"),
            "reflex": self._save_from_progression("reflex"),
            "will": self._save_from_progression("will"),
        }

    def _save_from_progression(self, save_name: str) -> int:
        progression = self.character_class.saving_throws.get(save_name, "low")
        if progression == "high":
            return 2 + self.level // 2
        return self.level // 3


class CharacterSkill(models.Model):
    character = models.ForeignKey(Character, on_delete=models.CASCADE, related_name="skills")
    skill = models.ForeignKey(Skill, on_delete=models.PROTECT, related_name="character_skills")
    ranks = models.PositiveSmallIntegerField(default=0)

    class Meta:
        ordering = ["skill__name"]
        constraints = [
            models.UniqueConstraint(
                fields=["character", "skill"],
                name="unique_character_skill",
            )
        ]

    def __str__(self) -> str:
        return f"{self.character.name}: {self.skill.name} {self.ranks}"

    @property
    def is_class_skill(self) -> bool:
        return self.character.is_class_skill(self.skill)

    @property
    def cost_per_rank(self) -> int:
        return self.character.skill_cost_per_rank(self.skill)

    @property
    def point_cost(self) -> int:
        return self.ranks * self.cost_per_rank

    @property
    def max_ranks(self) -> int:
        return self.character.skill_max_ranks(self.skill)


def ability_modifier(score: int) -> int:
    return (score - 10) // 2


def format_modifier(value: int) -> str:
    return f"+{value}" if value >= 0 else str(value)
