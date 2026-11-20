import React, { useState, useEffect } from 'react';
import { Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ANNOUNCEMENTS = [
  {
    text: 'A World Beyond Fragrance — Complimentary Insured White Glove Delivery on Orders Over $150',
    link: '/shop',
    linkText: 'Explore Collection',
  },
  {
    text: 'Introductory Privilege: Use code NOIRELLE10 for 10% savings on your first acquisition',
    link: '/collections/gift-sets',
    linkText: 'Discover Sets',
  },
  {
    text: 'Private Fragrance Consultation & Bespoke Inquiries available via WhatsApp Concierge',
    link: '/contact',
    linkText: 'Speak with Specialist',
  },
];

export const AnnouncementBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = ANNOUNCEMENTS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
  };

  return (
    <div className="relative bg-noir-950 text-gold-300 border-b border-gold-500/15 py-2 px-4 select-none z-30 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
        <button
          onClick={handlePrev}
          className="text-noir-500 hover:text-gold-400 p-1 transition-colors hidden sm:block"
          aria-label="Previous announcement"
        >
          <ChevronLeft size={14} />
        </button>

        <div className="flex-1 text-center flex items-center justify-center gap-2 overflow-hidden px-2">
          <Sparkles size={12} className="text-gold-400 flex-shrink-0 animate-pulse hidden xs:inline" />
          <span className="font-sans font-light tracking-wider truncate text-noir-200">
            {current.text}
          </span>
          {current.link && (
            <Link
              to={current.link}
              className="text-gold-400 hover:text-gold-200 underline underline-offset-2 flex-shrink-0 font-medium ml-1"
            >
              {current.linkText}
            </Link>
          )}
        </div>

        <button
          onClick={handleNext}
          className="text-noir-500 hover:text-gold-400 p-1 transition-colors hidden sm:block"
          aria-label="Next announcement"
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};
