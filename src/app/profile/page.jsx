'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';

import { useState, useEffect } from 'react';
import { User, Home, MapPin, Bell, Lock, ShoppingBag, Gift, Search, ShoppingCart, Heart, MessageCircle, Plus, Edit, Trash2, CreditCard, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';

import Profile from './components/profile';
import Bank from './components/bank';
import Address from './components/address';
import Notifications from './components/notification';

import StoreNavbar from '@/components/shared/Navbar';

export default function EchoMarketAccount() {
  const router = useRouter();
  const { name, email, setName, setEmail } = useAuth();
  
  useEffect(() => {
    // Check if user is logged in
    if (!name && !email) {
      router.push('/login');
    }
  }, [name, email, router]);

  const handleLogout = () => {
    // Clear auth context
    setName('');
    setEmail('');
    // Clear localStorage
    localStorage.removeItem('registerName');
    localStorage.removeItem('registerEmail');
    // Redirect to login
    router.push('/login');
  };

  const handleProfileUpdate = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNotificationToggle = key => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const menuItems = [
    { id: 'profile', label: 'Akun saya', icon: User },
    { id: 'bank', label: 'Bank', icon: CreditCard },
    { id: 'address', label: 'Alamat', icon: MapPin },
    { id: 'notifications', label: 'Pengaturan Notifikasi', icon: Bell },
    { id: 'privacy', label: 'Pengaturan Privasi', icon: Lock },
    { id: 'orders', label: 'Pesanan saya', icon: ShoppingBag },
    { id: 'vouchers', label: 'Voucher saya', icon: Gift },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <StoreNavbar />

      {/* Main Content */}
      <div className='max-w-6xl mx-auto pt-32 pb-4 py-6'>
        <Tabs
          defaultValue='profile'
          className='flex gap-6'>
          {/* Left Sidebar */}
          <div className='w-64 bg-white rounded-lg shadow-sm p-4 h-fit'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden'>
                <img
                  src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
                  alt='Profile'
                  className='w-full h-full object-cover'
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <User className='w-6 h-6 text-gray-500 hidden' />
              </div>
              <div>
                <p className='font-medium text-gray-800'>{name || 'Guest'}</p>
                <p className='text-sm text-gray-500'>{email}</p>
                <button className='text-green-600 text-sm flex items-center gap-1 hover:underline'>
                  <Edit className='w-3 h-3' />
                  Ubah profil
                </button>
              </div>
            </div>

            <TabsList className='flex flex-col h-auto bg-transparent p-0 space-y-1'>
              <h4 className='text-sm font-medium text-gray-500 mb-3 w-full text-left'>Akun</h4>
              {menuItems.map(item => {
                const Icon = item.icon;
                return (
                  <TabsTrigger
                    key={item.id}
                    value={item.id}
                    className='w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors justify-start data-[state=active]:bg-green-50 data-[state=active]:text-green-700 data-[state=active]:shadow-sm hover:bg-gray-100 hover:cursor-pointer bg-transparent'>
                    <Icon className='w-4 h-4' />
                    {item.label}
                  </TabsTrigger>
                );
              })}
              
              <div className="mt-4 pt-4 ">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors justify-start hover:cursor-pointer hover:bg-red-50 hover:text-red-700 text-red-600"
                >
                  <LogOut className="w-4 h-4" />
                  Keluar
                </button>
              </div>
            </TabsList>
          </div>

          {/* Content Area */}
          <div className='flex-1'>
            <TabsContent
              value='profile'
              className='mt-0'>
              <Profile />
            </TabsContent>

            <TabsContent
              value='bank'
              className='mt-0'>
              <Bank />
            </TabsContent>

            <TabsContent
              value='address'
              className='mt-0'>
              <Address />
            </TabsContent>

            <TabsContent
              value='notifications'
              className='mt-0'>
              <Notifications />
            </TabsContent>

            <TabsContent
              value='privacy'
              className='mt-0'>
              <div className='bg-white rounded-lg p-6'>
                <h3 className='text-lg font-medium mb-4'>Pengaturan Privasi</h3>
                <p className='text-gray-600'>Fitur pengaturan privasi akan segera tersedia.</p>
              </div>
            </TabsContent>

            <TabsContent
              value='orders'
              className='mt-0'>
              <div className='bg-white rounded-lg p-6'>
                <h3 className='text-lg font-medium mb-4'>Pesanan Saya</h3>
                <p className='text-gray-600'>Fitur pesanan akan segera tersedia.</p>
              </div>
            </TabsContent>

            <TabsContent
              value='vouchers'
              className='mt-0'>
              <div className='bg-white rounded-lg p-6'>
                <h3 className='text-lg font-medium mb-4'>Voucher Saya</h3>
                <p className='text-gray-600'>Fitur voucher akan segera tersedia.</p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
