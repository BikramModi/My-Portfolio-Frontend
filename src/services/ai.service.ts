import api from '@/lib/axios';

import { API_ENDPOINTS } from '@/constants/api.constant';

import type {
  AIModel,
  ChatRequest,
  ChatResponse,
  HealthResponse,
} from '@/types/ai.type';

export const getAIHealth = async () => {
  const response = await api.get<HealthResponse>(
    API_ENDPOINTS.AI.HEALTH
  );

  return response.data;
};

export const getAIModels = async () => {
  const response = await api.get<AIModel[]>(
    API_ENDPOINTS.AI.MODELS
  );

  return response.data;
};

export const chatWithAI = async (
  data: ChatRequest
) => {
  const response = await api.post<ChatResponse>(
    API_ENDPOINTS.AI.CHAT,
    data
  );

  return response.data;
};