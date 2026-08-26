export const AI_ENDPOINTS = {
  GEN_AI: '/ai/chat/gen-ai',
  RAG_AI: '/ai/chat/rag-ai',
  AGENTIC_AI: '/ai/chat/agentic-ai',
} as const;

export const AI_CONFIG = {
  MAX_MESSAGE_LENGTH: 4000,
  DEFAULT_TIMEOUT: 30000,
} as const;