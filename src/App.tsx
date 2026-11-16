import React, { useRef, useState } from 'react';
import { Navbar, ActivePageView } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompanyIntro } from './components/CompanyIntro';
import { BusinessCapabilities } from './components/BusinessCapabilities';
import { FeaturedProjects } from './components/FeaturedProjects';
import { WhyPetik } from './components/WhyPetik';
import { FeaturedProperty } from './components/FeaturedProperty';
import { InsightsNews } from './components/InsightsNews';
import { ContactSection, ContactSectionHandle } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FooterInfoModal, FooterInfoTab } from './components/FooterInfoModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { InsightsBlogPage } from './components/InsightsBlogPage';
import { ChatWidget } from './components/ChatWidget';
import { ServiceItem } from './data/companyData';

export default function App() {
  const contactSectionRef = useRef<ContactSectionHandle>(null);
  const [activeView, setActiveView] = useState<ActivePageView>('home');
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);
  const [activeFooterInfoTab, setActiveFooterInfoTab] = useState<FooterInfoTab | null>(null);
  const [selectedInsightId, setSelectedInsightId] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    if (activeView !== 'home') {
      setActiveView('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 60);
      return;
    }

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
      setTimeout(applyScrollAndFocus, 80);
    } else {
      applyScrollAndFocus();
    }
  };

  const handleOpenInsightsBlog = (articleId: string | null = null) => {
    setSelectedInsightId(articleId);
    setActiveView('insights');
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
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F5] text-[#252B32] font-sans selection:bg-[#102B46] selection:text-white">
      {/* SECTION 1: HEADER / NAVIGATION */}
      <Navbar
        activeView={activeView}
        onNavigateHomeSection={scrollToSection}
        onOpenInsightsBlog={handleOpenInsightsBlog}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      <main className="flex-1">
        {activeView === 'insights' ? (
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

            {/* SECTION 4: BUSINESS CAPABILITIES */}
            <BusinessCapabilities
              onOpenService={(service) => setActiveServiceModal(service)}
            />

            {/* SECTION 5: FEATURED PROJECTS / PORTFOLIO */}
            <FeaturedProjects onDiscussProject={() => handleOpenEnquiry()} />

            {/* SECTION 6: WHY PETIK */}
            <WhyPetik />

            {/* SECTION 7: FEATURED PROPERTY / SHORTLET */}
            <FeaturedProperty onBookShortlet={() => handleOpenEnquiry('Amarisa Court Shortlet Living')} />

            {/* SECTION 8: INSIGHTS / NEWS */}
            <InsightsNews
              onEnquire={() => handleOpenEnquiry()}
              onOpenBlogPage={handleOpenInsightsBlog}
            />

            {/* SECTION 9: CONTACT / CONVERSION CTA */}
            <ContactSection ref={contactSectionRef} />
          </>
        )}
      </main>

      {/* SECTION 10: FOOTER */}
      <Footer
        onNavigateHomeSection={scrollToSection}
        onOpenInfoTab={(tab) => setActiveFooterInfoTab(tab)}
        onOpenInsightArticle={(articleId) => handleOpenInsightsBlog(articleId)}
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

      {/* Floating Chat With Us Widget */}
      <ChatWidget onOpenEnquiry={(sector) => handleOpenEnquiry(sector)} />
    </div>
  );
}
