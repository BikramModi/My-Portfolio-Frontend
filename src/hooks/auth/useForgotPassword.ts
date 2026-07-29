'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { forgotPassword } from '@/services/auth.service';
import { ROUTES } from '@/constants/routes.constant';

export const useForgotPassword = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: forgotPassword,

    onSuccess: (_, variables) => {
      router.push(
        `${ROUTES.VERIFY_RESET_OTP}?email=${encodeURIComponent(
          variables.email
        )}`
      );
    },

    onError: (error) => {
      console.error('Forgot password failed', error);
    },
  });
};