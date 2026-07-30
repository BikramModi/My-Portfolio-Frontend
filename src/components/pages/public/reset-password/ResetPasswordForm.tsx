'use client';

import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useState } from 'react';
import { AxiosError } from 'axios';
import {
    Lock,
    ShieldCheck,
    Eye,
    EyeOff,
} from 'lucide-react';

import {
    resetPasswordSchema,
    ResetPasswordFormData,
} from '@/schemas/auth.schema';

import { useResetPassword } from '@/hooks/auth/useResetPassword';

type ResetPasswordErrorResponse = {
    success: boolean;
    message: string;
};

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

    const [showPassword, setShowPassword] =
        useState(false);

    const [
        showConfirmPassword,
        setShowConfirmPassword,
    ] = useState(false);

    const error =
        resetMutation.error as AxiosError<ResetPasswordErrorResponse>;

    return (
        <div className="mx-auto w-full max-w-md rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8">
            <div className="mb-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                    <ShieldCheck className="h-8 w-8" />
                </div>

                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    Reset Password
                </h2>

                <p className="mt-2 text-sm text-gray-500 sm:text-base">
                    Create a new password for your account.
                </p>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
            >
                <input
                    type="hidden"
                    {...register('resetToken')}
                />

                {/* Password */}
                <div>
                    <label
                        htmlFor="password"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        New Password
                    </label>

                    <div className="relative">
                        <Lock className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />

                        <input
                            id="password"
                            type={
                                showPassword
                                    ? 'text'
                                    : 'password'
                            }
                            placeholder="••••••••"
                            {...register('password')}
                            className="w-full rounded-xl border border-gray-300 py-3 pr-12 pl-12 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />

                        <button
                            type="button"
                            aria-label={
                                showPassword
                                    ? 'Hide password'
                                    : 'Show password'
                            }
                            onClick={() =>
                                setShowPassword(
                                    (prev) => !prev
                                )
                            }
                            className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 transition hover:text-gray-600"
                        >
                            {showPassword ? (
                                <EyeOff className="h-5 w-5" />
                            ) : (
                                <Eye className="h-5 w-5" />
                            )}
                        </button>
                    </div>

                    {errors.password && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                {/* Confirm Password */}
                <div>
                    <label
                        htmlFor="confirmPassword"
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        Confirm Password
                    </label>

                    <div className="relative">
                        <Lock className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />

                        <input
                            id="confirmPassword"
                            type={
                                showConfirmPassword
                                    ? 'text'
                                    : 'password'
                            }
                            placeholder="••••••••"
                            {...register(
                                'confirmPassword'
                            )}
                            className="w-full rounded-xl border border-gray-300 py-3 pr-12 pl-12 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />

                        <button
                            type="button"
                            aria-label={
                                showConfirmPassword
                                    ? 'Hide confirm password'
                                    : 'Show confirm password'
                            }
                            onClick={() =>
                                setShowConfirmPassword(
                                    (prev) => !prev
                                )
                            }
                            className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 transition hover:text-gray-600"
                        >
                            {showConfirmPassword ? (
                                <EyeOff className="h-5 w-5" />
                            ) : (
                                <Eye className="h-5 w-5" />
                            )}
                        </button>
                    </div>

                    {errors.confirmPassword && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.confirmPassword.message}
                        </p>
                    )}
                </div>

                {/* API Error */}
                {resetMutation.isError && (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                        {error.response?.data.message ??
                            'Password reset failed.'}
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={resetMutation.isPending}
                    className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {resetMutation.isPending ? (
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

                            Updating Password...
                        </>
                    ) : (
                        'Reset Password'
                    )}
                </button>
            </form>
        </div>
    );
}