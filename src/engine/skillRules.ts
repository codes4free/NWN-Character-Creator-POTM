import { getAbilityModifier, validateAbilityScore } from './attributes.js';

export function getSkillCostPerRank(isClassSkill: boolean): number {
  return isClassSkill ? 1 : 2;
}

export function getHumanSkillPointBonus(level: number): number {
  validateLevel(level);
  return level === 1 ? 4 : 1;
}

export function getIntModifierForSkills(intScore: number): number {
  validateAbilityScore(intScore);
  return getAbilityModifier(intScore);
}

export function getBaseSkillPointsPerLevel(
  classSkillPoints: number,
  intScore: number
): number {
  validateClassSkillPoints(classSkillPoints);
  const withInt = classSkillPoints + getIntModifierForSkills(intScore);
  return Math.max(1, withInt);
}

export function getTotalSkillPointsAtLevel(
  level: number,
  classSkillPoints: number,
  intScore: number,
  isHuman: boolean
): number {
  validateLevel(level);

  const basePerLevel = getBaseSkillPointsPerLevel(classSkillPoints, intScore);
  const levelAdjusted = level === 1 ? basePerLevel * 4 : basePerLevel;
  const humanBonus = isHuman ? getHumanSkillPointBonus(level) : 0;

  return levelAdjusted + humanBonus;
}

function validateLevel(level: number): void {
  if (!Number.isInteger(level) || level < 1) {
    throw new Error('Level must be a positive integer');
  }
}

function validateClassSkillPoints(classSkillPoints: number): void {
  if (!Number.isInteger(classSkillPoints) || classSkillPoints < 0) {
    throw new Error('Class skill points must be a non-negative integer');
  }
}
