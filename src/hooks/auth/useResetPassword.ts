'use client';

import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { resetPassword } from '@/services/auth.service';
import { ROUTES } from '@/constants/routes.constant';

type ErrorResponse = {
  success: boolean;
  message: string;
};

export const useResetPassword = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: resetPassword,

    onSuccess: () => {
      toast.success(
        'Password reset successfully.'
      );

      router.push(ROUTES.LOGIN);
    },

    onError: (
      error: AxiosError<ErrorResponse>
    ) => {
      toast.error(
        error.response?.data.message ??
          'Failed to reset password.'
      );
    },
  });
};