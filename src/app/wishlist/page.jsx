'use client';

import React, { useState } from 'react';
import StoreNavbar from '@/components/shared/Navbar';
import { MoreHorizontal } from 'lucide-react';
import { useCart } from '@/contexts/cart-context';
import toast from 'react-hot-toast';
import { useWishlist } from '@/contexts/wishlist-context';

export default function WishlistPage() {
  const { addItem } = useCart();
  const { items: wishlistItems } = useWishlist();
  const [products] = useState([]); // keep for structure; we now use wishlistItems
  const [loading] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <StoreNavbar />
      <div className="max-w-6xl mx-auto pt-28 pb-8 px-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Semua Wishlist</h1>
            <p className="text-sm text-gray-500">{wishlistItems.length} Barang</p>
          </div>
          <div />
        </div>
        {wishlistItems.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 py-16 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <MoreHorizontal className="w-6 h-6 text-gray-400" />
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mb-1">Wishlist kamu kosong</h2>
            <p className="text-sm text-gray-500">Belum ada barang yang kamu simpan.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {wishlistItems.map((product) => (
              <div key={product.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden group hover:shadow-md transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-blue-200 to-blue-300 relative">
                  <div className="absolute top-2 right-2">
                    <button className="p-2 bg-white/90 rounded-full border border-gray-200 hover:bg-white">
                      <MoreHorizontal className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="w-full h-full flex items-center justify-center overflow-hidden">
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-20 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                        <div className="grid grid-cols-8 gap-0.5 p-2">
                          {Array.from({ length: 24 }).map((_, i) => (
                            <div key={i} className="w-1 h-3 bg-white rounded-sm"></div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-3">
                  <h3 className="font-medium text-gray-800 text-sm line-clamp-2 min-h-[40px]">{product.name}</h3>

                  <div className="mt-2">
                    <span className="text-gray-800 font-bold">Rp {Number(product.price).toLocaleString('id-ID')}</span>
                  </div>

                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => {
                        addItem({
                          id: product.id,
                          name: product.name,
                          price: Number(product.price),
                          images: [product.image],
                          user: product.user
                        }, 1);
                        toast.success('Barang ditambahkan ke keranjang');
                      }}
                      className="flex-1 border border-green-500 text-green-600 py-2 rounded-lg text-sm font-medium hover:bg-green-50">
                      + Keranjang
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


