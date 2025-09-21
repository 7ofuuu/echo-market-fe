import React from "react";
import { ChevronDown } from "lucide-react";
import { useCheckout } from "@/contexts/checkout-context";
import { useRouter } from "next/navigation";

const formatCurrency = (n) => `Rp ${Number(n).toLocaleString('id-ID')}`;


export default function PaymentMethodCard({ method, selected, onSelect }) {
    const { total } = useCheckout();
    const [selectedPayment, setSelectedPayment] = React.useState('');
    const router = useRouter();


    return(
         <div className="bg-white rounded-2xl p-5 border space-y-4">
            <div>
              <div className="text-sm font-semibold mb-2">Metode pembayaran</div>
              <div className="space-y-2 text-sm">
                {['QRIS', 'BRI Virtual Account', 'BCA Virtual Account', 'Bank Mega'].map((method) => (
                  <label key={method} className="flex items-center gap-2">
                    <input 
                      name="pay" 
                      type="radio" 
                      className="w-4 h-4"
                      checked={selectedPayment === method}
                      onChange={() => setSelectedPayment(method)}
                    />
                    <span>{method}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="border rounded-lg p-3 flex items-center justify-between text-sm">
              <div>
                <div className="font-medium">1 Kupon promo telah dipakai</div>
                <div className="text-gray-500">Dapat diskon ongkir Rp 500</div>
              </div>
              <button className="w-8 h-8 rounded-full border flex items-center justify-center">
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="text-sm">
              <div className="space-y-2 mb-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Subtotal</span>
                  <span>{formatCurrency(total)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Ongkos kirim</span>
                  <span>{formatCurrency(19400)}</span>
                </div>
                <div className="flex items-center justify-between font-semibold">
                  <span>Total transaksi</span>
                  <span>{formatCurrency(total + 19400)}</span>
                </div>
              </div>
              <button 
                onClick={() => {
                  if (!selectedPayment) {
                    alert('Silakan pilih metode pembayaran');
                    return;
                  }
                  // Generate order ID - in real app this would come from your backend
                  const generatedOrderId = `EM${Date.now()}`;
                  if (selectedPayment === 'QRIS') {
                    const totalAmount = total + 19400; // Subtotal + shipping cost
                    router.push(`/payment/${generatedOrderId}?amount=${totalAmount}`);
                  } else {
                    // Handle other payment methods
                    alert('Metode pembayaran lain akan segera tersedia');
                  }
                }}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-400"
                disabled={!selectedPayment}
              >
                Bayar sekarang
              </button>
            </div>
          </div>
    )
}