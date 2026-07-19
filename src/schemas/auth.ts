import { z } from 'zod'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^[+]?[\d\s()-]{7,}$/

/**
 * Login form validation structure. UI-only for now — no auth logic is
 * wired up. `identifier` accepts either an email address or a phone number.
 */
export const loginSchema = z.object({
  identifier: z
    .string()
    .min(1, 'Email or phone is required')
    .refine(
      (value) => EMAIL_PATTERN.test(value) || PHONE_PATTERN.test(value),
      'Enter a valid email or phone number',
    ),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters'),
})

export type LoginFormValues = z.infer<typeof loginSchema>

/**
 * Register form validation structure. UI-only for now — no auth logic is
 * wired up.
 */
export const registerSchema = z.object({
  fullName: z
    .string()
    .min(1, 'Full name is required')
    .min(3, 'Full name must be at least 3 characters'),
  email: z.email('Enter a valid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters'),
})

export type RegisterFormValues = z.infer<typeof registerSchema>
