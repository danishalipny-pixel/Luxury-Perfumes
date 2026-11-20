import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-widest3 text-gold-600 font-semibold">
          Client Impressions
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-noir-950 mt-2 tracking-wide">
          Words from Connoisseurs
        </h2>
        {/* Transparent Demonstration Disclaimer */}
        <p className="mt-3 text-xs uppercase tracking-widest text-noir-400 font-medium">
          (Demonstration Client Impressions for evaluation purposes)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="rounded-2xl p-6 sm:p-7 bg-white/70 border border-stone-200/80 shadow-luxury-sm flex flex-col justify-between"
          >
            <div>
              {/* Rating stars */}
              <div className="flex items-center gap-1 text-gold-500 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif italic text-sm text-noir-800 leading-relaxed mb-6">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <p className="font-sans text-xs font-semibold text-noir-950">
                {t.client}
              </p>
              <p className="text-[11px] text-noir-500">
                {t.city}
              </p>
              <p className="text-[10px] text-gold-600 font-medium mt-1 truncate">
                {t.perfume}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
