import { ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CategoriesComponent() {
  const categories = [
    {
      title: "Kardus",
      description: "Daur ulang kardus bekas",
      image: "https://images.unsplash.com/photo-1624137527136-66e631bdaa0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyZGJvYXJkJTIwYm94fGVufDB8fDB8fHww",
      bgColor: "bg-amber-50",
      textColor: "text-amber-700"
    },
    {
      title: "Fashion",
      description: "Kreasi baju hasil daur ulang",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      bgColor: "bg-green-50",
      textColor: "text-green-700"
    },
    {
      title: "DIY",
      description: "Kreasi barang daur ulang",
      image: "https://images.unsplash.com/photo-1522065893269-6fd20f6d7438?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fERJWXxlbnwwfHwwfHx8MA%3D%3D",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700"
    },
    {
      title: "Sepatu",
      description: "Fashion berkelanjutan",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&crop=center",
      bgColor: "bg-teal-50",
      textColor: "text-teal-700"
    },
    {
      title: "Elektronik",
      description: "Daur ulang gadget bekas",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700"
    },
    {
      title: "Furniture",
      description: "Renovasi furniture lama",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=60",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700"
    }
  ];

  return (
    <section className="py-20 bg-[rgba(241,248,233,1)]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-left text-gray-800 mb-4 max-w-lg">
          Temukan Barang Sesuai Kebutuhanmu
        </h2>
        
        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4 py-4 bg-transparent">
              {categories.map((category, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 transform hover:-translate-y-3 cursor-pointer h-full">
                    {/* Image Container */}
                    <div className="relative h-80 overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${category.image})`,
                        }}
                      />
                      {/* Overlay */}
                      {/* <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" /> */}
                      
                      {/* Category Badge */}
                      <div className="absolute bottom-6 left-6">
                        <div className={`${category.bgColor} ${category.textColor} px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm bg-opacity-90 shadow-lg`}>
                          {category.title}
                        </div>
                      </div>

                      {/* Arrow Button */}
                      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                          <ChevronRight className="w-5 h-5 text-gray-700" />
                        </div>
                      </div>

                      {/* Hover Overlay with Description */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                        <div className="p-6 text-white w-full">
                          <h3 className="text-xl font-bold mb-8">{category.title}</h3>
                          <p className="text-gray-200 text-sm">{category.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Section (minimal, visible on hover) */}
                    <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-16 bg-white transition-all duration-300 overflow-hidden">
                      <div className="p-4 flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Jelajahi kategori</span>
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 hover:cursor-pointer" />
            <CarouselNext className="right-4 hover:cursor-pointer" />
          </Carousel>
        </div>

        {/* Additional Navigation Hint
        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-2 text-gray-600">
            <span className="text-sm">Lihat semua kategori</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div> */}
      </div>
    </section>
  );
}