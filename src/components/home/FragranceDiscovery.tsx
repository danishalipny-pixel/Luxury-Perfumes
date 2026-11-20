import React from 'react';
import { Link } from 'react-router-dom';
import { FRAGRANCE_FAMILIES } from '../../data/collections';

export const FragranceDiscovery: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-widest3 text-gold-600 font-semibold">
          Olfactory Cartography
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-noir-950 mt-2 tracking-wide">
          Explore by Fragrance Family
        </h2>
        <p className="mt-4 text-sm text-noir-600 leading-relaxed font-sans">
          Whether you are drawn to the dry warmth of smoked woods, radiant dawn florals, or rich oriental incenses, navigate our creations by your preferred accord.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {FRAGRANCE_FAMILIES.map((fam) => (
          <Link
            key={fam.name}
            to={`/shop?family=${encodeURIComponent(fam.name)}`}
            className="group relative rounded-2xl overflow-hidden aspect-square border border-stone-300 shadow-sm hover:shadow-luxury transition-all duration-500 flex flex-col justify-end p-5"
          >
            {/* Background Family Photo */}
            <img
              src={fam.image}
              alt={fam.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/40 to-transparent group-hover:from-noir-950/90 transition-colors" />

            {/* Label */}
            <div className="relative z-10 text-page-home text-center">
              <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-wide">
                {fam.name}
              </h3>
              <p className="text-[10px] sm:text-[11px] text-gold-300 mt-1 line-clamp-1 font-sans">
                {fam.description}
              </p>
              <div className="mt-2 text-[10px] uppercase tracking-widest text-noir-300 group-hover:text-gold-200 transition-colors">
                Discover Scents &rarr;
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
