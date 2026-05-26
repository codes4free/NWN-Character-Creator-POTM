import assert from 'node:assert/strict';
import test from 'node:test';

import { races } from '../../dist/data/races.js';

const ABILITY_KEYS = new Set(['str', 'dex', 'con', 'int', 'wis', 'cha']);

test('race ids are unique', () => {
  const ids = races.map((race) => race.id);
  const unique = new Set(ids);
  assert.equal(unique.size, ids.length);
});

test('human record includes bonus feat and skill bonuses', () => {
  const human = races.find((race) => race.id === 'human');
  assert.ok(human);
  assert.deepEqual(human.bonusFeats, ['bonus-general-feat-level-1']);
  assert.equal(human.extraSkillPointsAtFirstLevel, 4);
  assert.equal(human.extraSkillPointsPerLevel, 1);
});

test('attribute modifier keys are valid ability names', () => {
  for (const race of races) {
    for (const key of Object.keys(race.attributeModifiers)) {
      assert.equal(ABILITY_KEYS.has(key), true, `Invalid ability key: ${key}`);
    }
  }
});
