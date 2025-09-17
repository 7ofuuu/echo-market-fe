'use client';

import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { setEmail: setAuthEmail, setName: setAuthName } = useAuth();
  const router = useRouter();

  const validateEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError('');

    // Validate name length
    if (name.length < 3) {
      setError('Nama harus minimal 3 karakter');
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      setError('Format email tidak valid');
      return;
    }

    setAuthName(name);
    setAuthEmail(email);
    router.push('/set-password');
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#f1f8e9]'>
      {/* Logo - Hidden on mobile */}
      <div className='hidden lg:flex lg:flex-1 lg:w-1/2 xl:w-2/5 items-center justify-center'>
        <Image
          src='/logo/EchoMarket-Logo.svg'
          alt='Echomarket Logo'
          width={400}
          height={400}
          className='w-[300px] h-[300px] xl:w-[400px] xl:h-[400px]'
          priority
        />
      </div>

      {/* Form Card */}
      <div className='flex-1 w-full max-w-md lg:max-w-full lg:h-full xl:w-2/5 flex justify-center bg-[url(/auth/register-background-1.svg)] bg-center bg-contain bg-no-repeat p-16'>
        <Card className='w-full max-w-[400px] h-full relative overflow-hidden shadow-xl border-0 flex flex-col justify-center'>
          <div className='absolute inset-0 bg-white/70'></div>
          <CardHeader className='text-center space-y-2 px-4 sm:px-6 relative z-10'>
            <CardTitle className='text-2xl'>Daftar Sekarang</CardTitle>
            <CardDescription>
              Sudah punya akun Echomarket?{' '}
              <Link
                href='/login'
                className='text-green-600 hover:underline'>
                Masuk
              </Link>
            </CardDescription>
          </CardHeader>

          <CardContent className='space-y-4 px-4 sm:px-6 pb-6 relative z-10'>
            <form
              onSubmit={handleSubmit}
              className='space-y-4'>
              {/* Social Login Buttons can remain here */}
              {/* Social Login Buttons */}
              <div className='space-y-3'>
                <Button
                  variant='outline'
                  className='w-full h-11 border-gray-300 hover:bg-gray-50 bg-white/90'>
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
                  className='w-full h-11 border-gray-300 hover:bg-gray-50 bg-white/90'>
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
                  <span className='bg-transparent px-2 text-green-600 text-sm'>atau</span>
                </div>
              </div>

              {/* Name Input */}
              <div className='space-y-1'>
                <Input
                  type='text'
                  placeholder='Nama Lengkap'
                  className='h-11 border-green-200 focus:border-green-500 bg-white/90'
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </div>

              {/* Email Input */}
              <div className='space-y-1'>
                <Input
                  type='email'
                  placeholder='Email'
                  className='h-11 border-green-200 focus:border-green-500 bg-white/90'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <p className='text-xs text-gray-500'>Contoh: email@echomarket.com</p>
              </div>

              {/* Error Message */}
              {error && <div className='text-red-500 text-sm text-center'>{error}</div>}

              {/* Register Button */}
              <Button
                type='submit'
                className='w-full h-11 bg-green-600 hover:bg-green-700 text-white'
                disabled={!email || !name}>
                Lanjut
              </Button>

              {/* Terms and Conditions */}
              <p className='text-xs text-center text-gray-500'>
                Dengan mendaftar, anda menyetujui
                <br />
                Syarat dan Ketentuan serta Kebijakan dan Privasi Echomarket
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}