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
];

export function getHumanBonusFeatRulePlaceholder(): string {
  return 'Human receives one bonus feat at level 1 (needs engine integration).';
}
