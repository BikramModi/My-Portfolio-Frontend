import {
  AI_CONFIG,
  AI_ENDPOINTS,
} from '@/constants/ai.constant';

import type {
  AIChatRequest,
  AIErrorResponse,
  AgenticAIResponse,
  GenAIResponse,
  RAGAIResponse,
} from '@/types/ai3.type';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(
    /\/+$/,
    '',
  );

async function apiRequest<T>(
  endpoint: string,
  payload: AIChatRequest,
): Promise<T> {
  if (!API_BASE_URL) {
    throw new Error(
      'NEXT_PUBLIC_API_BASE_URL is not configured.',
    );
  }

  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, AI_CONFIG.DEFAULT_TIMEOUT);

  try {
    const response = await fetch(
      `${API_BASE_URL}${endpoint}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(payload),
        signal: controller.signal,
      },
    );

    if (!response.ok) {
      let error: AIErrorResponse = {};

      try {
        error =
          (await response.json()) as AIErrorResponse;
      } catch {
        // Ignore invalid error response.
      }

      throw new Error(
        error.message ||
          error.error ||
          `AI request failed with status ${response.status}.`,
      );
    }

    return (await response.json()) as T;
  } catch (error) {
    if (
      error instanceof DOMException &&
      error.name === 'AbortError'
    ) {
      throw new Error(
        'The AI request timed out. Please try again.',
      );
    }

    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

export async function sendGenAIMessage(
  payload: AIChatRequest,
): Promise<GenAIResponse> {
  return apiRequest<GenAIResponse>(
    AI_ENDPOINTS.GEN_AI,
    payload,
  );
}

export async function sendRAGAIMessage(
  payload: AIChatRequest,
): Promise<RAGAIResponse> {
  return apiRequest<RAGAIResponse>(
    AI_ENDPOINTS.RAG_AI,
    payload,
  );
}

export async function sendAgenticAIMessage(
  payload: AIChatRequest,
): Promise<AgenticAIResponse> {
  return apiRequest<AgenticAIResponse>(
    AI_ENDPOINTS.AGENTIC_AI,
    payload,
  );
}