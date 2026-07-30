'use client';

import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { registerUser } from '@/services/auth.service';
import { ROUTES } from '@/constants/routes.constant';

type ErrorResponse = {
  success: boolean;
  message: string;
};

export const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: registerUser,

    onSuccess: (_, variables) => {
      toast.success(
        'Verification code sent to your email.'
      );

      router.push(
        `${ROUTES.VERIFY_EMAIL}?email=${encodeURIComponent(
          variables.email
        )}`
      );
    },

    onError: (
      error: AxiosError<ErrorResponse>
    ) => {
      toast.error(
        error.response?.data.message ??
          'Registration failed.'
      );
    },
  });
};