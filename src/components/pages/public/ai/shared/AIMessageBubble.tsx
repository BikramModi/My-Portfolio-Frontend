import { Bot, User } from 'lucide-react';

export type AIMessageRole = 'user' | 'assistant';

export interface AIMessage {
  id: string;
  role: AIMessageRole;
  content: string;
}

interface AIMessageBubbleProps {
  message: AIMessage;
}

export default function AIMessageBubble({
  message,
}: AIMessageBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <div
      className={`flex w-full ${
        isUser ? 'justify-end' : 'justify-start'
      }`}
    >
      <div
        className={`flex max-w-[85%] items-start gap-3 sm:max-w-[75%] ${
          isUser ? 'flex-row-reverse' : 'flex-row'
        }`}
      >
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
            isUser
              ? 'bg-blue-600 text-white'
              : 'bg-slate-100 text-slate-700'
          }`}
        >
          {isUser ? <User size={17} /> : <Bot size={17} />}
        </div>

        <div
          className={`rounded-2xl px-4 py-3 text-sm leading-6 ${
            isUser
              ? 'rounded-tr-md bg-blue-600 text-white'
              : 'rounded-tl-md border border-gray-100 bg-slate-50 text-slate-700'
          }`}
        >
          <p className="whitespace-pre-wrap break-words">
            {message.content}
          </p>
        </div>
      </div>
    </div>
  );
}