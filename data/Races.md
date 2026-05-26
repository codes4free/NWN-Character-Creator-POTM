# Races

This document defines base races available in the POTM/NWN environment.

Each race contains:

- Attribute modifiers
- Size
- Movement speed
- Vision type
- Racial feats
- Skill bonuses
- Weapon familiarity
- Saving throw bonuses
- Hardcoded NWN rules
- POTM custom rules

---

# Human

## Overview

Humans are adaptable and ambitious. They receive additional feats and skill points during character creation and level progression.

## Properties

```json
{
  "name": "Human",
  "type": "Humanoid",
  "size": "Medium",
  "movementSpeed": 30,
  "vision": "Normal",
  "favoredClass": "Any",
  "levelAdjustment": 0,
  "sourceStatus": "verified"
}
```

## Attribute Modifiers

```json
{
  "str": 0,
  "dex": 0,
  "con": 0,
  "int": 0,
  "wis": 0,
  "cha": 0
}
```

## Racial Features

### Quick to Master

```json
{
  "name": "Quick to Master",
  "type": "Racial",
  "effect": "Gain one extra feat at character creation.",
  "sourceStatus": "verified"
}
```

### Skilled

```json
{
  "name": "Skilled",
  "type": "Racial",
  "effect": "+4 skill points at level 1 and +1 skill point every additional level.",
  "sourceStatus": "verified"
}
```

---

# Elf

```json
{
  "name": "Elf",
  "type": "Humanoid",
  "size": "Medium",
  "movementSpeed": 30,
  "vision": "Low-Light Vision",
  "favoredClass": "Wizard",
  "levelAdjustment": 0,
  "attributeModifiers": {
    "str": 0,
    "dex": 2,
    "con": -2,
    "int": 0,
    "wis": 0,
    "cha": 0
  },
  "skillBonuses": {
    "listen": 2,
    "search": 2,
    "spot": 2
  },
  "sourceStatus": "needs-verification"
}
```

---

# Dwarf

```json
{
  "name": "Dwarf",
  "type": "Humanoid",
  "size": "Medium",
  "movementSpeed": 20,
  "vision": "Darkvision",
  "favoredClass": "Fighter",
  "levelAdjustment": 0,
  "attributeModifiers": {
    "str": 0,
    "dex": 0,
    "con": 2,
    "int": 0,
    "wis": 0,
    "cha": -2
  },
  "sourceStatus": "needs-verification"
}
```

---

# Halfling

```json
{
  "name": "Halfling",
  "type": "Humanoid",
  "size": "Small",
  "movementSpeed": 20,
  "vision": "Normal",
  "favoredClass": "Rogue",
  "levelAdjustment": 0,
  "attributeModifiers": {
    "str": -2,
    "dex": 2,
    "con": 0,
    "int": 0,
    "wis": 0,
    "cha": 0
  },
  "sourceStatus": "needs-verification"
}
```
