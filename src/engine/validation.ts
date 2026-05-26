import type { ValidationIssue, ValidationResult } from '../types/character.js';

export function createValidationResult(
  errors: ValidationIssue[] = [],
  warnings: ValidationIssue[] = []
): ValidationResult {
  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}
