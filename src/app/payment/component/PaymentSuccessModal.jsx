'use client';

import { Check, X } from 'lucide-react';

const PaymentSuccessModal = ({ isOpen, onClose, onBackToCart }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 bg-opacity-60 flex items-center justify-center z-[99999] p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-sm w-full mx-4 p-6 relative animate-in fade-in duration-200 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="flex justify-center mb-6 mt-2">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Pembayaran Berhasil!
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Terima kasih! Pembayaran Anda telah berhasil diproses. 
            Pesanan Anda sedang dalam tahap persiapan dan akan segera dikirim.
          </p>
        </div>

        {/* Payment Details */}
        <div className="bg-green-50 rounded-lg p-4 mb-6 border border-green-200">
          <div className="text-center">
            <p className="font-semibold text-gray-900 text-sm mb-1">Transaksi Berhasil</p>
            <p className="text-xs text-gray-600">Pesanan akan diproses dalam 1-2 hari kerja</p>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onBackToCart}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
        >
          Kembali ke Keranjang
        </button>

        {/* Bottom text */}
        <p className="text-center text-xs text-gray-500 mt-4">
          Detail pesanan telah dikirim ke email Anda
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccessModal;