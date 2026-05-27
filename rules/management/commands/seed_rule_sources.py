from django.core.management.base import BaseCommand

from rules.models import RuleSource


SOURCE_FIXTURES = [
    {
        "name": "Ravenloft: Prisoners of the Mist Wikia",
        "url": "https://nwnravenloft.fandom.com/wiki/Ravenloft:_Prisoners_of_the_Mist_Wikia",
        "description": "POTM server rules and setting reference.",
    },
    {
        "name": "NWN Ravenloft Classes/Subclasses Forum Thread",
        "url": "https://www.nwnravenloft.com/forum/index.php?topic=57336",
        "description": "POTM class and subclass reference thread.",
    },
    {
        "name": "NWN Wiki",
        "url": "https://nwn.fandom.com/wiki",
        "description": "General Neverwinter Nights mechanics reference.",
    },
]


class Command(BaseCommand):
    help = "Seed the initial rule source links documented in docs/ResearchLinks.md."

    def handle(self, *args, **options):
        created = 0
        updated = 0

        for fixture in SOURCE_FIXTURES:
            _, was_created = RuleSource.objects.update_or_create(
                name=fixture["name"],
                defaults={
                    "url": fixture["url"],
                    "description": fixture["description"],
                },
            )

            if was_created:
                created += 1
            else:
                updated += 1

        self.stdout.write(
            self.style.SUCCESS(f"Seeded rule sources: {created} created, {updated} updated.")
        )
