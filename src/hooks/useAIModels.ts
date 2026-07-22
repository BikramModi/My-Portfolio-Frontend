'use client';

import { useQuery } from '@tanstack/react-query';

import { getAIModels } from '@/services/ai.service';

export const useAIModels = () => {
  return useQuery({
    queryKey: ['ai-models'],

    queryFn: getAIModels,

    retry: false,
  });
};