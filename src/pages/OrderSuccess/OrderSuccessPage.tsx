import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, Package, Printer, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PageLayout } from '../../components/layout/PageLayout';
import type { Order } from '../../types/order';

export const OrderSuccessPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [order] = useState<Order | null>(() => {
    try {
      const stored = localStorage.getItem('noirelle_orders_v1');
      if (stored) {
        const list: Order[] = JSON.parse(stored);
        return list.find((o) => o.id === orderId) || list[0] || null;
      }
    } catch {
      return null;
    }
    return null;
  });

  useEffect(() => {
    // Fire celebratory luxury gold confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C5A059', '#D8B26E', '#151515', '#E5C384', '#FFFFFF'],
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <PageLayout
      bgHex="#EDF3EA" // Light Sage
      isDark={false}
      title={`Acquisition Confirmed — ${orderId || 'NOIRÉLLE'}`}
      description="Thank you for your acquisition. Your order has been placed with the NOIRÉLLE Master Atelier."
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Celebration Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={32} />
          </div>

          <span className="text-xs uppercase tracking-widest3 text-gold-800 font-semibold">
            Acquisition Confirmed
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl font-light text-noir-950 mt-1">
            Thank You for Your Order
          </h1>

          <p className="mt-3 text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
            Your flacons are now being prepared at our Grasse atelier and packaged in our signature black and champagne presentation coffret.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-luxury-sm overflow-hidden p-6 sm:p-10 space-y-8">
          {/* Top metadata strip */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center pb-6 border-b border-stone-200 gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-stone-400">Order Reference</p>
              <p className="font-serif text-2xl font-bold text-noir-950 tracking-wider">
                {order ? order.id : orderId || 'NR-2026-8941'}
              </p>
            </div>

            <div className="sm:text-right">
              <p className="text-[11px] uppercase tracking-widest text-stone-400">Delivery Status</p>
              <p className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mt-0.5">
                {order ? order.orderStatus : 'Processing at Atelier'}
              </p>
            </div>
          </div>

          {/* Items Summary */}
          {order && (
            <div>
              <h2 className="text-xs uppercase tracking-widest text-noir-900 font-semibold mb-4">
                Selected Flacons ({order.items.reduce((s, i) => s + i.quantity, 0)})
              </h2>
              <div className="divide-y divide-stone-100">
                {order.items.map((item) => (
                  <div key={item.id} className="py-3 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-12 h-14 object-contain p-0.5 rounded-lg bg-stone-900 flex-shrink-0"
                      />
                      <div>
                        <p className="font-semibold text-noir-950">{item.product.name}</p>
                        <p className="text-stone-500 text-[11px]">
                          {item.selectedSize} &bull; Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <span className="font-serif text-sm font-semibold text-gold-800">
                      ${item.price * item.quantity} USD
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Financial Breakdown */}
          {order && (
            <div className="bg-stone-50 rounded-xl p-5 space-y-2 text-xs text-stone-600 border border-stone-200">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${order.subtotal} USD</span>
              </div>
              {order.discount > 0 && (
                <div className="flex justify-between text-gold-800 font-semibold">
                  <span>Privilege Concession ({order.promoCodeApplied})</span>
                  <span>-${order.discount} USD</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping Method</span>
                <span>{order.shippingMethod}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-stone-200 font-serif text-sm text-noir-950 font-bold">
                <span>Total Settled</span>
                <span className="text-base text-gold-800">${order.total} USD</span>
              </div>
            </div>
          )}

          {/* Delivery & Customer Info */}
          {order && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 text-xs text-stone-600">
              <div>
                <p className="uppercase tracking-widest text-[11px] font-semibold text-noir-900 mb-1">
                  Delivery Recipient
                </p>
                <p className="text-noir-900 font-medium">{order.customer.fullName}</p>
                <p>{order.customer.address}</p>
                <p>
                  {order.customer.city}, {order.customer.postalCode}
                </p>
                <p>{order.customer.country}</p>
                <p className="text-stone-500 mt-1">{order.customer.phone}</p>
              </div>

              <div>
                <p className="uppercase tracking-widest text-[11px] font-semibold text-noir-900 mb-1">
                  Settlement & Tracking
                </p>
                <p>Payment: <strong className="text-noir-900">{order.paymentStatus}</strong></p>
                <p>Courier Tracking: <code className="bg-stone-100 px-1.5 py-0.5 rounded font-mono text-noir-800">{order.trackingNumber}</code></p>
                <p className="mt-2 text-stone-500">
                  Confirmation dispatch sent to: <strong>{order.customer.email}</strong>
                </p>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-stone-300 text-xs text-noir-800 hover:border-gold-500 font-medium"
              >
                <Printer size={14} />
                <span>Print Official Receipt</span>
              </button>

              <Link
                to={`/order-tracking?orderId=${order?.id || orderId}`}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-noir-900 text-page-home text-xs font-medium uppercase tracking-wider hover:bg-noir-800"
              >
                <Package size={14} />
                <span>Track Delivery</span>
              </Link>
            </div>

            <Link
              to="/shop"
              className="inline-flex items-center gap-1.5 text-xs text-gold-800 hover:text-gold-950 underline underline-offset-4 font-medium"
            >
              <span>Return to Collections</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
