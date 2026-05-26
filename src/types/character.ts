export type AbilityName = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha';

export type AbilityScores = Record<AbilityName, number>;

export interface ValidationIssue {
  code: string;
  path: string;
  message: string;
  severity: 'error' | 'warning';
  source?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationIssue[];
  warnings: ValidationIssue[];
}

export interface CharacterAttributes {
  base: AbilityScores;
  racialModifiers: Partial<AbilityScores>;
  final: AbilityScores;
}
