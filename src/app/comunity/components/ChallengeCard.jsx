import { Check, Gift, Flame, Leaf, TreePine } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useChallenge } from '@/contexts/challenge-context';
import VoucherSuccessModal from './VoucherSuccessModal';

export default function ChallengeCard() {
  const { threadCreationCount } = useChallenge();
  const [showVoucherModal, setShowVoucherModal] = useState(false);
  const [claimedVoucherInfo, setClaimedVoucherInfo] = useState({ type: '', value: '' });
  const [dailyMissions, setDailyMissions] = useState({
    postThread: {
      id: 'post_thread',
      title: 'Berbagi di Echomunitas',
      description: 'Posting 1 konten di komunitas',
      progress: 0,
      target: 1,
      completed: false,
      claimed: false,
      reward: 'Voucher Diskon Rp 5.000',
    },
  });

  const [weeklyMissions, setWeeklyMissions] = useState({
    postWeeklyThread: {
      id: 'post_weekly_thread',
      title: 'Berbagi di Echomunitas',
      description: 'Posting 3 konten di komunitas',
      progress: 0,
      target: 3,
      completed: false,
      claimed: false,
      reward: 'Voucher Diskon Rp 10.000',
    },
  });

  // Listen for thread creation
  useEffect(() => {
    if (threadCreationCount > 0) {
      // Update daily mission progress
      setDailyMissions(prev => ({
        ...prev,
        postThread: {
          ...prev.postThread,
          progress: Math.min(threadCreationCount, prev.postThread.target),
          completed: threadCreationCount >= prev.postThread.target,
        },
      }));

      // Update weekly mission progress
      setWeeklyMissions(prev => ({
        ...prev,
        postWeeklyThread: {
          ...prev.postWeeklyThread,
          progress: Math.min(threadCreationCount, prev.postWeeklyThread.target),
          completed: threadCreationCount >= prev.postWeeklyThread.target,
        },
      }));
    }
  }, [threadCreationCount]);

  const handleClaimReward = (missionType, missionId) => {
    let voucherInfo = { type: '', value: '' };

    if (missionType === 'daily') {
      const mission = dailyMissions[missionId];
      voucherInfo = {
        type: 'Daily',
        value: mission.reward?.replace('Voucher ', '').replace(' Diskon', '') || '10.000',
      };
      setDailyMissions(prev => ({
        ...prev,
        [missionId]: {
          ...prev[missionId],
          claimed: true,
        },
      }));
    } else if (missionType === 'weekly') {
      const mission = weeklyMissions[missionId];
      voucherInfo = {
        type: 'Weekly',
        value: mission.reward?.replace('Voucher ', '').replace(' Diskon', '') || '25.000',
      };
      setWeeklyMissions(prev => ({
        ...prev,
        [missionId]: {
          ...prev[missionId],
          claimed: true,
        },
      }));
    }

    // Show success modal
    setClaimedVoucherInfo(voucherInfo);
    setShowVoucherModal(true);
  };
  return (
    <div className='col-span-3 fixed right-0 top-32 w-80 h-[calc(100vh-8rem)] overflow-y-auto pr-2 space-y-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 bg-gray-50 px-4'>
      {/* Tantangan Header */}
      <div className='bg-green-50 rounded-xl p-6'>
        <h2 className='text-2xl font-bold text-black mb-2'>Tantangan</h2>
        <p className='text-sm text-gray-600'>Selesaikan Misi untuk rewards!</p>
      </div>

      {/* Streak Card */}
      <div className='bg-yellow-50 rounded-xl p-4 border border-yellow-200'>
        <div className='flex justify-center items-center gap-3 mb-2'>
          <span className='text-2xl'>1</span>
          <Flame className='w-6 h-6 text-orange-500' />
        </div>
        <p className='text-sm text-gray-700'>Belum ada streak, yuk buat langkah pertamamu!</p>
      </div>

      {/* Daily Missions */}
      <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
        <div className='flex items-center gap-3 mb-6'>
          <Leaf className='w-6 h-6 text-green-600' />
          <h3 className='font-bold text-gray-900 text-lg'>Misi harian</h3>
        </div>

        <div className='space-y-4'>
          {/* Mission 1 - Completed */}
          <div className='border border-gray-200 rounded-lg p-4'>
            <div className='flex items-center justify-between mb-3'>
              <div>
                <h4 className='font-semibold text-gray-900 text-sm'>Beli produk ramah lingkungan</h4>
                <p className='text-xs text-gray-600 mt-1'>Beli minimal 1 produk Echomarket</p>
              </div>
              <Check className='w-5 h-5 text-green-600' />
            </div>

            <div className='w-full bg-gray-200 rounded-full h-2 mb-3'>
              <div
                className='bg-green-600 h-2 rounded-full'
                style={{ width: '100%' }}></div>
            </div>
            <p className='text-xs text-gray-600 mb-2'>1/1</p>

            <div className='flex items-center gap-2 mb-3'>
              <Gift className='w-4 h-4 text-green-600' />
              <span className='text-xs text-green-600 font-medium'>Hadiah Telah diperoleh</span>
            </div>

            <button className='w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium'>Voucher Diklaim</button>
          </div>

          {/* Mission 2 - Dynamic Post Thread Mission */}
          <div className='border border-gray-200 rounded-lg p-4'>
            <div className='flex items-center justify-between mb-3'>
              <div className='flex-1'>
                <h4 className='font-semibold text-gray-900 text-sm'>{dailyMissions.postThread.title}</h4>
                <p className='text-xs text-gray-600 mt-1'>{dailyMissions.postThread.description}</p>
              </div>
              <div className='flex items-center gap-2'>{dailyMissions.postThread.completed && <Check className='w-5 h-5 text-green-600' />}</div>
            </div>

            <div className='w-full bg-gray-200 rounded-full h-2 mb-3'>
              <div
                className='bg-green-600 h-2 rounded-full transition-all duration-500'
                style={{ width: `${(dailyMissions.postThread.progress / dailyMissions.postThread.target) * 100}%` }}></div>
            </div>
            <div className='flex items-center justify-between mb-2'>
              <p className='text-xs text-gray-600'>
                {dailyMissions.postThread.progress}/{dailyMissions.postThread.target}
              </p>
              <div className='bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium'>+1 Voucher</div>
            </div>

            <div className='flex items-center gap-2 mb-3'>
              <Gift className='w-4 h-4 text-green-600' />
              {dailyMissions.postThread.claimed ? (
                <span className='text-xs text-green-600 font-medium'>Voucher Telah Diklaim</span>
              ) : dailyMissions.postThread.completed ? (
                <span className='text-xs text-green-600 font-medium'>Siap Diklaim!</span>
              ) : (
                <span className='text-xs text-gray-600'>{dailyMissions.postThread.reward}</span>
              )}
            </div>

            <button
              onClick={() => handleClaimReward('daily', 'postThread')}
              disabled={!dailyMissions.postThread.completed || dailyMissions.postThread.claimed}
              className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                dailyMissions.postThread.completed && !dailyMissions.postThread.claimed ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-300 text-gray-700 cursor-not-allowed'
              }`}>
              {dailyMissions.postThread.claimed ? 'Voucher Diklaim' : dailyMissions.postThread.completed ? 'Klaim Voucher' : 'Posting untuk Klaim'}
            </button>
          </div>
        </div>
      </div>

      {/* Weekly Missions */}
      <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
        <div className='flex items-center gap-3 mb-6'>
          <TreePine className='w-6 h-6 text-green-600' />
          <h3 className='font-bold text-gray-900 text-lg'>Misi Mingguan</h3>
        </div>

        <div className='space-y-4'>
          {/* Mission 1 - Completed */}
          <div className='border border-gray-200 rounded-lg p-4'>
            <div className='flex items-center justify-between mb-3'>
              <div>
                <h4 className='font-semibold text-gray-900 text-sm'>Beli produk ramah lingkungan</h4>
                <p className='text-xs text-gray-600 mt-1'>Beli minimal 1 produk Echomarket</p>
              </div>
              <Check className='w-5 h-5 text-green-600' />
            </div>

            <div className='w-full bg-gray-200 rounded-full h-2 mb-3'>
              <div
                className='bg-green-600 h-2 rounded-full'
                style={{ width: '100%' }}></div>
            </div>
            <p className='text-xs text-gray-600 mb-2'>1/1</p>

            <div className='flex items-center gap-2 mb-3'>
              <Gift className='w-4 h-4 text-green-600' />
              <span className='text-xs text-green-600 font-medium'>Hadiah Telah diperoleh</span>
            </div>

            <button className='w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium'>Klaim Hadiah</button>
          </div>

          {/* Mission 2 - Dynamic Weekly Post Thread Mission */}
          <div className='border border-gray-200 rounded-lg p-4'>
            <div className='flex items-center justify-between mb-3'>
              <div className='flex-1'>
                <h4 className='font-semibold text-gray-900 text-sm'>{weeklyMissions.postWeeklyThread.title}</h4>
                <p className='text-xs text-gray-600 mt-1'>{weeklyMissions.postWeeklyThread.description}</p>
              </div>
              <div className='flex items-center gap-2'>{weeklyMissions.postWeeklyThread.completed && <Check className='w-5 h-5 text-green-600' />}</div>
            </div>

            <div className='w-full bg-gray-200 rounded-full h-2 mb-3'>
              <div
                className='bg-green-600 h-2 rounded-full transition-all duration-500'
                style={{ width: `${(weeklyMissions.postWeeklyThread.progress / weeklyMissions.postWeeklyThread.target) * 100}%` }}></div>
            </div>
            <div className='flex items-center justify-between mb-2'>
              <p className='text-xs text-gray-600'>
                {weeklyMissions.postWeeklyThread.progress}/{weeklyMissions.postWeeklyThread.target}
              </p>
              <div className='bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-medium'>+Weekly Voucher</div>
            </div>

            <div className='flex items-center gap-2 mb-3'>
              <Gift className='w-4 h-4 text-green-600' />
              {weeklyMissions.postWeeklyThread.claimed ? (
                <span className='text-xs text-green-600 font-medium'>Voucher Telah Diklaim</span>
              ) : weeklyMissions.postWeeklyThread.completed ? (
                <span className='text-xs text-green-600 font-medium'>Siap Diklaim!</span>
              ) : (
                <span className='text-xs text-gray-600'>{weeklyMissions.postWeeklyThread.reward}</span>
              )}
            </div>

            <button
              onClick={() => handleClaimReward('weekly', 'postWeeklyThread')}
              disabled={!weeklyMissions.postWeeklyThread.completed || weeklyMissions.postWeeklyThread.claimed}
              className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                weeklyMissions.postWeeklyThread.completed && !weeklyMissions.postWeeklyThread.claimed ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-300 text-gray-700 cursor-not-allowed'
              }`}>
              {weeklyMissions.postWeeklyThread.claimed ? 'Voucher Diklaim' : weeklyMissions.postWeeklyThread.completed ? 'Klaim Voucher' : `Posting ${weeklyMissions.postWeeklyThread.target} untuk Klaim`}
            </button>
          </div>
        </div>
      </div>

      {/* Voucher Success Modal */}
      <VoucherSuccessModal
        isOpen={showVoucherModal}
        onClose={() => setShowVoucherModal(false)}
        voucherType={claimedVoucherInfo.type}
        voucherValue={claimedVoucherInfo.value}
      />
    </div>
  );
}
