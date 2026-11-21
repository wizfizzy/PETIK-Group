import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const distSsrDir = path.join(projectRoot, 'dist-ssr');
const publicDir = path.join(projectRoot, 'public');

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function replaceTagAttr(html, regex, replacement) {
  if (!regex.test(html)) {
    return html;
  }
  return html.replace(regex, replacement);
}

function injectRouteHeadAndBody(templateHtml, { appHtml, meta, organizationJsonLd }) {
  let output = templateHtml;

  output = replaceTagAttr(
    output,
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(meta.title)}</title>`
  );

  output = replaceTagAttr(
    output,
    /<meta\s+name="description"[\s\S]*?\/>/i,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`
  );

  output = replaceTagAttr(
    output,
    /<link\s+rel="canonical"[\s\S]*?\/>/i,
    `<link rel="canonical" href="${escapeHtml(meta.canonicalUrl)}" />`
  );

  output = replaceTagAttr(
    output,
    /<meta\s+property="og:site_name"[\s\S]*?\/>/i,
    `<meta property="og:site_name" content="${escapeHtml(meta.ogSiteName)}" />`
  );

  output = replaceTagAttr(
    output,
    /<meta\s+property="og:title"[\s\S]*?\/>/i,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`
  );

  output = replaceTagAttr(
    output,
    /<meta\s+property="og:description"[\s\S]*?\/>/i,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`
  );

  output = replaceTagAttr(
    output,
    /<meta\s+property="og:url"[\s\S]*?\/>/i,
    `<meta property="og:url" content="${escapeHtml(meta.ogUrl)}" />`
  );

  output = replaceTagAttr(
    output,
    /<meta\s+property="og:image"[\s\S]*?\/>/i,
    `<meta property="og:image" content="${escapeHtml(meta.ogImageUrl)}" />`
  );

  output = replaceTagAttr(
    output,
    /<meta\s+name="twitter:title"[\s\S]*?\/>/i,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`
  );

  output = replaceTagAttr(
    output,
    /<meta\s+name="twitter:description"[\s\S]*?\/>/i,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`
  );

  output = replaceTagAttr(
    output,
    /<meta\s+name="twitter:image"[\s\S]*?\/>/i,
    `<meta name="twitter:image" content="${escapeHtml(meta.twitterImageUrl)}" />`
  );

  output = replaceTagAttr(
    output,
    /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
    `<script type="application/ld+json">${JSON.stringify(organizationJsonLd)}</script>`
  );

  output = output.replace(
    '<div id="root"></div>',
    `<div id="root" data-prerender-path="${escapeHtml(meta.path)}">${appHtml}</div>`
  );
  return output;
}

async function run() {
  const ssrEntryPath = pathToFileURL(path.join(distSsrDir, 'entry-server.js')).href;
  const ssrModule = await import(ssrEntryPath);
  const {
    PRERENDER_ROUTES,
    buildRobotsTxt,
    buildSitemapXml,
    renderRoute,
    resolveSiteUrl,
  } = ssrModule;

  const siteUrl = resolveSiteUrl(process.env.VITE_SITE_URL || process.env.SITE_URL);
  const templateHtml = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');

  for (const routePath of PRERENDER_ROUTES) {
    const rendered = renderRoute(routePath, siteUrl);
    const pageHtml = injectRouteHeadAndBody(templateHtml, rendered);
    const targetFile =
      routePath === '/'
        ? path.join(distDir, 'index.html')
        : path.join(distDir, routePath.replace(/^\/+/, ''), 'index.html');

    await fs.mkdir(path.dirname(targetFile), { recursive: true });
    await fs.writeFile(targetFile, pageHtml, 'utf8');
  }

  const sitemapXml = buildSitemapXml(siteUrl);
  const robotsTxt = buildRobotsTxt(siteUrl);

  await fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
  await fs.writeFile(path.join(distDir, 'robots.txt'), robotsTxt, 'utf8');
  await fs.writeFile(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
  await fs.writeFile(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf8');

  console.log(`Prerendered ${PRERENDER_ROUTES.length} routes, sitemap.xml, and robots.txt for ${siteUrl}`);
}

run().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
