import React from 'react';
import { PageLayout } from '../../components/layout/PageLayout';
import { Lock, ShieldCheck, Database } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <PageLayout
      bgHex="#F4F3F0" // Pearl Grey
      isDark={false}
      title="Privacy & Data Protection Policy"
      description="Learn how NOIRÉLLE protects client confidential information, transaction privacy, and digital security."
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest3 text-gold-700 font-semibold">
            Confidentiality
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light text-noir-950 mt-1">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-stone-500 font-sans">
            Demonstration policy guidelines for client review
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-stone-200 p-8 sm:p-12 shadow-sm space-y-8 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs">
            <strong>Demonstration Notice:</strong> This privacy outline details the high-standard privacy principles respected by NOIRÉLLE. Legal counsel should adapt this text for jurisdiction-specific GDPR/CCPA requirements before commercial launch.
          </div>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-noir-950 font-medium flex items-center gap-2">
              <Lock size={18} className="text-gold-700" />
              <span>Client Confidentiality Principle</span>
            </h2>
            <p>
              NOIRÉLLE respects the sanctity of our clientele’s privacy. We collect only the information required to prepare, authenticate, and deliver your private fragrance acquisitions. We never sell, lease, or monetize client personal data to third-party marketing entities.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-stone-100">
            <h2 className="font-serif text-xl text-noir-950 font-medium flex items-center gap-2">
              <Database size={18} className="text-gold-700" />
              <span>Information We Process</span>
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Contact & Identity:</strong> Name, delivery destination, telephone number, and email.</li>
              <li><strong>Olfactory Preferences:</strong> Optional scent profiling records for bespoke concierge guidance.</li>
              <li><strong>Payment Security:</strong> Raw credit card numbers are processed directly via certified level-1 PCI-DSS payment gateways and are never stored on our servers.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-4 border-t border-stone-100">
            <h2 className="font-serif text-xl text-noir-950 font-medium flex items-center gap-2">
              <ShieldCheck size={18} className="text-gold-700" />
              <span>Your Data Rights</span>
            </h2>
            <p>
              Clients may request a full export of their personal data or request permanent erasure from our society registry at any time by contacting <code>{SITE_CONFIG.contact.conciergeEmail}</code>.
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};
