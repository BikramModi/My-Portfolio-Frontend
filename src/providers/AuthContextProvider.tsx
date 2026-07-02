'use client';

import { ReactNode } from 'react';

import { AuthProvider } from '@/context/AuthContext';

interface ProvidersProps {
  children: ReactNode;
}

export default function AuthContextProvider({ children }: ProvidersProps) {
  return <AuthProvider>{children}</AuthProvider>;
}
