import { MapPin, Star, Box } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ProductCard({ product, isDiscounted = false }) {
  const router = useRouter();

  const handleProductClick = () => {
    router.push(`/product-detail/${product.id_product || product.id}`);
    console.log(product.id_product || product.id);
  };
  return (
    <div
      onClick={handleProductClick}
      className='bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-1'>
      <div
        className='aspect-square bg-cover bg-center bg-no-repeat flex items-center justify-center relative'
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1758274406801-53151bcb4af7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8')` }}></div>

      <div className='p-4'>
        <h3 className='font-medium truncate overflow-ellipsis text-gray-800 mb-2'>{product.name}</h3>
        <div className='flex items-center mb-2'>
          {isDiscounted && (
            <>
              <span className='text-red-600 font-bold'>Rp {product.discountPrice}</span>
              <span className='text-gray-400 line-through text-sm ml-2'>Rp{product.originalPrice}</span>
            </>
          )}
          {!isDiscounted && <span className='text-gray-800 font-bold'>Rp {product.price}</span>}
        </div>

        <div className='flex items-center justify-between text-xs text-gray-500'>
          <div className='flex items-center'>
            <Star className='w-3 h-3 text-yellow-400 fill-current mr-1' />
            <span>{product.rating}</span>
            <span className='mx-1'>•</span>
            <span>{product.sold}+ terjual</span>
          </div>
        </div>

        <div className='flex items-center mt-2 text-xs text-gray-500'>
          <MapPin className='w-3 h-3 mr-1' />
          <span>Bandung</span>
        </div>
      </div>
    </div>
  );
}
