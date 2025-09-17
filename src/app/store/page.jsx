'use client';

import React from 'react';

// import StoreNavbar from './components/Navbar';
import StoreNavbar from '@/components/shared/Navbar';
import HeroBanner from './components/Banner';
import StoreFeatures from './components/Features';
import Categories from './components/Categories';
import StoreProducts from './components/Products';
import FlashSale from "./components/FlashSale";



export default function StorePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroBanner />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-10">
        <StoreFeatures />
        <Categories className="col-span-2" />
      </div>
      <FlashSale />
      <StoreProducts />
    </div>
  );
}