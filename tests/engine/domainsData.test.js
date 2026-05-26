import assert from 'node:assert/strict';
import test from 'node:test';

import { domains } from '../../dist/data/domains.js';

test('domain ids are unique', () => {
  const ids = domains.map((domain) => domain.id);
  assert.equal(new Set(ids).size, ids.length);
});

test('domains include spell slots 1 through 9', () => {
  const requiredSlots = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for (const domain of domains) {
    for (const slot of requiredSlots) {
      assert.equal(typeof domain.spellsByLevel[slot], 'string');
      assert.notEqual(domain.spellsByLevel[slot].trim(), '');
    }
  }
});

test('domains include non-empty grantedPower summaries', () => {
  for (const domain of domains) {
    assert.equal(typeof domain.grantedPower, 'string');
    assert.notEqual(domain.grantedPower.trim(), '');
  }
});
