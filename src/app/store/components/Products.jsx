import ProductCard from './ui/ProductCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getApiUrl } from '@/config/api';

export default function StoreProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(getApiUrl('products'));
        setProducts(response.data.data);
        console.log(response.data.data);
        
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
    <section className='py-8'>
      <div className='w-[90%] container mx-auto '>
        <h2 className='text-xl font-semibold text-gray-800 mb-6'>Rekomendasi Untukmu</h2>

        <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              isDiscounted={product.discountPrice !== undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};