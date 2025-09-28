import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();

  const handleNavigation = path => {
    router.push(path);
  };

  return (
    <div className='col-span-3 fixed left-0 top-28 w-80 h-[calc(100vh-8rem)] overflow-y-auto bg-gray-50 px-4'>
      <div className='bg-white rounded-xl shadow-sm border border-gray-100 mt-4'>
        <div className='p-6 border-b border-gray-100'>
          <h2 className='text-xl font-bold text-gray-900'>Echomunitas</h2>
          <p className='text-sm text-gray-500 mt-1'>Komunitas eco-friendly</p>
        </div>

        <div className='p-4'>
          <nav className='space-y-2'>
            <button
              onClick={() => handleNavigation('/store')}
              className='w-full text-left p-3 hover:bg-green-50 rounded-lg flex items-center gap-3 text-sm transition-colors'>
              <div className='w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center'>
                <span className='text-blue-600 text-sm'>🏪</span>
              </div>
              <span className='text-gray-700 font-medium'>Jelajahi barang</span>
            </button>

            <button className='w-full text-left p-3 bg-green-50 rounded-lg flex items-center gap-3 text-sm border-r-4 border-green-500'>
              <div className='w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center'>
                <span className='text-green-600 text-sm'>👥</span>
              </div>
              <span className='text-green-700 font-semibold'>Echomunitas</span>
            </button>

            <button
              onClick={() => handleNavigation('/store')}
              className='w-full text-left p-3 hover:bg-green-50 rounded-lg flex items-center gap-3 text-sm transition-colors'>
              <div className='w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center'>
                <span className='text-purple-600 text-sm'>🛒</span>
              </div>
              <span className='text-gray-700 font-medium'>Echojualan</span>
            </button>

            <button
              onClick={() => handleNavigation('/register-seller')}
              className='w-full text-left p-3 hover:bg-green-50 rounded-lg flex items-center gap-3 text-sm transition-colors'>
              <div className='w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center'>
                <span className='text-gray-600 text-sm'>📋</span>
              </div>
              <span className='text-gray-700 font-medium'>Daftar sebagai penjual</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
