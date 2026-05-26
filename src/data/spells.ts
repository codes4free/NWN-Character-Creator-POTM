import type { SourceMetadata } from '../types/rules.js';

export type SpellSchool =
  | 'abjuration'
  | 'conjuration'
  | 'divination'
  | 'enchantment'
  | 'evocation'
  | 'illusion'
  | 'necromancy'
  | 'transmutation';

export interface SpellRule {
  id: string;
  name: string;
  level: number;
  school: SpellSchool;
  classes: string[];
  sourceMetadata: SourceMetadata;
}

export const spells: SpellRule[] = [
  {
    id: 'magic_missile',
    name: 'Magic Missile',
    level: 1,
    school: 'evocation',
    classes: ['wizard', 'sorcerer'],
    sourceMetadata: {
      source: 'NWN Wiki / POTM rules',
      sourceUrl: 'https://nwn.fandom.com/wiki',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Confirm server-specific projectile scaling and immunity interactions.',
      lastVerified: '2026-05-26',
    },
  },
  {
    id: 'cure_light_wounds',
    name: 'Cure Light Wounds',
    level: 1,
    school: 'conjuration',
    classes: ['cleric', 'bard', 'druid', 'paladin', 'ranger'],
    sourceMetadata: {
      source: 'NWN Wiki / POTM rules',
      sourceUrl: 'https://nwn.fandom.com/wiki',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Class list and healing behavior may have server adjustments.',
      lastVerified: '2026-05-26',
    },
  },
  {
    id: 'shield',
    name: 'Shield',
    level: 1,
    school: 'abjuration',
    classes: ['wizard', 'sorcerer'],
    sourceMetadata: {
      source: 'NWN Wiki / POTM rules',
      sourceUrl: 'https://nwn.fandom.com/wiki',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Confirm AC and missile-deflection behavior on POTM.',
      lastVerified: '2026-05-26',
    },
  },
];
