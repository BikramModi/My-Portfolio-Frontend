'use client';

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  loading: boolean;
}

export default function PromptInput({
  value,
  onChange,
  onSubmit,
  loading,
}: PromptInputProps) {
  return (
    <div className="space-y-4">
      <textarea
        rows={6}
        value={value}
        placeholder="Ask anything..."
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-blue-500"
      />

      <button
        onClick={onSubmit}
        disabled={loading}
        className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {loading ? 'Thinking...' : 'Send'}
      </button>
    </div>
  );
}