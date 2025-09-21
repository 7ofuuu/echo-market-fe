'use client';

import React, { useMemo, useState } from "react";
import { Search, ShoppingCart, Bell, MessageCircle, Heart, MapPin, Trash2, Plus, Minus, Tag } from "lucide-react";

import StoreNavbar from "@/components/shared/Navbar";
import { useCart } from "@/contexts/cart-context";
import { useCheckout } from "@/contexts/checkout-context";
import { useRouter } from "next/navigation";

export default function EcoMarketCart() {
  const router = useRouter();
  const { items, increment, updateQuantity, removeItem, total } = useCart();
  const [selectedItems, setSelectedItems] = useState({});
  const { setFromCartSelection } = useCheckout();

  const allSelected = useMemo(() => {
    if (items.length === 0) return false;
    return items.every((i) => selectedItems[i.id]);
  }, [items, selectedItems]);

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedItems({});
    } else {
      const map = {};
      items.forEach((i) => {
        map[i.id] = true;
      });
      setSelectedItems(map);
    }
  };

  const selectedTotal = useMemo(() => {
    return items.filter((i) => selectedItems[i.id]).reduce((sum, i) => sum + i.price * i.quantity, 0);
  }, [items, selectedItems]);

  const formatCurrency = (amount) => {
    return `RP ${Number(amount).toLocaleString("id-ID")}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <StoreNavbar />

      <div className="max-w-6xl mx-auto pt-32 pb-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Keranjang</h1>

            {/* Select All */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4 p-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={allSelected} onChange={toggleSelectAll} className="w-4 h-4 text-green-600 rounded border-gray-300 focus:ring-green-500" />
                <span className="text-sm font-medium text-gray-900">Pilih Semua</span>
              </label>
            </div>

            {/* Items List */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-4 space-y-4">
                {items.length === 0 && <div className="text-center text-gray-500 py-8">Keranjang belanja kamu kosong.</div>}
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      checked={!!selectedItems[item.id]}
                      onChange={() => setSelectedItems((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
                      className="w-4 h-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
                    />

                    <div className="w-20 h-20 bg-amber-100 rounded-lg flex items-center justify-center overflow-hidden">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-16 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-sm flex items-center justify-center">
                          <div className="text-xs text-white transform -rotate-12">📏✏️</div>
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-lg font-bold text-gray-900">{formatCurrency(item.price)}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button onClick={() => removeItem(item.id)} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button onClick={() => increment(item.id, -1)} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center text-sm font-medium">{item.quantity}</span>
                      <button onClick={() => increment(item.id, 1)} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Total Belanja Kamu</h2>

              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Total: {formatCurrency(selectedTotal || total)}</span>
              </div>

              <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Tag className="w-4 h-4" />
                  <span>Pakai promo lebih hemat</span>
                </div>
              </div>

              <button
                onClick={() => {
                  const selected = items.filter((i) => selectedItems[i.id]);
                  if (selected.length === 0) return;
                  setFromCartSelection(selected);
                  router.push("/checkout");
                }}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
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