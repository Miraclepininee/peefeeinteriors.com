import React from 'react';
import { ArrowUpRight, CheckCircle2, Info } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/brandData';

interface ServicesOverviewProps {
  onSelectService: (serviceId: string) => void;
  onViewAllServices: () => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  onSelectService,
  onViewAllServices,
}) => {
  return (
    <section className="py-20 lg:py-28 bg-[#F4EFEA] text-[#141312] border-t border-[#141312]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#141312]/10">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8C8278] font-semibold">
              Areas of Specialization
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#141312]">
              Our Design & Craft Services
            </h2>
            <p className="text-sm sm:text-base text-[#5C554E] leading-relaxed">
              Six core disciplines executed with architectural precision, premium materials, and bespoke in-house fabrication.
            </p>
          </div>

          <button
            onClick={onViewAllServices}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#141312] hover:text-[#C5A880] transition-colors shrink-0"
          >
            <span>Explore All 6 Services</span>
            <ArrowUpRight className="w-4 h-4 text-[#C5A880]" />
          </button>
        </div>

        {/* 6 Services Grid (3x2 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group bg-[#FAF8F5] border border-[#141312]/8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#C5A880]/50"
            >
              {/* Media Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#141312]">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Number Badge */}
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#141312]/80 backdrop-blur-sm text-[11px] font-mono text-white border border-white/10">
                  0{index + 1}
                </div>

                {/* Media Authenticity Label */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  {service.isAuthenticMedia ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#141312]/75 backdrop-blur-sm text-[10px] text-white/90">
                      <CheckCircle2 className="w-2.5 h-2.5 text-[#C5A880]" />
                      <span>Authentic PeeFee Asset</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#141312]/75 backdrop-blur-sm text-[10px] text-[#D8D1C7]">
                      <Info className="w-2.5 h-2.5 text-amber-400" />
                      <span>Illustrative</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-[#141312] group-hover:text-[#8C8278] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C554E] leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                {/* What it involves snippet */}
                <div className="pt-2 border-t border-[#141312]/5 space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#8C8278] font-semibold block">
                    Key Deliverables
                  </span>
                  <p className="text-xs text-[#2C2A27] font-medium truncate">
                    {service.involves[0]}
                  </p>
                  <p className="text-xs text-[#5C554E] truncate">
                    {service.involves[1]}
                  </p>
                </div>

                {/* Card CTA */}
                <div className="pt-4">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="w-full flex items-center justify-between py-2.5 px-3 bg-[#141312]/5 hover:bg-[#141312] text-[#141312] hover:text-white transition-all text-xs font-semibold uppercase tracking-wider group/btn"
                  >
                    <span>Request This Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
