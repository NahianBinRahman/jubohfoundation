"use client"

import React, { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AlertCircle, Lock, CheckCircle2, Loader2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  eventRegistrationSchema,
  type EventRegistrationInput,
} from "@/lib/validations/event-registration"
import { registerForEvent } from "@/app/actions/event-registration"

interface EventRegistrationFormProps {
  eventTitle: string
  eventSlug?: string
  registrationEnabled?: boolean
}

export function EventRegistrationForm({
  eventTitle,
  eventSlug = "",
  registrationEnabled = false,
}: EventRegistrationFormProps) {
  const [honeypot, setHoneypot] = useState("")
  const [feedback, setFeedback] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })
  const [isPending, startTransition] = useTransition()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EventRegistrationInput>({
    resolver: zodResolver(eventRegistrationSchema),
    defaultValues: {
      eventSlug,
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  const onSubmit = (data: EventRegistrationInput) => {
    setFeedback({ type: null, message: "" })

    startTransition(async () => {
      const result = await registerForEvent({
        ...data,
        eventSlug: eventSlug || data.eventSlug,
        honeypot,
      })

      if (result.success) {
        setFeedback({
          type: "success",
          message:
            result.message ||
            `Your registration request for ${eventTitle} has been received.`,
        })
        reset()
      } else {
        setFeedback({
          type: "error",
          message:
            result.message ||
            "Your registration could not be submitted. Please try again.",
        })
      }
    })
  }

  return (
    <div className="bg-[#F8F6F1] rounded-xl border border-[#E8E5DD] p-7 sm:p-8 space-y-6">
      <div className="space-y-1.5">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] block">
          Event Participation
        </span>
        <h3 className="font-serif text-2xl font-bold text-[#111827]">
          Register for this Event
        </h3>
        <p className="text-xs text-[#555D68] leading-relaxed">
          Reserve your attendance for upcoming JUBOH Foundation workshops and masterminds.
        </p>
      </div>

      {/* Backend Status Disclosure: Registration Currently Unavailable */}
      {!registrationEnabled && (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-amber-500/10 border border-[#C5A059]/40 text-[#111827] text-xs">
          <AlertCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold block">Online Registration Opening Soon</span>
            <span className="text-[#666666] leading-relaxed block">
              Official online event registration will be activated when confirmed event
              schedules and venues are finalized. For inquiries, please reach out via our
              contact page.
            </span>
          </div>
        </div>
      )}

      {/* Real Server Feedback Alerts */}
      {feedback.type === "success" && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 flex items-start gap-3 text-xs text-emerald-900 animate-in fade-in-50">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold block">Registration Received</span>
            <p className="leading-relaxed">{feedback.message}</p>
          </div>
        </div>
      )}

      {feedback.type === "error" && (
        <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 flex items-start gap-3 text-xs text-rose-900 animate-in fade-in-50">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold block">Registration Notice</span>
            <p className="leading-relaxed">{feedback.message}</p>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
        aria-disabled={!registrationEnabled || isPending}
      >
        {/* Hidden Honeypot Field */}
        <input
          type="text"
          name="hp_event_reg"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {/* Preselected / Read-Only Event Field */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#111827] block">
            Selected Event
          </label>
          <input
            type="text"
            value={eventTitle}
            readOnly
            className="w-full bg-white border border-[#E8E5DD] rounded-md px-3.5 py-2.5 text-xs text-[#4B5563] cursor-not-allowed select-none"
          />
        </div>

        {/* Full Name Field */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#111827] block">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            disabled={!registrationEnabled || isPending}
            placeholder="Your First & Last Name"
            {...register("fullName")}
            className="w-full bg-white border border-[#E8E5DD] rounded-md px-3.5 py-2.5 text-xs text-[#111827] placeholder-neutral-400 focus:outline-hidden focus:border-[#C5A059] disabled:bg-neutral-100 disabled:cursor-not-allowed"
          />
          {errors.fullName && (
            <p className="text-[11px] text-red-600">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email Address Field */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#111827] block">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            disabled={!registrationEnabled || isPending}
            placeholder="your.email@example.com"
            {...register("email")}
            className="w-full bg-white border border-[#E8E5DD] rounded-md px-3.5 py-2.5 text-xs text-[#111827] placeholder-neutral-400 focus:outline-hidden focus:border-[#C5A059] disabled:bg-neutral-100 disabled:cursor-not-allowed"
          />
          {errors.email && (
            <p className="text-[11px] text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Number Field (Optional) */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#111827] block">
            Phone Number <span className="text-neutral-400 font-normal">(Optional)</span>
          </label>
          <input
            type="tel"
            disabled={!registrationEnabled || isPending}
            placeholder="(555) 000-0000"
            {...register("phone")}
            className="w-full bg-white border border-[#E8E5DD] rounded-md px-3.5 py-2.5 text-xs text-[#111827] placeholder-neutral-400 focus:outline-hidden focus:border-[#C5A059] disabled:bg-neutral-100 disabled:cursor-not-allowed"
          />
        </div>

        {/* Message / Questions Field (Optional) */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#111827] block">
            Special Requests or Questions <span className="text-neutral-400 font-normal">(Optional)</span>
          </label>
          <textarea
            rows={3}
            disabled={!registrationEnabled || isPending}
            placeholder="Any accommodations or topic questions for the facilitators..."
            {...register("message")}
            className="w-full bg-white border border-[#E8E5DD] rounded-md px-3.5 py-2.5 text-xs text-[#111827] placeholder-neutral-400 focus:outline-hidden focus:border-[#C5A059] disabled:bg-neutral-100 disabled:cursor-not-allowed"
          />
        </div>

        {/* Submit Action */}
        <Button
          type="submit"
          disabled={!registrationEnabled || isPending}
          variant="default"
          className="w-full font-bold uppercase tracking-wider text-xs py-3 shadow-xs gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {!registrationEnabled ? (
            <>
              <Lock className="w-3.5 h-3.5" />
              Registration Currently Unavailable
            </>
          ) : isPending ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>Submitting Registration...</span>
            </>
          ) : (
            <>
              <span>Complete Registration</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
