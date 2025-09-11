'use client';

import { ArrowRight } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function HeroComponent ()  {
  const router = useRouter();

  const handleExploreClick = () => {
    router.push('/store');
  };

  return (
    <section className='relative min-h-screen flex items-center bg-[url(/landing-page/Hero-bg.svg)] bg-no-repeat bg-cover bg-center'>
      <div className='absolute inset-0 bg-black/25'></div>

      <div className='container mx-auto px-6 relative'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='text-left '>
            <div className='bg-white/10 backdrop-blur-sm shadow-2xl px-8 py-2 rounded-xl'>
              <h1 className='text-5xl lg:text-[40px] text-green-900 font-bold leading-tight mb-1'>Ubah Barang Tak Terpakai Jadi Keuntungan</h1>
              <p className='text-xl text-white  leading-relaxed'>Daur Ulang. Dapat Poin. Dukung Bumi</p>
            </div>
            <button
              onClick={() => handleExploreClick()}
              className='flex items-center bg-green-600 text-white px-8 py-2 mt-4 rounded-lg text-lg font-semibold hover:bg-green-700 hover:cursor-pointer transition-all transform hover:scale-105 shadow-lg'>
              Jelajahi Barang{' '}
              <ArrowRight
                width={20}
                height={20}
                className=' ml-2 mt-1'
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};