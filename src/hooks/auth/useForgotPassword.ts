'use client';

import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { forgotPassword } from '@/services/auth.service';
import { ROUTES } from '@/constants/routes.constant';

type ErrorResponse = {
  success: boolean;
  message: string;
};

export const useForgotPassword = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: forgotPassword,

    onSuccess: (_, variables) => {
      toast.success(
        'Password reset code sent to your email.'
      );

      router.push(
        `${ROUTES.VERIFY_RESET_OTP}?email=${encodeURIComponent(
          variables.email
        )}`
      );
    },

    onError: (
      error: AxiosError<ErrorResponse>
    ) => {
      toast.error(
        error.response?.data.message ??
          'Failed to send password reset code.'
      );
    },
  });
};