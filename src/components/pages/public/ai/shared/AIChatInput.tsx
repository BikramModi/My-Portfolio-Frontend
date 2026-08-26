'use client';

import {
  ArrowUp,
  Loader2,
} from 'lucide-react';
import {
  FormEvent,
  KeyboardEvent,
  useState,
} from 'react';

interface AIChatInputProps {
  onSubmit: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export default function AIChatInput({
  onSubmit,
  disabled = false,
  placeholder = 'Ask something...',
}: AIChatInputProps) {
  const [message, setMessage] = useState('');

  const submitMessage = () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage || disabled) {
      return;
    }

    onSubmit(trimmedMessage);
    setMessage('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitMessage();
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      submitMessage();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-gray-100 bg-white p-4 sm:p-5"
    >
      <div className="flex items-end gap-3 rounded-2xl border border-gray-200 bg-slate-50 p-2 transition focus-within:border-blue-300 focus-within:ring-4 focus-within:ring-blue-50">
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          rows={1}
          maxLength={4000}
          placeholder={placeholder}
          className="max-h-32 min-h-11 flex-1 resize-none border-0 bg-transparent px-3 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-60"
          aria-label="AI message"
        />

        <button
          type="submit"
          disabled={!message.trim() || disabled}
          aria-label="Send message"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
        >
          {disabled ? (
            <Loader2
              size={18}
              className="animate-spin"
            />
          ) : (
            <ArrowUp size={19} />
          )}
        </button>
      </div>

      <div className="mt-2 flex items-center justify-between px-1">
        <span className="text-[11px] text-slate-400">
          Enter to send · Shift + Enter for a new line
        </span>

        <span className="text-[11px] text-slate-400">
          {message.length}/4000
        </span>
      </div>
    </form>
  );
}