from django.core.management import call_command
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = "Import all structured seed data into the rules database."

    def add_arguments(self, parser):
        parser.add_argument(
            "--clear",
            action="store_true",
            help="Clear imported rule rows before importing all seed data.",
        )

    def handle(self, *args, **options):
        clear_flag = ["--clear"] if options["clear"] else []

        call_command("seed_rule_sources", stdout=self.stdout)
        call_command("import_seed_races", *clear_flag, stdout=self.stdout)
        call_command("import_seed_core_rules", *clear_flag, stdout=self.stdout)
        call_command("import_seed_magic", *clear_flag, stdout=self.stdout)
        call_command("import_seed_weapons", *clear_flag, stdout=self.stdout)

        self.stdout.write(self.style.SUCCESS("Imported all seed data."))
