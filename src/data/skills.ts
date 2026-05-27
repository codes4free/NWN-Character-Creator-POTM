import type { SourceMetadata } from '../types/rules.js';
import type { AbilityName } from '../types/character.js';

export interface SkillRule {
  id: string;
  name: string;
  keyAbility: AbilityName;
  trainedOnly: boolean;
  armorCheckPenaltyApplies: boolean;
  classSkillIds: string[];
  sourceMetadata: SourceMetadata;
}

export const skills: SkillRule[] = [
  {
    id: 'hide',
    name: 'Hide',
    keyAbility: 'dex',
    trainedOnly: false,
    armorCheckPenaltyApplies: true,
    classSkillIds: ['assassin', 'ranger', 'rogue', 'shadowdancer'],
    sourceMetadata: {
      source: 'NWN Wiki / POTM rules',
      sourceUrl: 'https://nwn.fandom.com/wiki',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Stealth interaction details may vary by server implementation.',
      lastVerified: '2026-05-26',
    },
  },
  {
    id: 'spot',
    name: 'Spot',
    keyAbility: 'wis',
    trainedOnly: false,
    armorCheckPenaltyApplies: false,
    classSkillIds: ['druid', 'monk', 'ranger', 'rogue'],
    sourceMetadata: {
      source: 'NWN Wiki / POTM rules',
      sourceUrl: 'https://nwn.fandom.com/wiki',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Perception/DC interactions should be verified on POTM.',
      lastVerified: '2026-05-26',
    },
  },
  {
    id: 'spellcraft',
    name: 'Spellcraft',
    keyAbility: 'int',
    trainedOnly: false,
    armorCheckPenaltyApplies: false,
    classSkillIds: ['bard', 'beguiler', 'cleric', 'sorcerer', 'warlock', 'wizard'],
    sourceMetadata: {
      source: 'NWN Wiki / POTM rules',
      sourceUrl: 'https://nwn.fandom.com/wiki',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Counterspell and identification behavior may vary on server.',
      lastVerified: '2026-05-26',
    },
  },
];
