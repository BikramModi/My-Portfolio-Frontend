'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { loginUser } from '@/services/auth.service';
import { ROUTES } from '@/constants/routes.constant';

import { useAuth } from '@/hooks/useAuth';

export const useLogin = () => {
  const router = useRouter();
  const { refreshUser } = useAuth();

  return useMutation({
    mutationFn: loginUser,

    onSuccess: async () => {
      await refreshUser();
      router.push(ROUTES.USER.DASHBOARD);
    },

    onError: (error) => {
      console.error('Login failed', error);
    },
  });
};
