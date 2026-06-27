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

    email: z
      .string()
      .trim()
      .email('Please enter a valid email address'),

    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(50, 'Password must not exceed 50 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
        'Password must contain at least one uppercase letter, one lowercase letter and one number'
      ),
    confirmPassword: z
      .string()
      .min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

/**
 * Login Schema
 */
export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address'),

  password: z
    .string()
    .min(1, 'Password is required'),
});

/**
 * TypeScript Types
 */

export type RegisterFormData = z.infer<typeof registerSchema>;

export type LoginFormData = z.infer<typeof loginSchema>;