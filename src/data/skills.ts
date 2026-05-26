import type { SourceMetadata } from '../types/rules.js';
import type { AbilityName } from '../types/character.js';

export interface SkillRule {
  id: string;
  name: string;
  keyAbility: AbilityName;
  trainedOnly: boolean;
  armorCheckPenaltyApplies: boolean;
  sourceMetadata: SourceMetadata;
}

export const skills: SkillRule[] = [
  {
    id: 'hide',
    name: 'Hide',
    keyAbility: 'dex',
    trainedOnly: false,
    armorCheckPenaltyApplies: true,
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
    sourceMetadata: {
      source: 'NWN Wiki / POTM rules',
      sourceUrl: 'https://nwn.fandom.com/wiki',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Counterspell and identification behavior may vary on server.',
      lastVerified: '2026-05-26',
    },
  },
];
