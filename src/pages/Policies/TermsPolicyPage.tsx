import React from 'react';
import { PageLayout } from '../../components/layout/PageLayout';
import { Scale, Award, ShieldAlert } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

export const TermsPolicyPage: React.FC = () => {
  return (
    <PageLayout
      bgHex="#F7F5F0" // Warm White
      isDark={false}
      title="Terms of Service & Commercial Conditions"
      description="Terms and conditions governing acquisitions and private consultations with NOIRÉLLE Haute Parfumerie."
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest3 text-gold-700 font-semibold">
            Legal Framework
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light text-noir-950 mt-1">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-xs text-stone-500 font-sans">
            Demonstration terms for business-owner review
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-stone-200 p-8 sm:p-12 shadow-sm space-y-8 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs">
            <strong>Demonstration Notice:</strong> The terms detailed below represent standard operating guidelines for luxury goods. Commercial business entities must engage appropriate legal review prior to production billing.
          </div>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-noir-950 font-medium flex items-center gap-2">
              <Scale size={18} className="text-gold-700" />
              <span>1. Maison Principles & Orders</span>
            </h2>
            <p>
              By placing an order via this application or submitting an inquiry through our Private Concierge WhatsApp channel, you acknowledge that orders are subject to acceptance and raw botanical harvest availability.
            </p>
            <p>
              Prices are displayed in {SITE_CONFIG.currency.code} and are subject to adjustment prior to final order confirmation.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-stone-100">
            <h2 className="font-serif text-xl text-noir-950 font-medium flex items-center gap-2">
              <Award size={18} className="text-gold-700" />
              <span>2. Intellectual Property & Brand Rights</span>
            </h2>
            <p>
              The wordmark <strong>NOIRÉLLE</strong>, the tagline <em>"A World Beyond Fragrance."</em>, the octagonal flacon silhouette, visual emblems, and proprietary scent formulas are the intellectual property of NOIRÉLLE Haute Parfumerie.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-stone-100">
            <h2 className="font-serif text-xl text-noir-950 font-medium flex items-center gap-2">
              <ShieldAlert size={18} className="text-gold-700" />
              <span>3. Allergen Advisory & Proper Usage</span>
            </h2>
            <p>
              NOIRÉLLE fragrances contain high concentrations of genuine natural botanical extracts, including rose absolutes, citrus peels, and natural resins. Always apply the matching 2ml discovery sample on a small patch of skin first. Fragrances are intended for external application only; keep out of reach of children and open flames.
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};
