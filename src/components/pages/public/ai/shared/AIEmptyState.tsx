import { Sparkles } from 'lucide-react';

interface AIEmptyStateProps {
  title: string;
  description: string;
}

export default function AIEmptyState({
  title,
  description,
}: AIEmptyStateProps) {
  return (
    <div className="flex min-h-[360px] flex-col items-center justify-center px-6 py-12 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
        <Sparkles size={28} />
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
        {description}
      </p>
    </div>
  );
}