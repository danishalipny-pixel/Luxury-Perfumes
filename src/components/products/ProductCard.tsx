import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingBag, Check } from 'lucide-react';
import type { Product } from '../../types/product';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { QuickViewModal } from '../common/QuickViewModal';

interface ProductCardProps {
  product: Product;
  isDark?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, isDark = false }) => {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const inWishlist = isInWishlist(product.id);
  const currentSize = product.sizes[selectedSizeIndex] || product.sizes[0];

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const added = addToCart(product, currentSize.size, 1);
    if (added) {
      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 1800);
    }
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <>
      <div
        className={`group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-500 border ${
          isDark
            ? 'bg-noir-900/60 border-noir-800/80 hover:border-gold-500/40 hover:shadow-luxury-dark'
            : 'bg-white/80 border-stone-200/70 hover:border-gold-500/50 hover:shadow-luxury'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container with Aspect Ratio */}
        <div className="relative aspect-[4/5] overflow-hidden bg-noir-950">
          <Link to={`/product/${product.slug}`} className="block w-full h-full">
            {/* Primary Image */}
            <img
              src={product.images[0]}
              alt={product.name}
              className={`w-full h-full object-contain p-2 transition-all duration-700 ${
                isHovered && product.images[1] ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
              }`}
              loading="lazy"
            />

            {/* Secondary Hover Image */}
            {product.images[1] && (
              <img
                src={product.images[1]}
                alt={`${product.name} detail`}
                className={`absolute inset-0 w-full h-full object-contain p-2 transition-all duration-700 ${
                  isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                loading="lazy"
              />
            )}
          </Link>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
            {product.isBestseller && (
              <span className="px-2.5 py-1 text-[10px] tracking-widest uppercase font-semibold bg-gold-500 text-noir-950 rounded shadow-sm">
                Bestseller
              </span>
            )}
            {product.isNew && (
              <span className="px-2.5 py-1 text-[10px] tracking-widest uppercase font-medium bg-noir-900/90 text-gold-300 border border-gold-500/30 rounded backdrop-blur-sm">
                New Arrival
              </span>
            )}
            {product.stockQuantity < 15 && product.stockQuantity > 0 && (
              <span className="px-2 py-0.5 text-[9px] tracking-wider uppercase font-medium bg-rose-950/80 text-rose-300 border border-rose-800/40 rounded">
                Limited Reserve ({product.stockQuantity} Left)
              </span>
            )}
          </div>

          {/* Floating Actions: Wishlist & Quick View */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
            <button
              onClick={handleWishlistToggle}
              className={`p-2.5 rounded-full transition-all duration-300 shadow-md ${
                inWishlist
                  ? 'bg-rose-500 text-white'
                  : 'bg-noir-950/70 backdrop-blur-sm text-noir-200 hover:text-rose-400 hover:bg-noir-950'
              }`}
              aria-label={inWishlist ? 'Remove from wishlist' : 'Save to wishlist'}
            >
              <Heart size={16} fill={inWishlist ? 'currentColor' : 'none'} />
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                setIsQuickViewOpen(true);
              }}
              className="p-2.5 rounded-full bg-noir-950/70 backdrop-blur-sm text-noir-200 hover:text-gold-400 hover:bg-noir-950 transition-all duration-300 shadow-md opacity-0 group-hover:opacity-100"
              aria-label="Quick preview"
            >
              <Eye size={16} />
            </button>
          </div>

          {/* Quick Add Overlay on Hover for Desktop */}
          <div className="absolute bottom-3 inset-x-3 z-10 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handleQuickAdd}
              className={`w-full py-2.5 px-4 rounded-xl text-xs uppercase tracking-widest font-medium transition-all duration-300 shadow-lg flex items-center justify-center gap-2 ${
                justAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gold-500 hover:bg-gold-400 text-noir-950 hover:shadow-gold-glow'
              }`}
            >
              {justAdded ? (
                <>
                  <Check size={14} /> Added
                </>
              ) : (
                <>
                  <ShoppingBag size={14} /> Add to Bag — ${currentSize.price}
                </>
              )}
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
          <div>
            {/* Category & Olfactory Family */}
            <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-gold-500/90 font-medium">
              <span>{product.gender}</span>
              <span>{product.fragranceFamily}</span>
            </div>

            {/* Product Title */}
            <h3 className="mt-1.5 font-serif text-lg font-medium leading-snug line-clamp-1">
              <Link
                to={`/product/${product.slug}`}
                className={`transition-colors duration-300 ${
                  isDark
                    ? 'text-page-home hover:text-gold-400'
                    : 'text-noir-900 hover:text-gold-600'
                }`}
              >
                {product.name}
              </Link>
            </h3>

            {/* Concentration & Subtitle */}
            <p className="text-xs text-noir-400 font-sans mt-0.5 tracking-wide line-clamp-1">
              {product.concentration}
            </p>

            {/* Size Selector Pills */}
            {product.sizes.length > 1 && (
              <div className="flex items-center gap-1.5 mt-3">
                {product.sizes.map((s, idx) => (
                  <button
                    key={s.size}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedSizeIndex(idx);
                    }}
                    className={`px-2 py-0.5 rounded text-[10px] tracking-wider font-sans transition-all ${
                      selectedSizeIndex === idx
                        ? 'bg-gold-500 text-noir-950 font-semibold'
                        : isDark
                        ? 'bg-noir-800 text-noir-300 hover:text-gold-400'
                        : 'bg-stone-100 text-stone-600 hover:text-gold-700'
                    }`}
                  >
                    {s.size}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Pricing & Mobile Quick Add Button */}
          <div className="mt-4 pt-3 border-t border-noir-800/20 flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span
                className={`font-serif text-lg font-semibold ${
                  isDark ? 'text-gold-300' : 'text-gold-600'
                }`}
              >
                ${currentSize.price}
              </span>
              {currentSize.originalPrice && (
                <span className="text-xs text-noir-400 line-through">
                  ${currentSize.originalPrice}
                </span>
              )}
            </div>

            {/* Mobile Add to Cart Button */}
            <button
              onClick={handleQuickAdd}
              className={`sm:hidden p-2 rounded-lg text-xs font-medium transition-colors ${
                justAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gold-500 hover:bg-gold-400 text-noir-950'
              }`}
              aria-label={`Add ${product.name} to bag`}
            >
              {justAdded ? <Check size={16} /> : <ShoppingBag size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {isQuickViewOpen && (
        <QuickViewModal product={product} onClose={() => setIsQuickViewOpen(false)} />
      )}
    </>
  );
};
