import React, { createContext, useContext, useState, useEffect } from 'react';
import type { CartItem, PromoCode } from '../types/cart';
import type { Product } from '../types/product';
import { SITE_CONFIG } from '../config/site';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size: string, quantity?: number) => boolean;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, newQuantity: number) => void;
  updateItemSize: (itemId: string, newSize: string) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  shipping: number;
  discount: number;
  appliedPromo: PromoCode | null;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  removePromoCode: () => void;
  total: number;
  isCartDrawerOpen: boolean;
  setIsCartDrawerOpen: (open: boolean) => void;
  notification: string | null;
  dismissNotification: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'noirelle_cart_v1';
const PROMO_STORAGE_KEY = 'noirelle_promo_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(() => {
    try {
      const saved = localStorage.getItem(PROMO_STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  // Persist cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to persist cart:', e);
    }
  }, [cart]);

  // Persist promo code to localStorage
  useEffect(() => {
    try {
      if (appliedPromo) {
        localStorage.setItem(PROMO_STORAGE_KEY, JSON.stringify(appliedPromo));
      } else {
        localStorage.removeItem(PROMO_STORAGE_KEY);
      }
    } catch (e) {
      console.error('Failed to persist promo:', e);
    }
  }, [appliedPromo]);

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => {
      setNotification((curr) => (curr === message ? null : curr));
    }, 4000);
  };

  const dismissNotification = () => setNotification(null);

  const addToCart = (product: Product, size: string, quantity: number = 1): boolean => {
    const sizeObj = product.sizes.find((s) => s.size === size) || product.sizes[0];
    if (!sizeObj || !sizeObj.inStock) {
      showNotification(`${product.name} (${size}) is currently out of stock.`);
      return false;
    }

    const itemId = `${product.id}-${sizeObj.size}`;
    const maxStock = sizeObj.stockQuantity || product.stockQuantity || 10;

    let success = true;
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === itemId);
      if (existing) {
        const nextQty = existing.quantity + quantity;
        if (nextQty > maxStock) {
          showNotification(`Maximum available inventory (${maxStock}) reached for ${product.name} (${sizeObj.size}).`);
          success = false;
          return prevCart;
        }
        return prevCart.map((item) =>
          item.id === itemId ? { ...item, quantity: nextQty } : item
        );
      } else {
        if (quantity > maxStock) {
          showNotification(`Only ${maxStock} items available in stock.`);
          success = false;
          return prevCart;
        }
        return [
          ...prevCart,
          {
            id: itemId,
            productId: product.id,
            product,
            selectedSize: sizeObj.size,
            price: sizeObj.price,
            quantity,
            maxStock,
          },
        ];
      }
    });

    if (success) {
      showNotification(`Added ${product.name} (${sizeObj.size}) to your Shopping Bag.`);
      setIsCartDrawerOpen(true);
    }
    return success;
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => {
      const item = prevCart.find((i) => i.id === itemId);
      if (item) {
        showNotification(`Removed ${item.product.name} from your Shopping Bag.`);
      }
      return prevCart.filter((i) => i.id !== itemId);
    });
  };

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === itemId) {
          if (newQuantity > item.maxStock) {
            showNotification(`Cannot exceed available inventory of ${item.maxStock}.`);
            return { ...item, quantity: item.maxStock };
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const updateItemSize = (itemId: string, newSize: string) => {
    setCart((prevCart) => {
      const currentItem = prevCart.find((i) => i.id === itemId);
      if (!currentItem) return prevCart;

      const newSizeObj = currentItem.product.sizes.find((s) => s.size === newSize);
      if (!newSizeObj || !newSizeObj.inStock) {
        showNotification(`${newSize} is currently unavailable for ${currentItem.product.name}.`);
        return prevCart;
      }

      const newId = `${currentItem.product.id}-${newSizeObj.size}`;
      const existingNewItem = prevCart.find((i) => i.id === newId && i.id !== itemId);

      if (existingNewItem) {
        // Merge quantities
        const combinedQty = Math.min(
          existingNewItem.quantity + currentItem.quantity,
          newSizeObj.stockQuantity
        );
        return prevCart
          .filter((i) => i.id !== itemId)
          .map((i) =>
            i.id === newId
              ? {
                  ...i,
                  quantity: combinedQty,
                  price: newSizeObj.price,
                  maxStock: newSizeObj.stockQuantity,
                }
              : i
          );
      } else {
        // Change size in place
        return prevCart.map((i) =>
          i.id === itemId
            ? {
                ...i,
                id: newId,
                selectedSize: newSizeObj.size,
                price: newSizeObj.price,
                maxStock: newSizeObj.stockQuantity,
                quantity: Math.min(i.quantity, newSizeObj.stockQuantity),
              }
            : i
        );
      }
    });
  };

  const clearCart = () => {
    setCart([]);
    setAppliedPromo(null);
  };

  const applyPromoCode = (code: string) => {
    const trimmed = code.trim().toUpperCase();
    const found = SITE_CONFIG.promotions.find((p) => p.code === trimmed);
    if (!found) {
      return { success: false, message: 'Invalid or expired luxury concession code.' };
    }

    if (found.minSpend && subtotal < found.minSpend) {
      return {
        success: false,
        message: `This code requires a minimum acquisition of $${found.minSpend}.`,
      };
    }

    setAppliedPromo(found);
    return {
      success: true,
      message: `Code ${found.code} applied! Enjoy ${found.discountPercentage}% off.`,
    };
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    showNotification('Privilege code removed.');
  };

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Discount calculation
  const discount = appliedPromo ? Math.round((subtotal * appliedPromo.discountPercentage) / 100) : 0;

  // Shipping calculation
  const shipping =
    subtotal === 0 || subtotal - discount >= SITE_CONFIG.shipping.freeShippingThreshold
      ? 0
      : SITE_CONFIG.shipping.standardShippingCost;

  const total = Math.max(0, subtotal - discount + shipping);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateItemSize,
        clearCart,
        itemCount,
        subtotal,
        shipping,
        discount,
        appliedPromo,
        applyPromoCode,
        removePromoCode,
        total,
        isCartDrawerOpen,
        setIsCartDrawerOpen,
        notification,
        dismissNotification,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
