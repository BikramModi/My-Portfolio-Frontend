'use client';

import ChatLayout from './ChatLayout';

export default function AIPlayground() {
  return (
    <section className="mx-auto min-h-screen w-full px-6 py-12 sm:px-8 lg:px-10 xl:px-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900">
          AI Playground
        </h1>

        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Chat with locally hosted AI models powered by Ollama.
          Switch between Gemma 3, Phi-3, and Qwen 2.5 while keeping
          your conversations private.
        </p>
      </div>

      <ChatLayout />
    </section>
  );
}