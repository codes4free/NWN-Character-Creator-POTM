# Classes

Initial canonical base class records for Phase 3 Data Expansion.

---

## fighter (Fighter)

```json
{
  "id": "fighter",
  "name": "Fighter",
  "hitDie": "d10",
  "skillPointsPerLevel": 2,
  "baseAttackBonusProgression": "high",
  "saveProgressions": {
    "fortitude": "high",
    "reflex": "low",
    "will": "low"
  },
  "sourceStatus": "needs-verification"
}
```

## wizard (Wizard)

```json
{
  "id": "wizard",
  "name": "Wizard",
  "hitDie": "d4",
  "skillPointsPerLevel": 2,
  "baseAttackBonusProgression": "low",
  "saveProgressions": {
    "fortitude": "low",
    "reflex": "low",
    "will": "high"
  },
  "sourceStatus": "needs-verification"
}
```

## rogue (Rogue)

```json
{
  "id": "rogue",
  "name": "Rogue",
  "hitDie": "d6",
  "skillPointsPerLevel": 8,
  "baseAttackBonusProgression": "medium",
  "saveProgressions": {
    "fortitude": "low",
    "reflex": "high",
    "will": "low"
  },
  "sourceStatus": "needs-verification"
}
```

## cleric (Cleric)

```json
{
  "id": "cleric",
  "name": "Cleric",
  "hitDie": "d8",
  "skillPointsPerLevel": 2,
  "baseAttackBonusProgression": "medium",
  "saveProgressions": {
    "fortitude": "high",
    "reflex": "low",
    "will": "high"
  },
  "sourceStatus": "needs-verification"
}
```
