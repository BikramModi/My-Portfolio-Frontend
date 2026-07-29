import { Suspense } from 'react';

import VerifyEmailForm from '@/components/pages/public/verify-email/VerifyEmailForm';

export default function VerifyEmailPage() {
  return (
    <main>
      

      <Suspense fallback={<p>Loading...</p>}>
        <VerifyEmailForm />
      </Suspense>
    </main>
  );
}