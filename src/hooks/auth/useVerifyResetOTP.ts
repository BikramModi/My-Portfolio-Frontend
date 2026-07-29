'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { verifyResetOTP } from '@/services/auth.service';
import { ROUTES } from '@/constants/routes.constant';

export const useVerifyResetOTP = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: verifyResetOTP,

    onSuccess: (data) => {
      router.push(
        `${ROUTES.RESET_PASSWORD}?token=${encodeURIComponent(
          data.resetToken
        )}`
      );
    },

    onError: (error) => {
      console.error('OTP verification failed', error);
    },
  });
};