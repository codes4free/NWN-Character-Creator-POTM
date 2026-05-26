# Feats

Initial canonical feat records for Phase 3 Data Expansion.

---

## power_attack (Power Attack)

```json
{
  "id": "power_attack",
  "name": "Power Attack",
  "type": "general",
  "repeatable": false,
  "prerequisites": {
    "minimumBaseAttackBonus": 1,
    "attributes": [{ "ability": "str", "minimum": 13 }]
  },
  "stacking": {
    "allowDuplicates": false,
    "maxSelections": 1
  },
  "sourceStatus": "needs-verification"
}
```

## dodge (Dodge)

```json
{
  "id": "dodge",
  "name": "Dodge",
  "type": "general",
  "repeatable": false,
  "prerequisites": {
    "attributes": [{ "ability": "dex", "minimum": 13 }]
  },
  "stacking": {
    "allowDuplicates": false,
    "maxSelections": 1
  },
  "sourceStatus": "needs-verification"
}
```

## weapon_focus (Weapon Focus)

```json
{
  "id": "weapon_focus",
  "name": "Weapon Focus",
  "type": "fighter_bonus",
  "repeatable": true,
  "prerequisites": {
    "minimumBaseAttackBonus": 1
  },
  "stacking": {
    "allowDuplicates": true,
    "maxSelections": 20
  },
  "sourceStatus": "needs-verification"
}
```
