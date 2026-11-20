import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { COLLECTIONS } from '../../data/collections';

export const FeaturedCollections: React.FC = () => {
  // Use the 5 primary requested collections
  const featured = COLLECTIONS.filter((c) => c.id !== 'luxury').slice(0, 5);

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-widest3 text-gold-600 font-semibold">
          Curated Portfolios
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-noir-950 mt-2 tracking-wide">
          The Five Realms of NOIRÉLLE
        </h2>
        <p className="mt-4 text-sm text-noir-600 leading-relaxed font-sans">
          Each collection represents a distinct philosophy of scent, harvested from historic terroirs and compounded into pure emotional resonance.
        </p>
      </div>

      {/* Grid Layout: Dynamic Luxury Staggered Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {featured.map((col, index) => {
          // Give the first two cards a wider or distinct visual emphasis
          const isSpan = index === 0 || index === 3;

          return (
            <Link
              key={col.id}
              to={col.path}
              className={`group relative rounded-2xl overflow-hidden border border-stone-300/80 shadow-luxury hover:shadow-luxury-hover transition-all duration-700 min-h-[380px] sm:min-h-[440px] flex flex-col justify-end p-6 sm:p-8 ${
                isSpan ? 'md:col-span-1 lg:col-span-1' : ''
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/60 to-transparent" />
                <div className="absolute inset-0 bg-noir-950/20 group-hover:bg-noir-950/10 transition-colors duration-500" />
              </div>

              {/* Card Content Overlay */}
              <div className="relative z-10 text-page-home">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] uppercase tracking-widest text-gold-400 font-medium">
                    {col.productCount} Master Creations
                  </span>
                  <div className="w-8 h-8 rounded-full bg-noir-900/60 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-noir-950 transition-all duration-300">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide leading-tight">
                  {col.name}
                </h3>

                <p className="mt-2 text-xs text-noir-300 line-clamp-2 leading-relaxed">
                  {col.tagline}
                </p>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-gold-300 group-hover:text-gold-200 transition-colors">
                  <span>Enter Collection</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
