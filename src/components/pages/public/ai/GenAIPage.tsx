'use client';

import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function GenAIPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-50">
      <section className="mx-auto flex w-full max-w-7xl flex-col px-6 py-16 sm:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-12">
        {/* Header */}
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

        {/* AI Workspace Placeholder */}
        <div className="mx-auto mt-12 w-full max-w-4xl">
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-slate-900/5">
            <div className="border-b border-gray-100 px-6 py-5 sm:px-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    AI Workspace
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Generative AI interface
                  </p>
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                  Ready
                </span>
              </div>
            </div>

            <div className="flex min-h-[360px] flex-col items-center justify-center px-6 py-12 text-center sm:px-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Sparkles size={28} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Generative AI coming next
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                The AI conversation interface will be connected to the backend
                in a later module.
              </p>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-500">
                Backend integration pending
                <ArrowUpRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}