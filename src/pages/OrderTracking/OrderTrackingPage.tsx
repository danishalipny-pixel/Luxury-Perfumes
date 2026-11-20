import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, CheckCircle, ArrowRight } from 'lucide-react';
import { PageLayout } from '../../components/layout/PageLayout';
import type { Order } from '../../types/order';

export const OrderTrackingPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialOrderId = searchParams.get('orderId') || '';
  const [orderIdInput, setOrderIdInput] = useState(initialOrderId);

  const handleLookup = (idToFind: string) => {
    const trimmed = idToFind.trim();
    if (!trimmed) return null;

    try {
      const stored = localStorage.getItem('noirelle_orders_v1');
      const list: Order[] = stored ? JSON.parse(stored) : [];
      const found = list.find((o) => o.id.toLowerCase() === trimmed.toLowerCase());
      return found || null;
    } catch {
      return null;
    }
  };

  const [searchedOrder, setSearchedOrder] = useState<Order | null>(() => {
    return initialOrderId ? handleLookup(initialOrderId) : null;
  });
  const [searched, setSearched] = useState(Boolean(initialOrderId));

  const executeLookup = (idToFind: string) => {
    const res = handleLookup(idToFind);
    setSearchedOrder(res);
    setSearched(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ orderId: orderIdInput.trim() });
    executeLookup(orderIdInput);
  };

  const steps = [
    { title: 'Order Registered & Verified', time: 'Day 1 • 09:30 AM', done: true },
    { title: 'Master Artisan Compounding (Grasse Atelier)', time: 'Day 1 • 14:15 PM', done: true },
    { title: 'Hand-Numbered Crystal Flacon Inspection', time: 'Day 2 • 10:00 AM', done: true },
    { title: 'Dispatched with Insured White Glove Courier', time: 'Day 2 • 16:45 PM', done: searchedOrder ? searchedOrder.orderStatus !== 'Processing' : false },
    { title: 'Delivered to Private Residence', time: 'Pending Delivery', done: searchedOrder?.orderStatus === 'Delivered' },
  ];

  return (
    <PageLayout
      bgHex="#EFEFEF" // Soft Platinum
      isDark={false}
      title="Track Your Order & Delivery"
      description="Track the status of your NOIRÉLLE flacons from artisan compounding in Grasse to White Glove delivery at your residence."
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest3 text-gold-700 font-semibold">
            Concierge Dispatch
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light text-noir-950 mt-1">
            Track Your Acquisition
          </h1>
          <p className="mt-2 text-xs text-stone-600 font-sans">
            Enter your unique NOIRÉLLE order reference code (e.g. NR-2026-XXXX) to view compounding and shipping status.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white p-6 rounded-2xl border border-stone-300 shadow-sm mb-10">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
              <input
                type="text"
                value={orderIdInput}
                onChange={(e) => setOrderIdInput(e.target.value)}
                placeholder="Enter Order Reference (e.g. NR-2026-8941)..."
                className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-xs text-noir-900 uppercase font-mono tracking-wider focus:outline-none focus:border-gold-500"
                required
              />
            </div>
            <button
              type="submit"
              className="py-3 px-6 rounded-xl bg-gold-500 hover:bg-gold-400 text-noir-950 font-medium text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
            >
              <span>Track Flacon</span>
              <ArrowRight size={14} />
            </button>
          </form>
        </div>

        {/* Tracking Timeline */}
        {searched && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-sm space-y-8 animate-fadeIn">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center pb-6 border-b border-stone-200 gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-widest text-stone-400">Order Reference</p>
                <p className="font-serif text-xl font-bold text-noir-950">
                  {searchedOrder ? searchedOrder.id : orderIdInput}
                </p>
              </div>
              <div>
                <span className="text-xs px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full font-semibold">
                  {searchedOrder ? searchedOrder.orderStatus : 'In Transit via White Glove Courier'}
                </span>
              </div>
            </div>

            {/* Stepper */}
            <div className="space-y-6">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
                        step.done
                          ? 'bg-emerald-600 text-white'
                          : 'bg-stone-100 text-stone-400 border border-stone-300'
                      }`}
                    >
                      {step.done ? <CheckCircle size={14} /> : idx + 1}
                    </div>
                    {idx < steps.length - 1 && (
                      <div
                        className={`w-0.5 h-10 my-1 ${
                          step.done ? 'bg-emerald-500' : 'bg-stone-200'
                        }`}
                      />
                    )}
                  </div>

                  <div className="pt-0.5">
                    <p className={`text-xs font-semibold ${step.done ? 'text-noir-950' : 'text-stone-400'}`}>
                      {step.title}
                    </p>
                    <p className="text-[11px] text-stone-500">{step.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {searchedOrder && (
              <div className="pt-6 border-t border-stone-200 text-xs text-stone-600">
                <p className="font-semibold text-noir-950 mb-1">Delivery Destination:</p>
                <p>{searchedOrder.customer.fullName} &bull; {searchedOrder.customer.city}, {searchedOrder.customer.country}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </PageLayout>
  );
};
