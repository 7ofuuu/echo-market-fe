import { Play } from 'lucide-react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_CONFIG } from '@/config/api';

export default function TutorialComponent() {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_CONFIG.baseURL}/tutorials`);
        console.log('Tutorials fetched:', response.data?.length || response.data?.data?.length || 0, 'tutorials');
        setTutorials(response.data.data || response.data || []);
        setError(null);
      } catch (err) {
        setError('Failed to fetch tutorials');
        console.error('Error fetching tutorials:', err);
        setTutorials([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTutorials();
  }, []);

  // const tutorialVideos = [
  //   {
  //     title: 'Sejak tau cara ini kardus sepatu ga langsung dibuang',
  //     thumbnail: '/api/placeholder/200/120',
  //   },
  //   {
  //     title: 'Cara membuat pot dari botol bekas',
  //     thumbnail: '/api/placeholder/200/120',
  //   },
  //   {
  //     title: 'DIY tempat pensil dari kardus',
  //     thumbnail: '/api/placeholder/200/120',
  //   },
  // ];

  return (
    <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
      <div className='flex items-center gap-3 mb-6'>
        <div className='w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center'>
          <span className='text-white text-lg'>📚</span>
        </div>
        <div>
          <h3 className='font-bold text-gray-900 text-lg'>EchoTutor</h3>
          <p className='text-sm text-gray-500'>Tutorial dan tips eco-friendly</p>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-4'>
        {loading ? (
          // Loading skeleton
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className='relative group cursor-pointer'>
              <div className='aspect-video bg-gray-200 rounded-xl overflow-hidden animate-pulse'></div>
              <div className='mt-3'>
                <div className='h-4 bg-gray-200 rounded animate-pulse'></div>
              </div>
            </div>
          ))
        ) : error ? (
          <div className='col-span-3 text-center py-8'>
            <p className='text-red-500'>{error}</p>
          </div>
        ) : tutorials.length === 0 ? (
          <div className='col-span-3 text-center py-8'>
            <p className='text-gray-500'>No tutorials available</p>
          </div>
        ) : (
          tutorials.slice(0,3).map((video, index) => (
            <div
              key={video.id || index}
              className='relative group cursor-pointer'
              onClick={() => {
                if (video.link) {
                  window.open(video.link, '_blank');
                }
              }}>
              <div className='aspect-video bg-gradient-to-br from-green-300 to-green-500 rounded-xl overflow-hidden relative'>
                {video.thumbnail ? (
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className='w-full h-full object-cover transition-transform group-hover:scale-105'
                    onError={(e) => {
                      console.log('Thumbnail failed to load:', video.thumbnail);
                      // Hide the broken image and show fallback
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                
                {/* Fallback gradient - hidden by default, shown when image fails */}
                <div 
                  className='w-full h-full bg-gradient-to-br from-amber-400 to-amber-600 items-center justify-center'
                  style={{ display: video.thumbnail ? 'none' : 'flex' }}>
                  <div className='w-12 h-8 bg-amber-800 rounded transform rotate-12'></div>
                </div>
                
                {/* Play overlay */}
                <div className='absolute inset-0 bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all'>
                  <div className='w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform'>
                    <Play className='w-6 h-6 text-gray-800 ml-1' />
                  </div>
                </div>
                
                {/* Duration badge if available */}
                {video.duration && (
                  <div className='absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded'>
                    {video.duration}
                  </div>
                )}
              </div>
              
              <div className='mt-3'>
                <p className='text-sm text-gray-800 font-medium line-clamp-2 leading-relaxed group-hover:text-green-600 transition-colors'>
                  {video.title}
                </p>
                {video.description && (
                  <p className='text-xs text-gray-600 mt-1 line-clamp-2'>{video.description}</p>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
