"use server"

import { eventRegistrationSchema, type EventRegistrationInput } from "@/lib/validations/event-registration"
import { getEventBySlug } from "@/data/events"
import { getSupabaseAdmin, isSupabaseConfigured } from "@/lib/supabase/server"

export interface ActionResponse {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

export async function registerForEvent(
  input: EventRegistrationInput
): Promise<ActionResponse> {
  // 1. Honeypot Anti-Spam Check
  if (input.honeypot && input.honeypot.trim().length > 0) {
    return {
      success: true,
      message: "Your registration request has been received.",
    }
  }

  // 2. Server-side Validation
  const validation = eventRegistrationSchema.safeParse(input)
  if (!validation.success) {
    const flattened = validation.error.flatten().fieldErrors
    return {
      success: false,
      message: "Please complete all required registration fields.",
      errors: flattened,
    }
  }

  const { eventSlug, fullName, email, phone, message } = validation.data

  // 3. Strict Authenticity Check: Validate against configured event data
  const event = getEventBySlug(eventSlug)
  if (!event) {
    return {
      success: false,
      message: "The requested event is not currently recognized or scheduled.",
    }
  }

  if (!event.registrationEnabled) {
    return {
      success: false,
      message: "Registration is not currently open for this event.",
    }
  }

  // 4. Check Supabase Configuration
  if (!isSupabaseConfigured()) {
    return {
      success: false,
      message:
        "Event registration services are currently pending environment configuration. Please contact info@jubohfoundation.org for attendance coordination.",
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
    // 5. Insert Record into event_registrations
    const { error: insertError } = await supabase
      .from("event_registrations")
      .insert([
        {
          event_slug: eventSlug,
          full_name: fullName,
          email,
          phone: phone || null,
          message: message || null,
          status: "pending",
          created_at: new Date().toISOString(),
        },
      ])

    if (insertError) {
      // Postgres error code 23505 is unique_violation (event_slug, email)
      if (insertError.code === "23505") {
        return {
          success: true,
          message:
            "You are already registered for this event. A confirmation reminder will be provided prior to the gathering.",
        }
      }

      console.error("[Event Reg Insert Error]:", insertError.message)
      return {
        success: false,
        message: "Your registration could not be submitted. Please try again.",
      }
    }

    return {
      success: true,
      message: `Your registration request for ${event.title} has been received. Thank you!`,
    }
  } catch (err) {
    console.error("[Event Reg Action Exception]:", err)
    return {
      success: false,
      message: "Your registration could not be submitted. Please try again.",
    }
  }
}
