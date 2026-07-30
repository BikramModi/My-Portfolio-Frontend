'use client';

import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { loginUser } from '@/services/auth.service';
import { ROUTES } from '@/constants/routes.constant';

import { useAuth } from '@/hooks/useAuth';

type ErrorResponse = {
  success: boolean;
  message: string;
};

export const useLogin = () => {
  const router = useRouter();
  const { refreshUser } = useAuth();

  return useMutation({
    mutationFn: loginUser,

    onSuccess: async () => {
      await refreshUser();

      toast.success('Welcome back!');

      router.push(ROUTES.USER.DASHBOARD);
    },

    onError: (
      error: AxiosError<ErrorResponse>
    ) => {
      toast.error(
        error.response?.data.message ??
          'Login failed.'
      );
    },
  });
};