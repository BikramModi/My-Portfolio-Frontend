'use client';

import { useMutation } from '@tanstack/react-query';

import { chatWithAI } from '@/services/ai.service';

export const useAIChat = () => {
  return useMutation({
    mutationFn: chatWithAI,

    onError: (error) => {
      console.error('AI chat failed', error);
    },
  });
};