import type { Product } from '../types/product';

export const PRODUCTS: Product[] = [
  // ==================== MEN'S FRAGRANCES ====================
  {
    id: 'nr-men-01',
    name: 'Nocturne Santal',
    subtitle: 'Extrait de Parfum • Batch N° 07',
    slug: 'nocturne-santal',
    category: 'men',
    gender: 'Men',
    fragranceFamily: 'Woody',
    concentration: 'Extrait de Parfum',
    price: 245,
    originalPrice: 295,
    rating: 4.95,
    reviewCount: 38,
    description: 'An enigmatic twilight composition pairing aged Australian sandalwood with smoked cardamom, dark Tuscan leather, and deep Atlas cedar.',
    story: 'Conceived in the quiet stillness between midnight and dawn, Nocturne Santal envelopes the wearer in an aura of quiet authority. Hand-distilled sandalwood aged in charred oak barrels lends warmth to a cool veil of cracked black pepper and violet leaf.',
    topNotes: ['Guatemalan Cardamom', 'Italian Bergamot', 'Cracked Black Pepper'],
    heartNotes: ['Aged Sandalwood', 'Smoked Violet Leaf', 'Atlas Cedar'],
    baseNotes: ['Tuscan Leather', 'Smoky Labdanum', 'Haitian Vetiver', 'Ambergris'],
    sizes: [
      { size: '50ml', price: 185, originalPrice: 220, inStock: true, stockQuantity: 14 },
      { size: '100ml', price: 245, originalPrice: 295, inStock: true, stockQuantity: 28 },
      { size: '200ml', price: 380, originalPrice: 440, inStock: true, stockQuantity: 6 }
    ],
    images: [
      '/images/products/nocturne-santal-1.jpg',
      '/images/products/nocturne-santal-2.jpg'
    ],
    inStock: true,
    stockQuantity: 48,
    featured: true,
    isNew: false,
    isBestseller: true,
    longevity: '14+ Hours',
    sillage: 'Commanding & Refined',
    season: 'Autumn / Winter / Evening',
    origin: 'Grasse, France'
  },
  {
    id: 'nr-men-02',
    name: 'Cuir Impériale',
    subtitle: 'Extrait de Parfum • Reserve Millésime',
    slug: 'cuir-imperiale',
    category: 'men',
    gender: 'Men',
    fragranceFamily: 'Woody',
    concentration: 'Extrait de Parfum',
    price: 265,
    originalPrice: 310,
    rating: 4.9,
    reviewCount: 29,
    description: 'A sovereign masculine accord of black saffron, smoked birch tar, Russian leather, and ancient golden resins.',
    story: 'Inspired by the saddle leather and ceremonial robes of imperial royalty. Cuir Impériale opens with luminous Kashmiri saffron before descending into an opulent core of cured leather and precious resins.',
    topNotes: ['Kashmiri Saffron', 'Wild Juniper Berries', 'Sun-Dried Thyme'],
    heartNotes: ['Black Violet', 'Russian Leather', 'Smoked Birch Tar'],
    baseNotes: ['Dark Amber', 'Raspberry Cordial', 'Indonesian Patchouli'],
    sizes: [
      { size: '50ml', price: 195, inStock: true, stockQuantity: 12 },
      { size: '100ml', price: 265, originalPrice: 310, inStock: true, stockQuantity: 22 },
      { size: '200ml', price: 410, inStock: true, stockQuantity: 4 }
    ],
    images: [
      '/images/products/cuir-imperiale-1.jpg',
      '/images/products/cuir-imperiale-2.jpg'
    ],
    inStock: true,
    stockQuantity: 38,
    featured: true,
    isNew: false,
    isBestseller: false,
    longevity: '16+ Hours',
    sillage: 'Profound & Enveloping',
    season: 'Autumn / Winter',
    origin: 'Grasse, France'
  },
  {
    id: 'nr-men-03',
    name: 'Vétiver Céleste',
    subtitle: 'Eau de Parfum Intense',
    slug: 'vetiver-celeste',
    category: 'men',
    gender: 'Men',
    fragranceFamily: 'Fresh',
    concentration: 'Eau de Parfum Intense',
    price: 215,
    rating: 4.88,
    reviewCount: 42,
    description: 'A luminous, razor-sharp vetiver elevated by sparkling pink peppercorn, Calabrian bergamot, and mineral flint accord.',
    story: 'The scent of dawn breaking over coastal hillsides. Earth meets ether in a crisp, invigorating embrace of hand-harvested Haitian vetiver washed in cool morning dew.',
    topNotes: ['Calabrian Bergamot', 'Pink Peppercorn', 'Grapefruit Zest'],
    heartNotes: ['Mineral Flint', 'French Geranium', 'Sichuan Pepper'],
    baseNotes: ['Haitian Vetiver Root', 'Cedarwood', 'Benzoin Siam', 'Iso E Super'],
    sizes: [
      { size: '50ml', price: 165, inStock: true, stockQuantity: 20 },
      { size: '100ml', price: 215, inStock: true, stockQuantity: 35 },
      { size: '200ml', price: 330, inStock: true, stockQuantity: 10 }
    ],
    images: [
      '/images/products/vetiver-celeste-1.jpg',
      '/images/products/vetiver-celeste-2.jpg'
    ],
    inStock: true,
    stockQuantity: 65,
    featured: false,
    isNew: true,
    isBestseller: true,
    longevity: '10-12 Hours',
    sillage: 'Crisp & Magnetic',
    season: 'Spring / Summer / Daytime',
    origin: 'Grasse, France'
  },
  {
    id: 'nr-men-04',
    name: 'Ombre Sauvage',
    subtitle: 'Extrait de Parfum Intense',
    slug: 'ombre-sauvage',
    category: 'men',
    gender: 'Men',
    fragranceFamily: 'Spicy',
    concentration: 'Extrait de Parfum',
    price: 275,
    originalPrice: 320,
    rating: 4.92,
    reviewCount: 19,
    description: 'A warm, intoxicating elixir of cured Cuban tobacco leaf, aged Martinique rum, caramelized vanilla bean, and charred French oak.',
    story: 'Evoking the private lounge of a discerning connoisseur. Golden honey drips over dark aromatic leaves, enveloped in smoky woodsmoke and rich cognac undertones.',
    topNotes: ['Aged Martinique Rum', 'Spiced Honey', 'Nutmeg Blossom'],
    heartNotes: ['Cuban Tobacco Leaf', 'Bourbon Cacao', 'Smoky Immortelle'],
    baseNotes: ['Charred French Oak', 'Vanilla Planifolia', 'Guaiacwood', 'Golden Amber'],
    sizes: [
      { size: '50ml', price: 205, inStock: true, stockQuantity: 8 },
      { size: '100ml', price: 275, originalPrice: 320, inStock: true, stockQuantity: 18 },
      { size: '200ml', price: 425, inStock: true, stockQuantity: 5 }
    ],
    images: [
      '/images/products/ombre-sauvage-1.jpg',
      '/images/products/ombre-sauvage-2.jpg'
    ],
    inStock: true,
    stockQuantity: 31,
    featured: false,
    isNew: true,
    isBestseller: false,
    longevity: '16+ Hours',
    sillage: 'Intense & Sensual',
    season: 'Autumn / Winter',
    origin: 'Grasse, France'
  },

  // ==================== WOMEN'S FRAGRANCES ====================
  {
    id: 'nr-women-01',
    name: 'Rose Velours',
    subtitle: 'Extrait de Parfum • Centifolia Harvest',
    slug: 'rose-velours',
    category: 'women',
    gender: 'Women',
    fragranceFamily: 'Floral',
    concentration: 'Extrait de Parfum',
    price: 255,
    originalPrice: 295,
    rating: 4.98,
    reviewCount: 64,
    description: 'An intoxicating velvet bouquet of May Rose Centifolia, sparkling lychee liqueur, crimson peonies, and warm cashmere musk.',
    story: 'Crafted from petals harvested at dawn in Grasse during the fleeting May harvest. Rose Velours is neither innocent nor delicate—it is deep, hypnotic, and drenched in dark velvet luxury.',
    topNotes: ['Pink Lychee Liqueur', 'Mandarin Blossom', 'Pink Pepper'],
    heartNotes: ['Grasse Centifolia Rose', 'Crimson Peony', 'Dewy Violet'],
    baseNotes: ['Cashmeran', 'White Musk', 'Madagascar Vanilla', 'Cedarwood'],
    sizes: [
      { size: '50ml', price: 195, inStock: true, stockQuantity: 24 },
      { size: '100ml', price: 255, originalPrice: 295, inStock: true, stockQuantity: 40 },
      { size: '200ml', price: 395, inStock: true, stockQuantity: 12 }
    ],
    images: [
      '/images/products/rose-velours-1.jpg',
      '/images/products/rose-velours-2.jpg'
    ],
    inStock: true,
    stockQuantity: 76,
    featured: true,
    isNew: false,
    isBestseller: true,
    longevity: '12-14 Hours',
    sillage: 'Enchanting & Radiating',
    season: 'All Seasons / Day to Evening',
    origin: 'Grasse, France'
  },
  {
    id: 'nr-women-02',
    name: 'Soleil Blanc Élixir',
    subtitle: 'Extrait de Parfum Radiant',
    slug: 'soleil-blanc-elixir',
    category: 'women',
    gender: 'Women',
    fragranceFamily: 'Floral',
    concentration: 'Extrait de Parfum',
    price: 260,
    rating: 4.91,
    reviewCount: 47,
    description: 'A sun-drenched golden nectar of Indian tuberose, bitter orange blossom, Comoran ylang-ylang, and warm coconut milk.',
    story: 'Transporting you to private Mediterranean villas surrounded by blooming white florals warmed by the afternoon sun. Creamy, radiant, and endlessly addictive.',
    topNotes: ['Pistachio Verte', 'Cardamom', 'Bergamot Sunburst'],
    heartNotes: ['Indian Tuberose', 'Bitter Orange Blossom', 'Ylang-Ylang'],
    baseNotes: ['Coconut Nectar', 'Bourbon Amber', 'Tonka Bean', 'Warm Benzoin'],
    sizes: [
      { size: '50ml', price: 195, inStock: true, stockQuantity: 16 },
      { size: '100ml', price: 260, inStock: true, stockQuantity: 28 },
      { size: '200ml', price: 405, inStock: true, stockQuantity: 7 }
    ],
    images: [
      '/images/products/soleil-blanc-1.jpg',
      '/images/products/soleil-blanc-2.jpg'
    ],
    inStock: true,
    stockQuantity: 51,
    featured: false,
    isNew: true,
    isBestseller: true,
    longevity: '14+ Hours',
    sillage: 'Radiant & Golden',
    season: 'Spring / Summer',
    origin: 'Grasse, France'
  },
  {
    id: 'nr-women-03',
    name: 'Iris Sublime',
    subtitle: 'Eau de Parfum Intense',
    slug: 'iris-sublime',
    category: 'women',
    gender: 'Women',
    fragranceFamily: 'Floral',
    concentration: 'Eau de Parfum Intense',
    price: 240,
    originalPrice: 280,
    rating: 4.87,
    reviewCount: 26,
    description: 'Powdery Tuscan orris butter draped in white suede, violet leaf, sparkling pear granita, and airy crystalline musk.',
    story: 'Orris root aged for three years yields a butter worth more than gold. Iris Sublime celebrates this rarest of perfumery treasures in an ethereal, powdery whisper of haute couture sophistication.',
    topNotes: ['Anjou Pear Granita', 'Ambrette Seed', 'Italian Lemon'],
    heartNotes: ['Florentine Orris Butter', 'Violet Leaf', 'Muguet'],
    baseNotes: ['White Suede', 'Soft Heliotrope', 'Sandalwood Cream', 'Clean Musk'],
    sizes: [
      { size: '50ml', price: 180, inStock: true, stockQuantity: 15 },
      { size: '100ml', price: 240, originalPrice: 280, inStock: true, stockQuantity: 25 },
      { size: '200ml', price: 370, inStock: true, stockQuantity: 6 }
    ],
    images: [
      '/images/products/iris-sublime-1.jpg',
      '/images/products/iris-sublime-2.jpg'
    ],
    inStock: true,
    stockQuantity: 46,
    featured: false,
    isNew: false,
    isBestseller: false,
    longevity: '11-13 Hours',
    sillage: 'Subtle & Sophisticated',
    season: 'Spring / Autumn',
    origin: 'Grasse, France'
  },
  {
    id: 'nr-women-04',
    name: 'Fleur de Soie',
    subtitle: 'Extrait de Parfum Floral',
    slug: 'fleur-de-soie',
    category: 'women',
    gender: 'Women',
    fragranceFamily: 'Floral',
    concentration: 'Extrait de Parfum',
    price: 250,
    rating: 4.93,
    reviewCount: 33,
    description: 'An intimate silk chiffon drape of Sambac jasmine, gardenia petal, white musk, and sparkling sunlit mandarin.',
    story: 'Like walking into an Orangery at dusk where night-blooming white jasmine unfurls its intoxicating nectar. Soft, romantic, and memorable beyond measure.',
    topNotes: ['Sunlit Mandarin', 'White Peach', 'Neroli Water'],
    heartNotes: ['Sambac Jasmine', 'Velvet Gardenia', 'Orange Flower Absolute'],
    baseNotes: ['Silken White Musk', 'Blonde Woods', 'Crystalline Amber'],
    sizes: [
      { size: '50ml', price: 190, inStock: true, stockQuantity: 18 },
      { size: '100ml', price: 250, inStock: true, stockQuantity: 30 },
      { size: '200ml', price: 385, inStock: true, stockQuantity: 9 }
    ],
    images: [
      '/images/products/fleur-de-soie-1.jpg',
      '/images/products/fleur-de-soie-2.jpg'
    ],
    inStock: true,
    stockQuantity: 57,
    featured: false,
    isNew: false,
    isBestseller: false,
    longevity: '12 Hours',
    sillage: 'Elegantly Luminous',
    season: 'Spring / Summer',
    origin: 'Grasse, France'
  },

  // ==================== UNISEX FRAGRANCES ====================
  {
    id: 'nr-unisex-01',
    name: 'Ambre Éternelle',
    subtitle: 'Extrait de Parfum Sublime',
    slug: 'ambre-eternelle',
    category: 'unisex',
    gender: 'Unisex',
    fragranceFamily: 'Amber',
    concentration: 'Extrait de Parfum',
    price: 270,
    originalPrice: 320,
    rating: 4.97,
    reviewCount: 71,
    description: 'A timeless golden halo of fossilized amber, rich Somalian frankincense, toasted cinnamon bark, and Bourbon vanilla.',
    story: 'Amber in its purest, most transcendent incarnation. Resins collected along ancient spice caravan routes are refined into a warm, molten skin-scent that defies era and gender.',
    topNotes: ['Ceylon Cinnamon', 'Bitter Orange Peel', 'Nutmeg Spice'],
    heartNotes: ['Somalian Frankincense', 'Rockrose Labdanum', 'Myrrh Tears'],
    baseNotes: ['Baltic Amber Resin', 'Bourbon Vanilla Bean', 'Patchouli Noir'],
    sizes: [
      { size: '50ml', price: 200, inStock: true, stockQuantity: 20 },
      { size: '100ml', price: 270, originalPrice: 320, inStock: true, stockQuantity: 35 },
      { size: '200ml', price: 420, inStock: true, stockQuantity: 10 }
    ],
    images: [
      '/images/products/ambre-eternelle-1.jpg',
      '/images/products/ambre-eternelle-2.jpg'
    ],
    inStock: true,
    stockQuantity: 65,
    featured: true,
    isNew: false,
    isBestseller: true,
    longevity: '15+ Hours',
    sillage: 'Enveloping & Warm',
    season: 'Autumn / Winter',
    origin: 'Grasse, France'
  },
  {
    id: 'nr-unisex-02',
    name: 'Thé Noir 29',
    subtitle: 'Eau de Parfum Rare',
    slug: 'the-noir-29',
    category: 'unisex',
    gender: 'Unisex',
    fragranceFamily: 'Woody',
    concentration: 'Eau de Parfum Intense',
    price: 235,
    rating: 4.89,
    reviewCount: 52,
    description: 'A poetic tribute to noble black tea leaves, crushed ripe fig nectar, cedarwood, dry hay, and tobacco smoke.',
    story: 'Freshness and depth oscillate continually. The crisp aromatic bitterness of Ceylon black tea leaves meets the lush sweetness of ripe fig and warm dry woods.',
    topNotes: ['Bergamot Zest', 'Black Fig Nectar', 'Bay Leaf'],
    heartNotes: ['Ceylon Black Tea', 'Smoked Cedar', 'Dry Vetiver'],
    baseNotes: ['Hay Extract', 'Blonde Tobacco', 'White Musk'],
    sizes: [
      { size: '50ml', price: 175, inStock: true, stockQuantity: 18 },
      { size: '100ml', price: 235, inStock: true, stockQuantity: 32 },
      { size: '200ml', price: 360, inStock: true, stockQuantity: 8 }
    ],
    images: [
      '/images/products/the-noir-29-1.jpg',
      '/images/products/the-noir-29-2.jpg'
    ],
    inStock: true,
    stockQuantity: 58,
    featured: false,
    isNew: false,
    isBestseller: true,
    longevity: '11-13 Hours',
    sillage: 'Intriguing & Addictive',
    season: 'All Seasons',
    origin: 'Grasse, France'
  },
  {
    id: 'nr-unisex-03',
    name: "Bois d'Argent",
    subtitle: 'Extrait de Parfum Boisé',
    slug: 'bois-d-argent',
    category: 'unisex',
    gender: 'Unisex',
    fragranceFamily: 'Woody',
    concentration: 'Extrait de Parfum',
    price: 260,
    originalPrice: 300,
    rating: 4.92,
    reviewCount: 39,
    description: 'A masterwork of shimmering silver juniper, Nordic pine resin, frankincense smoke, and whisper-soft white musk.',
    story: 'Cool, luminous, and undeniably modern. Bois d’Argent embodies understated elegance—a fragrance that whispers quietly yet commands the attention of entire rooms.',
    topNotes: ['Silver Juniper Berries', 'Cypress Needle', 'Incense Smoke'],
    heartNotes: ['Florentine Iris', 'Myrrh Resin', 'Atlas Pine'],
    baseNotes: ['White Musk', 'Vanilla Absolu', 'Honeycomb', 'Leather Wood'],
    sizes: [
      { size: '50ml', price: 195, inStock: true, stockQuantity: 14 },
      { size: '100ml', price: 260, originalPrice: 300, inStock: true, stockQuantity: 26 },
      { size: '200ml', price: 400, inStock: true, stockQuantity: 7 }
    ],
    images: [
      '/images/products/bois-d-argent-1.jpg',
      '/images/products/bois-d-argent-2.jpg'
    ],
    inStock: true,
    stockQuantity: 47,
    featured: false,
    isNew: true,
    isBestseller: false,
    longevity: '13-15 Hours',
    sillage: 'Luminous Aura',
    season: 'Autumn / Winter / Spring',
    origin: 'Grasse, France'
  },
  {
    id: 'nr-unisex-04',
    name: "Cyprès d'Or",
    subtitle: 'Eau de Parfum Intense',
    slug: 'cypres-d-or',
    category: 'unisex',
    gender: 'Unisex',
    fragranceFamily: 'Citrus',
    concentration: 'Eau de Parfum Intense',
    price: 220,
    rating: 4.86,
    reviewCount: 31,
    description: 'Sun-warmed Mediterranean cypress trees, crushed sea salt, sparkling yellow mandarin, and driftwood.',
    story: 'Standing upon a limestone cliff over the French Riviera. Golden afternoon sunlight filters through wild cypress boughs as saline sea spray mist cools the air.',
    topNotes: ['Italian Yellow Mandarin', 'Bitter Lemon', 'Sea Salt Spray'],
    heartNotes: ['Mediterranean Cypress', 'Cardamom', 'Clary Sage'],
    baseNotes: ['Sun-Bleached Driftwood', 'Vetiver', 'Ambergris Mineral'],
    sizes: [
      { size: '50ml', price: 170, inStock: true, stockQuantity: 22 },
      { size: '100ml', price: 220, inStock: true, stockQuantity: 36 },
      { size: '200ml', price: 340, inStock: true, stockQuantity: 11 }
    ],
    images: [
      '/images/products/cypres-d-or-1.jpg',
      '/images/products/cypres-d-or-2.jpg'
    ],
    inStock: true,
    stockQuantity: 69,
    featured: false,
    isNew: false,
    isBestseller: false,
    longevity: '9-11 Hours',
    sillage: 'Effortless & Breezy',
    season: 'Spring / Summer',
    origin: 'Grasse, France'
  },

  // ==================== OUD & ORIENTAL ====================
  {
    id: 'nr-oud-01',
    name: 'Oud Royal Majesté',
    subtitle: 'Pure Extrait de Parfum • 25-Year Agarwood',
    slug: 'oud-royal-majeste',
    category: 'oud',
    gender: 'Unisex',
    fragranceFamily: 'Oriental',
    concentration: 'Extrait de Parfum',
    price: 340,
    originalPrice: 400,
    rating: 5.0,
    reviewCount: 48,
    description: 'The pinnacle of oriental perfumery: ethically sourced 25-year aged Cambodian agarwood, Persian saffron, Taif rose, and dark smoked leather.',
    story: ' Agarwood harvested from ancient Aquilaria trees, naturally matured over a quarter century. This is not an ordinary oud; it is a profound meditative ceremony in liquid gold, deep, multifaceted, and regal beyond description.',
    topNotes: ['Persian Saffron', 'Taif Rose Petals', 'Wild Cinnamon Bark'],
    heartNotes: ['25-Year Cambodian Oud', 'Guaiacwood Smoke', 'Smoked Birch'],
    baseNotes: ['Smoky Ambergris', 'Castoreum Accord', 'Royal Leather', 'Sandalwood'],
    sizes: [
      { size: '50ml', price: 260, inStock: true, stockQuantity: 9 },
      { size: '100ml', price: 340, originalPrice: 400, inStock: true, stockQuantity: 16 },
      { size: '200ml', price: 540, inStock: true, stockQuantity: 3 }
    ],
    images: [
      '/images/products/oud-royal-1.jpg',
      '/images/products/oud-royal-2.jpg'
    ],
    inStock: true,
    stockQuantity: 28,
    featured: true,
    isNew: false,
    isBestseller: true,
    longevity: '24+ Hours (Unrivaled)',
    sillage: 'Monumental & Sovereign',
    season: 'Evening / Formal / Winter',
    origin: 'Grasse & Orient'
  },
  {
    id: 'nr-oud-02',
    name: 'Oud Santal Fumé',
    subtitle: 'Extrait de Parfum Oriental',
    slug: 'oud-santal-fume',
    category: 'oud',
    gender: 'Unisex',
    fragranceFamily: 'Oriental',
    concentration: 'Extrait de Parfum',
    price: 310,
    originalPrice: 360,
    rating: 4.96,
    reviewCount: 35,
    description: 'Smoky Assam agarwood distilled with creamy Mysore sandalwood, frankincense, ambergris, and sweet pipe tobacco.',
    story: 'A velvety interplay between the dark, animalic mystery of Assam oud and the soothing, milky embrace of sacred Indian sandalwood.',
    topNotes: ['Incense Smoke', 'Cardamom Pods', 'Sweet Mandarin'],
    heartNotes: ['Smoky Assam Agarwood', 'Mysore Sandalwood', 'Papyrus'],
    baseNotes: ['Golden Ambergris', 'Pipe Tobacco Leaf', 'Vanilla Resin'],
    sizes: [
      { size: '50ml', price: 235, inStock: true, stockQuantity: 11 },
      { size: '100ml', price: 310, originalPrice: 360, inStock: true, stockQuantity: 21 },
      { size: '200ml', price: 490, inStock: true, stockQuantity: 4 }
    ],
    images: [
      '/images/products/oud-santal-1.jpg',
      '/images/products/oud-santal-2.jpg'
    ],
    inStock: true,
    stockQuantity: 36,
    featured: false,
    isNew: false,
    isBestseller: false,
    longevity: '18+ Hours',
    sillage: 'Hypnotic & Lingering',
    season: 'Autumn / Winter',
    origin: 'Grasse & Orient'
  },
  {
    id: 'nr-oud-03',
    name: 'Sultan Oud Élixir',
    subtitle: 'Extrait de Parfum Royal',
    slug: 'sultan-oud-elixir',
    category: 'oud',
    gender: 'Unisex',
    fragranceFamily: 'Oriental',
    concentration: 'Extrait de Parfum',
    price: 325,
    rating: 4.94,
    reviewCount: 29,
    description: 'Black Kalakassi oud soaked in cardamom butter, roasted coffee bean, dark amber resins, and patchouli.',
    story: 'Crafted for the private salons of oriental royalty. Sultan Oud Élixir radiates unbridled richness, where dark roasted coffee and exotic spices illuminate pure aged oud.',
    topNotes: ['Roasted Arabica Coffee', 'Green Cardamom', 'Clove Bud'],
    heartNotes: ['Kalakassi Black Oud', 'Turkish Rose', 'Cistus Labdanum'],
    baseNotes: ['Aged Patchouli', 'Dark Amber', 'Benzoin Siam', 'Civet Accord'],
    sizes: [
      { size: '50ml', price: 245, inStock: true, stockQuantity: 10 },
      { size: '100ml', price: 325, inStock: true, stockQuantity: 18 },
      { size: '200ml', price: 510, inStock: true, stockQuantity: 4 }
    ],
    images: [
      '/images/products/sultan-oud-1.jpg',
      '/images/products/sultan-oud-2.jpg'
    ],
    inStock: true,
    stockQuantity: 32,
    featured: false,
    isNew: true,
    isBestseller: false,
    longevity: '20+ Hours',
    sillage: 'Regal & Magnetic',
    season: 'Evening / Winter',
    origin: 'Grasse & Orient'
  },
  {
    id: 'nr-oud-04',
    name: 'Ambre Oriental',
    subtitle: 'Eau de Parfum Sublime',
    slug: 'ambre-oriental',
    category: 'oud',
    gender: 'Unisex',
    fragranceFamily: 'Amber',
    concentration: 'Eau de Parfum Intense',
    price: 285,
    originalPrice: 330,
    rating: 4.91,
    reviewCount: 41,
    description: 'Golden tears of Siam benzoin, velvety patchouli, smoky oud wood, and bourbon vanilla infusion.',
    story: 'A silk caravan passing through dusk-lit desert dunes. Sweet amber crystals melt into smoldering oud boughs, creating an unforgettable trail of warmth.',
    topNotes: ['Bergamot', 'Bitter Almond', 'Star Anise'],
    heartNotes: ['Smoky Oud Wood', 'Sumatran Patchouli', 'Labdanum'],
    baseNotes: ['Siam Benzoin Tears', 'Bourbon Vanilla Bean', 'Golden Amber'],
    sizes: [
      { size: '50ml', price: 215, inStock: true, stockQuantity: 14 },
      { size: '100ml', price: 285, originalPrice: 330, inStock: true, stockQuantity: 24 },
      { size: '200ml', price: 440, inStock: true, stockQuantity: 6 }
    ],
    images: [
      '/images/products/ambre-oriental-1.jpg',
      '/images/products/ambre-oriental-2.jpg'
    ],
    inStock: true,
    stockQuantity: 44,
    featured: false,
    isNew: false,
    isBestseller: true,
    longevity: '14-16 Hours',
    sillage: 'Sensuous & Luxurious',
    season: 'Autumn / Winter',
    origin: 'Grasse & Orient'
  },

  // ==================== HAUTE LUXURY / SIGNATURE ====================
  {
    id: 'nr-lux-01',
    name: 'NOIRÉLLE Signature Élixir',
    subtitle: 'Haute Parfumerie Flacon • 35% Concentration',
    slug: 'noirelle-signature-elixir',
    category: 'luxury',
    gender: 'Unisex',
    fragranceFamily: 'Woody',
    concentration: 'Extrait de Parfum',
    price: 380,
    originalPrice: 450,
    rating: 5.0,
    reviewCount: 89,
    description: 'The crowning achievement of NOIRÉLLE. A masterwork balancing aged black oud, Bulgarian rose absolute, ambergris, and smoked Haitian vetiver.',
    story: 'The singular embodiment of NOIRÉLLE’s manifesto: "A World Beyond Fragrance." Hand-poured into our octagonal crystal flacon featuring 24-karat gold dipped accents. It is more than a perfume—it is an indelible personal signature.',
    topNotes: ['Kashmiri Saffron', 'Calabrian Bergamot', 'Black Truffle'],
    heartNotes: ['Bulgarian Rose Damascena', 'Black Agarwood', 'Orris Butter'],
    baseNotes: ['White Ambergris', 'Atlas Cedar', 'Smoked Vetiver', 'Bourbon Vanilla'],
    sizes: [
      { size: '50ml', price: 290, inStock: true, stockQuantity: 7 },
      { size: '100ml', price: 380, originalPrice: 450, inStock: true, stockQuantity: 15 },
      { size: '200ml', price: 590, inStock: true, stockQuantity: 2 }
    ],
    images: [
      '/images/products/noirelle-signature-1.jpg',
      '/images/products/noirelle-signature-2.jpg'
    ],
    inStock: true,
    stockQuantity: 24,
    featured: true,
    isNew: false,
    isBestseller: true,
    longevity: '24+ Hours',
    sillage: 'Iconic & Unforgettable',
    season: 'All Seasons / Signature',
    origin: 'Grasse Flagship Studio'
  },
  {
    id: 'nr-lux-02',
    name: 'Cristal de Lune',
    subtitle: 'Haute Parfumerie Flacon • Moonstone Edition',
    slug: 'cristal-de-lune',
    category: 'luxury',
    gender: 'Unisex',
    fragranceFamily: 'Fresh',
    concentration: 'Extrait de Parfum',
    price: 360,
    rating: 4.95,
    reviewCount: 37,
    description: 'A luminous, crystalline fragrance of moonlight: Italian white bergamot, crystalline iris, sheer Ambroxan, and sacred white cedar.',
    story: 'Inspired by the celestial glow of the full moon over nocturnal gardens. Translucent, shimmering, and pure, yet possessing remarkable longevity and presence.',
    topNotes: ['White Bergamot', 'Frosted Aldehydes', 'Green Angelica'],
    heartNotes: ['Crystalline Iris', 'Lily of the Valley', 'Ambrette Dew'],
    baseNotes: ['Pure Ambroxan', 'Sacred White Cedar', 'Cashmeran', 'Clean Musk'],
    sizes: [
      { size: '50ml', price: 275, inStock: true, stockQuantity: 8 },
      { size: '100ml', price: 360, inStock: true, stockQuantity: 14 },
      { size: '200ml', price: 560, inStock: true, stockQuantity: 3 }
    ],
    images: [
      '/images/products/cristal-de-lune-1.jpg',
      '/images/products/cristal-de-lune-2.jpg'
    ],
    inStock: true,
    stockQuantity: 25,
    featured: false,
    isNew: true,
    isBestseller: false,
    longevity: '14+ Hours',
    sillage: 'Luminous Crystalline',
    season: 'Spring / Summer / Evening',
    origin: 'Grasse Flagship Studio'
  },

  // ==================== GIFT SETS & DISCOVERY ====================
  {
    id: 'nr-gift-01',
    name: 'Le Coffret Royal',
    subtitle: 'Master Extrait Presentation Box (3 x 50ml)',
    slug: 'le-coffret-royal',
    category: 'gift-sets',
    gender: 'Unisex',
    fragranceFamily: 'Woody',
    concentration: 'Discovery Coffret',
    price: 480,
    originalPrice: 560,
    rating: 5.0,
    reviewCount: 54,
    description: 'A bespoke presentation chest containing three signature 50ml extraits: NOIRÉLLE Signature Élixir, Oud Royal Majesté, and Nocturne Santal.',
    story: 'Encased in a hand-lacquered black piano-wood coffret lined with ivory silk velvet. Each 50ml flacon is sealed with a custom champagne gold cap.',
    topNotes: ['Curated Trio Top Notes'],
    heartNotes: ['Master Floral & Oud Cores'],
    baseNotes: ['Precious Woods, Resins & Ambergris'],
    sizes: [
      { size: 'Coffret (3 x 50ml)', price: 480, originalPrice: 560, inStock: true, stockQuantity: 12 }
    ],
    images: [
      '/images/products/gift-sets/coffret-royal-1.jpg',
      '/images/products/gift-sets/coffret-royal-2.jpg'
    ],
    inStock: true,
    stockQuantity: 12,
    featured: true,
    isNew: false,
    isBestseller: true,
    longevity: 'Comprehensive Wardrobe',
    sillage: 'Variable Luxury',
    season: 'All Seasons / Gifting',
    origin: 'Paris Atelier'
  },
  {
    id: 'nr-gift-02',
    name: 'La Collection Découverte',
    subtitle: 'Discovery Set (8 x 10ml Travel Atomizers)',
    slug: 'la-collection-decouverte',
    category: 'gift-sets',
    gender: 'Unisex',
    fragranceFamily: 'Woody',
    concentration: 'Discovery Coffret',
    price: 195,
    originalPrice: 230,
    rating: 4.96,
    reviewCount: 112,
    description: 'Explore the complete NOIRÉLLE universe. Eight 10ml atomizers housed in a genuine saffiano leather travel case with a $50 voucher toward any 100ml flacon.',
    story: 'The definitive journey through our olfactory portfolio. Includes Nocturne Santal, Rose Velours, Oud Royal Majesté, Ambre Éternelle, Vétiver Céleste, Thé Noir 29, Cuir Impériale, and Soleil Blanc Élixir.',
    topNotes: ['Complete Olfactory Spectrum'],
    heartNotes: ['Master Blends Across All Families'],
    baseNotes: ['From Fresh Woods to Royal Ouds'],
    sizes: [
      { size: 'Travel Set (8 x 10ml)', price: 195, originalPrice: 230, inStock: true, stockQuantity: 34 }
    ],
    images: [
      '/images/products/gift-sets/collection-decouverte-1.jpg',
      '/images/products/gift-sets/collection-decouverte-2.jpg'
    ],
    inStock: true,
    stockQuantity: 34,
    featured: true,
    isNew: false,
    isBestseller: true,
    longevity: 'Diverse Explorations',
    sillage: 'Customizable Scent Journey',
    season: 'Ideal Introduction & Travel',
    origin: 'Paris Atelier'
  },
  {
    id: 'nr-gift-03',
    name: 'Le Duo Oud Impériale',
    subtitle: 'Exclusive Oud Coffret (2 x 50ml)',
    slug: 'le-duo-oud-imperiale',
    category: 'gift-sets',
    gender: 'Unisex',
    fragranceFamily: 'Oriental',
    concentration: 'Discovery Coffret',
    price: 420,
    originalPrice: 480,
    rating: 4.98,
    reviewCount: 22,
    description: 'A lavish oriental pairing of Oud Royal Majesté and Sultan Oud Élixir in a deep espresso velvet presentation coffret.',
    story: 'Dedicated to true lovers of oriental perfumery. The dual majesty of 25-year Cambodian agarwood and royal Kalakassi black oud in one extraordinary gift box.',
    topNotes: ['Persian Saffron & Roasted Coffee'],
    heartNotes: ['Cambodian & Kalakassi Agarwoods'],
    baseNotes: ['Ambergris, Smoke & Dark Resins'],
    sizes: [
      { size: 'Duo Box (2 x 50ml)', price: 420, originalPrice: 480, inStock: true, stockQuantity: 9 }
    ],
    images: [
      '/images/products/gift-sets/duo-oud-1.jpg',
      '/images/products/gift-sets/duo-oud-2.jpg'
    ],
    inStock: true,
    stockQuantity: 9,
    featured: false,
    isNew: true,
    isBestseller: false,
    longevity: '24+ Hours',
    sillage: 'Regal Immersion',
    season: 'Winter / Grand Evenings',
    origin: 'Paris Atelier'
  },
  {
    id: 'nr-gift-04',
    name: 'Le Trio Femme Élixir',
    subtitle: 'Floral Masterworks Coffret (3 x 50ml)',
    slug: 'le-trio-femme-elixir',
    category: 'gift-sets',
    gender: 'Women',
    fragranceFamily: 'Floral',
    concentration: 'Discovery Coffret',
    price: 440,
    originalPrice: 510,
    rating: 4.97,
    reviewCount: 31,
    description: 'Three celebrated feminine masterpieces: Rose Velours, Soleil Blanc Élixir, and Fleur de Soie in a dusty rose silk presentation box.',
    story: 'The highest expression of French floral art. From dewy Grasse Centifolia rose to sunlit Mediterranean tuberose and night-blooming silk jasmine.',
    topNotes: ['May Rose, Golden Tuberose, Sambac Jasmine'],
    heartNotes: ['Crimson Peony, Orange Blossom, Gardenia'],
    baseNotes: ['Cashmeran, Bourbon Amber, Silken Musk'],
    sizes: [
      { size: 'Trio Box (3 x 50ml)', price: 440, originalPrice: 510, inStock: true, stockQuantity: 15 }
    ],
    images: [
      '/images/products/gift-sets/trio-femme-1.jpg',
      '/images/products/gift-sets/trio-femme-2.jpg'
    ],
    inStock: true,
    stockQuantity: 15,
    featured: false,
    isNew: false,
    isBestseller: false,
    longevity: '14+ Hours',
    sillage: 'Floral Radiance',
    season: 'Spring / Summer / Gifting',
    origin: 'Paris Atelier'
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter(p => p.featured);
}

export function getBestsellers(): Product[] {
  return PRODUCTS.filter(p => p.isBestseller);
}

export function getNewArrivals(): Product[] {
  return PRODUCTS.filter(p => p.isNew);
}

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter(p => p.category === category);
}

export function getRelatedProducts(currentProduct: Product, limit: number = 4): Product[] {
  return PRODUCTS
    .filter(p => p.id !== currentProduct.id && (p.category === currentProduct.category || p.fragranceFamily === currentProduct.fragranceFamily))
    .slice(0, limit);
}
