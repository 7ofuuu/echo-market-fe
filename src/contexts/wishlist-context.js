'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [items, setItems] = useState([]); // array of product minimal objects

  useEffect(() => {
    try {
      const stored = typeof window !== 'undefined' ? window.localStorage.getItem('echo_wishlist_items') : null;
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch (_) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('echo_wishlist_items', JSON.stringify(items));
      }
    } catch (_) {
      // ignore
    }
  }, [items]);

  const add = (product) => {
    if (!product || !product.id) return;
    setItems(prev => (prev.some(p => p.id === product.id) ? prev : [...prev, {
      id: product.id,
      name: product.name,
      price: Number(product.price) || 0,
      image: Array.isArray(product.images) ? product.images[0] : product.image,
      user: product.user
    }]))
  };

  const remove = (productId) => setItems(prev => prev.filter(i => i.id !== productId));

  const has = (productId) => items.some(i => i.id === productId);

  const value = useMemo(() => ({ items, add, remove, has }), [items]);

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used within a WishlistProvider');
  return ctx;
}


