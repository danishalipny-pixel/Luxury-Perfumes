import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageLayout } from '../../components/layout/PageLayout';
import { HeroBanner } from '../../components/home/HeroBanner';
import { FeaturedCollections } from '../../components/home/FeaturedCollections';
import { BrandStory } from '../../components/home/BrandStory';
import { CampaignSection } from '../../components/home/CampaignSection';
import { FragranceDiscovery } from '../../components/home/FragranceDiscovery';
import { TestimonialsSection } from '../../components/home/TestimonialsSection';
import { ProductCard } from '../../components/products/ProductCard';
import { getBestsellers, getNewArrivals } from '../../data/products';

export const HomePage: React.FC = () => {
  const bestsellers = getBestsellers().slice(0, 4);
  const newArrivals = getNewArrivals().slice(0, 4);

  return (
    <PageLayout
      bgHex="#F5F0E8" // Champagne Ivory
      isDark={false}
      title="A World Beyond Fragrance — Haute Parfumerie"
      description="Welcome to NOIRÉLLE. Discover transcendent perfumes, rare extraits de parfum, aged ouds, and exquisite luxury gift sets."
    >
      {/* 1. Cinematic Hero */}
      <HeroBanner />

      {/* 2. Featured Collections (5 cards) */}
      <FeaturedCollections />

      {/* 3. Bestselling Perfumes Section */}
      <section id="bestsellers" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest3 text-gold-600 font-semibold">
              Client Favorites
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-noir-950 mt-2 tracking-wide">
              Bestselling Creations
            </h2>
            <p className="mt-3 text-sm text-noir-600 max-w-xl font-sans">
              Our most celebrated flacons, coveted for their exceptional sillage, rare botanical extraits, and unforgettable longevity.
            </p>
          </div>

          <Link
            to="/shop?sort=bestselling"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-gold-700 hover:text-gold-900 border-b border-gold-600/40 pb-1 self-start md:self-auto transition-colors"
          >
            <span>View All Bestsellers</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} isDark={false} />
          ))}
        </div>
      </section>

      {/* 4. Brand Storytelling Section */}
      <BrandStory />

      {/* 5. New Arrivals Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest3 text-gold-600 font-semibold">
              Recent Millésimes
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-noir-950 mt-2 tracking-wide">
              New Olfactory Arrivals
            </h2>
            <p className="mt-3 text-sm text-noir-600 max-w-xl font-sans">
              Latest releases from our Grasse laboratory, featuring freshly compounded seasonal extraits and limited reserve flacons.
            </p>
          </div>

          <Link
            to="/shop?sort=newest"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-gold-700 hover:text-gold-900 border-b border-gold-600/40 pb-1 self-start md:self-auto transition-colors"
          >
            <span>Explore All New Releases</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} isDark={false} />
          ))}
        </div>
      </section>

      {/* 6. Campaign Banner */}
      <CampaignSection />

      {/* 7. Fragrance Discovery by Family */}
      <FragranceDiscovery />

      {/* 8. Clearly Labelled Demonstration Testimonials */}
      <TestimonialsSection />
    </PageLayout>
  );
};
