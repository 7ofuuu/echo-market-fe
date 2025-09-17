import { ShoppingBag, Globe, List, Bot } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function StoreFeatures() {
  const router = useRouter();

  const handleFeatureClick = (title) => {
    switch(title) {
      case 'Echomunitas':
        router.push('/comunity');
        break;
      case 'Echobot':
        router.push('/chat-bot'); // Changed to a different route
        break;
      case 'EchoJualan':
        router.push('/marketplace');
        break;
      case 'Daftar penjual':
        router.push('/sellers');
        break;
      default:
        // Optional: handle unknown features
        break;
    }
  };

  const features = [
    { icon: <Globe className="w-6 h-6" />, title: "Echomunitas", color: "bg-blue-50 text-blue-600" },
    { icon: <ShoppingBag className="w-6 h-6" />, title: "EchoJualan", color: "bg-green-50 text-green-600" },
    { icon: <List className="w-6 h-6" />, title: "Daftar penjual", color: "bg-gray-50 text-gray-600" },
    // { icon: <Bot className='w-6 h-6' />, title: 'Echobot', color: 'bg-purple-50 text-purple-600' },
  ];

  return (
    <section className='py-8'>
      <div className='container mx-auto px-6'>
        <h2 className='text-xl font-semibold text-gray-800 mb-6'>Fitur Echomarket</h2>
        <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => handleFeatureClick(feature.title)}
              className={`${feature.color} p-6 rounded-2xl text-center hover:shadow-lg transition-shadow cursor-pointer`}>
              <div className='flex justify-center mb-3'>{feature.icon}</div>
              <h3 className='font-medium text-sm'>{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}