'use client';

import {
  useState,
} from 'react';

import AIChatInput from './AIChatInput';
import AIEmptyState from './AIEmptyState';
import AIMessageList from './AIMessageList';
import AITypingIndicator from './AITypingIndicator';
import type { AIMessage } from './AIMessageBubble';

interface AIChatShellProps {
  title: string;
  description: string;
  placeholder?: string;
  emptyTitle?: string;
  emptyDescription?: string;
}

export default function AIChatShell({
  title,
  description,
  placeholder = 'Ask something...',
  emptyTitle = 'Start a conversation',
  emptyDescription = 'Send a message to begin interacting with the AI.',
}: AIChatShellProps) {
  const [messages, setMessages] = useState<AIMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (content: string) => {
    const userMessage: AIMessage = {
      id: `${Date.now()}-user`,
      role: 'user',
      content,
    };

    setMessages((current) => [...current, userMessage]);

    /*
     * Backend integration intentionally excluded from Module 3.
     *
     * This temporary response allows us to validate the complete
     * frontend interaction before connecting the real AI services.
     */
    setLoading(true);

    window.setTimeout(() => {
      const assistantMessage: AIMessage = {
        id: `${Date.now()}-assistant`,
        role: 'assistant',
        content:
          'The AI backend will be connected in the upcoming integration module.',
      };

      setMessages((current) => [
        ...current,
        assistantMessage,
      ]);

      setLoading(false);
    }, 700);
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-slate-900/5">
      {/* Header */}
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

          <span className="hidden shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600 sm:inline-flex">
            Online
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="bg-white">
        {messages.length === 0 ? (
          <AIEmptyState
            title={emptyTitle}
            description={emptyDescription}
          />
        ) : (
          <>
            <AIMessageList messages={messages} />

            {loading && (
              <div className="px-5 pb-5 sm:px-6">
                <AITypingIndicator />
              </div>
            )}
          </>
        )}
      </div>

      {/* Input */}
      <AIChatInput
        onSubmit={handleSubmit}
        disabled={loading}
        placeholder={placeholder}
      />
    </div>
  );
}