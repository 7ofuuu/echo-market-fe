import ProductCard from './ui/ProductCard';

export default function StoreProducts () {
  const products = [
    { id: "prod001", name: "Tempat Pensil Kayu Minimalis", price: "12.500", rating: "4.8", sold: "8.2rb" },
    { id: "prod002", name: "Tempat Pensil Kain Flanel", discountPrice: "8.900", originalPrice: "15.000", rating: "4.7", sold: "12.5rb" },
    { id: "prod003", name: "Tempat Pensil Plastik Transparan", price: "7.500", rating: "4.5", sold: "5.3rb" },
    { id: "prod004", name: "Tempat Pensil Rotan Handmade", price: "18.000", rating: "4.9", sold: "3.7rb" },
    { id: "prod005", name: "Tempat Pensil Kanvas", discountPrice: "11.000", originalPrice: "18.000", rating: "4.6", sold: "9.1rb" },
    { id: "prod006", name: "Tempat Pensil Silikon", price: "9.800", rating: "4.3", sold: "6.8rb" },
    { id: "prod007", name: "Tempat Pensil Metal Premium", price: "25.000", rating: "4.9", sold: "2.4rb" },
    { id: "prod008", name: "Tempat Pensil Kertas Kraft", discountPrice: "6.500", originalPrice: "12.000", rating: "4.4", sold: "15.9rb" },
    { id: "prod009", name: "Tempat Pensil Rajut", price: "14.200", rating: "4.8", sold: "7.3rb" },
    { id: "prod010", name: "Tempat Pensil Bambu Eco Friendly", discountPrice: "16.500", originalPrice: "22.000", rating: "4.9", sold: "4.6rb" },
    // { id: "prod011", name: "Tempat Pensil Keramik Lukis Tangan", price: "32.000", rating: "4.9", sold: "1.8rb" }
];

  return (
    <section className="py-8">
      <div className="w-[90%] container mx-auto ">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Rekomendasi Untukmu</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {products.map((product, index) => (
            <ProductCard 
              key={index} 
              product={product} 
              isDiscounted={product.discountPrice !== undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};