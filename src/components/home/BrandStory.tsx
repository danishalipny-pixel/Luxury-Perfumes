import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-noir-900 text-page-home border-t border-b border-gold-500/20 relative overflow-hidden">
      {/* Decorative subtle background monogram */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-5 pointer-events-none w-[600px] h-[600px]">
        <svg viewBox="0 0 36 44" fill="none" stroke="#C5A059" strokeWidth="1" className="w-full h-full">
          <path d="M 18,2 L 34,10 L 34,34 L 18,42 L 2,34 L 2,10 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-gold-500/30 shadow-luxury-dark">
              <img
                src="/images/campaigns/campaign-craftsmanship.jpg"
                alt="NOIRÉLLE Master Perfumer artisan compounding"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950/80 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-noir-950/80 backdrop-blur-md border border-gold-500/20 text-xs">
                <p className="font-serif italic text-gold-300 text-sm">
                  "A fragrance should not simply scent the air; it should alter the emotional architecture of a room."
                </p>
                <p className="text-[10px] uppercase tracking-widest text-noir-400 mt-2">
                  — NOIRÉLLE Master Nez Atelier, Grasse
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Manifesto */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest3 text-gold-400 font-semibold">
              The Maison Manifesto
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-page-home tracking-wide leading-tight">
              More Than a Fragrance. <span className="italic text-gold-gradient font-normal">An Identity.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-noir-300 font-sans leading-relaxed">
              <p>
                NOIRÉLLE was founded upon a singular uncompromising conviction: that true luxury cannot be mass-produced, rushed, or formulated for fleeting trends. We exist in devotion to the timeless art of Haute Parfumerie.
              </p>
              <p>
                Our laboratory in Grasse—the world capital of fragrance—operates without timelines or synthetic compromises. Here, rare May Rose Centifolia blossoms picked by hand in the dawn hours meet 25-year naturally aged Cambodian agarwoods and Florentine orris root aged for thirty-six months.
              </p>
              <p>
                Each creation is formulated at an astonishing 28% to 35% pure perfume oil concentration. The result is an indelible sillage—a transcendent aura that lingers for hours, developing uniquely upon your personal skin chemistry.
              </p>
            </div>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-noir-800">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-light text-gold-400">100%</p>
                <p className="text-xs uppercase tracking-widest text-noir-400 mt-1">Ethical Botanical Sourcing</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-light text-gold-400">3-Year</p>
                <p className="text-xs uppercase tracking-widest text-noir-400 mt-1">Orris Root Maturation</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-light text-gold-400">Paris</p>
                <p className="text-xs uppercase tracking-widest text-noir-400 mt-1">Flacon Architecture</p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs tracking-widest2 uppercase font-medium text-gold-400 hover:text-gold-300 transition-colors border-b border-gold-500/40 pb-1"
              >
                <span>Read The Full Story of NOIRÉLLE</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
