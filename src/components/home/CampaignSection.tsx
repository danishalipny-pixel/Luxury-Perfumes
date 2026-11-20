import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CampaignSection: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-noir-950 border-t border-b border-gold-500/20">
      {/* Background Campaign Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/campaigns/campaign-signature.jpg"
          alt="NOIRÉLLE Signature Campaign"
          className="w-full h-full object-cover object-center filter brightness-[0.65]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-noir-950 via-noir-950/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-page-home space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs tracking-widest uppercase">
            <Sparkles size={12} />
            <span>The Signature Portfolio</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-wide leading-tight">
            Find the Scent That Becomes <span className="italic text-gold-gradient font-normal">Your Signature.</span>
          </h2>

          <p className="text-sm sm:text-base text-noir-200 font-sans font-light leading-relaxed">
            A signature perfume is not merely a fragrance—it is your unspoken introduction, your lingering presence, and your indelible memory. Explore our master creations or consult with our fragrance concierge.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/shop"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gold-500 hover:bg-gold-400 text-noir-950 font-medium text-xs tracking-widest uppercase transition-all duration-300 shadow-luxury hover:shadow-gold-glow"
            >
              <span>Explore the Collection</span>
              <ArrowRight size={14} />
            </Link>

            <Link
              to="/collections/gift-sets"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-noir-900/80 hover:bg-noir-900 border border-gold-500/30 text-page-home text-xs tracking-widest uppercase transition-colors"
            >
              <span>Discover Gift Sets</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
