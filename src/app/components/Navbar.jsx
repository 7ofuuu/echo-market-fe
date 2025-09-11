import { Recycle } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function NavbarComponent  ({ isScrolled }) {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-12 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12  rounded-full flex items-center justify-center">
              {/* <Recycle className="w-5 h-5 text-white" /> */}

              <Image
                src={"/logo/Echomarket-logo-2.svg"}
                alt="EcoMarket Logo"
                width={100}
                height={100}
              />
            </div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              EcoMarket
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className={`font-bold hover:text-green-600 transition-colors ${
              isScrolled ? 'text-black' : 'text-white'
            }`}>Beranda</a>
            <a href="#" className={`font-bold hover:text-green-600 transition-colors ${
              isScrolled ? 'text-black' : 'text-white'
            }`}>Marketplace</a>
            <a href="#" className={`font-bold hover:text-green-600 transition-colors ${
              isScrolled ? 'text-black' : 'text-white'
            }`}>Echomunity</a>
            <a href="#" className={`font-bold hover:text-green-600 transition-colors ${
              isScrolled ? 'text-black' : 'text-white'
            }`}>EchoJualan</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/login" className={'px-4 py-2 text-sm font-semibold text-green-600 bg-white rounded-lg hover:bg-gray-50 transition-colors'}>
              Masuk
            </Link>
            <Link href="/register" className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors">
              Daftar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
