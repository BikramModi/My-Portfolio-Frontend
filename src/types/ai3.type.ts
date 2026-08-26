export type AIType =
  | 'gen-ai'
  | 'rag-ai'
  | 'agentic-ai';

export type AIMessageRole =
  | 'user'
  | 'assistant';

export interface AIMessage {
  id: string;
  role: AIMessageRole;
  content: string;
}

/* ==========================================================================
 * REQUEST TYPES
 * ========================================================================== */

export interface AIChatRequest {
  message: string;
  conversationId?: string;
}

/* ==========================================================================
 * GEN AI
 * ========================================================================== */

export interface GenAIResponseData {
  response: string;
}

export interface GenAIResponse {
  message: string;
  data: GenAIResponseData;
}

/* ==========================================================================
 * RAG AI
 * ========================================================================== */

export interface RAGAIResponse {
  message: string;
  data: string;
}

/* ==========================================================================
 * AGENTIC AI
 * ========================================================================== */

export interface AgentPlan {
  intent?: string;
  workflow?: string;
  tools?: string[];
}

export interface AgentToolResult {
  tool: string;
  data: Record<string, unknown>;
}

export interface AgentPrompt {
  system?: string;
  memory?: string;
  context?: string;
  tools?: AgentToolResult[];
  user?: string;
}

export interface AgentMetadata {
  startedAt?: number;
  completedAt?: number;
}

export interface AgentResponseData {
  answer: string;
  plan?: AgentPlan;
  toolResults?: AgentToolResult[];
  prompt?: AgentPrompt;
  serializedPrompt?: string;
  metadata?: AgentMetadata;
}

export interface AgenticAIResponse {
  success: boolean;
  message: string;
  data: AgentResponseData;
}

/* ==========================================================================
 * API ERROR
 * ========================================================================== */

export interface AIErrorResponse {
  success?: boolean;
  message?: string;
  error?: string;
  code?: string;
  requestId?: string;
}