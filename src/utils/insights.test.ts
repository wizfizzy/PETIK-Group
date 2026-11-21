import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PETIK_BLOG_URL,
  PETIK_INSIGHTS_ARTICLES,
  getHomepageInsights,
} from './insights';

test('PETIK_BLOG_URL targets the official Petik Limited blog', () => {
  assert.equal(PETIK_BLOG_URL, 'https://petiklimited.com/blog');
});

test('getHomepageInsights returns three recent published Petik articles', () => {
  const recent = getHomepageInsights();
  assert.equal(recent.length, 3);
  assert.deepEqual(
    recent.map((article) => article.date),
    ['November 17, 2026', 'November 9, 2026', 'November 2, 2026']
  );
});

test('all insights articles point to real petiklimited.com URLs and featured media without fabricated editorial arrays', () => {
  for (const article of PETIK_INSIGHTS_ARTICLES) {
    assert.ok(article.url.startsWith('https://petiklimited.com/'));
    assert.ok(article.image.startsWith('https://petiklimited.com/wp-content/uploads/'));
    assert.ok(article.title.length > 10);
    assert.ok(article.excerpt.length > 40);
    assert.equal(article.content, undefined);
    assert.equal(article.keyTakeaways, undefined);
  }
});
