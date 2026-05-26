export function getSkillCostPerRank(isClassSkill: boolean): number {
  return isClassSkill ? 1 : 2;
}

export function getHumanSkillPointBonus(level: number): number {
  if (!Number.isInteger(level) || level < 1) {
    throw new Error('Level must be a positive integer');
  }

  return level === 1 ? 4 : 1;
}
