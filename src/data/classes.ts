import type { SourceMetadata } from '../types/rules.js';

export type BabProgression = 'low' | 'medium' | 'high';
export type SaveProgression = 'low' | 'high';

export interface BaseClassRule {
  id: string;
  name: string;
  hitDie: 'd4' | 'd6' | 'd8' | 'd10' | 'd12';
  skillPointsPerLevel: number;
  baseAttackBonusProgression: BabProgression;
  saveProgressions: {
    fortitude: SaveProgression;
    reflex: SaveProgression;
    will: SaveProgression;
  };
  sourceMetadata: SourceMetadata;
}

export const classes: BaseClassRule[] = [
  {
    id: 'fighter',
    name: 'Fighter',
    hitDie: 'd10',
    skillPointsPerLevel: 2,
    baseAttackBonusProgression: 'high',
    saveProgressions: { fortitude: 'high', reflex: 'low', will: 'low' },
    sourceMetadata: {
      source: 'NWN Wiki / POTM rules',
      sourceUrl: 'https://nwn.fandom.com/wiki',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Confirm any server-specific class-skill and progression changes.',
      lastVerified: '2026-05-26',
    },
  },
  {
    id: 'wizard',
    name: 'Wizard',
    hitDie: 'd4',
    skillPointsPerLevel: 2,
    baseAttackBonusProgression: 'low',
    saveProgressions: { fortitude: 'low', reflex: 'low', will: 'high' },
    sourceMetadata: {
      source: 'NWN Wiki / POTM rules',
      sourceUrl: 'https://nwn.fandom.com/wiki',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Spell progression and school restrictions require server verification.',
      lastVerified: '2026-05-26',
    },
  },
  {
    id: 'rogue',
    name: 'Rogue',
    hitDie: 'd6',
    skillPointsPerLevel: 8,
    baseAttackBonusProgression: 'medium',
    saveProgressions: { fortitude: 'low', reflex: 'high', will: 'low' },
    sourceMetadata: {
      source: 'NWN Wiki / POTM rules',
      sourceUrl: 'https://nwn.fandom.com/wiki',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Sneak attack and skill-list details may vary by server.',
      lastVerified: '2026-05-26',
    },
  },
  {
    id: 'cleric',
    name: 'Cleric',
    hitDie: 'd8',
    skillPointsPerLevel: 2,
    baseAttackBonusProgression: 'medium',
    saveProgressions: { fortitude: 'high', reflex: 'low', will: 'high' },
    sourceMetadata: {
      source: 'NWN Wiki / POTM rules',
      sourceUrl: 'https://nwn.fandom.com/wiki',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Domain access and deity constraints require POTM confirmation.',
      lastVerified: '2026-05-26',
    },
  },
];
