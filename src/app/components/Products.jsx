import { Package, Star } from 'lucide-react';
import ProductCard from '@/components/shared/ProductCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getApiUrl } from '@/config/api';

export default function ProductsComponent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(getApiUrl('products'));
        setProducts(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products');
        setLoading(false);
        console.error('Error fetching products:', err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className='py-20 bg-[rgba(241,248,233,1)]'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl font-bold text-center text-gray-900 mb-12'>Produk Trending</h2>

        <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
          {products.slice(0, 5).map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              isDiscounted={product.discountPrice !== undefined}
            />
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">EchoTutor</h2>
          <p className="text-gray-600 mb-8">Pelajari cara membuat produk ramah lingkungan</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="w-full h-32 bg-white/50 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                  <Image
                    src={'/echojualan.svg'}
                    alt="tutorial image"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Tutorial Kreatif</h3>
                <p className="text-sm text-gray-600">Pelajari cara membuat kerajinan dari barang bekas</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
