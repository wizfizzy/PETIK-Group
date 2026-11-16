import test from 'node:test';
import assert from 'node:assert/strict';
import { validateContactForm, generateEnquiryReference } from './contact';

test('validateContactForm rejects empty form', () => {
  const result = validateContactForm({});
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.service);
  assert.ok(result.errors.message);
});

test('validateContactForm flags invalid email and short message', () => {
  const result = validateContactForm({
    fullName: 'Adekunle Jones',
    email: 'not-an-email',
    service: 'Real Estate',
    message: 'Too short',
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.email);
  assert.ok(result.errors.message);
});

test('validateContactForm passes valid submission', () => {
  const result = validateContactForm({
    fullName: 'Adekunle Jones',
    email: 'adekunle@investmentpartners.ng',
    phone: '+234 803 123 4567',
    service: 'Construction & Project Management',
    message: 'We are seeking project management consultancy for a 12-unit residential development in Lekki Phase 1.',
  });
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('generateEnquiryReference generates formatted tracking string', () => {
  const ref = generateEnquiryReference('PTK');
  assert.match(ref, /^PTK-\d{8}-\d{4}$/);
});
