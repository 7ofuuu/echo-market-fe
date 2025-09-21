'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

import PaymentInfoCard from '../component/PaymentInfoCard';
import BenefitsCard from '../component/BenefitsCard';
import QRCodeCard from '../component/QRCodeCard';

export default function PaymentPage() {
  const { orderId } = useParams();
  const router = useRouter();
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    // Move URL parameter reading to useEffect to avoid hydration mismatch
    const searchParams = new URLSearchParams(window.location.search);
    const urlAmount = searchParams.get('amount');
    setAmount(urlAmount || 0);
  }, []);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
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
    <div className="min-h-screen bg-[#EEF7EC] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side */}
          <div className="flex flex-col gap-6">
            <PaymentInfoCard orderId={orderId} amount={amount} />
            <BenefitsCard />
          </div>

          {/* Right Side - QR Code */}
          <div>
            <QRCodeCard orderId={orderId} timeLeft={timeLeft} />
          </div>
        </div>
      </div>
    </div>
  );
}
