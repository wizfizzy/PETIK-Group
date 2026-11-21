import { TRUST_SIGNALS } from './trustSignals';

export type SeoPageView = 'home' | 'projects' | 'insights';

export interface ParsedRoute {
  view: SeoPageView;
  projectId: string | null;
}

export interface RouteSeoMeta {
  path: string;
  title: string;
  description: string;
  canonicalUrl: string;
  ogUrl: string;
  ogSiteName: string;
  ogImageUrl: string;
  ogImageWidth: string;
  ogImageHeight: string;
  ogImageAlt: string;
  twitterImageUrl: string;
}

export const DEFAULT_SITE_URL = 'https://[FINAL-DOMAIN]';
export const KNOWN_PROJECT_IDS = [
  'amarisa-court',
  'lekki-commercial',
  'niger-delta-civil',
  'commercial-solar',
] as const;

export const PRERENDER_ROUTES: readonly string[] = [
  '/',
  '/projects',
  '/projects/amarisa-court',
  '/projects/lekki-commercial',
  '/projects/niger-delta-civil',
  '/projects/commercial-solar',
  '/insights',
];

export function resolveSiteUrl(rawUrl?: string | null): string {
  const trimmed = rawUrl?.trim();
  if (!trimmed || trimmed === 'MY_APP_URL' || trimmed.includes('petiklimited.com')) {
    return DEFAULT_SITE_URL;
  }
  return trimmed.replace(/\/+$/, '');
}

export function normalizeRoutePath(rawPathname: string): string {
  const withoutQuery = rawPathname.split(/[?#]/)[0] || '/';
  const normalized = withoutQuery.replace(/\/+$/, '') || '/';
  return normalized.startsWith('/') ? normalized : `/${normalized}`;
}

export function parseRoutePath(rawPathname: string): ParsedRoute {
  const path = normalizeRoutePath(rawPathname);
  if (path === '/projects') {
    return { view: 'projects', projectId: null };
  }
  if (path.startsWith('/projects/')) {
    const slug = path.slice('/projects/'.length).trim();
    if (slug.length > 0) {
      return { view: 'projects', projectId: slug };
    }
    return { view: 'projects', projectId: null };
  }
  if (path === '/insights') {
    return { view: 'insights', projectId: null };
  }
  return { view: 'home', projectId: null };
}

export function getRoutePath(view: SeoPageView, projectId?: string | null): string {
  if (view === 'projects') {
    return projectId ? `/projects/${projectId}` : '/projects';
  }
  if (view === 'insights') {
    return '/insights';
  }
  return '/';
}

const ROUTE_META_MAP: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Petik Limited | Construction & Real Estate Nigeria',
    description:
      'Real estate, civil construction, project management, solar energy, and Amarisa Court shortlets in Nigeria. Contact Petik Limited today.',
  },
  '/projects': {
    title: 'Projects & Case Studies | Petik Limited Nigeria',
    description:
      'Explore Petik Limited real estate, civil construction, project management, and solar case studies across Nigeria. Discuss your project today.',
  },
  '/projects/amarisa-court': {
    title: 'Amarisa Court Case Study | Petik Limited',
    description:
      'Amarisa Court shortlet residential development in Osogbo by Petik Limited. Review project facts, scope, and book or enquire today.',
  },
  '/projects/lekki-commercial': {
    title: 'Lekki Commercial Office | Petik Limited',
    description:
      'Lekki Commercial Office project in Lagos by Petik Limited. Review scope, construction delivery details, and request a consultation today.',
  },
  '/projects/niger-delta-civil': {
    title: 'Niger Delta Civil Works | Petik Limited',
    description:
      'Niger Delta civil and drainage infrastructure works in Rivers State by Petik Limited. View project scope and discuss your site today.',
  },
  '/projects/commercial-solar': {
    title: 'Commercial Solar Project | Petik Limited',
    description:
      'Commercial solar PV and battery integration project by Petik Limited. Inspect project facts, scope, and request a site assessment today.',
  },
  '/insights': {
    title: 'Engineering Insights | Petik Limited Nigeria',
    description:
      'Read Petik Limited technical guides on Nigerian construction quality control, property advisory, and infrastructure. Consult our team today.',
  },
};

export function getRouteSeoMeta(
  rawPathname: string,
  configuredSiteUrl?: string | null
): RouteSeoMeta {
  const siteUrl = resolveSiteUrl(configuredSiteUrl);
  const path = normalizeRoutePath(rawPathname);
  const matched = ROUTE_META_MAP[path] ?? ROUTE_META_MAP['/'];
  const canonicalPath = ROUTE_META_MAP[path] ? path : '/';
  const canonicalUrl = `${siteUrl}${canonicalPath === '/' ? '/' : canonicalPath}`;
  const imageUrl = `${siteUrl}/og-petik-1200x630.jpg`;

  return {
    path: canonicalPath,
    title: matched.title,
    description: matched.description,
    canonicalUrl,
    ogUrl: canonicalUrl,
    ogSiteName: 'Petik Limited',
    ogImageUrl: imageUrl,
    ogImageWidth: '1200',
    ogImageHeight: '630',
    ogImageAlt: 'Petik Limited commercial real estate, construction, and project management in Nigeria',
    twitterImageUrl: imageUrl,
  };
}

export function buildOrganizationJsonLd(configuredSiteUrl?: string | null) {
  const siteUrl = resolveSiteUrl(configuredSiteUrl);
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Petik Limited',
    url: `${siteUrl}/`,
    logo: `${siteUrl}/petik-logo.png`,
    email: 'info@petiklimited.com',
    telephone: TRUST_SIGNALS.phoneNumber,
    description:
      'Indigenous Nigerian company providing civil construction, project management, real estate development, facility management, solar PV energy, downstream fuel logistics, and Amarisa Court shortlets.',
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        '2nd Floor, Lagos State Court of Arbitration, 1A Remi Olowude Street, Lekki-Epe Expressway Roundabout',
      addressLocality: 'Lekki Phase I',
      addressRegion: 'Lagos State',
      addressCountry: 'NG',
    },
    sameAs: TRUST_SIGNALS.sameAs,
  };
}

export function buildSitemapXml(configuredSiteUrl?: string | null): string {
  const siteUrl = resolveSiteUrl(configuredSiteUrl);
  const urlNodes = PRERENDER_ROUTES.map((routePath) => {
    const loc = `${siteUrl}${routePath === '/' ? '/' : routePath}`;
    const priority = routePath === '/' ? '1.0' : routePath === '/projects' ? '0.9' : '0.8';
    return [
      '  <url>',
      `    <loc>${loc}</loc>`,
      `    <changefreq>${routePath === '/' ? 'weekly' : 'monthly'}</changefreq>`,
      `    <priority>${priority}</priority>`,
      '  </url>',
    ].join('\n');
  }).join('\n');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlNodes,
    '</urlset>',
    '',
  ].join('\n');
}

export function buildRobotsTxt(configuredSiteUrl?: string | null): string {
  const siteUrl = resolveSiteUrl(configuredSiteUrl);
  return [
    'User-agent: *',
    'Allow: /',
    `Sitemap: ${siteUrl}/sitemap.xml`,
    '',
  ].join('\n');
}
