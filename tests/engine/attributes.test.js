import assert from 'node:assert/strict';
import test from 'node:test';

import {
  applyRacialModifiers,
  getAbilityModifier,
  getFinalAbilityScores,
  validateAbilityScore,
} from '../../dist/engine/attributes.js';

const base = { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 };

test('modifier breakpoints', () => {
  assert.equal(getAbilityModifier(8), -1);
  assert.equal(getAbilityModifier(9), -1);
  assert.equal(getAbilityModifier(10), 0);
  assert.equal(getAbilityModifier(11), 0);
  assert.equal(getAbilityModifier(12), 1);
  assert.equal(getAbilityModifier(18), 4);
});

test('apply racial modifiers', () => {
  const result = applyRacialModifiers(base, { str: 2, int: -2 });
  assert.equal(result.str, 12);
  assert.equal(result.int, 8);
});

test('get final ability scores is immutable', () => {
  const initial = { ...base };
  const result = getFinalAbilityScores(initial, { wis: 2 });
  assert.equal(result.wis, 12);
  assert.equal(initial.wis, 10);
});

test('validation errors', () => {
  assert.throws(() => validateAbilityScore(0));
  assert.throws(() => validateAbilityScore(51));
  assert.throws(() => validateAbilityScore(10.5));
});
