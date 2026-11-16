import test from 'node:test';
import assert from 'node:assert/strict';
import { generatePetikChatReply, CHAT_QUICK_TOPICS } from './chatAssistant.ts';

test('CHAT_QUICK_TOPICS exposes five non-empty client topics', () => {
  assert.equal(CHAT_QUICK_TOPICS.length, 5);
  for (const topic of CHAT_QUICK_TOPICS) {
    assert.ok(topic.label.length > 0);
    assert.ok(topic.prompt.length > 0);
  }
});

test('generatePetikChatReply routes Amarisa Court / shortlet queries accurately', () => {
  const reply = generatePetikChatReply('Can I book Amarisa Court shortlet in Osogbo?');
  assert.match(reply.text, /Amarisa Court/i);
  assert.equal(reply.suggestedSector, 'Amarisa Court Shortlet Living');
});

test('generatePetikChatReply routes construction and BOQ queries accurately', () => {
  const reply = generatePetikChatReply('Do you offer construction supervision and BOQ audits?');
  assert.match(reply.text, /Construction & Project Management/i);
  assert.equal(reply.suggestedSector, 'Construction & Project Management');
});

test('generatePetikChatReply provides Lagos HQ and WAT hours for office queries', () => {
  const reply = generatePetikChatReply('Where is your office located and what are business hours?');
  assert.match(reply.text, /Lekki Phase I/i);
  assert.match(reply.text, /info@petiklimited\.com/i);
});

test('generatePetikChatReply returns helpful fallback for general messages', () => {
  const reply = generatePetikChatReply('Looking for corporate partnership guidance');
  assert.match(reply.text, /Petik Limited/i);
  assert.equal(reply.actionLabel, 'Submit Project Enquiry');
});
