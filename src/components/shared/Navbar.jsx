'use client';

import { Search, ShoppingCart, Bell, MessageCircle, Heart, MapPin} from 'lucide-react';
import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { UserRound } from 'lucide-react';

export default function StoreNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const router = useRouter();
  const { name } = useAuth();

  const getInitials = name => {
    if (!name) return <UserRound className='w-4 h-4 text-black' />;
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-gray-50 py-4 px-10 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className='container mx-auto px-6'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <div
              onClick={() => router.push('/store')}
              className='w-10 h-10 rounded-full flex items-center justify-center cursor-pointer'>
              {/* <span className='text-white text-sm font-bold'>E</span> */}
              <Image
                src='/logo/eco-logo.png'
                alt='EchoMarket Logo'
                width={100}
                height={100}
                className='object-contain'
              />
            </div>
            <span className='text-lg font-semibold text-gray-800'>EchoMarket</span>
          </div>

          <div className='flex-1 max-w-md mx-8'>
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input
                type='text'
                placeholder='Pencarian'
                className='w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
              />
            </div>
          </div>

          <div className='flex items-center space-x-4'>
            <ShoppingCart
              onClick={() => router.push('/shoping-cart')}
              className='w-6 h-6 text-gray-600 cursor-pointer hover:text-green-600'
            />
            <Bell className='w-6 h-6 text-gray-600 cursor-pointer hover:text-green-600' />
            <MessageCircle className='w-6 h-6 text-gray-600 cursor-pointer hover:text-green-600' />
            <Heart
              onClick={() => router.push('/wishlist')}
              className='w-6 h-6 text-gray-600 cursor-pointer hover:text-green-600'
            />
            <div
              onClick={() => router.push('/profile')}
              className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-200 transition-colors'>
              <span className='text-sm font-medium text-green-700'>{getInitials(name)}</span>
            </div>
          </div>
        </div>

        <div className='flex justify-end items-center mt-4 text-sm text-gray-600'>
          <MapPin className='w-4 h-4 mr-1' />
          <span>Bojongsoang, Bandung</span>
        </div>
      </div>
    </header>
  );
};