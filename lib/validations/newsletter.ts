import * as z from "zod"

export const newsletterSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email address is required")
    .email("Please enter a valid email address")
    .max(255, "Email address is too long")
    .toLowerCase(),
  honeypot: z.string().optional(),
})

export type NewsletterInput = z.infer<typeof newsletterSchema>
