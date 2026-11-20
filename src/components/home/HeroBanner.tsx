import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-noir-950">
      {/* Background Image with Cinematic Luxury Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/hero-main.jpg"
          alt="NOIRÉLLE Haute Parfumerie Campaign"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/65 to-noir-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-noir-950/40 to-noir-950/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 flex flex-col items-center">
        {/* Subtle Luxury Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-noir-900/80 border border-gold-500/30 text-gold-300 text-xs tracking-widest4 uppercase backdrop-blur-md mb-6 animate-fadeIn">
          <Sparkles size={12} className="text-gold-400" />
          <span>Haute Parfumerie • Paris & Grasse</span>
        </div>

        {/* Primary Luxury Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-page-home font-light tracking-wide leading-[1.08] max-w-4xl">
          A World Beyond <span className="italic font-normal text-gold-gradient">Fragrance.</span>
        </h1>

        {/* Supporting Narrative */}
        <p className="mt-6 text-sm sm:text-base md:text-lg text-noir-200 font-sans font-light tracking-wide max-w-2xl leading-relaxed">
          Discover exceptional scents crafted to leave an unforgettable impression. Hand-compounded with rare botanical extraits and 25-year reserve agarwoods.
        </p>

        {/* Call to Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <Link
            to="/shop"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gold-500 hover:bg-gold-400 text-noir-950 font-medium text-xs tracking-widest2 uppercase transition-all duration-300 shadow-luxury hover:shadow-gold-glow hover:scale-[1.02]"
          >
            <span>Explore Collection</span>
            <ArrowRight size={15} />
          </Link>

          <Link
            to="/shop?sort=bestselling"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-noir-900/70 hover:bg-noir-900 border border-gold-500/30 hover:border-gold-400 text-page-home font-medium text-xs tracking-widest2 uppercase backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
          >
            <span>Discover Bestsellers</span>
          </Link>
        </div>

        {/* Olfactory Highlights Ticker */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 border-t border-gold-500/20 pt-8 w-full max-w-3xl text-center">
          <div>
            <p className="font-serif text-2xl text-gold-400">35%</p>
            <p className="text-[11px] uppercase tracking-widest text-noir-400 mt-1">Pure Extrait Oil</p>
          </div>
          <div>
            <p className="font-serif text-2xl text-gold-400">Grasse</p>
            <p className="text-[11px] uppercase tracking-widest text-noir-400 mt-1">French Heritage</p>
          </div>
          <div>
            <p className="font-serif text-2xl text-gold-400">25-Year</p>
            <p className="text-[11px] uppercase tracking-widest text-noir-400 mt-1">Aged Agarwood</p>
          </div>
          <div>
            <p className="font-serif text-2xl text-gold-400">Zero</p>
            <p className="text-[11px] uppercase tracking-widest text-noir-400 mt-1">Synthetic Fillers</p>
          </div>
        </div>
      </div>
    </section>
  );
};
