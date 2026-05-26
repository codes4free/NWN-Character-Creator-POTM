import assert from 'node:assert/strict';
import test from 'node:test';

import { skills } from '../../dist/data/skills.js';

const VALID_ABILITIES = new Set(['str', 'dex', 'con', 'int', 'wis', 'cha']);

test('skill ids are unique', () => {
  const ids = skills.map((skill) => skill.id);
  assert.equal(new Set(ids).size, ids.length);
});

test('skill key ability values are legal', () => {
  for (const skill of skills) {
    assert.equal(VALID_ABILITIES.has(skill.keyAbility), true);
  }
});

test('skill rule flags are booleans', () => {
  for (const skill of skills) {
    assert.equal(typeof skill.trainedOnly, 'boolean');
    assert.equal(typeof skill.armorCheckPenaltyApplies, 'boolean');
  }
});
