import assert from 'node:assert/strict';
import test from 'node:test';

import { prestigeClasses } from '../../dist/data/prestigeClasses.js';

const VALID_BAB = new Set(['low', 'medium', 'high']);
const VALID_SAVE = new Set(['low', 'high']);

test('prestige class ids are unique', () => {
  const ids = prestigeClasses.map((item) => item.id);
  assert.equal(new Set(ids).size, ids.length);
});

test('prestige classes have prerequisite blocks', () => {
  for (const item of prestigeClasses) {
    assert.ok(item.prerequisites, `${item.id} is missing prerequisites`);
  }
});

test('prestige class BAB/save progression values are legal', () => {
  for (const item of prestigeClasses) {
    assert.equal(VALID_BAB.has(item.baseAttackBonusProgression), true);
    assert.equal(VALID_SAVE.has(item.saveProgressions.fortitude), true);
    assert.equal(VALID_SAVE.has(item.saveProgressions.reflex), true);
    assert.equal(VALID_SAVE.has(item.saveProgressions.will), true);
  }
});
