'use client';

import React, { useState, useEffect } from 'react';
import { Recycle, ShoppingBag, Users, BookOpen, ArrowRight, Heart, Star, Shield, Package, Truck } from 'lucide-react';

import NavbarComponent from './components/Navbar';
import HeroComponent from './components/Hero';
import CategoriesComponent from './components/Categories';
import MissionComponent from './components/Mission';
import ProductsComponent from './components/Products';
import TutorialsComponent from './components/Tutorials';
import NewsletterComponent from './components/NewsLetter';
import FooterComponent from './components/Footer';

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='min-h-screen '>
      <NavbarComponent isScrolled={isScrolled} />
      <main className='bg-black'>
        <HeroComponent />
        <CategoriesComponent />
        <MissionComponent />
        <ProductsComponent />
        <TutorialsComponent />
      </main>
      <FooterComponent />
    </div>
  );
}
