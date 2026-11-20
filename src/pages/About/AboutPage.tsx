import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PageLayout } from '../../components/layout/PageLayout';
import { SITE_CONFIG } from '../../config/site';

export const AboutPage: React.FC = () => {
  return (
    <PageLayout
      bgHex="#151515" // Luxury Black
      isDark={true}
      title="The Maison NOIRÉLLE — An Expression of Your Identity"
      description="Learn about the philosophy, craftsmanship, and pure extrait formulations of NOIRÉLLE Haute Parfumerie."
    >
      {/* Hero */}
      <div className="relative py-24 lg:py-32 overflow-hidden border-b border-noir-800">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="/images/campaigns/campaign-craftsmanship.jpg"
            alt="NOIRÉLLE Studio Atelier"
            className="w-full h-full object-cover filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-page-about via-page-about/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-noir-900 border border-gold-500/40 text-gold-300 text-xs tracking-widest4 uppercase backdrop-blur-md">
            <Sparkles size={12} className="text-gold-400" />
            <span>The NOIRÉLLE Manifesto</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-page-home tracking-wide leading-tight">
            An Expression of <span className="italic text-gold-gradient font-normal">Your Identity.</span>
          </h1>

          <p className="font-serif italic text-lg sm:text-2xl text-gold-300/90 max-w-2xl mx-auto">
            "A World Beyond Fragrance."
          </p>
        </div>
      </div>

      {/* Main Story Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16 text-noir-300 leading-relaxed text-sm sm:text-base font-sans">
        {/* Section 1 */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl sm:text-4xl text-page-home font-normal">
            The Philosophy of Pure Extrait
          </h2>
          <p>
            At NOIRÉLLE, perfume is not regarded as a transient cosmetic accessory, but as an invisible yet sovereign architectural extension of the self. Scent bypasses logic; it connects instantaneously with memory, desire, and presence.
          </p>
          <p>
            Every formula begins in Grasse, France—the cradle of global perfumery—where our artisans formulate at Extrait de Parfum strength (28% to 35% pure perfume oils). By eliminating unnecessary dilutions, we preserve the complex botanical heart of each ingredient, allowing the fragrance to evolve over twelve to twenty-four hours upon the skin.
          </p>
        </div>

        {/* Section 2: Botanical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-b border-noir-800">
          <div className="space-y-2">
            <span className="font-serif text-2xl text-gold-400">Grasse</span>
            <p className="text-xs uppercase tracking-widest text-noir-400">May Rose & Jasmine</p>
            <p className="text-xs text-noir-400">
              Hand-harvested in the first hours of dawn when petals hold their purest aromatic dew.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-serif text-2xl text-gold-400">25-Year</span>
            <p className="text-xs uppercase tracking-widest text-noir-400">Aged Agarwood (Oud)</p>
            <p className="text-xs text-noir-400">
              Ethically matured natural resins from ancient Cambodian and Assam Aquilaria trees.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-serif text-2xl text-gold-400">Florence</span>
            <p className="text-xs uppercase tracking-widest text-noir-400">Tuscan Orris Butter</p>
            <p className="text-xs text-noir-400">
              Aged for 36 months to yield a powdery butter more valuable by weight than bullion.
            </p>
          </div>
        </div>

        {/* Section 3: The Flacon */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl sm:text-4xl text-page-home font-normal">
            The Flacon: Architecture in Crystal
          </h2>
          <p>
            A transcendent perfume demands an equally enduring vessel. The NOIRÉLLE flacon features our signature octagonal silhouette inspired by cut emerald gemstones and classical French salon architecture.
          </p>
          <p>
            Molded from ultra-dense optical glass with hand-beveled edges, every bottle is crowned with an engraved champagne-gold atomizer designed to dispense a micro-fine aerosol mist that envelops the wearer in a cloud of pure aroma.
          </p>
        </div>

        {/* Location & Concierge Card */}
        <div className="p-8 rounded-2xl bg-noir-900 border border-gold-500/30 text-page-home space-y-4 shadow-luxury-dark">
          <h3 className="font-serif text-xl font-medium text-gold-300">
            Private Boutique Appointments
          </h3>
          <p className="text-xs text-noir-400 leading-relaxed">
            While our master creations are available for private acquisition online, we also welcome patrons for private olfactory consultations at our salons in Paris and New York.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs text-noir-300">
            <div>
              <p className="font-semibold text-page-home">Paris Flagship Salon</p>
              <p className="text-stone-400">{SITE_CONFIG.contact.boutiqueAddress}</p>
            </div>
            <div>
              <p className="font-semibold text-page-home">Madison Avenue Suite</p>
              <p className="text-stone-400">{SITE_CONFIG.contact.secondaryBoutique}</p>
            </div>
          </div>

          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gold-500 hover:bg-gold-400 text-noir-950 font-medium text-xs tracking-widest uppercase transition-colors"
            >
              <span>Schedule Fragrance Consultation</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
