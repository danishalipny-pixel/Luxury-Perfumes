/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#FAF4E8',
          200: '#F3E6CB',
          300: '#E5C384',
          400: '#D8B26E',
          500: '#C5A059', // Primary Champagne Gold
          600: '#B38E44',
          700: '#8C6E2E',
          800: '#644D1B',
          900: '#3D2E0E',
        },
        noir: {
          950: '#0C0D0E',
          900: '#151515', // Luxury Black
          850: '#17191C', // Midnight Charcoal
          800: '#1F2226',
          700: '#2B2E34',
          600: '#40444B',
          500: '#5D626C',
          400: '#8C929D',
          300: '#B8BDC6',
          200: '#D8DCE3',
          100: '#EEF0F4',
          50: '#F7F8FA',
        },
        // Unique Page Backgrounds
        page: {
          home: '#F5F0E8',         // Champagne Ivory
          shop: '#FAF9F6',         // Pearl White
          men: '#17191C',          // Midnight Charcoal
          women: '#F3E8E5',        // Dusty Rose
          unisex: '#E8EDE5',       // Muted Sage
          oud: '#211812',          // Deep Espresso
          luxury: '#131418',       // Royal Velvet Noir
          gift: '#EDE1CE',         // Champagne Beige
          product: '#F6F1E9',      // Warm Ivory
          search: '#F0F0ED',       // Soft Silver
          wishlist: '#EEECF2',     // Pale Lavender
          cart: '#EAE5DC',         // Warm Stone
          checkout: '#FBFAF7',     // Clean Ivory
          ordersuccess: '#EDF3EA', // Light Sage
          tracking: '#EFEFEF',     // Soft Platinum
          about: '#151515',        // Luxury Black
          contact: '#EDE4D8',      // Muted Sand
          shipping: '#F1F0EC',     // Soft Grey
          returns: '#F2ECE3',      // Light Beige
          privacy: '#F4F3F0',      // Pearl Grey
          terms: '#F7F5F0',        // Warm White
          notfound: '#171B27',     // Deep Midnight
          admin: '#18181B',        // Admin Slate
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Cormorant Garamond', 'serif'],
        sans: ['Inter', 'Manrope', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'luxury-sm': '0 4px 15px -3px rgba(0, 0, 0, 0.05), 0 2px 6px -2px rgba(197, 160, 89, 0.04)',
        'luxury': '0 12px 32px -8px rgba(0, 0, 0, 0.07), 0 4px 12px -2px rgba(197, 160, 89, 0.06)',
        'luxury-hover': '0 25px 45px -10px rgba(0, 0, 0, 0.14), 0 0 25px rgba(216, 178, 110, 0.18)',
        'luxury-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 25px rgba(216, 178, 110, 0.12)',
        'gold-glow': '0 0 25px -3px rgba(197, 160, 89, 0.35)',
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
        widest4: '0.5em',
      }
    },
  },
  plugins: [],
}
