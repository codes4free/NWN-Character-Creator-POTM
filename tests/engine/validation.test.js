import assert from 'node:assert/strict';
import test from 'node:test';

import {
  createValidationError,
  createValidationResult,
  createValidationWarning,
  mergeValidationResults,
} from '../../dist/engine/validation.js';

test('createValidationResult sets isValid=true when there are no errors', () => {
  const result = createValidationResult([], [
    createValidationWarning('WARN_SAMPLE', 'character.race', 'sample warning'),
  ]);

  assert.equal(result.isValid, true);
  assert.equal(result.errors.length, 0);
  assert.equal(result.warnings.length, 1);
});

test('createValidationResult sets isValid=false when errors are present', () => {
  const result = createValidationResult([
    createValidationError('ERR_SAMPLE', 'character.feats[0]', 'sample error'),
  ]);

  assert.equal(result.isValid, false);
  assert.equal(result.errors.length, 1);
});

test('error and warning builders create expected shapes', () => {
  const error = createValidationError(
    'FEAT_REQUIREMENT_NOT_MET',
    'character.feats[1]',
    'Requirement not met',
    'data/Feats.md'
  );

  const warning = createValidationWarning(
    'RULE_NEEDS_VERIFICATION',
    'character.race.subrace',
    'Rule marked for verification',
    'data/Subraces.md'
  );

  assert.deepEqual(error, {
    code: 'FEAT_REQUIREMENT_NOT_MET',
    path: 'character.feats[1]',
    message: 'Requirement not met',
    severity: 'error',
    source: 'data/Feats.md',
  });

  assert.deepEqual(warning, {
    code: 'RULE_NEEDS_VERIFICATION',
    path: 'character.race.subrace',
    message: 'Rule marked for verification',
    severity: 'warning',
    source: 'data/Subraces.md',
  });
});

test('mergeValidationResults preserves ordering and combined validity', () => {
  const resultA = createValidationResult(
    [createValidationError('ERR_A', 'a.path', 'error A')],
    [createValidationWarning('WARN_A', 'a.warn', 'warning A')]
  );

  const resultB = createValidationResult(
    [createValidationError('ERR_B', 'b.path', 'error B')],
    [createValidationWarning('WARN_B', 'b.warn', 'warning B')]
  );

  const merged = mergeValidationResults(resultA, resultB);

  assert.equal(merged.isValid, false);
  assert.deepEqual(
    merged.errors.map((item) => item.code),
    ['ERR_A', 'ERR_B']
  );
  assert.deepEqual(
    merged.warnings.map((item) => item.code),
    ['WARN_A', 'WARN_B']
  );
});
