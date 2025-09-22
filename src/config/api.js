export const API_CONFIG = {
  // Use environment variable if available, otherwise fallback to default
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
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