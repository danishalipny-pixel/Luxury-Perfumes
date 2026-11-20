import type { Product } from './product';

export interface CartItem {
  id: string; // product id + size
  productId: string;
  product: Product;
  selectedSize: string;
  price: number;
  quantity: number;
  maxStock: number;
}

export interface WishlistItem {
  productId: string;
  product: Product;
  addedAt: string;
}

export interface PromoCode {
  code: string;
  discountPercentage: number;
  minSpend?: number;
  description: string;
}
