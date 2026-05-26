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

Planning and specification phase.

## Development Philosophy

Rules first. UI second.

The application should not guess or hardcode rules inside the interface. Rule data belongs in `/data` or `src/data`, while calculation and validation belong in `src/engine`.

## Main Documentation

- `docs/ProjectOverview.md`
- `docs/CharacterSchema.md`
- `docs/RulesEngine.md`
- `docs/DevelopmentRoadmap.md`
- `docs/CodexNextPrompt.md`

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
