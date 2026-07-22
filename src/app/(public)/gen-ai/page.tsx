import ChatLayout from '@/components/pages/public/ai/ChatLayout';

export default function AIPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-12">

      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          AI Playground
        </h1>

        <p className="mt-2 text-slate-600">
          Interact with locally hosted Ollama models.
        </p>
      </div>

      <ChatLayout />

    </main>
  );
}