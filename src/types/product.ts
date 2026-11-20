export type FragranceFamily = 
  | 'Woody' 
  | 'Floral' 
  | 'Oriental' 
  | 'Fresh' 
  | 'Amber' 
  | 'Citrus' 
  | 'Spicy' 
  | 'Musk';

export type FragranceCategory = 
  | 'men' 
  | 'women' 
  | 'unisex' 
  | 'oud' 
  | 'luxury' 
  | 'gift-sets';

export type FragranceGender = 'Men' | 'Women' | 'Unisex';

export type FragranceConcentration = 
  | 'Extrait de Parfum' 
  | 'Eau de Parfum Intense' 
  | 'Pure Perfume Oil'
  | 'Discovery Coffret';

export interface ProductSize {
  size: string; // e.g. "50ml", "100ml", "200ml", "Discovery Box (8x10ml)"
  price: number;
  originalPrice?: number;
  inStock: boolean;
  stockQuantity: number;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  slug: string;
  category: FragranceCategory;
  gender: FragranceGender;
  fragranceFamily: FragranceFamily;
  concentration: FragranceConcentration;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  story: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  sizes: ProductSize[];
  images: string[];
  inStock: boolean;
  stockQuantity: number;
  featured: boolean;
  isNew: boolean;
  isBestseller: boolean;
  longevity: string;
  sillage: string;
  season: string;
  origin: string; // e.g. "Grasse, France"
}

export type SortOption = 
  | 'featured' 
  | 'newest' 
  | 'price-asc' 
  | 'price-desc' 
  | 'bestselling';

export interface FilterState {
  category?: string;
  gender?: string;
  family?: string;
  minPrice?: number;
  maxPrice?: number;
  inStockOnly?: boolean;
  searchQuery?: string;
  sortBy?: SortOption;
}
