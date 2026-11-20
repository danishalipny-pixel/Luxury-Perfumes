import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  theme?: 'dark' | 'light' | 'gold';
  variant?: 'full' | 'emblem' | 'compact';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  theme = 'light',
  variant = 'full',
  className = '',
  size = 'md',
}) => {
  // Determine colors based on page theme:
  // on dark backgrounds (theme='dark'), use ivory and champagne gold
  // on light backgrounds (theme='light'), use charcoal and champagne gold
  // theme='gold', use pure champagne gold
  const isDark = theme === 'dark';
  const textColor = isDark ? '#F5F0E8' : theme === 'gold' ? '#C5A059' : '#17191C';
  const emblemColor = isDark ? '#E5C384' : '#C5A059';
  const accentColor = isDark ? '#C5A059' : '#8C6E2E';

  const sizeClasses = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-14',
    xl: 'h-20',
  }[size];

  if (variant === 'emblem') {
    return (
      <Link to="/" className={`inline-flex items-center justify-center ${className}`} aria-label="NOIRÉLLE Home">
        <svg viewBox="0 0 36 44" className={`${sizeClasses} w-auto`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 18,2 L 34,10 L 34,34 L 18,42 L 2,34 L 2,10 Z" stroke={emblemColor} strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M 18,6 L 29,12 L 29,32 L 18,38 L 7,32 L 7,12 Z" stroke={accentColor} strokeWidth="0.8" strokeOpacity="0.85" />
          <line x1="18" y1="0" x2="18" y2="6" stroke={emblemColor} strokeWidth="2" strokeLinecap="round" />
          <circle cx="18" cy="0" r="1.8" fill={emblemColor} />
          <path d="M 18,14 C 20.5,17 22.5,20.5 22.5,23.5 C 22.5,26 20.5,28 18,28 C 15.5,28 13.5,26 13.5,23.5 C 13.5,20.5 15.5,17 18,14 Z" fill={accentColor} />
        </svg>
      </Link>
    );
  }

  return (
    <Link to="/" className={`inline-flex items-center gap-3.5 group select-none ${className}`} aria-label="NOIRÉLLE - A World Beyond Fragrance">
      {/* Refined Luxury Flacon Emblem */}
      <svg viewBox="0 0 36 44" className={`${sizeClasses} w-auto transition-transform duration-500 group-hover:scale-105`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 18,2 L 34,10 L 34,34 L 18,42 L 2,34 L 2,10 Z" stroke={emblemColor} strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M 18,6 L 29,12 L 29,32 L 18,38 L 7,32 L 7,12 Z" stroke={accentColor} strokeWidth="0.75" strokeOpacity="0.85" />
        <line x1="18" y1="0" x2="18" y2="6" stroke={emblemColor} strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="18" cy="0" r="1.5" fill={emblemColor} />
        <path d="M 18,14 C 20.2,17 22,20.2 22,23 C 22,25.2 20.2,27 18,27 C 15.8,27 14,25.2 14,23 C 14,20.2 15.8,17 18,14 Z" fill={accentColor} />
      </svg>

      {/* Typography: NOIRÉLLE Wordmark */}
      <div className="flex flex-col">
        <span
          className="font-serif tracking-[0.22em] font-semibold leading-none text-xl sm:text-2xl transition-colors duration-300"
          style={{ color: textColor }}
        >
          NOIRÉLLE
        </span>
        {variant === 'full' && (
          <span
            className="text-[7px] sm:text-[8px] tracking-[0.38em] uppercase font-sans font-medium mt-1"
            style={{ color: accentColor }}
          >
            A World Beyond Fragrance
          </span>
        )}
      </div>
    </Link>
  );
};
