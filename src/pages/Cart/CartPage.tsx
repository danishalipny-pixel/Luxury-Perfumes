import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Tag, ExternalLink } from 'lucide-react';
import { PageLayout } from '../../components/layout/PageLayout';
import { useCart } from '../../context/CartContext';
import { SITE_CONFIG } from '../../config/site';
import { getCheckoutWhatsAppUrl } from '../../utils/whatsapp';

export const CartPage: React.FC = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    updateItemSize,
    clearCart,
    subtotal,
    shipping,
    discount,
    appliedPromo,
    applyPromoCode,
    removePromoCode,
    total,
  } = useCart();

  const [promoCodeInput, setPromoCodeInput] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ error?: string; success?: string }>({});
  const [giftNote, setGiftNote] = useState('');
  const navigate = useNavigate();

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoCodeInput.trim()) return;
    const res = applyPromoCode(promoCodeInput);
    if (res.success) {
      setPromoMessage({ success: res.message });
      setPromoCodeInput('');
    } else {
      setPromoMessage({ error: res.message });
    }
  };

  const freeShippingThreshold = SITE_CONFIG.shipping.freeShippingThreshold;
  const neededForFreeShipping = Math.max(0, freeShippingThreshold - (subtotal - discount));

  return (
    <PageLayout
      bgHex="#EAE5DC" // Warm Stone
      isDark={false}
      title="Shopping Bag & Client Acquisition"
      description="Review your curated NOIRÉLLE fragrance selections, adjust sizes, apply privilege codes, and proceed to checkout."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Title */}
        <div className="pb-8 mb-8 border-b border-stone-300">
          <span className="text-xs uppercase tracking-widest3 text-gold-700 font-semibold">
            Order Review
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light text-noir-950 mt-1">
            Your Shopping Bag
          </h1>
          <p className="mt-2 text-xs text-stone-600 font-sans">
            Complimentary White Glove presentation box and matching discovery vial included with every flacon.
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="py-24 text-center bg-white/70 rounded-2xl border border-stone-200 p-8 max-w-lg mx-auto shadow-sm">
            <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mx-auto mb-4">
              <ShoppingBag size={28} />
            </div>
            <h2 className="font-serif text-2xl text-noir-900">Your bag is empty</h2>
            <p className="text-xs text-stone-500 mt-2 leading-relaxed">
              Explore our collections to select your signature extrait or discovery coffret.
            </p>
            <Link
              to="/shop"
              className="mt-6 inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gold-500 hover:bg-gold-400 text-noir-950 font-medium text-xs tracking-widest uppercase transition-colors"
            >
              <span>Explore The Catalog</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Items Table */}
            <div className="lg:col-span-8 space-y-6">
              {/* Free Delivery Bar */}
              <div className="p-4 bg-white/80 rounded-2xl border border-stone-300 text-xs">
                {neededForFreeShipping > 0 ? (
                  <p className="text-stone-700">
                    Add <strong className="text-gold-800">${neededForFreeShipping} USD</strong> more to unlock{' '}
                    <span className="font-semibold text-noir-950">Complimentary White Glove Delivery</span>.
                  </p>
                ) : (
                  <p className="text-emerald-800 font-medium flex items-center gap-2">
                    <ShieldCheck size={16} /> Your order qualifies for Complimentary White Glove Delivery worldwide.
                  </p>
                )}
              </div>

              {/* Items Card List */}
              <div className="bg-white rounded-2xl border border-stone-200 divide-y divide-stone-200 overflow-hidden shadow-sm">
                {cart.map((item) => (
                  <div key={item.id} className="p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                    {/* Image */}
                    <Link
                      to={`/product/${item.product.slug}`}
                      className="w-24 h-28 rounded-xl overflow-hidden bg-noir-950 flex-shrink-0"
                    >
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-contain p-1"
                      />
                    </Link>

                    {/* Details */}
                    <div className="flex-1 space-y-1">
                      <span className="text-[10px] uppercase tracking-widest text-gold-700 font-semibold">
                        {item.product.concentration}
                      </span>
                      <h3 className="font-serif text-lg font-medium text-noir-950">
                        <Link to={`/product/${item.product.slug}`} className="hover:text-gold-700">
                          {item.product.name}
                        </Link>
                      </h3>

                      {/* Size selector */}
                      <div className="flex items-center gap-2 pt-1 text-xs text-stone-600">
                        <span>Volume:</span>
                        <select
                          value={item.selectedSize}
                          onChange={(e) => updateItemSize(item.id, e.target.value)}
                          className="bg-stone-50 border border-stone-300 text-noir-900 rounded px-2 py-0.5 text-xs font-sans"
                        >
                          {item.product.sizes.map((s) => (
                            <option key={s.size} value={s.size} disabled={!s.inStock}>
                              {s.size} (${s.price})
                            </option>
                          ))}
                        </select>
                      </div>

                      <p className="font-serif text-base font-semibold text-gold-700 pt-1">
                        ${item.price} USD each
                      </p>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex sm:flex-col items-center justify-between sm:justify-center gap-3 w-full sm:w-auto">
                      <div className="flex items-center border border-stone-300 rounded-lg bg-stone-50">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2.5 py-1 text-stone-600 hover:text-noir-950"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="px-3 text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          disabled={item.quantity >= item.maxStock}
                          className="px-2.5 py-1 text-stone-600 hover:text-noir-950 disabled:opacity-30"
                        >
                          <Plus size={13} />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="font-serif text-base font-bold text-noir-950">
                          ${item.price * item.quantity}
                        </span>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-stone-400 hover:text-rose-600 p-1 transition-colors"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gift Message / Order Note */}
              <div className="p-6 bg-white rounded-2xl border border-stone-200 space-y-2">
                <label className="text-xs uppercase tracking-widest text-noir-900 font-semibold block">
                  Complimentary Luxury Gift Message
                </label>
                <p className="text-xs text-stone-500">
                  We will hand-transcribe your personal message onto heavy ivory cardstock sealed with black wax.
                </p>
                <textarea
                  value={giftNote}
                  onChange={(e) => setGiftNote(e.target.value)}
                  placeholder="Enter your personal gift inscription here (optional)..."
                  rows={3}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-xs text-noir-900 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="flex justify-between items-center text-xs">
                <Link
                  to="/shop"
                  className="text-stone-600 hover:text-gold-700 underline underline-offset-4"
                >
                  &larr; Continue Shopping The Catalog
                </Link>
                <button
                  onClick={clearCart}
                  className="text-stone-400 hover:text-rose-600 underline"
                >
                  Empty Entire Bag
                </button>
              </div>
            </div>

            {/* Right Summary Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-5">
                <h2 className="font-serif text-xl font-medium text-noir-950 pb-4 border-b border-stone-200">
                  Order Summary
                </h2>

                {/* Promo Code Input */}
                <div>
                  {appliedPromo ? (
                    <div className="flex items-center justify-between bg-gold-50 border border-gold-200 rounded-xl p-3 text-xs">
                      <div className="flex items-center gap-2 text-gold-900 font-semibold">
                        <Tag size={14} className="text-gold-700" />
                        <span>{appliedPromo.code} ({appliedPromo.discountPercentage}% OFF)</span>
                      </div>
                      <button
                        onClick={removePromoCode}
                        className="text-stone-500 hover:text-rose-600 text-[11px] underline"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyPromo} className="space-y-2">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={promoCodeInput}
                          onChange={(e) => setPromoCodeInput(e.target.value)}
                          placeholder="Privilege Code (NOIRELLE10)"
                          className="flex-1 bg-stone-50 border border-stone-300 text-xs text-noir-900 px-3 py-2.5 rounded-xl uppercase placeholder-stone-400 focus:outline-none focus:border-gold-500"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2.5 bg-noir-900 hover:bg-gold-500 hover:text-noir-950 text-white text-xs uppercase tracking-wider rounded-xl transition-colors font-medium"
                        >
                          Apply
                        </button>
                      </div>
                      {promoMessage.error && (
                        <p className="text-[11px] text-rose-600">{promoMessage.error}</p>
                      )}
                      {promoMessage.success && (
                        <p className="text-[11px] text-emerald-700">{promoMessage.success}</p>
                      )}
                    </form>
                  )}
                </div>

                {/* Breakdown */}
                <div className="space-y-2.5 text-xs text-stone-600 border-t border-stone-100 pt-4">
                  <div className="flex justify-between">
                    <span>Flacons Subtotal</span>
                    <span className="text-noir-900 font-medium">${subtotal} USD</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-gold-800 font-medium">
                      <span>Privilege Discount</span>
                      <span>-${discount} USD</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>White Glove Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-emerald-700 font-medium">Complimentary</span>
                      ) : (
                        `$${shipping} USD`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between items-baseline pt-4 border-t border-stone-200 text-base font-serif">
                    <span className="text-noir-950 font-bold uppercase tracking-wider">Estimated Total</span>
                    <span className="text-2xl font-bold text-gold-700">${total} USD</span>
                  </div>
                </div>

                {/* Checkout Trigger */}
                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full py-4 px-6 rounded-xl bg-gold-500 hover:bg-gold-400 text-noir-950 font-medium text-xs tracking-widest uppercase transition-all duration-300 shadow-luxury hover:shadow-gold-glow flex items-center justify-center gap-2"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight size={15} />
                </button>

                {/* WhatsApp Bag Inquiry */}
                <a
                  href={getCheckoutWhatsAppUrl(cart, subtotal, shipping, discount, total)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gold-600/40 bg-stone-50 hover:bg-white text-gold-900 text-xs font-medium uppercase tracking-wider transition-colors"
                >
                  <span>Inquire Bag on WhatsApp</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};
