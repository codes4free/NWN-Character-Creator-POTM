import type { SourceMetadata } from '../types/rules.js';
import type { BabProgression, SaveProgression } from './classes.js';

export interface PrestigeClassRule {
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
  prerequisites: {
    minimumBaseAttackBonus?: number;
    requiredFeats?: string[];
    requiredSkills?: Array<{ id: string; ranks: number }>;
    requiredSpellcasting?: { type: 'arcane' | 'divine'; minimumSpellLevel: number };
    alignment?: string[];
  };
  sourceMetadata: SourceMetadata;
}

export const prestigeClasses: PrestigeClassRule[] = [
  {
    id: 'arcane_archer',
    name: 'Arcane Archer',
    hitDie: 'd8',
    skillPointsPerLevel: 4,
    baseAttackBonusProgression: 'high',
    saveProgressions: { fortitude: 'low', reflex: 'high', will: 'low' },
    prerequisites: {
      minimumBaseAttackBonus: 6,
      requiredFeats: ['point_blank_shot', 'weapon_focus_longbow_or_shortbow'],
      requiredSpellcasting: { type: 'arcane', minimumSpellLevel: 1 },
    },
    sourceMetadata: {
      source: 'NWN Wiki / POTM rules',
      sourceUrl: 'https://nwn.fandom.com/wiki',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Exact feat wording and class-list eligibility should be verified on POTM.',
      lastVerified: '2026-05-26',
    },
  },
  {
    id: 'assassin',
    name: 'Assassin',
    hitDie: 'd6',
    skillPointsPerLevel: 4,
    baseAttackBonusProgression: 'medium',
    saveProgressions: { fortitude: 'low', reflex: 'high', will: 'low' },
    prerequisites: {
      requiredSkills: [
        { id: 'hide', ranks: 8 },
        { id: 'move_silently', ranks: 8 },
      ],
      alignment: ['any-evil'],
    },
    sourceMetadata: {
      source: 'NWN Wiki / POTM rules',
      sourceUrl: 'https://nwn.fandom.com/wiki',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Alignment and skill rank requirements should be confirmed against POTM implementation.',
      lastVerified: '2026-05-26',
    },
  },
];
