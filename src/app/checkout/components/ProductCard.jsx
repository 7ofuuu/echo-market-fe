import { useCheckout } from '@/contexts/checkout-context';
const formatCurrency = (n) => `Rp ${Number(n).toLocaleString('id-ID')}`;

export default function ProductCard({ image, name, price, quantity }) {
    const { items } = useCheckout();
    
    return(
        <div className="bg-white rounded-2xl p-5 border">
            {items.map((item) => (
              <div key={item.id} className="flex items-start gap-4 py-3">
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  ) : null}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold">{item.name}</div>
                  <div className="mt-1 text-lg font-bold">{formatCurrency(item.price)}</div>
                  <div className="mt-2 flex items-center gap-2">
                    <button className="w-6 h-6 rounded-full border flex items-center justify-center text-gray-500">-</button>
                    <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                    <button className="w-6 h-6 rounded-full border flex items-center justify-center text-gray-500">+</button>
                  </div>
                  <div className="mt-3">
                    <div className="text-sm font-medium">Reguler (Rp 6500)</div>
                    <div className="text-xs text-gray-500">Estimasi tiba 9 - 12 Agustus</div>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>Asuransi Pengiriman (Rp 500)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
    )
}