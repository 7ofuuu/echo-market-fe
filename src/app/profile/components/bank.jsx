import { useState } from 'react';
import {  Plus } from 'lucide-react';

export default function Bank() {
  const [cards, setCards] = useState([
    // {
    //   id: 1,
    //   bank: 'BRI',
    //   number: '*** ***** ***** 453',
    //   type: 'Kartu kredit atau debit',
    // },
  ]);

  return (
    <>
      <div className='bg-white rounded-lg p-6'>
        <div className='flex items-center justify-between mb-6'>
          <h3 className='text-lg font-medium'>Kartu kredit atau debit</h3>
          <button className='bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition-colors'>
            <Plus className='w-4 h-4' />
            Tambah kartu baru
          </button>
        </div>

        {cards.length === 0 ? (
          <div className='text-center py-12'>
            <p className='text-gray-500'>Belum terdapat kartu kredit / debit terdaftar</p>
          </div>
        ) : (
          <div className='space-y-4'>
            {cards.map(card => (
              <div
                key={card.id}
                className='border border-gray-200 rounded-lg p-4'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-8 bg-blue-600 rounded text-white text-xs font-bold flex items-center justify-center'>BRI</div>
                    <div>
                      <p className='font-medium'>{card.bank}</p>
                      <p className='text-gray-600 text-sm'>{card.number}</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-2'>
                    <button className='text-green-600 text-sm px-3 py-1 border border-green-600 rounded hover:bg-green-50 transition-colors'>Hapus</button>
                    <button className='text-green-600 text-sm px-3 py-1 border border-green-600 rounded hover:bg-green-50 transition-colors'>Atur Batas Harian</button>
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
