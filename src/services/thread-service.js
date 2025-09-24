import axios from 'axios';
import { API_CONFIG } from '@/config/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken');
  console.log('Current token:', token);
  return token ? {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  } : {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
};

export const ThreadService = {
  // Get all threads with user information
  getAllThreads: async () => {
    try {
      const headers = getAuthHeaders();
      console.log('Fetching threads with headers:', headers);
      console.log('API URL:', `${API_CONFIG.baseURL}/threads`);
      
      const response = await axios.get(`${API_CONFIG.baseURL}/threads`, {
        headers: headers
      });
      
      if (!response.data) {
        throw new Error('No data received from the server');
      }
      
      console.log('Threads response:', response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get single thread with user information
  getThread: async (id) => {
    try {
      const response = await axios.get(`${API_CONFIG.baseURL}/threads/${id}?include=user`, {
        headers: {
          ...getAuthHeaders(),
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Create new thread
  createThread: async (data) => {
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('content', data.content);
      if (data.image) {
        formData.append('image', data.image);
      }

      const headers = {
        'Content-Type': 'multipart/form-data',
        ...getAuthHeaders(),
      };
      console.log('Create thread headers:', headers);
      
      const response = await axios.post(`${API_CONFIG.baseURL}/threads`, formData, {
        headers: headers,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Update thread
  updateThread: async (id, data) => {
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('content', data.content);
      if (data.image) {
        formData.append('image', data.image);
      }

      const response = await axios.post(`${API_CONFIG.baseURL}/threads/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          ...getAuthHeaders(),
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Delete thread
  deleteThread: async (id) => {
    try {
      const response = await axios.delete(`${API_CONFIG.baseURL}/threads/${id}`, {
        headers: {
          ...getAuthHeaders(),
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};