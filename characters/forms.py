from django import forms

from rules.models import CharacterClass
from rules.models import Skill, Subrace

from .models import Character, CharacterClassLevel, CharacterSkill
from .point_buy import (
    ABILITY_SCORE_MAXIMUM,
    ABILITY_SCORE_MINIMUM,
    POINT_BUY_BUDGET,
    remaining_points,
    total_point_buy_cost,
)


ABILITY_FIELDS = ["base_str", "base_dex", "base_con", "base_int", "base_wis", "base_cha"]


class CharacterForm(forms.ModelForm):
    starting_class = forms.ModelChoiceField(
        queryset=CharacterClass.objects.none(),
        help_text="The first class level for this character.",
    )

    class Meta:
        model = Character
        fields = [
            "name",
            "gender",
            "alignment",
            "deity",
            "race",
            "subrace",
            "base_str",
            "base_dex",
            "base_con",
            "base_int",
            "base_wis",
            "base_cha",
            "background",
            "notes",
        ]
        widgets = {
            "background": forms.Textarea(attrs={"rows": 4}),
            "notes": forms.Textarea(attrs={"rows": 3}),
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["starting_class"].queryset = CharacterClass.objects.order_by("name")
        if self.instance.pk:
            first_class_level = self.instance.class_levels.order_by("pk").first()
            if first_class_level:
                self.fields["starting_class"].initial = first_class_level.character_class

        self.fields["subrace"].queryset = Subrace.objects.select_related("base_race").order_by(
            "base_race__name",
            "name",
        )
        self.fields["subrace"].required = False

        for field in self.fields.values():
            field.widget.attrs.setdefault("class", "field")

    def clean(self):
        cleaned_data = super().clean()
        race = cleaned_data.get("race")
        subrace = cleaned_data.get("subrace")

        if race and subrace and subrace.base_race_id != race.id:
            self.add_error("subrace", "Selected subrace does not belong to the selected race.")

        if all(cleaned_data.get(field) is not None for field in ABILITY_FIELDS):
            scores = self._ability_scores_from_cleaned_data(cleaned_data)
            spent = total_point_buy_cost(scores)

            if spent > POINT_BUY_BUDGET:
                raise forms.ValidationError(
                    f"Base ability scores spend {spent} points. You only have {POINT_BUY_BUDGET}."
                )

        return cleaned_data

    def clean_base_str(self):
        return self._clean_ability("base_str")

    def clean_base_dex(self):
        return self._clean_ability("base_dex")

    def clean_base_con(self):
        return self._clean_ability("base_con")

    def clean_base_int(self):
        return self._clean_ability("base_int")

    def clean_base_wis(self):
        return self._clean_ability("base_wis")

    def clean_base_cha(self):
        return self._clean_ability("base_cha")

    def _clean_ability(self, field_name):
        value = self.cleaned_data[field_name]

        if value < ABILITY_SCORE_MINIMUM or value > ABILITY_SCORE_MAXIMUM:
            raise forms.ValidationError(
                f"Base ability scores must be between {ABILITY_SCORE_MINIMUM} and {ABILITY_SCORE_MAXIMUM}."
            )

        return value

    @property
    def point_buy_spent(self):
        if not self.is_bound:
            return 0

        scores = {}
        for field in ABILITY_FIELDS:
            try:
                scores[field] = int(self.data.get(field, ABILITY_SCORE_MINIMUM))
            except (TypeError, ValueError):
                scores[field] = ABILITY_SCORE_MINIMUM

        try:
            return total_point_buy_cost(self._ability_scores_from_prefixed_fields(scores))
        except ValueError:
            return 0

    @property
    def point_buy_remaining(self):
        if not self.is_bound:
            return POINT_BUY_BUDGET

        scores = {}
        for field in ABILITY_FIELDS:
            try:
                scores[field] = int(self.data.get(field, ABILITY_SCORE_MINIMUM))
            except (TypeError, ValueError):
                scores[field] = ABILITY_SCORE_MINIMUM

        try:
            return remaining_points(self._ability_scores_from_prefixed_fields(scores))
        except ValueError:
            return POINT_BUY_BUDGET

    def _ability_scores_from_cleaned_data(self, cleaned_data):
        return self._ability_scores_from_prefixed_fields(
            {field: cleaned_data[field] for field in ABILITY_FIELDS}
        )

    def _ability_scores_from_prefixed_fields(self, values):
        return {
            "str": values["base_str"],
            "dex": values["base_dex"],
            "con": values["base_con"],
            "int": values["base_int"],
            "wis": values["base_wis"],
            "cha": values["base_cha"],
        }

    def save(self, commit=True):
        character = super().save(commit=commit)

        if commit:
            class_level = character.class_levels.order_by("pk").first()
            if class_level:
                class_level.character_class = self.cleaned_data["starting_class"]
                class_level.level = 1
                class_level.save()
            else:
                CharacterClassLevel.objects.create(
                    character=character,
                    character_class=self.cleaned_data["starting_class"],
                    level=1,
                )

        return character


class CharacterClassProgressionForm(forms.Form):
    def __init__(self, *args, character: Character, **kwargs):
        super().__init__(*args, **kwargs)
        self.character = character
        existing_levels = {
            class_level.character_class_id: class_level.level
            for class_level in character.class_levels.all()
        }

        for character_class in CharacterClass.objects.order_by("name"):
            self.fields[f"class_{character_class.pk}"] = forms.IntegerField(
                label=character_class.name,
                min_value=0,
                max_value=40,
                required=False,
                initial=existing_levels.get(character_class.pk, 0),
                help_text=(
                    f"Hit die {character_class.hit_die or '-'}, "
                    f"{character_class.skill_points_per_level or '-'} skill points, "
                    f"{character_class.base_attack_bonus or '-'} BAB"
                ),
            )
            self.fields[f"class_{character_class.pk}"].widget.attrs.setdefault("class", "field")

    def clean(self):
        cleaned_data = super().clean()
        total_level = sum(value or 0 for value in cleaned_data.values())

        if total_level < 1:
            raise forms.ValidationError("A character must have at least one class level.")

        if total_level > 40:
            raise forms.ValidationError("Total character level cannot exceed 40.")

        selected_levels = [
            value
            for field_name, value in cleaned_data.items()
            if field_name.startswith("class_") and value
        ]

        if total_level >= 20 and len(selected_levels) > 1:
            below_minimum = [level for level in selected_levels if level < 5]
            if below_minimum:
                raise forms.ValidationError(
                    "At character level 20 or higher, every selected multiclass must have at least 5 levels."
                )

        return cleaned_data

    def save(self):
        selected_classes = CharacterClass.objects.in_bulk(
            [
                int(field_name.removeprefix("class_"))
                for field_name, value in self.cleaned_data.items()
                if field_name.startswith("class_") and value
            ]
        )
        retained_ids = []

        for field_name, value in self.cleaned_data.items():
            if not field_name.startswith("class_") or not value:
                continue

            class_id = int(field_name.removeprefix("class_"))
            character_class = selected_classes[class_id]
            class_level, _ = CharacterClassLevel.objects.update_or_create(
                character=self.character,
                character_class=character_class,
                defaults={"level": value},
            )
            retained_ids.append(class_level.pk)

        self.character.class_levels.exclude(pk__in=retained_ids).delete()
        return self.character


class CharacterSkillForm(forms.Form):
    def __init__(self, *args, character: Character, **kwargs):
        super().__init__(*args, **kwargs)
        self.character = character
        self.skills_by_id = {skill.pk: skill for skill in Skill.objects.order_by("name")}
        existing_ranks = {
            character_skill.skill_id: character_skill.ranks
            for character_skill in character.skills.all()
        }

        for skill in self.skills_by_id.values():
            self.fields[f"skill_{skill.pk}"] = forms.IntegerField(
                label=f"{skill.name} ({skill.ability.upper()})",
                min_value=0,
                max_value=self.character.skill_max_ranks(skill),
                required=False,
                initial=existing_ranks.get(skill.pk, 0),
                help_text=(
                    f"{'Class skill' if self.character.is_class_skill(skill) else 'Cross-class'}; "
                    f"{self.character.skill_cost_per_rank(skill)} point(s) per rank; "
                    f"maximum {self.character.skill_max_ranks(skill)} ranks."
                ),
            )
            self.fields[f"skill_{skill.pk}"].widget.attrs.setdefault("class", "field")

    def clean(self):
        cleaned_data = super().clean()
        spent = 0

        for field_name, value in cleaned_data.items():
            if not field_name.startswith("skill_") or not value:
                continue
            skill_id = int(field_name.removeprefix("skill_"))
            spent += value * self.character.skill_cost_per_rank(self.skills_by_id[skill_id])

        if spent > self.character.available_skill_points:
            raise forms.ValidationError(
                f"Skill ranks spend {spent} points. This character only has {self.character.available_skill_points}."
            )

        return cleaned_data

    def save(self):
        selected_skills = Skill.objects.in_bulk(
            [
                int(field_name.removeprefix("skill_"))
                for field_name, value in self.cleaned_data.items()
                if field_name.startswith("skill_") and value
            ]
        )
        retained_ids = []

        for field_name, value in self.cleaned_data.items():
            if not field_name.startswith("skill_") or not value:
                continue

            skill_id = int(field_name.removeprefix("skill_"))
            character_skill, _ = CharacterSkill.objects.update_or_create(
                character=self.character,
                skill=selected_skills[skill_id],
                defaults={"ranks": value},
            )
            retained_ids.append(character_skill.pk)

        self.character.skills.exclude(pk__in=retained_ids).delete()
        return self.character
