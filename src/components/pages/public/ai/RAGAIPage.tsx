'use client';

import { Brain, Database, Search } from 'lucide-react';

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
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-slate-900/5">
            <div className="border-b border-gray-100 px-6 py-5 sm:px-8">
              <h2 className="text-lg font-bold text-slate-900">
                Portfolio Knowledge
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Retrieval-augmented AI workspace
              </p>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-3 sm:p-8">
              <div className="rounded-2xl border border-gray-100 bg-slate-50 p-5">
                <Database className="text-violet-600" size={22} />

                <h3 className="mt-4 font-semibold text-slate-900">
                  Knowledge Base
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Portfolio information prepared for retrieval.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-slate-50 p-5">
                <Search className="text-violet-600" size={22} />

                <h3 className="mt-4 font-semibold text-slate-900">
                  Retrieval
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Relevant knowledge will be retrieved for each question.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-slate-50 p-5">
                <Brain className="text-violet-600" size={22} />

                <h3 className="mt-4 font-semibold text-slate-900">
                  Grounded Answer
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Responses will be generated using retrieved context.
                </p>
              </div>
            </div>

            <div className="mx-6 mb-6 rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center sm:mx-8 sm:mb-8">
              <p className="text-sm font-semibold text-slate-600">
                RAG conversation interface will be implemented in a later
                module.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}