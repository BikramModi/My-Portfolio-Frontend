'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  forgotPasswordSchema,
  ForgotPasswordFormData,
} from '@/schemas/auth.schema';

import { useForgotPassword } from '@/hooks/auth/useForgotPassword';

export default function ForgotPasswordForm() {
  const forgotPasswordMutation =
    useForgotPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } =
    useForm<ForgotPasswordFormData>({
      resolver: zodResolver(
        forgotPasswordSchema
      ),
    });

  const onSubmit = (
    data: ForgotPasswordFormData
  ) => {
    forgotPasswordMutation.mutate(
      data
    );
  };

  return (
    <form
      onSubmit={handleSubmit(
        onSubmit
      )}
    >
      <div>
        <label>Email</label>

        <input
          type="email"
          {...register('email')}
        />

        {errors.email && (
          <p>
            {errors.email.message}
          </p>
        )}
      </div>

      <button
        disabled={
          forgotPasswordMutation.isPending
        }
      >
        {forgotPasswordMutation.isPending
          ? 'Sending...'
          : 'Send Reset Code'}
      </button>
    </form>
  );
}