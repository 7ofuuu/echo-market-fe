import React, { useState } from 'react';
import Image from 'next/image';
import { X, Send } from 'lucide-react';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');

  return (
    <div className="fixed bottom-20 right-4 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[360px] bg-white rounded-lg shadow-lg overflow-hidden mb-2">
          {/* Header */}
          <div className="bg-[#40B825] p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/echobot.svg"
                alt="Echobot"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <div>
                <h3 className="text-white font-semibold">Echobot</h3>
                <p className="text-white/80 text-sm">Teman Belanja Kamu</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Area */}
          <div className="h-[300px] overflow-y-auto p-4 bg-gray-50">
            {/* Chat messages will go here */}
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="mb-4">
                <Image
                  src="/echobot.svg"
                  alt="Echobot"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </div>
              <h4 className="text-gray-800 font-semibold mb-2">
                Ada yang bisa aku bantu hari ini?
              </h4>
              <p className="text-gray-600 text-sm max-w-[250px]">
                Tanya produk ramah lingkungan, Pelajari lebih lanjut
              </p>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t">
            <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Ketik pesan anda..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-sm"
              />
              <button className="text-[#40B825]">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <div className="relative right-12 -bottom-10">
        {/* Green background circle */}
        <div className="absolute -inset-1 bg-[#40B825] rounded-full animate-pulse"></div>
        
        {/* Button with white background */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors border-2 border-[#40B825]"
        >
          <Image
            src="/echobot.svg"
            alt="Echobot"
            width={28}
            height={28}
            className="w-7 h-7"
          />
        </button>
      </div>
    </div>
  );
}
