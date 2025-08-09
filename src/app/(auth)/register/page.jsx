'use client';

import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='min-h-screen flex flex-col bg-[#f1f8e9]'>
      {/* Register Form */}
      <div className='flex-1 flex flex-col lg:flex-row items-center justify-center p-4 sm:p-6 lg:p-8 gap-8'>
        {/* Logo - Hidden on mobile */}
        <div className='hidden lg:flex lg:w-1/2 xl:w-2/5 items-center justify-center'>
          <Image
            src='/EchoMarket-Logo.svg'
            alt='Echomarket Logo'
            width={400}
            height={400}
            className='w-[300px] h-[300px] xl:w-[400px] xl:h-[400px]'
            priority
          />
        </div>

        {/* Form Card */}
        <div className='w-full max-w-md lg:w-1/2 xl:w-2/5 flex justify-center'>
          <Card className='w-full max-w-[400px]'>
            <CardHeader className='text-center space-y-2 px-4 sm:px-6'>
              <CardTitle className='text-2xl'>Daftar Sekarang</CardTitle>
              <CardDescription>
                Sudah punya akun Echomarket?{' '}
                <Link href='/login' className='text-green-600 hover:underline'>
                  Masuk
                </Link>
              </CardDescription>
            </CardHeader>

            <CardContent className='space-y-4 px-4 sm:px-6 pb-6'>
              {/* Social Login Buttons */}
              <div className='space-y-3'>
                <Button
                  variant='outline'
                  className='w-full h-11 border-gray-300 hover:bg-gray-50'
                >
                  <div className='flex items-center justify-center gap-2'>
                    <Image
                      src='/google-logo.svg'
                      alt='Google'
                      width={20}
                      height={20}
                    />
                    <span>Google</span>
                  </div>
                </Button>

                <Button
                  variant='outline'
                  className='w-full h-11 border-gray-300 hover:bg-gray-50'
                >
                  <div className='flex items-center justify-center gap-2'>
                    <Image
                      src='/facebook-logo.svg'
                      alt='Facebook'
                      width={20}
                      height={20}
                    />
                    <span>Facebook</span>
                  </div>
                </Button>
              </div>

              {/* Divider */}
              <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-green-200'></div>
                </div>
                <div className='relative flex justify-center'>
                  <span className='bg-white px-2 text-green-600 text-sm'>atau</span>
                </div>
              </div>

              {/* Email Input */}
              <div className='space-y-1'>
                <Input
                  type='email'
                  placeholder='Email'
                  className='h-11 border-green-200 focus:border-green-500'
                />
                <p className='text-xs text-gray-500'>Contoh: email@Echomarket.com</p>
              </div>

              {/* Register Button */}
              <Button
                className='w-full h-11 bg-green-600 hover:bg-green-700 text-white'
              >
                Daftar
              </Button>

              {/* Terms and Conditions */}
              <p className='text-xs text-center text-gray-500'>
                Dengan mendaftar, anda menyetujui
                <br />
                Syarat dan Ketentuan serta Kebijakan dan Privasi Echomarket
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}