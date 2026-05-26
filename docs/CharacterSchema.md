# Character Schema

The Character Schema defines the full data structure used to create, validate, save, and export a POTM/NWN character sheet.

## Core Character Object

```json
{
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

## Identity

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

## Race

```json
{
  "baseRace": "",
  "subrace": "",
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

## Classes

```json
[
  {
    "className": "",
    "level": 1,
    "hitDie": "",
    "baseAttackBonusType": "",
    "fortitudeSave": "",
    "reflexSave": "",
    "willSave": "",
    "skillPointsPerLevel": 0,
    "classSkills": [],
    "bonusFeats": [],
    "specialAbilities": []
  }
]
```

## Attributes

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
  "racialModifiers": {},
  "levelUpModifiers": {},
  "featModifiers": {},
  "equipmentModifiers": {},
  "final": {}
}
```

## Skills

```json
{
  "availableSkillPoints": 0,
  "spentSkillPoints": 0,
  "skills": {
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

## Feats

```json
[
  {
    "name": "",
    "type": "",
    "source": "",
    "levelTaken": 1,
    "requirementsMet": true
  }
]
```

## Spells

```json
{
  "casterClasses": [],
  "knownSpells": [],
  "preparedSpells": [],
  "spellDC": {},
  "spellSlots": {}
}
```

## Validation

```json
{
  "isValid": false,
  "errors": [],
  "warnings": []
}
```
