import React, { useState } from 'react';
import { Mail, Clock, MapPin, MessageCircle, Send, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { PageLayout } from '../../components/layout/PageLayout';
import { SITE_CONFIG } from '../../config/site';
import { getGeneralWhatsAppUrl } from '../../utils/whatsapp';
import { FAQS } from '../../data/testimonials';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Bespoke Consultation',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim() || !formData.email.includes('@'))
      errs.email = 'Please provide a valid email address.';
    if (!formData.message.trim()) errs.message = 'Please provide your inquiry details.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Bespoke Consultation',
        message: '',
      });
    }, 800);
  };

  return (
    <PageLayout
      bgHex="#EDE4D8" // Muted Sand
      isDark={false}
      title="Contact Private Concierge & Flagship Salons"
      description="Connect with the NOIRÉLLE Private Concierge for bespoke consultations, orders, and boutique appointments."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest3 text-gold-800 font-semibold">
            Client Concierge
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light text-noir-950 mt-1">
            Connect With NOIRÉLLE
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-stone-700 font-sans leading-relaxed">
            Our private fragrance advisors in Paris and New York are at your service for bespoke recommendations, order assistance, and private boutique salon appointments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-stone-300 shadow-sm">
            <h2 className="font-serif text-2xl font-light text-noir-950 mb-6 pb-3 border-b border-stone-200">
              Direct Concierge Inquiry
            </h2>

            {status === 'success' ? (
              <div className="p-8 text-center bg-emerald-50 rounded-xl border border-emerald-200 space-y-3">
                <CheckCircle2 size={36} className="text-emerald-700 mx-auto" />
                <h3 className="font-serif text-xl text-emerald-950">Inquiry Received</h3>
                <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out to NOIRÉLLE. A senior fragrance advisor will review your message and reply within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-3 px-5 py-2 rounded-full bg-emerald-700 text-white text-xs uppercase tracking-wider font-medium"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-noir-900 font-semibold block mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Charlotte Sinclair"
                      className={`w-full bg-stone-50 border ${
                        errors.name ? 'border-rose-500' : 'border-stone-300'
                      } rounded-xl px-4 py-2.5 text-xs text-noir-900 focus:outline-none focus:border-gold-500`}
                    />
                    {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-noir-900 font-semibold block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="client@domain.com"
                      className={`w-full bg-stone-50 border ${
                        errors.email ? 'border-rose-500' : 'border-stone-300'
                      } rounded-xl px-4 py-2.5 text-xs text-noir-900 focus:outline-none focus:border-gold-500`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-noir-900 font-semibold block mb-1">
                      Telephone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-2.5 text-xs text-noir-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-noir-900 font-semibold block mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-2.5 text-xs text-noir-900 focus:outline-none focus:border-gold-500"
                    >
                      <option value="Bespoke Consultation">Bespoke Fragrance Consultation</option>
                      <option value="Order Status & Delivery">Order Status & White Glove Delivery</option>
                      <option value="VIP Corporate & Wedding Gifting">Private Gifting & Discovery Sets</option>
                      <option value="Press & Haute Parfumerie Inquiries">Press & Editorial Inquiries</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-noir-900 font-semibold block mb-1">
                    Your Inquiry *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    placeholder="Describe your desired olfactory profile, occasion, or order question..."
                    className={`w-full bg-stone-50 border ${
                      errors.message ? 'border-rose-500' : 'border-stone-300'
                    } rounded-xl p-3 text-xs text-noir-900 focus:outline-none focus:border-gold-500`}
                  />
                  {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 px-6 rounded-xl bg-gold-500 hover:bg-gold-400 text-noir-950 font-medium text-xs tracking-widest uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  <Send size={14} />
                  <span>{status === 'submitting' ? 'Transmitting...' : 'Submit Concierge Inquiry'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Salons & WhatsApp Direct */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Concierge Direct Card */}
            <div className="bg-noir-900 text-page-home p-6 sm:p-8 rounded-2xl border border-gold-500/30 shadow-luxury-dark space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-gold-500/20 text-gold-400">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-gold-300">
                    Instant WhatsApp Concierge
                  </h3>
                  <p className="text-xs text-noir-400">Direct specialist guidance in minutes</p>
                </div>
              </div>

              <p className="text-xs text-noir-300 leading-relaxed">
                Connect immediately with our Parisian fragrance consultants via encrypted WhatsApp messaging for live advice or personalized flacon inquiries.
              </p>

              <div className="text-[11px] text-stone-400 bg-noir-950/70 p-3 rounded-lg border border-noir-800">
                <p><strong>Configured Line:</strong> {SITE_CONFIG.whatsapp.displayNumber}</p>
                <p className="text-stone-500 mt-0.5">Note: Inquiries do not constitute automated charges.</p>
              </div>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-noir-950 font-medium text-xs uppercase tracking-widest transition-colors shadow-sm"
              >
                <span>Open WhatsApp Concierge</span>
              </a>
            </div>

            {/* Boutique & Hours */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-300 shadow-sm space-y-4 text-xs text-stone-700">
              <h3 className="font-serif text-lg font-medium text-noir-950 pb-2 border-b border-stone-200">
                Boutique Salons & Hours
              </h3>

              <div className="flex items-start gap-3">
                <Clock size={16} className="text-gold-700 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-noir-950">Concierge Service Hours</p>
                  <p>{SITE_CONFIG.contact.boutiqueHours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={16} className="text-gold-700 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-noir-950">Electronic Mail</p>
                  <p>{SITE_CONFIG.contact.conciergeEmail}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-700 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-noir-950">Boutique Locations</p>
                  <p>{SITE_CONFIG.contact.boutiqueAddress}</p>
                  <p className="text-stone-500">{SITE_CONFIG.contact.secondaryBoutique}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Accordion Section */}
        <div className="mt-20 pt-14 border-t border-stone-300 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest3 text-gold-800 font-semibold">
              Client Guidance
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-noir-950 mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-stone-200 bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
            {FAQS.map((faq, idx) => (
              <div key={idx}>
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-serif text-sm sm:text-base text-noir-900 font-medium hover:text-gold-800"
                >
                  <span>{faq.question}</span>
                  {activeFaq === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-stone-600 font-sans leading-relaxed animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
