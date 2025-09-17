import { useState } from 'react';
import {ShoppingCart } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

export default function Notification() {
  const [notifications, setNotifications] = useState({
    purchaseTransaction: true,
    waitingPayment: true,
    waitingConfirmation: true,
    orderProcessed: true,
    orderSent: true,
    orderCompleted: true,
    reminders: true,
  });

  
  const handleNotificationToggle = key => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <div className='bg-white rounded-lg p-6'>
        <h3 className='text-lg font-medium mb-2'>Pengaturan Notifikasi</h3>
        <p className='text-gray-600 text-sm mb-6'>Atur notifikasi yang ingin kamu terima di sini</p>

        <div className='space-y-1'>
          <div className='flex items-center justify-between py-3 border-b border-gray-100'>
            <div>
              <ShoppingCart className='w-5 h-5 text-gray-600 inline mr-3' />
              <span className='font-medium'>Transaksi Pembelian</span>
            </div>
            <span className='text-sm font-medium'>Notifikasi</span>
          </div>

          {[
            { key: 'waitingPayment', label: 'Menunggu Pembayaran' },
            { key: 'waitingConfirmation', label: 'Menunggu Konfirmasi' },
            { key: 'orderProcessed', label: 'Pesanan Diproses' },
            { key: 'orderSent', label: 'Pesanan Dikirim' },
            { key: 'orderCompleted', label: 'Pesanan Selesai' },
            { key: 'reminders', label: 'Pengingat' },
          ].map(item => (
            <div
              key={item.key}
              className='flex items-center justify-between py-3 border-b border-gray-100'>
              <span className='text-gray-700'>{item.label}</span>
              <Switch
                checked={notifications[item.key]}
                onCheckedChange={() => handleNotificationToggle(item.key)}
                className='data-[state=checked]:bg-green-600'
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
