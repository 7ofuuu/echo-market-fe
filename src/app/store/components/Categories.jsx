import {ChevronDown, Recycle } from 'lucide-react';


export default function Categories () {
  const categories = [
    { name: "Sepatu", icon: "👟", count: 3 },
    { name: "DIY", icon: "🔨", count: 1 },
    { name: "Fashion", icon: "👕", count: 4 },
    { name: "Kardus", icon: "📦", count: 1 },
    { name: "Sepatu", icon: "👟", count: 4 }
  ];

  return (
    <section className="py-8 col-span-2">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="flex gap-2 text-xl font-semibold text-gray-800">
            <Recycle className="w-6 h-6 text-green-600"/>
            Kategori
          </h2>
          <div className="flex items-center text-green-600 cursor-pointer">
            <span className="text-sm">Lihat semua</span>
            <ChevronDown className="w-4 h-4 ml-1" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-4 rounded-2xl text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-3xl mb-3">{category.icon}</div>
              <h3 className="font-medium text-gray-800 mb-1">{category.name}</h3>
              {/* <div className="text-xs text-gray-500">{category.count} items</div> */}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
          {categories.map((category, index) => (
            <div key={`second-${index}`} className="bg-white p-4 rounded-2xl text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-3xl mb-3">{category.icon}</div>
              <h3 className="font-medium text-gray-800 mb-1">{category.name}</h3>
              {/* <div className="text-xs text-gray-500">{category.count} items</div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};