# Rules Engine

The Rules Engine is responsible for calculating, validating, and enforcing character creation rules for NWN/POTM.

## Main Responsibilities

The engine must validate:

- Race and subrace compatibility
- Attribute points and racial modifiers
- Class progression
- Multiclass restrictions
- Skill point calculation
- Class skill and cross-class skill cost
- Feat requirements
- Spell access
- Cleric domain compatibility
- Alignment restrictions
- Prestige class requirements

## Attribute Rules

Attributes start from a base value and receive modifiers from:

- Race
- Subrace
- Level-up bonuses
- Feats
- Equipment
- Temporary effects

Formula:

```txt
finalAttribute = baseAttribute + racialModifier + levelUpModifier + featModifier + equipmentModifier
```

## Attribute Modifier

```txt
modifier = floor((attribute - 10) / 2)
```

Examples:

```txt
14 DEX = +2 modifier
8 INT = -1 modifier
```

## Skill Points

Base formula:

```txt
skillPointsPerLevel = classSkillPoints + INT modifier + racialBonus
```

At level 1:

```txt
totalSkillPoints = skillPointsPerLevel * 4
```

Human bonus:

```txt
Level 1: +4 skill points
Every later level: +1 skill point
```

## Skill Cost

```txt
Class Skill = 1 point per rank
Cross-Class Skill = 2 points per rank
```

## Feat Rules

Each feat must define requirements and effects.

```json
{
  "name": "",
  "type": "",
  "requirements": {
    "race": [],
    "class": [],
    "minimumLevel": 0,
    "minimumBAB": 0,
    "attributes": {},
    "requiredFeats": [],
    "requiredSkills": {}
  },
  "effects": []
}
```

The engine must check:

- Required race
- Required class
- Required level
- Required base attack bonus
- Required attributes
- Required previous feats
- Required skill ranks

## Class Rules

Each class must define:

```json
{
  "name": "",
  "hitDie": "d8",
  "skillPointsPerLevel": 4,
  "baseAttackBonus": "medium",
  "savingThrows": {
    "fortitude": "poor",
    "reflex": "good",
    "will": "poor"
  },
  "classSkills": [],
  "specialProgression": []
}
```

## Multiclass Rules

The engine should validate:

- Maximum level gap rules
- Prestige class requirements
- Alignment restrictions
- Class-specific restrictions
- POTM-specific restrictions

Unverified POTM-specific rules must be marked as `sourceStatus: "needs-verification"`.

## Spell Rules

Spells must validate:

- Caster class
- Spell level
- Spell school
- Ability score requirement
- Known spell limits
- Prepared spell limits
- Domain spell access

## Cleric Domain Rules

Each domain must define:

```json
{
  "name": "",
  "grantedPower": "",
  "domainSpells": {
    "1": "",
    "2": "",
    "3": "",
    "4": "",
    "5": "",
    "6": "",
    "7": "",
    "8": "",
    "9": ""
  },
  "allowedDeities": [],
  "alignmentRestrictions": []
}
```

## Validation Output

Every validation should return:

```json
{
  "valid": true,
  "severity": "error | warning | info",
  "code": "",
  "message": "",
  "source": ""
}
```

Example:

```json
{
  "valid": false,
  "severity": "error",
  "code": "FEAT_REQUIREMENT_NOT_MET",
  "message": "Power Attack requires STR 13.",
  "source": "Feats.md"
}
```
