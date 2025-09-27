import {Check, Gift, Flame, Leaf, TreePine } from 'lucide-react';


export default function ChallengeCard() {
    return (
      <div className='col-span-3 fixed right-0 top-32 w-80 h-[calc(100vh-8rem)] overflow-y-auto pr-2 space-y-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 bg-gray-50 px-4'>
        {/* Tantangan Header */}
        <div className='bg-green-50 rounded-xl p-6'>
          <h2 className='text-2xl font-bold text-black mb-2'>Tantangan</h2>
          <p className='text-sm text-gray-600'>Selesaikan Misi untuk rewards!</p>
        </div>

        {/* Streak Card */}
        <div className='bg-yellow-50 rounded-xl p-4 border border-yellow-200'>
          <div className='flex justify-center items-center gap-3 mb-2'>
            <span className='text-2xl'>1</span>
            <Flame className='w-6 h-6 text-orange-500' />
          </div>
          <p className='text-sm text-gray-700'>Belum ada streak, yuk buat langkah pertamamu!</p>
        </div>

        {/* Daily Missions */}
        <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
          <div className='flex items-center gap-3 mb-6'>
            <Leaf className='w-6 h-6 text-green-600' />
            <h3 className='font-bold text-gray-900 text-lg'>Misi harian</h3>
          </div>

          <div className='space-y-4'>
            {/* Mission 1 - Completed */}
            <div className='border border-gray-200 rounded-lg p-4'>
              <div className='flex items-center justify-between mb-3'>
                <div>
                  <h4 className='font-semibold text-gray-900 text-sm'>Beli produk ramah lingkungan</h4>
                  <p className='text-xs text-gray-600 mt-1'>Beli minimal 1 produk Echomarket</p>
                </div>
                <Check className='w-5 h-5 text-green-600' />
              </div>

              <div className='w-full bg-gray-200 rounded-full h-2 mb-3'>
                <div
                  className='bg-green-600 h-2 rounded-full'
                  style={{ width: '100%' }}></div>
              </div>
              <p className='text-xs text-gray-600 mb-2'>1/1</p>

              <div className='flex items-center gap-2 mb-3'>
                <Gift className='w-4 h-4 text-green-600' />
                <span className='text-xs text-green-600 font-medium'>Hadiah Telah diperoleh</span>
              </div>

              <button className='w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium'>Klaim Hadiah</button>
            </div>

            {/* Mission 2 - In Progress */}
            <div className='border border-gray-200 rounded-lg p-4'>
              <div className='flex items-center justify-between mb-3'>
                <div className='flex-1'>
                  <h4 className='font-semibold text-gray-900 text-sm'>Berbagi di Echomunitas</h4>
                  <p className='text-xs text-gray-600 mt-1'>Posting 1 konten di komunitas</p>
                </div>
                <div className='bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium'>+1 Voucher</div>
              </div>

              <div className='w-full bg-gray-200 rounded-full h-2 mb-3'>
                <div
                  className='bg-green-600 h-2 rounded-full'
                  style={{ width: '0%' }}></div>
              </div>
              <p className='text-xs text-gray-600 mb-2'>0/1</p>

              <div className='flex items-center gap-2'>
                <Gift className='w-4 h-4 text-green-600' />
                <span className='text-xs text-gray-600'>Voucher Diskon Rp 5.000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Missions */}
        <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
          <div className='flex items-center gap-3 mb-6'>
            <TreePine className='w-6 h-6 text-green-600' />
            <h3 className='font-bold text-gray-900 text-lg'>Misi Mingguan</h3>
          </div>

          <div className='space-y-4'>
            {/* Mission 1 - Completed */}
            <div className='border border-gray-200 rounded-lg p-4'>
              <div className='flex items-center justify-between mb-3'>
                <div>
                  <h4 className='font-semibold text-gray-900 text-sm'>Beli produk ramah lingkungan</h4>
                  <p className='text-xs text-gray-600 mt-1'>Beli minimal 1 produk Echomarket</p>
                </div>
                <Check className='w-5 h-5 text-green-600' />
              </div>

              <div className='w-full bg-gray-200 rounded-full h-2 mb-3'>
                <div
                  className='bg-green-600 h-2 rounded-full'
                  style={{ width: '100%' }}></div>
              </div>
              <p className='text-xs text-gray-600 mb-2'>1/1</p>

              <div className='flex items-center gap-2 mb-3'>
                <Gift className='w-4 h-4 text-green-600' />
                <span className='text-xs text-green-600 font-medium'>Hadiah Telah diperoleh</span>
              </div>

              <button className='w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium'>Klaim Hadiah</button>
            </div>

            {/* Mission 2 - In Progress */}
            <div className='border border-gray-200 rounded-lg p-4'>
              <div className='flex items-center justify-between mb-3'>
                <div className='flex-1'>
                  <h4 className='font-semibold text-gray-900 text-sm'>Berbagi di Echomunitas</h4>
                  <p className='text-xs text-gray-600 mt-1'>Posting 1 konten di komunitas</p>
                </div>
                <div className='bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium'>+1 Voucher</div>
              </div>

              <div className='w-full bg-gray-200 rounded-full h-2 mb-3'>
                <div
                  className='bg-green-600 h-2 rounded-full'
                  style={{ width: '0%' }}></div>
              </div>
              <p className='text-xs text-gray-600 mb-2'>0/1</p>

              <div className='flex items-center gap-2'>
                <Gift className='w-4 h-4 text-green-600' />
                <span className='text-xs text-gray-600'>Voucher Diskon Rp 5.000</span>
              </div>
            </div>

            {/* Mission 3 - In Progress */}
            <div className='border border-gray-200 rounded-lg p-4'>
              <div className='flex items-center justify-between mb-3'>
                <div className='flex-1'>
                  <h4 className='font-semibold text-gray-900 text-sm'>Berbagi di Echomunitas</h4>
                  <p className='text-xs text-gray-600 mt-1'>Posting 1 konten di komunitas</p>
                </div>
                <div className='bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium'>+1 Voucher</div>
              </div>

              <div className='w-full bg-gray-200 rounded-full h-2 mb-3'>
                <div
                  className='bg-green-600 h-2 rounded-full'
                  style={{ width: '0%' }}></div>
              </div>
              <p className='text-xs text-gray-600 mb-2'>0/1</p>

              <div className='flex items-center gap-2'>
                <Gift className='w-4 h-4 text-green-600' />
                <span className='text-xs text-gray-600'>Voucher Diskon Rp 5.000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}