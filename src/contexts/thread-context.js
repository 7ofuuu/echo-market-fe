'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { ThreadService } from '@/services/thread-service';
import { useAuth } from './auth-context';
import toast from 'react-hot-toast';

const ThreadContext = createContext();

export function ThreadProvider({ children }) {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { isAuthenticated } = useAuth();

  const fetchThreads = useCallback(async () => {
    try {
      setLoading(true);
      const response = await ThreadService.getAllThreads();
      console.log('Threads fetched successfully:', response);
      setThreads(response.data || response); // Handle both {data: [...]} and direct array responses
    } catch (err) {
      console.error('Error fetching threads:', err);
      setError(err.response?.data?.message || err.message);
      toast.error(err.response?.data?.message || 'Failed to fetch threads');
    } finally {
      setLoading(false);
    }
  }, []);

  const createThread = async (data) => {
    if (!isAuthenticated) {
      toast.error('Please login to create a thread');
      return;
    }

    try {
      setLoading(true);
      const response = await ThreadService.createThread(data);
      setThreads((prev) => [response.data, ...prev]);
      toast.success('Thread created successfully');
      return response.data;
    } catch (err) {
      setError(err.message);
      toast.error(err.response?.data?.message || 'Failed to create thread');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateThread = async (id, data) => {
    if (!isAuthenticated) {
      toast.error('Please login to update the thread');
      return;
    }

    try {
      setLoading(true);
      const response = await ThreadService.updateThread(id, data);
      setThreads((prev) => 
        prev.map((thread) => thread.id === id ? response.data : thread)
      );
      toast.success('Thread updated successfully');
      return response.data;
    } catch (err) {
      setError(err.message);
      toast.error(err.response?.data?.message || 'Failed to update thread');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteThread = async (id) => {
    if (!isAuthenticated) {
      toast.error('Please login to delete the thread');
      return;
    }

    try {
      setLoading(true);
      await ThreadService.deleteThread(id);
      setThreads((prev) => prev.filter((thread) => thread.id !== id));
      toast.success('Thread deleted successfully');
    } catch (err) {
      setError(err.message);
      toast.error(err.response?.data?.message || 'Failed to delete thread');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const value = {
    threads,
    loading,
    error,
    fetchThreads,
    createThread,
    updateThread,
    deleteThread,
  };

  return (
    <ThreadContext.Provider value={value}>
      {children}
    </ThreadContext.Provider>
  );
}

export const useThread = () => {
  const context = useContext(ThreadContext);
  if (!context) {
    throw new Error('useThread must be used within a ThreadProvider');
  }
  return context;
};