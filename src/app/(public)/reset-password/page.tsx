import { Suspense } from 'react';

import ResetPasswordForm from '@/components/pages/public/reset-password/ResetPasswordForm';

export default function ResetPasswordPage() {
  return (
    <main>
      <h1>Reset Password</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <ResetPasswordForm />
      </Suspense>
    </main>
  );
}