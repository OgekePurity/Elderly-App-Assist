// src/context/AuthContext.jsx

import React, { createContext, useState, useContext, useEffect } from 'eact';

/**
 * @typedef {Object} AuthContextType
 * @property {boolean} isAuthenticated
 * @property {(token: string) => void} login
 * @property {() => void} logout
 */

/**
 * @typedef {Object} AuthProviderProps
 * @property {React.ReactNode} children
 */

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
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