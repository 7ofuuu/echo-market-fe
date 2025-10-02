'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ChevronDown, Star, MapPin } from 'lucide-react';
import StoreNavbar from '@/components/shared/Navbar';
import Link from 'next/link';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [sortBy, setSortBy] = useState('Paling relevan');
  const [filters, setFilters] = useState({
    categories: [],
    locations: [],
    priceRange: null
  });

  // Mock data for products - replace with actual API call
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Tempat pensil dari kardus bekas',
      price: 10000,
      originalPrice: null,
      rating: 4.9,
      sold: '10rb+',
      location: 'Bandung',
      image: '/store/banner-1.svg'
    },
    {
      id: 2,
      name: 'Tempat pensil kreatif',
      price: 10000,
      originalPrice: null,
      rating: 4.8,
      sold: '10rb+',
      location: 'Bandung',
      image: '/store/banner-1.svg'
    },
    {
      id: 3,
      name: 'Tempat pensil unik',
      price: 10000,
      originalPrice: 15000,
      rating: 4.9,
      sold: '10rb+',
      location: 'Bandung',
      image: '/store/banner-1.svg'
    },
    {
      id: 4,
      name: 'Tempat pensil eco-friendly',
      price: 10000,
      originalPrice: null,
      rating: 4.9,
      sold: '10rb+',
      location: 'Bandung',
      image: '/store/banner-1.svg'
    },
    // Duplicate for second row
    {
      id: 5,
      name: 'Tempat pensil dari kardus bekas',
      price: 10000,
      originalPrice: null,
      rating: 4.0,
      sold: '10rb+',
      location: 'Bandung',
      image: '/store/banner-1.svg'
    },
    {
      id: 6,
      name: 'Tempat pensil kreatif',
      price: 10000,
      originalPrice: null,
      rating: 4.9,
      sold: '10rb+',
      location: 'Bandung',
      image: '/store/banner-1.svg'
    },
    {
      id: 7,
      name: 'Tempat pensil unik',
      price: 10000,
      originalPrice: 15000,
      rating: 4.9,
      sold: '10rb+',
      location: 'Bandung',
      image: '/store/banner-1.svg'
    },
    {
      id: 8,
      name: 'Tempat pensil eco-friendly',
      price: 10000,
      originalPrice: null,
      rating: 4.0,
      sold: '10rb+',
      location: 'Bandung',
      image: '/store/banner-1.svg'
    }
  ]);

  const totalProducts = 100;
  const currentPage = 1;
  const productsPerPage = 40;
  const displayedProducts = 25;

  return (
    <div className="min-h-screen bg-gray-50">
      <StoreNavbar />
      
      <div className="pt-32 pb-8">
        {/* Header Section */}
        <div className="bg-[rgba(76,175,80,1)] text-white pt-16 pb-8 px-6">
          <div className="container flex  mx-auto">
            <h1 className="text-3xl mt-4 font-bold">
              {query || 'Kardus Bekas'}
            </h1>
          </div>
        </div>

        {/* Breadcrumb in white container */}
        <div className="container mx-auto px-6 -mt-5 relative z-10">
          <nav className="bg-white rounded-lg shadow-sm px-4 py-3">
            <div className="flex items-center text-sm space-x-1">
              <Link href="/" className="text-green-600 hover:underline font-medium">Beranda</Link>
              <span className="text-gray-400 mx-1">›</span>
              <Link href="/categories" className="text-green-600 hover:underline font-medium">Kategori</Link>
              <span className="text-gray-400 mx-1">›</span>
              <span className="text-gray-700 font-medium">{query || 'Kardus Bekas'}</span>
            </div>
          </nav>
        </div>

        <div className="container mx-auto px-6 py-6 mt-4">
          <div className="flex gap-6">
            {/* Left Sidebar - Filters */}
            <div className="w-64 flex-shrink-0">
              <FilterSidebar filters={filters} setFilters={setFilters} />
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Results Header */}
              <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-600">
                    Menampilkan {displayedProducts}({productsPerPage}) produk untuk <span className="font-semibold">'{query || 'Kardus Bekas'}'</span> ({(currentPage - 1) * productsPerPage + 1} - {Math.min(currentPage * productsPerPage, totalProducts)} of {totalProducts})
                  </div>
                  
                  {/* Sort Dropdown */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Urutkan:</span>
                    <select 
                      value={sortBy} 
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="Paling relevan">Paling relevan</option>
                      <option value="Harga terendah">Harga terendah</option>
                      <option value="Harga tertinggi">Harga tertinggi</option>
                      <option value="Terbaru">Terbaru</option>
                      <option value="Rating tertinggi">Rating tertinggi</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination could go here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Filter Sidebar Component
function FilterSidebar({ filters, setFilters }) {
  const categoryFilters = [
    'Tempat pensil',
    'Vas Bunga',
    'Aksesoris dari kardus',
    'Tempat pensil',
    'Tempat pensil',
    'Tempat pensil'
  ];

  const locationFilters = [
    { name: 'Lokasi Terdekat', count: null },
    { name: 'Surakarta', count: null },
    { name: 'Jakarta', count: null },
    { name: 'Bandung', count: null }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="font-semibold text-lg mb-4">Filter</h3>
      
      {/* Category Filters */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Barang bekas dari kardus</h4>
        <div className="space-y-2">
          {categoryFilters.map((category, index) => (
            <label key={index} className="flex items-center text-sm">
              <input 
                type="checkbox" 
                className="mr-2 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      {/* Location Filters */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Lokasi</h4>
        <div className="space-y-2">
          {locationFilters.map((location, index) => (
            <label key={index} className="flex items-center text-sm">
              <input 
                type="checkbox" 
                className="mr-2 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              {location.name}
            </label>
          ))}
        </div>
        <button className="text-green-600 text-sm mt-2 hover:underline">
          Lihat semua
        </button>
      </div>

      {/* Service Hours */}
      <div>
        <h4 className="font-medium mb-3">Jasa pengiriman</h4>
        {/* Add service hours content here if needed */}
      </div>
    </div>
  );
}

// Product Card Component
function ProductCard({ product }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="aspect-square bg-gray-100 relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-3">
        <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-gray-600">{product.rating}</span>
          <span className="text-sm text-gray-400 mx-1">•</span>
          <span className="text-sm text-gray-600">{product.sold} terjual</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500">
          <MapPin className="w-4 h-4 mr-1" />
          {product.location}
        </div>
      </div>
    </div>
  );
}