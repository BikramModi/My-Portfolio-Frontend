'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { registerUser } from '@/services/auth.service';

export const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: registerUser,

    onSuccess: () => {
      router.push('/login');
    },

    onError: (error) => {
      console.error('Registration failed', error);
    },
  });
};