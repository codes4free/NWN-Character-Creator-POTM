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
