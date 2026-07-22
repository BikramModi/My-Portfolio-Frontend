'use client';

import { useQuery } from '@tanstack/react-query';

import { getAIHealth } from '@/services/ai.service';

export const useAIHealth = () => {
  return useQuery({
    queryKey: ['ai-health'],

    queryFn: getAIHealth,
  });
};