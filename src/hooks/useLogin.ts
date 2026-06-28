'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { loginUser} from '@/services/auth.service';
import { ROUTES } from '@/constants/routes.constant';

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: loginUser,

    onSuccess: () => {
      router.push(ROUTES.USER.DASHBOARD);    
    },

    onError: (error) => {
      console.error('Login failed', error);
    },
  });
};