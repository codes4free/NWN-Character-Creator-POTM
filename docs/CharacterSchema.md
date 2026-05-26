# Character Schema

This document defines the canonical character data model for the POTM Character Creator.

## Goals

- Provide a stable, serializable shape for character creation, validation, and export.
- Keep rules/calculation logic outside the schema (in `src/engine`), while the schema stores inputs and derived outputs.
- Support both NWN baseline rules and POTM-specific extensions.

## Schema Versioning

Every saved character must include a schema version for forward compatibility.

```json
{
  "schemaVersion": "1.0.0",
  "character": {}
}
```

## Top-Level Object

```json
{
  "schemaVersion": "1.0.0",
  "character": {
    "identity": {},
    "race": {},
    "classes": [],
    "attributes": {},
    "skills": {},
    "feats": [],
    "spells": {},
    "equipment": {},
    "validation": {}
  }
}
```

## Field Specifications

### `character.identity`

Stores roleplay and profile metadata.

```json
{
  "name": "",
  "gender": "",
  "alignment": "",
  "deity": "",
  "background": "",
  "notes": ""
}
```

Rules:
- `name` is required and non-empty for export.
- `alignment` must be one of the supported alignments in rules data.
- `deity` may be empty for non-divine classes.

### `character.race`

Stores base race, subrace, and racial modifiers selected for this character.

```json
{
  "baseRace": "",
  "subrace": "",
  "size": "",
  "movementSpeed": 30,
  "vision": "",
  "racialFeats": [],
  "attributeModifiers": {
    "str": 0,
    "dex": 0,
    "con": 0,
    "int": 0,
    "wis": 0,
    "cha": 0
  },
  "skillBonuses": {},
  "specialRules": []
}
```

Rules:
- `baseRace` is required.
- `subrace` must be valid for selected `baseRace`.
- `attributeModifiers` are sourced from race/subrace data, not manually typed in UI.

### `character.classes`

Ordered level progression. One entry per character level.

```json
[
  {
    "level": 1,
    "className": "",
    "isPrestige": false,
    "hitDie": "d8",
    "babProgression": "medium",
    "saveProgression": {
      "fortitude": "high",
      "reflex": "low",
      "will": "low"
    },
    "skillPointsPerLevel": 0,
    "classSkills": [],
    "bonusFeatsGranted": [],
    "specialAbilitiesGranted": []
  }
]
```

Rules:
- Levels must be contiguous starting at 1.
- `className` must map to an existing class/prestige class definition.
- Prestige levels must satisfy prerequisite checks at selection time.

### `character.attributes`

Tracks base scores, additive modifiers, and computed final results.

```json
{
  "base": {
    "str": 8,
    "dex": 8,
    "con": 8,
    "int": 8,
    "wis": 8,
    "cha": 8
  },
  "racialModifiers": {
    "str": 0,
    "dex": 0,
    "con": 0,
    "int": 0,
    "wis": 0,
    "cha": 0
  },
  "levelUpModifiers": {
    "str": 0,
    "dex": 0,
    "con": 0,
    "int": 0,
    "wis": 0,
    "cha": 0
  },
  "featModifiers": {},
  "equipmentModifiers": {},
  "final": {
    "str": 8,
    "dex": 8,
    "con": 8,
    "int": 8,
    "wis": 8,
    "cha": 8
  }
}
```

Rules:
- Ability values must be integers.
- Base ability score limits are rule-driven; schema stores values only.
- `final` is derived and should be recomputed by engine whenever inputs change.

### `character.skills`

Captures point pool, rank spending, and computed totals.

```json
{
  "availableSkillPoints": 0,
  "spentSkillPoints": 0,
  "entries": {
    "hide": {
      "ranks": 0,
      "ability": "dex",
      "classSkill": true,
      "costPerRank": 1,
      "miscBonus": 0,
      "total": 0
    }
  }
}
```

Rules:
- `spentSkillPoints` must never exceed `availableSkillPoints`.
- Cross-class rank and cost limits are validated by engine.
- `total` is derived.

### `character.feats`

Tracks feats acquired from all sources.

```json
[
  {
    "name": "",
    "type": "general",
    "source": "level",
    "levelTaken": 1,
    "requirementsMet": true,
    "notes": ""
  }
]
```

Rules:
- `name` must map to feat data.
- `source` must reflect acquisition path (`level`, `classBonus`, `racial`, etc.).
- Requirement validation is engine-driven.

### `character.spells`

Stores spellcasting selections by class.

```json
{
  "casterClasses": [],
  "knownSpells": [],
  "preparedSpells": [],
  "spellSlots": {},
  "spellDC": {}
}
```

Rules:
- Spell lists must be legal for class/domain/school constraints.
- Counts in `knownSpells`/`preparedSpells` may not exceed available slots.

### `character.equipment`

Optional equipment snapshot for derived modifiers.

```json
{
  "weaponSets": [],
  "armor": null,
  "shield": null,
  "items": []
}
```

### `character.validation`

Engine output for user-facing validity feedback.

```json
{
  "isValid": false,
  "errors": [],
  "warnings": []
}
```

Rules:
- `errors` block export as a legal character.
- `warnings` allow export but indicate uncertain or soft-rule states.

## TypeScript Reference Shape (Informational)

```ts
export type Ability = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha';

export type AbilityScores = Record<Ability, number>;

export interface CharacterDocument {
  schemaVersion: string;
  character: {
    identity: Record<string, unknown>;
    race: Record<string, unknown>;
    classes: Array<Record<string, unknown>>;
    attributes: Record<string, unknown>;
    skills: Record<string, unknown>;
    feats: Array<Record<string, unknown>>;
    spells: Record<string, unknown>;
    equipment: Record<string, unknown>;
    validation: {
      isValid: boolean;
      errors: string[];
      warnings: string[];
    };
  };
}
```

## Phase 1 Completion Criteria (Character Schema)

- Schema sections exist for identity, race, classes, attributes, skills, feats, spells, equipment, and validation.
- Clear distinction is documented between input fields and derived fields.
- Versioning strategy exists (`schemaVersion`).
- Schema is ready to be consumed by Phase 2 rules-engine implementation.
