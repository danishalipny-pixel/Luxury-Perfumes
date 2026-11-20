import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AnnouncementBar } from './AnnouncementBar';
import { WhatsAppFloat } from '../common/WhatsAppFloat';
import { CartDrawer } from '../cart/CartDrawer';
import { useCart } from '../../context/CartContext';
import { Check, X } from 'lucide-react';

interface PageLayoutProps {
  children: React.ReactNode;
  bgHex?: string; // Specific background color hex for this page
  isDark?: boolean; // Dark mode (midnight, black, espresso) vs light (ivory, rose, pearl)
  title?: string;
  description?: string;
  className?: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  bgHex = '#F5F0E8', // Default Homepage Champagne Ivory
  isDark = false,
  title,
  description,
  className = '',
}) => {
  const { notification, dismissNotification } = useCart();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Update document title and meta description
  useEffect(() => {
    const defaultTitle = 'NOIRÉLLE | A World Beyond Fragrance — Haute Parfumerie';
    document.title = title ? `${title} | NOIRÉLLE` : defaultTitle;

    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-500 ${
        isDark ? 'text-noir-100' : 'text-noir-900'
      } ${className}`}
      style={{ backgroundColor: bgHex }}
    >
      <AnnouncementBar />
      <Navbar isDark={isDark} />

      {/* Main Page Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Cart Drawer */}
      <CartDrawer />

      {/* Floating Concierge WhatsApp Button */}
      <WhatsAppFloat />

      {/* Luxury Notification Toast */}
      {notification && (
        <div className="fixed top-24 right-6 z-50 max-w-sm rounded-xl bg-noir-950/95 border border-gold-500/40 p-4 shadow-luxury-dark text-page-home flex items-start gap-3 animate-fadeIn">
          <div className="p-1 rounded-full bg-gold-500/20 text-gold-400 flex-shrink-0 mt-0.5">
            <Check size={14} />
          </div>
          <p className="text-xs leading-relaxed flex-1 text-noir-200">{notification}</p>
          <button
            onClick={dismissNotification}
            className="text-noir-500 hover:text-page-home p-0.5"
            aria-label="Dismiss notification"
          >
            <X size={14} />
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};
