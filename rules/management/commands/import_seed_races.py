from pathlib import Path

from django.conf import settings
from django.core.management.base import BaseCommand

from rules.models import Race, RuleSource, SourceStatus, Subrace
from rules.seed_parsers import load_typescript_array


def normalize_source_status(value: str) -> str:
    normalized = value.replace("-", "_")
    valid_values = {choice.value for choice in SourceStatus}
    if normalized not in valid_values:
        return SourceStatus.NEEDS_VERIFICATION
    return normalized


class Command(BaseCommand):
    help = "Import race and subrace seed records from src/data into the rules database."

    def add_arguments(self, parser):
        parser.add_argument(
            "--clear",
            action="store_true",
            help="Delete existing subrace and race rows before importing.",
        )

    def handle(self, *args, **options):
        if options["clear"]:
            Subrace.objects.all().delete()
            Race.objects.all().delete()

        src_data = Path(settings.BASE_DIR) / "src" / "data"
        races = load_typescript_array(src_data / "races.ts", "races")
        subraces = load_typescript_array(src_data / "subraces.ts", "subraces")

        imported_races = self._import_races(races)
        imported_subraces = self._import_subraces(subraces)

        self.stdout.write(
            self.style.SUCCESS(
                f"Imported seed races: {imported_races} races, {imported_subraces} subraces."
            )
        )

    def _import_races(self, records):
        count = 0

        for record in records:
            metadata = record["sourceMetadata"]
            source = self._get_source(metadata)
            racial_features = [
                {"kind": "seed_id", "value": record["id"]},
            ]

            if record.get("bonusFeats"):
                racial_features.append({"kind": "bonus_feats", "value": record["bonusFeats"]})

            if record.get("extraSkillPointsPerLevel") is not None:
                racial_features.append(
                    {
                        "kind": "extra_skill_points_per_level",
                        "value": record["extraSkillPointsPerLevel"],
                    }
                )

            if record.get("extraSkillPointsAtFirstLevel") is not None:
                racial_features.append(
                    {
                        "kind": "extra_skill_points_at_first_level",
                        "value": record["extraSkillPointsAtFirstLevel"],
                    }
                )

            Race.objects.update_or_create(
                key=record["id"],
                defaults={
                    "name": record["name"],
                    "creature_type": record.get("type", ""),
                    "size": record.get("size", ""),
                    "movement_speed": record.get("movementSpeed"),
                    "vision": record.get("vision", ""),
                    "favored_class": record.get("favoredClass", ""),
                    "level_adjustment": record.get("levelAdjustment", 0),
                    "attribute_modifiers": record.get("attributeModifiers", {}),
                    "skill_bonuses": record.get("skillBonuses", {}),
                    "racial_features": racial_features,
                    "source": source,
                    "source_section": f"src/data/races.ts:{record['id']}",
                    "source_status": normalize_source_status(metadata.get("sourceStatus", "")),
                    "notes": metadata.get("sourceNotes", ""),
                },
            )
            count += 1

        return count

    def _import_subraces(self, records):
        count = 0

        for record in records:
            metadata = record["sourceMetadata"]
            source = self._get_source(metadata)
            base_race = Race.objects.get(key=record["parentRaceId"])

            Subrace.objects.update_or_create(
                key=record["id"],
                defaults={
                    "name": record["name"],
                    "base_race": base_race,
                    "attribute_modifiers": record.get("attributeModifiers", {}),
                    "skill_bonuses": record.get("skillBonuses", {}),
                    "special_rules": [{"kind": "seed_id", "value": record["id"]}],
                    "source": source,
                    "source_section": f"src/data/subraces.ts:{record['id']}",
                    "source_status": normalize_source_status(metadata.get("sourceStatus", "")),
                    "notes": metadata.get("sourceNotes", ""),
                },
            )
            count += 1

        return count

    def _get_source(self, metadata):
        source_name = metadata.get("source", "Unknown source")
        source_url = metadata.get("sourceUrl", "")

        source, _ = RuleSource.objects.update_or_create(
            name=source_name,
            defaults={"url": source_url},
        )
        return source
