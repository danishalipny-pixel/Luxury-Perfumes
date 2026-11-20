import React from 'react';

export const LuxuryLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-noir-950 flex flex-col items-center justify-center p-4 selection:bg-gold-500/20">
      <div className="relative flex items-center justify-center">
        {/* Outer pulsating gold flacon ring */}
        <div className="w-16 h-16 rounded-full border border-gold-500/30 animate-ping absolute opacity-50" />
        
        {/* Center luxury emblem */}
        <svg viewBox="0 0 36 44" className="w-10 h-12 text-gold-400 animate-pulse duration-1000" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 18,2 L 34,10 L 34,34 L 18,42 L 2,34 L 2,10 Z" stroke="#E5C384" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M 18,6 L 29,12 L 29,32 L 18,38 L 7,32 L 7,12 Z" stroke="#C5A059" strokeWidth="0.8" strokeOpacity="0.85" />
          <line x1="18" y1="0" x2="18" y2="6" stroke="#E5C384" strokeWidth="2" strokeLinecap="round" />
          <circle cx="18" cy="0" r="1.8" fill="#E5C384" />
        </svg>
      </div>

      <p className="mt-6 font-serif text-gold-300 text-sm tracking-widest3 uppercase">
        NOIRÉLLE
      </p>
      <p className="mt-1 text-[9px] uppercase tracking-widest text-noir-400 font-sans">
        A World Beyond Fragrance
      </p>
    </div>
  );
};
