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
  assert.equal(buildTelHref('[PLACEHOLDER: Insert Phone Number]'), null);
  assert.equal(buildWhatsAppHref(TRUST_SIGNALS.whatsappNumber), null);
  assert.equal(buildTelHref(TRUST_SIGNALS.phoneNumber), 'tel:+2348111113633');
  assert.equal(buildTelHref('+234 801 234 5678'), 'tel:+2348012345678');
  assert.equal(buildWhatsAppHref('+234 801 234 5678'), 'https://wa.me/2348012345678');
});

test('TRUST_SIGNALS exposes official contact details and avoids fabricated RC numbers, memberships, or testimonials', () => {
  assert.deepEqual(TRUST_SIGNALS.emails, [
    'info@petiklimited.com',
    'enquiry@petiklimited.com',
  ]);
  assert.deepEqual(TRUST_SIGNALS.phoneNumbers, [
    '(+234) 8111113633',
    '(+234) 8039364007',
    '(+234) 9053172818',
    '(+234) 9159477046',
    '(+234) 9159477047',
  ]);
  assert.equal(isPlaceholderValue(TRUST_SIGNALS.phoneNumber), false);
  assert.equal(isPlaceholderValue(TRUST_SIGNALS.cacRcNumber), true);
  assert.equal(isPlaceholderValue(TRUST_SIGNALS.whatsappNumber), true);
  assert.equal(TRUST_SIGNALS.memberships.length, 0);
  assert.equal(TRUST_SIGNALS.testimonialsOrClients.length, 0);
  assert.ok(TRUST_SIGNALS.leadership.length >= 1);
  for (const leader of TRUST_SIGNALS.leadership) {
    assert.equal(leader.photo, null);
  }
});
