import { Suspense } from 'react';

import VerifyResetOTPForm from '@/components/pages/public/verify-reset-otp/VerifyResetOTPForm';

export default function VerifyResetOTPPage() {
  return (
    <main>
      

      <Suspense fallback={<p>Loading...</p>}>
        <VerifyResetOTPForm />
      </Suspense>
    </main>
  );
}
