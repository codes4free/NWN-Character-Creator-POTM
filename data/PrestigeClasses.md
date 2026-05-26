# Prestige Classes

Initial canonical prestige class records for Phase 3 Data Expansion.

---

## arcane_archer (Arcane Archer)

```json
{
  "id": "arcane_archer",
  "name": "Arcane Archer",
  "hitDie": "d8",
  "skillPointsPerLevel": 4,
  "baseAttackBonusProgression": "high",
  "saveProgressions": {
    "fortitude": "low",
    "reflex": "high",
    "will": "low"
  },
  "prerequisites": {
    "minimumBaseAttackBonus": 6,
    "requiredFeats": ["point_blank_shot", "weapon_focus_longbow_or_shortbow"],
    "requiredSpellcasting": {
      "type": "arcane",
      "minimumSpellLevel": 1
    }
  },
  "sourceStatus": "needs-verification"
}
```

## assassin (Assassin)

```json
{
  "id": "assassin",
  "name": "Assassin",
  "hitDie": "d6",
  "skillPointsPerLevel": 4,
  "baseAttackBonusProgression": "medium",
  "saveProgressions": {
    "fortitude": "low",
    "reflex": "high",
    "will": "low"
  },
  "prerequisites": {
    "requiredSkills": [
      { "id": "hide", "ranks": 8 },
      { "id": "move_silently", "ranks": 8 }
    ],
    "alignment": ["any-evil"]
  },
  "sourceStatus": "needs-verification"
}
```
