'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Mail, ShieldQuestion } from 'lucide-react';
import { AxiosError } from 'axios';

import {
  forgotPasswordSchema,
  ForgotPasswordFormData,
} from '@/schemas/auth.schema';

import { useForgotPassword } from '@/hooks/auth/useForgotPassword';


type ForgotPasswordErrorResponse = {
  success: boolean;
  message: string;
};

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

  const error =
  forgotPasswordMutation.error as AxiosError<ForgotPasswordErrorResponse>;

  return (
  <div className="mx-auto w-full max-w-md rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8">
    <div className="mb-8 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
        <ShieldQuestion className="h-8 w-8" />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        Forgot Password
      </h2>

      <p className="mt-2 text-sm text-gray-500 sm:text-base">
        Enter your email to receive a password reset code.
      </p>
    </div>

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>

        <div className="relative">
          <Mail className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />

          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register('email')}
            className="w-full rounded-xl border border-gray-300 py-3 pr-4 pl-12 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {errors.email && (
          <p className="mt-2 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* API Error */}
      {forgotPasswordMutation.isError && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
          {error.response?.data.message ??
            'Failed to send reset code.'}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={forgotPasswordMutation.isPending}
        className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {forgotPasswordMutation.isPending ? (
          <>
            <svg
              className="mr-2 h-5 w-5 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-20"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />

              <path
                className="opacity-80"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>

            Sending...
          </>
        ) : (
          'Send Reset Code'
        )}
      </button>
    </form>
  </div>
);
}