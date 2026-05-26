# Class Schema

This document defines the canonical schema for **base classes** and **prestige classes** used by the POTM Character Creator.

## 1) Purpose and Scope

The class schema models all class-related mechanics needed for character progression, validation, and derived calculations.

It directly supports:
- `character.classes` in `docs/CharacterSchema.md`
- class/prestige validation responsibilities in `docs/RulesEngine.md`

This document defines data shape and validation constraints only. Execution logic remains in the rules engine.

## 2) Canonical Base Class Object Shape

Each base class record should follow this structure:

```json
{
  "id": "fighter",
  "name": "Fighter",
  "category": "base",
  "hitDie": "d10",
  "skillPointsPerLevel": 2,
  "baseAttackBonusProgression": "high",
  "saveProgressions": {
    "fortitude": "high",
    "reflex": "low",
    "will": "low"
  },
  "classSkills": [],
  "proficiencies": {
    "armor": [],
    "weapons": []
  },
  "spellcasting": {
    "isCaster": false,
    "castingAbility": null,
    "progression": null
  },
  "featGrants": [],
  "specialProgression": [],
  "restrictions": {
    "alignment": [],
    "deities": [],
    "multiclass": [],
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
- `category` (must be `base`)
- `hitDie` (string dice notation, e.g., `d6`, `d8`, `d10`, `d12`)
- `skillPointsPerLevel` (integer)
- `baseAttackBonusProgression` (enum-like string)
- `saveProgressions` object (`fortitude`, `reflex`, `will`)
- `classSkills` array
- `sourceMetadata` object

### Progression and grants

- `featGrants` stores class-granted feats by level.
- `specialProgression` stores level-indexed special abilities.
- `spellcasting` stores whether/how class gains spell access.

### Class restrictions

Use declarative `restrictions` fields rather than encoding logic in data:
- alignment constraints
- deity constraints
- multiclass constraints
- POTM-specific constraints

## 3) Canonical Prestige Class Object Shape

Prestige class records extend class progression data with prerequisites.

```json
{
  "id": "arcane_archer",
  "name": "Arcane Archer",
  "category": "prestige",
  "hitDie": "d8",
  "skillPointsPerLevel": 4,
  "baseAttackBonusProgression": "high",
  "saveProgressions": {
    "fortitude": "low",
    "reflex": "high",
    "will": "low"
  },
  "classSkills": [],
  "proficiencies": {
    "armor": [],
    "weapons": []
  },
  "spellcasting": {
    "isCaster": true,
    "castingAbility": "int",
    "progression": "special"
  },
  "prerequisites": {
    "minimumCharacterLevel": 0,
    "minimumBaseAttackBonus": 0,
    "requiredClasses": [],
    "requiredFeats": [],
    "requiredSkills": [],
    "requiredSpellcasting": null,
    "alignment": [],
    "deities": [],
    "custom": []
  },
  "featGrants": [],
  "specialProgression": [],
  "restrictions": {
    "alignment": [],
    "deities": [],
    "multiclass": [],
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

### Prerequisite block requirements

`prerequisites` should support checks for:
- minimum character level
- minimum base attack bonus
- required class history
- required feats
- required skill ranks
- required spellcasting capability
- alignment/deity restrictions
- custom setting-specific rules

## 4) Validation Rules

### 4.1 Required keys and types

- `id`, `name`, `category`, `hitDie`: non-empty strings.
- `skillPointsPerLevel`: integer >= 0.
- `baseAttackBonusProgression`: controlled value (`low`, `medium`, `high`).
- `saveProgressions.fortitude/reflex/will`: controlled value (`low`, `high`).
- `classSkills`, `featGrants`, `specialProgression`: arrays.
- `sourceMetadata.sourceStatus`: `verified` or `needs-verification`.

### 4.2 Enum/value constraints

- `category` must be exactly `base` or `prestige`.
- `hitDie` should match supported dice notation (`d4`, `d6`, `d8`, `d10`, `d12`).
- `spellcasting.castingAbility` should be one of: `str`, `dex`, `con`, `int`, `wis`, `cha`, or `null` if not caster.

### 4.3 Uniqueness constraints

- `id` must be globally unique across base and prestige class datasets.
- `name` should be unique for deterministic lookup.

### 4.4 Verification status handling

Any uncertain or disputed class rule must be flagged:

```json
{ "sourceStatus": "needs-verification" }
```

in `sourceMetadata.sourceStatus`.

## 5) Source Metadata Requirements

Each class/prestige class entry must include:
- `source`: human-readable source title
- `sourceUrl`: canonical URL
- `sourceNotes` (optional): relevant notes/caveats
- `sourceStatus`: `verified` | `needs-verification`
- `lastVerified`: ISO date (`YYYY-MM-DD`)

## 6) Example Records

### 6.1 Base class example (Fighter)

```json
{
  "id": "fighter",
  "name": "Fighter",
  "category": "base",
  "hitDie": "d10",
  "skillPointsPerLevel": 2,
  "baseAttackBonusProgression": "high",
  "saveProgressions": { "fortitude": "high", "reflex": "low", "will": "low" },
  "classSkills": ["discipline", "heal", "lore", "parry", "craft_armor", "craft_weapon"],
  "proficiencies": {
    "armor": ["light", "medium", "heavy", "shield"],
    "weapons": ["simple", "martial"]
  },
  "spellcasting": { "isCaster": false, "castingAbility": null, "progression": null },
  "featGrants": [
    { "level": 1, "grantType": "bonus_fighter_feat", "count": 1 },
    { "level": 2, "grantType": "bonus_fighter_feat", "count": 1 }
  ],
  "specialProgression": [],
  "restrictions": { "alignment": [], "deities": [], "multiclass": [], "settingSpecific": [] },
  "sourceMetadata": {
    "source": "NWN Wiki",
    "sourceUrl": "https://nwn.fandom.com/wiki",
    "sourceNotes": "Validate POTM-specific adjustments separately.",
    "sourceStatus": "needs-verification",
    "lastVerified": "2026-05-26"
  }
}
```

### 6.2 Prestige class example (Arcane Archer)

```json
{
  "id": "arcane_archer",
  "name": "Arcane Archer",
  "category": "prestige",
  "hitDie": "d8",
  "skillPointsPerLevel": 4,
  "baseAttackBonusProgression": "high",
  "saveProgressions": { "fortitude": "low", "reflex": "high", "will": "low" },
  "classSkills": ["craft_trap", "hide", "listen", "lore", "move_silently", "spot"],
  "proficiencies": { "armor": [], "weapons": ["simple", "martial"] },
  "spellcasting": { "isCaster": true, "castingAbility": "int", "progression": "special" },
  "prerequisites": {
    "minimumCharacterLevel": 0,
    "minimumBaseAttackBonus": 6,
    "requiredClasses": [],
    "requiredFeats": ["point_blank_shot", "weapon_focus_longbow_or_shortbow"],
    "requiredSkills": [],
    "requiredSpellcasting": { "arcaneSpellLevel": 1 },
    "alignment": [],
    "deities": [],
    "custom": []
  },
  "featGrants": [],
  "specialProgression": [
    { "level": 1, "feature": "enhance_arrow_1" }
  ],
  "restrictions": { "alignment": [], "deities": [], "multiclass": [], "settingSpecific": [] },
  "sourceMetadata": {
    "source": "NWN Wiki / POTM rules",
    "sourceUrl": "https://nwn.fandom.com/wiki",
    "sourceNotes": "Prerequisites and progression should be verified against POTM server rules.",
    "sourceStatus": "needs-verification",
    "lastVerified": "2026-05-26"
  }
}
```

## 7) Definition of Done (Phase 1 Step 4)

This step is complete when:
- `docs/ClassSchema.md` defines implementation-ready base/prestige class record schemas.
- Prerequisite modeling and progression modeling are explicitly documented.
- Required fields, constraints, and source metadata standards are documented.
- Terminology aligns with `docs/CharacterSchema.md` and `docs/RulesEngine.md`.
