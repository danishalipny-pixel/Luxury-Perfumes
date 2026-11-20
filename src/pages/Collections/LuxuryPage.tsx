import React from 'react';
import { PageLayout } from '../../components/layout/PageLayout';
import { ProductCard } from '../../components/products/ProductCard';
import { getProductsByCategory } from '../../data/products';
import { COLLECTIONS } from '../../data/collections';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const LuxuryPage: React.FC = () => {
  const collection = COLLECTIONS.find((c) => c.id === 'luxury')!;
  const products = getProductsByCategory('luxury');

  return (
    <PageLayout
      bgHex="#131418" // Royal Velvet Noir (Dark)
      isDark={true}
      title="Haute Parfumerie — 35% Extrait Flacons"
      description="The pinnacle of NOIRÉLLE craftsmanship. Hand-numbered flacons, 35% pure extrait concentrations, and 24-karat gold dipped accents."
    >
      {/* Editorial Header */}
      <div className="relative py-20 lg:py-28 overflow-hidden border-b border-noir-800">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src={collection.image}
            alt={collection.name}
            className="w-full h-full object-cover filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-page-luxury via-page-luxury/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-noir-900 border border-gold-500/40 text-gold-400 text-xs tracking-widest uppercase mb-4 backdrop-blur-md">
            <Sparkles size={12} className="text-gold-400" />
            <span>Master Atelier Reserve</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light text-page-home tracking-wide">
            {collection.name}
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-gold-300 mt-2">
            "{collection.headline}"
          </p>

          <p className="mt-4 text-sm sm:text-base text-noir-300 max-w-2xl mx-auto font-sans leading-relaxed">
            {collection.description}
          </p>

          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-gold-400/90 uppercase tracking-widest">
            <span className="flex items-center gap-1.5"><ShieldCheck size={14} /> Hand-Numbered Editions</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={14} /> 24k Gold Accents</span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8 border-b border-noir-800 pb-4">
          <span className="text-xs uppercase tracking-widest text-noir-400 font-medium">
            Showing {products.length} Crown Jewel Extraits
          </span>
          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold-400 hover:text-gold-300"
          >
            <span>All Portfolios</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} isDark={true} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};
