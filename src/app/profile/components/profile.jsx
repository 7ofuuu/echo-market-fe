import { User, Edit } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const { name: authName, email: authEmail } = useAuth();
  const router = useRouter();

  const [profileData, setProfileData] = useState({
    username: '',
    name: '',
    email: '',
    phone: '',
    storeName: '',
    gender: '',
    birthDate: '',
  });

  useEffect(() => {
    // If user is not authenticated, redirect to login
    if (!authName || !authEmail) {
      router.push('/login');
      return;
    }

    // Update profile data with auth context data
    setProfileData(prev => ({
      ...prev,
      name: authName,
      email: authEmail,
      username: authName.toLowerCase().replace(/\s+/g, '') // Create username from name
    }));
  }, [authName, authEmail, router]);

  const handleProfileUpdate = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      // TODO: Implement API call to save profile changes
      const { name: newName } = profileData;
      
      // Update local storage with new name if it changed
      if (newName !== authName) {
        localStorage.setItem('registerName', newName);
        // You would typically update the auth context here as well
        // setName(newName); // Uncomment this once you add setName to useAuth
      }

      // Show success message
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Failed to update profile:', error);
      alert('Failed to update profile. Please try again.');
    }
  };

  return (
    <>
      <div className='bg-white rounded-lg p-6'>
        <div className='flex items-center justify-between mb-6'>
          <div className='flex items-center gap-4'>
            <div className='w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center'>
              <User className='w-8 h-8 text-gray-500' />
            </div>
            <div>
              <h2 className='text-xl font-semibold'>{profileData.name || 'Guest'}</h2>
              <button className='text-green-600 text-sm flex items-center gap-1'>
                <Edit className='w-4 h-4' />
                Ubah profil
              </button>
            </div>
          </div>
        </div>

        <h3 className='text-lg font-medium mb-4'>Profil saya</h3>
        <p className='text-gray-600 text-sm mb-6'>Kelola informasi profil Anda untuk mengontrol, melindungi dan mengamankan akun</p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='space-y-6'>
            <div className='flex items-center gap-4'>
              <label className='w-24 text-sm font-medium'>Username</label>
              <div className='flex-1 flex items-center gap-2'>
                <input
                  type='text'
                  value={profileData.username}
                  onChange={e => handleProfileUpdate('username', e.target.value)}
                  className='flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
                />
                <button className='text-green-600 text-sm px-3 py-1 border border-green-600 rounded'>Ubah</button>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <label className='w-24 text-sm font-medium'>Nama</label>
              <input
                type='text'
                placeholder='Belum ada nama toko'
                value={profileData.name}
                onChange={e => handleProfileUpdate('name', e.target.value)}
                className='flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              />
            </div>

            <div className='flex items-center gap-4'>
              <label className='w-24 text-sm font-medium'>Email</label>
              <div className='flex-1 flex items-center gap-2'>
                <span className='flex-1 text-gray-700'>{profileData.email}</span>
                <button className='text-green-600 text-sm px-3 py-1 border border-green-600 rounded' disabled>Email tidak dapat diubah</button>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <label className='w-24 text-sm font-medium'>No. Telepon</label>
              <div className='flex-1 flex items-center gap-2'>
                <input
                  type='text'
                  placeholder='-'
                  value={profileData.phone}
                  onChange={e => handleProfileUpdate('phone', e.target.value)}
                  className='flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
                />
                <button className='text-green-600 text-sm px-3 py-1 border border-green-600 rounded'>Ubah</button>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <label className='w-24 text-sm font-medium'>Nama toko</label>
              <input
                type='text'
                placeholder='Belum ada nama toko'
                value={profileData.storeName}
                onChange={e => handleProfileUpdate('storeName', e.target.value)}
                className='flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              />
            </div>

            <div className='flex items-center gap-4'>
              <label className='w-24 text-sm font-medium'>Jenis kelamin</label>
              <div className='flex gap-4'>
                {['Laki-laki', 'Perempuan', 'Lainnya'].map(gender => (
                  <label
                    key={gender}
                    className='flex items-center gap-2'>
                    <input
                      type='checkbox'
                      checked={profileData.gender === gender}
                      onChange={() => handleProfileUpdate('gender', gender)}
                      className='w-4 h-4 text-green-600'
                    />
                    <span className='text-sm'>{gender}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <label className='w-24 text-sm font-medium'>Tanggal lahir</label>
              <div className='flex-1 flex items-center gap-2'>
                <input
                  type='text'
                  placeholder='dd/mm/yyyy'
                  value={profileData.birthDate}
                  onChange={e => handleProfileUpdate('birthDate', e.target.value)}
                  className='flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
                />
                <button className='text-green-600 text-sm px-3 py-1 border border-green-600 rounded'>Ubah</button>
              </div>
            </div>

            <button 
              onClick={handleSaveChanges}
              className='w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors'
            >
              Simpan perubahan
            </button>
          </div>

          <div className='flex flex-col items-center'>
            <div className='w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4'>
              <User className='w-16 h-16 text-gray-500' />
            </div>
            <button className='px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors'>Pilih gambar</button>
            <div className='text-xs text-gray-500 mt-2 text-center'>
              <p>Ukuran gambar: maks. 1 MB</p>
              <p>Format gambar: .JPEG, .PNG</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
