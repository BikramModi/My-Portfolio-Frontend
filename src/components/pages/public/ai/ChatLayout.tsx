'use client';

import { useState, useEffect } from 'react';

import ModelSelector from './ModelSelector';
import PromptInput from './PromptInput';
import ResponseBox from './ResponseBox';

import { useAIModels } from '@/hooks/useAIModels';
import { useAIChat } from '@/hooks/useAIChat';

export default function ChatLayout() {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useAIModels();

  const chatMutation = useAIChat();

  const [selectedModel, setSelectedModel] =
    useState('');

  const [prompt, setPrompt] =
    useState('');

  useEffect(() => {}, [selectedModel]);

  useEffect(() => {}, [prompt]);

  useEffect(() => {}, [data]);

  useEffect(() => {}, [isLoading]);

  useEffect(() => {}, [isError, error]);

  const currentModel =
    selectedModel || data?.[0]?.model || '';

  const handleSubmit = () => {
    if (!prompt.trim()) {
      return;
    }

    if (!currentModel) {
      return;
    }

    chatMutation.mutate({
      model: currentModel,
      prompt,
    });
  };

  if (isLoading) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
        <p className="text-slate-600">
          Loading AI models...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-xl border border-red-300 bg-red-50 p-8">
        <h2 className="font-bold text-red-600">
          Failed to load AI models
        </h2>

        <pre className="mt-4 overflow-auto rounded bg-white p-4 text-sm text-black">
          {JSON.stringify(error, null, 2)}
        </pre>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <ModelSelector
        models={data ?? []}
        selectedModel={currentModel}
        onChange={setSelectedModel}
      />

      <PromptInput
        value={prompt}
        onChange={setPrompt}
        onSubmit={handleSubmit}
        loading={chatMutation.isPending}
      />

      <ResponseBox
        response={chatMutation.data?.response ?? ''}
      />
    </div>
  );
}