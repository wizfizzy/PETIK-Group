import React, { useEffect, useRef, useState } from 'react';
import { Navbar, ActivePageView } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompanyIntro } from './components/CompanyIntro';
import { OurTeam } from './components/OurTeam';
import { BusinessCapabilities } from './components/BusinessCapabilities';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ProjectsPage } from './components/ProjectsPage';
import { WhyPetik } from './components/WhyPetik';
import { FeaturedProperty } from './components/FeaturedProperty';
import { InsightsNews } from './components/InsightsNews';
import { ContactSection, ContactSectionHandle } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FooterInfoModal, FooterInfoTab } from './components/FooterInfoModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { InsightsBlogPage } from './components/InsightsBlogPage';
import { ServiceItem, ProjectItem } from './data/companyData';
import {
  getRoutePath,
  getRouteSeoMeta,
  parseRoutePath,
} from './utils/seo';

interface AppProps {
  initialPath?: string;
}

function updateClientSeoHead(pathname: string) {
  if (typeof document === 'undefined') return;
  const configuredSiteUrl =
    typeof import.meta !== 'undefined' && import.meta.env
      ? (import.meta.env.VITE_SITE_URL as string | undefined)
      : undefined;
  const meta = getRouteSeoMeta(pathname, configuredSiteUrl);

  document.title = meta.title;

  const setMetaTag = (
    selector: string,
    attrName: 'name' | 'property',
    attrValue: string,
    content: string
  ) => {
    let el = document.head.querySelector<HTMLMetaElement>(selector);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, attrValue);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setMetaTag('meta[name="description"]', 'name', 'description', meta.description);
  setMetaTag('meta[property="og:title"]', 'property', 'og:title', meta.title);
  setMetaTag('meta[property="og:description"]', 'property', 'og:description', meta.description);
  setMetaTag('meta[property="og:url"]', 'property', 'og:url', meta.ogUrl);
  setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', meta.ogSiteName);
  setMetaTag('meta[property="og:image"]', 'property', 'og:image', meta.ogImageUrl);
  setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
  setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description);
  setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', meta.twitterImageUrl);

  let canonicalEl = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', meta.canonicalUrl);
}

export default function App({ initialPath }: AppProps) {
  const resolvedInitialPath =
    initialPath ?? (typeof window !== 'undefined' ? window.location.pathname : '/');
  const initialRoute = parseRoutePath(resolvedInitialPath);

  const contactSectionRef = useRef<ContactSectionHandle>(null);
  const [activeView, setActiveView] = useState<ActivePageView>(initialRoute.view);
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);
  const [activeFooterInfoTab, setActiveFooterInfoTab] = useState<FooterInfoTab | null>(null);
  const [selectedInsightId, setSelectedInsightId] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    initialRoute.projectId
  );

  const syncBrowserRoute = (
    view: ActivePageView,
    projectId: string | null = null,
    hash?: string
  ) => {
    if (typeof window === 'undefined') return;
    const basePath = getRoutePath(view, projectId);
    const targetUrl = hash ? `${basePath}#${hash}` : basePath;
    if (window.location.pathname + window.location.hash !== targetUrl) {
      window.history.pushState({ view, projectId }, '', targetUrl);
    }
  };

  useEffect(() => {
    const currentPath = getRoutePath(activeView, selectedProjectId);
    updateClientSeoHead(currentPath);
  }, [activeView, selectedProjectId]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handlePopState = () => {
      const parsed = parseRoutePath(window.location.pathname);
      setActiveView(parsed.view);
      setSelectedProjectId(parsed.projectId);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const scrollToSection = (id: string) => {
    if (activeView !== 'home') {
      setActiveView('home');
      setSelectedProjectId(null);
      syncBrowserRoute('home', null, id);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 60);
      return;
    }

    syncBrowserRoute('home', null, id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenEnquiry = (prefilledSector?: string) => {
    const applyScrollAndFocus = () => {
      if (prefilledSector && contactSectionRef.current) {
        contactSectionRef.current.prefillService(prefilledSector);
      } else {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        if (contactSectionRef.current) {
          contactSectionRef.current.focusForm();
        }
      }
    };

    if (activeView !== 'home') {
      setActiveView('home');
      setSelectedProjectId(null);
      syncBrowserRoute('home', null, 'contact');
      setTimeout(applyScrollAndFocus, 80);
    } else {
      syncBrowserRoute('home', null, 'contact');
      applyScrollAndFocus();
    }
  };

  const handleSelectProject = (projectId: string | null) => {
    setSelectedProjectId(projectId);
    setActiveView('projects');
    syncBrowserRoute('projects', projectId);
  };

  const handleOpenProjectsPage = (projectId: string | null = null) => {
    setSelectedProjectId(projectId);
    setActiveView('projects');
    syncBrowserRoute('projects', projectId);
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 40);
    }
  };

  const handleDiscussSimilarProject = (project: ProjectItem) => {
    handleOpenEnquiry(project.enquiryService);
  };

  const handleOpenInsightsBlog = (articleId: string | null = null) => {
    setSelectedInsightId(articleId);
    setActiveView('insights');
    syncBrowserRoute('insights', null);
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        if (articleId) {
          const readerEl = document.getElementById('featured-insight-reader');
          if (readerEl) {
            readerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
          }
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 60);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F5] text-[#252B32] font-sans selection:bg-[#102B46] selection:text-white">
      {/* SECTION 1: HEADER / NAVIGATION */}
      <Navbar
        activeView={activeView}
        onNavigateHomeSection={scrollToSection}
        onOpenProjectsPage={() => handleOpenProjectsPage(null)}
        onOpenInsightsBlog={() => handleOpenInsightsBlog(null)}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      <main className="flex-1">
        {activeView === 'projects' ? (
          <ProjectsPage
            selectedProjectId={selectedProjectId}
            onSelectProject={handleSelectProject}
            onDiscussSimilarProject={handleDiscussSimilarProject}
            onOpenGeneralEnquiry={() => handleOpenEnquiry()}
          />
        ) : activeView === 'insights' ? (
          <InsightsBlogPage
            onEnquire={() => handleOpenEnquiry()}
            focusedArticleId={selectedInsightId}
            onSelectFocusedArticle={setSelectedInsightId}
          />
        ) : (
          <>
            {/* SECTION 2: HERO */}
            <Hero
              onExploreCapabilities={() => scrollToSection('services')}
              onStartConversation={() => handleOpenEnquiry()}
            />

            {/* SECTION 3: COMPANY INTRODUCTION */}
            <CompanyIntro />

            {/* SECTION 3B: OUR TEAM */}
            <OurTeam />

            {/* SECTION 4: BUSINESS CAPABILITIES */}
            <BusinessCapabilities
              onOpenService={(service) => setActiveServiceModal(service)}
            />

            {/* SECTION 5: FEATURED PROJECTS / PORTFOLIO */}
            <FeaturedProjects
              onDiscussProject={() => handleOpenEnquiry()}
              onOpenProjectsPage={() => handleOpenProjectsPage(null)}
              onReadCaseStudy={(projectId) => handleOpenProjectsPage(projectId)}
            />

            {/* SECTION 6: WHY PETIK */}
            <WhyPetik />

            {/* SECTION 7: FEATURED PROPERTY / SHORTLET */}
            <FeaturedProperty onBookShortlet={() => handleOpenEnquiry('Amarisa Court Shortlet Living')} />

            {/* SECTION 8: INSIGHTS / NEWS */}
            <InsightsNews
              onEnquire={() => handleOpenEnquiry()}
              onOpenBlogPage={() => handleOpenInsightsBlog(null)}
            />

            {/* SECTION 9: CONTACT / CONVERSION CTA */}
            <ContactSection ref={contactSectionRef} />
          </>
        )}
      </main>

      {/* SECTION 10: FOOTER */}
      <Footer
        onNavigateHomeSection={scrollToSection}
        onOpenProjectsPage={() => handleOpenProjectsPage(null)}
        onOpenInfoTab={(tab) => setActiveFooterInfoTab(tab)}
        onOpenInsightArticle={(articleId) => handleOpenInsightsBlog(articleId)}
        onOpenEnquiry={(sector) => handleOpenEnquiry(sector)}
      />

      {/* Shared Service Detail Modal */}
      <ServiceDetailModal
        service={activeServiceModal}
        onClose={() => setActiveServiceModal(null)}
        onSelectForEnquiry={(serviceTitle) => handleOpenEnquiry(serviceTitle)}
      />

      {/* Footer Information Modal (FAQ, Privacy Policy, Terms of Service) */}
      <FooterInfoModal
        activeTab={activeFooterInfoTab}
        onSelectTab={(tab) => setActiveFooterInfoTab(tab)}
        onClose={() => setActiveFooterInfoTab(null)}
        onEnquire={(subject) => handleOpenEnquiry(subject)}
      />
    </div>
  );
}
