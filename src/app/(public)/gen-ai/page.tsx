import type { Metadata } from 'next';

import GenAIPage from '@/components/pages/public/ai/GenAIPage';

export const metadata: Metadata = {
  title: 'Gen AI | Bikram Modi',
  description:
    'Explore the Generative AI capabilities of Bikram Modi’s AI portfolio.',
};

export default function GenAIRoute() {
  return <GenAIPage />;
}