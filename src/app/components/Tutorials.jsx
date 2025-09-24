import { Package, BookOpen, Star } from 'lucide-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getApiUrl } from '@/config/api';
import Image from 'next/image';
import { useAuth } from '@/contexts/auth-context';

export default function TutorialsComponent() {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { name, email } = useAuth();

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const response = await axios.get(getApiUrl('tutorials'));
        setTutorials(response.data);
        setLoading(false);
        // console.log(response.data);
      } catch (err) {
        setError('Failed to fetch tutorials');
        setLoading(false);
        console.error('Error fetching tutorials:', err);
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
            {tutorials.slice(0, 3).map((tutorial, index) => (
              <div
                key={index}
                className='bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-6 hover:shadow-lg transition-all'>
                <div
                  className='w-full h-32 bg-cover bg-center bg-no-repeat bg-white/50 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden'
                  style={{
                    // backgroundImage: `url(${tutorial.thumbnail})`,
                    backgroundImage: `url('https://images.unsplash.com/photo-1758274406801-53151bcb4af7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8')`,
                  }}>
                  {/* <Image src={tutorial.thumbnail} alt="tutorial image" fill className="object-contain p-4" /> */}
                  {/* <BookOpen className='w-16 h-16 text-blue-600' /> */}
                </div>
                <h3 className='font-semibold text-gray-800 mb-2'>{tutorial.title}</h3>
                <p className='text-sm text-gray-600'>{tutorial.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
