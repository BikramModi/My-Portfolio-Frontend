'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { verifyEmail } from '@/services/auth.service';
import { ROUTES } from '@/constants/routes.constant';

export const useVerifyEmail = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: verifyEmail,

    onSuccess: () => {
      router.push(ROUTES.LOGIN);
    },

    onError: (error) => {
      console.error('Email verification failed', error);
    },
  });
};