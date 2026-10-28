import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { BRAND } from '../data/brandData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#141312]/8 py-3 shadow-[0_4px_20px_rgba(20,19,18,0.03)]'
            : 'bg-[#FAF8F5]/70 backdrop-blur-sm border-b border-[#141312]/5 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark & Monogram */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus-visible:ring-2 focus-visible:ring-[#C5A880] rounded transition-opacity hover:opacity-85"
            aria-label="PeeFee Interiors - Back to home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-[#141312] p-1.5 flex items-center justify-center shrink-0 shadow-sm border border-[#C5A880]/30">
              <img
                src="/assets/aistudio/PeeFee_logo-1_a9734fc5.svg"
                alt="PeeFee Logo"
                className="w-full h-full object-contain invert brightness-200"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#141312] leading-none whitespace-nowrap">
                PeeFee Interiors
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C8278] font-medium mt-0.5 whitespace-nowrap">
                Architectural & Interior Studio
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id || (link.id === 'projects' && currentPage.startsWith('projects'));
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 ${
                    isActive
                      ? 'text-[#141312] font-semibold'
                      : 'text-[#5C554E] hover:text-[#141312]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5A880] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary CTA Button (Desktop) & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#141312] rounded-none hover:bg-[#2C2A27] transition-all duration-200 border border-[#141312] whitespace-nowrap shadow-sm group hover:border-[#C5A880]"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile menu trigger button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#141312] hover:text-[#8C8278] transition-colors focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#141312]/60 backdrop-blur-sm animate-fade-in">
          <div className="fixed top-0 right-0 w-[85%] max-w-sm h-full bg-[#FAF8F5] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#141312]/10 mb-8">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-sm bg-[#141312] p-1.5 flex items-center justify-center">
                    <img
                      src="/assets/aistudio/PeeFee_logo-1_a9734fc5.svg"
                      alt="PeeFee Logo"
                      className="w-full h-full object-contain invert brightness-200"
                    />
                  </div>
                  <span className="font-serif text-xl font-bold text-[#141312]">
                    PeeFee Interiors
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-[#5C554E] hover:text-[#141312]"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = currentPage === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`w-full text-left py-3 px-3 rounded-sm flex items-center justify-between text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-[#141312] text-white font-semibold'
                          : 'text-[#2C2A27] hover:bg-[#F4EFEA]'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full" />}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-[#141312]/10 space-y-3">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#141312] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#2C2A27]"
                >
                  <span>Start Your Project</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C5A880]" />
                </button>

                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366]/10 text-[#075E54] border border-[#25D366]/30 text-xs font-semibold uppercase tracking-wider hover:bg-[#25D366]/20 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-[#141312]/10 text-xs text-[#8C8278]">
              <p className="font-medium text-[#141312] mb-1">Port Harcourt, Nigeria</p>
              <a
                href={`tel:${BRAND.phone}`}
                className="flex items-center gap-1.5 hover:text-[#141312] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{BRAND.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
