import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

export default function CreateThreadForm({ onSubmit, initialData = null }) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(initialData?.image || null);
  const [loading, setLoading] = useState(false);

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
        title,
        content,
        image,
      });
      
      if (!initialData) {
        // Clear form only if it's a new thread
        setTitle('');
        setContent('');
        setImage(null);
        setPreview(null);
      }
    } catch (error) {
      console.error('Failed to submit thread:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-4 mb-6">
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Thread Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full"
            />
          </div>

          <div>
            <textarea
              placeholder="Write your thoughts..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="w-full min-h-[120px] p-2 border rounded-md"
            />
          </div>

          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id="thread-image"
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => document.getElementById('thread-image').click()}
            >
              {preview ? 'Change Image' : 'Add Image'}
            </Button>
          </div>

          {preview && (
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image
                src={preview}
                alt="Preview"
                fill
                className="object-cover"
              />
              <Button
                type="button"
                variant="destructive"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => {
                  setImage(null);
                  setPreview(null);
                }}
              >
                Remove
              </Button>
            </div>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Submitting...' : initialData ? 'Update Thread' : 'Create Thread'}
          </Button>
        </div>
      </form>
    </Card>
  );
}