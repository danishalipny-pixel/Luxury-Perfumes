export interface Testimonial {
  id: string;
  quote: string;
  client: string;
  city: string;
  perfume: string;
  rating: number;
  label: string; // "Demonstration Client Impression"
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-01',
    quote: "Nocturne Santal is an absolute revelation. The smoky cardamom and sandalwood evolve into a rich, intoxicating leather sillage that lasted from early morning through an evening gala. It has firmly become my signature.",
    client: 'Alexander V.',
    city: 'Geneva & London',
    perfume: 'Nocturne Santal — Extrait de Parfum',
    rating: 5,
    label: 'Demonstration Client Impression'
  },
  {
    id: 'test-02',
    quote: "Rose Velours has completely redefined floral fragrance for me. It is dark, velvety, and deeply sophisticated without a trace of sweetness. The flacon itself is an architectural work of art on my vanity.",
    client: 'Éléonore de M.',
    city: 'Paris',
    perfume: 'Rose Velours — Extrait de Parfum',
    rating: 5,
    label: 'Demonstration Client Impression'
  },
  {
    id: 'test-03',
    quote: "As a collector of rare agarwood oils for over fifteen years, Oud Royal Majesté stunned me. The Cambodian oud is pure, majestic, and completely free from harsh synthetic sharpness. Truly haute parfumerie.",
    client: 'Tariq A.',
    city: 'Dubai',
    perfume: 'Oud Royal Majesté — Pure Extrait',
    rating: 5,
    label: 'Demonstration Client Impression'
  },
  {
    id: 'test-04',
    quote: "The Discovery Coffret is the finest introduction to any luxury house I have experienced. The saffron leather case, the heavy brass atomizers, and the voucher toward a 100ml flacon make it an exceptional acquisition.",
    client: 'Julian S.',
    city: 'New York',
    perfume: 'La Collection Découverte',
    rating: 5,
    label: 'Demonstration Client Impression'
  }
];

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Orders' | 'Ingredients' | 'Shipping' | 'Bespoke';
}

export const FAQS: FAQItem[] = [
  {
    question: 'What is the concentration of NOIRÉLLE fragrances?',
    answer: 'All NOIRÉLLE masterworks are formulated at Extrait de Parfum (28%–35% pure perfume oils) or Eau de Parfum Intense (20%–25%) concentrations. This ensures extraordinary olfactory depth, nuance, and enduring longevity of 12 to 24+ hours on the skin.',
    category: 'Ingredients'
  },
  {
    question: 'Where are your raw botanicals and precious oils sourced?',
    answer: 'Our raw materials are ethically harvested in their natural origins: May Rose and Jasmine from our protected fields in Grasse, France; 25-Year Agarwood from sustainable plantations in Cambodia and Assam; Orris Butter aged in Florence; and Bergamot cold-pressed in Calabria.',
    category: 'Ingredients'
  },
  {
    question: 'How does your complimentary luxury shipping work?',
    answer: 'We provide complimentary insured White Glove Delivery worldwide on all orders exceeding $150. Every order is prepared in our signature black and champagne gold presentation packaging with hand-tied satin ribbons.',
    category: 'Shipping'
  },
  {
    question: 'Can I sample before acquiring a full-size flacon?',
    answer: 'Yes. With our "La Collection Découverte" (8 x 10ml atomizers), you receive a complete luxury travel set accompanied by a $50 courtesy voucher redeemable against any 100ml or 200ml flacon within 60 days.',
    category: 'Orders'
  },
  {
    question: 'How do I place an inquiry via the Private Concierge on WhatsApp?',
    answer: 'Click the "Concierge WhatsApp" button on any product page or in your shopping bag. A tailored message containing your selected flacon, size, and custom inquiries will be prepared directly for our private fragrance specialists.',
    category: 'Bespoke'
  }
];
