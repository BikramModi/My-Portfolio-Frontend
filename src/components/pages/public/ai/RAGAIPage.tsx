import {
  Brain,
  Database,
  Search,
} from 'lucide-react';

import AIChatShell from './shared/AIChatShell';

export default function RAGAIPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-50">
      <section className="mx-auto flex w-full max-w-7xl flex-col px-6 py-16 sm:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-600">
            <Brain size={16} />
            Retrieval-Augmented Generation
          </div>

          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            RAG AI
          </h1>

          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Ask questions about my projects, skills, experience, and technical
            background using a knowledge-grounded AI experience.
          </p>
        </div>

        <div className="mx-auto mt-12 w-full max-w-4xl">
          <AIChatShell
            type="rag-ai"
            title="Portfolio Knowledge Assistant"
            description="Ask questions grounded in portfolio knowledge."
            placeholder="Ask about projects, skills, experience..."
            emptyTitle="Explore portfolio knowledge"
            emptyDescription="Ask a question about my projects, skills, experience, or technical background."
          />
        </div>

        <div className="mx-auto mt-6 grid w-full max-w-4xl gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <Database className="text-violet-600" size={21} />

            <h3 className="mt-4 text-sm font-bold text-slate-900">
              Knowledge Base
            </h3>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Portfolio information available for retrieval.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <Search className="text-violet-600" size={21} />

            <h3 className="mt-4 text-sm font-bold text-slate-900">
              Semantic Retrieval
            </h3>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Relevant information will be retrieved for each query.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <Brain className="text-violet-600" size={21} />

            <h3 className="mt-4 text-sm font-bold text-slate-900">
              Grounded Response
            </h3>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Responses will use retrieved portfolio context.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}