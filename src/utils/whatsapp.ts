import { SITE_CONFIG } from '../config/site';
import type { Product } from '../types/product';
import type { CartItem } from '../types/cart';

/**
 * Strips formatting to provide an international dialable string for wa.me links
 */
export function formatWhatsAppNumber(phone: string): string {
  return phone.replace(/[^0-9]/g, '');
}

/**
 * Builds a direct inquiry link for a specific perfume flacon
 */
export function getProductWhatsAppUrl(
  product: Product,
  selectedSize: string,
  quantity: number = 1
): string {
  const number = formatWhatsAppNumber(SITE_CONFIG.whatsapp.number);
  const sizeObj = product.sizes.find((s) => s.size === selectedSize) || product.sizes[0];
  const price = sizeObj ? sizeObj.price * quantity : product.price * quantity;

  const text = `Greetings NOIRÉLLE Private Concierge,

I would like to make an inquiry regarding the following fragrance:
• Flacon: ${product.name} (${product.concentration})
• Selected Volume: ${selectedSize}
• Quantity: ${quantity}
• Total Indication: $${price} USD
• Category: ${product.category.toUpperCase()}

Please advise on private acquisition details and complimentary white-glove presentation.
(Note: Inquiry only, does not constitute a paid booking)`;

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/**
 * Builds an inquiry link for the current shopping bag / checkout
 */
export function getCheckoutWhatsAppUrl(
  items: CartItem[],
  subtotal: number,
  shipping: number,
  discount: number,
  total: number,
  customerName?: string
): string {
  const number = formatWhatsAppNumber(SITE_CONFIG.whatsapp.number);

  const itemsList = items
    .map(
      (item, idx) =>
        `${idx + 1}. ${item.product.name} (${item.selectedSize}) x ${item.quantity} — $${item.price * item.quantity}`
    )
    .join('\n');

  const text = `Greetings NOIRÉLLE Private Concierge,

${customerName ? `Client: ${customerName}\n` : ''}I would like to inquire about my curated fragrance order:

${itemsList}

Subtotal: $${subtotal}
${discount > 0 ? `Privilege Concession: -$${discount}\n` : ''}White Glove Shipping: ${shipping === 0 ? 'Complimentary' : `$${shipping}`}
Estimated Total: $${total} USD

Kindly confirm availability, bespoke engraving options, and delivery timeline.
(Notice: Sending this inquiry does not complete payment; our concierge will assist you personally).`;

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/**
 * General concierge inquiry link
 */
export function getGeneralWhatsAppUrl(): string {
  const number = formatWhatsAppNumber(SITE_CONFIG.whatsapp.number);
  const text = `Greetings NOIRÉLLE Private Concierge,

I am visiting your Haute Parfumerie and would appreciate bespoke fragrance advice and guidance on selecting my signature scent.`;

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
