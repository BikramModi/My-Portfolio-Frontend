

'use client';

import {
  Bot,
  Brain,
  GitBranch,
  Wrench,
} from 'lucide-react';

import AIChatShell from './shared/AIChatShell';

import { useAIConversation } from '@/hooks/useAIConversation';

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

 const {
    conversationId,
    resetConversation,
  } = useAIConversation();


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

        {/* Agent Pipeline */}
        <div className="mx-auto mt-12 w-full max-w-5xl">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {agentSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-gray-100 bg-slate-50 p-5"
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
          </div>
        </div>

        {/* Agent Chat */}
        <div className="mx-auto mt-8 w-full max-w-5xl">
          <AIChatShell
            type="agentic-ai"
            conversationId={conversationId}
            title="Agent Workspace"
            description="Interact with the agentic AI execution system."
            placeholder="Give the agent a task..."
            emptyTitle="Start an agent task"
            emptyDescription="Describe a task and the agent will eventually plan, use tools, and execute it."
          />
        </div>
      </section>
    </main>
  );
}