export const SITE_CONFIG = {
  name: 'NOIRÉLLE',
  tagline: 'A World Beyond Fragrance.',
  description: 'An exclusive international luxury perfume house crafting transcendent olfactory masterworks. Extrait de parfum, rare oud, and fine artisan fragrances.',
  url: 'https://noirelle-parfums.com',
  currency: {
    symbol: '$',
    code: 'USD',
  },
  // WhatsApp Configuration (configurable via VITE_WHATSAPP_NUMBER or luxury concierge placeholder)
  whatsapp: {
    number: import.meta.env.VITE_WHATSAPP_NUMBER || '+1234567890',
    displayNumber: import.meta.env.VITE_WHATSAPP_DISPLAY || '+1 (800) NOIRÉLLE',
    conciergeName: 'NOIRÉLLE Private Concierge',
    defaultMessage: 'Hello NOIRÉLLE Concierge, I would like to inquire about your luxury fragrance collection.',
  },
  // Concierge & Boutique Contact
  contact: {
    conciergeEmail: 'concierge@noirelle-parfums.com',
    pressEmail: 'press@noirelle-parfums.com',
    boutiqueHours: 'Monday – Saturday: 10:00 AM – 8:00 PM CET',
    boutiqueAddress: '18 Place Vendôme, 75001 Paris, France',
    secondaryBoutique: '740 Madison Avenue, New York, NY 10065',
    flagshipStudio: 'Chemin des Parfums, 06130 Grasse, France',
  },
  // Shipping Configuration
  shipping: {
    freeShippingThreshold: 150, // Orders over $150 qualify for complimentary delivery
    standardShippingCost: 15,
    expressShippingCost: 35,
    whiteGloveCourierCost: 75,
  },
  // Demo Mode Notice
  demoMode: {
    isDemo: true,
    notice: 'Demonstration Luxury Experience — Orders are simulated for portfolio and evaluation purposes.',
  },
  // Social links
  social: {
    instagram: 'https://instagram.com/noirelle.parfums',
    facebook: 'https://facebook.com/noirelle.parfums',
    pinterest: 'https://pinterest.com/noirelleparfums',
    linkedin: 'https://linkedin.com/company/noirelle-parfums',
  },
  // Active promo codes
  promotions: [
    {
      code: 'NOIRELLE10',
      discountPercentage: 10,
      description: '10% off your introductory luxury acquisition',
    },
    {
      code: 'HAUTE20',
      discountPercentage: 20,
      minSpend: 250,
      description: '20% complimentary VIP concession on orders exceeding $250',
    },
    {
      code: 'ROYALTY15',
      discountPercentage: 15,
      description: '15% courtesy savings for private clientele',
    }
  ]
};
