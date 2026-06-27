'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { loginUser} from  '../services/auth.service';


export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: loginUser,

    onSuccess: () => {
      router.push('/test');
    },

    onError: (error) => {
      console.error('Login failed', error);
    },
  });
};