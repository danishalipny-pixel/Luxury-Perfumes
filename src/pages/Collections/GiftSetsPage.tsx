import React from 'react';
import { PageLayout } from '../../components/layout/PageLayout';
import { ProductCard } from '../../components/products/ProductCard';
import { getProductsByCategory } from '../../data/products';
import { COLLECTIONS } from '../../data/collections';
import { Link } from 'react-router-dom';
import { ArrowRight, Gift } from 'lucide-react';

export const GiftSetsPage: React.FC = () => {
  const collection = COLLECTIONS.find((c) => c.id === 'gift-sets')!;
  const products = getProductsByCategory('gift-sets');

  return (
    <PageLayout
      bgHex="#EDE1CE" // Champagne Beige
      isDark={false}
      title="Luxury Gift Sets & Discovery Coffrets"
      description="The art of exceptional gifting. Lacquered wood presentation coffrets, saffiano travel atomizers, and limited edition duos."
    >
      {/* Editorial Header */}
      <div className="relative py-20 lg:py-28 overflow-hidden border-b border-stone-300/60">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src={collection.image}
            alt={collection.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-page-gift via-page-gift/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 border border-gold-600/30 text-gold-900 text-xs tracking-widest uppercase mb-4 backdrop-blur-sm">
            <Gift size={12} className="text-gold-700" />
            <span>Artisan Presentation Coffrets</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light text-noir-950 tracking-wide">
            {collection.name}
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-gold-900 mt-2">
            "{collection.headline}"
          </p>

          <p className="mt-4 text-sm sm:text-base text-stone-700 max-w-2xl mx-auto font-sans leading-relaxed">
            {collection.description}
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8 border-b border-stone-300/80 pb-4">
          <span className="text-xs uppercase tracking-widest text-stone-600 font-medium">
            Showing {products.length} Presentation Coffrets
          </span>
          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold-900 hover:text-noir-950 font-medium"
          >
            <span>All Portfolios</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} isDark={false} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};
