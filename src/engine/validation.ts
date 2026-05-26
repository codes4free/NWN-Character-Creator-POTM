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

export function createValidationError(
  code: string,
  path: string,
  message: string,
  source?: string
): ValidationIssue {
  return {
    code,
    path,
    message,
    severity: 'error',
    source,
  };
}

export function createValidationWarning(
  code: string,
  path: string,
  message: string,
  source?: string
): ValidationIssue {
  return {
    code,
    path,
    message,
    severity: 'warning',
    source,
  };
}

export function mergeValidationResults(
  ...results: ValidationResult[]
): ValidationResult {
  const errors = results.flatMap((result) => result.errors);
  const warnings = results.flatMap((result) => result.warnings);

  return createValidationResult(errors, warnings);
}
