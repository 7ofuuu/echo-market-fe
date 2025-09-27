import { Plus } from 'lucide-react';

export default function StoryComponent() {
    return(
        <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
              <div className='flex gap-6 overflow-x-auto pb-2'>
                <div className='flex flex-col items-center min-w-0 cursor-pointer group'>
                  <div className='w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-3 relative group-hover:scale-105 transition-transform'>
                    <span className='text-white text-xl'>👤</span>
                    <div className='absolute bottom-0 right-0 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center border-3 border-white'>
                      <Plus className='w-4 h-4 text-white' />
                    </div>
                  </div>
                  <span className='text-xs text-gray-600 text-center font-medium'>Buat Cerita</span>
                </div>

                {['Riki', 'Sari', 'Ahmad', 'Lina', 'Budi'].map((name, index) => (
                  <div
                    key={index}
                    className='flex flex-col items-center min-w-0 cursor-pointer group'>
                    <div className='w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-105 transition-transform'>
                      <span className='text-white text-xl'>👤</span>
                    </div>
                    <span className='text-xs text-gray-600 text-center font-medium'>{name}</span>
                  </div>
                ))}
              </div>
            </div>
    )
}