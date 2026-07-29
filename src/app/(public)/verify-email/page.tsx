import { Suspense } from 'react';

import VerifyEmailForm from '@/components/pages/public/verify-email/VerifyEmailForm';

export default function VerifyEmailPage() {
  return (
    <main>
      <h1>Verify Email</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <VerifyEmailForm />
      </Suspense>
    </main>
  );
}