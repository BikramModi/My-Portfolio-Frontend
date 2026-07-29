'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { resetPassword } from '@/services/auth.service';
import { ROUTES } from '@/constants/routes.constant';

export const useResetPassword = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: resetPassword,

    onSuccess: () => {
      router.push(ROUTES.LOGIN);
    },

    onError: (error) => {
      console.error('Password reset failed', error);
    },
  });
};