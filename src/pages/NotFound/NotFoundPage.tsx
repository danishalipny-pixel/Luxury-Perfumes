import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, Home } from 'lucide-react';
import { PageLayout } from '../../components/layout/PageLayout';

export const NotFoundPage: React.FC = () => {
  return (
    <PageLayout
      bgHex="#171B27" // Deep Midnight (Dark)
      isDark={true}
      title="404 — Olfactory Passage Not Found"
      description="The requested fragrance passage or salon chamber does not exist in our archives."
    >
      <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="w-20 h-20 rounded-full bg-noir-900/80 border border-gold-500/30 text-gold-400 flex items-center justify-center mx-auto shadow-luxury-dark">
            <Compass size={36} className="animate-spin duration-[20000ms]" />
          </div>

          <span className="text-xs uppercase tracking-widest4 text-gold-400 font-semibold block">
            Error 404 • Lost Sillage
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl font-light text-page-home tracking-wide">
            An Uncharted Olfactory Passage
          </h1>

          <p className="text-xs sm:text-sm text-noir-300 font-sans leading-relaxed max-w-md mx-auto">
            The chamber or fragrance flacon you are seeking has faded into memory or moved to another salon in our archives.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gold-500 hover:bg-gold-400 text-noir-950 font-medium text-xs tracking-widest uppercase transition-all shadow-md"
            >
              <Home size={14} />
              <span>Return Home</span>
            </Link>

            <Link
              to="/shop"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-noir-900 border border-gold-500/30 text-page-home font-medium text-xs tracking-widest uppercase hover:border-gold-400 transition-colors"
            >
              <span>Explore Catalog</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
