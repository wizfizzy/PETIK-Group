import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import {
  PRERENDER_ROUTES,
  buildOrganizationJsonLd,
  buildRobotsTxt,
  buildSitemapXml,
  getRouteSeoMeta,
  resolveSiteUrl,
} from './utils/seo';

export {
  PRERENDER_ROUTES,
  buildOrganizationJsonLd,
  buildRobotsTxt,
  buildSitemapXml,
  getRouteSeoMeta,
  resolveSiteUrl,
};

export function renderRoute(routePath: string, configuredSiteUrl?: string | null) {
  const siteUrl = resolveSiteUrl(configuredSiteUrl);
  const appHtml = renderToString(<App initialPath={routePath} />);
  const meta = getRouteSeoMeta(routePath, siteUrl);
  const organizationJsonLd = buildOrganizationJsonLd(siteUrl);

  return {
    appHtml,
    meta,
    organizationJsonLd,
  };
}
