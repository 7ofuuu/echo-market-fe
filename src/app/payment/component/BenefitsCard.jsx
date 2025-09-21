export default function BenefitsCard() {
  return (
    <div className="bg-[#E7F5E3] rounded-2xl p-6">
      <h3 className="text-[#1A472F] text-lg font-semibold mb-4">
        Keuntungan Pembayaran Digital
      </h3>
      <ul className="space-y-3">
        <li className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#40B825] rounded-full"></span>
          <span className="text-[#1A472F]">Transaksi cepat dan mudah</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#40B825] rounded-full"></span>
          <span className="text-[#1A472F]">Keamanan tingkat tinggi</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#40B825] rounded-full"></span>
          <span className="text-[#1A472F]">Tanpa perlu uang tunai</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#40B825] rounded-full"></span>
          <span className="text-[#1A472F]">Cashback dan promo menarik</span>
        </li>
      </ul>
    </div>
  );
}
