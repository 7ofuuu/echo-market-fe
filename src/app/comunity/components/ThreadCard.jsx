import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/contexts/auth-context';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ThumbsUp, MessageCircle, Share2, MoreHorizontal, Trash2 } from 'lucide-react';

export default function ThreadCard({ thread, onDelete }) {
  const { user } = useAuth();
  const [showFullContent, setShowFullContent] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(thread.likes || 0);

  // Function to format relative time
  const getRelativeTime = dateString => {
    const now = new Date();
    const createdAt = new Date(dateString);
    const diffInSeconds = Math.floor((now - createdAt) / 1000);

    if (diffInSeconds < 60) {
      return 'sekarang';
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} menit yang lalu`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} jam yang lalu`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
      return `${diffInDays} hari yang lalu`;
    }

    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks < 4) {
      return `${diffInWeeks} minggu yang lalu`;
    }

    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
      return `${diffInMonths} bulan yang lalu`;
    }

    const diffInYears = Math.floor(diffInDays / 365);
    return `${diffInYears} tahun yang lalu`;
  };

  const isOwner = user?.id === thread.user_id;
  const hasImage = thread.image !== null;
  const contentPreviewLength = 150;
  const shouldTruncate = thread.content.length > contentPreviewLength;

  const displayContent = showFullContent ? thread.content : shouldTruncate ? `${thread.content.substring(0, contentPreviewLength)}...` : thread.content;

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => (liked ? prev - 1 : prev + 1));
  };

  console.log(thread.user);
  return (
    <Card className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-4'>
      {/* Post Header */}
      <div className='p-4 flex items-center justify-between'>
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
            <span className='font-semibold text-gray-900'>{thread.user?.name || 'Anonymous'}</span>
            <p className='text-sm text-gray-500'>{getRelativeTime(thread.created_at)}</p>
          </div>
        </div>

        {/* Options Menu for Thread Owner */}
        {isOwner && (
          <div className='relative'>
            <button
              onClick={() => setShowOptions(!showOptions)}
              className='text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-50 rounded-lg transition-colors'>
              <MoreHorizontal className='w-5 h-5' />
            </button>

            {showOptions && (
              <div className='absolute right-0 top-8 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[120px]'>
                <button
                  onClick={() => {
                    onDelete(thread.id);
                    setShowOptions(false);
                  }}
                  className='flex items-center gap-2 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg'>
                  <Trash2 className='w-4 h-4' />
                  Delete
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Post Content */}
      <div className='px-4 pb-4'>
        {/* <p className='text-gray-900 leading-relaxed mb-2'>{thread.title}</p> */}
        <p className='text-gray-700 whitespace-pre-wrap'>{displayContent}</p>

        {shouldTruncate && (
          <Button
            variant='link'
            className='mt-2 p-0 text-blue-600 hover:text-blue-800'
            onClick={() => setShowFullContent(!showFullContent)}>
            {showFullContent ? 'Show less' : 'Read more'}
          </Button>
        )}
      </div>

      {/* Post Image */}
      {hasImage && (
        <div className='relative w-full h-64 mb-4'>
          <Image
            src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${thread.image}`}
            alt={thread.title}
            fill
            className='object-cover'
          />
        </div>
      )}

      {/* Engagement Stats */}
      <div className='px-4 py-2 border-t border-gray-100'>
        <div className='flex items-center justify-between text-sm text-gray-600'>
          <span>{likeCount} menyukai</span>
          <div className='flex gap-4'>
            <span>{thread.comments?.length || 0} komentar</span>
            <span>10 dibagikan</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className='px-4 py-2 border-t border-gray-100'>
        <div className='flex items-center justify-between'>
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 text-sm font-medium transition-colors px-4 py-2 rounded-lg ${liked ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}>
            <ThumbsUp className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
            <span>Suka</span>
          </button>

          <button className='flex items-center gap-2 text-gray-600 hover:text-green-600 text-sm font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50'>
            <MessageCircle className='w-5 h-5' />
            <span>Komentari postingan ini</span>
          </button>

          <button className='flex items-center gap-2 text-gray-600 hover:text-green-600 text-sm font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50'>
            <Share2 className='w-5 h-5' />
            <span>Bagikan</span>
          </button>
        </div>
      </div>
    </Card>
  );
}
