import type { Metadata } from 'next';

import AgenticAIPage from '@/components/pages/public/ai/AgenticAIPage';

export const metadata: Metadata = {
  title: 'Agentic AI | Bikram Modi',
  description:
    'Explore an agentic AI experience demonstrating planning, tools, reasoning, and execution.',
};

export default function AgenticAIRoute() {
  return <AgenticAIPage />;
}