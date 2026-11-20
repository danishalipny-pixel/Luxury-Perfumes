import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag, ShieldCheck, Tag, ExternalLink } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { SITE_CONFIG } from '../../config/site';
import { getCheckoutWhatsAppUrl } from '../../utils/whatsapp';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    updateItemSize,
    subtotal,
    shipping,
    discount,
    appliedPromo,
    applyPromoCode,
    removePromoCode,
    total,
    isCartDrawerOpen,
    setIsCartDrawerOpen,
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const [promoFeedback, setPromoFeedback] = useState<{ error?: string; success?: string }>({});
  const navigate = useNavigate();

  if (!isCartDrawerOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const result = applyPromoCode(promoInput);
    if (result.success) {
      setPromoFeedback({ success: result.message });
      setPromoInput('');
    } else {
      setPromoFeedback({ error: result.message });
    }
  };

  const amountNeededForFreeShipping = Math.max(
    0,
    SITE_CONFIG.shipping.freeShippingThreshold - (subtotal - discount)
  );

  const shippingProgressPercentage = Math.min(
    100,
    Math.round(((subtotal - discount) / SITE_CONFIG.shipping.freeShippingThreshold) * 100)
  );

  const handleProceedToCheckout = () => {
    setIsCartDrawerOpen(false);
    navigate('/checkout');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsCartDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="relative z-10 w-full max-w-md bg-noir-950 text-page-home h-full flex flex-col shadow-2xl border-l border-gold-500/20 animate-slideInRight">
        {/* Header */}
        <div className="p-5 border-b border-noir-800 flex items-center justify-between bg-noir-900/80">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="text-gold-400" size={20} />
            <h2 className="font-serif text-lg tracking-widest uppercase font-medium">Your Shopping Bag</h2>
            <span className="text-xs px-2 py-0.5 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30">
              {cart.reduce((c, i) => c + i.quantity, 0)}
            </span>
          </div>
          <button
            onClick={() => setIsCartDrawerOpen(false)}
            className="p-1.5 text-noir-400 hover:text-page-home transition-colors rounded-full hover:bg-noir-800"
            aria-label="Close Shopping Bag"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-5 py-3 bg-noir-900/40 border-b border-noir-800 text-xs">
          {amountNeededForFreeShipping > 0 ? (
            <p className="text-noir-300">
              Add <span className="text-gold-400 font-semibold">${amountNeededForFreeShipping}</span> more for{' '}
              <span className="text-page-home font-medium">Complimentary White Glove Delivery</span>
            </p>
          ) : (
            <p className="text-gold-400 font-medium flex items-center gap-1.5">
              <ShieldCheck size={14} /> You have qualified for Complimentary White Glove Delivery
            </p>
          )}
          <div className="w-full bg-noir-800 h-1.5 rounded-full mt-2 overflow-hidden">
            <div
              className="bg-gold-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${shippingProgressPercentage}%` }}
            />
          </div>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-noir-800/60">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-noir-900 border border-noir-800 flex items-center justify-center text-noir-500">
                <ShoppingBag size={28} />
              </div>
              <h3 className="font-serif text-xl tracking-wide">Your bag is currently empty</h3>
              <p className="text-xs text-noir-400 max-w-xs leading-relaxed">
                Explore our curated collections of rare extraits and discover the scent that becomes your signature.
              </p>
              <Link
                to="/shop"
                onClick={() => setIsCartDrawerOpen(false)}
                className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gold-500 hover:bg-gold-400 text-noir-950 font-medium text-xs tracking-widest uppercase transition-all"
              >
                <span>Explore Catalog</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="pt-4 first:pt-0 flex gap-4">
                {/* Product Image */}
                <Link
                  to={`/product/${item.product.slug}`}
                  onClick={() => setIsCartDrawerOpen(false)}
                  className="w-20 h-24 rounded-lg overflow-hidden bg-noir-900 border border-noir-800 flex-shrink-0 group"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-2">
                      <Link
                        to={`/product/${item.product.slug}`}
                        onClick={() => setIsCartDrawerOpen(false)}
                        className="font-serif text-sm font-semibold hover:text-gold-400 transition-colors line-clamp-1"
                      >
                        {item.product.name}
                      </Link>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-noir-500 hover:text-rose-400 transition-colors p-1"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <p className="text-[11px] text-noir-400 uppercase tracking-widest mt-0.5">
                      {item.product.concentration}
                    </p>

                    {/* Size Selector */}
                    {item.product.sizes.length > 1 && (
                      <div className="mt-1.5 flex items-center gap-1.5">
                        <span className="text-[11px] text-noir-400">Size:</span>
                        <select
                          value={item.selectedSize}
                          onChange={(e) => updateItemSize(item.id, e.target.value)}
                          className="bg-noir-900 border border-noir-700 text-page-home text-xs rounded px-2 py-0.5 focus:border-gold-500 focus:outline-none"
                        >
                          {item.product.sizes.map((s) => (
                            <option key={s.size} value={s.size} disabled={!s.inStock}>
                              {s.size} — ${s.price}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>

                  {/* Quantity & Item Total */}
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-noir-700 rounded-md bg-noir-900">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 px-2 text-noir-400 hover:text-page-home transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-xs px-2 font-medium font-sans">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        disabled={item.quantity >= item.maxStock}
                        className="p-1 px-2 text-noir-400 hover:text-page-home transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="font-serif text-sm font-semibold text-gold-400">
                        ${item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-noir-800 bg-noir-900/90 space-y-3.5">
            {/* Promo Code Input */}
            <div>
              {appliedPromo ? (
                <div className="flex items-center justify-between bg-gold-500/10 border border-gold-500/30 rounded-lg px-3 py-1.5 text-xs">
                  <div className="flex items-center gap-1.5 text-gold-400">
                    <Tag size={13} />
                    <span className="font-semibold">{appliedPromo.code}</span>
                    <span className="text-noir-300">({appliedPromo.discountPercentage}% OFF)</span>
                  </div>
                  <button
                    onClick={removePromoCode}
                    className="text-noir-400 hover:text-page-home text-[11px] underline"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="Privilege Code (e.g. NOIRELLE10)"
                    className="flex-1 bg-noir-950 border border-noir-700 text-xs text-page-home px-3 py-2 rounded-lg placeholder-noir-500 focus:border-gold-500 focus:outline-none uppercase"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-noir-800 hover:bg-gold-500 hover:text-noir-950 text-page-home text-xs rounded-lg transition-colors font-medium uppercase tracking-wider"
                  >
                    Apply
                  </button>
                </form>
              )}
              {promoFeedback.error && (
                <p className="text-[11px] text-rose-400 mt-1">{promoFeedback.error}</p>
              )}
              {promoFeedback.success && (
                <p className="text-[11px] text-emerald-400 mt-1">{promoFeedback.success}</p>
              )}
            </div>

            {/* Price Breakdown */}
            <div className="space-y-1.5 text-xs text-noir-300 pt-1">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-page-home">${subtotal}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-gold-400">
                  <span>Privilege Savings</span>
                  <span>-${discount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? (
                    <span className="text-gold-400">Complimentary</span>
                  ) : (
                    `$${shipping}`
                  )}
                </span>
              </div>
              <div className="flex justify-between items-baseline pt-2 border-t border-noir-800 text-sm font-serif">
                <span className="text-page-home uppercase tracking-wider font-semibold">Total</span>
                <span className="text-lg font-bold text-gold-400">${total} USD</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-1">
              <button
                onClick={handleProceedToCheckout}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-noir-950 font-medium text-xs tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-gold-glow"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={14} />
              </button>

              <div className="flex gap-2">
                <Link
                  to="/cart"
                  onClick={() => setIsCartDrawerOpen(false)}
                  className="flex-1 text-center py-2 px-3 rounded-lg border border-noir-700 hover:border-gold-500/50 text-noir-300 hover:text-page-home text-[11px] uppercase tracking-wider transition-colors"
                >
                  View Full Cart
                </Link>
                <a
                  href={getCheckoutWhatsAppUrl(cart, subtotal, shipping, discount, total)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-noir-850 hover:bg-noir-800 border border-gold-500/30 text-gold-400 text-[11px] uppercase tracking-wider transition-colors"
                  title="Inquire on WhatsApp about this bag"
                >
                  <span>WhatsApp Inquiry</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
