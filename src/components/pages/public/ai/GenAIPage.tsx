import { Sparkles } from 'lucide-react';

import AIChatShell from './shared/AIChatShell';

export default function GenAIPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-50">
      <section className="mx-auto flex w-full max-w-7xl flex-col px-6 py-16 sm:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            <Sparkles size={16} />
            Generative AI
          </div>

          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Gen AI
          </h1>

          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Interact with a generative AI experience designed to demonstrate
            intelligent conversation and modern AI integration.
          </p>
        </div>

        <div className="mx-auto mt-12 w-full max-w-4xl">
          <AIChatShell
            type="gen-ai"
            title="Generative AI Workspace"
            description="Explore conversational AI capabilities."
            placeholder="Ask the generative AI something..."
            emptyTitle="Start exploring Gen AI"
            emptyDescription="Ask a question or start a conversation with the generative AI experience."
          />
        </div>
      </section>
    </main>
  );
}