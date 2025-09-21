'use client';

import { useState, useEffect } from 'react';

export default function PaymentInfoCard({ orderId, amount }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const formatCurrency = (n) => `Rp ${Number(n).toLocaleString('id-ID')}`;

  if (!mounted) {
    return (
      <div className="bg-white rounded-2xl p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="flex justify-between items-start mb-8">
        <p className="text-gray-600">Order #{orderId}</p>
        <span className="px-4 py-1 bg-[#FDF6E3] text-[#997B1C] rounded-full text-sm">
          Menunggu Pembayaran
        </span>
      </div>
      
      <div className="flex flex-col items-center mb-8">
        <p className="text-gray-500 mb-2">
          Gunakan Aplikasi E-Wallet/Mbanking
        </p>
        <p className="text-[#40B825] text-4xl font-bold mb-1">{formatCurrency(amount)}</p>
        <p className="text-gray-500">Total Pembayaran</p>
      </div>
      
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Metode Pembayaran</span>
          <span className="text-gray-700">QRIS</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Toko</span>
          <span className="text-gray-700">Fauzein Store</span>
        </div>
      </div>
    </div>
  );
}
