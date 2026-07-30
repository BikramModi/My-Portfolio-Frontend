'use client';

import { useEffect, useRef, useState } from 'react';
import { AxiosError } from 'axios';
import { Mail, ShieldCheck } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  verifyResetOTPSchema,
  VerifyResetOTPFormData,
} from '@/schemas/auth.schema';

import { useVerifyResetOTP } from '@/hooks/auth/useVerifyResetOTP';
import { useForgotPassword } from '@/hooks/auth/useForgotPassword';

type ErrorResponse = {
  success: boolean;
  message: string;
};

export default function VerifyResetOTPForm() {
  const searchParams = useSearchParams();

  const email = searchParams.get('email') ?? '';

  const verifyMutation = useVerifyResetOTP();

  const resendMutation = useForgotPassword();

  const [countdown, setCountdown] = useState(0);

  const [otp, setOtp] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
  ]);

  const otpRefs = useRef<
    (HTMLInputElement | null)[]
  >([]);

  const error =
    verifyMutation.error as AxiosError<ErrorResponse>;

  const resendError =
    resendMutation.error as AxiosError<ErrorResponse>;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<VerifyResetOTPFormData>({
    resolver: zodResolver(
      verifyResetOTPSchema
    ),

    defaultValues: {
      email,
      otp: '',
    },
  });

  useEffect(() => {
    setValue('otp', otp.join(''));
  }, [otp, setValue]);

  useEffect(() => {
    otpRefs.current[0]?.focus();
  }, []);

  const handleOTPChange = (
    index: number,
    value: string
  ) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];

    newOtp[index] = value;

    setOtp(newOtp);

    if (
      value &&
      index < otpRefs.current.length - 1
    ) {
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

    const newOtp = [...otp];

    pasted.split('').forEach((digit, index) => {
      newOtp[index] = digit;
    });

    setOtp(newOtp);

    const lastIndex = Math.min(
      pasted.length - 1,
      5
    );

    otpRefs.current[lastIndex]?.focus();
  };

  const onSubmit = (
    data: VerifyResetOTPFormData
  ) => {
    verifyMutation.mutate(data);
  };

  const handleResend = () => {
    resendMutation.mutate(
      {
        email,
      },
      {
        onSuccess: () => {
          setCountdown(60);

          setOtp([
            '',
            '',
            '',
            '',
            '',
            '',
          ]);

          otpRefs.current[0]?.focus();
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
    <div className="mx-auto w-full max-w-md rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
          <ShieldCheck className="h-8 w-8" />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Verify Reset OTP
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
                  h-12
                  w-10
                  rounded-2xl
                  border
                  border-gray-300
                  bg-white
                  text-center
                  text-lg
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
                  sm:h-14
                  sm:w-12
                  sm:text-xl
                  md:h-16
                  md:w-14
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

        {/* Countdown */}
        <div className="flex items-center justify-between text-sm">
          <p className="text-gray-500">
            Resend available in{' '}
            <span className="font-semibold text-blue-600">
              {String(
                Math.floor(countdown / 60)
              ).padStart(2, '0')}
              :
              {String(
                countdown % 60
              ).padStart(2, '0')}
            </span>
          </p>
        </div>

        {/* Verify Error */}
        {verifyMutation.isError && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
            {error.response?.data.message ??
              'OTP verification failed.'}
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
            'Verify OTP'
          )}
        </button>

        {/* Resend Button */}
        <button
          type="button"
          onClick={handleResend}
          disabled={
            resendMutation.isPending ||
            countdown > 0
          }
          className="w-full rounded-xl border border-blue-600 bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {resendMutation.isPending
            ? 'Sending...'
            : countdown > 0
            ? `Resend OTP (${Math.floor(
                countdown / 60
              )}:${String(
                countdown % 60
              ).padStart(2, '0')})`
            : 'Resend OTP'}
        </button>

        {/* Resend Error */}
        {resendMutation.isError && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
            {resendError.response?.data.message ??
              'Failed to resend OTP.'}
          </div>
        )}
      </form>
    </div>
  );
}