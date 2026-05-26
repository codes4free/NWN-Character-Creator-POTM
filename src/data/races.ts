import type { RaceRule } from '../types/race.js';

export const races: RaceRule[] = [
  {
    id: 'human',
    name: 'Human',
    attributeModifiers: {},
    bonusFeats: ['bonus-general-feat-level-1'],
    extraSkillPointsPerLevel: 1,
    extraSkillPointsAtFirstLevel: 4,
    sourceMetadata: {
      source: 'NWN Wiki / POTM rules',
      sourceUrl: 'https://nwn.fandom.com/wiki',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Confirm exact server-specific implementation.',
      lastVerified: '2026-05-26',
    },
  },
  {
    id: 'elf',
    name: 'Elf',
    attributeModifiers: { dex: 2, con: -2 },
    sourceMetadata: {
      source: 'NWN Wiki',
      sourceUrl: 'https://nwn.fandom.com/wiki',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Skill bonus and racial feature details need POTM confirmation.',
      lastVerified: '2026-05-26',
    },
  },
  {
    id: 'dwarf',
    name: 'Dwarf',
    attributeModifiers: { con: 2, cha: -2 },
    sourceMetadata: {
      source: 'NWN Wiki',
      sourceUrl: 'https://nwn.fandom.com/wiki',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Movement/defensive racial details need server verification.',
      lastVerified: '2026-05-26',
    },
  },
  {
    id: 'halfling',
    name: 'Halfling',
    attributeModifiers: { str: -2, dex: 2 },
    sourceMetadata: {
      source: 'NWN Wiki',
      sourceUrl: 'https://nwn.fandom.com/wiki',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Saving-throw and movement specifics need server verification.',
      lastVerified: '2026-05-26',
    },
  },
  {
    id: 'gnome',
    name: 'Gnome',
    attributeModifiers: { con: 2, str: -2 },
    sourceMetadata: {
      source: 'NWN Wiki',
      sourceUrl: 'https://nwn.fandom.com/wiki',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Illusion and racial utility features require POTM validation.',
      lastVerified: '2026-05-26',
    },
  },
  {
    id: 'half_elf',
    name: 'Half-Elf',
    attributeModifiers: {},
    sourceMetadata: {
      source: 'NWN Wiki',
      sourceUrl: 'https://nwn.fandom.com/wiki',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Diplomacy/listen/spot details may vary by server.',
      lastVerified: '2026-05-26',
    },
  },
  {
    id: 'half_orc',
    name: 'Half-Orc',
    attributeModifiers: { str: 2, int: -2, cha: -2 },
    sourceMetadata: {
      source: 'NWN Wiki',
      sourceUrl: 'https://nwn.fandom.com/wiki',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Confirm favored class and edge-case restrictions in POTM.',
      lastVerified: '2026-05-26',
    },
  },
];

export function getHumanBonusFeatRulePlaceholder(): string {
  return 'Human receives one bonus feat at level 1 (needs engine integration).';
}
