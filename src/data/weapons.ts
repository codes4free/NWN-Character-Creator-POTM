import type { SourceMetadata } from '../types/rules.js';

export type WeaponCategory = 'simple' | 'martial' | 'exotic';

export interface WeaponRule {
  id: string;
  name: string;
  category: WeaponCategory;
  damage: string;
  critical: string;
  damageType: string;
  size: 'Tiny' | 'Small' | 'Medium' | 'Large';
  weight: number;
  cost: number;
  proficiencies: string[];
  sourceMetadata: SourceMetadata;
}

export const weapons: WeaponRule[] = [
  {
    id: 'dagger',
    name: 'Dagger',
    category: 'simple',
    damage: '1d4',
    critical: '19-20/x2',
    damageType: 'Piercing',
    size: 'Tiny',
    weight: 1,
    cost: 4,
    proficiencies: ['druid', 'monk', 'rogue', 'simple', 'wizard'],
    sourceMetadata: {
      source: 'NWN Wiki',
      sourceUrl: 'https://nwn.fandom.com/wiki/Dagger',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Baseline NWN weapon values captured; confirm POTM-specific overrides.',
      lastVerified: '2026-05-26',
    },
  },
  {
    id: 'longsword',
    name: 'Longsword',
    category: 'martial',
    damage: '1d8',
    critical: '19-20/x2',
    damageType: 'Slashing',
    size: 'Medium',
    weight: 4,
    cost: 15,
    proficiencies: ['elf', 'martial'],
    sourceMetadata: {
      source: 'NWN Wiki',
      sourceUrl: 'https://nwn.fandom.com/wiki/Longsword',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Baseline NWN weapon values captured; confirm POTM-specific overrides.',
      lastVerified: '2026-05-26',
    },
  },
  {
    id: 'shortbow',
    name: 'Shortbow',
    category: 'martial',
    damage: '1d6',
    critical: 'x3',
    damageType: 'Piercing',
    size: 'Medium',
    weight: 2,
    cost: 30,
    proficiencies: ['elf', 'martial', 'rogue'],
    sourceMetadata: {
      source: 'NWN Wiki',
      sourceUrl: 'https://nwn.fandom.com/wiki/Shortbow',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Baseline NWN weapon values captured; confirm POTM-specific overrides.',
      lastVerified: '2026-05-26',
    },
  },
  {
    id: 'mace',
    name: 'Mace',
    category: 'simple',
    damage: '1d6',
    critical: 'x2',
    damageType: 'Bludgeoning',
    size: 'Small',
    weight: 6,
    cost: 5,
    proficiencies: ['rogue', 'simple'],
    sourceMetadata: {
      source: 'NWN Wiki',
      sourceUrl: 'https://nwn.fandom.com/wiki/Mace',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Baseline NWN weapon values captured; confirm POTM-specific overrides.',
      lastVerified: '2026-05-26',
    },
  },
  {
    id: 'scythe',
    name: 'Scythe',
    category: 'exotic',
    damage: '2d4',
    critical: 'x4',
    damageType: 'Piercing & slashing',
    size: 'Large',
    weight: 12,
    cost: 18,
    proficiencies: ['exotic'],
    sourceMetadata: {
      source: 'NWN Wiki',
      sourceUrl: 'https://nwn.fandom.com/wiki/Scythe',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Baseline NWN weapon values captured; confirm POTM-specific overrides.',
      lastVerified: '2026-05-26',
    },
  },
];
