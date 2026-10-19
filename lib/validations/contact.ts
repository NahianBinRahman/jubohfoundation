import * as z from "zod"

export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name cannot exceed 100 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Email address is required")
    .email("Please enter a valid email address")
    .max(255, "Email address cannot exceed 255 characters")
    .toLowerCase(),
  subject: z
    .string()
    .trim()
    .min(2, "Please select an inquiry subject")
    .max(100, "Subject cannot exceed 100 characters"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(3000, "Message cannot exceed 3000 characters"),
  honeypot: z.string().optional(),
})

export type ContactInput = z.infer<typeof contactSchema>
