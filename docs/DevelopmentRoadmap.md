# Development Roadmap

## Phase 1: Specification

- Define character schema
- Define rules engine responsibilities
- Define race schema
- Define class schema
- Define skill schema
- Define feat schema

## Phase 2: Core Engine

- Attribute modifier calculation
- Final attribute calculation
- Skill point calculation
- Skill cost calculation
- Basic validation output
- Human racial bonus handling

## Phase 2A: Database Foundation

- Create Django project scaffold
- Define rule source tracking
- Define initial database tables for rules data
- Register rule data models in Django Admin
- Seed documented research links as database sources
- Add import commands for structured markdown/data migration

## Phase 3: Data Expansion

- Add base races
- Add POTM subraces
- Add base classes
- Add prestige classes
- Add feats
- Add skills
- Add spells
- Add domains

## Phase 4: User Interface

- Character creation wizard
- Attribute editor
- Race/subrace selector
- Class progression editor
- Skill allocation screen
- Feat selector
- Spell selector
- Validation panel

## Phase 5: Export/Import

- Export character to JSON
- Import character from JSON
- Export printable character sheet
- Future option: PDF export

## Phase 6: Verification

- Compare rules against NWN and POTM references
- Mark uncertain rules
- Create tests for rule calculations
