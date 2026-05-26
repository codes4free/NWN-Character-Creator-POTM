import assert from 'node:assert/strict';
import test from 'node:test';

import { feats } from '../../dist/data/feats.js';

test('feat ids are unique', () => {
  const ids = feats.map((feat) => feat.id);
  assert.equal(new Set(ids).size, ids.length);
});

test('feats contain prerequisite blocks', () => {
  for (const feat of feats) {
    assert.ok(feat.prerequisites);
  }
});

test('repeatable/stacking flags are coherent', () => {
  for (const feat of feats) {
    assert.equal(typeof feat.repeatable, 'boolean');
    assert.equal(typeof feat.stacking.allowDuplicates, 'boolean');
    assert.equal(Number.isInteger(feat.stacking.maxSelections), true);
    assert.equal(feat.stacking.maxSelections >= 1, true);

    if (!feat.repeatable) {
      assert.equal(feat.stacking.allowDuplicates, false);
      assert.equal(feat.stacking.maxSelections, 1);
    }
  }
});
