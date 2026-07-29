'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';

import {
  verifyEmailSchema,
  VerifyEmailFormData,
} from '@/schemas/auth.schema';

import { useVerifyEmail } from '@/hooks/auth/useVerifyEmail';
import { useResendOTP } from '@/hooks/auth/useResendOTP';

export default function VerifyEmailForm() {
  const searchParams = useSearchParams();

  const email = searchParams.get('email') ?? '';

  const verifyMutation = useVerifyEmail();

  const resendMutation = useResendOTP();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyEmailFormData>({
    resolver: zodResolver(verifyEmailSchema),

    defaultValues: {
      email,
      otp: '',
    },
  });

  const onSubmit = (data: VerifyEmailFormData) => {
    verifyMutation.mutate(data);
  };

  const handleResendOTP = () => {
    resendMutation.mutate({
      email,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>

        <input
          {...register('email')}
          readOnly
        />

        {errors.email && (
          <p>{errors.email.message}</p>
        )}
      </div>

      <div>
        <label>OTP</label>

        <input
          {...register('otp')}
        />

        {errors.otp && (
          <p>{errors.otp.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={verifyMutation.isPending}
      >
        {verifyMutation.isPending
          ? 'Verifying...'
          : 'Verify Email'}
      </button>

      <button
        type="button"
        onClick={handleResendOTP}
        disabled={resendMutation.isPending}
      >
        {resendMutation.isPending
          ? 'Sending...'
          : 'Resend OTP'}
      </button>
    </form>
  );
}