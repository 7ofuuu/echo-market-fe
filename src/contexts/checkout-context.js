'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CheckoutContext = createContext(null);

export function CheckoutProvider({ children }) {
  const [items, setItems] = useState([]); // items selected for checkout
  const [address, setAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);

  useEffect(() => {
    try {
      const raw = typeof window !== 'undefined' ? window.localStorage.getItem('echo_checkout_items') : null;
      if (raw) setItems(JSON.parse(raw) || []);
    } catch (_) {}
  }, []);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') window.localStorage.setItem('echo_checkout_items', JSON.stringify(items));
    } catch (_) {}
  }, [items]);

  const setFromCartSelection = (cartItems) => {
    setItems(cartItems.map(i => ({ id: i.id, name: i.name, price: i.price, quantity: i.quantity, image: i.image })));
  };

  const total = useMemo(() => items.reduce((s, i) => s + i.price * i.quantity, 0), [items]);

  const value = useMemo(() => ({ items, setFromCartSelection, setItems, total, address, setAddress, paymentMethod, setPaymentMethod }), [items, total, address, paymentMethod]);

  return <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>;
}

export function useCheckout() {
  const ctx = useContext(CheckoutContext);
  if (!ctx) throw new Error('useCheckout must be used within a CheckoutProvider');
  return ctx;
}


