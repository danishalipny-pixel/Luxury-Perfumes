export interface CollectionMeta {
  id: string;
  name: string;
  headline: string;
  tagline: string;
  description: string;
  path: string;
  image: string;
  bgHex: string;
  isDark: boolean;
  accentColor: string;
  productCount: number;
}

export const COLLECTIONS: CollectionMeta[] = [
  {
    id: 'men',
    name: "Men's Fragrances",
    headline: "Commanding. Uncompromising. Timeless.",
    tagline: "Bold woody accords, smoked leather, and sovereign spices.",
    description: "Architected for the discerning gentleman who moves with quiet authority. Distinctive distillations of smoky Haitian vetiver, dark Cuban tobacco, aged sandalwood, and Tuscan leather.",
    path: '/collections/men',
    image: '/images/collections/men-collection.jpg',
    bgHex: '#17191C', // Midnight Charcoal
    isDark: true,
    accentColor: '#D8B26E',
    productCount: 4
  },
  {
    id: 'women',
    name: "Women's Fragrances",
    headline: "Transcendent Grace & Floral Opulence.",
    tagline: "Rare Grasse May Rose, golden tuberose, and velvet musk.",
    description: "An intoxicating voyage into haute French perfumery. Luminous blooms harvested at dawn, wrapped in creamy Madagascar vanilla and fine cashmere amber.",
    path: '/collections/women',
    image: '/images/collections/women-collection.jpg',
    bgHex: '#F3E8E5', // Dusty Rose
    isDark: false,
    accentColor: '#B38E44',
    productCount: 4
  },
  {
    id: 'unisex',
    name: "Unisex Fragrances",
    headline: "Transcending Boundaries & Conventions.",
    tagline: "Golden amber resins, black tea infusion, and mineral woods.",
    description: "Fluid, contemporary olfactory compositions that harmonize with the unique chemistry of every wearer. Free from gendered conventions, rich in timeless allure.",
    path: '/collections/unisex',
    image: '/images/collections/unisex-collection.jpg',
    bgHex: '#E8EDE5', // Muted Sage
    isDark: false,
    accentColor: '#8C6E2E',
    productCount: 4
  },
  {
    id: 'oud',
    name: "Oud & Oriental",
    headline: "The Mystical Depths of Liquid Gold.",
    tagline: "25-year aged Cambodian agarwood, Taif rose, and ambergris.",
    description: "A ceremonial tribute to the ancient royal courts of the Orient. Incomparable complexity, extraordinary longevity, and a hypnotic sillage that commands reverent silence.",
    path: '/collections/oud',
    image: '/images/collections/oud-collection.jpg',
    bgHex: '#211812', // Deep Espresso
    isDark: true,
    accentColor: '#E5C384',
    productCount: 4
  },
  {
    id: 'luxury',
    name: "Luxury Collections",
    headline: "Haute Parfumerie & Pure Extraits.",
    tagline: "35% perfume oil concentrations in 24k gold accented flacons.",
    description: "The pinnacle of the perfumer’s art. Hand-numbered crystal flacons containing rare botanical extraits compounded in ultra-limited batches at our flagship Grasse atelier.",
    path: '/collections/luxury',
    image: '/images/collections/luxury-collection.jpg',
    bgHex: '#131418', // Royal Velvet Noir
    isDark: true,
    accentColor: '#D8B26E',
    productCount: 2
  },
  {
    id: 'gift-sets',
    name: "Luxury Gift Sets",
    headline: "The Art of Exceptional Gifting.",
    tagline: "Lacquered wood coffrets, travel atomizers, and discovery sets.",
    description: "Curated selections of our finest extraits housed in handcrafted presentation boxes lined with silk velvet. The ultimate gesture of appreciation for connoisseurs of fine fragrance.",
    path: '/collections/gift-sets',
    image: '/images/collections/gift-collection.jpg',
    bgHex: '#EDE1CE', // Champagne Beige
    isDark: false,
    accentColor: '#8C6E2E',
    productCount: 4
  }
];

export const FRAGRANCE_FAMILIES = [
  { name: 'Woody', image: '/images/categories/woody.jpg', description: 'Cedar, Sandalwood, Birch & Earth' },
  { name: 'Floral', image: '/images/categories/floral.jpg', description: 'May Rose, Jasmine, Tuberose & Orris' },
  { name: 'Oriental', image: '/images/categories/oriental.jpg', description: 'Cambodian Oud, Incense & Spices' },
  { name: 'Fresh', image: '/images/categories/fresh.jpg', description: 'Mineral Flint, Dewy Vetiver & Angelica' },
  { name: 'Amber', image: '/images/categories/amber.jpg', description: 'Benzoin, Golden Labdanum & Vanilla' },
  { name: 'Citrus', image: '/images/categories/citrus.jpg', description: 'Calabrian Bergamot & Sunlit Mandarin' },
  { name: 'Spicy', image: '/images/categories/spicy.jpg', description: 'Kashmiri Saffron, Cardamom & Clove' },
  { name: 'Musk', image: '/images/categories/musk.jpg', description: 'White Suede, Ambrette & Cashmeran' },
];
