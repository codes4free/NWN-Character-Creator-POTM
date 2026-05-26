import assert from 'node:assert/strict';
import test from 'node:test';

import { spells } from '../../dist/data/spells.js';

const VALID_SCHOOLS = new Set([
  'abjuration',
  'conjuration',
  'divination',
  'enchantment',
  'evocation',
  'illusion',
  'necromancy',
  'transmutation',
]);

test('spell ids are unique', () => {
  const ids = spells.map((spell) => spell.id);
  assert.equal(new Set(ids).size, ids.length);
});

test('spell school enum values are legal', () => {
  for (const spell of spells) {
    assert.equal(VALID_SCHOOLS.has(spell.school), true);
  }
});

test('spell levels are non-negative integers', () => {
  for (const spell of spells) {
    assert.equal(Number.isInteger(spell.level), true);
    assert.equal(spell.level >= 0, true);
  }
});
