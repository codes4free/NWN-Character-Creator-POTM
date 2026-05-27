from io import StringIO

from django.core.management import call_command
from django.test import TestCase
from django.urls import reverse

from rules.models import CharacterClass, Race, Skill, Subrace

from .models import Character, CharacterClassLevel, CharacterSkill, ability_modifier, format_modifier
from .point_buy import ability_point_cost, remaining_points, total_point_buy_cost


class PointBuyTests(TestCase):
    def test_ability_point_cost_curve(self):
        self.assertEqual(ability_point_cost(8), 0)
        self.assertEqual(ability_point_cost(13), 5)
        self.assertEqual(ability_point_cost(14), 6)
        self.assertEqual(ability_point_cost(15), 8)
        self.assertEqual(ability_point_cost(16), 10)
        self.assertEqual(ability_point_cost(18), 16)

    def test_total_and_remaining_points(self):
        scores = {"str": 14, "dex": 14, "con": 13, "int": 12, "wis": 10, "cha": 8}

        self.assertEqual(total_point_buy_cost(scores), 23)
        self.assertEqual(remaining_points(scores), 7)

    def test_ability_modifier_formatting(self):
        self.assertEqual(ability_modifier(8), -1)
        self.assertEqual(ability_modifier(10), 0)
        self.assertEqual(ability_modifier(18), 4)
        self.assertEqual(format_modifier(4), "+4")
        self.assertEqual(format_modifier(0), "+0")
        self.assertEqual(format_modifier(-1), "-1")


class CharacterSheetTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        call_command("import_all_seed_data", stdout=StringIO())

    def test_character_list_page_loads(self):
        response = self.client.get(reverse("characters:list"))

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Characters")
        self.assertContains(response, "New Character")

    def test_create_character_from_rule_data(self):
        human = Race.objects.get(key="human")
        fighter = CharacterClass.objects.get(key="fighter")

        response = self.client.post(
            reverse("characters:create"),
            data={
                "name": "Ezra Vale",
                "gender": "Female",
                "alignment": "neutral_good",
                "deity": "Ezra",
                "race": human.pk,
                "subrace": "",
                "starting_class": fighter.pk,
                "base_str": 10,
                "base_dex": 12,
                "base_con": 10,
                "base_int": 14,
                "base_wis": 13,
                "base_cha": 11,
                "background": "A cautious wanderer.",
                "notes": "",
            },
        )

        character = Character.objects.get(name="Ezra Vale")
        self.assertRedirects(response, character.get_absolute_url())
        self.assertEqual(character.final_ability_scores["int"], 14)
        self.assertEqual(character.total_level, 1)
        self.assertEqual(character.class_breakdown, "Fighter 1")

    def test_create_character_rejects_overspent_point_buy(self):
        human = Race.objects.get(key="human")
        fighter = CharacterClass.objects.get(key="fighter")

        response = self.client.post(
            reverse("characters:create"),
            data={
                "name": "Too Strong",
                "race": human.pk,
                "starting_class": fighter.pk,
                "base_str": 18,
                "base_dex": 18,
                "base_con": 18,
                "base_int": 8,
                "base_wis": 8,
                "base_cha": 8,
            },
        )

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "You only have 30.")
        self.assertEqual(Character.objects.count(), 0)

    def test_create_character_rejects_scores_below_point_buy_minimum(self):
        human = Race.objects.get(key="human")
        fighter = CharacterClass.objects.get(key="fighter")

        response = self.client.post(
            reverse("characters:create"),
            data={
                "name": "Too Low",
                "race": human.pk,
                "starting_class": fighter.pk,
                "base_str": 7,
                "base_dex": 8,
                "base_con": 8,
                "base_int": 8,
                "base_wis": 8,
                "base_cha": 8,
            },
        )

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Base ability scores must be between 8 and 18.")
        self.assertEqual(Character.objects.count(), 0)

    def test_subrace_must_belong_to_selected_race(self):
        human = Race.objects.get(key="human")
        drow = Subrace.objects.get(key="drow")
        fighter = CharacterClass.objects.get(key="fighter")

        response = self.client.post(
            reverse("characters:create"),
            data={
                "name": "Mismatch",
                "race": human.pk,
                "subrace": drow.pk,
                "starting_class": fighter.pk,
                "base_str": 8,
                "base_dex": 8,
                "base_con": 8,
                "base_int": 8,
                "base_wis": 8,
                "base_cha": 8,
            },
        )

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Selected subrace does not belong to the selected race.")
        self.assertEqual(Character.objects.count(), 0)

    def test_character_detail_shows_final_scores_with_subrace_modifiers(self):
        elf = Race.objects.get(key="elf")
        drow = Subrace.objects.get(key="drow")
        character = Character.objects.create(
            name="Night Scholar",
            race=elf,
            subrace=drow,
            base_str=8,
            base_dex=10,
            base_con=10,
            base_int=12,
            base_wis=10,
            base_cha=10,
        )

        response = self.client.get(character.get_absolute_url())

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Night Scholar")
        self.assertContains(response, "Drow")
        self.assertEqual(character.final_ability_scores["dex"], 14)
        self.assertEqual(character.final_ability_scores["con"], 6)
        self.assertEqual(character.final_ability_scores["cha"], 12)

    def test_character_detail_shows_starting_class(self):
        human = Race.objects.get(key="human")
        fighter = CharacterClass.objects.get(key="fighter")
        character = Character.objects.create(name="Level One", race=human)
        CharacterClassLevel.objects.create(
            character=character,
            character_class=fighter,
            level=1,
        )

        response = self.client.get(character.get_absolute_url())

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Class Progression")
        self.assertContains(response, "Summary")
        self.assertContains(response, "Attack Bonuses")
        self.assertContains(response, "Ability")
        self.assertContains(response, "Base Attack Bonus")
        self.assertContains(response, "Fighter")
        self.assertContains(response, "Total Level:")

    def test_character_attack_bonus_summary_uses_class_progression(self):
        human = Race.objects.get(key="human")
        fighter = CharacterClass.objects.get(key="fighter")
        wizard = CharacterClass.objects.get(key="wizard")
        character = Character.objects.create(
            name="Attack Math",
            race=human,
            base_str=14,
            base_dex=12,
        )
        CharacterClassLevel.objects.create(
            character=character,
            character_class=fighter,
            level=5,
        )
        CharacterClassLevel.objects.create(
            character=character,
            character_class=wizard,
            level=4,
        )

        self.assertEqual(character.class_levels.get(character_class=fighter).base_attack_bonus, 5)
        self.assertEqual(character.class_levels.get(character_class=wizard).base_attack_bonus, 2)
        self.assertEqual(character.base_attack_bonus, 7)
        self.assertEqual(
            character.attack_bonus_rows,
            [
                ("Base Attack Bonus", "+7"),
                ("Melee", "+9"),
                ("Ranged", "+8"),
            ],
        )

    def test_planner_progression_bab_uses_exact_imported_level_row(self):
        human = Race.objects.get(key="human")
        rogue = CharacterClass.objects.get(key="rogue")
        character = Character.objects.create(name="Rogue Bab", race=human)
        class_level = CharacterClassLevel.objects.create(
            character=character,
            character_class=rogue,
            level=7,
        )

        self.assertEqual(class_level.base_attack_bonus, 5)
        self.assertEqual(character.base_attack_bonus, 5)

    def test_saving_throw_summary_uses_class_progression_and_abilities(self):
        human = Race.objects.get(key="human")
        fighter = CharacterClass.objects.get(key="fighter")
        wizard = CharacterClass.objects.get(key="wizard")
        character = Character.objects.create(
            name="Save Math",
            race=human,
            base_dex=14,
            base_con=14,
            base_wis=12,
        )
        fighter_level = CharacterClassLevel.objects.create(
            character=character,
            character_class=fighter,
            level=5,
        )
        wizard_level = CharacterClassLevel.objects.create(
            character=character,
            character_class=wizard,
            level=4,
        )

        self.assertEqual(
            fighter_level.saving_throw_bases,
            {"fortitude": 4, "reflex": 1, "will": 1},
        )
        self.assertEqual(
            wizard_level.saving_throw_bases,
            {"fortitude": 1, "reflex": 1, "will": 4},
        )
        self.assertEqual(
            character.saving_throw_bases,
            {"fortitude": 5, "reflex": 2, "will": 5},
        )
        self.assertEqual(
            character.saving_throw_rows,
            [("Fortitude", "+7"), ("Reflex", "+4"), ("Will", "+6")],
        )

    def test_available_skill_points_include_level_one_multiplier_and_human_bonus(self):
        human = Race.objects.get(key="human")
        rogue = CharacterClass.objects.get(key="rogue")
        character = Character.objects.create(
            name="Skilled Human",
            race=human,
            base_int=14,
        )
        CharacterClassLevel.objects.create(
            character=character,
            character_class=rogue,
            level=1,
        )

        self.assertEqual(character.intelligence_modifier, 2)
        self.assertEqual(character.available_skill_points, 44)
        self.assertEqual(character.spent_skill_points, 0)
        self.assertEqual(character.unspent_skill_points, 44)

    def test_available_skill_points_add_later_levels(self):
        human = Race.objects.get(key="human")
        rogue = CharacterClass.objects.get(key="rogue")
        character = Character.objects.create(
            name="Skilled Human 3",
            race=human,
            base_int=14,
        )
        CharacterClassLevel.objects.create(
            character=character,
            character_class=rogue,
            level=3,
        )

        self.assertEqual(character.available_skill_points, 66)

    def test_skill_editor_saves_ranks_and_sheet_totals(self):
        human = Race.objects.get(key="human")
        rogue = CharacterClass.objects.get(key="rogue")
        hide = Skill.objects.get(key="hide")
        spot = Skill.objects.get(key="spot")
        character = Character.objects.create(
            name="Skill Edit",
            race=human,
            base_dex=14,
            base_wis=12,
            base_int=14,
        )
        CharacterClassLevel.objects.create(
            character=character,
            character_class=rogue,
            level=1,
        )

        response = self.client.post(
            reverse("characters:skills", kwargs={"pk": character.pk}),
            data={
                f"skill_{hide.pk}": 4,
                f"skill_{spot.pk}": 2,
            },
        )

        character.refresh_from_db()

        self.assertRedirects(response, character.get_absolute_url())
        self.assertEqual(character.spent_skill_points, 6)
        self.assertEqual(character.unspent_skill_points, 38)
        self.assertEqual(
            set(character.skills.values_list("skill__key", "ranks")),
            {("hide", 4), ("spot", 2)},
        )
        self.assertIn(
            {
                "name": "Hide",
                "ability": "DEX",
                "ranks": 4,
                "class_skill": "Yes",
                "cost_per_rank": 1,
                "point_cost": 4,
                "max_ranks": 4,
                "ability_modifier": "+2",
                "race_bonus": "+0",
                "total": "+6",
            },
            character.skill_rows,
        )

    def test_cross_class_skills_cost_two_points_per_rank(self):
        human = Race.objects.get(key="human")
        wizard = CharacterClass.objects.get(key="wizard")
        hide = Skill.objects.get(key="hide")
        character = Character.objects.create(
            name="Cross Class Skill",
            race=human,
            base_dex=14,
            base_int=14,
        )
        CharacterClassLevel.objects.create(
            character=character,
            character_class=wizard,
            level=5,
        )

        response = self.client.post(
            reverse("characters:skills", kwargs={"pk": character.pk}),
            data={f"skill_{hide.pk}": 4},
        )

        character.refresh_from_db()

        self.assertRedirects(response, character.get_absolute_url())
        self.assertEqual(character.spent_skill_points, 8)
        self.assertEqual(character.unspent_skill_points, 32)
        self.assertIn(
            {
                "name": "Hide",
                "ability": "DEX",
                "ranks": 4,
                "class_skill": "No",
                "cost_per_rank": 2,
                "point_cost": 8,
                "max_ranks": 4,
                "ability_modifier": "+2",
                "race_bonus": "+0",
                "total": "+6",
            },
            character.skill_rows,
        )

    def test_skill_editor_rejects_overspending(self):
        human = Race.objects.get(key="human")
        rogue = CharacterClass.objects.get(key="rogue")
        hide = Skill.objects.get(key="hide")
        character = Character.objects.create(
            name="Skill Overspend",
            race=human,
            base_int=8,
        )
        CharacterClassLevel.objects.create(
            character=character,
            character_class=rogue,
            level=1,
        )

        response = self.client.post(
            reverse("characters:skills", kwargs={"pk": character.pk}),
            data={f"skill_{hide.pk}": 33},
        )

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Ensure this value is less than or equal to 4.")
        self.assertEqual(CharacterSkill.objects.count(), 0)

    def test_skill_editor_rejects_cross_class_ranks_above_cap(self):
        human = Race.objects.get(key="human")
        wizard = CharacterClass.objects.get(key="wizard")
        hide = Skill.objects.get(key="hide")
        character = Character.objects.create(
            name="Cross Class Cap",
            race=human,
            base_int=14,
        )
        CharacterClassLevel.objects.create(
            character=character,
            character_class=wizard,
            level=1,
        )

        response = self.client.post(
            reverse("characters:skills", kwargs={"pk": character.pk}),
            data={f"skill_{hide.pk}": 3},
        )

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Ensure this value is less than or equal to 2.")
        self.assertEqual(CharacterSkill.objects.count(), 0)

    def test_edit_character_updates_sheet_and_starting_class(self):
        human = Race.objects.get(key="human")
        fighter = CharacterClass.objects.get(key="fighter")
        wizard = CharacterClass.objects.get(key="wizard")
        character = Character.objects.create(name="Before Edit", race=human)
        CharacterClassLevel.objects.create(
            character=character,
            character_class=fighter,
            level=1,
        )

        response = self.client.post(
            reverse("characters:edit", kwargs={"pk": character.pk}),
            data={
                "name": "After Edit",
                "gender": "",
                "alignment": "true_neutral",
                "deity": "",
                "race": human.pk,
                "subrace": "",
                "starting_class": wizard.pk,
                "base_str": 8,
                "base_dex": 10,
                "base_con": 8,
                "base_int": 14,
                "base_wis": 12,
                "base_cha": 8,
                "background": "",
                "notes": "Changed in the web editor.",
            },
        )

        character.refresh_from_db()

        self.assertRedirects(response, character.get_absolute_url())
        self.assertEqual(character.name, "After Edit")
        self.assertEqual(character.alignment, "true_neutral")
        self.assertEqual(character.notes, "Changed in the web editor.")
        self.assertEqual(character.class_levels.count(), 1)
        self.assertEqual(character.class_levels.get().character_class, wizard)
        self.assertEqual(character.class_breakdown, "Wizard 1")

    def test_detail_page_links_to_edit_page(self):
        human = Race.objects.get(key="human")
        fighter = CharacterClass.objects.get(key="fighter")
        character = Character.objects.create(name="Editable", race=human)
        CharacterClassLevel.objects.create(
            character=character,
            character_class=fighter,
            level=1,
        )

        response = self.client.get(character.get_absolute_url())

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, reverse("characters:edit", kwargs={"pk": character.pk}))
        self.assertContains(response, reverse("characters:class_progression", kwargs={"pk": character.pk}))

    def test_class_progression_page_updates_multiclass_levels(self):
        human = Race.objects.get(key="human")
        fighter = CharacterClass.objects.get(key="fighter")
        wizard = CharacterClass.objects.get(key="wizard")
        rogue = CharacterClass.objects.get(key="rogue")
        character = Character.objects.create(name="Multiclass", race=human)
        CharacterClassLevel.objects.create(
            character=character,
            character_class=fighter,
            level=1,
        )

        response = self.client.post(
            reverse("characters:class_progression", kwargs={"pk": character.pk}),
            data={
                f"class_{fighter.pk}": 2,
                f"class_{wizard.pk}": 3,
                f"class_{rogue.pk}": 0,
            },
        )

        character.refresh_from_db()

        self.assertRedirects(response, character.get_absolute_url())
        self.assertEqual(character.total_level, 5)
        self.assertEqual(character.class_levels.count(), 2)
        self.assertEqual(
            set(character.class_levels.values_list("character_class__key", "level")),
            {("fighter", 2), ("wizard", 3)},
        )

    def test_class_progression_rejects_zero_total_level(self):
        human = Race.objects.get(key="human")
        fighter = CharacterClass.objects.get(key="fighter")
        character = Character.objects.create(name="No Levels", race=human)
        CharacterClassLevel.objects.create(
            character=character,
            character_class=fighter,
            level=1,
        )

        response = self.client.post(
            reverse("characters:class_progression", kwargs={"pk": character.pk}),
            data={f"class_{fighter.pk}": 0},
        )

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "A character must have at least one class level.")
        self.assertEqual(character.class_levels.count(), 1)

    def test_level_twenty_multiclass_requires_five_levels_in_each_selected_class(self):
        human = Race.objects.get(key="human")
        fighter = CharacterClass.objects.get(key="fighter")
        wizard = CharacterClass.objects.get(key="wizard")
        character = Character.objects.create(name="Invalid Split", race=human)
        CharacterClassLevel.objects.create(
            character=character,
            character_class=fighter,
            level=1,
        )

        response = self.client.post(
            reverse("characters:class_progression", kwargs={"pk": character.pk}),
            data={
                f"class_{fighter.pk}": 16,
                f"class_{wizard.pk}": 4,
            },
        )

        self.assertEqual(response.status_code, 200)
        self.assertContains(
            response,
            "At character level 20 or higher, every selected multiclass must have at least 5 levels.",
        )
        self.assertEqual(character.class_levels.get().level, 1)

    def test_level_twenty_multiclass_allows_five_levels_in_each_selected_class(self):
        human = Race.objects.get(key="human")
        fighter = CharacterClass.objects.get(key="fighter")
        wizard = CharacterClass.objects.get(key="wizard")
        character = Character.objects.create(name="Valid Split", race=human)
        CharacterClassLevel.objects.create(
            character=character,
            character_class=fighter,
            level=1,
        )

        response = self.client.post(
            reverse("characters:class_progression", kwargs={"pk": character.pk}),
            data={
                f"class_{fighter.pk}": 15,
                f"class_{wizard.pk}": 5,
            },
        )

        character.refresh_from_db()

        self.assertRedirects(response, character.get_absolute_url())
        self.assertEqual(character.total_level, 20)
        self.assertEqual(
            set(character.class_levels.values_list("character_class__key", "level")),
            {("fighter", 15), ("wizard", 5)},
        )

    def test_base_race_bonus_is_applied_before_sheet_score(self):
        dwarf = Race.objects.get(key="dwarf")
        character = Character.objects.create(
            name="Stone Guard",
            race=dwarf,
            base_str=8,
            base_dex=8,
            base_con=8,
            base_int=8,
            base_wis=8,
            base_cha=8,
        )

        self.assertEqual(character.base_ability_scores["con"], 8)
        self.assertEqual(character.base_race_ability_scores["con"], 10)
        self.assertEqual(character.final_ability_scores["con"], 10)
        self.assertEqual(character.final_ability_scores["cha"], 6)

    def test_subrace_bonus_is_applied_after_point_buy_and_base_race(self):
        elf = Race.objects.get(key="elf")
        drow = Subrace.objects.get(key="drow")
        character = Character.objects.create(
            name="Drow Attribute Order",
            race=elf,
            subrace=drow,
            base_str=8,
            base_dex=8,
            base_con=8,
            base_int=8,
            base_wis=8,
            base_cha=8,
        )

        self.assertEqual(character.base_ability_scores["dex"], 8)
        self.assertEqual(character.base_race_ability_scores["dex"], 10)
        self.assertEqual(character.final_ability_scores["dex"], 12)
        self.assertEqual(character.base_race_ability_scores["con"], 6)
        self.assertEqual(character.final_ability_scores["con"], 4)
