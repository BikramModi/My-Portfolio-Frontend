'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  verifyResetOTPSchema,
  VerifyResetOTPFormData,
} from '@/schemas/auth.schema';

import { useVerifyResetOTP } from '@/hooks/auth/useVerifyResetOTP';
import { useForgotPassword } from '@/hooks/auth/useForgotPassword';

export default function VerifyResetOTPForm() {
  const searchParams = useSearchParams();

  const email = searchParams.get('email') ?? '';

  const verifyMutation = useVerifyResetOTP();

  const resendMutation = useForgotPassword();

  const [countdown, setCountdown] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyResetOTPFormData>({
    resolver: zodResolver(verifyResetOTPSchema),

    defaultValues: {
      email,
      otp: '',
    },
  });

  const onSubmit = (
    data: VerifyResetOTPFormData
  ) => {
    verifyMutation.mutate(data);
  };

  const handleResend = () => {
    resendMutation.mutate(
      { email },
      {
        onSuccess: () => {
          setCountdown(60);
        },
      }
    );
  };

  useEffect(() => {
    if (countdown <= 0) return;

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>

        <input
          readOnly
          {...register('email')}
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
        disabled={verifyMutation.isPending}
      >
        {verifyMutation.isPending
          ? 'Verifying...'
          : 'Verify OTP'}
      </button>

      <button
        type="button"
        onClick={handleResend}
        disabled={
          resendMutation.isPending ||
          countdown > 0
        }
      >
        {countdown > 0
          ? `Resend in ${countdown}s`
          : resendMutation.isPending
          ? 'Sending...'
          : 'Resend OTP'}
      </button>
    </form>
  );
}