'use client';

import React, { useState } from 'react';
import { Search, ShoppingCart, Bell, MessageCircle, Heart, MapPin, Plus, Mic, Edit, MessageSquare } from 'lucide-react';

import Image from 'next/image';

export default function EcoMarketChatbot() {
  const [chatInput, setChatInput] = useState('');
  const [activeChat, setActiveChat] = useState('liked');

  const chatHistory = [
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...'
  ];

  const recentChats = [
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...',
    'Rekomendasi tempat pensil...'
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-screen">

        {/* Echobot Section */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10  flex items-center justify-center">
              {/* <span className="text-white text-sm font-bold">🤖</span> */}
              <Image
                src="/echobot.svg"
                alt="Echobot Logo"
                width={300}
                height={300}
                // className="w-6 h-6"
              />
            </div>
            <div>
              <h2 className="font-bold text-gray-900">Echobot</h2>
            </div>
          </div>
          
          <div className="space-y-2">
            <button className="w-full text-left p-2 hover:bg-gray-50 rounded-lg flex items-center gap-3 text-sm">
              <Edit className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700">Chat Baru</span>
            </button>
            
            <button className="w-full text-left p-2 hover:bg-gray-50 rounded-lg flex items-center gap-3 text-sm">
              <MessageSquare className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700">Lihat History Chat</span>
            </button>
          </div>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Chat</h3>
              <p className="text-xs text-gray-600 mb-3">Chat yang disukai</p>
              <div className="space-y-1">
                {chatHistory.map((chat, index) => (
                  <button
                    key={`liked-${index}`}
                    onClick={() => setActiveChat(`liked-${index}`)}
                    className={`w-full text-left p-2 rounded-lg text-xs hover:bg-gray-50 transition-colors ${
                      activeChat === `liked-${index}` ? 'bg-gray-100' : ''
                    }`}
                  >
                    <span className="text-gray-700">{chat}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-600 mb-3">Chat terbaru</p>
              <div className="space-y-1">
                {recentChats.map((chat, index) => (
                  <button
                    key={`recent-${index}`}
                    onClick={() => setActiveChat(`recent-${index}`)}
                    className={`w-full text-left p-2 rounded-lg text-xs hover:bg-gray-50 transition-colors ${
                      activeChat === `recent-${index}` ? 'bg-gray-100' : ''
                    }`}
                  >
                    <span className="text-gray-700">{chat}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">

        {/* Chat Area with Centered Input */}
        <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 p-4">
          <div className="text-center max-w-md mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🤖</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Ada yang bisa aku bantu hari ini?</h1>
            <p className="text-gray-600 text-sm">Tanya apapun tentang produk ramah lingkungan di EcoMarket</p>
          </div>
          
          {/* Centered Chat Input */}
          <div className="w-full max-w-2xl">
            <div className="relative">
              <div className="flex items-center bg-white rounded-full border border-gray-200 shadow-sm focus-within:ring-2 focus-within:ring-green-500 focus-within:border-transparent">
                <button className="p-3 text-green-600 hover:bg-green-50 rounded-full transition-colors">
                  <Plus className="w-5 h-5" />
                </button>
                
                <input
                  type="text"
                  placeholder="Tanya kepada Echobot"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none"
                />
                
                <button className="p-3 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                  <Mic className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="text-xs text-gray-500 text-center mt-2">
              Echobot dapat membuat kesalahan. Periksa informasi penting.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}