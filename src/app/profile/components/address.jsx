import { useState } from 'react';
import { Plus, Home, X } from 'lucide-react';
import AddAddress from './add-address';

export default function Address() {
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: 'Fauzein',
      phone: '+62 888888888',
      address: 'Bojongsoang No 1, RT 12/ RW 01, Citeureup, Citeureup, Bandung, Jawa Barat, 40257',
      isPrimary: true,
      
    },
    {
      id: 2,
      name: 'Fauzein',
      phone: '+62 888888888',
      address: 'Bojongsoang No 1, RT 12/ RW 01, Citeureup, Citeureup, Bandung, Jawa Barat, 40257',
      isPrimary: false,
      
    },
  ]);
  return (
    <>
      {showAddAddress && (
        <div className="fixed inset-0 bg-black/35 bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl">
            <button 
              onClick={() => setShowAddAddress(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <AddAddress onClose={() => setShowAddAddress(false)} />
          </div>
        </div>
      )}
      <div className='bg-white rounded-lg p-6'>
        <div className='flex items-center justify-between mb-6'>
          <h3 className='text-lg font-medium'>Alamat Saya</h3>
          <button 
            onClick={() => setShowAddAddress(true)}
            className='bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition-colors'
          >
            <Plus className='w-4 h-4' />
            Tambah alamat
          </button>
        </div>

        {addresses.length === 0 ? (
          <div className='text-center py-12'>
            <div className='w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center'>
              <Home className='w-8 h-8 text-orange-500' />
            </div>
            <h4 className='text-lg font-medium mb-2'>Belum Ada Alamat Yang Kamu Tambah.</h4>
            <p className='text-gray-600 mb-6'>Ayo Daftarkan Alamatmu!</p>
            <button 
              onClick={() => setShowAddAddress(true)}
              className='bg-green-600 text-white px-6 py-2 rounded-md flex items-center gap-2 mx-auto hover:bg-green-700 transition-colors'
            >
              <Plus className='w-4 h-4' />
              Tambah alamat
            </button>
          </div>
        ) : (
          <div className='space-y-4'>
            {addresses.map(address => (
              <div
                key={address.id}
                className='border border-gray-200 rounded-lg p-4'>
                <div className='flex items-start justify-between'>
                  <div className='flex-1'>
                    <div className='flex items-center gap-2 mb-2'>
                      <p className='font-medium'>{address.name}</p>
                      <span className='text-sm text-gray-600'>|</span>
                      <p className='text-sm text-gray-600'>{address.phone}</p>
                    </div>
                    <p className='text-gray-600 text-sm mb-2'>{address.address}</p>
                    {address.isPrimary && <span className='inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded'>Utama</span>}
                  </div>
                  <div className='flex items-center gap-2'>
                    <button className='text-green-600 text-sm px-3 py-1 border border-green-600 rounded hover:bg-green-50 transition-colors'>Ubah</button>
                    <button className='text-gray-400 px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors'>Atur sebagai utama</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
