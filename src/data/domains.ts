import type { SourceMetadata } from '../types/rules.js';

export interface DomainRule {
  id: string;
  name: string;
  grantedPower: string;
  spellsByLevel: {
    '1': string;
    '2': string;
    '3': string;
    '4': string;
    '5': string;
    '6': string;
    '7': string;
    '8': string;
    '9': string;
  };
  sourceMetadata: SourceMetadata;
}

export const domains: DomainRule[] = [
  {
    id: 'healing',
    name: 'Healing',
    grantedPower: 'Cast healing spells at +1 caster level.',
    spellsByLevel: {
      '1': 'cure_light_wounds',
      '2': 'cure_moderate_wounds',
      '3': 'cure_serious_wounds',
      '4': 'cure_critical_wounds',
      '5': 'mass_cure_light_wounds',
      '6': 'heal',
      '7': 'regenerate',
      '8': 'mass_heal',
      '9': 'mass_heal',
    },
    sourceMetadata: {
      source: 'NWN Wiki / POTM rules',
      sourceUrl: 'https://nwn.fandom.com/wiki',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Exact domain spell progression may differ on POTM.',
      lastVerified: '2026-05-26',
    },
  },
  {
    id: 'war',
    name: 'War',
    grantedPower: 'Gain proficiency/focus benefits associated with deity favored weapon rules.',
    spellsByLevel: {
      '1': 'magic_weapon',
      '2': 'spiritual_weapon',
      '3': 'magic_vestment',
      '4': 'divine_power',
      '5': 'flame_strike',
      '6': 'blade_barrier',
      '7': 'power_word_blind',
      '8': 'power_word_stun',
      '9': 'power_word_kill',
    },
    sourceMetadata: {
      source: 'NWN Wiki / POTM rules',
      sourceUrl: 'https://nwn.fandom.com/wiki',
      sourceStatus: 'needs-verification',
      sourceNotes: 'Favored-weapon and high-level spell mapping should be verified for server overrides.',
      lastVerified: '2026-05-26',
    },
  },
];
