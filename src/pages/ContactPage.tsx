import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight, CheckCircle2, AlertCircle, Send, ExternalLink } from 'lucide-react';
import { BRAND, SERVICES } from '../data/brandData';

interface ContactPageProps {
  initialServiceId?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialServiceId }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cityLocation: 'Port Harcourt',
    clientRole: 'Property Owner',
    serviceRequired: initialServiceId || 'interior-design',
    projectType: 'Residential',
    budgetRange: '₦7M – ₦15M',
    timeline: 'Within 1–3 Months',
    projectVision: '',
    referenceNotes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBrief, setSubmittedBrief] = useState<typeof formData | null>(null);

  useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, serviceRequired: initialServiceId }));
    }
  }, [initialServiceId]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone or WhatsApp number is required';
    if (!formData.cityLocation.trim()) errs.cityLocation = 'Project city/location is required';
    if (!formData.projectVision.trim() || formData.projectVision.trim().length < 15) {
      errs.projectVision = 'Please describe your space in at least 15 characters';
    }
    return errs;
  };

  const selectedServiceName =
    SERVICES.find((s) => s.id === formData.serviceRequired)?.name || formData.serviceRequired;

  const buildBriefText = (data: typeof formData) => {
    return [
      `*PeeFee Interiors - Project Brief*`,
      `---------------------------------`,
      `• *Client Name:* ${data.fullName}`,
      `• *Email:* ${data.email}`,
      `• *Phone/WhatsApp:* ${data.phone}`,
      `• *Location:* ${data.cityLocation}`,
      `• *Client Role:* ${data.clientRole}`,
      `• *Service Required:* ${SERVICES.find((s) => s.id === data.serviceRequired)?.name || data.serviceRequired}`,
      `• *Project Type:* ${data.projectType}`,
      `• *Estimated Budget:* ${data.budgetRange}`,
      `• *Preferred Timeline:* ${data.timeline}`,
      `\n*Design Vision & Scope:*`,
      `${data.projectVision}`,
      data.referenceNotes ? `\n*Reference Notes:* ${data.referenceNotes}` : ''
    ].filter(Boolean).join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Save locally for safety
    try {
      localStorage.setItem('peefee_latest_enquiry', JSON.stringify({ ...formData, timestamp: new Date().toISOString() }));
    } catch {
      // localStorage may fail in restricted sandboxes
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedBrief(formData);
    }, 400);
  };

  const getWhatsAppSubmissionUrl = () => {
    if (!submittedBrief) return BRAND.whatsappUrl;
    const text = encodeURIComponent(buildBriefText(submittedBrief));
    return `https://wa.me/2348165762086?text=${text}`;
  };

  const getMailtoUrl = () => {
    if (!submittedBrief) return `mailto:${BRAND.email}`;
    const subject = encodeURIComponent(`Project Enquiry: ${submittedBrief.projectType} ${selectedServiceName} (${submittedBrief.fullName})`);
    const body = encodeURIComponent(buildBriefText(submittedBrief));
    return `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-24 animate-fade-in bg-[#FAF8F5] text-[#141312]">
      
      {/* Editorial Header */}
      <section className="py-16 sm:py-24 border-b border-[#141312]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8C8278] font-semibold">
              Project Enquiries
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#141312]">
              Tell Us About the Space You Imagine.
            </h1>
            <p className="text-lg text-[#5C554E] font-light leading-relaxed">
              Whether you’re planning a new space, transforming an existing one or exploring a commercial project, share your vision with us.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Form Column (Cols 1-7) */}
            <div className="lg:col-span-7 bg-[#F4EFEA] p-6 sm:p-10 border border-[#141312]/8 shadow-sm">
              
              {/* If submitted, show confirmed action modal */}
              {submittedBrief ? (
                <div className="space-y-6 py-6 animate-fade-in">
                  <div className="w-12 h-12 bg-[#141312] text-[#C5A880] rounded-sm flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <h2 className="font-serif text-3xl font-bold text-[#141312]">
                      Your Project Brief is Ready.
                    </h2>
                    <p className="text-sm text-[#5C554E] leading-relaxed">
                      Thank you, <strong className="text-[#141312]">{submittedBrief.fullName}</strong>. To ensure direct, personal attention from our principal design team, dispatch your brief instantly via WhatsApp or direct email below:
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 bg-[#FAF8F5] border border-[#141312]/10 text-xs space-y-2 font-mono text-[#4A453E]">
                    <p><strong>Service:</strong> {SERVICES.find(s => s.id === submittedBrief.serviceRequired)?.name}</p>
                    <p><strong>Location:</strong> {submittedBrief.cityLocation}</p>
                    <p><strong>Type:</strong> {submittedBrief.projectType} · Budget: {submittedBrief.budgetRange}</p>
                  </div>

                  {/* Instant Dispatch Actions */}
                  <div className="space-y-3 pt-2">
                    <a
                      href={getWhatsAppSubmissionUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2.5 py-4 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-lg"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Brief via WhatsApp (+2348165762086)</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </a>

                    <a
                      href={getMailtoUrl()}
                      className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 bg-[#141312] hover:bg-[#2C2A27] text-white font-semibold text-xs uppercase tracking-wider transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#C5A880]" />
                      <span>Send Brief to peefeeinteriors@gmail.com</span>
                    </a>

                    <button
                      onClick={() => setSubmittedBrief(null)}
                      className="w-full text-center py-2 text-xs text-[#8C8278] hover:text-[#141312] transition-colors"
                    >
                      ← Edit or submit another project
                    </button>
                  </div>
                </div>
              ) : (
                /* The Enquiry Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="border-b border-[#141312]/10 pb-4">
                    <h2 className="font-serif text-2xl font-bold text-[#141312]">
                      Project Consultation Form
                    </h2>
                    <p className="text-xs text-[#8C8278] mt-1">
                      Fill out your specifications below. We will review and provide a structured spatial plan and quotation.
                    </p>
                  </div>

                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#141312] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Chief Kenneth Briggs"
                        className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] border text-sm text-[#141312] focus:bg-white focus:outline-none transition-colors ${
                          errors.fullName ? 'border-red-500' : 'border-[#141312]/15 focus:border-[#141312]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#141312] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. client@example.com"
                        className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] border text-sm text-[#141312] focus:bg-white focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500' : 'border-[#141312]/15 focus:border-[#141312]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#141312] mb-1.5">
                        Phone or WhatsApp *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +234 816 576 2086"
                        className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] border text-sm text-[#141312] focus:bg-white focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-[#141312]/15 focus:border-[#141312]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#141312] mb-1.5">
                        City / Project Location *
                      </label>
                      <input
                        type="text"
                        value={formData.cityLocation}
                        onChange={(e) => setFormData({ ...formData, cityLocation: e.target.value })}
                        placeholder="e.g. Port Harcourt / Abuja / Lagos"
                        className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] border text-sm text-[#141312] focus:bg-white focus:outline-none transition-colors ${
                          errors.cityLocation ? 'border-red-500' : 'border-[#141312]/15 focus:border-[#141312]'
                        }`}
                      />
                      {errors.cityLocation && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.cityLocation}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Role & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#141312] mb-1.5">
                        I am a:
                      </label>
                      <select
                        value={formData.clientRole}
                        onChange={(e) => setFormData({ ...formData, clientRole: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#141312]/15 text-sm text-[#141312] focus:bg-white focus:outline-none"
                      >
                        <option value="Property Owner">Property Owner</option>
                        <option value="Developer">Property Developer</option>
                        <option value="Architect">Architect</option>
                        <option value="Designer">Interior Designer</option>
                        <option value="Potential Partner">Potential Partner</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#141312] mb-1.5">
                        Service Required:
                      </label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#141312]/15 text-sm text-[#141312] focus:bg-white focus:outline-none"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.name}
                          </option>
                        ))}
                        <option value="multiple">Combined / Full Turnkey Project</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Project Type, Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#141312] mb-1.5">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#141312]/15 text-sm text-[#141312] focus:bg-white focus:outline-none"
                      >
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Hospitality">Hospitality</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#141312] mb-1.5">
                        Approx. Budget
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#141312]/15 text-sm text-[#141312] focus:bg-white focus:outline-none"
                      >
                        <option value="₦3M – ₦7M">₦3M – ₦7M</option>
                        <option value="₦7M – ₦15M">₦7M – ₦15M</option>
                        <option value="₦15M – ₦30M">₦15M – ₦30M</option>
                        <option value="₦30M+">₦30M+</option>
                        <option value="Flexible / Discussion">Flexible / Open</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#141312] mb-1.5">
                        Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#141312]/15 text-sm text-[#141312] focus:bg-white focus:outline-none"
                      >
                        <option value="Immediate">Immediate</option>
                        <option value="Within 1–3 Months">Within 1–3 Months</option>
                        <option value="3–6 Months">3–6 Months</option>
                        <option value="Planning Phase">Planning Phase</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Vision & Details */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#141312] mb-1.5">
                      Project Details or Design Vision *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.projectVision}
                      onChange={(e) => setFormData({ ...formData, projectVision: e.target.value })}
                      placeholder="Tell us about the space: room dimensions, current condition, preferred materials (fluted timber, bouclé, marble), or specific features desired..."
                      className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] border text-sm text-[#141312] focus:bg-white focus:outline-none transition-colors ${
                        errors.projectVision ? 'border-red-500' : 'border-[#141312]/15 focus:border-[#141312]'
                      }`}
                    />
                    {errors.projectVision && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.projectVision}</span>
                      </p>
                    )}
                  </div>

                  {/* Reference Image Notes */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#141312] mb-1.5">
                      Reference Image Notes or Links (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.referenceNotes}
                      onChange={(e) => setFormData({ ...formData, referenceNotes: e.target.value })}
                      placeholder="e.g. Pinterest link, Google Drive folder, or 'Will share photos on WhatsApp'"
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#141312]/15 text-sm text-[#141312] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <p className="text-[11px] text-[#8C8278] leading-relaxed">
                    Privacy Guarantee: We respect your privacy. Your information is used exclusively to contact you regarding your project consultation.
                  </p>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-[#141312] hover:bg-[#2C2A27] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg group disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Formatting Brief...' : 'Review & Dispatch Project Brief'}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C5A880] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              )}

            </div>

            {/* Direct Contact & Locations Column (Cols 8-12) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Quick Communication Box */}
              <div className="p-8 bg-[#141312] text-[#FAF8F5] border border-[#2C2A27] space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold block mb-1">
                    Direct Contact Channels
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Connect With Our Team
                  </h3>
                </div>

                <div className="space-y-4 text-sm">
                  <a
                    href={`tel:${BRAND.phone}`}
                    className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-white group"
                  >
                    <div className="w-8 h-8 rounded-sm bg-[#C5A880] text-[#141312] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-[#A8A29A]">Direct Telephone</p>
                      <p className="font-medium">{BRAND.phoneDisplay}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 ml-auto text-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  <a
                    href={BRAND.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 transition-colors text-white group"
                  >
                    <div className="w-8 h-8 rounded-sm bg-[#25D366] text-white flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-[#A8A29A]">WhatsApp Chat</p>
                      <p className="font-medium">+234 816 576 2086</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 ml-auto text-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  <a
                    href={`mailto:${BRAND.email}`}
                    className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-white group"
                  >
                    <div className="w-8 h-8 rounded-sm bg-white text-[#141312] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-[#A8A29A]">Email Enquiry</p>
                      <p className="font-medium text-xs sm:text-sm">{BRAND.email}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 ml-auto text-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

              {/* Verified Locations Box */}
              <div className="p-8 bg-[#F4EFEA] border border-[#141312]/8 space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#8C8278] font-semibold block mb-1">
                    Physical Presence
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#141312]">
                    Our 3 Port Harcourt Facilities
                  </h3>
                </div>

                <div className="space-y-4">
                  {BRAND.locations.map((loc) => (
                    <div key={loc.type} className="p-4 bg-[#FAF8F5] border border-[#141312]/5 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#141312]">
                        <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                        <span>{loc.type}: {loc.label}</span>
                      </div>
                      <p className="text-xs text-[#2C2A27] font-medium pl-5">{loc.address}</p>
                      <p className="text-[11px] text-[#8C8278] pl-5">{loc.city}, {loc.state}</p>
                      <p className="text-[11px] text-[#5C554E] pl-5 pt-1 italic">{loc.description}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
