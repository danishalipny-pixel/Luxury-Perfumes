import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Heart, Plus, Minus, ArrowRight, Check } from 'lucide-react';
import type { Product } from '../../types/product';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [selectedSize, setSelectedSize] = useState<string>(
    product?.sizes[0]?.size || '100ml'
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [addedAnimation, setAddedAnimation] = useState<boolean>(false);

  if (!product) return null;

  const currentSizeObj =
    product.sizes.find((s) => s.size === selectedSize) || product.sizes[0];
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    const success = addToCart(product, selectedSize, quantity);
    if (success) {
      setAddedAnimation(true);
      setTimeout(() => setAddedAnimation(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-4xl bg-noir-950 border border-gold-500/30 rounded-2xl overflow-hidden shadow-luxury-dark text-page-home flex flex-col md:flex-row max-h-[90vh] animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-noir-900/80 text-noir-400 hover:text-page-home hover:bg-noir-800 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Product Media Gallery */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between bg-noir-900/50">
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-noir-800 bg-noir-950 flex items-center justify-center">
            <img
              src={product.images[activeImageIndex] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-contain p-2 transition-all duration-500"
            />
            {product.isBestseller && (
              <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] tracking-widest uppercase font-medium bg-gold-500 text-noir-950 rounded">
                Bestseller
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-2.5 mt-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-14 h-16 rounded-md overflow-hidden border transition-all ${
                    activeImageIndex === idx
                      ? 'border-gold-500 ring-1 ring-gold-500'
                      : 'border-noir-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain p-0.5 bg-noir-950" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details & Ordering */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-sans tracking-widest uppercase text-gold-400 font-medium">
                {product.category} • {product.gender}
              </span>
              <button
                onClick={() => toggleWishlist(product)}
                className={`p-2 rounded-full transition-colors ${
                  inWishlist
                    ? 'text-rose-500 bg-rose-500/10'
                    : 'text-noir-400 hover:text-rose-400 hover:bg-noir-900'
                }`}
                aria-label={inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
              >
                <Heart size={18} fill={inWishlist ? 'currentColor' : 'none'} />
              </button>
            </div>

            <h2 className="font-serif text-2xl md:text-3xl font-normal mt-1 tracking-wide">
              {product.name}
            </h2>
            <p className="text-xs text-noir-400 font-sans mt-0.5 tracking-wider">
              {product.subtitle}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mt-3">
              <span className="font-serif text-2xl font-semibold text-gold-400">
                ${currentSizeObj?.price || product.price} USD
              </span>
              {currentSizeObj?.originalPrice && (
                <span className="text-sm text-noir-500 line-through">
                  ${currentSizeObj.originalPrice}
                </span>
              )}
            </div>

            <p className="text-xs text-noir-300 font-sans leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Olfactory Notes Highlights */}
            <div className="mt-5 space-y-2 border-t border-b border-noir-800/80 py-4">
              <div className="text-xs flex items-baseline">
                <span className="w-20 text-noir-400 text-[11px] uppercase tracking-wider">Top:</span>
                <span className="text-page-home font-medium">{product.topNotes.join(', ')}</span>
              </div>
              <div className="text-xs flex items-baseline">
                <span className="w-20 text-noir-400 text-[11px] uppercase tracking-wider">Heart:</span>
                <span className="text-page-home font-medium">{product.heartNotes.join(', ')}</span>
              </div>
              <div className="text-xs flex items-baseline">
                <span className="w-20 text-noir-400 text-[11px] uppercase tracking-wider">Base:</span>
                <span className="text-page-home font-medium">{product.baseNotes.join(', ')}</span>
              </div>
            </div>

            {/* Size Options */}
            <div className="mt-5">
              <label className="text-[11px] uppercase tracking-widest text-noir-400 block mb-2 font-medium">
                Select Volume / Flacon Size:
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s.size}
                    onClick={() => {
                      setSelectedSize(s.size);
                      setQuantity(1);
                    }}
                    disabled={!s.inStock}
                    className={`px-3 py-2 text-xs rounded-lg border transition-all duration-200 ${
                      selectedSize === s.size
                        ? 'border-gold-500 bg-gold-500/15 text-gold-300 font-medium'
                        : 'border-noir-800 bg-noir-900/60 text-noir-300 hover:border-noir-700'
                    } ${!s.inStock ? 'opacity-40 line-through cursor-not-allowed' : ''}`}
                  >
                    <span>{s.size}</span>
                    <span className="ml-1.5 text-[10px] text-noir-400 font-normal">
                      ${s.price}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mt-4 flex items-center gap-3">
              <span className="text-[11px] uppercase tracking-widest text-noir-400 font-medium">
                Quantity:
              </span>
              <div className="flex items-center border border-noir-800 rounded-lg bg-noir-900">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-2.5 py-1 text-noir-400 hover:text-page-home transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={13} />
                </button>
                <span className="px-3 text-xs font-semibold">{quantity}</span>
                <button
                  onClick={() =>
                    setQuantity((q) =>
                      Math.min(currentSizeObj?.stockQuantity || 10, q + 1)
                    )
                  }
                  className="px-2.5 py-1 text-noir-400 hover:text-page-home transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={13} />
                </button>
              </div>
              <span className="text-[11px] text-noir-400">
                {currentSizeObj?.stockQuantity} available
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 pt-4 border-t border-noir-800 space-y-2.5">
            <button
              onClick={handleAddToCart}
              className={`w-full py-3 px-4 rounded-xl font-medium text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
                addedAnimation
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gold-500 hover:bg-gold-400 text-noir-950 hover:shadow-gold-glow'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check size={16} />
                  <span>Added to Shopping Bag</span>
                </>
              ) : (
                <span>Add to Shopping Bag — ${(currentSizeObj?.price || product.price) * quantity}</span>
              )}
            </button>

            <div className="flex justify-between items-center text-xs pt-1">
              <Link
                to={`/product/${product.slug}`}
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-gold-400 hover:text-gold-300 transition-colors underline-offset-4 hover:underline"
              >
                <span>View Full Editorial & Olfactory Notes</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
