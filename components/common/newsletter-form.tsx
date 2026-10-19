"use client"

import React, { useState, useTransition } from "react"
import { Check, Loader2, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { subscribeNewsletter } from "@/app/actions/newsletter"

interface NewsletterFormProps {
  className?: string
  variant?: "dark" | "light"
}

export function NewsletterForm({
  className,
  variant = "dark",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [honeypot, setHoneypot] = useState("")
  const [feedback, setFeedback] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes("@")) return

    setFeedback({ type: null, message: "" })

    startTransition(async () => {
      const result = await subscribeNewsletter({ email, honeypot })

      if (result.success) {
        setFeedback({
          type: "success",
          message: result.message || "Thanks for subscribing!",
        })
        setEmail("")
      } else {
        setFeedback({
          type: "error",
          message: result.message || "Unable to subscribe. Please try again.",
        })
      }
    })
  }

  return (
    <div className={cn("w-full space-y-2", className)}>
      {feedback.type === "success" ? (
        <div className="flex items-center gap-2 p-3 rounded-md bg-[#F6B83E]/15 border border-[#F6B83E]/40 text-[#F6B83E] text-xs font-medium animate-in fade-in duration-300">
          <Check className="w-4 h-4 text-[#F6B83E] shrink-0" />
          <span>{feedback.message}</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex items-stretch gap-2">
          {/* Hidden Honeypot Field for Spam Protection */}
          <input
            type="text"
            name="hp_newsletter"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email Address"
            required
            disabled={isPending}
            aria-label="Email address for foundation newsletter"
            className={cn(
              "text-xs px-3.5 py-2.5 rounded-sm focus:outline-hidden focus:ring-1 focus:ring-[#F6B83E] transition-all w-full disabled:opacity-50",
              variant === "dark"
                ? "bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:border-[#F6B83E]"
                : "bg-white border border-[#E8E5DD] text-[#222222] placeholder-neutral-400 focus:border-[#F6B83E]"
            )}
          />
          <button
            type="submit"
            disabled={isPending}
            className="bg-[#F6B83E] hover:bg-[#e0a32e] text-[#222222] font-semibold px-4 text-xs tracking-wider uppercase rounded-sm transition-colors cursor-pointer flex items-center justify-center shrink-0 shadow-xs disabled:opacity-50"
          >
            {isPending ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              "Subscribe"
            )}
          </button>
        </form>
      )}

      {feedback.type === "error" && (
        <div className="flex items-center gap-2 p-2.5 rounded-md bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium animate-in fade-in duration-200">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{feedback.message}</span>
        </div>
      )}
    </div>
  )
}
