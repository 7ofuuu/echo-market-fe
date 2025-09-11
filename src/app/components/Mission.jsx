import { BookOpen, Users, Recycle, Globe, ShoppingBag, Leaf } from 'lucide-react';

export default function MissionComponent() {
  return (
    <section className='grid lg:grid-cols-2 text-white relative overflow-hidden'>
      {/* EchoJualan Card - Left Side */}
      <div className='relative h-[620px] bg-cover bg-center group overflow-hidden bg-[url(/landing-page/echojualan.svg)]'>
        {/* Main content */}
        <div className='absolute bottom-8 left-8 right-8'>
          <h3 className='text-2xl font-bold mb-2 text-white drop-shadow-lg'>EchoJualan</h3>
          <p className='text-gray-200 text-sm mb-4 drop-shadow'>Pelajari tips dan cara untuk menjual produk ramah lingkungan</p>
          <button className='bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/30 text-sm font-medium'>Gabung sekarang</button>
        </div>
      </div>

      {/* Echomunitas Card - Right Side */}
      <div className='relative h-[620px] bg-cover bg-center group overflow-hidden bg-[url(/landing-page/echomunitas.svg)]'>
        {/* Main content */}
        <div className='absolute bottom-8 left-8 right-8'>
          <h3 className='text-2xl font-bold mb-2 text-white drop-shadow-lg'>Echomunitas</h3>
          <p className='text-gray-200 text-sm mb-4 drop-shadow'>Interaksi seru, peluang tanpa batas.</p>
          <button className='bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/30 text-sm font-medium'>Gabung sekarang</button>
        </div>
      </div>

      {/* <div className="grid lg:grid-cols-2 gap-0">
         
        </div> */}

      {/* <div className="container mx-auto px-6 relative z-10">
       
      </div> */}
    </section>
  );
}
