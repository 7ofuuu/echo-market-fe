import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/contexts/auth-context';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function ThreadCard({ thread, onEdit, onDelete }) {
  const { user } = useAuth();
  const [showFullContent, setShowFullContent] = useState(false);

  const isOwner = user?.id === thread.user_id;
  const hasImage = thread.image !== null;
  const contentPreviewLength = 150;
  const shouldTruncate = thread.content.length > contentPreviewLength;

  const displayContent = showFullContent ? thread.content : shouldTruncate ? `${thread.content.substring(0, contentPreviewLength)}...` : thread.content;

  return (
    <Card className='p-4 mb-4'>
      <div className='flex justify-between items-start mb-2'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center'>
            {thread.user?.avatar ? (
              <Image
                src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${thread.user.avatar}`}
                alt={thread.user?.name || 'Anonymous'}
                width={40}
                height={40}
                className='rounded-full'
              />
            ) : (
              <span className='text-white text-lg'>👤</span>
            )}
          </div>
          <div>
            <h3 className='text-xl font-semibold'>{thread.title}</h3>
            <p className='text-sm text-gray-500'>
              {thread.user?.name} • {new Date(thread.created_at).toLocaleDateString()}              
            </p>
          </div>
        </div>
        {/* Rest of the component remains the same */}
      </div>

      {hasImage && (
        <div className='relative w-full h-64 mb-4 rounded-lg overflow-hidden'>
          <Image
            src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${thread.image}`}
            alt={thread.title}
            fill
            className='object-cover'
          />
        </div>
      )}

      <p className='text-gray-700 whitespace-pre-wrap'>{displayContent}</p>

      {shouldTruncate && (
        <Button
          variant='link'
          className='mt-2 p-0'
          onClick={() => setShowFullContent(!showFullContent)}>
          {showFullContent ? 'Show less' : 'Read more'}
        </Button>
      )}

      <div className='mt-4 text-sm text-gray-500'>{thread.comments?.length || 0} comments</div>
    </Card>
  );
}
