'use client';

import { createContext, useContext, useState } from 'react';

const ChallengeContext = createContext();

export function ChallengeProvider({ children }) {
  const [threadCreationCount, setThreadCreationCount] = useState(0);

  const notifyThreadCreated = () => {
    setThreadCreationCount(prev => prev + 1);
  };

  const value = {
    threadCreationCount,
    notifyThreadCreated,
  };

  return (
    <ChallengeContext.Provider value={value}>
      {children}
    </ChallengeContext.Provider>
  );
}

export const useChallenge = () => {
  const context = useContext(ChallengeContext);
  if (!context) {
    throw new Error('useChallenge must be used within a ChallengeProvider');
  }
  return context;
};