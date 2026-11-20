import React from 'react';
import { PageLayout } from '../../components/layout/PageLayout';
import { RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

export const ReturnsPolicyPage: React.FC = () => {
  return (
    <PageLayout
      bgHex="#F2ECE3" // Light Beige
      isDark={false}
      title="Returns & Client Guarantee Policy"
      description="Learn about the NOIRÉLLE 30-day sealed flacon return guarantee and complimentary sample trial system."
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest3 text-gold-700 font-semibold">
            Maison Assurance
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light text-noir-950 mt-1">
            Returns & Exchanges
          </h1>
          <p className="mt-2 text-xs text-stone-500 font-sans">
            Demonstration policy guidelines for client review
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-stone-200 p-8 sm:p-12 shadow-sm space-y-8 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs">
            <strong>Demonstration Notice:</strong> These return conditions reflect luxury fragrance industry standards. Final legal return windows and refund methods should be reviewed by legal counsel before commercial launch.
          </div>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-noir-950 font-medium flex items-center gap-2">
              <Sparkles size={18} className="text-gold-700" />
              <span>The "Try-At-Home" Sampling Guarantee</span>
            </h2>
            <p>
              To ensure complete confidence in your acquisition, every full-size flacon (50ml, 100ml, or 200ml) is accompanied by a complimentary matching <strong>2ml discovery vial</strong>.
            </p>
            <p>
              We invite you to test the 2ml discovery vial on your skin over several days. If the sillage or olfactory evolution does not meet your desires, you may return the <strong>unopened, sealed full-size crystal flacon</strong> in its original presentation packaging for a 100% full refund within 30 days of receipt.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-stone-100">
            <h2 className="font-serif text-xl text-noir-950 font-medium flex items-center gap-2">
              <RotateCcw size={18} className="text-gold-700" />
              <span>Conditions of Return</span>
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>The outer security seal of the full-size perfume flacon must remain intact.</li>
              <li>Hand-lacquered coffrets, velvet boxes, and ribbons must be returned in pristine, undamaged condition.</li>
              <li>Discovery Sets and bespoke hand-engraved flacons are final sale due to customized compounding.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-4 border-t border-stone-100">
            <h2 className="font-serif text-xl text-noir-950 font-medium flex items-center gap-2">
              <ShieldCheck size={18} className="text-gold-700" />
              <span>Initiating a Return</span>
            </h2>
            <p>
              To initiate a complimentary return, please contact our concierge at <code>{SITE_CONFIG.contact.conciergeEmail}</code> or via WhatsApp citing your order reference number (e.g. <code>NR-2026-XXXX</code>). A prepaid insured courier collection will be scheduled at your convenience.
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};
