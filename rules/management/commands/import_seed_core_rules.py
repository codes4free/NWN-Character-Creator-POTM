from pathlib import Path

from django.conf import settings
from django.core.management.base import BaseCommand

from rules.management.commands.import_seed_races import normalize_source_status
from rules.models import CharacterClass, Feat, PrestigeClass, RuleSource, Skill
from rules.seed_parsers import load_typescript_array


class Command(BaseCommand):
    help = "Import class, prestige class, skill, and feat seed records from src/data."

    def add_arguments(self, parser):
        parser.add_argument(
            "--clear",
            action="store_true",
            help="Delete existing class, prestige class, skill, and feat rows before importing.",
        )

    def handle(self, *args, **options):
        if options["clear"]:
            Feat.objects.all().delete()
            PrestigeClass.objects.all().delete()
            CharacterClass.objects.all().delete()
            Skill.objects.all().delete()

        src_data = Path(settings.BASE_DIR) / "src" / "data"
        imported_classes = self._import_classes(
            load_typescript_array(src_data / "plannerClasses.ts", "plannerClasses")
        )
        imported_prestige_classes = self._import_prestige_classes(
            load_typescript_array(src_data / "prestigeClasses.ts", "prestigeClasses")
        )
        imported_skills = self._import_skills(
            load_typescript_array(src_data / "skills.ts", "skills")
        )
        imported_feats = self._import_feats(load_typescript_array(src_data / "feats.ts", "feats"))

        self.stdout.write(
            self.style.SUCCESS(
                "Imported seed core rules: "
                f"{imported_classes} classes, "
                f"{imported_prestige_classes} prestige classes, "
                f"{imported_skills} skills, "
                f"{imported_feats} feats."
            )
        )

    def _import_classes(self, records):
        count = 0

        for record in records:
            metadata = record["sourceMetadata"]
            CharacterClass.objects.update_or_create(
                key=record["id"],
                defaults={
                    "name": record["name"],
                    "hit_die": record.get("hitDie", ""),
                    "skill_points_per_level": record.get("skillPointsPerLevel"),
                    "base_attack_bonus": record.get("baseAttackBonusProgression", ""),
                    "saving_throws": record.get("saveProgressions", {}),
                    "class_skills": record.get("classSkills", []),
                    "special_progression": {
                        "maxLevel": record.get("maxLevel"),
                        "bonusFeatLevels": record.get("bonusFeatLevels", []),
                        "progression": record.get("progression", []),
                    },
                    "source": self._get_source(metadata),
                    "source_section": f"src/data/plannerClasses.ts:{record['id']}",
                    "source_status": normalize_source_status(metadata.get("sourceStatus", "")),
                    "notes": metadata.get("sourceNotes", ""),
                },
            )
            count += 1

        return count

    def _import_prestige_classes(self, records):
        count = 0

        for record in records:
            metadata = record["sourceMetadata"]
            PrestigeClass.objects.update_or_create(
                key=record["id"],
                defaults={
                    "name": record["name"],
                    "hit_die": record.get("hitDie", ""),
                    "skill_points_per_level": record.get("skillPointsPerLevel"),
                    "requirements": record.get("prerequisites", {}),
                    "class_skills": record.get("classSkills", []),
                    "special_progression": [
                        {"kind": "base_attack_bonus", "value": record.get("baseAttackBonusProgression", "")},
                        {"kind": "saving_throws", "value": record.get("saveProgressions", {})},
                    ],
                    "source": self._get_source(metadata),
                    "source_section": f"src/data/prestigeClasses.ts:{record['id']}",
                    "source_status": normalize_source_status(metadata.get("sourceStatus", "")),
                    "notes": metadata.get("sourceNotes", ""),
                },
            )
            count += 1

        return count

    def _import_skills(self, records):
        count = 0

        for record in records:
            metadata = record["sourceMetadata"]
            Skill.objects.update_or_create(
                key=record["id"],
                defaults={
                    "name": record["name"],
                    "ability": record.get("keyAbility", ""),
                    "trained_only": record.get("trainedOnly", False),
                    "armor_check_penalty": record.get("armorCheckPenaltyApplies", False),
                    "class_skill_ids": record.get("classSkillIds", []),
                    "description": "",
                    "source": self._get_source(metadata),
                    "source_section": f"src/data/skills.ts:{record['id']}",
                    "source_status": normalize_source_status(metadata.get("sourceStatus", "")),
                    "notes": metadata.get("sourceNotes", ""),
                },
            )
            count += 1

        return count

    def _import_feats(self, records):
        count = 0

        for record in records:
            metadata = record["sourceMetadata"]
            Feat.objects.update_or_create(
                key=record["id"],
                defaults={
                    "name": record["name"],
                    "feat_type": record.get("type", ""),
                    "requirements": record.get("prerequisites", {}),
                    "effects": [
                        record.get("effects", {}),
                        {"kind": "stacking", "value": record.get("stacking", {})},
                        {"kind": "repeatable", "value": record.get("repeatable", False)},
                    ],
                    "description": record.get("effects", {}).get("summary", ""),
                    "source": self._get_source(metadata),
                    "source_section": f"src/data/feats.ts:{record['id']}",
                    "source_status": normalize_source_status(metadata.get("sourceStatus", "")),
                    "notes": metadata.get("sourceNotes", ""),
                },
            )
            count += 1

        return count

    def _get_source(self, metadata):
        source, _ = RuleSource.objects.update_or_create(
            name=metadata.get("source", "Unknown source"),
            defaults={"url": metadata.get("sourceUrl", "")},
        )
        return source
