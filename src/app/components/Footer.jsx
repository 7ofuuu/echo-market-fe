import { Recycle, Instagram, Facebook, MessageCircle, Leaf } from 'lucide-react';
import Image from 'next/image';

export default function FooterComponent() {
  return (
    <footer className='bg-linear-to-r from-[rgba(43,84,47,1)] to-[rgba(30,64,33,1)] text-white'>
      <div className='container mx-auto max-w-7xl pt-16 px-14'>
        <div className='grid grid-cols-12 gap-24'>
          {/* Left Section - Brand and Description */}
          <div className='col-span-12 lg:col-span-4 '>
            <div className='flex items-center space-x-3 mb-6'>
              <div className='w-12 h-12 p-2 bg-white rounded-full flex items-center justify-center'>
                {/* <Recycle className='w-6 h-6 text-green-800' /> */}

                <Image
                  src={'/logo/Echomarket-logo-2.svg'}
                  alt='EcoMarket Logo'
                  width={100}
                  height={100}
                />
              </div>
              <span className='text-2xl font-bold'>EchoMarket</span>
            </div>
            <p className='text-gray-200 text-base mb-8 leading-relaxed'>
              Bergabung & Jelajahi Dunia EchoMarket
              <br />
              untuk masa depan yang lebih hijau dan
              <br />
              berkelanjutan
            </p>

            {/* Statistics */}
            <div className='grid grid-cols-3 gap-6 mb-8'>
              <div className='text-center'>
                <div className='text-4xl font-bold text-[rgba(35,216,42,1)] mb-1'>10K+</div>
                <div className='text-sm text-gray-300'>Pengguna aktif</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-[rgba(35,216,42,1)] mb-1'>5K+</div>
                <div className='text-sm text-gray-300'>Produk Terjual</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-[rgba(35,216,42,1)] mb-1'>100+</div>
                <div className='text-sm text-gray-300'>Tutorial Interaktif</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className='mb-8'>
              <h4 className='text-[rgba(35,216,42,1)] font-bold text-lg mb-3'>Selamatkan Bumi !!</h4>
              <p className='text-base text-gray-200 mb-4 leading-relaxed'>
                Ubah barang bekasmu menjadi
                <br />
                berharga untuk selamatkan bumi
              </p>
              <button className='w-full bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-base font-semibold transition-colors'>Gabung Sekarang</button>
            </div>

            {/* Badges */}
            <div className='flex justify-between'>
              <div className='flex items-center space-x-2 bg-green-700 px-4 py-2 rounded-full'>
                <Recycle className='w-4 h-4' />
                <span className='text-sm font-medium'>Zero Waste</span>
              </div>
              <div className='flex items-center space-x-2 bg-green-700 px-4 py-2 rounded-full'>
                {/* <div className='w-4 h-4 bg-green-400 rounded-full'></div> */}
                <Leaf className='w-4 h-4' />
                <span className='text-sm font-medium'>Echo Certified</span>
              </div>
            </div>
          </div>

          {/* Mid Section - Navigation and socials */}
          <div className='flex flex-col gap-12 col-span-6 lg:col-span-4'>
            {/* Navigation Links */}
            <div className=''>
              <h4 className='text-[rgba(35,216,42,1)] font-bold text-lg mb-2'>Navigasi</h4>
              <div>
                <ul className='space-y-2'>
                  <li>
                    <a
                      href='#'
                      className='text-white hover:text-[rgba(35,216,42,1)] text-base transition-colors'>
                      Beranda
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-white hover:text-[rgba(35,216,42,1)] text-base transition-colors'>
                      Echomunitess
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-white hover:text-[rgba(35,216,42,1)] text-base transition-colors'>
                      EchoJualan
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-white hover:text-[rgba(35,216,42,1)] text-base transition-colors'>
                      Tentang kami
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Media Links */}
            <div className=''>
              <h4 className='text-[rgba(35,216,42,1)] font-bold text-lg mb-6'>Temui Kami di Sosial Media</h4>
              <div className='space-y-4 mb-8'>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center'>
                    <Instagram className='w-5 h-5 text-white' />
                  </div>
                  <span className='text-base text-white'>EchoMarket_Telu</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center'>
                    <Facebook className='w-5 h-5 text-white' />
                  </div>
                  <span className='text-base text-white'>EchoMarket_Telu</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-green-500 rounded-full flex items-center justify-center'>
                    <MessageCircle className='w-5 h-5 text-white' />
                  </div>
                  <span className='text-base text-white'>+62 888-1934- 839</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Product Categories  and downloads*/}
          <div className='flex flex-col gap-12 col-span-6 lg:col-span-4'>
            <div>
              <h4 className='text-[rgba(35,216,42,1)] font-bold text-lg mb-2'>Kategori Produk</h4>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='#'
                    className='text-white hover:text-[rgba(35,216,42,1)] text-base transition-colors'>
                    Kardus Bekas
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-white hover:text-[rgba(35,216,42,1)] text-base transition-colors'>
                    Craft & Handmade
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-white hover:text-[rgba(35,216,42,1)] text-base transition-colors'>
                    Fashion Daur Ulang
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-white hover:text-[rgba(35,216,42,1)] text-base transition-colors'>
                    Aksesoris Daur Ulang
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className='text-[rgba(35,216,42,1)] font-bold text-lg mb-6'>Download Echomarket Mobile</h4>
              <div className='space-y-4'>
                <div className='max-w-56 bg-black rounded-lg px-4 py-3 cursor-pointer hover:bg-gray-900 transition-colors flex items-center space-x-3'>
                  <svg
                    className='w-8 h-8'
                    viewBox='0 0 24 24'
                    fill='none'>
                    <path
                      d='M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5Z'
                      fill='#EA4335'
                    />
                    <path
                      d='M16.81 10.09L13.69 12L16.81 13.91L19.33 12.54C19.88 12.26 19.88 11.74 19.33 11.46L16.81 10.09Z'
                      fill='#FBBC04'
                    />
                    <path
                      d='M13.69 12L3.84 2.15C4.25 1.92 4.74 1.92 5.15 2.15L16.81 10.09L13.69 12Z'
                      fill='#4285F4'
                    />
                    <path
                      d='M13.69 12L16.81 13.91L5.15 21.85C4.74 22.08 4.25 22.08 3.84 21.85L13.69 12Z'
                      fill='#34A853'
                    />
                  </svg>
                  <div>
                    <div className='text-xs text-gray-300 uppercase'>GET IT ON</div>
                    <div className='text-lg font-semibold text-white'>Google Play</div>
                  </div>
                </div>
                <div className='max-w-56 bg-black rounded-lg px-4 py-3 cursor-pointer hover:bg-gray-900 transition-colors flex items-center space-x-3'>
                  <svg
                    className='w-8 h-8'
                    viewBox='0 0 24 24'
                    fill='white'>
                    <path d='M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.13997 6.91 8.85997 6.88C10.15 6.86 11.82 7.75 12.37 7.75C12.91 7.75 14.83 6.64 16.26 6.87C16.84 6.95 18.27 7.2 19.46 8.12C19.39 8.16 17.96 9.11 17.97 10.95C17.99 13.09 19.69 13.88 19.73 13.9C19.69 14 19.36 15.15 18.71 19.5ZM12.83 5.17C12.22 5.95 11.31 6.44 10.36 6.35C10.25 5.31 10.72 4.23 11.31 3.6C11.91 2.86 12.91 2.32 13.83 2.29C13.96 3.58 13.5 4.26 12.83 5.17Z' />
                  </svg>
                  <div>
                    <div className='text-xs text-gray-300'>Download on the</div>
                    <div className='text-lg font-semibold text-white'>App Store</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className='w-full mt-16 py-8 border-t border-green-700'>
        <div className='text-center text-gray-300 text-base mb-4'>
          <p>© 2025 EcoMarket. Semua hak dilindungi. Bersama membangun Indonesia yang lebih hijau.</p>
        </div>
        <div className='flex flex-wrap justify-center space-x-8 text-sm text-gray-300'>
          <a
            href='#'
            className='hover:text-white transition-colors'>
            Kebijakan Privasi
          </a>
          <a
            href='#'
            className='hover:text-white transition-colors'>
            Syarat & Ketentuan
          </a>
          <a
            href='#'
            className='hover:text-white transition-colors'>
            Hubungi Kami
          </a>
          <a
            href='#'
            className='hover:text-white transition-colors'>
            FAQ
          </a>
        </div>
      </div>
    </footer>
  );
}
