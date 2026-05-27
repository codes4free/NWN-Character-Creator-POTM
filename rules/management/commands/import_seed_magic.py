from pathlib import Path

from django.conf import settings
from django.core.management.base import BaseCommand

from rules.management.commands.import_seed_races import normalize_source_status
from rules.models import ClericDomain, RuleSource, SourceStatus, Spell, SpellSchool
from rules.seed_parsers import load_typescript_array


class Command(BaseCommand):
    help = "Import spell, spell school, and cleric domain seed records from src/data."

    def add_arguments(self, parser):
        parser.add_argument(
            "--clear",
            action="store_true",
            help="Delete existing domain, spell, and spell school rows before importing.",
        )

    def handle(self, *args, **options):
        if options["clear"]:
            ClericDomain.objects.all().delete()
            Spell.objects.all().delete()
            SpellSchool.objects.all().delete()

        src_data = Path(settings.BASE_DIR) / "src" / "data"
        spells = load_typescript_array(src_data / "spells.ts", "spells")
        domains = load_typescript_array(src_data / "domains.ts", "domains")

        imported_schools = self._import_spell_schools(spells)
        imported_spells = self._import_spells(spells)
        imported_domains = self._import_domains(domains)

        self.stdout.write(
            self.style.SUCCESS(
                "Imported seed magic rules: "
                f"{imported_schools} spell schools, "
                f"{imported_spells} spells, "
                f"{imported_domains} domains."
            )
        )

    def _import_spell_schools(self, spells):
        source, _ = RuleSource.objects.update_or_create(
            name="NWN Wiki / POTM rules",
            defaults={"url": "https://nwn.fandom.com/wiki"},
        )
        school_keys = sorted({spell["school"] for spell in spells})

        for school_key in school_keys:
            SpellSchool.objects.update_or_create(
                key=school_key,
                defaults={
                    "name": school_key.replace("_", " ").title(),
                    "source": source,
                    "source_section": f"src/data/spells.ts:school:{school_key}",
                    "source_status": SourceStatus.NEEDS_VERIFICATION,
                    "notes": "Seeded from spell school values in src/data/spells.ts.",
                },
            )

        return len(school_keys)

    def _import_spells(self, records):
        count = 0

        for record in records:
            metadata = record["sourceMetadata"]
            school = SpellSchool.objects.get(key=record["school"])

            Spell.objects.update_or_create(
                key=record["id"],
                defaults={
                    "name": record["name"],
                    "school": school,
                    "levels": {
                        class_key: record["level"]
                        for class_key in record.get("classes", [])
                    },
                    "components": [],
                    "source": self._get_source(metadata),
                    "source_section": f"src/data/spells.ts:{record['id']}",
                    "source_status": normalize_source_status(metadata.get("sourceStatus", "")),
                    "notes": metadata.get("sourceNotes", ""),
                },
            )
            count += 1

        return count

    def _import_domains(self, records):
        count = 0

        for record in records:
            metadata = record["sourceMetadata"]

            ClericDomain.objects.update_or_create(
                key=record["id"],
                defaults={
                    "name": record["name"],
                    "granted_power": record.get("grantedPower", ""),
                    "domain_spells": record.get("spellsByLevel", {}),
                    "source": self._get_source(metadata),
                    "source_section": f"src/data/domains.ts:{record['id']}",
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
