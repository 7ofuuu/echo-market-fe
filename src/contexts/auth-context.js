// contexts/auth-context.js (updated)
'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  // Load token from localStorage only on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('authToken');
      setToken(storedToken);
      setIsAuthenticated(!!storedToken);
    }
  }, []);

  // Update token in localStorage when it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (token) {
        localStorage.setItem('authToken', token);
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
      }
    }
  }, [token]);

  // Load name and email from localStorage on component mount
  useEffect(() => {
    const storedName = localStorage.getItem('registerName');
    const storedEmail = localStorage.getItem('registerEmail');
    const token = localStorage.getItem('authToken');

    if (storedName) {
      setName(storedName);
    }
    if (storedEmail) {
      setEmail(storedEmail);
    }
    // Set authentication state based on token presence
    setIsAuthenticated(!!token);
  }, []);

  // Update localStorage when name changes
  useEffect(() => {
    if (name) {
      localStorage.setItem('registerName', name);
    } else {
      localStorage.removeItem('registerName');
    }
  }, [name]);

  // Update localStorage when email changes
  useEffect(() => {
    if (email) {
      localStorage.setItem('registerEmail', email);
    } else {
      localStorage.removeItem('registerEmail');
    }
  }, [email]);
  
  const value = {
    name,
    setName,
    email,
    setEmail,
    userData,
    setUserData,
    isAuthenticated,
    setIsAuthenticated,
    token,
    setToken,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}