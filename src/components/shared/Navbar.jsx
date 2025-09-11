'use client';

import { Search, ShoppingCart, Bell, MessageCircle, Heart, MapPin} from 'lucide-react';
import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'next/router';

export default function StoreNavbar () {

 const { name } = useAuth();

  return (
    <header className="bg-[rgba(241,248,233,1)] py-4 px-10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">E</span>
            </div>
            <span className="text-lg font-semibold text-gray-800">{name}</span>
          </div>
          
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Pencarian"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <ShoppingCart onClick={()=>handleCartClick()} className="w-6 h-6 text-gray-600 cursor-pointer hover:text-green-600" />
            <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-green-600" />
            <MessageCircle className="w-6 h-6 text-gray-600 cursor-pointer hover:text-green-600" />
            <Heart className="w-6 h-6 text-gray-600 cursor-pointer hover:text-green-600" />
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600">MK</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end items-center mt-4 text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-1" />
          <span>Bojongsoang, Bandung</span>
        </div>
      </div>
    </header>
  );
};