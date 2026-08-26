'use client';

import {
  Bot,
} from 'lucide-react';

import {
  useAIChat,
} from '@/hooks/useAI3Chat';

import type {
  AIType,
} from '@/types/ai3.type';

import AIChatInput from './AIChatInput';
import AIEmptyState from './AIEmptyState';
import AIMessageList from './AIMessageList';
import AITypingIndicator from './AITypingIndicator';

interface AIChatShellProps {
  type: AIType;
  conversationId?: string | null;
  title: string;
  description: string;
  placeholder?: string;
  emptyTitle?: string;
  emptyDescription?: string;
}

export default function AIChatShell({
  type,
  conversationId,
  title,
  description,
  placeholder = 'Ask something...',
  emptyTitle = 'Start a conversation',
  emptyDescription = 'Send a message to begin interacting with the AI.',
}: AIChatShellProps) {
  const {
    messages,
    loading,
    error,
    sendMessage,
  } = useAIChat(type,{conversationId,});

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-slate-900/5">
      <div className="border-b border-gray-100 px-5 py-5 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              {title}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {description}
            </p>
          </div>

          <span className="hidden shrink-0 items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600 sm:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Online
          </span>
        </div>
      </div>

      {messages.length === 0 ? (
        <AIEmptyState
          title={emptyTitle}
          description={emptyDescription}
        />
      ) : (
        <>
          <AIMessageList
            messages={messages}
          />

          {loading && (
            <div className="px-5 pb-5 sm:px-6">
              <AITypingIndicator />
            </div>
          )}
        </>
      )}

      {error && (
        <div className="mx-5 mb-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600 sm:mx-6">
          {error}
        </div>
      )}

      <AIChatInput
        onSubmit={sendMessage}
        disabled={loading}
        placeholder={placeholder}
      />
    </div>
  );
}