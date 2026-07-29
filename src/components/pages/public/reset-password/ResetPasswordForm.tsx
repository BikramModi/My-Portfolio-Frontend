'use client';

import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  resetPasswordSchema,
  ResetPasswordFormData,
} from '@/schemas/auth.schema';

import { useResetPassword } from '@/hooks/auth/useResetPassword';

export default function ResetPasswordForm() {
  const searchParams = useSearchParams();

  const resetToken =
    searchParams.get('token') ?? '';

  const resetMutation = useResetPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),

    defaultValues: {
      resetToken,
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (
    data: ResetPasswordFormData
  ) => {
    resetMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="hidden"
        {...register('resetToken')}
      />

      <div>
        <label>New Password</label>

        <input
          type="password"
          {...register('password')}
        />

        {errors.password && (
          <p>{errors.password.message}</p>
        )}
      </div>

      <div>
        <label>Confirm Password</label>

        <input
          type="password"
          {...register('confirmPassword')}
        />

        {errors.confirmPassword && (
          <p>{errors.confirmPassword.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={resetMutation.isPending}
      >
        {resetMutation.isPending
          ? 'Updating Password...'
          : 'Reset Password'}
      </button>

      {resetMutation.isError && (
        <p>Password reset failed.</p>
      )}
    </form>
  );
}