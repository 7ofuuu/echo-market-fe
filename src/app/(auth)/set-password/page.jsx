'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'next/navigation';

export default function SetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { name, email } = useAuth(); // Get name and email from context
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    // 1. Validate passwords match
    if (password !== confirmPassword) {
      setError('Password dan konfirmasi password tidak cocok.');
      return;
    }

    setIsLoading(true);

    try {
      // Password validation
      if (password.length < 8) {
        setError('Password harus minimal 8 karakter');
        return;
      }

      // Check for at least one number and one letter
      if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
        setError('Password harus mengandung minimal satu huruf dan satu angka');
        return;
      }

      // 2. Prepare the request body
      const requestBody = {
        name: name,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
        role: 'customer', // Set default role to user
      };

      // 3. Make the API call
      const response = await fetch('http://127.0.0.1:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      // 4. Handle the response
      if (!response.ok) {
        let errorMessage = 'Terjadi kesalahan. Silakan coba lagi.';

        if (data.errors) {
          // Handle validation errors from Laravel
          const firstError = Object.values(data.errors)[0];
          errorMessage = Array.isArray(firstError) ? firstError[0] : firstError;
        } else if (data.message) {
          errorMessage = data.message;
        }

        setError(errorMessage);
        throw new Error(errorMessage);
      }

      // 5. Handle success
      // Clear stored registration data from localStorage
      localStorage.removeItem('registerName');
      localStorage.removeItem('registerEmail');

      // Show success message and redirect to login
      alert('Registrasi berhasil! Silakan login dengan akun baru Anda.');
      router.push('/login');
    } catch (err) {
      // Handle network errors or errors from the !response.ok check
      console.error('Registration failed:', err);
      // The error state is already set if it's an API error
      if (!error) {
        setError('Tidak dapat terhubung ke server. Periksa koneksi internet Anda.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#f1f8e9]'>
      {/* Logo - Hidden on mobile */}
      <div className='hidden lg:flex lg:flex-1 lg:w-1/2 xl:w-2/5 items-center justify-center'>
        {/* ... your image ... */}
         <Image
          src='/auth/register-image.svg'
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
            <CardTitle className='text-2xl'>Buat Password Kamu</CardTitle>
            <CardDescription>
              Email: {email || '...'} {/* Show email from context */}
            </CardDescription>
          </CardHeader>

          <CardContent className='space-y-4 px-4 sm:px-6 pb-6 relative z-10'>
            <form onSubmit={handleSubmit}>
              {/* Password Input */}
              <div className='relative space-y-1 mb-4'>
                <Input
                  // Modified: Input type is now dynamic
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Password'
                  className='h-11 border-green-200 focus:border-green-500 bg-white/90 pr-16' // Added padding-right
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {/* Added: Show/Hide button */}
                <Button
                  type='button'
                  variant='ghost'
                  size='sm'
                  className='absolute right-1 top-1/2 -translate-y-1/2 h-8 px-3 text-green-600 hover:bg-green-100'
                  onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? 'Sembunyikan' : 'Lihat'}
                </Button>
              </div>
              
              {/* Confirm Password Input */}
              <div className='relative space-y-1 mb-6'>
                <Input
                  // Modified: Input type is now dynamic
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Konfirmasi Password'
                  className='h-11 border-green-200 focus:border-green-500 bg-white/90 pr-16' // Added padding-right
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                {/* Added: Show/Hide button */}
                <Button
                  type='button'
                  variant='ghost'
                  size='sm'
                  className='absolute right-1 top-1/2 -translate-y-1/2 h-8 px-3 text-green-600 hover:bg-green-100'
                  onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? 'Sembunyikan' : 'Lihat'}
                </Button>
              </div>
              {/* Display Error Message */}
              {error && (
                  <p className='text-sm text-red-600 text-center mb-4'>{error}</p>
              )}

              {/* Register Button */}
              <Button
                type="submit"
                className='w-full h-11 bg-green-600 hover:bg-green-700 text-white mb-4'
                disabled={isLoading || !password || !confirmPassword}>
                {isLoading ? 'Mendaftar...' : 'Daftar'}
              </Button>

              {/* Terms and Conditions */}
              {/* ... your terms ... */}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}