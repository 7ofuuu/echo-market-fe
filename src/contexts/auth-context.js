// contexts/auth-context.js (updated)
'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [name, setName] = useState(''); // Added: State for the user's name
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState(null);

  // Load name and email from localStorage on component mount
  useEffect(() => {
    const storedName = localStorage.getItem('registerName');
    const storedEmail = localStorage.getItem('registerEmail');
    if (storedName) {
      setName(storedName);
    }
    if (storedEmail) {
      setEmail(storedEmail);
    }
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
  
  // Modified: Added name and setName to the provider value
  const value = {
    name, 
    setName,
    email,
    setEmail,
    userData,
    setUserData
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