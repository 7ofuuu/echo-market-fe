export const API_CONFIG = {
  // Use environment variable if available
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
};

// Helper function to get full API URL
export const getApiUrl = (endpoint) => {
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${API_CONFIG.baseURL}${path}`;
};