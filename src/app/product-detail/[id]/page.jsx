'use client';

import React, { useState, useEffect } from "react";
import { Star, Heart, ShoppingCart, MapPin, Truck, Clock, MessageCircle, Search, Bell, User, ChevronDown, Plus, Minus, Store } from "lucide-react";
import { useParams } from "next/navigation";
import axios from "axios";

import StoreNavbar from "@/components/shared/Navbar";
import { useCart } from "@/contexts/cart-context";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useWishlist } from "@/contexts/wishlist-context";

export default function EchoMarketProductPage() {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [product, setProduct] = useState(null);
  const [seller, setSeller] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [failedImages, setFailedImages] = useState(new Set());

  const params = useParams();
  const productId = params.id;
  const { addItem } = useCart();
  const { add: addWishlist, remove: removeWishlist, has } = useWishlist();

  useEffect(() => {
    const fetchProductData = async () => {
      if (!productId) return;

      setLoading(true);

      try {
        // Fetch all products from API
        const response = await axios.get("http://127.0.0.1:8000/api/products");
        const products = response.data.data;

        // Find product by ID
        const foundProduct = products.find((p) => p.id === parseInt(productId));

        if (foundProduct) {
          // Transform API data to match our component structure
          const transformedProduct = {
            id: foundProduct.id,
            id_product: foundProduct.id,
            name: foundProduct.name,
            description: foundProduct.description,
            price: parseFloat(foundProduct.price),
            image: foundProduct.image,
            images: [foundProduct.image],
            condition: "Baru", // Default since API doesn't provide this
            brand: foundProduct.categories || "Unknown",
            color: "Default", // Default since API doesn't provide this
            specifications: {
              category: foundProduct.categories,
              created: new Date(foundProduct.created_at).toLocaleDateString(),
              price: `Rp ${parseFloat(foundProduct.price).toLocaleString()}`,
            },
            stok_barang: Math.floor(Math.random() * 50) + 1, // Random stock since API doesn't provide
            is_favourite: foundProduct.favourite ? "YES" : "NO",
          };

          // Transform seller data
          const transformedSeller = {
            id: foundProduct.user.id,
            name: foundProduct.user.name,
            email: foundProduct.user.email,
            alamat: "Lokasi tidak tersedia", // API doesn't provide address
          };

          setProduct(transformedProduct);
          setSeller(transformedSeller);
          setIsWishlisted(foundProduct.favourite === 1);
          setFailedImages(new Set()); // Reset failed images for new product
          setSelectedImage(0); // Reset selected image to first image

          // Generate mock reviews for this product
          const mockReviews = [
            {
              id_review: foundProduct.id * 100 + 1,
              product_id: foundProduct.id,
              buyer_id: 1,
              rating: Math.floor(Math.random() * 2) + 4, // 4-5 stars
              comment: "Produk berkualitas baik, sesuai dengan deskripsi. Pengiriman cepat dan packaging rapi.",
              timeAgo: "3 hari yang lalu",
              user: "Budi Santoso",
            },
            {
              id_review: foundProduct.id * 100 + 2,
              product_id: foundProduct.id,
              buyer_id: 2,
              rating: Math.floor(Math.random() * 2) + 3, // 3-4 stars
              comment: "Produk bagus, harga terjangkau. Recommended untuk pembelian selanjutnya.",
              timeAgo: "1 minggu yang lalu",
              user: "Siti Rahayu",
            },
          ];

          setReviews(mockReviews);
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [productId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat detail produk...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Produk tidak ditemukan</h1>
          <p className="text-gray-600">Produk dengan ID {productId} tidak tersedia.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <StoreNavbar />

      <div className="max-w-6xl mx-auto pt-32 pb-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Images */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 relative">
                {failedImages.has(product.images[selectedImage] || product.images[0]) ? (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-400 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white text-2xl">📷</span>
                      </div>
                      <p className="text-gray-600 text-sm">Gambar tidak tersedia</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={product.images[selectedImage] || product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const currentSrc = e.target.src;
                      if (!failedImages.has(currentSrc)) {
                        setFailedImages((prev) => new Set([...prev, currentSrc]));
                      }
                    }}
                  />
                )}
                {product.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {product.images.slice(0, 3).map((_, dot) => (
                      <div key={dot} className={`w-2 h-2 rounded-full ${selectedImage === dot ? "bg-white" : "bg-white/50"}`} />
                    ))}
                  </div>
                )}
              </div>

              {product.images.length > 1 && (
                <div className="p-4 flex space-x-2">
                  {product.images.slice(0, 4).map((img, idx) => (
                    <div key={idx} className={`w-16 h-16 rounded cursor-pointer border-2 ${selectedImage === idx ? "border-blue-500" : "border-gray-200"}`} onClick={() => setSelectedImage(idx)}>
                      {failedImages.has(img) ? (
                        <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                          <span className="text-gray-400 text-xs">📷</span>
                        </div>
                      ) : (
                        <img
                          src={img}
                          alt=""
                          className="w-full h-full object-cover rounded"
                          onError={(e) => {
                            const currentSrc = e.target.src;
                            if (!failedImages.has(currentSrc)) {
                              setFailedImages((prev) => new Set([...prev, currentSrc]));
                            }
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h1 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h1>

              <div className="text-2xl font-bold text-gray-800 mb-4">Rp {product.price.toLocaleString()}</div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-2">Deskripsi produk</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-2">Detail</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Kondisi</span>
                    <span>{product.condition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Merek</span>
                    <span>{product.brand}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Warna</span>
                    <span>{product.color}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-2">Spesifikasi</h3>
                <div className="space-y-2 text-sm">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">Informasi penjual</h3>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-600" />
                  </div>
                  <span className="font-medium">{seller?.name || "Penjual"}</span>
                </div>

                <div className="text-sm text-gray-600 mb-3">Lokasi: {seller?.alamat || "Lokasi tidak tersedia"}</div>

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
                    <span>
                      Dikirim dari <strong>Kota Bandung</strong>
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2 text-gray-500" />
                    <span>Ongkir Rp: 500</span>
                  </div>
                  <div className="text-xs text-gray-500">Ekonomi • Estimasi tiba 23 - 27 Agt</div>
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
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-32">
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 mb-3">Jumlah Pembelian</h3>
                <div className="flex items-center space-x-3 mb-2">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-xs text-gray-500">Stok Sisa: {product.stok_barang}</div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold">Sub Total:</span>
                  <span className="text-xl font-bold">Rp {(product.price * quantity).toLocaleString()}</span>
                </div>

                <div className="text-sm text-gray-600 mb-4">Kirim pesan ke penjual</div>

                <input type="text" placeholder="Apakah ini masih ada?" className="w-full p-3 border border-gray-300 rounded-lg text-sm mb-4" />
              </div>

              <div className="space-y-3">
                <button className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors">Kirim pesan</button>

                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      addItem(product, quantity);
                      toast.success("Barang ditambahkan ke keranjang");
                    }}
                    className="flex-1 bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Masukkan keranjang
                  </button>
                  <button
                    onClick={() => {
                      if (!product) return;
                      if (has(product.id)) {
                        removeWishlist(product.id);
                        toast.success("Dihapus dari wishlist");
                      } else {
                        addWishlist(product);
                        toast.success("Ditambahkan ke wishlist");
                      }
                    }}
                    className={`p-3 rounded-lg border-2 transition-colors ${has(product.id) ? "bg-red-500 border-red-500 text-white" : "border-red-500 text-red-500 hover:bg-red-50"}`}>
                    <Heart className={`w-5 h-5 ${has(product.id) ? "fill-current" : ""}`} />
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
                100% pelanggan merasa puas
                <br />
                10 rating • 6 ulasan
              </div>

              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center text-sm">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="mr-2">{star}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 mr-2">
                      <div className={`h-2 rounded-full ${star === 5 ? "bg-yellow-400 w-full" : "w-0"}`} />
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
                      {["Pesanan tepat waktu", "Pesanan tepat waktu", "Pesanan tepat waktu"].map((topic, idx) => (
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
                {Array.from({ length: 4 }).map((_, idx) => (
                  <div key={idx} className="aspect-square bg-gradient-to-br from-orange-200 to-orange-400 rounded">
                    <img src="/api/placeholder/100/100" alt="" className="w-full h-full object-cover rounded" />
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                {reviews.length > 0 ? (
                  reviews.map((review, index) => (
                    <div key={review.id_review} className="border-b pb-6 last:border-b-0">
                      {index === 0 && (
                        <>
                          <h4 className="font-semibold mb-2">Ulasan pilihan</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Menampilkan {reviews.length} dari {reviews.length} ulasan
                          </p>
                        </>
                      )}

                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <Star key={idx} className={`w-4 h-4 ${idx < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
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

                      <div className="flex items-center justify-between">
                        <button className="text-sm text-gray-600 hover:text-gray-800">👍 Merasa terbantu?</button>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">Lihat Balasan</span>
                          <ChevronDown className="w-4 h-4 text-gray-600" />
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">Belum ada ulasan untuk produk ini.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}