import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Clock, AlertCircle, Building2 } from 'lucide-react';
import { validateContactForm, generateEnquiryReference, ContactFormData } from '../utils/contact';
import { TRUST_SIGNALS, buildTelHref } from '../utils/trustSignals';
import { DirectContactButtons } from './DirectContactButtons';

export interface ContactSectionHandle {
  prefillService: (serviceName: string) => void;
  focusForm: () => void;
}

export const ContactSection = forwardRef<ContactSectionHandle>((_, ref) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    service: 'Construction & Project Management',
    subject: 'General Partnership Enquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<string | null>(null);

  useImperativeHandle(ref, () => ({
    prefillService: (serviceName: string) => {
      setFormData((prev) => ({
        ...prev,
        service: serviceName,
        subject: `Enquiry regarding ${serviceName}`,
        message: `Hello Petik team, I am interested in exploring services for ${serviceName}. Please share details on initial consultations and delivery timelines.`,
      }));
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    focusForm: () => {
      const element = document.getElementById('contact-name-input');
      if (element) {
        element.focus();
      }
    },
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate real client intake submission with tracking reference
    setTimeout(() => {
      setIsSubmitting(false);
      const refNumber = generateEnquiryReference('PTK');
      setSubmissionSuccess(refNumber);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: 'Construction & Project Management',
      subject: 'General Partnership Enquiry',
      message: '',
    });
    setErrors({});
    setSubmissionSuccess(null);
  };

  return (
    <section id="contact" className="py-24 sm:py-28 bg-[#102B46] text-white relative overflow-hidden">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#102B46] via-[#163B59]/60 to-[#102B46] pointer-events-none" />
      <div className="absolute -right-48 -bottom-48 w-96 h-96 rounded-full bg-[#a17d2c]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#a17d2c] block mb-3">
            START A CONVERSATION
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4 [text-wrap:balance]">
            Have a Project in Mind?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Contact our team about a property advisory brief, civil construction scope, facility management contract, solar PV installation, fuel supply request, or Amarisa Court booking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Office & Operational Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-6">
              <h3 className="font-display text-xl font-bold text-white">
                Petik Limited Corporate Office
              </h3>

              <div className="space-y-5 text-sm text-slate-300">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#a17d2c] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Lagos Corporate Headquarters</span>
                    <p className="text-xs leading-relaxed text-slate-300">
                      2nd Floor, Lagos State Court of Arbitration,<br />
                      1A Remi Olowude Street, Lekki-Epe Expressway Roundabout,<br />
                      Lekki Phase I, Lagos State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#a17d2c] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Regional Operations</span>
                    <p className="text-xs leading-relaxed text-slate-300">
                      Port Harcourt (Rivers State) · Osogbo (Osun State)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#a17d2c] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Direct Client Desk</span>
                    <a
                      href="mailto:info@petiklimited.com"
                      className="text-xs text-slate-300 hover:text-white transition-colors"
                    >
                      info@petiklimited.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#a17d2c] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Phone &amp; WhatsApp</span>
                    {buildTelHref(TRUST_SIGNALS.phoneNumber) ? (
                      <a
                        href={buildTelHref(TRUST_SIGNALS.phoneNumber)!}
                        className="text-xs text-slate-300 hover:text-white transition-colors"
                      >
                        {TRUST_SIGNALS.phoneNumber}
                      </a>
                    ) : (
                      <p className="text-xs text-slate-300">{TRUST_SIGNALS.phoneNumber}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Building2 className="w-5 h-5 text-[#a17d2c] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">CAC Registration</span>
                    <p className="text-xs text-slate-300">{TRUST_SIGNALS.cacRcNumber}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#a17d2c] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Business Hours</span>
                    <p className="text-xs text-slate-300">Monday – Friday: 8:00 AM – 5:00 PM (WAT)</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <DirectContactButtons />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-10 text-slate-900 shadow-2xl">
              {submissionSuccess ? (
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-[#a17d2c] uppercase tracking-wider block mb-1">
                      Enquiry Logged
                    </span>
                    <h3 className="font-display text-2xl font-bold text-[#102B46] mb-2">
                      Thank You, {formData.fullName.split(' ')[0]}
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Your consultation brief has been recorded with reference number:
                    </p>
                    <div className="my-3 inline-block px-4 py-1.5 rounded-lg bg-slate-100 font-mono text-sm font-bold text-[#102B46] tracking-wider">
                      {submissionSuccess}
                    </div>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      A representative from Petik Limited's {formData.service} division will follow up via {formData.email}.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 max-w-md mx-auto text-left">
                    To attach architectural drawings or Bills of Quantities directly, email{' '}
                    <a href="mailto:info@petiklimited.com" className="font-semibold text-[#102B46] underline">
                      info@petiklimited.com
                    </a>{' '}
                    with your reference number ({submissionSuccess}).
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#102B46] hover:bg-[#163B59] transition-colors"
                  >
                    <span>Submit Another Enquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-slate-100 pb-4 mb-2">
                    <h3 className="font-display text-xl font-bold text-[#102B46]">
                      Project Consultation Form
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Provide brief details regarding your development or service requirements.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="contact-name-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-name-input"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Babatunde Adeleke"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#102B46] transition-colors ${
                          errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 bg-slate-50/50'
                        }`}
                        required
                      />
                      {errors.fullName && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-email-input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. b.adeleke@firm.ng"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#102B46] transition-colors ${
                          errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 bg-slate-50/50'
                        }`}
                        required
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone (Optional) */}
                    <div>
                      <label htmlFor="contact-phone-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="contact-phone-input"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#102B46] transition-colors ${
                          errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 bg-slate-50/50'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Sector / Service */}
                    <div>
                      <label htmlFor="contact-service-select" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        Sector of Interest <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="contact-service-select"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#102B46]"
                      >
                        <option value="Real Estate Development & Advisory">Real Estate Development & Advisory</option>
                        <option value="Construction & Project Management">Construction & Project Management</option>
                        <option value="Facility & Property Management">Facility & Property Management</option>
                        <option value="Renewable Energy Solutions">Renewable Energy Solutions</option>
                        <option value="Oil & Gas Downstream Services">Oil & Gas Downstream Services</option>
                        <option value="Amarisa Court Shortlet Living">Amarisa Court Shortlet Living</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Project Scope & Details <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message-input"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline site location, approximate project scale, timeline expectations, or specific consulting questions..."
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#102B46] transition-colors ${
                        errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 bg-slate-50/50'
                      }`}
                      required
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#102B46] hover:bg-[#163B59] transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Brief...</span>
                      ) : (
                        <>
                          <span>Submit Project Enquiry</span>
                          <Send className="w-3.5 h-3.5 text-[#a17d2c]" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';
