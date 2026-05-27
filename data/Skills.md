# Skills

Initial canonical skill records for Phase 3 Data Expansion.

The database seed now includes the full starter NWN skill catalog from `src/data/skills.ts`.
Every skill is imported with source tracking and `needs-verification` status until POTM-specific
class-skill availability and behavior are checked.

---

## hide (Hide)

```json
{
  "id": "hide",
  "name": "Hide",
  "keyAbility": "dex",
  "trainedOnly": false,
  "armorCheckPenaltyApplies": true,
  "sourceStatus": "needs-verification"
}
```

## spot (Spot)

```json
{
  "id": "spot",
  "name": "Spot",
  "keyAbility": "wis",
  "trainedOnly": false,
  "armorCheckPenaltyApplies": false,
  "sourceStatus": "needs-verification"
}
```

## spellcraft (Spellcraft)

```json
{
  "id": "spellcraft",
  "name": "Spellcraft",
  "keyAbility": "int",
  "trainedOnly": false,
  "armorCheckPenaltyApplies": false,
  "sourceStatus": "needs-verification"
}
```

## Full seeded list

- animal_empathy (Animal Empathy)
- appraise (Appraise)
- bluff (Bluff)
- concentration (Concentration)
- craft_armor (Craft Armor)
- craft_trap (Craft Trap)
- craft_weapon (Craft Weapon)
- disable_trap (Disable Trap)
- discipline (Discipline)
- heal (Heal)
- hide (Hide)
- intimidate (Intimidate)
- listen (Listen)
- lore (Lore)
- move_silently (Move Silently)
- open_lock (Open Lock)
- parry (Parry)
- perform (Perform)
- persuade (Persuade)
- pick_pocket (Pick Pocket)
- search (Search)
- set_trap (Set Trap)
- spellcraft (Spellcraft)
- spot (Spot)
- taunt (Taunt)
- tumble (Tumble)
- use_magic_device (Use Magic Device)
