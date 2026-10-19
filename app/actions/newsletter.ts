"use server"

import { newsletterSchema, type NewsletterInput } from "@/lib/validations/newsletter"
import { getSupabaseAdmin, isSupabaseConfigured } from "@/lib/supabase/server"

export interface ActionResponse {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

export async function subscribeNewsletter(
  input: NewsletterInput
): Promise<ActionResponse> {
  // 1. Honeypot Anti-Spam Check
  if (input.honeypot && input.honeypot.trim().length > 0) {
    // Silent success for spam bots
    return {
      success: true,
      message: "Thanks for subscribing!",
    }
  }

  // 2. Server-side Validation
  const validation = newsletterSchema.safeParse(input)
  if (!validation.success) {
    const flattened = validation.error.flatten().fieldErrors
    return {
      success: false,
      message: "Please enter a valid email address.",
      errors: flattened,
    }
  }

  const { email } = validation.data

  // 3. Check Supabase Configuration
  if (!isSupabaseConfigured()) {
    return {
      success: false,
      message:
        "The subscription database is currently pending environment configuration. Please check back shortly.",
    }
  }

  const supabase = getSupabaseAdmin()
  if (!supabase) {
    return {
      success: false,
      message: "Database client unavailable. Please try again later.",
    }
  }

  try {
    // 4. Insert Normalized Email
    const { error } = await supabase.from("newsletter_subscribers").insert([
      {
        email,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ])

    if (error) {
      // Postgres error code 23505 is unique_violation
      if (error.code === "23505") {
        return {
          success: true,
          message: "Thanks for subscribing!",
        }
      }

      console.error("[Newsletter Error]:", error.message)
      return {
        success: false,
        message: "Unable to complete subscription. Please try again.",
      }
    }

    return {
      success: true,
      message: "Thanks for subscribing!",
    }
  } catch (err) {
    console.error("[Newsletter Exception]:", err)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
