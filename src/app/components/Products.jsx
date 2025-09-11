import { Package, BookOpen, Star } from "lucide-react";
import Image from "next/image";

export default function ProductsComponent () {
  const products = [
    { name: "Tempat Pensil", price: "Rp. 10.000", rating: 4.5 },
    { name: "Tempat Pensil", price: "Rp. 10.000", rating: 4.8 },
    { name: "Tempat Pensil", price: "Rp. 10.000", rating: 4.7 },
    { name: "Tempat Pensil", price: "Rp. 10.000", rating: 4.6 }
  ];

  return (
    <section className="py-20 bg-[rgba(241,248,233,1)]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Produk Trending</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center relative overflow-hidden">
                {/* <Image
                  src={'/echojualan.svg'}
                  alt="foto produk"
                  fill
                  className="object-cover"
                /> */}
                <Package className="w-16 h-16 text-blue-600" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-green-600 font-bold text-lg mb-2">{product.price}</p>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">EchoTutor</h2>
          <p className="text-gray-600 mb-8">Pelajari cara membuat produk ramah lingkungan</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="w-full h-32 bg-white/50 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                  <Image
                    src={'/echojualan.svg'}
                    alt="tutorial image"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Tutorial Kreatif</h3>
                <p className="text-sm text-gray-600">Pelajari cara membuat kerajinan dari barang bekas</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};