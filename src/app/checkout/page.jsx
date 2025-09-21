'use client';

import StoreNavbar from '@/components/shared/Navbar';

import AddressCard from './components/AddressCard'; 
import ProductCard from './components/ProductCard';
import PaymentMethodCard from './components/PaymentMethodCard';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#EEF7EC]">
      <StoreNavbar />
      <div className="max-w-6xl mx-auto pt-32 pb-10 px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <AddressCard/>
          <ProductCard />
        </div>

        <div className="lg:col-span-1">
          <PaymentMethodCard/>
        </div>
      </div>
    </div>
  );
}


