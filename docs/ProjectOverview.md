# Project Overview

## Project Name

POTM Character Creator

## Goal

Create a web application for building character sheets for Neverwinter Nights Ravenloft: Prisoners of the Mist.

The app should behave like a D&D 3.5 / NWN character creator, while supporting POTM custom rules.

## Core Features

- Character identity creation
- Race and subrace selection
- Attribute assignment and modifier calculation
- Class and prestige class progression
- Skill point calculation
- Feat selection and validation
- Spell and spell school support
- Cleric domain support
- Weapon and proficiency support
- Character validation report
- Export/import character sheet

## Architecture Principle

The project must be spec-driven.

Rules must be described first, then implemented as typed data and pure validation functions.

The UI must consume the rules engine. It must not contain hardcoded gameplay rules.

## Main Data Areas

- Races
- Subraces
- Classes
- Prestige Classes
- Skills
- Feats
- Spells
- Spell Schools
- Cleric Domains
- Weapons
- Alignment Rules
- Deity Rules

## Important Note

POTM contains custom server rules. Any uncertain rule must be marked as needing verification instead of being invented.
