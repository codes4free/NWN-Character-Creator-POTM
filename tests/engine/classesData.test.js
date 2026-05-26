import assert from 'node:assert/strict';
import test from 'node:test';

import { classes } from '../../dist/data/classes.js';

const VALID_BAB = new Set(['low', 'medium', 'high']);
const VALID_SAVE = new Set(['low', 'high']);

test('class ids are unique', () => {
  const ids = classes.map((item) => item.id);
  assert.equal(new Set(ids).size, ids.length);
});

test('class metadata fields are present', () => {
  for (const item of classes) {
    assert.ok(item.sourceMetadata.source);
    assert.ok(item.sourceMetadata.sourceUrl);
    assert.ok(item.sourceMetadata.sourceStatus);
    assert.ok(item.sourceMetadata.lastVerified);
  }
});

test('BAB and save progression values are legal', () => {
  for (const item of classes) {
    assert.equal(VALID_BAB.has(item.baseAttackBonusProgression), true);
    assert.equal(VALID_SAVE.has(item.saveProgressions.fortitude), true);
    assert.equal(VALID_SAVE.has(item.saveProgressions.reflex), true);
    assert.equal(VALID_SAVE.has(item.saveProgressions.will), true);
  }
});
