'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, Plus, Camera, Video, ThumbsUp, Share, MoreHorizontal, Play } from 'lucide-react';
import { useThread } from '@/contexts/thread-context';
import { useAuth } from '@/contexts/auth-context';

import StoreNavbar from '@/components/shared/Navbar';
import Sidebar from './components/Sidebar';
import ChallengeCard from './components/ChallengeCard';
import CreateThreadDialog from './components/CreateThreadDialog';
import ThreadCard from './components/ThreadCard';
// import CreateThreadForm from './components/CreateThreadForm';
import StoryComponent from './components/Story';
import TutorialComponent from './components/Tutorial';

export default function EcoMarketCommunity() {
  const { threads, loading, fetchThreads, createThread, deleteThread } = useThread();
  const { isAuthenticated } = useAuth();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [postInput, setPostInput] = useState('');

  useEffect(() => {
    fetchThreads();
  }, [fetchThreads]);

  const handleCreateSubmit = async data => {
    try {
      await createThread(data);
      setShowCreateForm(false);
    } catch (error) {
      console.error('Failed to create thread:', error);
    }
  };

  const handleDelete = async id => {
    if (window.confirm('Are you sure you want to delete this thread?')) {
      try {
        await deleteThread(id);
      } catch (error) {
        console.error('Failed to delete thread:', error);
      }
    }
  };

  const staticPosts = [
    //   {
    //     id: 1,
    //     author: 'Fauzein',
    //     avatar: '👤',
    //     content: 'Halo teman teman, rekomendasi aku cara membuat daur ulang dari kardus bekas',
    //     image: '/api/placeholder/400/300',
    //     likes: '1K',
    //     comments: '60',
    //     shares: '10',
    //   },
    //   {
    //     id: 2,
    //     author: 'Lian',
    //     avatar: '👤',
    //     content: 'Halo teman teman, Aku mau share tentang kerajinan yang aku buat hari ini nih. Bahan bahannya... Lihat selengkapnya',
    //     images: ['/api/placeholder/150/150', '/api/placeholder/150/150', '/api/placeholder/150/150', '/api/placeholder/150/150', '/api/placeholder/150/150'],
    //     likes: '1K',
    //     comments: '60',
    //     shares: '10',
    //   },
    //   {
    //     id: 3,
    //     author: 'Wawo',
    //     avatar: '👤',
    //     content: 'Halo teman teman, Aku mau share tentang kerajinan yang aku buat hari ini nih',
    //     image: '/api/placeholder/400/300',
    //     likes: null,
    //     comments: null,
    //     shares: null,
    //   },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      <StoreNavbar />

      <div className='pt-32 pb-8'>
        {/* Left Sidebar - Navigation */}
        <Sidebar />

        {/* Main Feed - Centered with margins for fixed sidebars */}
        <div
          className='mx-auto max-w-2xl px-4 space-y-6 min-h-screen'
          style={{ marginLeft: '340px', marginRight: '340px' }}>
          {/* Post Creation */}
          <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
            <div className='flex gap-4'>
              <div className='w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center'>
                <span className='text-white text-lg'>👤</span>
              </div>
              <div className='flex-1'>
                <input
                  type='text'
                  placeholder='Apa yang ingin pikiranmu hari ini?'
                  // value={postInput}
                  onChange={e => setPostInput(e.target.value)}
                  onFocus={() => {
                    if (isAuthenticated) {
                      setShowCreateForm(true);
                    }
                  }}
                  className='w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500 cursor-pointer'
                />
                <div className='flex justify-between items-center mt-4'>
                  <div className='flex gap-6'>
                    <button className='flex items-center gap-2 text-gray-600 hover:text-green-600 text-sm font-medium transition-colors'>
                      <Camera className='w-5 h-5' />
                      <span>Tambahkan Foto</span>
                    </button>
                    <button className='flex items-center gap-2 text-gray-600 hover:text-green-600 text-sm font-medium transition-colors'>
                      <Video className='w-5 h-5' />
                      <span>Tambahkan Video</span>
                    </button>
                  </div>
                  {/* {isAuthenticated && (
                      <button
                        onClick={() => setShowCreateForm(false)}
                        className={`bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2 ${!showCreateForm ? 'hidden' : ''}`}>
                        <span>Cancel</span>
                      </button>
                    )} */}
                </div>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <StoryComponent />

          {/* EchoTutor Section */}
          <TutorialComponent />

          {/* API Threads */}
          {loading ? (
            <div className='text-center py-8'>Loading threads...</div>
          ) : (
            threads.map(thread => (
              <ThreadCard
                key={thread.id}
                thread={thread}
                onDelete={handleDelete}
              />
            ))
          )}

          {/* Static Posts */}
          {staticPosts.map(post => (
            <div
              key={post.id}
              className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden'>
              {/* Post Header */}
              <div className='p-6 flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center'>
                    <span className='text-white text-lg'>{post.avatar}</span>
                  </div>
                  <div>
                    <span className='font-semibold text-gray-900'>{post.author}</span>
                    <p className='text-sm text-gray-500'>2 jam yang lalu</p>
                  </div>
                </div>
                <button className='text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-50 rounded-lg transition-colors'>
                  <MoreHorizontal className='w-5 h-5' />
                </button>
              </div>

              {/* Post Content */}
              <div className='px-6 pb-4'>
                <p className='text-gray-900 leading-relaxed'>{post.content}</p>
              </div>

              {/* Post Images */}
              <div className='px-6 pb-6'>
                {post.images ? (
                  <div className='grid grid-cols-3 gap-2 rounded-xl overflow-hidden'>
                    {post.images.slice(0, 4).map((img, index) => (
                      <div
                        key={index}
                        className='aspect-square bg-gradient-to-br from-yellow-400 to-orange-500 relative'>
                        {index === 3 && post.images.length > 4 ? (
                          <div className='w-full h-full bg-black bg-opacity-60 flex items-center justify-center'>
                            <span className='text-white font-bold text-xl'>+{post.images.length - 3}</span>
                          </div>
                        ) : (
                          <div className='w-full h-full flex items-center justify-center'>
                            <div className='w-12 h-8 bg-yellow-600 rounded'></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : post.image ? (
                  <div className='aspect-video bg-gradient-to-br from-purple-300 to-pink-400 rounded-xl overflow-hidden'>
                    <div className='w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center'>
                      <div className='grid grid-cols-6 gap-2 p-6'>
                        {Array.from({ length: 24 }, (_, i) => (
                          <div
                            key={i}
                            className={`w-4 h-10 rounded-sm ${i % 4 === 0 ? 'bg-red-400' : i % 4 === 1 ? 'bg-green-400' : i % 4 === 2 ? 'bg-blue-400' : 'bg-yellow-400'}`}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              {/* Post Actions */}
              {post.likes && (
                <div className='px-6 py-4 border-t border-gray-100'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-8'>
                      <button className='flex items-center gap-2 text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors'>
                        <ThumbsUp className='w-5 h-5' />
                        <span>{post.likes} menyukai</span>
                      </button>
                      <button className='flex items-center gap-2 text-gray-600 hover:text-green-600 text-sm font-medium transition-colors'>
                        <MessageCircle className='w-5 h-5' />
                        <span>{post.comments} komentar</span>
                      </button>
                      <button className='flex items-center gap-2 text-gray-600 hover:text-green-600 text-sm font-medium transition-colors'>
                        <Share className='w-5 h-5' />
                        <span>{post.shares} dibagikan</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Comment Input */}
              <div className='px-6 pb-6'>
                <div className='flex gap-4 border-t border-gray-100 pt-4'>
                  <button className='text-blue-600 text-sm hover:underline font-medium'>Suka</button>
                  <button className='text-gray-600 text-sm hover:underline font-medium'>Komentar postingan ini</button>
                  <button className='text-gray-600 text-sm hover:underline font-medium ml-auto'>Bagikan</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar - Tantangan */}
        <ChallengeCard />

        {/* Thread Creation Dialog - Rendered as Modal Outside Content Flow */}
        {isAuthenticated && showCreateForm && (
          <CreateThreadDialog
            onClose={() => setShowCreateForm(false)}
            onSubmit={handleCreateSubmit}
          />
        )}
      </div>
    </div>
  );
}