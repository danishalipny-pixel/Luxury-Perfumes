import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, ArrowRight, Share2, Check } from 'lucide-react';
import { PageLayout } from '../../components/layout/PageLayout';
import { useWishlist } from '../../context/WishlistContext';

export const WishlistPage: React.FC = () => {
  const { wishlist, removeFromWishlist, moveToCart, clearWishlist } = useWishlist();
  const [copied, setCopied] = React.useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My NOIRÉLLE Wishlist',
        text: 'Discover my curated luxury perfume selections on NOIRÉLLE.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <PageLayout
      bgHex="#EEECF2" // Pale Lavender
      isDark={false}
      title="Client Wishlist & Saved Flacons"
      description="View your saved NOIRÉLLE perfume flacons and discovery sets. Move items directly to your shopping bag."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-8 border-b border-stone-300 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest3 text-gold-700 font-semibold">
              Personal Curation
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-light text-noir-950 mt-1">
              Client Wishlist
            </h1>
            <p className="mt-2 text-xs text-stone-600 font-sans">
              Your saved extraits and private favorites, ready for acquisition.
            </p>
          </div>

          {wishlist.length > 0 && (
            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-stone-300 text-xs text-noir-800 hover:border-gold-500 shadow-sm"
              >
                {copied ? <Check size={14} className="text-emerald-600" /> : <Share2 size={14} />}
                <span>{copied ? 'Link Copied' : 'Share Wishlist'}</span>
              </button>

              <button
                onClick={clearWishlist}
                className="text-xs text-stone-500 hover:text-rose-600 underline"
              >
                Clear All
              </button>
            </div>
          )}
        </div>

        {/* Wishlist Items Grid */}
        {wishlist.length === 0 ? (
          <div className="py-24 text-center bg-white/70 rounded-2xl border border-stone-200 p-8 max-w-lg mx-auto shadow-sm">
            <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mx-auto mb-4">
              <Heart size={26} />
            </div>
            <h2 className="font-serif text-2xl text-noir-900">Your wishlist is currently empty</h2>
            <p className="text-xs text-stone-500 mt-2 leading-relaxed">
              As you explore our collections, tap the heart icon on any flacon to save it here for private consideration.
            </p>
            <Link
              to="/shop"
              className="mt-6 inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gold-500 hover:bg-gold-400 text-noir-950 font-medium text-xs tracking-widest uppercase transition-colors shadow-sm"
            >
              <span>Explore Creations</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlist.map(({ product }) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm flex flex-col justify-between group"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] bg-noir-950 overflow-hidden">
                  <Link to={`/product/${product.slug}`}>
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                    />
                  </Link>

                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white text-stone-600 hover:text-rose-600 shadow-sm"
                    aria-label={`Remove ${product.name} from wishlist`}
                  >
                    <Trash2 size={15} />
                  </button>
                </div>

                {/* Details & Move to Cart */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gold-700 font-semibold block">
                      {product.gender} • {product.concentration}
                    </span>
                    <h3 className="font-serif text-lg font-medium text-noir-950 mt-1 line-clamp-1">
                      <Link to={`/product/${product.slug}`} className="hover:text-gold-700">
                        {product.name}
                      </Link>
                    </h3>
                    <p className="font-serif text-base font-semibold text-gold-700 mt-2">
                      ${product.price} USD
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-stone-100">
                    <button
                      onClick={() => moveToCart(product)}
                      className="w-full py-2.5 px-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-noir-950 font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                    >
                      <ShoppingBag size={14} />
                      <span>Move to Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
};
