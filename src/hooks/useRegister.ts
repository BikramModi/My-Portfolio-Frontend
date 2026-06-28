'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { registerUser } from '@/services/auth.service';
import { ROUTES } from '@/constants/routes.constant';

export const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: registerUser,

    onSuccess: () => {
      router.push(ROUTES.LOGIN);
    },

    onError: (error) => {
      console.error('Registration failed', error);
    },
  });
};