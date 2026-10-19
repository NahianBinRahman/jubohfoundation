import { createClient, SupabaseClient } from "@supabase/supabase-js"

/**
 * Server-only Supabase Client for JUBOH Foundation
 *
 * CRITICAL SECURITY ARCHITECTURE:
 * - Uses the private SUPABASE_SERVICE_ROLE_KEY strictly in server-side Next.js Server Actions.
 * - Never imports in client components ("use client").
 * - Never exposes credentials via NEXT_PUBLIC_ prefixes.
 * - Safely detects missing credentials and informs server actions without runtime crashes.
 */

let supabaseAdminInstance: SupabaseClient | null = null

export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.SUPABASE_URL &&
    process.env.SUPABASE_SERVICE_ROLE_KEY &&
    process.env.SUPABASE_URL.startsWith("http")
  )
}

export function getSupabaseAdmin(): SupabaseClient | null {
  if (!isSupabaseConfigured()) {
    return null
  }

  if (!supabaseAdminInstance) {
    const supabaseUrl = process.env.SUPABASE_URL as string
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string

    supabaseAdminInstance = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })
  }

  return supabaseAdminInstance
}
