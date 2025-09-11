'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter for redirection
// Assuming you have an AuthContext to store user data after login
// import { useAuth } from '@/contexts/auth-context';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State for login errors
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  // const { setUserData } = useAuth(); // Example: to save user data in context

  const handleLogin = async e => {
    e.preventDefault(); // Prevent default form submission
    setIsLoading(true);
    setError(null); // Clear previous errors

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle errors from the API (e.g., incorrect credentials)
        setError(data.message || 'Login failed. Please check your credentials.');
        return; // Stop the function execution
      }

      // --- LOGIN SUCCESSFUL ---

      // 1. Store the authentication token (very important for future requests)
      // The token is usually in data.token or data.access_token
      localStorage.setItem('authToken', data.token);

      // 2. Optionally, store user data in a global context
      // setUserData(data.user);

      // 3. Redirect to the dashboard or home page
      router.push('/store');
    } catch (err) {
      console.error('An error occurred during login:', err);
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='h-screen w-full flex justify-center items-center bg-[rgba(241,248,233,1)] bg-[url(/auth/login-background.svg)] bg-contain bg-center bg-no-repeat'>
      <div className='flex-auto w-full max-w-sm sm:max-w-md md:w-2/6 lg:max-w-full xl:max-w-xl flex justify-center gap-6 bg-center bg-cover bg-no-repeat p-8'>
        <Card className='w-3/4'>
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
            {/* Attach the handler to the form's onSubmit event */}
            <form onSubmit={handleLogin}>
              <div className='grid gap-4'>
                <div className='grid gap-3'>
                  {/* Display login error if it exists */}
                  {error && <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md text-sm'>{error}</div>}
                  <div className='grid gap-1'>
                    <Input
                      id='email'
                      type='email'
                      placeholder='Email'
                      className='border-green-600 focus:border-green-500 focus-visible:ring-green-500 h-10 sm:h-11'
                      required
                      value={email} // Bind value to state
                      onChange={e => setEmail(e.target.value)} // Update state on change
                    />
                    <span className='text-xs text-slate-600'>Contoh: email@echomarket.com</span>
                  </div>
                  <div className='grid gap-1'>
                    <div className='relative'>
                      <Input
                        id='password'
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Password'
                        required
                        className='border-green-600 focus:border-green-500 focus-visible:ring-green-500 h-10 sm:h-11 pr-10'
                        value={password} // Bind value to state
                        onChange={e => setPassword(e.target.value)} // Update state on change
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
                    {isLoading ? 'Loading...' : 'Selanjutnya'}
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
                {/* Social Login Buttons... */}

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
  );
}