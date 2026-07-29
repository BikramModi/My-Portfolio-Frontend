import { Suspense } from 'react';

import VerifyResetOTPForm from '@/components/pages/public/verify-reset-otp/VerifyResetOTPForm';

export default function VerifyResetOTPPage() {
  return (
    <main>
      <h1>Verify Password Reset</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <VerifyResetOTPForm />
      </Suspense>
    </main>
  );
}
