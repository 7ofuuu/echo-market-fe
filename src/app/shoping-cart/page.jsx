'use client';

import React, { useState } from 'react';
import { Search, ShoppingCart, Bell, MessageCircle, Heart, MapPin, Trash2, Plus, Minus, Tag } from 'lucide-react';

import StoreNavbar from '@/components/shared/Navbar';

export default function EcoMarketCart() {
  const [cartItems, setCartItems] = useState({
    hallintar: [
      { id: 1, name: 'Tempat pensil dari kardus', price: 10000, quantity: 1, image: '/api/placeholder/80/80' },
      { id: 2, name: 'Tempat pensil dari kardus', price: 10000, quantity: 1, image: '/api/placeholder/80/80' },
      { id: 3, name: 'Tempat pensil dari kardus', price: 10000, quantity: 1, image: '/api/placeholder/80/80' }
    ],
    fauzein: [
      { id: 4, name: 'Tempat pensil dari kardus', price: 10000, quantity: 2, image: '/api/placeholder/80/80' },
      { id: 5, name: 'Tempat pensil dari kardus', price: 10000, quantity: 1, image: '/api/placeholder/80/80' },
      { id: 6, name: 'Tempat pensil dari kardus', price: 10000, quantity: 1, image: '/api/placeholder/80/80' }
    ],
    owl: [
      { id: 7, name: 'Tempat pensil dari kardus', price: 10000, quantity: 1, image: '/api/placeholder/80/80' },
      { id: 8, name: 'Tempat pensil dari kardus', price: 10000, quantity: 1, image: '/api/placeholder/80/80' },
      { id: 9, name: 'Tempat pensil dari kardus', price: 10000, quantity: 1, image: '/api/placeholder/80/80' }
    ]
  });

  const [selectedStores, setSelectedStores] = useState({
    hallintar: false,
    fauzein: false,
    owl: false
  });

  const [selectedItems, setSelectedItems] = useState({});

  const updateQuantity = (storeKey, itemId, change) => {
    setCartItems(prev => ({
      ...prev,
      [storeKey]: prev[storeKey].map(item =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    }));
  };

  const toggleStoreSelection = (storeKey) => {
    setSelectedStores(prev => ({
      ...prev,
      [storeKey]: !prev[storeKey]
    }));
  };

  const toggleItemSelection = (itemId) => {
    setSelectedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const formatCurrency = (amount) => {
    return `RP ${amount.toLocaleString('id-ID')}`;
  };

  const StoreSection = ({ storeKey, storeName, storeColor, items }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={selectedStores[storeKey]}
            onChange={() => toggleStoreSelection(storeKey)}
            className="w-4 h-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
          />
          <div className={`w-3 h-3 rounded-full ${storeColor}`}></div>
          <span className="font-medium text-gray-900">{storeName}</span>
        </div>
      </div>
      
      <div className="p-4 space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <input
              type="checkbox"
              checked={selectedItems[item.id] || false}
              onChange={() => toggleItemSelection(item.id)}
              className="w-4 h-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
            />
            
            <div className="w-20 h-20 bg-amber-100 rounded-lg flex items-center justify-center overflow-hidden">
              <div className="w-16 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-sm flex items-center justify-center">
                <div className="text-xs text-white transform -rotate-12">📏✏️</div>
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-900 mb-1">{item.name}</h3>
              <p className="text-lg font-bold text-gray-900">{formatCurrency(item.price)}</p>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
                <Heart className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => updateQuantity(storeKey, item.id, -1)}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center text-sm font-medium">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(storeKey, item.id, 1)}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
        <StoreNavbar />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Keranjang</h1>
            
            {/* Select All */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4 p-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
                />
                <span className="text-sm font-medium text-gray-900">Pilih Semua</span>
              </label>
            </div>

            {/* Store Sections */}
            <StoreSection
              storeKey="hallintar"
              storeName="Hallintar Store"
              storeColor="bg-blue-500"
              items={cartItems.hallintar}
            />
            
            <StoreSection
              storeKey="fauzein"
              storeName="FauzeinStore"
              storeColor="bg-green-500"
              items={cartItems.fauzein}
            />
            
            <StoreSection
              storeKey="owl"
              storeName="Owl Store"
              storeColor="bg-purple-500"
              items={cartItems.owl}
            />
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Total Belanja Kamu</h2>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Total: -</span>
                {/* <span className="text-xl font-bold">—</span> */}
              </div>
              
              <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Tag className="w-4 h-4" />
                  <span>Pakai promo lebih hemat</span>
                </div>
              </div>
              
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Beli
              </button>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Rekomendasi untuk kamu</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                  <div className="w-24 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                    <div className="text-white text-lg transform -rotate-12">📏✏️</div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Tempat pensil dari kardus</h3>
                  <p className="text-lg font-bold text-gray-900">RP 10.000</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}