# Class Progression Audit

Source workbook:

`C:\Users\Fernando\Downloads\Ravenloft_Character_Planner.xlsx`

## Workbook Structure

- `Template`: character planner sheet.
- `Class Table`: class progression lookup table.

The `Template` sheet builds each character level by looking up rows in `Class Table` using a key like:

```text
<class level inside class> <class name>
```

Example:

```text
1 Rogue
2 Rogue
1 Hexblade
```

## Class Table Columns

Important columns found in `Class Table`:

- `Level`
- `Class`
- `HP`
- `BAB`
- `Skill`
- `Fort`
- `Reflex`
- `Will`
- `Class Bonus Feat`
- `Actual BAB`

The table stores per-level progression, not only class-level summaries.

## Classes Found

The workbook contains 34 class/progression entries:

- Arcane Archer
- Assassin
- Barbarian
- Bard
- Beguiler
- Black Powder Avenger
- Blackguard
- Cleric
- Crypt Raider
- Dirgist
- Divine Champion
- Dragon Disciple
- Druid
- Dwarven Defender
- Favored Soul
- Fighter
- Grimetrekker
- Hallowed Witch
- Hexblade
- Monk
- Monster Hunter
- Paladin
- Pale Master
- People's Champion
- Ranger
- Rogue
- Shadowdancer
- Shifter
- Sorcerer
- Voodan
- Warlock
- Warmage
- Weapon Master
- Wizard

## Current App Gap

The current Django database seed only imports:

- Cleric
- Fighter
- Rogue
- Wizard

This means the class progression editor is structurally ready, but the class database is incomplete.

## Point-Buy Confirmation

The workbook uses the same corrected ability point-buy curve now implemented in the app:

- 9-14: 1 point per increase
- 15-16: 2 points per increase
- 17-18: 3 points per increase

## Recommended Next Step

Create a structured class progression seed from the workbook and import all 34 classes into the Django database.

The seed should preserve:

- hit die
- skill points per level
- BAB progression
- save progression
- max level
- bonus feat levels
- source status

All entries should be marked `needs_verification` until confirmed against current POTM/NWN server rules.

## Extraction Note

The workbook's cached `Actual BAB` and save formula cells should not be trusted when read outside Excel. The structured seed derives per-level BAB and saves from the workbook's progression columns instead.

BAB:

- High: `level`
- Medium: `floor(level * 3 / 4)`
- Low: `floor(level / 2)`

Saving throws:

- High: `2 + floor(level / 2)`
- Low: `floor(level / 3)`
