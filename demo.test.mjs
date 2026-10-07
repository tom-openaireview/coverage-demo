import test from 'node:test';
import assert from 'node:assert/strict';
import { displayLabel, displayStatus } from './demo.mjs';

test('trims surrounding label whitespace', () => {
  assert.equal(displayLabel('  Sample task  '), 'Sample task');
});

test('normalizes the displayed status', () => {
  assert.equal(displayStatus('READY'), 'ready');
});
