'use client';

import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { REGEXP_ONLY_DIGITS} from "input-otp"

import { Minus } from 'lucide-react';

export default function OtpVerificationPage() {
  const [otp, setOtp] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  // Countdown timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsResendDisabled(false);
    }
  }, [timeLeft]);

  const handleResendOtp = () => {
    setTimeLeft(30);
    setIsResendDisabled(true);
    // Add your resend OTP logic here
  };

  return (
    <div className='min-h-screen flex justify-center items-center bg-[#f1f8e9] bg-[url(/login-background.svg)] bg-contain bg-center bg-no-repeat '>
      {/* Main Content */}
      <div className='flex gap-4  items-center justify-center p-24'>
        <Card className='w-full max-w-md'>
          <CardHeader className='text-center space-y-2'>
            <CardTitle className='text-2xl'>Masukkan kode OTP</CardTitle>
            <CardDescription>Kode OTP telah dikirim ke email kamu, silakan masukkan untuk verifikasi.</CardDescription>
          </CardHeader>

          <CardContent className='space-y-6'>
            {/* OTP Input */}
            <div className='flex justify-center'>
              <InputOTP
                maxLength={4}
                value={otp}
                onChange={value => setOtp(value)}
                pattern={REGEXP_ONLY_DIGITS}>
                <InputOTPGroup className={'gap-3'}>
                  <InputOTPSlot
                    placeholder={<Minus />}
                    index={0}
                    className='w-20 h-20 text-2xl text-green-600'
                  />
                  <InputOTPSlot
                    placeholder={<Minus />}
                    index={1}
                    className='w-20 h-20 text-2xl text-green-600'
                  />
                  <InputOTPSlot
                    placeholder={<Minus />}
                    index={2}
                    className='w-20 h-20 text-2xl text-green-600'
                  />
                  <InputOTPSlot
                    placeholder={<Minus />}
                    index={3}
                    className='w-20 h-20 text-2xl text-green-600'
                  />
                </InputOTPGroup>
              </InputOTP>
            </div>

            {/* Resend OTP */}
            <div className='text-center text-sm'>
              Belum dapat kode?{' '}
              <Button
                variant='link'
                className='p-0 text-green-600'
                disabled={isResendDisabled}
                onClick={handleResendOtp}>
                Kirim ulang {timeLeft > 0 ? `00:${timeLeft.toString().padStart(2, '0')}` : 'sekarang'}
              </Button>
            </div>

            {/* Verify Button */}
            <Button className='w-full bg-green-600 hover:bg-green-700'>Verifikasi OTP</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}