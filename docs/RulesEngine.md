# Rules Engine Responsibilities Specification

This document defines the responsibilities, boundaries, and contracts of the POTM Character Creator rules engine.

## Purpose

The rules engine is the deterministic business-logic layer that:
- calculates derived character values, and
- validates character legality against NWN + POTM rules data.

It consumes a character snapshot (see `docs/CharacterSchema.md`) and reference rules data (from `data/` or future `src/data`).

## 1) Scope Boundaries

### In Scope (engine owns)

- All mechanical calculations for character creation.
- Validation of rule legality and prerequisites.
- Structured validation outputs (`isValid`, `errors`, `warnings`).
- Traceability metadata that indicates which rule/source produced each result.

### Out of Scope (engine does not own)

- UI state management and user interaction behavior.
- Persistence and transport (database access, API adapters, file I/O orchestration).
- Presentation formatting (component labels, localization text rendering).
- Rule authoring workflows (editing markdown/data files).

## 2) Inputs and Outputs Contract

### Input Contract

The engine must accept:

1. `character`: a snapshot matching the Character Schema.
2. `referenceData`: rules datasets (races, classes, feats, spells, domains, etc.).
3. Optional execution options (strict mode, debug trace mode, etc.).

Illustrative shape:

```json
{
  "character": { "schemaVersion": "1.0.0", "character": {} },
  "referenceData": {
    "races": [],
    "subraces": [],
    "classes": [],
    "prestigeClasses": [],
    "skills": [],
    "feats": [],
    "spells": [],
    "domains": []
  },
  "options": {
    "strict": true,
    "includeTrace": true
  }
}
```

### Output Contract

The engine must return a stable validation envelope:

```json
{
  "isValid": false,
  "errors": [
    {
      "code": "FEAT_REQUIREMENT_NOT_MET",
      "path": "character.feats[2]",
      "message": "Power Attack requires STR 13.",
      "source": "data/Feats.md",
      "severity": "error"
    }
  ],
  "warnings": [
    {
      "code": "RULE_NEEDS_VERIFICATION",
      "path": "character.race.subrace",
      "message": "Subrace rule is marked unverified.",
      "source": "data/Subraces.md",
      "severity": "warning"
    }
  ],
  "derived": {
    "attributes": {},
    "skillPoints": {}
  }
}
```

Output guarantees:
- `isValid` is `true` only when `errors.length === 0`.
- `errors` and `warnings` are always arrays (never `null`).
- `code` values are stable and machine-readable for consumers.

## 3) Initial Responsibility Modules

## 3.1 Attribute Module

Responsibilities:
- Compute ability modifiers from final scores.
- Compute final ability scores from base + racial + level + feat + equipment modifiers.
- Validate score bounds and integer constraints.

Non-responsibilities:
- UI point-buy UX decisions.

## 3.2 Skill Module

Responsibilities:
- Calculate available skill points per level and total.
- Apply class vs cross-class cost rules.
- Validate rank caps and spent-point totals.

Non-responsibilities:
- Skill tooltip formatting or UI grouping.

## 3.3 Feat Validation Module

Responsibilities:
- Evaluate feat prerequisites (attributes, BAB, level, class/race constraints, required feats/skills).
- Emit deterministic failure codes for unmet requirements.

Non-responsibilities:
- Deciding which feats to recommend to users.

## 3.4 Class/Prestige Qualification Module

Responsibilities:
- Validate class progression legality.
- Validate prestige class eligibility at each selected level.
- Validate alignment/class restriction interactions.

Non-responsibilities:
- Character build strategy advice.

## 3.5 Spell/Domain Eligibility Module

Responsibilities:
- Validate known/prepared spells against class/domain/school restrictions.
- Validate caster ability score requirements and slot constraints.

Non-responsibilities:
- Spellbook UI ordering or filtering behavior.

## 4) Rule Source-of-Truth Contract

- Engine rule data comes from `data/` (or future `src/data`).
- Engine logic must not hardcode canonical race/class/feat/spell/domain tables.
- Uncertain or disputed rules must be marked in data with `sourceStatus: "needs-verification"`.
- Engine should convert such uncertainty into warnings when relevant.

## 5) Determinism and Traceability

Determinism requirements:
- Same inputs + same reference data => same outputs.
- No hidden dependency on runtime-global mutable state.

Traceability requirements:
- Each emitted error/warning should include a stable `code`.
- Each emitted error/warning should include a `source` reference path to the originating rule dataset.
- Optional trace mode may include intermediate calculations for debugging.

## 6) Non-Goals (to prevent scope creep)

- No UI rendering or form orchestration.
- No persistence-layer implementation.
- No network/API transport concerns.
- No speculative auto-correction of illegal builds.
- No balancing decisions beyond encoded rule data.

## 7) Definition of Done (Phase 1 Step: Rules Engine Responsibilities)

This step is complete when:
- `docs/RulesEngine.md` clearly defines module responsibilities.
- Input and output contracts are documented.
- In-scope vs out-of-scope boundaries are explicit.
- Source-of-truth and determinism/traceability expectations are explicit.
- Non-goals are listed to constrain future implementation.
