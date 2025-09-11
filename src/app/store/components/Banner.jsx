'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Recycle } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';

export default function StoreBanner() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [imageError, setImageError] = useState(false);

  const bannerSlides = [
    {
      id: 1,
      title: 'Belanja Sekarang, Bumi Ikut Senang!',
      description: 'Pilih barang daur ulang berkualitas, belanja cerdas sambil jaga lingkungan.',
      buttonText: 'Cek Sekarang',
      gradient: 'from-[rgba(58,126,61,1)] to-[rgba(170,255,14,1)]',
      imageSrc: '/store/banner-1.svg',
    },
    {
      id: 2,
      title: 'Hemat Belanja, Ramah Lingkungan',
      description: 'Dapatkan harga spesial untuk produk pilihan, hematnya terasa nyata.',
      buttonText: 'Cek Sekarang',
      gradient: 'from-blue-500 to-cyan-400',
      imageSrc: '/store/banner-1.svg',
    },
    {
      id: 3,
      title: 'Belanja di EchoMall, Lebih Aman & Nyaman!',
      description: 'Nikmati produk pilihan dari penjual terpercaya dengan standar kualitas terbaik.',
      buttonText: 'Cek Sekarang',
      gradient: 'from-purple-500 to-pink-400',
      imageSrc: '/store/banner-1.svg',
    },
  ];

  const scrollNext = useCallback(() => {
    if (api && typeof api.scrollNext === 'function') {
      try {
        api.scrollNext();
      } catch (error) {
        console.error('Scroll error:', error);
      }
    }
  }, [api]);

  useEffect(() => {
    let isMounted = true;
    let intervalId = null;

    if (!api || !isMounted) {
      return;
    }

    try {
      setCurrent(api.selectedScrollSnap());
      
      const handleSelect = () => {
        if (isMounted) {
          setCurrent(api.selectedScrollSnap());
        }
      };

      api.on("select", handleSelect);

      intervalId = setInterval(() => {
        if (isMounted) {
          scrollNext();
        }
      }, 6000);

      return () => {
        isMounted = false;
        if (intervalId) clearInterval(intervalId);
        if (api && typeof api.off === 'function') {
          api.off("select", handleSelect);
        }
      };
    } catch (error) {
      console.error('Carousel setup error:', error);
    }
  }, [api, scrollNext]);

  return (
    <section className="flex justify-center mt-6">
      <div className="w-[90%]">
        <Carousel 
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }} 
          className="w-full"
        >
          <CarouselContent>
            {bannerSlides.map((slide) => (
              <CarouselItem key={slide.id}>
                <div className={`w-full bg-gradient-to-r ${slide.gradient} rounded-2xl px-14 text-white relative overflow-hidden min-h-[300px]`}>
                  <div className="flex items-center justify-between h-full">
                    <div className="max-w-md">
                      <h1 className="text-3xl font-bold mb-4">{slide.title}</h1>
                      <p className="text-white/90 mb-6">{slide.description}</p>
                      <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg backdrop-blur-sm border border-white/30 transition-all duration-300">
                        {slide.buttonText}
                      </button>
                    </div>
                    <div className="hidden md:flex items-center justify-center">
                      <Image
                        src={imageError ? "/fallback-store.svg" : slide.imageSrc}
                        alt="hero image"
                        width={300}
                        height={300}
                        onError={() => setImageError(true)}
                      />
                    </div>
                  </div>
                  
                </div>
                  {/* <div className="absolute bottom-6  flex space-x-2">
                    {bannerSlides.map((_, index) => (
                      <Recycle  
                        key={index}
                        size={20}
                        className={`transition-all duration-300 ${
                          current === index ? 'text-white' : 'text-white/50'
                        }`}
                      />
                    ))}
                  </div> */}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-white/20 border-white/30 text-white hover:bg-white/30" />
          <CarouselNext className="right-2 bg-white/20 border-white/30 text-white hover:bg-white/30" />
        </Carousel>
      </div>
    </section>
  );
}