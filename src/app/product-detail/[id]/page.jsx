'use client';

import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, MapPin, Truck, Clock, MessageCircle, Search, Bell, User, ChevronDown, Plus, Minus, Store } from 'lucide-react';

import StoreNavbar from '@/components/shared/Navbar';

export default function EchoMarketProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const productImages = [
    "/api/placeholder/300/300",
    "/api/placeholder/300/300",
    "/api/placeholder/300/300",
    "/api/placeholder/300/300"
  ];

  const reviews = [
    {
      id: 1,
      user: "Fauzein",
      rating: 4,
      comment: "Bahan berkualitas bagus, mantap",
      timeAgo: "4 hari yang lalu",
      images: ["/api/placeholder/80/80", "/api/placeholder/80/80", "/api/placeholder/80/80", "/api/placeholder/80/80"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
     <StoreNavbar />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Images */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 relative">
                <img
                  src={productImages[selectedImage]}
                  alt="Tempat Pensil"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {[0, 1, 2].map((dot) => (
                    <div
                      key={dot}
                      className={`w-2 h-2 rounded-full ${selectedImage === dot ? 'bg-white' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="p-4 flex space-x-2">
                {productImages.slice(0, 2).map((img, idx) => (
                  <div
                    key={idx}
                    className={`w-16 h-16 rounded cursor-pointer border-2 ${selectedImage === idx ? 'border-blue-500' : 'border-gray-200'}`}
                    onClick={() => setSelectedImage(idx)}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h1 className="text-xl font-bold text-gray-800 mb-2">
                Tempat Pensil dari Kardus Bekas
              </h1>
              
              <div className="text-2xl font-bold text-gray-800 mb-4">
                Rp 10.000
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-2">Deskripsi produk</h3>
                <p className="text-sm text-gray-600">
                  Tempat Pensil dari Ultra yang terbuat dari kardus bekas. Tempat pensil ini adalah varian Limited Edition.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-2">Detail</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Kondisi</span>
                    <span>Bekas</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Merek</span>
                    <span>Florst</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Warna</span>
                    <span>Merah</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-2">Spesifikasi</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-600">• Kondisi</div>
                    <div className="text-gray-600">• Merek</div>
                    <div className="text-gray-600">• Warna</div>
                  </div>
                  <div>
                    <div>• Kondisi</div>
                    <div>• Merek</div>
                    <div>• Warna</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">Informasi penjual</h3>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-600" />
                  </div>
                  <span className="font-medium">Hallintar Store</span>
                </div>
                
                <div className="text-sm text-gray-600 mb-3">
                  Lokasi: Bojongsoang, Bandung
                </div>

                <div className="bg-gray-100 rounded-lg p-3 mb-4">
                  <div className="text-sm">
                    <div className="flex items-center mb-1">
                      <MapPin className="w-4 h-4 mr-1 text-blue-500" />
                      <span>Bojongsoang</span>
                    </div>
                    <div className="text-xs text-gray-500">Baleendah</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Truck className="w-4 h-4 mr-2 text-gray-500" />
                    <span>Dikirim dari <strong>Kota Bandung</strong></span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2 text-gray-500" />
                    <span>Ongkir Rp: 500</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Ekonomi • Estimasi tiba 23 - 27 Agt
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-500">Pilihan lainnya: Instant 3 Jam, </span>
                    <span className="text-green-600">Lihat Kurir Lainnya</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Purchase Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-4">
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 mb-3">Jumlah Pembelian</h3>
                <div className="flex items-center space-x-3 mb-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-xs text-gray-500">Stok Sisa: 30</div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold">Sub Total:</span>
                  <span className="text-xl font-bold">Rp {(10000 * quantity).toLocaleString()}</span>
                </div>
                
                <div className="text-sm text-gray-600 mb-4">
                  Kirim pesan ke penjual
                </div>

                <input
                  type="text"
                  placeholder="Apakah ini masih ada?"
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm mb-4"
                />
              </div>

              <div className="space-y-3">
                <button className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                  Kirim pesan
                </button>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Masukkan keranjang
                  </button>
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-3 rounded-lg border-2 transition-colors ${
                      isWishlisted 
                        ? 'bg-red-500 border-red-500 text-white' 
                        : 'border-red-500 text-red-500 hover:bg-red-50'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Ulasan pembeli</h3>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <span className="text-2xl font-bold ml-2">5</span>
                  <span className="text-gray-500 text-lg">/5</span>
                </div>
              </div>
              
              <div className="text-sm text-gray-600 mb-4">
                100% pelanggan merasa puas<br />
                10 rating • 6 ulasan
              </div>

              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center text-sm">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="mr-2">{star}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className={`h-2 rounded-full ${star === 5 ? 'bg-yellow-400 w-full' : 'w-0'}`}
                      />
                    </div>
                    <span className="text-gray-500">(0)</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-3">Filter ulasan</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block font-medium mb-2">Media</label>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Dengan foto & video</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block font-medium mb-2">Rating</label>
                    <div className="space-y-1">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          <span className="text-sm">{rating}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-medium mb-2">Topik ulasan</label>
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Sesuai gambar</span>
                      </div>
                      {['Pesanan tepat waktu', 'Pesanan tepat waktu', 'Pesanan tepat waktu'].map((topic, idx) => (
                        <div key={idx} className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Foto dan video pembeli</h3>
              
              <div className="grid grid-cols-4 gap-2 mb-6">
                {Array.from({length: 4}).map((_, idx) => (
                  <div key={idx} className="aspect-square bg-gradient-to-br from-orange-200 to-orange-400 rounded">
                    <img src="/api/placeholder/100/100" alt="" className="w-full h-full object-cover rounded" />
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b pb-6 last:border-b-0">
                    <h4 className="font-semibold mb-2">Ulasan pilihan</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Menampilkan 10 dari 12 ulasan
                    </p>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {Array.from({length: 5}).map((_, idx) => (
                          <Star
                            key={idx}
                            className={`w-4 h-4 ${idx < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">{review.timeAgo}</span>
                    </div>

                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                        <User className="w-5 h-5 text-gray-600" />
                      </div>
                      <span className="font-medium">{review.user}</span>
                    </div>

                    <p className="text-gray-700 mb-4">{review.comment}</p>

                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {review.images.map((img, idx) => (
                        <div key={idx} className="aspect-square bg-gradient-to-br from-orange-200 to-orange-400 rounded">
                          <img src={img} alt="" className="w-full h-full object-cover rounded" />
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <button className="text-sm text-gray-600 hover:text-gray-800">
                        👍 Merasa terbantu?
                      </button>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">Lihat Balasan</span>
                        <ChevronDown className="w-4 h-4 text-gray-600" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}