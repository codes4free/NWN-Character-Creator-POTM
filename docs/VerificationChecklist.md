# Verification Checklist

This checklist tracks source-verification status for seeded records in `src/data/*`.

## Verification Policy

- Keep `sourceStatus: "needs-verification"` until confirmed against a concrete NWN/POTM source.
- Do not mark records `verified` without explicit source confirmation.
- Use next action values:
  - `verify`: source exists but details still need confirmation
  - `needs-source`: no sufficiently specific source reference yet
  - `confirmed`: verified against concrete source evidence

---

## Races (`src/data/races.ts`)

| id | name | sourceStatus | verification note | next action |
|---|---|---|---|---|
| human | Human | needs-verification | Playable race existence confirmed by NWN race listing; exact seeded bonuses still pending row-level citation. Source: https://nwn.fandom.com/wiki/Race | verify |
| elf | Elf | needs-verification | Playable race existence confirmed by NWN race listing; seeded modifiers/features still need per-row confirmation. Source: https://nwn.fandom.com/wiki/Race | verify |
| dwarf | Dwarf | needs-verification | Playable race existence confirmed by NWN race listing; seeded movement/defense details not fully source-linked yet. Source: https://nwn.fandom.com/wiki/Race | verify |
| halfling | Halfling | needs-verification | Playable race existence confirmed by NWN race listing; seeded modifier details still require explicit source confirmation. Source: https://nwn.fandom.com/wiki/Race | verify |
| gnome | Gnome | needs-verification | Playable race existence confirmed by NWN race listing; seeded utility details still require explicit source confirmation. Source: https://nwn.fandom.com/wiki/Race | verify |
| half_elf | Half-Elf | needs-verification | Playable race existence confirmed by NWN race listing; seeded neutral/stat detail confirmation pending. Source: https://nwn.fandom.com/wiki/Race | verify |
| half_orc | Half-Orc | needs-verification | Playable race existence confirmed by NWN race listing; seeded modifier specifics still require explicit source confirmation. Source: https://nwn.fandom.com/wiki/Race | verify |

## Subraces (`src/data/subraces.ts`)

| id | name | sourceStatus | verification note | next action |
|---|---|---|---|---|
| moon_elf | Moon Elf | needs-verification | Name appears on POTM subraces/templates listing; attribute modifiers not confirmed from source yet. Source: https://nwnravenloft.fandom.com/wiki/Subraces_%26_Templates | verify |
| sun_elf | Sun Elf | needs-verification | Name appears in broader NWN PW references; POTM-specific modifier values still unconfirmed. Source baseline: https://nwnravenloft.fandom.com/wiki/Subraces_%26_Templates | needs-source |
| shield_dwarf | Shield Dwarf | needs-verification | Name appears on POTM subraces/templates listing; seeded modifier details still require concrete confirmation. Source: https://nwnravenloft.fandom.com/wiki/Subraces_%26_Templates | verify |
| lightfoot_halfling | Lightfoot Halfling | needs-verification | Name appears on POTM subraces/templates listing; seeded modifier/feature details not yet confirmed. Source: https://nwnravenloft.fandom.com/wiki/Subraces_%26_Templates | verify |

## Classes (`src/data/classes.ts`)

| id | name | sourceStatus | verification note | next action |
|---|---|---|---|---|
| fighter | Fighter | needs-verification | Baseline progression seeded; POTM-specific class adjustments unconfirmed. | verify |
| wizard | Wizard | needs-verification | Baseline progression seeded; school/spell progression constraints need server confirmation. | verify |
| rogue | Rogue | needs-verification | Baseline progression seeded; sneak attack/skill-list server details unconfirmed. | verify |
| cleric | Cleric | needs-verification | Baseline progression seeded; domain/deity constraints require POTM confirmation. | verify |

## Prestige Classes (`src/data/prestigeClasses.ts`)

| id | name | sourceStatus | verification note | next action |
|---|---|---|---|---|
| arcane_archer | Arcane Archer | needs-verification | Prerequisites/progression seeded; eligibility details require server confirmation. | verify |
| assassin | Assassin | needs-verification | Skill/alignment requirements seeded; exact POTM gating still unconfirmed. | verify |

## Feats (`src/data/feats.ts`)

| id | name | sourceStatus | verification note | next action |
|---|---|---|---|---|
| power_attack | Power Attack | needs-verification | Baseline prerequisite/effect summary seeded; exact scaling requires confirmation. | verify |
| dodge | Dodge | needs-verification | Baseline prerequisite/effect summary seeded; targeting/bonus behavior unconfirmed. | verify |
| weapon_focus | Weapon Focus | needs-verification | Repeatable structure seeded; weapon-selection and edge rules need confirmation. | verify |

## Skills (`src/data/skills.ts`)

| id | name | sourceStatus | verification note | next action |
|---|---|---|---|---|
| hide | Hide | needs-verification | Baseline flags seeded; stealth/DC interactions on POTM need confirmation. | verify |
| spot | Spot | needs-verification | Baseline flags seeded; perception interactions on POTM need confirmation. | verify |
| spellcraft | Spellcraft | needs-verification | Baseline flags seeded; identification/counterspell behavior needs confirmation. | verify |

## Spells (`src/data/spells.ts`)

| id | name | sourceStatus | verification note | next action |
|---|---|---|---|---|
| magic_missile | Magic Missile | needs-verification | Baseline class/school mapping seeded; projectile scaling/immunity specifics unconfirmed. | verify |
| cure_light_wounds | Cure Light Wounds | needs-verification | Baseline mapping seeded; class list and healing behavior may differ on POTM. | verify |
| shield | Shield | needs-verification | Baseline mapping seeded; AC/deflection implementation details unconfirmed. | verify |

## Domains (`src/data/domains.ts`)

| id | name | sourceStatus | verification note | next action |
|---|---|---|---|---|
| healing | Healing | needs-verification | Granted power and 1-9 mapping seeded; exact POTM domain spell progression unconfirmed. | verify |
| war | War | needs-verification | Granted power and 1-9 mapping seeded; favored-weapon and spell list behavior unconfirmed. | verify |

---

## Alignment Check

Checklist IDs above are aligned with current seeded IDs in:
- `src/data/races.ts`
- `src/data/subraces.ts`
- `src/data/classes.ts`
- `src/data/prestigeClasses.ts`
- `src/data/feats.ts`
- `src/data/skills.ts`
- `src/data/spells.ts`
- `src/data/domains.ts`
