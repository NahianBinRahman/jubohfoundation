"use server"

import { contactSchema, type ContactInput } from "@/lib/validations/contact"
import { getSupabaseAdmin, isSupabaseConfigured } from "@/lib/supabase/server"

export interface ActionResponse {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

export async function submitContactForm(
  input: ContactInput
): Promise<ActionResponse> {
  // 1. Honeypot Anti-Spam Check
  if (input.honeypot && input.honeypot.trim().length > 0) {
    // Silent success for bots
    return {
      success: true,
      message:
        "Your message has been received. Thank you for contacting Juboh Foundation.",
    }
  }

  // 2. Server-side Validation
  const validation = contactSchema.safeParse(input)
  if (!validation.success) {
    const flattened = validation.error.flatten().fieldErrors
    return {
      success: false,
      message: "Please correct the highlighted fields.",
      errors: flattened,
    }
  }

  const { fullName, email, subject, message } = validation.data

  // 3. Check Supabase Configuration
  if (!isSupabaseConfigured()) {
    return {
      success: false,
      message:
        "Our automated contact service is currently pending environment configuration. Please email us directly at info@jubohfoundation.org or call (800) JUBOH-ORG.",
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
    // 4. Rate Limiting / Duplicate Submission Protection
    // Check if the same email submitted an identical message in the past 60 seconds
    const oneMinuteAgo = new Date(Date.now() - 60 * 1000).toISOString()
    const { data: recentSubmissions, error: checkError } = await supabase
      .from("contact_submissions")
      .select("id")
      .eq("email", email)
      .eq("message", message)
      .gte("created_at", oneMinuteAgo)
      .limit(1)

    if (!checkError && recentSubmissions && recentSubmissions.length > 0) {
      return {
        success: true,
        message:
          "Your message has been received. Thank you for contacting Juboh Foundation.",
      }
    }

    // 5. Insert Record into contact_submissions
    const { error: insertError } = await supabase
      .from("contact_submissions")
      .insert([
        {
          full_name: fullName,
          email,
          subject,
          message,
          status: "new",
          created_at: new Date().toISOString(),
        },
      ])

    if (insertError) {
      console.error("[Contact Insert Error]:", insertError.message)
      return {
        success: false,
        message: "Your message could not be submitted. Please try again.",
      }
    }

    return {
      success: true,
      message:
        "Your message has been received. Thank you for contacting Juboh Foundation.",
    }
  } catch (err) {
    console.error("[Contact Action Exception]:", err)
    return {
      success: false,
      message: "Your message could not be submitted. Please try again.",
    }
  }
}
