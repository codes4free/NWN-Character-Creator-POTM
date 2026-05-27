from io import StringIO

from django.core.management import call_command
from django.test import TestCase
from django.urls import reverse

from .models import (
    CharacterClass,
    Feat,
    ClericDomain,
    PrestigeClass,
    Race,
    RuleSource,
    Skill,
    SourceStatus,
    Spell,
    SpellSchool,
    Subrace,
    Weapon,
)


class RulesModelTests(TestCase):
    def test_rule_records_track_source_status(self):
        source = RuleSource.objects.create(
            name="POTM Wiki",
            url="https://nwnravenloft.fandom.com/wiki/Ravenloft:_Prisoners_of_the_Mist_Wikia",
        )

        race = Race.objects.create(
            key="human",
            name="Human",
            source=source,
            source_section="Races",
            source_status=SourceStatus.VERIFIED,
            attribute_modifiers={"str": 0, "dex": 0, "con": 0, "int": 0, "wis": 0, "cha": 0},
        )

        self.assertEqual(str(race), "Human")
        self.assertEqual(race.source, source)
        self.assertEqual(race.source_status, SourceStatus.VERIFIED)


class SeedRaceImportTests(TestCase):
    def test_import_seed_races_preserves_traceability(self):
        out = StringIO()

        call_command("import_seed_races", stdout=out)

        self.assertEqual(Race.objects.count(), 7)
        self.assertEqual(Subrace.objects.count(), 15)

        human = Race.objects.get(key="human")
        self.assertEqual(human.name, "Human")
        self.assertEqual(human.source_status, SourceStatus.NEEDS_VERIFICATION)
        self.assertEqual(human.source_section, "src/data/races.ts:human")
        self.assertEqual(human.source.name, "NWN Wiki / POTM rules")
        self.assertIn("POTM implementation details", human.notes)

        drow = Subrace.objects.get(key="drow")
        self.assertEqual(drow.base_race.key, "elf")
        self.assertEqual(drow.source_section, "src/data/subraces.ts:drow")
        self.assertEqual(drow.source_status, SourceStatus.NEEDS_VERIFICATION)


class SeedCoreRulesImportTests(TestCase):
    def test_import_seed_core_rules_preserves_traceability(self):
        out = StringIO()

        call_command("import_seed_core_rules", stdout=out)

        self.assertEqual(CharacterClass.objects.count(), 34)
        self.assertEqual(PrestigeClass.objects.count(), 2)
        self.assertEqual(Skill.objects.count(), 27)
        self.assertEqual(Feat.objects.count(), 3)

        fighter = CharacterClass.objects.get(key="fighter")
        self.assertEqual(fighter.name, "Fighter")
        self.assertEqual(fighter.hit_die, "d10")
        self.assertEqual(fighter.base_attack_bonus, "high")
        self.assertEqual(fighter.saving_throws["fortitude"], "high")
        self.assertEqual(fighter.source_section, "src/data/plannerClasses.ts:fighter")
        self.assertEqual(fighter.source_status, SourceStatus.NEEDS_VERIFICATION)
        self.assertEqual(fighter.special_progression["maxLevel"], 20)
        self.assertEqual(fighter.special_progression["bonusFeatLevels"][:3], [1, 2, 3])

        barbarian = CharacterClass.objects.get(key="barbarian")
        self.assertEqual(barbarian.hit_die, "d12")
        self.assertEqual(barbarian.skill_points_per_level, 4)
        self.assertEqual(barbarian.special_progression["progression"][0]["baseAttackBonus"], 1)

        assassin = PrestigeClass.objects.get(key="assassin")
        self.assertEqual(assassin.requirements["alignment"], ["any-evil"])
        self.assertEqual(assassin.source_section, "src/data/prestigeClasses.ts:assassin")

        hide = Skill.objects.get(key="hide")
        self.assertEqual(hide.ability, "dex")
        self.assertTrue(hide.armor_check_penalty)
        self.assertIn("rogue", hide.class_skill_ids)
        self.assertEqual(hide.source_section, "src/data/skills.ts:hide")

        animal_empathy = Skill.objects.get(key="animal_empathy")
        self.assertEqual(animal_empathy.ability, "cha")
        self.assertTrue(animal_empathy.trained_only)
        self.assertIn("ranger", animal_empathy.class_skill_ids)

        power_attack = Feat.objects.get(key="power_attack")
        self.assertEqual(power_attack.feat_type, "general")
        self.assertEqual(power_attack.requirements["minimumBaseAttackBonus"], 1)
        self.assertEqual(power_attack.source_section, "src/data/feats.ts:power_attack")


class SeedMagicImportTests(TestCase):
    def test_import_seed_magic_preserves_traceability(self):
        out = StringIO()

        call_command("import_seed_magic", stdout=out)

        self.assertEqual(SpellSchool.objects.count(), 3)
        self.assertEqual(Spell.objects.count(), 3)
        self.assertEqual(ClericDomain.objects.count(), 2)

        evocation = SpellSchool.objects.get(key="evocation")
        self.assertEqual(evocation.name, "Evocation")
        self.assertEqual(evocation.source_section, "src/data/spells.ts:school:evocation")
        self.assertEqual(evocation.source_status, SourceStatus.NEEDS_VERIFICATION)

        magic_missile = Spell.objects.get(key="magic_missile")
        self.assertEqual(magic_missile.name, "Magic Missile")
        self.assertEqual(magic_missile.school.key, "evocation")
        self.assertEqual(magic_missile.levels, {"wizard": 1, "sorcerer": 1})
        self.assertEqual(magic_missile.source_section, "src/data/spells.ts:magic_missile")
        self.assertIn("projectile scaling", magic_missile.notes)

        healing = ClericDomain.objects.get(key="healing")
        self.assertEqual(healing.domain_spells["1"], "cure_light_wounds")
        self.assertEqual(healing.source_section, "src/data/domains.ts:healing")
        self.assertEqual(healing.source_status, SourceStatus.NEEDS_VERIFICATION)


class SeedWeaponImportTests(TestCase):
    def test_import_seed_weapons_preserves_traceability(self):
        out = StringIO()

        call_command("import_seed_weapons", stdout=out)

        self.assertEqual(Weapon.objects.count(), 5)

        longsword = Weapon.objects.get(key="longsword")
        self.assertEqual(longsword.name, "Longsword")
        self.assertEqual(longsword.category, "martial")
        self.assertEqual(longsword.damage, "1d8")
        self.assertEqual(longsword.critical, "19-20/x2")
        self.assertEqual(longsword.damage_type, "Slashing")
        self.assertEqual(longsword.properties["size"], "Medium")
        self.assertEqual(longsword.properties["proficiencies"], ["elf", "martial"])
        self.assertEqual(longsword.source.name, "NWN Wiki")
        self.assertEqual(longsword.source_section, "src/data/weapons.ts:longsword")
        self.assertEqual(longsword.source_status, SourceStatus.NEEDS_VERIFICATION)


class AllSeedDataImportTests(TestCase):
    def test_import_all_seed_data_runs_importers_in_order(self):
        out = StringIO()

        call_command("import_all_seed_data", stdout=out)

        self.assertEqual(RuleSource.objects.count(), 6)
        self.assertEqual(Race.objects.count(), 7)
        self.assertEqual(Subrace.objects.count(), 15)
        self.assertEqual(CharacterClass.objects.count(), 34)
        self.assertEqual(PrestigeClass.objects.count(), 2)
        self.assertEqual(Skill.objects.count(), 27)
        self.assertEqual(Feat.objects.count(), 3)
        self.assertEqual(SpellSchool.objects.count(), 3)
        self.assertEqual(Spell.objects.count(), 3)
        self.assertEqual(ClericDomain.objects.count(), 2)
        self.assertEqual(Weapon.objects.count(), 5)

        output = out.getvalue()
        self.assertIn("Imported all seed data.", output)


class OverviewPageTests(TestCase):
    def test_overview_displays_imported_rule_counts(self):
        call_command("import_all_seed_data", stdout=StringIO())

        response = self.client.get(reverse("rules:overview"))

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "POTM Character Creator")
        self.assertContains(response, "Races")
        self.assertContains(response, "Subraces")
        self.assertContains(response, "Weapons")
        self.assertContains(response, "Ravenloft: Prisoners of the Mist Wikia")

    def test_needs_verification_displays_unverified_records(self):
        call_command("import_all_seed_data", stdout=StringIO())

        response = self.client.get(reverse("rules:needs_verification"))

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Needs Verification")
        self.assertContains(response, "imported rule records still need source verification")
        self.assertContains(response, "Human")
        self.assertContains(response, "Longsword")
