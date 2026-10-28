import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Info, ChevronRight, Layers, Sparkles } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/brandData';
import { ClosingCTA } from '../components/ClosingCTA';

interface ServicesPageProps {
  onSelectService: (serviceId: string) => void;
  onStartProject: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
  onStartProject,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  return (
    <div className="pt-24 animate-fade-in bg-[#FAF8F5] text-[#141312]">
      
      {/* Header Banner */}
      <section className="py-16 sm:py-24 border-b border-[#141312]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8C8278] font-semibold">
              Our Disciplines
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#141312]">
              Architectural & Interior Disciplines
            </h1>
            <p className="text-lg text-[#5C554E] font-light leading-relaxed">
              We offer six specialized services across design, spatial architecture, and bespoke fabrication. Every service is delivered with obsessive attention to craftsmanship, durable materials, and personal collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Services Master Breakdown */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {SERVICES.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Frame (6 Cols) */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative aspect-[16/11] bg-[#141312] border border-[#141312]/10 overflow-hidden shadow-xl group">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Authenticity Pill */}
                    <div className="absolute top-4 left-4">
                      {service.isAuthenticMedia ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#141312]/85 backdrop-blur-sm text-xs text-white">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880]" />
                          <span>Verified PeeFee Craft</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#141312]/85 backdrop-blur-sm text-xs text-[#D8D1C7]">
                          <Info className="w-3.5 h-3.5 text-amber-400" />
                          <span>Illustrative Representation</span>
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm text-xs font-mono text-[#C5A880]">
                      Service 0{index + 1}
                    </div>
                  </div>

                  {service.illustrativeNote && (
                    <p className="text-[11px] text-[#8C8278] mt-2 italic">
                      *{service.illustrativeNote}
                    </p>
                  )}
                </div>

                {/* Content Frame (6 Cols) */}
                <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#C5A880]">
                      Specialization 0{index + 1}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#141312]">
                      {service.name}
                    </h2>
                    <p className="font-serif italic text-lg text-[#8C8278]">
                      {service.shortDescription}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#4A453E] leading-relaxed font-light">
                    {service.detailedDescription}
                  </p>

                  {/* Scope / What is involved */}
                  <div className="pt-2 space-y-3">
                    <h3 className="text-xs uppercase tracking-wider text-[#141312] font-semibold">
                      What This Service Involves:
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#5C554E]">
                      {service.involves.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <ChevronRight className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onSelectService(service.id)}
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#141312] hover:bg-[#2C2A27] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md group"
                    >
                      <span>Enquire About {service.name}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#C5A880] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Closing CTA */}
      <ClosingCTA onStartProject={onStartProject} />

    </div>
  );
};
