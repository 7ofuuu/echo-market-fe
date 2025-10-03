'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useCheckout } from '@/contexts/checkout-context';

import PaymentInfoCard from '../component/PaymentInfoCard';
import BenefitsCard from '../component/BenefitsCard';
import QRCodeCard from '../component/QRCodeCard';
import PaymentSuccessModal from '../component/PaymentSuccessModal';

export default function PaymentPage() {
  const { orderId } = useParams();
  const router = useRouter();
  const { total } = useCheckout();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Calculate total amount including shipping
  const totalAmount = total + 19400;
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='min-h-screen bg-[#EEF7EC] py-8 px-4'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* Left Side */}
          <div className='flex flex-col gap-6'>
            <PaymentInfoCard orderId={orderId} />
            <BenefitsCard />
          </div>

          {/* Right Side - QR Code */}
          <div>
            <QRCodeCard
              orderId={orderId}
              timeLeft={timeLeft}
            />
          </div>
        </div>

        {/* Konfirmasi Pembayaran Button */}
        <div className='mt-8 flex justify-center'>
          <button
            onClick={() => setShowSuccessModal(true)}
            className='bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl'>
            Konfirmasi Pembayaran
          </button>
        </div>

        {/* Payment Success Modal */}
        <PaymentSuccessModal
          isOpen={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
          onBackToCart={() => {
            setShowSuccessModal(false);
            router.push('/shoping-cart');
          }}
        />
      </div>
    </div>
  );
}
