import { MapPin } from 'lucide-react';

export default function AddressCard({ name, phone, address }) {
  return (
    <div className='bg-white rounded-2xl p-5 border'>
      <div className='flex items-start gap-3'>
        <div className='w-8 h-8 rounded-full bg-green-100 flex items-center justify-center'>
          <MapPin className='w-4 h-4 text-green-600' />
        </div>
        <div className='flex-1'>
          <div className='flex items-center justify-between'>
            <div className='text-sm text-gray-600'>Alamat pengiriman</div>
            <button className='text-green-600 text-sm'>Ubah</button>
          </div>
          <div className='mt-2 text-sm text-gray-700'>Bojongsoang No 1, RT 12/ RW 01, Citeurup, Citeurup, Bandung, Jawa Barat, 40257</div>
          <div className='mt-1 text-sm font-medium'>Fauzein | +62 8888888888</div>
        </div>
      </div>
    </div>
  );
}
