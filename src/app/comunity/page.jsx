'use client';

import React, { useState } from 'react';
import { MessageCircle, Plus, Camera, Video, ThumbsUp, Share, MoreHorizontal, Play } from 'lucide-react';

import StoreNavbar from '@/components/shared/Navbar';
import Sidebar from './components/Sidebar';
import ChallengeCard from './components/ChallengeCard';

export default function EcoMarketCommunity() {
  const [postInput, setPostInput] = useState('');

  const posts = [
    {
      id: 1,
      author: 'Fauzein',
      avatar: '👤',
      content: 'Halo teman teman, rekomendasi aku cara membuat daur ulang dari kardus bekas',
      image: '/api/placeholder/400/300',
      likes: '1K',
      comments: '60',
      shares: '10',
    },
    {
      id: 2,
      author: 'Lian',
      avatar: '👤',
      content: 'Halo teman teman, Aku mau share tentang kerajinan yang aku buat hari ini nih. Bahan bahannya... Lihat selengkapnya',
      images: ['/api/placeholder/150/150', '/api/placeholder/150/150', '/api/placeholder/150/150', '/api/placeholder/150/150', '/api/placeholder/150/150'],
      likes: '1K',
      comments: '60',
      shares: '10',
    },
    {
      id: 3,
      author: 'Wawo',
      avatar: '👤',
      content: 'Halo teman teman, Aku mau share tentang kerajinan yang aku buat hari ini nih',
      image: '/api/placeholder/400/300',
      likes: null,
      comments: null,
      shares: null,
    },
  ];

  const tutorialVideos = [
    {
      title: 'Sejak tau cara ini kardus sepatu ga langsung dibuang',
      thumbnail: '/api/placeholder/200/120',
    },
    {
      title: 'Cara membuat pot dari botol bekas',
      thumbnail: '/api/placeholder/200/120',
    },
    {
      title: 'DIY tempat pensil dari kardus',
      thumbnail: '/api/placeholder/200/120',
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      <StoreNavbar />

      <div className='max-w-7xl mx-auto pt-32 pb-8 px-4'>
        <div className='grid grid-cols-12 gap-6'>
          {/* Left Sidebar - Navigation */}
          {/* <div className='col-span-3'>
            <div className='bg-white rounded-xl shadow-sm border border-gray-100 sticky top-32'>
              <div className='p-6 border-b border-gray-100'>
                <h2 className='text-xl font-bold text-gray-900'>Echomunitas</h2>
                <p className='text-sm text-gray-500 mt-1'>Komunitas eco-friendly</p>
              </div>

              <div className='p-4'>
                <nav className='space-y-2'>
                  <button className='w-full text-left p-3 hover:bg-green-50 rounded-lg flex items-center gap-3 text-sm transition-colors'>
                    <div className='w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center'>
                      <span className='text-blue-600 text-sm'>🏪</span>
                    </div>
                    <span className='text-gray-700 font-medium'>Jelajahi barang</span>
                  </button>

                  <button className='w-full text-left p-3 hover:bg-green-50 rounded-lg flex items-center gap-3 text-sm transition-colors'>
                    <div className='w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center'>
                      <span className='text-orange-600 text-sm'>💬</span>
                    </div>
                    <span className='text-gray-700 font-medium'>Pesan</span>
                  </button>

                  <button className='w-full text-left p-3 bg-green-50 rounded-lg flex items-center gap-3 text-sm border-r-4 border-green-500'>
                    <div className='w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center'>
                      <span className='text-green-600 text-sm'>👥</span>
                    </div>
                    <span className='text-green-700 font-semibold'>Echomunitas</span>
                  </button>

                  <button className='w-full text-left p-3 hover:bg-green-50 rounded-lg flex items-center gap-3 text-sm transition-colors'>
                    <div className='w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center'>
                      <span className='text-purple-600 text-sm'>🛒</span>
                    </div>
                    <span className='text-gray-700 font-medium'>Echojualan</span>
                  </button>

                  <button className='w-full text-left p-3 hover:bg-green-50 rounded-lg flex items-center gap-3 text-sm transition-colors'>
                    <div className='w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center'>
                      <span className='text-gray-600 text-sm'>📋</span>
                    </div>
                    <span className='text-gray-700 font-medium'>Daftar sebagai penjual</span>
                  </button>
                </nav>
              </div>
            </div>
          </div> */}
          <Sidebar />
          {/* Main Feed */}
          <div className='col-span-6 space-y-6'>
            {/* Post Creation */}
            <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
              <div className='flex gap-4'>
                <div className='w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center'>
                  <span className='text-white text-lg'>👤</span>
                </div>
                <div className='flex-1'>
                  <input
                    type='text'
                    placeholder='Apa yang ingin pikiranmu hari ini?'
                    value={postInput}
                    onChange={e => setPostInput(e.target.value)}
                    className='w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500'
                  />
                  <div className='flex justify-between items-center mt-4'>
                    <div className='flex gap-6'>
                      <button className='flex items-center gap-2 text-gray-600 hover:text-green-600 text-sm font-medium transition-colors'>
                        <Camera className='w-5 h-5' />
                        <span>Tambahkan Foto</span>
                      </button>
                      <button className='flex items-center gap-2 text-gray-600 hover:text-green-600 text-sm font-medium transition-colors'>
                        <Video className='w-5 h-5' />
                        <span>Tambahkan Video</span>
                      </button>
                    </div>
                    <button className='bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium'>
                      <Plus className='w-5 h-5' />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Section */}
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

            {/* EchoTutor Section */}
            <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center'>
                  <span className='text-white text-lg'>📚</span>
                </div>
                <div>
                  <h3 className='font-bold text-gray-900 text-lg'>EchoTutor</h3>
                  <p className='text-sm text-gray-500'>Tutorial dan tips eco-friendly</p>
                </div>
              </div>

              <div className='grid grid-cols-3 gap-4'>
                {tutorialVideos.map((video, index) => (
                  <div
                    key={index}
                    className='relative group cursor-pointer'>
                    <div className='aspect-video bg-gradient-to-br from-green-300 to-green-500 rounded-xl overflow-hidden relative'>
                      <div className='w-full h-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center'>
                        <div className='w-12 h-8 bg-amber-800 rounded transform rotate-12'></div>
                      </div>
                      <div className='absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center'>
                        <div className='w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center'>
                          <Play className='w-6 h-6 text-gray-800 ml-1' />
                        </div>
                      </div>
                    </div>
                    <div className='mt-3'>
                      <p className='text-sm text-gray-800 font-medium line-clamp-2 leading-relaxed'>{video.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Posts */}
            {posts.map(post => (
              <div
                key={post.id}
                className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden'>
                {/* Post Header */}
                <div className='p-6 flex items-center justify-between'>
                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center'>
                      <span className='text-white text-lg'>{post.avatar}</span>
                    </div>
                    <div>
                      <span className='font-semibold text-gray-900'>{post.author}</span>
                      <p className='text-sm text-gray-500'>2 jam yang lalu</p>
                    </div>
                  </div>
                  <button className='text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-50 rounded-lg transition-colors'>
                    <MoreHorizontal className='w-5 h-5' />
                  </button>
                </div>

                {/* Post Content */}
                <div className='px-6 pb-4'>
                  <p className='text-gray-900 leading-relaxed'>{post.content}</p>
                </div>

                {/* Post Images */}
                <div className='px-6 pb-6'>
                  {post.images ? (
                    <div className='grid grid-cols-3 gap-2 rounded-xl overflow-hidden'>
                      {post.images.slice(0, 4).map((img, index) => (
                        <div
                          key={index}
                          className='aspect-square bg-gradient-to-br from-yellow-400 to-orange-500 relative'>
                          {index === 3 && post.images.length > 4 ? (
                            <div className='w-full h-full bg-black bg-opacity-60 flex items-center justify-center'>
                              <span className='text-white font-bold text-xl'>+{post.images.length - 3}</span>
                            </div>
                          ) : (
                            <div className='w-full h-full flex items-center justify-center'>
                              <div className='w-12 h-8 bg-yellow-600 rounded'></div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : post.image ? (
                    <div className='aspect-video bg-gradient-to-br from-purple-300 to-pink-400 rounded-xl overflow-hidden'>
                      <div className='w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center'>
                        <div className='grid grid-cols-6 gap-2 p-6'>
                          {Array.from({ length: 24 }, (_, i) => (
                            <div
                              key={i}
                              className={`w-4 h-10 rounded-sm ${i % 4 === 0 ? 'bg-red-400' : i % 4 === 1 ? 'bg-green-400' : i % 4 === 2 ? 'bg-blue-400' : 'bg-yellow-400'}`}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>

                {/* Post Actions */}
                {post.likes && (
                  <div className='px-6 py-4 border-t border-gray-100'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-8'>
                        <button className='flex items-center gap-2 text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors'>
                          <ThumbsUp className='w-5 h-5' />
                          <span>{post.likes} menyukai</span>
                        </button>
                        <button className='flex items-center gap-2 text-gray-600 hover:text-green-600 text-sm font-medium transition-colors'>
                          <MessageCircle className='w-5 h-5' />
                          <span>{post.comments} komentar</span>
                        </button>
                        <button className='flex items-center gap-2 text-gray-600 hover:text-green-600 text-sm font-medium transition-colors'>
                          <Share className='w-5 h-5' />
                          <span>{post.shares} dibagikan</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Comment Input */}
                <div className='px-6 pb-6'>
                  <div className='flex gap-4 border-t border-gray-100 pt-4'>
                    <button className='text-blue-600 text-sm hover:underline font-medium'>Suka</button>
                    <button className='text-gray-600 text-sm hover:underline font-medium'>Komentar postingan ini</button>
                    <button className='text-gray-600 text-sm hover:underline font-medium ml-auto'>Bagikan</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar - Tantangan */}

          <ChallengeCard />
        </div>
      </div>
    </div>
  );
}