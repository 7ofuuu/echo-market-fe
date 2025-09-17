'use client';

import StoreNavbar from '@/components/shared/Navbar';
import FloatingChat from '@/components/ui/floating-chat';

export default function StoreLayout({ children }) {
  return (
    <div className='min-h-screen bg-white'>
      <StoreNavbar />
      <main className='pt-32'>
        {children}
        <FloatingChat />
      </main>
    </div>
  );
}
