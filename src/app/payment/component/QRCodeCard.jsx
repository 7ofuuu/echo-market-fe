'use client';

import { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';

export default function QRCodeCard({ orderId, timeLeft }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (!mounted) {
    return (
      <div className="bg-white rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-8">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-8">
        Scan Kode QR Berikut
      </h2>
      <div className="flex flex-col items-center">
        <div className="w-[280px] h-[280px] border-2 border-[#40B825] rounded-lg p-4 mb-4">
          <QRCode
            size={248}
            value={`https://echomarket.id/payment/${orderId}`}
            viewBox={`0 0 248 248`}
            className="w-full h-full"
          />
        </div>
        <p className="text-[#40B825] text-xl font-semibold">{formatTime(timeLeft)}</p>
      </div>
    </div>
  );
}
