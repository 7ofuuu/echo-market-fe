import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Edit, Camera } from 'lucide-react';
import Image from 'next/image';
import { useAuth } from '@/contexts/auth-context';

export default function CreateThreadDialog({ onClose, onSubmit, initialData = null }) {
  const { user } = useAuth();
  // const [title, setTitle] = useState(initialData?.title || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(initialData?.image || null);
  const [loading, setLoading] = useState(false);
  const { name } = useAuth();


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await onSubmit({
        // title,
        content,
        image,
      });
      onClose();
    } catch (error) {
      console.error('Failed to submit thread:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-lg mx-auto shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Buat Postingan</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Profile Section */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
              {user?.avatar ? (
                <Image
                  src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${user.avatar}`}
                  alt={user?.name || 'User'}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              ) : (
                <span className="text-white text-lg">👤</span>
              )}
            </div>
            <span className="font-medium text-gray-900">{name}</span>
          </div>
        </div>

        {/* Content Area */}
        <form onSubmit={handleSubmit} className="flex flex-col h-auto">
          <div className="p-4">
            <textarea
              placeholder={`Apa yang sedang kamu pikirkan, ${name || 'User'}?`}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="w-full min-h-[100px] resize-none border-none outline-none text-gray-900 placeholder-gray-500 text-base"
            />
          </div>

          {/* Image Preview */}
          {preview && (
            <div className="px-4 pb-4">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src={preview}
                  alt="Preview"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <button
                  type="button"
                  onClick={() => {
                    setImage(null);
                    setPreview(null);
                  }}
                  className="absolute top-2 right-2 bg-gray-800 bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="px-4 py-3 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Edit className="w-4 h-4" />
                  <span className="text-sm">Edit</span>
                </button>
                
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="thread-image"
                />
                <button
                  type="button"
                  onClick={() => document.getElementById('thread-image').click()}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Camera className="w-4 h-4" />
                  <span className="text-sm">Tambahkan Foto/Video</span>
                </button>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="p-4">
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg"
              disabled={loading || !content.trim()}
            >
              {loading ? 'Memposting...' : 'Kirim'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}