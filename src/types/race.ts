import type { AbilityScores } from './character.js';
import type { SourceMetadata } from './rules.js';

export interface RaceRule {
  id: string;
  name: string;
  type: 'Humanoid';
  size: 'Small' | 'Medium';
  movementSpeed: number;
  vision: 'Normal' | 'Low-Light Vision' | 'Darkvision';
  favoredClass: string;
  levelAdjustment: number;
  attributeModifiers: Partial<AbilityScores>;
  skillBonuses?: Record<string, number>;
  bonusFeats?: string[];
  extraSkillPointsPerLevel?: number;
  extraSkillPointsAtFirstLevel?: number;
  sourceMetadata: SourceMetadata;
}

export interface SubraceRule {
  id: string;
  name: string;
  parentRaceId: string;
  attributeModifiers: Partial<AbilityScores>;
  sourceMetadata: SourceMetadata;
}
