'use client';

import {
  useCallback,
  useState,
} from 'react';

import {
  sendAgenticAIMessage,
  sendGenAIMessage,
  sendRAGAIMessage,
} from '@/services/ai3.service';

import type {
  AIChatRequest,
  AIMessage,
  AIType,
} from '@/types/ai3.type';

interface UseAIChatOptions {
  conversationId?: string | null;
}

function createMessageId(): string {
  return crypto.randomUUID();
}

export function useAIChat(
  type: AIType,
  options?: UseAIChatOptions,
) {
  const [messages, setMessages] =
    useState<AIMessage[]>([]);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  const conversationId =
    options?.conversationId ?? null;

  const sendMessage = useCallback(
    async (content: string) => {
      const trimmedMessage = content.trim();

      if (!trimmedMessage || loading) {
        return;
      }

      setError(null);

      const userMessage: AIMessage = {
        id: createMessageId(),
        role: 'user',
        content: trimmedMessage,
      };

      setMessages((current) => [
        ...current,
        userMessage,
      ]);

      setLoading(true);

      try {
        const payload: AIChatRequest = {
          message: trimmedMessage,
        };

        /*
         * Agentic AI supports conversation memory.
         *
         * Gen AI and RAG AI only send the message.
         *
         * The conversation ID is added only when:
         * - the selected AI type is Agentic AI
         * - a valid conversation ID exists
         */
        if (
          type === 'agentic-ai' &&
          conversationId
        ) {
          payload.conversationId =
            conversationId;
        }

        let assistantContent = '';

        switch (type) {
          case 'gen-ai': {
            const response =
              await sendGenAIMessage(payload);

            assistantContent =
              response.data.response;

            break;
          }

          case 'rag-ai': {
            const response =
              await sendRAGAIMessage(payload);

            assistantContent =
              response.data;

            break;
          }

          case 'agentic-ai': {
            const response =
              await sendAgenticAIMessage(payload);

            assistantContent =
              response.data.answer;

            break;
          }

          default: {
            throw new Error(
              'Unsupported AI type.',
            );
          }
        }

        if (!assistantContent.trim()) {
          throw new Error(
            'The AI returned an empty response.',
          );
        }

        const assistantMessage: AIMessage = {
          id: createMessageId(),
          role: 'assistant',
          content: assistantContent,
        };

        setMessages((current) => [
          ...current,
          assistantMessage,
        ]);
      } catch (caughtError) {
        const message =
          caughtError instanceof Error
            ? caughtError.message
            : 'Something went wrong while contacting the AI service.';

        setError(message);
      } finally {
        setLoading(false);
      }
    },
    [
      conversationId,
      loading,
      type,
    ],
  );

  const clearMessages = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  return {
    messages,
    loading,
    error,
    sendMessage,
    clearMessages,
  };
}