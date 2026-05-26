# Race Schema

This document defines the canonical schema for **base races** and **subraces** used by the POTM Character Creator.

## 1) Purpose and Scope

The race schema must represent racial mechanics required for NWN + POTM character validation and calculations.

It is the source structure for values consumed by:
- `character.race` in `docs/CharacterSchema.md`
- race-related validation/calculation responsibilities in `docs/RulesEngine.md`

This schema is for **data modeling** only. Execution logic remains in the rules engine.

## 2) Canonical Base Race Object Shape

Each base race record should follow this structure:

```json
{
  "id": "human",
  "name": "Human",
  "type": "humanoid",
  "size": "medium",
  "movementSpeed": 30,
  "vision": "normal",
  "attributeModifiers": {
    "str": 0,
    "dex": 0,
    "con": 0,
    "int": 0,
    "wis": 0,
    "cha": 0
  },
  "skillBonuses": [],
  "saveBonuses": [],
  "racialFeats": [],
  "weaponFamiliarity": [],
  "specialRules": [],
  "restrictions": {
    "alignment": [],
    "classes": [],
    "deities": [],
    "settingSpecific": []
  },
  "sourceMetadata": {
    "source": "",
    "sourceUrl": "",
    "sourceNotes": "",
    "sourceStatus": "verified",
    "lastVerified": "2026-05-26"
  }
}
```

### Required fields

- `id` (string, machine-safe, unique)
- `name` (string, unique display label)
- `type` (string)
- `size` (enum-like string)
- `movementSpeed` (integer)
- `vision` (enum-like string)
- `attributeModifiers` (ability modifier object)
- `sourceMetadata` (source provenance + verification)

### Modifier and bonus containers

- `attributeModifiers`: racial ability changes.
- `skillBonuses`: list of skill bonus rules.
- `saveBonuses`: list of saving throw bonus rules.
- `racialFeats`: list of feats granted by race.
- `weaponFamiliarity`: list of race-specific weapon proficiency/familiarity rules.
- `specialRules`: free-form structured entries for mechanics not captured elsewhere.

### Restriction container

`restrictions` should store declarative constraints rather than engine logic, including:
- alignment constraints
- class constraints
- deity constraints
- POTM setting-specific constraints

## 3) Canonical Subrace Object Shape

Subrace entries extend a base race and may override or add modifiers.

```json
{
  "id": "aasimar",
  "name": "Aasimar",
  "parentRaceId": "human",
  "overrides": {
    "vision": "darkvision-60",
    "movementSpeed": 30
  },
  "attributeModifiers": {
    "str": 0,
    "dex": 0,
    "con": 0,
    "int": 0,
    "wis": 2,
    "cha": 2
  },
  "skillBonuses": [],
  "saveBonuses": [],
  "racialFeats": [],
  "weaponFamiliarity": [],
  "specialRules": [],
  "restrictions": {
    "alignment": [],
    "classes": [],
    "deities": [],
    "settingSpecific": []
  },
  "sourceMetadata": {
    "source": "",
    "sourceUrl": "",
    "sourceNotes": "",
    "sourceStatus": "needs-verification",
    "lastVerified": "2026-05-26"
  }
}
```

### Parent linkage

- `parentRaceId` is required and must reference an existing base race `id`.

### Override/extension behavior

- `overrides` is used for replacing inherited scalar fields (e.g., `vision`, `movementSpeed`).
- additive containers (`skillBonuses`, `racialFeats`, etc.) append unless explicitly configured otherwise.

### Conflict resolution strategy

If both base race and subrace modify the same value:
1. Apply base race defaults.
2. Apply subrace overrides for scalar fields.
3. Sum additive numeric modifiers where allowed.
4. If contradictory non-additive rules remain, emit validation error with stable code.

## 4) Validation Rules

## 4.1 Required keys and data types

- `id`, `name`, `type`, `size`, `vision`: non-empty strings.
- `movementSpeed`: integer >= 0.
- ability modifier fields: integers.
- `sourceMetadata.sourceStatus`: string (`verified` or `needs-verification`).

## 4.2 Value constraints

- `id` must be unique across all race/subrace entries.
- `name` should be unique for deterministic lookup.
- `size` should use controlled values (e.g., `small`, `medium`, `large`), as adopted by data policy.
- `movementSpeed` should match supported movement ruleset values.
- ability keys must be exactly: `str`, `dex`, `con`, `int`, `wis`, `cha`.

## 4.3 Verification status rule

Any uncertain or disputed entry must set:

```json
{ "sourceStatus": "needs-verification" }
```

via `sourceMetadata.sourceStatus`.

## 5) Source Metadata Requirements

Each race/subrace must include:
- `source`: human-readable source name
- `sourceUrl`: canonical page/thread URL
- `sourceNotes` (optional): context, caveats, or quote pointer
- `sourceStatus`: `verified` | `needs-verification`
- `lastVerified`: ISO date (`YYYY-MM-DD`)

## 6) Example Records

## 6.1 Base race example (Human)

```json
{
  "id": "human",
  "name": "Human",
  "type": "humanoid",
  "size": "medium",
  "movementSpeed": 30,
  "vision": "normal",
  "attributeModifiers": { "str": 0, "dex": 0, "con": 0, "int": 0, "wis": 0, "cha": 0 },
  "skillBonuses": [
    { "skill": "any", "value": 0, "notes": "No direct racial skill bonus; extra points handled by engine/class rules." }
  ],
  "saveBonuses": [],
  "racialFeats": [
    { "featId": "bonus-general-feat-level-1", "grantedAtLevel": 1 }
  ],
  "weaponFamiliarity": [],
  "specialRules": [
    { "code": "HUMAN_EXTRA_SKILL_POINT", "notes": "+1 skill point per level, +4 at level 1." }
  ],
  "restrictions": { "alignment": [], "classes": [], "deities": [], "settingSpecific": [] },
  "sourceMetadata": {
    "source": "NWN Wiki / POTM rules",
    "sourceUrl": "https://nwn.fandom.com/wiki",
    "sourceNotes": "Cross-check with POTM-specific overrides.",
    "sourceStatus": "needs-verification",
    "lastVerified": "2026-05-26"
  }
}
```

## 6.2 Subrace example (Aasimar)

```json
{
  "id": "aasimar",
  "name": "Aasimar",
  "parentRaceId": "human",
  "overrides": { "vision": "darkvision-60" },
  "attributeModifiers": { "str": 0, "dex": 0, "con": 0, "int": 0, "wis": 2, "cha": 2 },
  "skillBonuses": [],
  "saveBonuses": [],
  "racialFeats": [],
  "weaponFamiliarity": [],
  "specialRules": [],
  "restrictions": { "alignment": [], "classes": [], "deities": [], "settingSpecific": [] },
  "sourceMetadata": {
    "source": "POTM server rules",
    "sourceUrl": "https://nwnravenloft.fandom.com/wiki/Ravenloft:_Prisoners_of_the_Mist_Wikia",
    "sourceNotes": "Exact bonus/rule details require server-specific confirmation.",
    "sourceStatus": "needs-verification",
    "lastVerified": "2026-05-26"
  }
}
```

## 7) Definition of Done (Phase 1 Step 3)

This step is complete when:
- `docs/RaceSchema.md` defines implementation-ready schemas for race and subrace records.
- Required fields, constraints, and verification metadata are documented.
- Override/conflict behavior is documented for base race + subrace interactions.
- Terminology aligns with `docs/CharacterSchema.md` and `docs/RulesEngine.md`.
