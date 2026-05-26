import assert from 'node:assert/strict';
import test from 'node:test';

import {
  getBaseSkillPointsPerLevel,
  getIntModifierForSkills,
  getSkillCostPerRank,
  getTotalSkillPointsAtLevel,
} from '../../dist/engine/skillRules.js';

test('INT modifier for skills uses ability modifier math', () => {
  assert.equal(getIntModifierForSkills(8), -1);
  assert.equal(getIntModifierForSkills(10), 0);
  assert.equal(getIntModifierForSkills(18), 4);
});

test('base skill points per level floors at 1', () => {
  assert.equal(getBaseSkillPointsPerLevel(2, 8), 1);
  assert.equal(getBaseSkillPointsPerLevel(4, 14), 6);
});

test('total skill points at level 1 (non-human and human)', () => {
  assert.equal(getTotalSkillPointsAtLevel(1, 4, 10, false), 16);
  assert.equal(getTotalSkillPointsAtLevel(1, 4, 10, true), 20);
});

test('total skill points at later levels (non-human and human)', () => {
  assert.equal(getTotalSkillPointsAtLevel(2, 4, 10, false), 4);
  assert.equal(getTotalSkillPointsAtLevel(2, 4, 10, true), 5);
});

test('skill cost per rank remains class vs cross-class', () => {
  assert.equal(getSkillCostPerRank(true), 1);
  assert.equal(getSkillCostPerRank(false), 2);
});

test('invalid inputs throw', () => {
  assert.throws(() => getIntModifierForSkills(0));
  assert.throws(() => getBaseSkillPointsPerLevel(-1, 10));
  assert.throws(() => getTotalSkillPointsAtLevel(0, 2, 10, false));
  assert.throws(() => getTotalSkillPointsAtLevel(1, 2.5, 10, false));
});
