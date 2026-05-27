# POTM Character Creator

A spec-driven web app for creating Neverwinter Nights / Ravenloft: Prisoners of the Mist characters.

## Purpose

This project helps players create valid characters by calculating and validating:

- Race and subrace modifiers
- Class progression
- Attributes
- Skills
- Feats
- Spells
- Cleric domains
- Prestige class requirements
- POTM-specific restrictions

## Project Status

Python/Django foundation phase.

The current implementation contains:

- Django project scaffolding
- Initial rules database models
- Source tracking for rule verification
- Django Admin registration for rule data management
- A seed command for the research links in `docs/ResearchLinks.md`

## Development Philosophy

Rules first. UI second.

The application should not guess or hardcode rules inside the interface. Rule data belongs in `/data` or `src/data`, while calculation and validation belong in `src/engine`.

## Main Documentation

- `docs/ProjectOverview.md`
- `docs/CharacterSchema.md`
- `docs/RulesEngine.md`
- `docs/DevelopmentRoadmap.md`
- `docs/CodexNextPrompt.md`

## Local Django Setup

```bash
python -m venv .venv
.venv/Scripts/python -m pip install -r requirements.txt
.venv/Scripts/python manage.py migrate
.venv/Scripts/python manage.py seed_rule_sources
.venv/Scripts/python manage.py import_seed_races
.venv/Scripts/python manage.py import_seed_core_rules
.venv/Scripts/python manage.py import_seed_magic
.venv/Scripts/python manage.py import_seed_weapons
.venv/Scripts/python manage.py import_all_seed_data
.venv/Scripts/python manage.py runserver
```

On Linux servers, use `.venv/bin/python` instead of `.venv/Scripts/python`.

## Data Import Commands

- `seed_rule_sources`: creates the initial source records from `docs/ResearchLinks.md`.
- `import_seed_races`: imports base races and subraces from `src/data/races.ts` and `src/data/subraces.ts`.
- `import_seed_core_rules`: imports classes, prestige classes, skills, and feats from `src/data/`.
- `import_seed_magic`: imports spell schools, spells, and cleric domains from `src/data/`.
- `import_seed_weapons`: imports the starter weapon catalog from `src/data/weapons.ts`.
- `import_all_seed_data`: runs all seed importers in dependency order.

## Web Pages

- `/`: rule database overview with imported data counts and source links.
- `/characters/`: online character sheet list.
- `/characters/new/`: create a basic character sheet from imported race/subrace data.
- `/characters/<id>/edit/`: edit an existing character sheet.
- `/characters/<id>/classes/`: edit class level progression.
- `/characters/<id>/skills/`: edit skill ranks and track spent/unspent skill points.
- `/characters/<id>/feats/`: select feats from the imported feat database.
- `/admin/`: Django Admin for managing rule records.

## Character Creation Rules

New character sheets use a 30-point ability score budget.

- All base ability scores start at 8.
- Increasing scores up to 14 costs 1 point per increase.
- Increasing scores to 15 or 16 costs 2 points per increase.
- Increasing scores to 17 or 18 costs 3 points per increase.
- Base race modifiers are shown as part of the starting sheet score during creation.
- Subrace modifiers are applied after point-buy and base race modifiers.

Character sheets require a starting class from the imported class database. The class progression editor can then update one or more class level totals, including multiclass combinations.

Class data is seeded from `src/data/plannerClasses.ts`, extracted from `Ravenloft_Character_Planner.xlsx`, and currently includes 34 class progression records.

At character level 20 or higher, every selected class in a multiclass build must have at least 5 levels.

Character detail pages follow a build-sheet format inspired by NWN2DB: build header, section links, summary, ability table, attack bonuses, class progression, skills, and notes.

The skills module imports the full starter NWN skill catalog from `src/data/skills.ts`. It spends 1 point per class-skill rank and 2 points per cross-class rank, then caps ranks at character level + 3 for class skills and half that for cross-class skills. Class-skill mappings are still marked for POTM verification.

The feats module stores selected feats on a character sheet and displays their imported type, source status, and summary. Feat prerequisite validation is still a future rules-engine step.

## Data Files

- `data/Races.md`
- `data/Subraces.md`
- `data/Classes.md`
- `data/PrestigeClasses.md`
- `data/Skills.md`
- `data/Feats.md`
- `data/Spells.md`
- `data/SpellSchools.md`
- `data/ClericDomains.md`
- `data/Weapons.md`
