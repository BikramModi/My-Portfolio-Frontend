export interface AIModel {
  name: string;
  model: string;
  modified_at: string;
  size: number;
  digest: string;

  details: {
    parent_model: string;
    format: string;
    family: string;
    families: string[];
    parameter_size: string;
    quantization_level: string;
    context_length?: number;
    embedding_length?: number;
  };

  capabilities: string[];
}

export interface HealthResponse {
  status: string;
  models: number;
}

export interface ChatRequest {
  model: string;
  prompt: string;
}

export interface ChatResponse {
  success: boolean;
  response: string;
}