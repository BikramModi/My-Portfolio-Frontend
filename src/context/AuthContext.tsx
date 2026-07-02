'use client';

import { createContext, useEffect, useState, ReactNode } from 'react';

import api from '@/lib/axios';
import { API_ENDPOINTS } from '@/constants/api.constant';
import { setLogoutHandler } from './authStore';

export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  profileImage?: string;
}

interface AuthContextType {
  user: User | null;
  refreshUser: () => Promise<void>;
  loading: boolean;
  login: (user: User) => void;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const restoreUser = async () => {
      try {
        const { data } = await api.get(API_ENDPOINTS.AUTH.ME);

        setUser(data.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    restoreUser();
  }, []);

  const refreshUser = async () => {
    try {
      const { data } = await api.get(API_ENDPOINTS.AUTH.ME);
      setUser(data.user);
    } catch {
      setUser(null);
    }
  };

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = async () => {
    try {
      await api.post(API_ENDPOINTS.AUTH.LOGOUT);
    } catch {
      // Ignore logout API errors
    }

    setUser(null);
  };

  useEffect(() => {
    setLogoutHandler(logout);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        refreshUser,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
