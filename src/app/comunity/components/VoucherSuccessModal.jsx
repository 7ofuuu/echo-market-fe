'use client';

import { X, Check } from 'lucide-react';

const VoucherSuccessModal = ({ isOpen, onClose, voucherType = 'Daily', voucherValue = '10.000' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center  p-4 ">
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
            Voucher Berhasil Diklaim!
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Selamat! Anda telah berhasil mengklaim voucher {voucherType} senilai{' '}
            <span className="font-semibold text-green-600">Rp {voucherValue}</span>.{' '}
            Voucher dapat dilihat di halaman profil Anda.
          </p>
        </div>

        {/* Voucher Details */}
        <div className="bg-green-50 rounded-lg p-4 mb-6 border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-900 text-sm">Voucher {voucherType}</p>
              <p className="text-xs text-gray-600">Berlaku hingga 30 hari</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-green-600">Rp {voucherValue}</p>
              <p className="text-xs text-gray-500">Diskon</p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onClose}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
        >
          Selanjutnya
        </button>

        {/* Bottom text */}
        <p className="text-center text-xs text-gray-500 mt-4">
          Voucher akan otomatis tersimpan di akun Anda
        </p>
      </div>
    </div>
  );
};

export default VoucherSuccessModal;