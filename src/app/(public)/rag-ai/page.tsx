import type { Metadata } from 'next';

import RAGAIPage from '@/components/pages/public/ai/RAGAIPage';

export const metadata: Metadata = {
  title: 'RAG AI | Bikram Modi',
  description:
    'Explore a retrieval-augmented AI experience grounded in Bikram Modi’s portfolio knowledge.',
};

export default function RAGAIRoute() {
  return <RAGAIPage />;
}