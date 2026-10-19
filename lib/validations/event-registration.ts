import * as z from "zod"

export const eventRegistrationSchema = z.object({
  eventSlug: z.string().trim().min(1, "Event identifier is required"),
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
  phone: z
    .string()
    .trim()
    .max(30, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .max(1500, "Message cannot exceed 1500 characters")
    .optional()
    .or(z.literal("")),
  honeypot: z.string().optional(),
})

export type EventRegistrationInput = z.infer<typeof eventRegistrationSchema>
