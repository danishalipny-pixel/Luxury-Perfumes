import type { CartItem } from './cart';

export type PaymentMethod = 'stripe' | 'cod' | 'bank_transfer';
export type OrderStatus = 'Processing' | 'Artisan Compounding' | 'Dispatched' | 'Delivered' | 'Cancelled';

export interface CustomerDetails {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  apartment?: string;
  city: string;
  country: string;
  postalCode: string;
  orderNotes?: string;
}

export interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDelivery: string;
}

export interface Order {
  id: string; // e.g. "NR-2026-8491"
  createdAt: string;
  customer: CustomerDetails;
  items: CartItem[];
  subtotal: number;
  discount: number;
  promoCodeApplied?: string;
  shipping: number;
  shippingMethod: string;
  total: number;
  paymentMethod: PaymentMethod;
  paymentStatus: 'Paid (Demo)' | 'Pending Verification' | 'Cash on Delivery';
  orderStatus: OrderStatus;
  trackingNumber: string;
}
