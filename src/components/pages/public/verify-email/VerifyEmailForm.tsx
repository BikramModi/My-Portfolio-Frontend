'use client';

import { Mail, ShieldCheck, KeyRound } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { ROUTES } from '@/constants/routes.constant';

import { useRef } from 'react';

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

    const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

    const [otp, setOtp] = useState(Array(6).fill(''));

    const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

    const {
        register,
        handleSubmit,
        setValue,
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
        resendMutation.mutate(
            {
                email,
            },
            {
                onSuccess: () => {
                    setTimeLeft(300);
                },
            }
        );
    };

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);



    const handleOTPChange = (
        index: number,
        value: string
    ) => {
        if (!/^\d?$/.test(value)) return;

        const updatedOTP = [...otp];
        updatedOTP[index] = value;

        setOtp(updatedOTP);
        setValue('otp', updatedOTP.join(''));

        if (value && index < 5) {
            otpRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (
        index: number,
        e: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (
            e.key === 'Backspace' &&
            !otp[index] &&
            index > 0
        ) {
            otpRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (
        e: React.ClipboardEvent<HTMLInputElement>
    ) => {
        e.preventDefault();

        const pasted = e.clipboardData
            .getData('text')
            .replace(/\D/g, '')
            .slice(0, 6);

        if (!pasted) return;

        const values = pasted.split('');

        const updated = Array(6).fill('');

        values.forEach((digit, i) => {
            updated[i] = digit;
        });

        setOtp(updated);
        setValue('otp', updated.join(''));

        const lastIndex = Math.min(values.length, 5);

        otpRefs.current[lastIndex]?.focus();
    };


    return (
        <div className="mx-auto w-full max-w-md rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8">
            <div className="mb-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                    <ShieldCheck className="h-8 w-8" />
                </div>

                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    Verify Email
                </h2>

                <p className="mt-2 text-sm text-gray-500 sm:text-base">
                    Enter the verification code sent to your email.
                </p>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
            >
                {/* Email */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Email Address
                    </label>

                    <div className="relative">
                        <Mail className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />

                        <input
                            {...register('email')}
                            readOnly
                            className="w-full rounded-xl border border-gray-300 bg-gray-100 py-3 pr-4 pl-12 text-sm text-gray-600 outline-none"
                        />
                    </div>

                    {errors.email && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* OTP */}
                <div>
    <label className="mb-2 block text-sm font-medium text-gray-700">
        Verification Code
    </label>

    <p className="mb-5 text-sm text-gray-500">
        Enter the 6-digit code sent to your email
    </p>

    <input
        type="hidden"
        {...register('otp')}
    />

    <div className="flex justify-center gap-3 sm:gap-4">
        {otp.map((digit, index) => (
            <input
                key={index}
                ref={(el) => {
                    otpRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                autoFocus={index === 0}
                maxLength={1}
                value={digit}
                onPaste={handlePaste}
                onChange={(e) =>
                    handleOTPChange(index, e.target.value)
                }
                onKeyDown={(e) =>
                    handleKeyDown(index, e)
                }
                className="
                    h-14 w-12
                    rounded-2xl
                    border border-gray-300
                    bg-white
                    text-center
                    text-xl
                    font-bold
                    text-gray-900
                    shadow-sm
                    transition-all
                    duration-200
                    outline-none
                    focus:scale-105
                    focus:border-blue-600
                    focus:ring-4
                    focus:ring-blue-100
                    sm:h-16
                    sm:w-14
                    md:h-16
                    md:w-15
                "
            />
        ))}
    </div>

    {errors.otp && (
        <p className="mt-3 text-center text-sm text-red-500">
            {errors.otp.message}
        </p>
    )}
</div>

                {/* OTP Timer */}
                <div className="flex items-center justify-between text-sm">
                    <p className="text-gray-500">
                        OTP expires in{' '}
                        <span className="font-semibold text-blue-600">
                            {String(Math.floor(timeLeft / 60)).padStart(2, '0')}:
                            {String(timeLeft % 60).padStart(2, '0')}
                        </span>
                    </p>
                </div>

                {/* Verify Error */}
                {verifyMutation.isError && (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                        {(
                            verifyMutation.error as {
                                response?: {
                                    data?: {
                                        message?: string;
                                    };
                                };
                            }
                        )?.response?.data?.message ?? 'Email verification failed.'}
                    </div>
                )}

                {/* Verify Button */}
                <button
                    type="submit"
                    disabled={verifyMutation.isPending}
                    className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {verifyMutation.isPending ? (
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

                            Verifying...
                        </>
                    ) : (
                        'Verify Email'
                    )}
                </button>

                {/* Resend Button */}
                <button
                    type="button"
                    onClick={handleResendOTP}
                    disabled={
                        resendMutation.isPending ||
                        timeLeft > 0
                    }
                    className="w-full rounded-xl border border-blue-600 bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {
                        resendMutation.isPending
                            ? 'Sending...'
                            : timeLeft > 0
                                ? `Resend OTP (${Math.floor(timeLeft / 60)}:${String(
                                    timeLeft % 60
                                ).padStart(2, '0')})`
                                : 'Resend OTP'
                    }
                </button>

                {resendMutation.isError && (
                    <div className="mt-3 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                        {(
                            resendMutation.error as {
                                response?: {
                                    data?: {
                                        message?: string;
                                    };
                                };
                            }
                        )?.response?.data?.message ?? 'Failed to resend OTP.'}
                    </div>
                )}

                <div className="border-t border-gray-200 pt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Wrong email?{' '}
                        <Link
                            href={ROUTES.REGISTER}
                            className="font-semibold text-blue-600 transition hover:text-blue-700"
                        >
                            Register again
                        </Link>
                    </p>
                </div>


            </form>
        </div>
    );
}