import test from 'node:test';
import assert from 'node:assert/strict';
import {
  TRUST_SIGNALS,
  isPlaceholderValue,
  buildTelHref,
  buildWhatsAppHref,
} from './trustSignals';

test('isPlaceholderValue detects empty and [PLACEHOLDER] tokens accurately', () => {
  assert.equal(isPlaceholderValue('[PLACEHOLDER: Insert Phone Number]'), true);
  assert.equal(isPlaceholderValue(''), true);
  assert.equal(isPlaceholderValue(null), true);
  assert.equal(isPlaceholderValue('RC 1234567'), false);
});

test('buildTelHref and buildWhatsAppHref return null for placeholders and valid URLs for real numbers', () => {
  assert.equal(buildTelHref(TRUST_SIGNALS.phoneNumber), null);
  assert.equal(buildWhatsAppHref(TRUST_SIGNALS.whatsappNumber), null);
  assert.equal(buildTelHref('+234 801 234 5678'), 'tel:+2348012345678');
  assert.equal(buildWhatsAppHref('+234 801 234 5678'), 'https://wa.me/2348012345678');
});

test('TRUST_SIGNALS does not fabricate RC numbers, phone numbers, memberships, or testimonials', () => {
  assert.equal(isPlaceholderValue(TRUST_SIGNALS.cacRcNumber), true);
  assert.equal(isPlaceholderValue(TRUST_SIGNALS.phoneNumber), true);
  assert.equal(isPlaceholderValue(TRUST_SIGNALS.whatsappNumber), true);
  assert.equal(TRUST_SIGNALS.memberships.length, 0);
  assert.equal(TRUST_SIGNALS.testimonialsOrClients.length, 0);
  assert.ok(TRUST_SIGNALS.leadership.length >= 1);
  for (const leader of TRUST_SIGNALS.leadership) {
    assert.equal(leader.photo, null);
  }
});
