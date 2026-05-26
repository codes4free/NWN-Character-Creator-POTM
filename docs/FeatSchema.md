# Feat Schema

This document defines the canonical schema for **feats** and feat-prerequisite metadata used by the POTM Character Creator.

## 1) Purpose and Scope

The feat schema models data needed to:
- represent feat definitions,
- validate feat legality and prerequisites,
- apply feat effects as deterministic engine inputs.

It directly supports:
- `character.feats` in `docs/CharacterSchema.md`
- feat validation responsibilities in `docs/RulesEngine.md`

This document defines data shape and constraints only. Execution logic belongs to the rules engine.

## 2) Canonical Feat Object Shape

Each feat record should follow this structure:

```json
{
  "id": "power_attack",
  "name": "Power Attack",
  "type": "general",
  "repeatable": false,
  "prerequisites": {
    "minimumCharacterLevel": 1,
    "minimumBaseAttackBonus": 1,
    "attributes": [
      { "ability": "str", "operator": ">=", "value": 13 }
    ],
    "requiredClasses": [],
    "requiredRaces": [],
    "requiredFeats": [],
    "requiredSkills": [],
    "alignment": [],
    "deities": [],
    "spellcasting": null,
    "conditionGroups": []
  },
  "effects": {
    "passiveModifiers": [],
    "grantedActions": [],
    "ruleToggles": []
  },
  "stackingRules": {
    "allowDuplicates": false,
    "maxSelections": 1,
    "stackBehavior": "replace"
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
- `type` (enum-like string such as `general`, `fighter_bonus`, `epic`, `racial`)
- `repeatable` (boolean)
- `prerequisites` object
- `effects` object
- `stackingRules` object
- `sourceMetadata` object

### Prerequisite modeling

`prerequisites` supports:
- attributes (ability thresholds)
- base attack bonus
- class/race restrictions
- required feats
- required skills/ranks
- alignment/deity constraints
- spellcasting requirements
- grouped logical conditions (AND/OR)

### Effect modeling

`effects` should describe feat behavior declaratively:
- `passiveModifiers` (e.g., +2 skill bonus)
- `grantedActions` (e.g., toggled combat mode)
- `ruleToggles` (engine behavior switches)

## 3) Prerequisite/Effect Metadata Rules

### Deterministic prerequisite evaluation order

Engine should evaluate prerequisites in stable order:
1. basic scalar checks (`minimumCharacterLevel`, `minimumBaseAttackBonus`)
2. attribute checks
3. class/race/alignment/deity checks
4. required feat/skill checks
5. spellcasting checks
6. `conditionGroups` compound logic

### AND/OR condition groups

Use `conditionGroups` for composite requirements:

```json
[
  {
    "logic": "OR",
    "conditions": [
      { "type": "feat", "id": "weapon_focus_longsword" },
      { "type": "feat", "id": "weapon_focus_battleaxe" }
    ]
  }
]
```

### Repeatable and duplicate handling

- `repeatable: false` + `allowDuplicates: false` => feat can be selected once.
- `repeatable: true` requires explicit `maxSelections` and stacking behavior.
- `stackBehavior` examples: `replace`, `additive`, `highest-only`.

## 4) Validation Rules

### 4.1 Required keys and types

- `id`, `name`, `type`: non-empty strings.
- `repeatable`: boolean.
- `prerequisites`, `effects`, `stackingRules`: objects.
- `stackingRules.maxSelections`: integer >= 1.
- `sourceMetadata.sourceStatus`: `verified` or `needs-verification`.

### 4.2 Enum/value constraints

- `type` should be one of controlled feat categories adopted by the project.
- attribute operators must be controlled (`>=`, `>`, `=`, `<=`, `<`).
- skill prerequisite records must include numeric rank thresholds.
- `conditionGroups.logic` must be `AND` or `OR`.

### 4.3 Uniqueness constraints

- `id` must be globally unique in feat dataset.
- `name` should be unique for deterministic lookup.

### 4.4 Verification status handling

Any uncertain or disputed feat rule must be flagged with:

```json
{ "sourceStatus": "needs-verification" }
```

inside `sourceMetadata.sourceStatus`.

## 5) Source Metadata Requirements

Each feat entry must include:
- `source`: human-readable source title
- `sourceUrl`: canonical URL
- `sourceNotes` (optional)
- `sourceStatus`: `verified` | `needs-verification`
- `lastVerified`: ISO date (`YYYY-MM-DD`)

## 6) Example Records

### 6.1 General feat example (Power Attack)

```json
{
  "id": "power_attack",
  "name": "Power Attack",
  "type": "general",
  "repeatable": false,
  "prerequisites": {
    "minimumCharacterLevel": 1,
    "minimumBaseAttackBonus": 1,
    "attributes": [
      { "ability": "str", "operator": ">=", "value": 13 }
    ],
    "requiredClasses": [],
    "requiredRaces": [],
    "requiredFeats": [],
    "requiredSkills": [],
    "alignment": [],
    "deities": [],
    "spellcasting": null,
    "conditionGroups": []
  },
  "effects": {
    "passiveModifiers": [],
    "grantedActions": [
      { "actionId": "toggle_power_attack", "actionType": "combat_mode" }
    ],
    "ruleToggles": [
      { "code": "POWER_ATTACK_ENABLED", "value": true }
    ]
  },
  "stackingRules": {
    "allowDuplicates": false,
    "maxSelections": 1,
    "stackBehavior": "replace"
  },
  "sourceMetadata": {
    "source": "NWN Wiki",
    "sourceUrl": "https://nwn.fandom.com/wiki",
    "sourceNotes": "Verify any POTM-specific combat tuning.",
    "sourceStatus": "needs-verification",
    "lastVerified": "2026-05-26"
  }
}
```

### 6.2 Multi-part prerequisite feat example (Whirlwind Attack)

```json
{
  "id": "whirlwind_attack",
  "name": "Whirlwind Attack",
  "type": "general",
  "repeatable": false,
  "prerequisites": {
    "minimumCharacterLevel": 1,
    "minimumBaseAttackBonus": 4,
    "attributes": [
      { "ability": "dex", "operator": ">=", "value": 13 },
      { "ability": "int", "operator": ">=", "value": 13 }
    ],
    "requiredClasses": [],
    "requiredRaces": [],
    "requiredFeats": ["dodge", "mobility", "spring_attack", "combat_expertise"],
    "requiredSkills": [],
    "alignment": [],
    "deities": [],
    "spellcasting": null,
    "conditionGroups": []
  },
  "effects": {
    "passiveModifiers": [],
    "grantedActions": [
      { "actionId": "whirlwind_attack", "actionType": "active_ability" }
    ],
    "ruleToggles": []
  },
  "stackingRules": {
    "allowDuplicates": false,
    "maxSelections": 1,
    "stackBehavior": "replace"
  },
  "sourceMetadata": {
    "source": "NWN Wiki / POTM rules",
    "sourceUrl": "https://nwn.fandom.com/wiki",
    "sourceNotes": "Confirm any server-specific prerequisite modifications.",
    "sourceStatus": "needs-verification",
    "lastVerified": "2026-05-26"
  }
}
```

## 7) Definition of Done (Phase 1 Step 6)

This step is complete when:
- `docs/FeatSchema.md` defines implementation-ready feat record schema.
- Prerequisite and effect metadata are explicit and deterministic.
- Repeatable/stacking rules are documented.
- Required fields, constraints, and `sourceMetadata` standards are documented.
- Terminology aligns with `docs/CharacterSchema.md` and `docs/RulesEngine.md`.
