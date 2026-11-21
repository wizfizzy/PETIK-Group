import test from 'node:test';
import assert from 'node:assert/strict';
import {
  DEFAULT_SITE_URL,
  PRERENDER_ROUTES,
  buildOrganizationJsonLd,
  buildRobotsTxt,
  buildSitemapXml,
  getRoutePath,
  getRouteSeoMeta,
  parseRoutePath,
  resolveSiteUrl,
} from './seo';

test('resolveSiteUrl defaults to https://[FINAL-DOMAIN] and never uses petiklimited.com', () => {
  assert.equal(resolveSiteUrl(undefined), DEFAULT_SITE_URL);
  assert.equal(resolveSiteUrl('MY_APP_URL'), DEFAULT_SITE_URL);
  assert.equal(resolveSiteUrl('https://petiklimited.com'), DEFAULT_SITE_URL);
  assert.equal(resolveSiteUrl('https://petikgroup.ng/'), 'https://petikgroup.ng');
});

test('every prerender route has title <= 60 chars, description <= 155 chars, own canonical URL, and 1200x630 social image', () => {
  for (const route of PRERENDER_ROUTES) {
    const meta = getRouteSeoMeta(route);
    assert.ok(meta.title.length <= 60, `Title too long for ${route}: ${meta.title.length}`);
    assert.ok(
      meta.description.length <= 155,
      `Description too long for ${route}: ${meta.description.length}`
    );
    assert.ok(
      /contact|discuss|enquire|request|consult/i.test(meta.description),
      `Description missing CTA for ${route}`
    );
    const expectedCanonical = `${DEFAULT_SITE_URL}${route === '/' ? '/' : route}`;
    assert.equal(meta.canonicalUrl, expectedCanonical);
    assert.equal(meta.ogUrl, expectedCanonical);
    assert.equal(meta.ogSiteName, 'Petik Limited');
    assert.equal(meta.ogImageUrl, `${DEFAULT_SITE_URL}/og-petik-1200x630.jpg`);
    assert.equal(meta.twitterImageUrl, `${DEFAULT_SITE_URL}/og-petik-1200x630.jpg`);
    assert.equal(meta.ogImageWidth, '1200');
    assert.equal(meta.ogImageHeight, '630');
    assert.ok(!meta.canonicalUrl.includes('petiklimited.com'));
  }
});

test('parseRoutePath and getRoutePath map all views and case study routes cleanly', () => {
  assert.deepEqual(parseRoutePath('/'), { view: 'home', projectId: null });
  assert.deepEqual(parseRoutePath('/projects'), { view: 'projects', projectId: null });
  assert.deepEqual(parseRoutePath('/projects/amarisa-court/'), {
    view: 'projects',
    projectId: 'amarisa-court',
  });
  assert.deepEqual(parseRoutePath('/insights'), { view: 'insights', projectId: null });

  assert.equal(getRoutePath('home'), '/');
  assert.equal(getRoutePath('projects', null), '/projects');
  assert.equal(getRoutePath('projects', 'commercial-solar'), '/projects/commercial-solar');
  assert.equal(getRoutePath('insights'), '/insights');
});

test('buildOrganizationJsonLd outputs complete Organization schema with official phone and email', () => {
  const schema = buildOrganizationJsonLd();
  assert.equal(schema['@type'], 'Organization');
  assert.equal(schema.name, 'Petik Limited');
  assert.equal(schema.url, `${DEFAULT_SITE_URL}/`);
  assert.equal(schema.logo, `${DEFAULT_SITE_URL}/petik-logo.png`);
  assert.equal(schema.address['@type'], 'PostalAddress');
  assert.equal(schema.email, 'info@petiklimited.com');
  assert.equal(schema.telephone, '(+234) 8111113633');
  assert.ok(Array.isArray(schema.sameAs) && schema.sameAs.length > 0);
});

test('buildSitemapXml and buildRobotsTxt include all prerender routes under canonical origin', () => {
  const sitemap = buildSitemapXml();
  for (const route of PRERENDER_ROUTES) {
    const loc = `${DEFAULT_SITE_URL}${route === '/' ? '/' : route}`;
    assert.ok(sitemap.includes(`<loc>${loc}</loc>`), `Sitemap missing ${loc}`);
  }
  const robots = buildRobotsTxt();
  assert.ok(robots.includes('Allow: /'));
  assert.ok(robots.includes(`Sitemap: ${DEFAULT_SITE_URL}/sitemap.xml`));
});
