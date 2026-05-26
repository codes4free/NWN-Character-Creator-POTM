import type { SourceMetadata } from '../types/rules.js';

export type FeatType = 'general' | 'fighter_bonus';

export interface FeatRule {
  id: string;
  name: string;
  type: FeatType;
  repeatable: boolean;
  prerequisites: {
    minimumBaseAttackBonus?: number;
    attributes?: Array<{ ability: 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha'; minimum: number }>;
    requiredFeats?: string[];
  };
  stacking: {
    allowDuplicates: boolean;
    maxSelections: number;
  };
  effects: {
    summary: string;
  };
  sourceMetadata: SourceMetadata;
}

export const feats: FeatRule[] = [
  {
    id: 'power_attack',
    name: 'Power Attack',
    type: 'general',
    repeatable: false,
    prerequisites: {
      minimumBaseAttackBonus: 1,
      attributes: [{ ability: 'str', minimum: 13 }],
    },
    stacking: { allowDuplicates: false, maxSelections: 1 },
    effects: { summary: 'Trade attack bonus for melee damage.' },
    sourceMetadata: {
      source: 'NWN Wiki / POTM rules',
      sourceUrl: 'https://nwn.fandom.com/wiki',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Confirm exact attack/damage scaling on POTM.',
      lastVerified: '2026-05-26',
    },
  },
  {
    id: 'dodge',
    name: 'Dodge',
    type: 'general',
    repeatable: false,
    prerequisites: {
      attributes: [{ ability: 'dex', minimum: 13 }],
    },
    stacking: { allowDuplicates: false, maxSelections: 1 },
    effects: { summary: 'Grants a defensive bonus against a selected target.' },
    sourceMetadata: {
      source: 'NWN Wiki / POTM rules',
      sourceUrl: 'https://nwn.fandom.com/wiki',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Targeting behavior and bonus type should be verified.',
      lastVerified: '2026-05-26',
    },
  },
  {
    id: 'weapon_focus',
    name: 'Weapon Focus',
    type: 'fighter_bonus',
    repeatable: true,
    prerequisites: {
      minimumBaseAttackBonus: 1,
    },
    stacking: { allowDuplicates: true, maxSelections: 20 },
    effects: { summary: 'Gain attack bonus with a selected weapon.' },
    sourceMetadata: {
      source: 'NWN Wiki / POTM rules',
      sourceUrl: 'https://nwn.fandom.com/wiki',
      sourceStatus: 'needs-verification',
      sourceNotes: 'One selection per weapon; verify edge-case restrictions on POTM.',
      lastVerified: '2026-05-26',
    },
  },
];
