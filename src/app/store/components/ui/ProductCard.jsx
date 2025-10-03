import { MapPin, Star, Box } from "lucide-react";
import { useRouter } from "next/navigation";
import { API_CONFIG } from '@/config/api';

export default function ProductCard({ product, isDiscounted = false }) {
  const router = useRouter();

  const handleProductClick = () => {
    router.push(`/product-detail/${product.id_product || product.id}`);
    console.log(product.id_product || product.id);
  };

  // Function to get the full image URL
  const getImageUrl = imagePath => {
    if (!imagePath) return null;

    // If it's already a full URL (starts with http), return as is
    if (imagePath.startsWith('http')) {
      return imagePath;
    }

    // If it's a relative path, prepend the base URL
    return `${API_CONFIG.baseURL}/${imagePath}`;
  };

  const imageUrl = getImageUrl(product.image);
  return (
    <div
      onClick={handleProductClick}
      className='bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-1'>
      <div className='aspect-square flex items-center justify-center relative bg-gray-100'>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={product.name}
            className='w-full h-full object-cover'
            onError={e => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
        ) : null}
        {/* Fallback when no image or image fails to load */}
        <div
          className='w-full h-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center'
          style={{ display: imageUrl ? 'none' : 'flex' }}>
          <Box className='w-12 h-12 text-gray-400' />
        </div>
      </div>

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
