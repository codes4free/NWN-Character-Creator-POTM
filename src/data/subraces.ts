import type { SubraceRule } from '../types/race.js';

export const subraces: SubraceRule[] = [
  {
    id: 'moon_elf',
    name: 'Moon Elf',
    parentRaceId: 'elf',
    attributeModifiers: { dex: 2, con: -2 },
    sourceMetadata: {
      source: 'POTM server rules / NWN references',
      sourceUrl: 'https://nwnravenloft.fandom.com/wiki/Ravenloft:_Prisoners_of_the_Mist_Wikia',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Core ability modifiers likely align with elf baseline; verify exact server variant details.',
      lastVerified: '2026-05-26',
    },
  },
  {
    id: 'sun_elf',
    name: 'Sun Elf',
    parentRaceId: 'elf',
    attributeModifiers: { int: 2, con: -2 },
    sourceMetadata: {
      source: 'POTM server rules / NWN references',
      sourceUrl: 'https://nwnravenloft.fandom.com/wiki/Ravenloft:_Prisoners_of_the_Mist_Wikia',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Intelligence-focused variant is common; confirm exact implementation on POTM.',
      lastVerified: '2026-05-26',
    },
  },
  {
    id: 'shield_dwarf',
    name: 'Shield Dwarf',
    parentRaceId: 'dwarf',
    attributeModifiers: { con: 2, cha: -2 },
    sourceMetadata: {
      source: 'POTM server rules / NWN references',
      sourceUrl: 'https://nwnravenloft.fandom.com/wiki/Ravenloft:_Prisoners_of_the_Mist_Wikia',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Confirm if this subrace differs from base dwarf in POTM data.',
      lastVerified: '2026-05-26',
    },
  },
  {
    id: 'lightfoot_halfling',
    name: 'Lightfoot Halfling',
    parentRaceId: 'halfling',
    attributeModifiers: { dex: 2, str: -2 },
    sourceMetadata: {
      source: 'POTM server rules / NWN references',
      sourceUrl: 'https://nwnravenloft.fandom.com/wiki/Ravenloft:_Prisoners_of_the_Mist_Wikia',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Verify if stealth or movement bonuses differ from base halfling.',
      lastVerified: '2026-05-26',
    },
  },
];
