import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function AddAddress() {
  const [addressLabel, setAddressLabel] = useState('Rumah');
  const [isPrimary, setIsPrimary] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Tambah alamat baru</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div>
            <Label>Label Alamat</Label>
            <select 
              value={addressLabel}
              onChange={(e) => setAddressLabel(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="Rumah">Rumah</option>
              <option value="Kantor">Kantor</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Nama Penerima</Label>
              <Input type="text" placeholder="Masukkan nama penerima" />
            </div>
            <div>
              <Label>Nomor Telepon</Label>
              <Input type="tel" placeholder="Masukkan nomor telepon" />
            </div>
          </div>

          <div>
            <Label>Jalan & Nomor Rumah</Label>
            <Input type="text" placeholder="Contoh: Jalan Gatot Subroto No. 123" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>RT/RW</Label>
              <Input type="text" placeholder="Contoh: 001/002" />
            </div>
            <div>
              <Label>Kelurahan/Desa</Label>
              <Input type="text" placeholder="Masukkan kelurahan/desa" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Kecamatan</Label>
              <Input type="text" placeholder="Masukkan kecamatan" />
            </div>
            <div>
              <Label>Kota/Kabupaten</Label>
              <Input type="text" placeholder="Masukkan kota/kabupaten" />
            </div>
          </div>

          <div>
            <Label>Provinsi</Label>
            <Input type="text" placeholder="Masukkan provinsi" />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="primary"
              checked={isPrimary}
              onChange={(e) => setIsPrimary(e.target.checked)}
              className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <Label htmlFor="primary" className="cursor-pointer">Jadikan Alamat Utama</Label>
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6">
              + Tambah alamat
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
