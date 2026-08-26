'use client';

import { useState } from 'react';

const STORAGE_KEY =
  'agentic-ai-conversation-id';

function createConversationId(): string {
  return crypto.randomUUID();
}

function getConversationId(): string | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const existingId =
    sessionStorage.getItem(STORAGE_KEY);

  if (existingId) {
    return existingId;
  }

  const newId = createConversationId();

  sessionStorage.setItem(
    STORAGE_KEY,
    newId,
  );

  return newId;
}

export function useAIConversation() {
  const [conversationId, setConversationId] =
    useState<string | null>(getConversationId);

  const resetConversation = () => {
    const newId = createConversationId();

    sessionStorage.setItem(
      STORAGE_KEY,
      newId,
    );

    setConversationId(newId);
  };

  return {
    conversationId,
    resetConversation,
  };
}