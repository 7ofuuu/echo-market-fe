'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';

export default function FlashSale() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 40,
    seconds: 55
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  // Mock flash sale products
  const flashSaleProducts = [
    {
      id: 1,
      name: "Tempat pensil warna Faber Castell",
      price: "5.000",
      originalPrice: "15.000",
      image: "/api/placeholder/200/200",
      soldPercentage: 80,
      soldCount: "80% terjual"
    },
    {
      id: 2,
      name: "Tempat pensil warna Faber Castell",
      price: "5.000",
      originalPrice: "15.000",
      image: "/api/placeholder/200/200",
      soldPercentage: 80,
      soldCount: "80% terjual"
    },
    {
      id: 3,
      name: "Tempat pensil warna Faber Castell",
      price: "5.000",
      originalPrice: "15.000",
      image: "/api/placeholder/200/200",
      soldPercentage: 80,
      soldCount: "80% terjual"
    },
    {
      id: 4,
      name: "Tempat pensil warna Faber Castell",
      price: "5.000",
      originalPrice: "15.000",
      image: "/api/placeholder/200/200",
      soldPercentage: 80,
      soldCount: "80% terjual"
    }
  ];

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 2, minutes: 40, seconds: 55 }; // Reset timer
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num) => num.toString().padStart(2, '0');

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(flashSaleProducts.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(flashSaleProducts.length / 2)) % Math.ceil(flashSaleProducts.length / 2));
  };

  const FlashSaleCard = ({ product }) => (
    <div className="bg-white rounded-xl shadow-lg p-4 w-full min-w-[200px] mx-2">
      {/* Product Image */}
      <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
        <div className="w-16 h-12 bg-amber-600 rounded-lg flex items-center justify-center shadow-sm">
          <div className="grid grid-cols-6 gap-0.5 p-1.5">
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                className="w-1 h-2.5 bg-white rounded-sm"
                style={{
                  backgroundColor: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'][i % 6]
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <h3 className="font-medium text-gray-800 text-sm leading-tight">
          {product.name}
        </h3>
        
        <div className="flex items-center space-x-2">
          <span className="text-green-600 font-bold text-lg">Rp {product.price}</span>
          <span className="text-gray-400 line-through text-sm">Rp {product.originalPrice}</span>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${product.soldPercentage}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500">{product.soldCount}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 bg-green-600">
      <div className="w-[90%] max-w-7xl mx-auto">
        {/* Flash Sale Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-8 h-8 text-yellow-400 mr-3" />
            <h2 className="text-5xl font-bold text-white">
              FLASH SALE
            </h2>
          </div>
          
          {/* Countdown Timer */}
          <div className="inline-flex items-center justify-center">
            <div className="bg-green-700 border-2 border-green-500 rounded-lg px-6 py-3">
              <div className="text-3xl font-bold text-white">
                {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
              </div>
            </div>
          </div>
        </div>

        {/* Product Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 -ml-6"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 -mr-6"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Products Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 50}%)` }}
            >
              {flashSaleProducts.map((product) => (
                <FlashSaleCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
