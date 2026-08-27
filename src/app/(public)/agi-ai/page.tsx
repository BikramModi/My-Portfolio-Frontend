import type { Metadata } from 'next';

import AGIAIPage from '@/components/pages/public/ai/AGIAIPage';

export const metadata: Metadata = {
  title: 'AGI AI | Bikram Modi',
  description:
    'Explore Bikram Modi’s future AGI AI research and experimentation.',
};

export default function AGIAIRoute() {
  return <AGIAIPage />;
}