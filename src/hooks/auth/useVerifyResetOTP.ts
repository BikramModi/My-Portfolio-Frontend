'use client';

import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { verifyResetOTP } from '@/services/auth.service';
import { ROUTES } from '@/constants/routes.constant';

type ErrorResponse = {
  success: boolean;
  message: string;
};

export const useVerifyResetOTP = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: verifyResetOTP,

    onSuccess: (data) => {
      toast.success('OTP verified successfully.');

      router.push(
        `${ROUTES.RESET_PASSWORD}?token=${encodeURIComponent(
          data.resetToken
        )}`
      );
    },

    onError: (
      error: AxiosError<ErrorResponse>
    ) => {
      toast.error(
        error.response?.data.message ??
          'OTP verification failed.'
      );
    },
  });
};