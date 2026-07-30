'use client';

import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { verifyEmail } from '@/services/auth.service';
import { ROUTES } from '@/constants/routes.constant';

type ErrorResponse = {
  success: boolean;
  message: string;
};

export const useVerifyEmail = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: verifyEmail,

    onSuccess: () => {
      toast.success('Email verified successfully.');

      router.push(ROUTES.LOGIN);
    },

    onError: (
      error: AxiosError<ErrorResponse>
    ) => {
      toast.error(
        error.response?.data.message ??
          'Email verification failed.'
      );
    },
  });
};