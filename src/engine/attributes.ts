import type { AbilityName, AbilityScores } from '../types/character.js';

const ABILITIES: AbilityName[] = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

export function getAbilityModifier(score: number): number {
  validateAbilityScore(score);
  return Math.floor((score - 10) / 2);
}

export function validateAbilityScore(score: number): void {
  if (!Number.isInteger(score)) {
    throw new Error('Ability score must be an integer');
  }

  if (score < 1) {
    throw new Error('Ability score must be at least 1');
  }

  if (score > 50) {
    throw new Error('Ability score must be at most 50');
  }
}

export function applyRacialModifiers(
  base: AbilityScores,
  racial: Partial<AbilityScores>
): AbilityScores {
  const result = { ...base } as AbilityScores;

  for (const ability of ABILITIES) {
    const nextScore = base[ability] + (racial[ability] ?? 0);
    validateAbilityScore(nextScore);
    result[ability] = nextScore;
  }

  return result;
}

export function getFinalAbilityScores(
  base: AbilityScores,
  racial: Partial<AbilityScores>
): AbilityScores {
  return applyRacialModifiers(base, racial);
}
