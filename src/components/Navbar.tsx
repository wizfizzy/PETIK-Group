import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';

export type ActivePageView = 'home' | 'projects' | 'insights';

interface NavbarProps {
  activeView: ActivePageView;
  onNavigateHomeSection: (sectionId: string) => void;
  onOpenInsightsBlog: () => void;
  onOpenEnquiry: () => void;
}

type DropdownKey = 'services' | 'shortlets';

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onNavigateHomeSection,
  onOpenInsightsBlog,
  onOpenEnquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const hoverOpenedRef = useRef<DropdownKey | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
        hoverOpenedRef.current = null;
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        hoverOpenedRef.current = null;
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const serviceItems = [
    { id: 'construction-pm', label: 'Petik Construction and Project Management' },
    { id: 'real-estate', label: 'Petik Real Estate' },
    { id: 'renewable-energy', label: 'Petik Renewable Energy' },
    { id: 'downstream-energy', label: 'Petik Oil and Gas Downstream' },
  ];

  const shortletItems = [
    { id: 'properties', label: 'Amarisa Court' },
  ];

  const closeAllMenus = () => {
    setOpenDropdown(null);
    hoverOpenedRef.current = null;
    setMobileMenuOpen(false);
  };

  const handleDesktopMouseEnter = (key: DropdownKey) => {
    hoverOpenedRef.current = key;
    setOpenDropdown(key);
  };

  const handleDesktopMouseLeave = () => {
    hoverOpenedRef.current = null;
    setOpenDropdown(null);
  };

  const toggleDesktopDropdown = (key: DropdownKey) => {
    if (hoverOpenedRef.current === key) {
      hoverOpenedRef.current = null;
      setOpenDropdown(key);
      return;
    }
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const toggleMobileAccordion = (key: DropdownKey) => {
    setMobileExpanded((prev) => (prev === key ? null : key));
  };

  const solidHeader = isScrolled || activeView !== 'home';

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solidHeader
          ? 'bg-[#102B46]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5'
          : 'bg-gradient-to-b from-[#102B46]/85 via-[#102B46]/45 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              closeAllMenus();
              onNavigateHomeSection('hero');
            }}
            className="flex items-center gap-2 group text-white tracking-wider whitespace-nowrap shrink-0"
            aria-label="Petik Limited Homepage"
          >
            <div className="w-8 h-8 rounded bg-[#a17d2c] flex items-center justify-center font-bold text-white text-base shadow-sm group-hover:bg-[#8f6e24] transition-colors">
              P
            </div>
            <span className="font-display font-extrabold text-lg sm:text-xl text-white tracking-tight leading-none">
              PETIK
            </span>
          </a>

          {/* Zone 2: Desktop Navigation with Requested Hierarchy & Dropdowns */}
          <nav
            className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-200"
            aria-label="Primary Navigation"
          >
            {/* 1. Home */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                closeAllMenus();
                onNavigateHomeSection('hero');
              }}
              className={`hover:text-white transition-colors py-1.5 whitespace-nowrap shrink-0 ${
                activeView === 'home' ? 'text-white' : 'text-slate-200'
              }`}
            >
              Home
            </a>

            {/* 2. Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDesktopMouseEnter('services')}
              onMouseLeave={handleDesktopMouseLeave}
            >
              <button
                type="button"
                onClick={() => toggleDesktopDropdown('services')}
                aria-expanded={openDropdown === 'services'}
                aria-haspopup="true"
                className="inline-flex items-center gap-1.5 py-1.5 hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#a17d2c] transition-transform duration-200 ${
                    openDropdown === 'services' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openDropdown === 'services' && (
                <div
                  role="menu"
                  aria-label="Services submenu"
                  className="absolute left-0 top-full pt-2 w-[350px] z-50"
                >
                  <div className="bg-white rounded-xl shadow-2xl border border-[#EDEFF1] p-2 text-[#102B46]">
                    {serviceItems.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        role="menuitem"
                        onClick={() => {
                          closeAllMenus();
                          onNavigateHomeSection('services');
                        }}
                        className="w-full text-left px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-[#102B46] hover:bg-[#F8F8F5] hover:text-[#a17d2c] transition-colors flex items-center justify-between gap-2"
                      >
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 3. Our Shortlets Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDesktopMouseEnter('shortlets')}
              onMouseLeave={handleDesktopMouseLeave}
            >
              <button
                type="button"
                onClick={() => toggleDesktopDropdown('shortlets')}
                aria-expanded={openDropdown === 'shortlets'}
                aria-haspopup="true"
                className="inline-flex items-center gap-1.5 py-1.5 hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                <span>Our Shortlets</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#a17d2c] transition-transform duration-200 ${
                    openDropdown === 'shortlets' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openDropdown === 'shortlets' && (
                <div
                  role="menu"
                  aria-label="Our Shortlets submenu"
                  className="absolute left-0 top-full pt-2 w-56 z-50"
                >
                  <div className="bg-white rounded-xl shadow-2xl border border-[#EDEFF1] p-2 text-[#102B46]">
                    {shortletItems.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        role="menuitem"
                        onClick={() => {
                          closeAllMenus();
                          onNavigateHomeSection(item.id);
                        }}
                        className="w-full text-left px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-[#102B46] hover:bg-[#F8F8F5] hover:text-[#a17d2c] transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 4. About Us */}
            <a
              href="/#about"
              onClick={(e) => {
                e.preventDefault();
                closeAllMenus();
                onNavigateHomeSection('about');
              }}
              className="hover:text-white transition-colors py-1.5 whitespace-nowrap shrink-0"
            >
              About Us
            </a>

            {/* 5. Contact Us */}
            <a
              href="/#contact"
              onClick={(e) => {
                e.preventDefault();
                closeAllMenus();
                onNavigateHomeSection('contact');
              }}
              className="hover:text-white transition-colors py-1.5 whitespace-nowrap shrink-0"
            >
              Contact Us
            </a>

            {/* 7. Insights (Blog Page) */}
            <a
              href="/insights"
              onClick={(e) => {
                e.preventDefault();
                closeAllMenus();
                onOpenInsightsBlog();
              }}
              className={`py-1.5 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
                activeView === 'insights'
                  ? 'text-white border-[#a17d2c]'
                  : 'text-slate-200 border-transparent hover:text-white'
              }`}
            >
              Insights
            </a>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                closeAllMenus();
                onOpenEnquiry();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#a17d2c] hover:bg-[#8f6e24] transition-all duration-200 shadow-sm whitespace-nowrap shrink-0"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                closeAllMenus();
                onOpenEnquiry();
              }}
              className="sm:hidden px-3 py-1.5 rounded text-xs font-semibold text-white bg-[#a17d2c] whitespace-nowrap"
            >
              Let's Talk
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#a17d2c]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#102B46] border-b border-white/10 px-4 pt-4 pb-6 space-y-2 shadow-2xl max-h-[82vh] overflow-y-auto">
          {/* 1. Home */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              closeAllMenus();
              onNavigateHomeSection('hero');
            }}
            className="block px-3 py-3 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
          >
            Home
          </a>

          {/* 2. Services Accordion */}
          <div>
            <button
              type="button"
              onClick={() => toggleMobileAccordion('services')}
              aria-expanded={mobileExpanded === 'services'}
              className="w-full flex items-center justify-between px-3 py-3 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 text-[#a17d2c] transition-transform ${
                  mobileExpanded === 'services' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {mobileExpanded === 'services' && (
              <div className="pl-4 pr-2 py-1 space-y-1">
                {serviceItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      closeAllMenus();
                      onNavigateHomeSection('services');
                    }}
                    className="w-full text-left px-3 py-2.5 rounded-md text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 3. Our Shortlets Accordion */}
          <div>
            <button
              type="button"
              onClick={() => toggleMobileAccordion('shortlets')}
              aria-expanded={mobileExpanded === 'shortlets'}
              className="w-full flex items-center justify-between px-3 py-3 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
            >
              <span>Our Shortlets</span>
              <ChevronDown
                className={`w-4 h-4 text-[#a17d2c] transition-transform ${
                  mobileExpanded === 'shortlets' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {mobileExpanded === 'shortlets' && (
              <div className="pl-4 pr-2 py-1 space-y-1">
                {shortletItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      closeAllMenus();
                      onNavigateHomeSection(item.id);
                    }}
                    className="w-full text-left px-3 py-2.5 rounded-md text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 4. About Us */}
          <a
            href="/#about"
            onClick={(e) => {
              e.preventDefault();
              closeAllMenus();
              onNavigateHomeSection('about');
            }}
            className="block px-3 py-3 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
          >
            About Us
          </a>

          {/* 5. Contact Us */}
          <a
            href="/#contact"
            onClick={(e) => {
              e.preventDefault();
              closeAllMenus();
              onNavigateHomeSection('contact');
            }}
            className="block px-3 py-3 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
          >
            Contact Us
          </a>

          {/* 7. Insights (Blog Page) */}
          <a
            href="/insights"
            onClick={(e) => {
              e.preventDefault();
              closeAllMenus();
              onOpenInsightsBlog();
            }}
            className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
          >
            Insights
          </a>

          <div className="pt-4 border-t border-white/10">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                closeAllMenus();
                onOpenEnquiry();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider text-white bg-[#a17d2c] hover:bg-[#8f6e24] transition-colors"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
