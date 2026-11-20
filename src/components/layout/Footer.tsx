import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Truck, Award, Sparkles } from 'lucide-react';
import { Logo } from '../common/Logo';
import { SITE_CONFIG } from '../../config/site';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'duplicate' | 'invalid'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes('@') || !trimmed.includes('.')) {
      setStatus('invalid');
      return;
    }

    try {
      const stored = localStorage.getItem('noirelle_newsletter_subs');
      const list: string[] = stored ? JSON.parse(stored) : [];
      if (list.includes(trimmed.toLowerCase())) {
        setStatus('duplicate');
        return;
      }
      list.push(trimmed.toLowerCase());
      localStorage.setItem('noirelle_newsletter_subs', JSON.stringify(list));
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('success');
    }
  };

  return (
    <footer className="bg-noir-950 text-noir-200 border-t border-gold-500/20 pt-16 pb-12 selection:bg-gold-500/30">
      {/* Luxury Value Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 border-b border-noir-800/80">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-noir-900 border border-gold-500/20 text-gold-400">
              <Sparkles size={20} />
            </div>
            <div>
              <h4 className="font-serif text-sm font-semibold text-page-home tracking-wider uppercase">
                Haute Parfumerie
              </h4>
              <p className="text-xs text-noir-400 mt-1 leading-relaxed">
                Compounded with 28%–35% pure botanical oils in Grasse, France.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-noir-900 border border-gold-500/20 text-gold-400">
              <Truck size={20} />
            </div>
            <div>
              <h4 className="font-serif text-sm font-semibold text-page-home tracking-wider uppercase">
                White Glove Delivery
              </h4>
              <p className="text-xs text-noir-400 mt-1 leading-relaxed">
                Complimentary insured delivery on all acquisitions exceeding $150.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-noir-900 border border-gold-500/20 text-gold-400">
              <Award size={20} />
            </div>
            <div>
              <h4 className="font-serif text-sm font-semibold text-page-home tracking-wider uppercase">
                Rare Masterworks
              </h4>
              <p className="text-xs text-noir-400 mt-1 leading-relaxed">
                Limited reserve harvests and 25-year ethically aged agarwoods.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-noir-900 border border-gold-500/20 text-gold-400">
              <Shield size={20} />
            </div>
            <div>
              <h4 className="font-serif text-sm font-semibold text-page-home tracking-wider uppercase">
                Private Concierge
              </h4>
              <p className="text-xs text-noir-400 mt-1 leading-relaxed">
                Bespoke guidance and personal scent styling via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Manifesto */}
          <div className="lg:col-span-2 space-y-5">
            <Logo theme="dark" size="md" />
            <p className="text-xs text-noir-400 leading-relaxed max-w-sm">
              NOIRÉLLE is an international Haute Parfumerie dedicated to the creation of transcendent scents. Sourced from the world's rarest harvests and bottled in hand-finished crystal flacons.
            </p>

            {/* Newsletter Subscription Form */}
            <div className="pt-2">
              <h5 className="font-serif text-xs uppercase tracking-widest text-gold-400 mb-2 font-medium">
                The NOIRÉLLE Society
              </h5>
              <p className="text-[11px] text-noir-400 mb-3">
                Receive private invitations to limited reserve millésimes and private salon releases.
              </p>
              <form onSubmit={handleSubscribe} className="flex max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== 'idle') setStatus('idle');
                  }}
                  placeholder="Enter your email address..."
                  className="flex-1 bg-noir-900 border border-noir-700 rounded-l-lg px-4 py-2.5 text-xs text-page-home placeholder-noir-500 focus:outline-none focus:border-gold-500"
                />
                <button
                  type="submit"
                  className="bg-gold-500 hover:bg-gold-400 text-noir-950 px-5 rounded-r-lg text-xs font-medium tracking-wider uppercase transition-colors flex items-center justify-center"
                >
                  <ArrowRight size={15} />
                </button>
              </form>

              {status === 'success' && (
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs mt-2">
                  <CheckCircle2 size={13} />
                  <span>Welcome to the private registry. Your invitation has been recorded.</span>
                </div>
              )}
              {status === 'duplicate' && (
                <p className="text-gold-400 text-xs mt-2">
                  This address is already enrolled in the NOIRÉLLE Society.
                </p>
              )}
              {status === 'invalid' && (
                <p className="text-rose-400 text-xs mt-2">
                  Please provide a valid email address.
                </p>
              )}
            </div>
          </div>

          {/* Olfactory Collections */}
          <div>
            <h5 className="font-serif text-xs uppercase tracking-widest text-gold-400 font-semibold mb-4">
              Fragrance Portfolios
            </h5>
            <ul className="space-y-2.5 text-xs text-noir-300">
              <li>
                <Link to="/shop" className="hover:text-gold-400 transition-colors">
                  All Masterworks
                </Link>
              </li>
              <li>
                <Link to="/collections/men" className="hover:text-gold-400 transition-colors">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link to="/collections/women" className="hover:text-gold-400 transition-colors">
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link to="/collections/unisex" className="hover:text-gold-400 transition-colors">
                  Unisex Fragrances
                </Link>
              </li>
              <li>
                <Link to="/collections/oud" className="hover:text-gold-400 transition-colors">
                  Oud & Oriental
                </Link>
              </li>
              <li>
                <Link to="/collections/luxury" className="hover:text-gold-400 transition-colors">
                  Haute Parfumerie Flacons
                </Link>
              </li>
              <li>
                <Link to="/collections/gift-sets" className="hover:text-gold-400 transition-colors">
                  Discovery & Coffrets
                </Link>
              </li>
            </ul>
          </div>

          {/* Concierge & Client Services */}
          <div>
            <h5 className="font-serif text-xs uppercase tracking-widest text-gold-400 font-semibold mb-4">
              Client Concierge
            </h5>
            <ul className="space-y-2.5 text-xs text-noir-300">
              <li>
                <Link to="/contact" className="hover:text-gold-400 transition-colors">
                  Private Consultation
                </Link>
              </li>
              <li>
                <Link to="/order-tracking" className="hover:text-gold-400 transition-colors">
                  Track Your Flacon
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-gold-400 transition-colors">
                  Client Wishlist
                </Link>
              </li>
              <li>
                <Link to="/policies/shipping" className="hover:text-gold-400 transition-colors">
                  Complimentary Shipping
                </Link>
              </li>
              <li>
                <Link to="/policies/returns" className="hover:text-gold-400 transition-colors">
                  Returns & Guarantee
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-gold-400 transition-colors text-noir-500">
                  Maison Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Maison Details */}
          <div>
            <h5 className="font-serif text-xs uppercase tracking-widest text-gold-400 font-semibold mb-4">
              The Maison
            </h5>
            <ul className="space-y-2.5 text-xs text-noir-300">
              <li>
                <Link to="/about" className="hover:text-gold-400 transition-colors">
                  About NOIRÉLLE
                </Link>
              </li>
              <li>
                <Link to="/policies/privacy" className="hover:text-gold-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/policies/terms" className="hover:text-gold-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-noir-850 text-xs text-noir-400 space-y-1">
              <p className="text-noir-300 font-serif">Flagship Salons:</p>
              <p className="text-[11px]">{SITE_CONFIG.contact.boutiqueAddress}</p>
              <p className="text-[11px]">{SITE_CONFIG.contact.secondaryBoutique}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-noir-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-noir-500 gap-4">
        <p>
          &copy; 2026 NOIRÉLLE Haute Parfumerie. All rights reserved. A World Beyond Fragrance.
        </p>

        <div className="flex items-center space-x-6">
          <a
            href={SITE_CONFIG.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-400 transition-colors"
          >
            Instagram
          </a>
          <a
            href={SITE_CONFIG.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-400 transition-colors"
          >
            Facebook
          </a>
          <a
            href={SITE_CONFIG.social.pinterest}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-400 transition-colors"
          >
            Pinterest
          </a>
          <a
            href={SITE_CONFIG.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
