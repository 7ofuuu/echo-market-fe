import { Package, BookOpen, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_CONFIG } from '@/config/api';

export default function TutorialsComponent() {
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

  return (
    <section className='py-8 bg-[rgba(241,248,233,1)]'>
      <div className='container mx-auto px-6'>
        <div className='mt-10 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>EchoTutor</h2>
          <p className='text-gray-600 mb-8'>Pelajari cara membuat produk ramah lingkungan</p>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {loading ? (
              // Loading skeleton
              Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className='bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-6'>
                  <div className='w-full h-32 bg-gray-200 rounded-lg animate-pulse mb-4'></div>
                  <div className='h-4 bg-gray-200 rounded animate-pulse mb-2'></div>
                  <div className='h-3 bg-gray-200 rounded animate-pulse'></div>
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
              tutorials.slice(0, 3).map((tutorial, index) => (
                <div
                  key={tutorial.id || index}
                  className='bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer'
                  onClick={() => {
                    if (tutorial.link) {
                      window.open(tutorial.link, '_blank');
                    }
                  }}>
                  <div
                    className='w-full h-32 bg-cover bg-center bg-no-repeat bg-white/50 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden'
                    style={{
                      backgroundImage: tutorial.thumbnail
                        ? `url(${tutorial.thumbnail})`
                        : `url('https://images.unsplash.com/photo-1758274406801-53151bcb4af7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8')`,
                    }}>
                    {/* Fallback icon if no thumbnail */}
                    {!tutorial.thumbnail && <BookOpen className='w-16 h-16 text-blue-600' />}
                  </div>
                  <h3 className='font-semibold text-gray-800 mb-2'>{tutorial.title}</h3>
                  <p className='text-sm text-gray-600'>{tutorial.description}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
