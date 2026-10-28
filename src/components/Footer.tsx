import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, MessageSquare } from 'lucide-react';
import { BRAND, SERVICES } from '../data/brandData';

interface FooterProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#141312] text-[#EFECE4] border-t border-[#2C2A27]">
      {/* Top Footer Strip: Pre-CTA & Brand Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Column (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#FAF8F5] p-1.5 flex items-center justify-center shrink-0">
                <img
                  src="/assets/aistudio/PeeFee_logo-1_a9734fc5.svg"
                  alt="PeeFee Interiors Monogram"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                PeeFee Interiors
              </span>
            </div>

            <p className="font-serif italic text-lg sm:text-xl text-[#C5A880] leading-snug">
              “{BRAND.tagline}”
            </p>

            <p className="text-sm text-[#A8A29A] leading-relaxed max-w-md">
              Full-service architectural design, tailored interior transformation, bespoke TV console engineering, and artisan upholstery crafted in Port Harcourt, Rivers State, Nigeria.
            </p>

            {/* Quick Contact Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp Consult</span>
              </a>

              <a
                href={`tel:${BRAND.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{BRAND.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Navigation Column (Col 6-7) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-[#A8A29A] hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-[#A8A29A] hover:text-white transition-colors"
                >
                  About Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-[#A8A29A] hover:text-white transition-colors"
                >
                  Design Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="text-[#A8A29A] hover:text-white transition-colors"
                >
                  Selected Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-[#A8A29A] hover:text-white transition-colors"
                >
                  Start Your Project
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column (Col 8-9) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880]">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate('contact', { service: s.id })}
                    className="text-[#A8A29A] hover:text-white transition-colors text-left flex items-center gap-1 group"
                  >
                    <span>{s.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Locations Column (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880]">
              Verified Locations
            </h4>
            <div className="space-y-4 text-xs text-[#A8A29A]">
              {BRAND.locations.map((loc) => (
                <div key={loc.type} className="border-l border-[#C5A880]/30 pl-3 py-0.5 space-y-0.5">
                  <div className="flex items-center gap-1.5 text-white font-medium">
                    <MapPin className="w-3 h-3 text-[#C5A880]" />
                    <span>{loc.type}: {loc.label}</span>
                  </div>
                  <p className="text-[#D8D1C7]">{loc.address}</p>
                  <p className="text-[11px] text-[#8C8278]">{loc.city}, {loc.state}</p>
                </div>
              ))}

              <div className="pt-2 text-xs text-[#A8A29A] space-y-1">
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-2 text-white hover:text-[#C5A880] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{BRAND.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C8278]">
          <p>© {new Date().getFullYear()} PeeFee Interiors. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Primary Market: Port Harcourt, Nigeria</span>
            <span aria-hidden="true">·</span>
            <span>Worldwide Design Enquiries Welcome</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
