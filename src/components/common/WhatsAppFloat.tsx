import React, { useState } from 'react';
import { MessageCircle, X, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';
import { getGeneralWhatsAppUrl } from '../../utils/whatsapp';

export const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Concierge Popover */}
      {isOpen && (
        <div className="mb-3 w-80 rounded-2xl bg-noir-900 border border-gold-500/30 p-5 shadow-luxury-dark text-page-home transition-all animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-noir-800">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-gold-400 font-medium">Boutique Concierge</p>
                <p className="text-sm font-serif font-semibold text-page-home">{SITE_CONFIG.whatsapp.conciergeName}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-noir-400 hover:text-page-home transition-colors"
              aria-label="Close Concierge"
            >
              <X size={16} />
            </button>
          </div>

          <p className="text-xs text-noir-300 mt-3 leading-relaxed">
            Connect directly with our fragrance specialists in Paris for private consultations, formula guidance, or bespoke gift curation.
          </p>

          <div className="mt-3 bg-noir-950/80 rounded-lg p-2.5 border border-noir-800 text-[11px] text-noir-400">
            <span className="text-gold-400 font-medium">Notice:</span> WhatsApp communication is an inquiry channel and does not constitute a paid or automatic transaction.
          </div>

          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-gold-500 hover:bg-gold-400 text-noir-950 font-medium text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-gold-glow"
          >
            <span>Start WhatsApp Inquiry</span>
            <ExternalLink size={13} />
          </a>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center h-13 w-13 p-3.5 rounded-full bg-noir-900 border border-gold-500/40 text-gold-400 shadow-luxury hover:shadow-gold-glow hover:border-gold-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500"
        aria-label="Open Private Concierge on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-noir-900"></span>
        </span>
        <MessageCircle size={22} className="group-hover:scale-110 transition-transform duration-300 text-gold-400" />
      </button>
    </div>
  );
};
