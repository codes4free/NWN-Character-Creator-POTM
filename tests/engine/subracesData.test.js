import assert from 'node:assert/strict';
import test from 'node:test';

import { races } from '../../dist/data/races.js';
import { subraces } from '../../dist/data/subraces.js';

const ABILITY_KEYS = new Set(['str', 'dex', 'con', 'int', 'wis', 'cha']);

test('subrace ids are unique', () => {
  const ids = subraces.map((subrace) => subrace.id);
  const unique = new Set(ids);
  assert.equal(unique.size, ids.length);
});

test('subrace parentRaceId values exist in base races dataset', () => {
  const raceIds = new Set(races.map((race) => race.id));

  for (const subrace of subraces) {
    assert.equal(
      raceIds.has(subrace.parentRaceId),
      true,
      `Unknown parent race id: ${subrace.parentRaceId}`
    );
  }
});

test('subrace attribute modifier keys are valid ability names', () => {
  for (const subrace of subraces) {
    for (const key of Object.keys(subrace.attributeModifiers)) {
      assert.equal(ABILITY_KEYS.has(key), true, `Invalid ability key: ${key}`);
    }
  }
});
