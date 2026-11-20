import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, ExternalLink, ArrowRight } from 'lucide-react';
import { PageLayout } from '../../components/layout/PageLayout';
import { useCart } from '../../context/CartContext';
import type { CustomerDetails, PaymentMethod, Order } from '../../types/order';
import { getCheckoutWhatsAppUrl } from '../../utils/whatsapp';

export const CheckoutPage: React.FC = () => {
  const { cart, subtotal, shipping, discount, appliedPromo, clearCart } = useCart();
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState<CustomerDetails>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    apartment: '',
    city: '',
    country: 'United States',
    postalCode: '',
    orderNotes: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cod');
  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express'>('standard');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If cart is empty, redirect to cart
  if (cart.length === 0) {
    return (
      <PageLayout bgHex="#FBFAF7" isDark={false} title="Checkout">
        <div className="py-32 text-center max-w-md mx-auto px-4">
          <h1 className="font-serif text-3xl font-light text-noir-950">Your Bag is Empty</h1>
          <p className="mt-2 text-xs text-stone-500">
            Please add fragrances to your shopping bag before proceeding to checkout.
          </p>
          <Link
            to="/shop"
            className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gold-500 text-noir-950 text-xs font-medium uppercase tracking-widest"
          >
            <span>Explore Collection</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </PageLayout>
    );
  }

  const shippingCost = shippingMethod === 'express' ? 35 : shipping;
  const grandTotal = Math.max(0, subtotal - discount + shippingCost);

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name.';
    if (!formData.email.trim() || !formData.email.includes('@'))
      errs.email = 'Please provide a valid email address.';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required for delivery coordination.';
    if (!formData.address.trim()) errs.address = 'Street address is required.';
    if (!formData.city.trim()) errs.city = 'City is required.';
    if (!formData.postalCode.trim()) errs.postalCode = 'Postal / ZIP code is required.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      window.scrollTo({ top: 100, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);

    // Generate unique luxury order ID
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const orderId = `NR-2026-${randomSuffix}`;

    const newOrder: Order = {
      id: orderId,
      createdAt: new Date().toISOString(),
      customer: formData,
      items: [...cart],
      subtotal,
      discount,
      promoCodeApplied: appliedPromo?.code,
      shipping: shippingCost,
      shippingMethod:
        shippingMethod === 'express'
          ? 'Priority International Air ($35 USD)'
          : 'Complimentary White Glove Delivery',
      total: grandTotal,
      paymentMethod,
      paymentStatus:
        paymentMethod === 'cod'
          ? 'Cash on Delivery'
          : paymentMethod === 'stripe'
          ? 'Paid (Demo)'
          : 'Pending Verification',
      orderStatus: 'Processing',
      trackingNumber: `WD-${Math.floor(100000000 + Math.random() * 900000000)}`,
    };

    // Store in localStorage
    try {
      const stored = localStorage.getItem('noirelle_orders_v1');
      const orderList: Order[] = stored ? JSON.parse(stored) : [];
      orderList.unshift(newOrder);
      localStorage.setItem('noirelle_orders_v1', JSON.stringify(orderList));
    } catch (err) {
      console.error(err);
    }

    setTimeout(() => {
      clearCart();
      setIsSubmitting(false);
      navigate(`/order-success/${orderId}`);
    }, 900);
  };

  return (
    <PageLayout
      bgHex="#FBFAF7" // Clean Ivory
      isDark={false}
      title="Secure Luxury Acquisition Checkout"
      description="Finalize your NOIRÉLLE fragrance order with complimentary White Glove delivery and bespoke presentation."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest3 text-gold-700 font-semibold">
            Secure Acquisition
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light text-noir-950 mt-1">
            Maison Checkout
          </h1>
          <p className="mt-2 text-xs text-stone-500 font-sans flex items-center justify-center gap-1.5">
            <Lock size={12} className="text-emerald-700" /> 256-Bit Encrypted Secure Checkout Interface
          </p>
        </div>

        <form onSubmit={handleSubmitOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Client & Shipping Forms */}
            <div className="lg:col-span-7 space-y-8">
              {/* Section 1: Customer Details */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-5">
                <h2 className="font-serif text-xl font-medium text-noir-950 pb-3 border-b border-stone-100 flex items-center justify-between">
                  <span>1. Client Information & Contact</span>
                  <span className="text-xs font-sans text-stone-400 font-normal">Step 1 of 3</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="text-xs uppercase tracking-widest text-noir-900 font-semibold block mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Lord Sebastian Beaumont"
                      className={`w-full bg-stone-50 border ${
                        errors.fullName ? 'border-rose-500' : 'border-stone-300'
                      } rounded-xl px-4 py-2.5 text-xs text-noir-900 focus:outline-none focus:border-gold-500`}
                    />
                    {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-noir-900 font-semibold block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="client@luxury.com"
                      className={`w-full bg-stone-50 border ${
                        errors.email ? 'border-rose-500' : 'border-stone-300'
                      } rounded-xl px-4 py-2.5 text-xs text-noir-900 focus:outline-none focus:border-gold-500`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-noir-900 font-semibold block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full bg-stone-50 border ${
                        errors.phone ? 'border-rose-500' : 'border-stone-300'
                      } rounded-xl px-4 py-2.5 text-xs text-noir-900 focus:outline-none focus:border-gold-500`}
                    />
                    {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Section 2: Delivery Address */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-5">
                <h2 className="font-serif text-xl font-medium text-noir-950 pb-3 border-b border-stone-100 flex items-center justify-between">
                  <span>2. Delivery Destination</span>
                  <span className="text-xs font-sans text-stone-400 font-normal">Step 2 of 3</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="text-xs uppercase tracking-widest text-noir-900 font-semibold block mb-1">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Apartment, suite, unit, building, street..."
                      className={`w-full bg-stone-50 border ${
                        errors.address ? 'border-rose-500' : 'border-stone-300'
                      } rounded-xl px-4 py-2.5 text-xs text-noir-900 focus:outline-none focus:border-gold-500`}
                    />
                    {errors.address && <p className="text-[11px] text-rose-500 mt-1">{errors.address}</p>}
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-noir-900 font-semibold block mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="e.g. New York, London, Paris"
                      className={`w-full bg-stone-50 border ${
                        errors.city ? 'border-rose-500' : 'border-stone-300'
                      } rounded-xl px-4 py-2.5 text-xs text-noir-900 focus:outline-none focus:border-gold-500`}
                    />
                    {errors.city && <p className="text-[11px] text-rose-500 mt-1">{errors.city}</p>}
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-noir-900 font-semibold block mb-1">
                      Postal / ZIP Code *
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      placeholder="10001"
                      className={`w-full bg-stone-50 border ${
                        errors.postalCode ? 'border-rose-500' : 'border-stone-300'
                      } rounded-xl px-4 py-2.5 text-xs text-noir-900 focus:outline-none focus:border-gold-500`}
                    />
                    {errors.postalCode && <p className="text-[11px] text-rose-500 mt-1">{errors.postalCode}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-xs uppercase tracking-widest text-noir-900 font-semibold block mb-1">
                      Country / Territory
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-2.5 text-xs text-noir-900 focus:outline-none focus:border-gold-500"
                    >
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="France">France</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Germany">Germany</option>
                      <option value="Canada">Canada</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-xs uppercase tracking-widest text-noir-900 font-semibold block mb-1">
                      Concierge Delivery Instructions (Optional)
                    </label>
                    <textarea
                      name="orderNotes"
                      value={formData.orderNotes}
                      onChange={handleInputChange}
                      placeholder="Gate code, doorman instructions, or specific delivery scheduling notes..."
                      rows={2}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl p-3 text-xs text-noir-900 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                {/* Shipping Method Selection */}
                <div className="pt-4 border-t border-stone-100 space-y-3">
                  <label className="text-xs uppercase tracking-widest text-noir-900 font-semibold block">
                    Select Courier Level:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between text-xs transition-all ${
                        shippingMethod === 'standard'
                          ? 'border-gold-600 bg-gold-50/40 ring-1 ring-gold-600'
                          : 'border-stone-200 hover:border-stone-400'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="radio"
                          name="shippingMethod"
                          checked={shippingMethod === 'standard'}
                          onChange={() => setShippingMethod('standard')}
                          className="accent-gold-600"
                        />
                        <div>
                          <p className="font-semibold text-noir-950">White Glove Delivery</p>
                          <p className="text-[11px] text-stone-500">2–4 Business Days</p>
                        </div>
                      </div>
                      <span className="font-serif font-bold text-gold-800">
                        {shipping === 0 ? 'Complimentary' : `$${shipping} USD`}
                      </span>
                    </label>

                    <label
                      className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between text-xs transition-all ${
                        shippingMethod === 'express'
                          ? 'border-gold-600 bg-gold-50/40 ring-1 ring-gold-600'
                          : 'border-stone-200 hover:border-stone-400'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="radio"
                          name="shippingMethod"
                          checked={shippingMethod === 'express'}
                          onChange={() => setShippingMethod('express')}
                          className="accent-gold-600"
                        />
                        <div>
                          <p className="font-semibold text-noir-950">Priority Air Courier</p>
                          <p className="text-[11px] text-stone-500">1–2 Business Days</p>
                        </div>
                      </div>
                      <span className="font-serif font-bold text-gold-800">$35 USD</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Section 3: Payment Architecture */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-5">
                <h2 className="font-serif text-xl font-medium text-noir-950 pb-3 border-b border-stone-100 flex items-center justify-between">
                  <span>3. Settlement Preference</span>
                  <span className="text-xs font-sans text-stone-400 font-normal">Step 3 of 3</span>
                </h2>

                <div className="space-y-3">
                  {/* COD */}
                  <label
                    className={`p-4 rounded-xl border cursor-pointer flex items-start gap-3 text-xs transition-all ${
                      paymentMethod === 'cod'
                        ? 'border-gold-600 bg-gold-50/40 ring-1 ring-gold-600'
                        : 'border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="mt-0.5 accent-gold-600"
                    />
                    <div>
                      <p className="font-semibold text-noir-950">Cash on Delivery / Concierge Settlement</p>
                      <p className="text-[11px] text-stone-500 mt-0.5 leading-relaxed">
                        Pay upon physical hand-off by our verified private courier. Available in select metropolitan jurisdictions.
                      </p>
                    </div>
                  </label>

                  {/* Card / Stripe Demo */}
                  <label
                    className={`p-4 rounded-xl border cursor-pointer flex items-start gap-3 text-xs transition-all ${
                      paymentMethod === 'stripe'
                        ? 'border-gold-600 bg-gold-50/40 ring-1 ring-gold-600'
                        : 'border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="stripe"
                      checked={paymentMethod === 'stripe'}
                      onChange={() => setPaymentMethod('stripe')}
                      className="mt-0.5 accent-gold-600"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-noir-950">Credit / Debit Card (Stripe Gateway Mock)</p>
                        <span className="px-2 py-0.5 rounded text-[10px] bg-stone-100 text-stone-600 font-medium">
                          Demo Sandbox
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-500 mt-0.5 leading-relaxed">
                        Production architecture ready. In this demonstration deployment, transaction verification is safely simulated without handling real cards.
                      </p>
                    </div>
                  </label>

                  {/* Bank Wire */}
                  <label
                    className={`p-4 rounded-xl border cursor-pointer flex items-start gap-3 text-xs transition-all ${
                      paymentMethod === 'bank_transfer'
                        ? 'border-gold-600 bg-gold-50/40 ring-1 ring-gold-600'
                        : 'border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank_transfer"
                      checked={paymentMethod === 'bank_transfer'}
                      onChange={() => setPaymentMethod('bank_transfer')}
                      className="mt-0.5 accent-gold-600"
                    />
                    <div>
                      <p className="font-semibold text-noir-950">Direct Maison Wire Transfer</p>
                      <p className="text-[11px] text-stone-500 mt-0.5 leading-relaxed">
                        Invoice and IBAN/SWIFT instructions will be generated upon confirmation for private banking routing.
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column: Order Summary & Place Order */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-6 sticky top-28">
                <h2 className="font-serif text-xl font-medium text-noir-950 pb-3 border-b border-stone-100">
                  Acquisition Review ({cart.reduce((c, i) => c + i.quantity, 0)} Items)
                </h2>

                {/* Items Mini List */}
                <div className="max-h-60 overflow-y-auto space-y-3 pr-2 divide-y divide-stone-100">
                  {cart.map((item) => (
                    <div key={item.id} className="pt-3 first:pt-0 flex items-center gap-3">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-12 h-14 object-contain p-0.5 rounded-lg bg-stone-900 flex-shrink-0"
                      />
                      <div className="flex-1 text-xs">
                        <p className="font-medium text-noir-900 line-clamp-1">{item.product.name}</p>
                        <p className="text-[11px] text-stone-500">
                          {item.selectedSize} &bull; Qty: {item.quantity}
                        </p>
                      </div>
                      <span className="font-serif text-sm font-semibold text-gold-800">
                        ${item.price * item.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-2 text-xs text-stone-600 border-t border-stone-200 pt-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-noir-950 font-medium">${subtotal} USD</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-gold-700 font-semibold">
                      <span>Privilege Concession ({appliedPromo?.code})</span>
                      <span>-${discount} USD</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>
                      {shippingCost === 0 ? (
                        <span className="text-emerald-700 font-semibold">Complimentary</span>
                      ) : (
                        `$${shippingCost} USD`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between items-baseline pt-4 border-t border-stone-200 text-base font-serif">
                    <span className="text-noir-950 font-bold uppercase tracking-wider">Total Payable</span>
                    <span className="text-2xl font-bold text-gold-700">${grandTotal} USD</span>
                  </div>
                </div>

                {/* Submit Order Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-gold-500 hover:bg-gold-400 text-noir-950 font-medium text-xs tracking-widest uppercase transition-all duration-300 shadow-luxury hover:shadow-gold-glow flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Registering Acquisition...</span>
                  ) : (
                    <>
                      <span>Complete Acquisition</span>
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>

                {/* WhatsApp Inquiry Fallback Option */}
                <div className="pt-2 border-t border-stone-100 text-center">
                  <p className="text-[11px] text-stone-500 mb-2">
                    Prefer to review with a private specialist before paying?
                  </p>
                  <a
                    href={getCheckoutWhatsAppUrl(
                      cart,
                      subtotal,
                      shippingCost,
                      discount,
                      grandTotal,
                      formData.fullName || 'Private Client'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 text-xs text-gold-800 font-medium hover:text-gold-950 underline underline-offset-4"
                  >
                    <span>Inquire via Concierge WhatsApp</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </PageLayout>
  );
};
