'use client';

import {
  Bot,
  Brain,
  GitBranch,
  Wrench,
} from 'lucide-react';

const agentSteps = [
  {
    title: 'Understand',
    description: 'Interpret the user request.',
    icon: Brain,
  },
  {
    title: 'Plan',
    description: 'Determine the required execution steps.',
    icon: GitBranch,
  },
  {
    title: 'Use Tools',
    description: 'Select and execute available capabilities.',
    icon: Wrench,
  },
  {
    title: 'Respond',
    description: 'Return the final result to the user.',
    icon: Bot,
  },
];

export default function AgenticAIPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-50">
      <section className="mx-auto flex w-full max-w-7xl flex-col px-6 py-16 sm:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-600">
            <Bot size={16} />
            Autonomous AI
          </div>

          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Agentic AI
          </h1>

          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Explore an agentic AI architecture capable of understanding
            requests, planning actions, using tools, and producing results.
          </p>
        </div>

        <div className="mx-auto mt-12 w-full max-w-5xl">
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-slate-900/5">
            <div className="border-b border-gray-100 px-6 py-5 sm:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Bot size={21} />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Agent Execution Pipeline
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    AI agent architecture
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4 sm:p-8">
              {agentSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="relative rounded-2xl border border-gray-100 bg-slate-50 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                        <Icon size={20} />
                      </div>

                      <span className="text-xs font-bold text-slate-400">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-5 font-semibold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mx-6 mb-6 rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center sm:mx-8 sm:mb-8">
              <p className="text-sm font-semibold text-slate-600">
                Agent execution and tool interaction will be connected to the
                backend in a later module.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}