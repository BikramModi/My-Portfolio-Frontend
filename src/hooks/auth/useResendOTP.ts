'use client';

import { useMutation } from '@tanstack/react-query';

import { resendOTP } from '@/services/auth.service';

export const useResendOTP = () => {
  return useMutation({
    mutationFn: resendOTP,

    onError: (error) => {
      console.error('Resend OTP failed', error);
    },
  });
};