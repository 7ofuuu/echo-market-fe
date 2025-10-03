'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import StoreNavbar from '@/components/shared/Navbar';
import ProductCard from '@/app/store/components/ui/ProductCard';
import Link from 'next/link';
import axios from 'axios';
import { API_CONFIG } from '@/config/api';

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const [sortBy, setSortBy] = useState('Paling relevan');
  const [filters, setFilters] = useState({
    categories: [],
    locations: [],
    priceRange: null,
  });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  // API call to fetch search results
  const fetchSearchResults = async () => {
    if (!query.trim()) {
      setProducts([]);
      setTotalProducts(0);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams({
        q: query,
        page: currentPage,
        limit: productsPerPage,
        sort: sortBy === 'Paling relevan' ? 'relevance' : sortBy === 'Harga terendah' ? 'price_asc' : sortBy === 'Harga tertinggi' ? 'price_desc' : sortBy === 'Terbaru' ? 'newest' : 'relevance',
      });

      // Add filter parameters
      if (filters.categories.length > 0) {
        params.append('categories', filters.categories.join(','));
      }
      if (filters.locations.length > 0) {
        params.append('locations', filters.locations.join(','));
      }
      if (filters.priceRange) {
        params.append('min_price', filters.priceRange.min);
        params.append('max_price', filters.priceRange.max);
      }

      // Use existing products endpoint and filter client-side since search endpoint doesn't exist
      const response = await axios.get(`${API_CONFIG.baseURL}/products`);

      if (response.data) {
        let allProducts = response.data.data || response.data.products || [];

        // Client-side filtering by search query
        if (query.trim()) {
          allProducts = allProducts.filter(
            product => product.name?.toLowerCase().includes(query.toLowerCase()) || product.description?.toLowerCase().includes(query.toLowerCase()) || product.categories?.toLowerCase().includes(query.toLowerCase())
          );
        }

        // Client-side filtering by categories
        if (filters.categories.length > 0) {
          allProducts = allProducts.filter(product => filters.categories.some(category => product.categories?.toLowerCase().includes(category.toLowerCase()) || product.name?.toLowerCase().includes(category.toLowerCase())));
        }

        // Client-side filtering by locations (if product has location data)
        if (filters.locations.length > 0) {
          allProducts = allProducts.filter(product => filters.locations.some(location => product.location?.toLowerCase().includes(location.toLowerCase()) || product.seller_location?.toLowerCase().includes(location.toLowerCase())));
        }

        // Client-side sorting
        switch (sortBy) {
          case 'Harga terendah':
            allProducts.sort((a, b) => parseFloat(a.price || 0) - parseFloat(b.price || 0));
            break;
          case 'Harga tertinggi':
            allProducts.sort((a, b) => parseFloat(b.price || 0) - parseFloat(a.price || 0));
            break;
          case 'Terbaru':
            allProducts.sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0));
            break;
          default: // 'Paling relevan'
            // Keep original order for relevance
            break;
        }

        // Transform API data to match store ProductCard component structure
        const transformedProducts = allProducts.map(product => {
          return {
            id: product.id,
            id_product: product.id, // Add id_product for compatibility
            name: product.name,
            price: product.price || '0',
            originalPrice: product.original_price || null,
            sold: product.sold_count || Math.floor(Math.random() * 500) + Math.floor(Math.random() * 500),
            location: product.location || product.seller_location || 'Bandung',
            image: product.image,
          };
        });

        // Apply pagination
        const startIndex = (currentPage - 1) * productsPerPage;
        const paginatedProducts = transformedProducts.slice(startIndex, startIndex + productsPerPage);

        setProducts(paginatedProducts);
        setTotalProducts(transformedProducts.length);
      }
    } catch (err) {
      console.error('Search API error:', err);
      setError('Failed to fetch search results');
      setProducts([]);
      setTotalProducts(0);
    } finally {
      setLoading(false);
    }
  };

  // Fetch results when query, filters, or sort changes
  useEffect(() => {
    fetchSearchResults();
  }, [query, filters, sortBy, currentPage]);

  // Mock fallback data in case API is not available (structured to match store ProductCard)
  const mockProducts = [
    {
      id: 1,
      id_product: 1,
      name: 'Tempat pensil dari kardus bekas',
      price: '10000',
      originalPrice: null,
      sold: 10,
      location: 'Bandung',
      image: '/store/banner-1.svg',
    },
    {
      id: 2,
      id_product: 2,
      name: 'Tempat pensil kreatif',
      price: '10000',
      originalPrice: null,
      sold: 15,
      location: 'Bandung',
      image: '/store/banner-1.svg',
    },
    {
      id: 3,
      id_product: 3,
      name: 'Tempat pensil unik',
      price: '10000',
      originalPrice: 15000,
      sold: 8,
      location: 'Bandung',
      image: '/store/banner-1.svg',
    },
    {
      id: 4,
      id_product: 4,
      name: 'Tempat pensil eco-friendly',
      price: '10000',
      originalPrice: null,
      sold: 12,
      location: 'Bandung',
      image: '/store/banner-1.svg',
    },
    // Duplicate for second row
    {
      id: 5,
      id_product: 5,
      name: 'Tempat pensil dari kardus bekas',
      price: '10000',
      originalPrice: null,
      sold: 20,
      location: 'Bandung',
      image: '/store/banner-1.svg',
    },
    {
      id: 6,
      id_product: 6,
      name: 'Tempat pensil kreatif',
      price: '10000',
      originalPrice: null,
      sold: 7,
      location: 'Bandung',
      image: '/store/banner-1.svg',
    },
    {
      id: 7,
      id_product: 7,
      name: 'Tempat pensil unik',
      price: '10000',
      originalPrice: 15000,
      sold: 25,
      location: 'Bandung',
      image: '/store/banner-1.svg',
    },
    {
      id: 8,
      id_product: 8,
      name: 'Tempat pensil eco-friendly',
      price: '10000',
      originalPrice: null,
      sold: 18,
      location: 'Bandung',
      image: '/store/banner-1.svg',
    },
  ];

  // Use API data if available, otherwise fall back to mock data
  const displayProducts = products.length > 0 ? products : error ? [] : mockProducts;
  const displayedProducts = displayProducts.length;

  return (
    <div className='min-h-screen bg-gray-50'>
      <StoreNavbar />

      <div className='pt-32 pb-8'>
        {/* Header Section */}
        <div className='bg-[rgba(76,175,80,1)] text-white pt-16 pb-8 px-6'>
          <div className='container flex  mx-auto'>
            <h1 className='text-3xl mt-4 font-bold'>{query || 'Kardus Bekas'}</h1>
          </div>
        </div>

        {/* Breadcrumb in white container */}
        <div className='container mx-auto px-6 -mt-5 relative z-10'>
          <nav className='bg-white rounded-lg shadow-sm px-4 py-3'>
            <div className='flex items-center text-sm space-x-1'>
              <Link
                href='/'
                className='text-green-600 hover:underline font-medium'>
                Beranda
              </Link>
              <span className='text-gray-400 mx-1'>›</span>
              <Link
                href='/categories'
                className='text-green-600 hover:underline font-medium'>
                cari
              </Link>
              <span className='text-gray-400 mx-1'>›</span>
              <span className='text-gray-700 font-medium'>{query || 'Kardus Bekas'}</span>
            </div>
          </nav>
        </div>

        <div className='container mx-auto px-6 py-6 mt-4'>
          <div className='flex gap-6'>
            {/* Left Sidebar - Filters */}
            <div className='w-64 flex-shrink-0'>
              <FilterSidebar
                filters={filters}
                setFilters={setFilters}
              />
            </div>

            {/* Main Content */}
            <div className='flex-1'>
              {/* Results Header */}
              <div className='bg-white rounded-lg p-4 mb-6 shadow-sm'>
                <div className='flex items-center justify-between mb-4'>
                  <div className='text-sm text-gray-600'>
                    {loading ? (
                      <div className='flex items-center gap-2'>
                        <div className='w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin'></div>
                        <span>Mencari produk...</span>
                      </div>
                    ) : error ? (
                      <span className='text-red-500'>{error}</span>
                    ) : query ? (
                      <>
                        Menampilkan {displayedProducts} produk untuk <span className='font-semibold'>'{query}'</span>
                        {totalProducts > 0 && (
                          <>
                            {' '}
                            ({(currentPage - 1) * productsPerPage + 1} - {Math.min(currentPage * productsPerPage, totalProducts)} dari {totalProducts})
                          </>
                        )}
                      </>
                    ) : (
                      'Masukkan kata kunci untuk mencari produk'
                    )}
                  </div>

                  {/* Sort Dropdown */}
                  <div className='flex items-center gap-2'>
                    <span className='text-sm text-gray-600'>Urutkan:</span>
                    <select
                      value={sortBy}
                      onChange={e => setSortBy(e.target.value)}
                      className='border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500'>
                      <option value='Paling relevan'>Paling relevan</option>
                      <option value='Harga terendah'>Harga terendah</option>
                      <option value='Harga tertinggi'>Harga tertinggi</option>
                      <option value='Terbaru'>Terbaru</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              {loading ? (
                // Loading skeleton
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                  {Array.from({ length: 8 }).map((_, index) => (
                    <div
                      key={index}
                      className='bg-white rounded-lg shadow-sm overflow-hidden animate-pulse'>
                      <div className='aspect-square bg-gray-200'></div>
                      <div className='p-3'>
                        <div className='h-4 bg-gray-200 rounded mb-2'></div>
                        <div className='h-6 bg-gray-200 rounded mb-2'></div>
                        <div className='h-4 bg-gray-200 rounded'></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : error ? (
                <div className='text-center py-12'>
                  <div className='text-red-500 mb-4'>
                    <svg
                      className='w-16 h-16 mx-auto mb-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                    </svg>
                    {error}
                  </div>
                  <button
                    onClick={fetchSearchResults}
                    className='bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors'>
                    Coba Lagi
                  </button>
                </div>
              ) : displayProducts.length === 0 && query ? (
                <div className='text-center py-12'>
                  <div className='text-gray-500 mb-4'>
                    <svg
                      className='w-16 h-16 mx-auto mb-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                    </svg>
                    Tidak ada produk yang ditemukan untuk "{query}"
                  </div>
                  <p className='text-sm text-gray-400'>Coba gunakan kata kunci yang berbeda</p>
                </div>
              ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                  {displayProducts.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                    />
                  ))}
                </div>
              )}

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
  const categoryFilters = ['Tempat pensil', 'Vas Bunga', 'Aksesoris dari kardus', 'Organizer', 'Kerajinan tangan', 'Furniture mini'];

  const locationFilters = [
    { name: 'Lokasi Terdekat', count: null },
    { name: 'Surakarta', count: null },
    { name: 'Jakarta', count: null },
    { name: 'Bandung', count: null },
  ];

  const handleCategoryChange = (category, checked) => {
    setFilters(prev => ({
      ...prev,
      categories: checked ? [...prev.categories, category] : prev.categories.filter(c => c !== category),
    }));
  };

  const handleLocationChange = (location, checked) => {
    setFilters(prev => ({
      ...prev,
      locations: checked ? [...prev.locations, location] : prev.locations.filter(l => l !== location),
    }));
  };

  return (
    <div className='bg-white rounded-lg shadow-sm p-4'>
      <h3 className='font-semibold text-lg mb-4'>Filter</h3>

      {/* Category Filters */}
      <div className='mb-6'>
        <h4 className='font-medium mb-3'>Barang bekas dari kardus</h4>
        <div className='space-y-2'>
          {categoryFilters.map((category, index) => (
            <label
              key={index}
              className='flex items-center text-sm cursor-pointer'>
              <input
                type='checkbox'
                checked={filters.categories.includes(category)}
                onChange={e => handleCategoryChange(category, e.target.checked)}
                className='mr-2 rounded border-gray-300 text-green-600 focus:ring-green-500'
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      {/* Location Filters */}
      <div className='mb-6'>
        <h4 className='font-medium mb-3'>Lokasi</h4>
        <div className='space-y-2'>
          {locationFilters.map((location, index) => (
            <label
              key={index}
              className='flex items-center text-sm cursor-pointer'>
              <input
                type='checkbox'
                checked={filters.locations.includes(location.name)}
                onChange={e => handleLocationChange(location.name, e.target.checked)}
                className='mr-2 rounded border-gray-300 text-green-600 focus:ring-green-500'
              />
              {location.name}
            </label>
          ))}
        </div>
        <button className='text-green-600 text-sm mt-2 hover:underline'>Lihat semua</button>
      </div>

      {/* Service Hours */}
      <div>
        <h4 className='font-medium mb-3'>Jasa pengiriman</h4>
        {/* Add service hours content here if needed */}
      </div>
    </div>
  );
}



// Loading component for Suspense fallback
function SearchLoading() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <StoreNavbar />
      <div className='pt-32 pb-8'>
        <div className='bg-green-500 text-white py-8 px-6'>
          <div className='container mx-auto'>
            <div className='h-8 bg-white/20 rounded w-48 animate-pulse'></div>
          </div>
        </div>
        <div className='container mx-auto px-6 py-6'>
          <div className='text-center'>
            <div className='h-4 bg-gray-200 rounded w-64 mx-auto animate-pulse'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main component wrapped in Suspense
export default function SearchPage() {
  return (
    <Suspense fallback={<SearchLoading />}>
      <SearchContent />
    </Suspense>
  );
}