import { useRouter } from 'next/navigation';
import { Recycle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { useEffect } from 'react';
import { useAuth } from '@/contexts/auth-context';

export default function NavbarComponent({ isScrolled }) {
  const router = useRouter();
  const { name, email } = useAuth();

  const handleNavigation = path => {
    if (!name && !email) {
      router.push('/login');
    } else {
      router.push(path);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className='container mx-auto px-12 py-2'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <Link
              href='/'
              className='flex items-center space-x-2'>
              <div className='w-12 h-12 rounded-full flex items-center justify-center'>
                <Image
                  src={'/logo/eco-logo.png'}
                  alt='EcoMarket Logo'
                  width={100}
                  height={100}
                />
              </div>
              <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>EcoMarket</span>
            </Link>
          </div>

          <div className='hidden md:flex items-center space-x-8'>
            <button
              onClick={() => handleNavigation('/')}
              className={`font-bold hover:text-green-600 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>
              Beranda
            </button>
            <button
              onClick={() => handleNavigation('/store')}
              className={`font-bold hover:text-green-600 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>
              Marketplace
            </button>
            <button
              onClick={() => handleNavigation('/echomunity')}
              className={`font-bold hover:text-green-600 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>
              Echomunity
            </button>
            <button
              onClick={() => handleNavigation('/echojualan')}
              className={`font-bold hover:text-green-600 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>
              EchoJualan
            </button>
          </div>

          <div className='flex items-center space-x-4'>
            <Link
              href='/login'
              className={'px-4 py-2 text-sm font-semibold text-green-600 bg-white rounded-lg hover:bg-gray-50 transition-colors'}>
              Masuk
            </Link>
            <Link
              href='/register'
              className='px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors'>
              Daftar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
