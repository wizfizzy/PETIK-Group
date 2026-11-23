import test from 'node:test';
import assert from 'node:assert/strict';
import { getCardRevealDelayMs, getRevealClassName } from './scrollReveal';

test('getCardRevealDelayMs staggers card entrance delays and caps max delay', () => {
  assert.equal(getCardRevealDelayMs(0), 0);
  assert.equal(getCardRevealDelayMs(1), 90);
  assert.equal(getCardRevealDelayMs(2), 180);
  assert.equal(getCardRevealDelayMs(3), 270);
  assert.equal(getCardRevealDelayMs(10), 360);
});

test('getRevealClassName returns visible and hidden state classes cleanly', () => {
  assert.equal(getRevealClassName(true), 'opacity-100 translate-y-0');
  assert.equal(getRevealClassName(false), 'opacity-0 translate-y-6');
});
