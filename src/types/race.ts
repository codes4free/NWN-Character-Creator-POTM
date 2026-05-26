import type { AbilityScores } from './character.js';
import type { SourceMetadata } from './rules.js';

export interface RaceRule {
  id: string;
  name: string;
  attributeModifiers: Partial<AbilityScores>;
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
