import { z } from 'zod';

/**
 * Register Schema
 */
export const registerSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must not exceed 50 characters'),

    email: z.string().trim().email('Please enter a valid email address'),

    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(50, 'Password must not exceed 50 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
        'Password must contain at least one uppercase letter, one lowercase letter and one number'
      ),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
  

/**
 * Login Schema
 */
export const loginSchema = z.object({
  email: z.string().trim().email('Please enter a valid email address'),

  password: z.string().min(1, 'Password is required'),
});


/**
 * Verify Email Schema
 */
export const verifyEmailSchema = z.object({
  email: z.string().trim().email('Please enter a valid email address'),

  otp: z
    .string()
    .trim()
    .length(6, 'OTP must be exactly 6 digits')
    .regex(/^\d+$/, 'OTP must contain only numbers'),
});

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address'),
});

export const verifyResetOTPSchema =
  z.object({
    email: z
      .string()
      .trim()
      .email(),

    otp: z
      .string()
      .trim()
      .length(6, 'OTP must be exactly 6 digits')
      .regex(/^\d+$/, 'OTP must contain only numbers'),
  });


export const resetPasswordSchema = z
  .object({
    resetToken: z.string(),

    password: z
      .string()
      .min(
        8,
        'Password must be at least 8 characters'
      )
      .max(
        50,
        'Password must not exceed 50 characters'
      )
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
        'Password must contain uppercase, lowercase and number'
      ),

    confirmPassword: z.string(),
  })
  .refine(
    (data) =>
      data.password ===
      data.confirmPassword,
    {
      path: ['confirmPassword'],
      message:
        'Passwords do not match',
    }
  );




/**
 * TypeScript Types
 */

export type RegisterFormData = z.infer<typeof registerSchema>;

export type LoginFormData = z.infer<typeof loginSchema>;

export type VerifyEmailFormData = z.infer<typeof verifyEmailSchema>;

export type ForgotPasswordFormData =
  z.infer<typeof forgotPasswordSchema>;

export type VerifyResetOTPFormData =
  z.infer<typeof verifyResetOTPSchema>;

export type ResetPasswordFormData =
  z.infer<typeof resetPasswordSchema>;