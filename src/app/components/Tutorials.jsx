import { Package, BookOpen, Star } from 'lucide-react';
import axios from 'axios';
import { useEffect, useState } from 'react';

import Image from 'next/image';

export default function TutorialsComponent() {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/tutorials');
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

  // const tutorials = [
  //   {
  //     title: 'Kardus',
  //     description: 'Daur ulang kardus bekas',
  //     image: 'https://images.unsplash.com/photo-1624137527136-66e631bdaa0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyZGJvYXJkJTIwYm94fGVufDB8fDB8fHww',
  //     bgColor: 'bg-amber-50',
  //     textColor: 'text-amber-700',
  //   },
  //   {
  //     title: 'Fashion',
  //     description: 'Kreasi baju hasil daur ulang',
  //     image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D',
  //     bgColor: 'bg-green-50',
  //     textColor: 'text-green-700',
  //   },
  //   {
  //     title: 'DIY',
  //     description: 'Kreasi barang daur ulang',
  //     image: 'https://images.unsplash.com/photo-1522065893269-6fd20f6d7438?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fERJWXxlbnwwfHwwfHx8MA%3D%3D',
  //     bgColor: 'bg-yellow-50',
  //     textColor: 'text-yellow-700',
  //   },
  //   {
  //     title: 'Sepatu',
  //     description: 'Fashion berkelanjutan',
  //     image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&crop=center',
  //     bgColor: 'bg-teal-50',
  //     textColor: 'text-teal-700',
  //   },
  //   {
  //     title: 'Elektronik',
  //     description: 'Daur ulang gadget bekas',
  //     image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60',
  //     bgColor: 'bg-blue-50',
  //     textColor: 'text-blue-700',
  //   },
  //   {
  //     title: 'Furniture',
  //     description: 'Renovasi furniture lama',
  //     image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=60',
  //     bgColor: 'bg-purple-50',
  //     textColor: 'text-purple-700',
  //   },
  // ];

  return (
    <section className='py-8 bg-[rgba(241,248,233,1)]'>
      <div className='container mx-auto px-6'>
        <div className='mt-10 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>EchoTutor</h2>
          <p className='text-gray-600 mb-8'>Pelajari cara membuat produk ramah lingkungan</p>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {tutorials.map((tutorial, index) => (
              <div
                key={index}
                className='bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-6 hover:shadow-lg transition-all'>
                <div
                  className='w-full h-32 bg-cover bg-center bg-white/50 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden'
                  style={{
                    backgroundImage: `url(${tutorial.thumbnail})`,
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
