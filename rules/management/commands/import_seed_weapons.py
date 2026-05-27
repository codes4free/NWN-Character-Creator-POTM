from pathlib import Path

from django.conf import settings
from django.core.management.base import BaseCommand

from rules.management.commands.import_seed_races import normalize_source_status
from rules.models import RuleSource, Weapon
from rules.seed_parsers import load_typescript_array


class Command(BaseCommand):
    help = "Import weapon seed records from src/data/weapons.ts."

    def add_arguments(self, parser):
        parser.add_argument(
            "--clear",
            action="store_true",
            help="Delete existing weapon rows before importing.",
        )

    def handle(self, *args, **options):
        if options["clear"]:
            Weapon.objects.all().delete()

        path = Path(settings.BASE_DIR) / "src" / "data" / "weapons.ts"
        weapons = load_typescript_array(path, "weapons")
        imported_weapons = self._import_weapons(weapons)

        self.stdout.write(
            self.style.SUCCESS(f"Imported seed weapons: {imported_weapons} weapons.")
        )

    def _import_weapons(self, records):
        count = 0

        for record in records:
            metadata = record["sourceMetadata"]

            Weapon.objects.update_or_create(
                key=record["id"],
                defaults={
                    "name": record["name"],
                    "category": record.get("category", ""),
                    "damage": record.get("damage", ""),
                    "critical": record.get("critical", ""),
                    "damage_type": record.get("damageType", ""),
                    "properties": {
                        "size": record.get("size", ""),
                        "weight": record.get("weight"),
                        "cost": record.get("cost"),
                        "proficiencies": record.get("proficiencies", []),
                    },
                    "source": self._get_source(metadata),
                    "source_section": f"src/data/weapons.ts:{record['id']}",
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
