import { z } from 'zod'

export const registerSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'At least 8 characters' })
    .refine((data) => /[0-9]/.test(data), {
      message: 'At least 1 number',
    })
    .refine((data) => /[a-z]/.test(data), {
      message: 'At least 1 lowercase letter',
    })
    .refine((data) => /[A-Z]/.test(data), {
      message: 'At least 1 uppercase letter',
    }),
})

export type RegisterSchema = z.infer<typeof registerSchema>
