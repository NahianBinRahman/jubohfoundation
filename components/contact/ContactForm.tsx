"use client"

import React, { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Send, AlertCircle, CheckCircle2, Loader2, Info } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { contactSchema, type ContactInput } from "@/lib/validations/contact"
import { submitContactForm } from "@/app/actions/contact"

export function ContactForm() {
  const [honeypot, setHoneypot] = useState("")
  const [feedback, setFeedback] = useState<{
    type: "success" | "error" | "info" | null
    message: string
  }>({ type: null, message: "" })
  const [isPending, startTransition] = useTransition()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      subject: "General Inquiry",
      message: "",
    },
  })

  const onSubmit = (data: ContactInput) => {
    setFeedback({ type: null, message: "" })

    startTransition(async () => {
      const result = await submitContactForm({
        ...data,
        honeypot,
      })

      if (result.success) {
        setFeedback({
          type: "success",
          message:
            result.message ||
            "Your message has been received. Thank you for contacting Juboh Foundation.",
        })
        reset()
      } else {
        setFeedback({
          type: "error",
          message:
            result.message ||
            "Your message could not be submitted. Please try again.",
        })
      }
    })
  }

  return (
    <div className="bg-white rounded-2xl border border-[#E8E5DD] shadow-lg p-7 sm:p-10 space-y-6">
      <div className="space-y-1.5 border-b border-[#F8F6F1] pb-4">
        <h3 className="font-serif text-2xl font-bold text-[#222222]">
          Send a Message
        </h3>
        <p className="text-xs sm:text-sm text-[#777777]">
          Fill out the form below to connect with the JUBOH Foundation team.
        </p>
      </div>

      {/* Real Server Feedback Alerts */}
      {feedback.type === "success" && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3 text-xs text-emerald-900 animate-in fade-in-50">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold text-sm block">Message Received</span>
            <p className="leading-relaxed">{feedback.message}</p>
          </div>
        </div>
      )}

      {feedback.type === "error" && (
        <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 flex items-start gap-3 text-xs text-rose-900 animate-in fade-in-50">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold text-sm block">Submission Notice</span>
            <p className="leading-relaxed">{feedback.message}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Hidden Honeypot Field for Spam Protection */}
        <input
          type="text"
          name="hp_contact"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {/* Full Name */}
        <div className="space-y-1.5">
          <label
            htmlFor="fullName"
            className="text-xs font-bold uppercase tracking-wider text-[#222222] block"
          >
            Full Name <span className="text-rose-500">*</span>
          </label>
          <Input
            id="fullName"
            placeholder="e.g. Marcus Johnson"
            disabled={isPending}
            {...register("fullName")}
            aria-invalid={!!errors.fullName}
          />
          {errors.fullName && (
            <p className="text-xs text-rose-500 font-medium">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email Address */}
        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="text-xs font-bold uppercase tracking-wider text-[#222222] block"
          >
            Email Address <span className="text-rose-500">*</span>
          </label>
          <Input
            id="email"
            type="email"
            placeholder="marcus@example.com"
            disabled={isPending}
            {...register("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-xs text-rose-500 font-medium">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Subject Selection */}
        <div className="space-y-1.5">
          <label
            htmlFor="subject"
            className="text-xs font-bold uppercase tracking-wider text-[#222222] block"
          >
            Inquiry Subject <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <select
              id="subject"
              disabled={isPending}
              {...register("subject")}
              className="flex h-11 w-full rounded-md border border-[#E8E5DD] bg-white px-3.5 py-2 text-sm text-[#222222] ring-offset-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#F6B83E] focus-visible:border-transparent transition-colors cursor-pointer disabled:opacity-50"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Business Academy">Business Academy</option>
              <option value="Youth Development">Youth Development & Tours</option>
              <option value="Global Missions">Global Missions</option>
              <option value="Housing Initiative">Housing Initiative (CHDO)</option>
              <option value="Partnership Inquiry">Partnership Inquiry</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {errors.subject && (
            <p className="text-xs text-rose-500 font-medium">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label
            htmlFor="message"
            className="text-xs font-bold uppercase tracking-wider text-[#222222] block"
          >
            Message <span className="text-rose-500">*</span>
          </label>
          <Textarea
            id="message"
            rows={5}
            placeholder="How can we assist you or collaborate on community empowerment?"
            disabled={isPending}
            {...register("message")}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className="text-xs text-rose-500 font-medium">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-[#F6B83E] hover:bg-[#e0a32e] text-[#222222] font-bold py-3.5 text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer disabled:opacity-60"
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
