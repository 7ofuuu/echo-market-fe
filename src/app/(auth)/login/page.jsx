'use client';

import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='min-h-screen flex flex-col bg-[rgba(241,248,233,1)]'>

      {/* Login Form */}
      <div className='flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8'>
        <div className='w-full max-w-sm sm:max-w-md md:w-2/6 lg:max-w-lg xl:max-w-xl flex flex-col gap-6'>
          <Card className='w-full'>
            <CardHeader className='text-center px-4 sm:px-6'>
              <CardTitle className='text-lg sm:text-xl'>Masuk Sekarang</CardTitle>
              <CardDescription className='text-sm sm:text-base'>
                Belum punya akun Echomarket?{' '}
                <Link
                  href='/register'
                  className='text-green-600 hover:underline'>
                  Daftar
                </Link>
              </CardDescription>
            </CardHeader>
            <CardContent className='px-4 sm:px-6'>
              <form>
                <div className='grid gap-4'>
                  <div className='grid gap-3'>
                    <div className='grid gap-1'>
                      <Input
                        id='email'
                        type='email'
                        placeholder='Email'
                        className='border-green-600 focus:border-green-500 focus-visible:ring-green-500 h-10 sm:h-11'
                        required
                      />
                      <span className='text-xs text-slate-600'>Contoh: email@Echomarket.com</span>
                    </div>
                    <div className='grid gap-1'>
                      <div className='relative'>
                        <Input
                          id='password'
                          type={showPassword ? 'text' : 'password'}
                          placeholder='Password'
                          required
                          className='border-green-600 focus:border-green-500 focus-visible:ring-green-500 h-10 sm:h-11 pr-10'
                        />

                        <button
                          type='button'
                          tabIndex={-1}
                          className='absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground p-1'
                          onClick={() => setShowPassword(v => !v)}
                          aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}>
                          {showPassword ? <EyeOff className='w-4 h-4 sm:w-5 sm:h-5 text-slate-400' /> : <Eye className='w-4 h-4 sm:w-5 sm:h-5 text-slate-400' />}
                        </button>
                      </div>
                      <span className='text-xs text-slate-600'>Masukan Password Kamu</span>
                    </div>
                    <Button
                      type='submit'
                      className='w-full bg-white font-bold text-green-600 border border-green-600 hover:bg-green-600 hover:text-white hover:cursor-pointer mt-2 h-10 sm:h-11 text-sm sm:text-base'
                      disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Spinner variant='secondary' /> <p>Loading</p>
                        </>
                      ) : (
                        'Selanjutnya'
                      )}
                    </Button>
                    <Link
                      href='/forgot-password'
                      className='text-green-600 text-xs sm:text-sm text-center hover:underline mt-1'>
                      Lupa Password?
                    </Link>
                  </div>

                  <div className='after:border-[rgba(76,175,80,0.4)] relative text-center text-xs sm:text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t'>
                    <span className='bg-white text-green-600 relative z-10 px-2'>atau</span>
                  </div>

                  <div className='space-y-3 sm:space-y-4'>
                    {/* Google Button */}
                    <Button
                      variant='outline'
                      className='w-full border-gray-300 hover:bg-gray-50 hover:cursor-pointer h-10 sm:h-11'>
                      <div className='flex items-center justify-center gap-2'>
                        <Image
                          src='/google-logo.svg'
                          alt='Google Icon'
                          width={16}
                          height={16}
                          className='sm:w-5 sm:h-5'
                        />
                        <span className='text-sm sm:text-base'>Google</span>
                      </div>
                    </Button>
                    {/* Facebook Button */}
                    <Button
                      variant='outline'
                      className='w-full border-gray-300 hover:bg-gray-50 hover:cursor-pointer h-10 sm:h-11'>
                      <div className='flex items-center justify-center gap-2'>
                        <Image
                          src='/facebook-logo.svg'
                          alt='Facebook Icon'
                          width={16}
                          height={16}
                          className='sm:w-5 sm:h-5'
                        />
                        <span className='text-sm sm:text-base'>Facebook</span>
                      </div>
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}