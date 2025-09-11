'use client';

import React, { useState } from 'react';
import { Search, ShoppingCart, Bell, MessageCircle, Heart, MapPin, Plus, Camera, Video, TrendingUp, ThumbsUp, Share, MoreHorizontal } from 'lucide-react';

import StoreNavbar from '@/components/shared/Navbar';

export default function EcoMarketCommunity() {
  const [postInput, setPostInput] = useState('');

  const trendingHashtags = [
    '#TongsampahDIY',
    '#DIYKece',
    '#banggaDIY',
    '#selamatkanbumi',
    '#banggaDIY',
    '#banggaDIY',
    '#TongsampahDIY',
    '#selamatkanbumi'
  ];

  const videoTrending = [
    '#selamatkanbumi',
    '#banggaDIY',
    '#banggaDIY',
    '#banggaDIY',
    '#banggaDIY',
    '#banggaDIY',
    '#banggaDIY',
    '#selamatkanbumi'
  ];

  const posts = [
    {
      id: 1,
      author: 'Fauzein',
      avatar: '👤',
      content: 'Halo teman teman, rekomendasi aku cara membuat daur ulang dari kardus bekas',
      image: '/api/placeholder/400/300',
      likes: '1K',
      comments: '60',
      shares: '10'
    },
    {
      id: 2,
      author: 'Lian',
      avatar: '👤',
      content: 'Halo teman teman, Aku mau share tentang kerajinan yang aku buat hari ini nih. Bahan bahannya... Lihat selengkapnya',
      images: [
        '/api/placeholder/150/150',
        '/api/placeholder/150/150',
        '/api/placeholder/150/150',
        '/api/placeholder/150/150',
        '/api/placeholder/150/150'
      ],
      likes: '1K',
      comments: '60',
      shares: '10'
    },
    {
      id: 3,
      author: 'Wawo',
      avatar: '👤',
      content: 'Halo teman teman, Aku mau share tentang kerajinan yang aku buat hari ini nih',
      image: '/api/placeholder/400/300',
      likes: null,
      comments: null,
      shares: null
    }
  ];

  const tutorialVideos = [
    {
      title: 'Sejak tau cara ini kardus sepatu ga langsung dibuang'
    },
    {
      title: 'Sejak tau cara ini kardus sepatu ga langsung dibuang'
    },
    {
      title: 'Sejak tau cara ini kardus sepatu ga langsung dibuang'
    }
  ];

  return (
    <div className="min-h-screen bg-[rgba(241,248,233,1)]">
        <StoreNavbar />

      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-4 gap-6">
        {/* Left Sidebar - Navigation */}
        <div className="col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-screen flex flex-col">
            <div className="p-4 border-b border-gray-200 flex-shrink-0">
              <h2 className="text-lg font-bold text-gray-900">Echomunitas</h2>
            </div>
            
            <div className="overflow-y-auto flex-1">
              <nav className="p-2">
                <div className="space-y-1">
                  <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center">
                      <span className="text-blue-600 text-xs">🏪</span>
                    </div>
                    <span className="text-gray-700">Jelajahi barang</span>
                  </button>
                  
                  <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 bg-orange-100 rounded flex items-center justify-center">
                      <span className="text-orange-600 text-xs">👤</span>
                    </div>
                    <span className="text-gray-700">Pesan</span>
                  </button>
                  
                  <button className="w-full text-left p-3 bg-green-50 rounded-lg flex items-center gap-3 text-sm border-r-2 border-green-500">
                    <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center">
                      <span className="text-green-600 text-xs">👥</span>
                    </div>
                    <span className="text-green-700 font-medium">Echomunitas</span>
                  </button>
                  
                  <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 bg-purple-100 rounded flex items-center justify-center">
                      <span className="text-purple-600 text-xs">🛒</span>
                    </div>
                    <span className="text-gray-700">Echojualan</span>
                  </button>
                  
                  <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-gray-600 text-xs">📋</span>
                    </div>
                    <span className="text-gray-700">Daftar sebagai penjual</span>
                  </button>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3 px-3">Kategori</h3>
                  <div className="space-y-1">
                    {['DIY', 'Fashion', 'Kardus', 'Sepatu', 'Plastik', 'Mainan Bekas', 'Aksesoris', 'Aksesoris', 'Aksesoris', 'Aksesoris', 'Aksesoris'].map((category, index) => (
                      <button
                        key={index}
                        className="w-full text-left p-2 hover:bg-gray-50 rounded-lg flex items-center gap-3 text-sm"
                      >
                        <div className="w-4 h-4 text-gray-500">🏷️</div>
                        <span className="text-gray-700">{category}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Main Feed */}
        <div className="col-span-2 space-y-6">
          {/* Post Creation */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">👤</span>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Apa yang ingin pikiranmu hari ini?"
                  value={postInput}
                  onChange={(e) => setPostInput(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <div className="flex justify-between items-center mt-3">
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-green-600 text-sm">
                      <Camera className="w-4 h-4" />
                      <span>Tambahkan Foto</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-green-600 text-sm">
                      <Video className="w-4 h-4" />
                      <span>Tambahkan Video</span>
                    </button>
                  </div>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex gap-4 overflow-x-auto">
              <div className="flex flex-col items-center min-w-0 cursor-pointer">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-2 relative">
                  <span className="text-white text-lg">👤</span>
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                    <Plus className="w-3 h-3 text-white" />
                  </div>
                </div>
                <span className="text-xs text-gray-700 text-center">Buat Cerita</span>
              </div>
              
              <div className="flex flex-col items-center min-w-0 cursor-pointer">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-2">
                  <span className="text-white text-lg">👤</span>
                </div>
                <span className="text-xs text-gray-700 text-center">Riki</span>
              </div>
              
              <div className="flex flex-col items-center min-w-0 cursor-pointer">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-2">
                  <span className="text-white text-lg">👤</span>
                </div>
                <span className="text-xs text-gray-700 text-center">Riki</span>
              </div>
            </div>
          </div>

          {/* EchoTutor Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs">📚</span>
              </div>
              <h3 className="font-bold text-gray-900">EchoTutor</h3>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {tutorialVideos.map((video, index) => (
                <div key={index} className="relative group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-pink-300 to-pink-500 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-brown-400 to-brown-600 flex items-center justify-center">
                      <div className="w-8 h-6 bg-amber-700 rounded transform rotate-12"></div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs text-gray-700 line-clamp-2">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Posts */}
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
              {/* Post Header */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">{post.avatar}</span>
                  </div>
                  <span className="font-medium text-gray-900">{post.author}</span>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              {/* Post Content */}
              <div className="px-4 pb-3">
                <p className="text-gray-900 text-sm mb-3">{post.content}</p>
              </div>

              {/* Post Images */}
              <div className="px-4 pb-4">
                {post.images ? (
                  <div className="grid grid-cols-3 gap-2">
                    {post.images.slice(0, 4).map((img, index) => (
                      <div key={index} className="aspect-square bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg overflow-hidden">
                        {index === 3 && post.images.length > 4 ? (
                          <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                            <span className="text-white font-bold">+{post.images.length - 3}</span>
                          </div>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="w-8 h-6 bg-yellow-600 rounded"></div>
                          </div>
                        )}
                      </div>
                    ))}
                    {post.images.length === 5 && (
                      <div className="aspect-square bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">+1</span>
                      </div>
                    )}
                  </div>
                ) : post.image ? (
                  <div className="aspect-video bg-gradient-to-br from-purple-300 to-pink-400 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                      <div className="grid grid-cols-6 gap-1 p-4">
                        {Array.from({ length: 24 }, (_, i) => (
                          <div key={i} className={`w-3 h-8 rounded-sm ${
                            i % 4 === 0 ? 'bg-red-400' :
                            i % 4 === 1 ? 'bg-green-400' :
                            i % 4 === 2 ? 'bg-blue-400' : 'bg-yellow-400'
                          }`}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              {/* Post Actions */}
              {post.likes && (
                <div className="px-4 py-3 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 text-sm">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{post.likes} menyukai</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-600 hover:text-green-600 text-sm">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments} komentar</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-600 hover:text-green-600 text-sm">
                        <Share className="w-4 h-4" />
                        <span>{post.shares} dibagikan</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Comment Input */}
              <div className="px-4 pb-4">
                <div className="flex gap-2 border-t border-gray-100 pt-3">
                  <button className="text-blue-600 text-sm hover:underline">Suka</button>
                  <button className="text-gray-600 text-sm hover:underline">Komentar postingan ini</button>
                  <button className="text-gray-600 text-sm hover:underline ml-auto">Bagikan</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar - Trending */}
        <div className="col-span-1 space-y-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-gray-600" />
              <h3 className="font-bold text-gray-900">Trending</h3>
            </div>
            
            <div className="space-y-2">
              {trendingHashtags.map((hashtag, index) => (
                <button
                  key={index}
                  className="block w-full text-left text-blue-600 hover:text-blue-800 text-sm py-1"
                >
                  {hashtag}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center gap-2 mb-4">
              <Video className="w-5 h-5 text-gray-600" />
              <h3 className="font-bold text-gray-900">Video Trending</h3>
            </div>
            
            <div className="space-y-2">
              {videoTrending.map((hashtag, index) => (
                <button
                  key={index}
                  className="block w-full text-left text-blue-600 hover:text-blue-800 text-sm py-1"
                >
                  {hashtag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}