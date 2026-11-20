import React, { useState } from 'react';
import { Key, Package, ShoppingBag, DollarSign, TrendingUp, Lock, LogOut } from 'lucide-react';
import { PageLayout } from '../../components/layout/PageLayout';
import { PRODUCTS } from '../../data/products';
import type { Product } from '../../types/product';
import type { Order, OrderStatus } from '../../types/order';
import { SITE_CONFIG } from '../../config/site';

export const AdminPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('noirelle_admin_auth') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');

  // Active Tab
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'orders' | 'promotions'>('overview');

  // Admin Data State
  const [productsList] = useState<Product[]>(PRODUCTS);
  const [ordersList, setOrdersList] = useState<Order[]>(() => {
    try {
      const storedOrders = localStorage.getItem('noirelle_orders_v1');
      return storedOrders ? JSON.parse(storedOrders) : [];
    } catch {
      return [];
    }
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo passcode
    if (passcode === 'NOIRELLE2026' || passcode === 'admin' || passcode === '1234') {
      setIsAuthenticated(true);
      sessionStorage.setItem('noirelle_admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('Invalid administrative key. (Demo Hint: Use NOIRELLE2026 or admin)');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('noirelle_admin_auth');
  };

  const handleUpdateOrderStatus = (orderId: string, newStatus: OrderStatus) => {
    const updated = ordersList.map((o) => (o.id === orderId ? { ...o, orderStatus: newStatus } : o));
    setOrdersList(updated);
    try {
      localStorage.setItem('noirelle_orders_v1', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }
  };

  // Metrics
  const totalRevenue = ordersList.reduce((sum, o) => sum + o.total, 0);
  const totalOrders = ordersList.length;
  const avgOrderValue = totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0;

  if (!isAuthenticated) {
    return (
      <PageLayout
        bgHex="#18181B"
        isDark={true}
        title="Maison Concierge Administration"
        description="Private administrative portal for NOIRÉLLE maison operators."
      >
        <div className="min-h-[70vh] flex items-center justify-center px-4 py-20">
          <div className="w-full max-w-md bg-noir-900 border border-gold-500/30 rounded-2xl p-8 shadow-luxury-dark text-page-home space-y-6">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-full bg-noir-950 border border-gold-500/40 text-gold-400 flex items-center justify-center mx-auto shadow-sm">
                <Lock size={24} />
              </div>
              <h1 className="font-serif text-2xl font-normal text-page-home tracking-wider">
                Maison Admin Portal
              </h1>
              <p className="text-xs text-noir-400">
                Restricted to authorized atelier fragrance directors
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-widest text-gold-400 font-semibold block mb-1">
                  Atelier Security Passcode
                </label>
                <div className="relative">
                  <Key className="absolute left-3.5 top-1/2 -translate-y-1/2 text-noir-500" size={16} />
                  <input
                    type="password"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    placeholder="Enter security key..."
                    className="w-full pl-10 pr-4 py-2.5 bg-noir-950 border border-noir-700 rounded-xl text-xs text-page-home focus:outline-none focus:border-gold-500"
                    autoFocus
                  />
                </div>
                {authError && <p className="text-[11px] text-rose-400 mt-1.5">{authError}</p>}
                <p className="text-[10px] text-noir-500 mt-2">
                  Demo Passcode: <code className="text-gold-400 bg-noir-950 px-1 py-0.5 rounded">NOIRELLE2026</code> or <code className="text-gold-400 bg-noir-950 px-1 py-0.5 rounded">admin</code>
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-noir-950 font-medium text-xs tracking-widest uppercase transition-all shadow-md"
              >
                Authenticate Entry
              </button>
            </form>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      bgHex="#18181B"
      isDark={true}
      title="Maison Executive Dashboard"
      description="Executive administration, order tracking, and product control panel."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center pb-6 border-b border-noir-800 gap-4 mb-8">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-gold-400 font-semibold">
              Maison Portal • Confidential
            </span>
            <h1 className="font-serif text-3xl font-light text-page-home mt-0.5">
              Atelier Management Console
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-noir-400 bg-noir-900 border border-noir-700 px-3 py-1.5 rounded-lg">
              Logged in as Master Administrator
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-noir-900 hover:bg-rose-950 border border-noir-700 hover:border-rose-800 text-xs text-noir-300 hover:text-rose-300 transition-colors"
            >
              <LogOut size={13} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-2 border-b border-noir-800 pb-4 mb-8 text-xs uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'overview'
                ? 'bg-gold-500 text-noir-950'
                : 'text-noir-300 hover:text-page-home hover:bg-noir-900'
            }`}
          >
            Dashboard Overview
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'orders'
                ? 'bg-gold-500 text-noir-950'
                : 'text-noir-300 hover:text-page-home hover:bg-noir-900'
            }`}
          >
            Client Orders ({ordersList.length})
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'products'
                ? 'bg-gold-500 text-noir-950'
                : 'text-noir-300 hover:text-page-home hover:bg-noir-900'
            }`}
          >
            Product Portfolio ({productsList.length})
          </button>
          <button
            onClick={() => setActiveTab('promotions')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'promotions'
                ? 'bg-gold-500 text-noir-950'
                : 'text-noir-300 hover:text-page-home hover:bg-noir-900'
            }`}
          >
            Promotions & Privileges
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-noir-900 border border-noir-800">
                <div className="flex justify-between items-center text-noir-400">
                  <span className="text-xs uppercase tracking-widest">Total Sales</span>
                  <DollarSign size={18} className="text-gold-400" />
                </div>
                <p className="font-serif text-3xl font-semibold text-page-home mt-2">
                  ${totalRevenue} USD
                </p>
                <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                  <TrendingUp size={12} /> Live simulated volume
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-noir-900 border border-noir-800">
                <div className="flex justify-between items-center text-noir-400">
                  <span className="text-xs uppercase tracking-widest">Total Orders</span>
                  <ShoppingBag size={18} className="text-gold-400" />
                </div>
                <p className="font-serif text-3xl font-semibold text-page-home mt-2">
                  {totalOrders}
                </p>
                <p className="text-[11px] text-noir-400 mt-1">Recorded acquisitions</p>
              </div>

              <div className="p-6 rounded-2xl bg-noir-900 border border-noir-800">
                <div className="flex justify-between items-center text-noir-400">
                  <span className="text-xs uppercase tracking-widest">Average Order</span>
                  <TrendingUp size={18} className="text-gold-400" />
                </div>
                <p className="font-serif text-3xl font-semibold text-page-home mt-2">
                  ${avgOrderValue} USD
                </p>
                <p className="text-[11px] text-noir-400 mt-1">Across all clients</p>
              </div>

              <div className="p-6 rounded-2xl bg-noir-900 border border-noir-800">
                <div className="flex justify-between items-center text-noir-400">
                  <span className="text-xs uppercase tracking-widest">Active Masterworks</span>
                  <Package size={18} className="text-gold-400" />
                </div>
                <p className="font-serif text-3xl font-semibold text-page-home mt-2">
                  {productsList.length}
                </p>
                <p className="text-[11px] text-noir-400 mt-1">All in active production</p>
              </div>
            </div>

            {/* Quick Orders Overview */}
            <div className="p-6 rounded-2xl bg-noir-900 border border-noir-800">
              <h3 className="font-serif text-xl font-normal text-page-home mb-4">
                Recent Client Acquisitions
              </h3>
              {ordersList.length === 0 ? (
                <p className="text-xs text-noir-400 py-6 text-center">
                  No orders recorded yet. Placing an order through the checkout will automatically register here.
                </p>
              ) : (
                <div className="divide-y divide-noir-800 text-xs">
                  {ordersList.slice(0, 5).map((o) => (
                    <div key={o.id} className="py-3 flex items-center justify-between">
                      <div>
                        <span className="font-mono text-gold-400 font-semibold">{o.id}</span>
                        <span className="text-noir-400 ml-3">{o.customer.fullName} ({o.customer.city})</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-serif text-sm font-semibold text-page-home">${o.total} USD</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-noir-950 text-gold-300 border border-noir-700">
                          {o.orderStatus}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Orders */}
        {activeTab === 'orders' && (
          <div className="bg-noir-900 border border-noir-800 rounded-2xl overflow-hidden p-6 animate-fadeIn">
            <h3 className="font-serif text-xl font-normal text-page-home mb-4">
              All Registered Client Orders ({ordersList.length})
            </h3>
            {ordersList.length === 0 ? (
              <p className="text-xs text-noir-400 py-8 text-center">
                No orders yet. Place an acquisition through Checkout to see it in real-time.
              </p>
            ) : (
              <div className="divide-y divide-noir-800 space-y-4">
                {ordersList.map((order) => (
                  <div key={order.id} className="pt-4 first:pt-0 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-gold-400 text-sm">{order.id}</span>
                        <span className="text-stone-400 text-[11px]">• {new Date(order.createdAt).toLocaleDateString()}</span>
                      </div>
                      <p className="text-page-home font-semibold mt-1">
                        {order.customer.fullName} &bull; <span className="text-stone-400 font-normal">{order.customer.email}</span>
                      </p>
                      <p className="text-stone-400 mt-0.5">
                        {order.customer.address}, {order.customer.city}, {order.customer.country} ({order.customer.phone})
                      </p>
                      <p className="text-gold-300/80 mt-1">
                        Flacons: {order.items.map((i) => `${i.product.name} (${i.selectedSize} x ${i.quantity})`).join(', ')}
                      </p>
                    </div>

                    <div className="flex flex-col md:items-end gap-2">
                      <span className="font-serif text-lg font-bold text-page-home">${order.total} USD</span>
                      <div className="flex items-center gap-2">
                        <span className="text-stone-400 text-[11px]">Status:</span>
                        <select
                          value={order.orderStatus}
                          onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value as OrderStatus)}
                          className="bg-noir-950 border border-noir-700 text-gold-300 rounded px-2 py-1 text-xs"
                        >
                          <option value="Processing">Processing</option>
                          <option value="Artisan Compounding">Artisan Compounding</option>
                          <option value="Dispatched">Dispatched</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Products */}
        {activeTab === 'products' && (
          <div className="bg-noir-900 border border-noir-800 rounded-2xl overflow-hidden p-6 animate-fadeIn">
            <h3 className="font-serif text-xl font-normal text-page-home mb-4">
              Catalogue Management ({productsList.length} Creations)
            </h3>
            <div className="divide-y divide-noir-800 text-xs">
              {productsList.map((p) => (
                <div key={p.id} className="py-3 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img src={p.images[0]} alt="" className="w-10 h-12 object-contain p-0.5 rounded bg-stone-900" />
                    <div>
                      <p className="font-semibold text-page-home">{p.name}</p>
                      <p className="text-stone-400 text-[11px]">
                        {p.category.toUpperCase()} &bull; {p.concentration} &bull; Stock: {p.stockQuantity}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="font-serif text-sm font-semibold text-gold-400">${p.price} USD</span>
                    <span className="px-2 py-0.5 rounded bg-noir-950 text-stone-300 border border-noir-800 text-[11px]">
                      {p.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Promotions */}
        {activeTab === 'promotions' && (
          <div className="bg-noir-900 border border-noir-800 rounded-2xl p-6 animate-fadeIn space-y-4">
            <h3 className="font-serif text-xl font-normal text-page-home mb-4">
              Active Privilege Codes & Promotions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {SITE_CONFIG.promotions.map((promo) => (
                <div key={promo.code} className="p-4 rounded-xl bg-noir-950 border border-gold-500/20 text-xs space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-gold-400 font-bold text-sm">{promo.code}</span>
                    <span className="px-2 py-0.5 rounded bg-gold-500/10 text-gold-400 text-[10px]">
                      {promo.discountPercentage}% OFF
                    </span>
                  </div>
                  <p className="text-stone-400 text-[11px]">{promo.description}</p>
                  {promo.minSpend && (
                    <p className="text-[10px] text-stone-500">Min spend: ${promo.minSpend}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};
