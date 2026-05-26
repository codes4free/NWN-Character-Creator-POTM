# Skill Schema

This document defines the canonical schema for **skills** and skill-rule metadata used by the POTM Character Creator.

## 1) Purpose and Scope

The skill schema models data needed to:
- represent skill definitions,
- calculate skill point usage and totals,
- validate legal rank allocation under NWN + POTM rules.

It directly supports:
- `character.skills` in `docs/CharacterSchema.md`
- skill-point and skill-cost responsibilities in `docs/RulesEngine.md`

This document defines data shape and constraints only. Execution logic belongs to the rules engine.

## 2) Canonical Skill Object Shape

Each skill record should follow this structure:

```json
{
  "id": "hide",
  "name": "Hide",
  "keyAbility": "dex",
  "trainedOnly": false,
  "armorCheckPenaltyApplies": true,
  "classSkillBehavior": {
    "defaultClassSkill": false,
    "classOverrides": []
  },
  "ruleFlags": {
    "usableUntrained": true,
    "requiresToolkit": false,
    "requiresEnvironment": false,
    "synergyRules": []
  },
  "rankCostRules": {
    "classSkillCostPerRank": 1,
    "crossClassCostPerRank": 2,
    "maxRankFormula": {
      "classSkill": "level + 3",
      "crossClass": "(level + 3) / 2"
    },
    "multiclassPolicy": "any-current-class-makes-class-skill"
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
- `name` (string, unique display name)
- `keyAbility` (`str` | `dex` | `con` | `int` | `wis` | `cha`)
- `trainedOnly` (boolean)
- `armorCheckPenaltyApplies` (boolean)
- `rankCostRules` object
- `sourceMetadata` object

### Class-skill relationship modeling

- `classSkillBehavior.defaultClassSkill`: global default for the skill.
- `classSkillBehavior.classOverrides`: class-specific exceptions, e.g. skill is class skill for certain classes.

### Optional rule flags

Use `ruleFlags` for additional behavior metadata, such as:
- untrained usage restrictions,
- toolkit/instrument requirements,
- environmental prerequisites,
- synergy rules and conditional bonuses.

## 3) Rank/Cost Rule Metadata

`rankCostRules` must describe point cost and caps declaratively.

### Class vs cross-class cost

- `classSkillCostPerRank` (typically `1`)
- `crossClassCostPerRank` (typically `2`)

### Rank cap representation

Use formula strings or equivalent structured tokens:
- class skill max ranks: `level + 3`
- cross-class max ranks: `(level + 3) / 2`

Engine implementation should interpret formulas deterministically.

### Multiclass interactions

Use `multiclassPolicy` to define how class-skill status is determined for multiclass characters.

Recommended default policy:
- `any-current-class-makes-class-skill`

If POTM-specific behavior differs, record as verified data and update `multiclassPolicy` accordingly.

## 4) Validation Rules

### 4.1 Required keys and types

- `id`, `name`: non-empty strings.
- `keyAbility`: controlled enum value.
- `trainedOnly`, `armorCheckPenaltyApplies`: booleans.
- `rankCostRules.classSkillCostPerRank`, `rankCostRules.crossClassCostPerRank`: positive numbers.
- `sourceMetadata.sourceStatus`: `verified` or `needs-verification`.

### 4.2 Enum/value constraints

- `keyAbility` must be one of: `str`, `dex`, `con`, `int`, `wis`, `cha`.
- Cost fields should be > 0.
- Max-rank formulas must be parseable by the engine formula interpreter.

### 4.3 Uniqueness constraints

- `id` must be globally unique in the skills dataset.
- `name` should be unique for deterministic lookup.

### 4.4 Verification status handling

Any uncertain or disputed rule must be flagged with:

```json
{ "sourceStatus": "needs-verification" }
```

inside `sourceMetadata.sourceStatus`.

## 5) Source Metadata Requirements

Each skill entry must include:
- `source`: human-readable source title
- `sourceUrl`: canonical URL
- `sourceNotes` (optional)
- `sourceStatus`: `verified` | `needs-verification`
- `lastVerified`: ISO date (`YYYY-MM-DD`)

## 6) Example Records

### 6.1 Complete skill example (Hide)

```json
{
  "id": "hide",
  "name": "Hide",
  "keyAbility": "dex",
  "trainedOnly": false,
  "armorCheckPenaltyApplies": true,
  "classSkillBehavior": {
    "defaultClassSkill": false,
    "classOverrides": [
      { "classId": "rogue", "isClassSkill": true },
      { "classId": "ranger", "isClassSkill": true }
    ]
  },
  "ruleFlags": {
    "usableUntrained": true,
    "requiresToolkit": false,
    "requiresEnvironment": true,
    "synergyRules": []
  },
  "rankCostRules": {
    "classSkillCostPerRank": 1,
    "crossClassCostPerRank": 2,
    "maxRankFormula": {
      "classSkill": "level + 3",
      "crossClass": "(level + 3) / 2"
    },
    "multiclassPolicy": "any-current-class-makes-class-skill"
  },
  "sourceMetadata": {
    "source": "NWN Wiki",
    "sourceUrl": "https://nwn.fandom.com/wiki",
    "sourceNotes": "Confirm POTM deviations for stealth checks and environment handling.",
    "sourceStatus": "needs-verification",
    "lastVerified": "2026-05-26"
  }
}
```

### 6.2 Class-skill vs cross-class behavior example (Spellcraft)

```json
{
  "id": "spellcraft",
  "name": "Spellcraft",
  "keyAbility": "int",
  "trainedOnly": false,
  "armorCheckPenaltyApplies": false,
  "classSkillBehavior": {
    "defaultClassSkill": false,
    "classOverrides": [
      { "classId": "wizard", "isClassSkill": true },
      { "classId": "sorcerer", "isClassSkill": true },
      { "classId": "bard", "isClassSkill": true }
    ]
  },
  "ruleFlags": {
    "usableUntrained": true,
    "requiresToolkit": false,
    "requiresEnvironment": false,
    "synergyRules": []
  },
  "rankCostRules": {
    "classSkillCostPerRank": 1,
    "crossClassCostPerRank": 2,
    "maxRankFormula": {
      "classSkill": "level + 3",
      "crossClass": "(level + 3) / 2"
    },
    "multiclassPolicy": "any-current-class-makes-class-skill"
  },
  "sourceMetadata": {
    "source": "NWN Wiki / POTM rules",
    "sourceUrl": "https://nwn.fandom.com/wiki",
    "sourceNotes": "Validate any server-specific cap or synergy modifications.",
    "sourceStatus": "needs-verification",
    "lastVerified": "2026-05-26"
  }
}
```

## 7) Definition of Done (Phase 1 Step 5)

This step is complete when:
- `docs/SkillSchema.md` defines implementation-ready skill record schema and rule metadata.
- Rank/cost modeling and multiclass behavior metadata are explicitly documented.
- Required fields, constraints, and `sourceMetadata` standards are documented.
- Terminology aligns with `docs/CharacterSchema.md` and `docs/RulesEngine.md`.
