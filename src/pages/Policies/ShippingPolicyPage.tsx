import React from 'react';
import { PageLayout } from '../../components/layout/PageLayout';
import { Truck, ShieldCheck, Clock, Globe } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

export const ShippingPolicyPage: React.FC = () => {
  return (
    <PageLayout
      bgHex="#F1F0EC" // Soft Grey
      isDark={false}
      title="Shipping & White Glove Delivery Policy"
      description="Details regarding NOIRÉLLE White Glove insured worldwide delivery, complimentary shipping thresholds, and tracking."
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest3 text-gold-700 font-semibold">
            Concierge Logistics
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light text-noir-950 mt-1">
            White Glove Shipping Policy
          </h1>
          <p className="mt-2 text-xs text-stone-500 font-sans">
            Last Updated: November 2026 • Demonstration policy guidelines for client review
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-stone-200 p-8 sm:p-12 shadow-sm space-y-8 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs">
            <strong>Demonstration Notice:</strong> The shipping parameters below illustrate standard luxury fragrance fulfillment standards. Final fulfillment logistics and duties should be confirmed by the brand operator before live commercial trade.
          </div>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-noir-950 font-medium flex items-center gap-2">
              <Truck size={18} className="text-gold-700" />
              <span>Complimentary White Glove Delivery</span>
            </h2>
            <p>
              NOIRÉLLE is pleased to provide complimentary insured White Glove Delivery worldwide on all qualifying orders exceeding <strong>${SITE_CONFIG.shipping.freeShippingThreshold} USD</strong>. For acquisitions below this threshold, a flat delivery fee of <strong>${SITE_CONFIG.shipping.standardShippingCost} USD</strong> applies.
            </p>
            <p>
              Each shipment is dispatched with temperature-controlled transit packaging to preserve the volatile organic floral essences and delicate extrait compounds.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-stone-100">
            <h2 className="font-serif text-xl text-noir-950 font-medium flex items-center gap-2">
              <Clock size={18} className="text-gold-700" />
              <span>Transit & Fulfillment Timelines</span>
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Domestic & European Orders:</strong> 2–4 business days via insured private courier.</li>
              <li><strong>North America & GCC (UAE, Saudi Arabia):</strong> 3–5 business days with customs pre-clearance.</li>
              <li><strong>Priority Air Courier:</strong> 1–2 business days express dispatch ($35 USD).</li>
            </ul>
          </section>

          <section className="space-y-3 pt-4 border-t border-stone-100">
            <h2 className="font-serif text-xl text-noir-950 font-medium flex items-center gap-2">
              <Globe size={18} className="text-gold-700" />
              <span>International Customs & Tariffs</span>
            </h2>
            <p>
              Shipments may be subject to local import taxes and duties assessed by destination authorities. Deliveries requiring signature verification will be coordinated directly via SMS/WhatsApp with the appointed courier.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-stone-100">
            <h2 className="font-serif text-xl text-noir-950 font-medium flex items-center gap-2">
              <ShieldCheck size={18} className="text-gold-700" />
              <span>Damaged or Lost Consignments</span>
            </h2>
            <p>
              All NOIRÉLLE parcels are 100% insured from the moment of dispatch until physical hand-off. If a flacon or presentation coffret arrives compromised, please contact our concierge at <code>{SITE_CONFIG.contact.conciergeEmail}</code> within 48 hours for immediate replacement.
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};
