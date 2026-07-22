'use client';

import { AIModel } from '@/types/ai.type';

interface ModelSelectorProps {
  models: AIModel[];
  selectedModel: string;
  onChange: (value: string) => void;
}

export default function ModelSelector({
  models,
  selectedModel,
  onChange,
}: ModelSelectorProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor="ai-model"
        className="text-sm font-semibold text-slate-700"
      >
        AI Model
      </label>

      <select
        id="ai-model"
        value={selectedModel}
        onChange={(e) => onChange(e.target.value)}
        disabled={models.length === 0}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 disabled:cursor-not-allowed disabled:bg-slate-100"
      >
        {models.length === 0 ? (
          <option value="">
            No models available
          </option>
        ) : (
          models.map((model) => (
            <option
              key={model.digest}
              value={model.model}
            >
              {model.name}
              {model.details.parameter_size
                ? ` (${model.details.parameter_size})`
                : ''}
            </option>
          ))
        )}
      </select>

      {selectedModel && (
        <p className="text-xs text-slate-500">
          Selected: {selectedModel}
        </p>
      )}
    </div>
  );
}