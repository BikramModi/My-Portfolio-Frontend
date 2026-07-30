'use client';

import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { resendOTP } from '@/services/auth.service';

type ErrorResponse = {
  success: boolean;
  message: string;
};

export const useResendOTP = () => {
  return useMutation({
    mutationFn: resendOTP,

    onSuccess: () => {
      toast.success('A new verification code has been sent.');
    },

    onError: (
      error: AxiosError<ErrorResponse>
    ) => {
      toast.error(
        error.response?.data.message ??
          'Failed to resend verification code.'
      );
    },
  });
};