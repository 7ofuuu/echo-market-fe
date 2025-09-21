'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = typeof window !== 'undefined' ? window.localStorage.getItem('echo_cart_items') : null;
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch (_) {
      // ignore storage errors
    }
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('echo_cart_items', JSON.stringify(items));
      }
    } catch (_) {
      // ignore storage errors
    }
  }, [items]);

  const addItem = (product, quantity = 1) => {
    if (!product || !product.id) return;
    setItems(prev => {
      const existingIndex = prev.findIndex(p => p.id === product.id);
      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: Math.min(999, (updated[existingIndex].quantity || 0) + quantity)
        };
        return updated;
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: Number(product.price) || 0,
          image: Array.isArray(product.images) ? product.images[0] : product.image,
          sellerId: product.user?.id || product.sellerId || null,
          quantity: Math.max(1, quantity)
        }
      ];
    });
  };

  const updateQuantity = (productId, nextQuantity) => {
    setItems(prev => prev.map(item => item.id === productId ? { ...item, quantity: Math.max(1, nextQuantity) } : item));
  };

  const increment = (productId, delta = 1) => {
    setItems(prev => prev.map(item => item.id === productId ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) } : item));
  };

  const removeItem = (productId) => {
    setItems(prev => prev.filter(item => item.id !== productId));
  };

  const clear = () => setItems([]);

  const total = useMemo(() => items.reduce((sum, i) => sum + (i.price * i.quantity), 0), [items]);

  const value = useMemo(() => ({ items, addItem, updateQuantity, increment, removeItem, clear, total }), [items, total]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return ctx;
}


