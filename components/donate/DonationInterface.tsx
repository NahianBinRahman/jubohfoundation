"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  ShieldCheck,
  Heart,
  Lock,
  Info,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const PRESET_AMOUNTS = [25, 50, 100, 250]

const donationSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  amount: z.number().min(5, "Minimum donation amount is $5"),
})

type DonationFormData = z.infer<typeof donationSchema>

export function DonationInterface() {
  const [selectedPreset, setSelectedPreset] = useState<number | "custom">(100)
  const [customValue, setCustomValue] = useState<string>("")
  const [attemptedSubmit, setAttemptedSubmit] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      amount: 100,
    },
    mode: "onBlur",
  })

  const currentAmount = watch("amount")

  const handlePresetClick = (amount: number) => {
    setSelectedPreset(amount)
    setCustomValue("")
    setValue("amount", amount, { shouldValidate: true })
  }

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, "")
    setCustomValue(val)
    setSelectedPreset("custom")
    const numeric = parseInt(val, 10)
    setValue("amount", isNaN(numeric) ? 0 : numeric, { shouldValidate: true })
  }

  const onSubmit = (data: DonationFormData) => {
    setAttemptedSubmit(true)
  }

  return (
    <section id="donation-form" className="py-24 md:py-32 bg-white relative scroll-mt-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Trust & Stewardship Editorial */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="eyebrow-script text-xl text-[#C5A059] block">
                Direct Community Support
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#111827] tracking-tight leading-tight">
                Invest in Sustainable Community Empowerment
              </h2>
              <p className="text-sm md:text-base text-[#555D68] leading-relaxed">
                Your charitable contribution directly supports our mission to educate, inspire, and empower individuals and communities across the United States and globally.
              </p>
            </div>

            {/* Key Trust Highlights */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-[#F8F6F1] border border-[#E8E5DD]">
                <div className="w-10 h-10 rounded-full bg-white border border-[#E8E5DD] flex items-center justify-center text-[#C5A059] shrink-0 shadow-2xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-base text-[#111827]">
                    100% Tax-Deductible Contribution
                  </h4>
                  <p className="text-xs text-[#555D68] leading-relaxed">
                    JUBOH Foundation, Inc. is a United States IRS-recognized 501(c)(3) nonprofit organization (est. 2020). All charitable donations qualify for federal tax deductions to the extent permitted by law.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-[#F8F6F1] border border-[#E8E5DD]">
                <div className="w-10 h-10 rounded-full bg-white border border-[#E8E5DD] flex items-center justify-center text-[#C5A059] shrink-0 shadow-2xs">
                  <Heart className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-base text-[#111827]">
                    Ubuntu Philosophy Stewardship
                  </h4>
                  <p className="text-xs text-[#555D68] leading-relaxed">
                    Guided by the African philosophy &ldquo;I am because we are,&rdquo; every gift is managed with rigorous governance and channeled into high-impact, self-sustaining community initiatives.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-[#F8F6F1] border border-[#E8E5DD]">
                <div className="w-10 h-10 rounded-full bg-white border border-[#E8E5DD] flex items-center justify-center text-[#C5A059] shrink-0 shadow-2xs">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-base text-[#111827]">
                    Holistic Program Impact
                  </h4>
                  <p className="text-xs text-[#555D68] leading-relaxed">
                    Contributions strengthen small business academies, youth college tours, CHDO workforce housing developments, and clean water micro-infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Elevated Donation Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-[#E8E5DD] shadow-xl p-7 sm:p-10 space-y-7 relative">
              {/* Card Header */}
              <div className="space-y-2 border-b border-[#F8F6F1] pb-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] block">
                    Support Our Mission
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#555D68] bg-[#F8F6F1] px-2.5 py-1 rounded-full border border-[#E8E5DD]">
                    <Lock className="w-3 h-3 text-[#C5A059]" />
                    <span>Secure Donation</span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111827]">
                  Make Your Contribution
                </h3>
                <p className="text-xs text-[#555D68]">
                  Select an amount to invest in community empowerment.
                </p>
              </div>

              {/* Frequency Selector: One-Time */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#111827] block">
                  Donation Frequency
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className="py-2.5 px-4 rounded-md text-xs font-bold uppercase tracking-wider bg-[#111827] text-[#C5A059] shadow-xs cursor-default flex items-center justify-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>One-Time Gift</span>
                  </button>
                  <div
                    title="Recurring contributions will be available upon payment provider integration"
                    className="py-2.5 px-4 rounded-md text-xs font-medium uppercase tracking-wider bg-[#F8F6F1] text-neutral-400 border border-[#E8E5DD] flex items-center justify-center cursor-not-allowed opacity-60"
                  >
                    <span>Monthly (Coming Soon)</span>
                  </div>
                </div>
              </div>

              {/* Amount Selection Grid */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#111827] block">
                    Select Amount (USD) <span className="text-rose-500">*</span>
                  </label>
                  <span className="text-xs font-bold text-[#111827]">
                    Selected: ${currentAmount || 0}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {PRESET_AMOUNTS.map((amt) => {
                    const isSelected = selectedPreset === amt
                    return (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => handlePresetClick(amt)}
                        className={`py-3.5 px-4 rounded-lg font-serif text-lg font-bold transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "bg-[#C5A059] text-[#111827] shadow-sm border-2 border-[#C5A059] scale-[1.02]"
                            : "bg-[#F8F6F1] text-[#111827] border border-[#E8E5DD] hover:border-[#C5A059]/60 hover:bg-white"
                        }`}
                      >
                        ${amt}
                      </button>
                    )
                  })}
                </div>

                {/* Custom Amount Input */}
                <div className="pt-2">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-[#111827]">
                      $
                    </span>
                    <Input
                      type="text"
                      inputMode="numeric"
                      placeholder="Enter custom amount"
                      value={customValue}
                      onChange={handleCustomChange}
                      className={`pl-8 h-12 text-sm font-medium ${
                        selectedPreset === "custom"
                          ? "border-[#C5A059] ring-2 ring-[#C5A059]/20"
                          : ""
                      }`}
                    />
                  </div>
                  {errors.amount && (
                    <p className="text-xs text-rose-500 font-medium mt-1">
                      {errors.amount.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Donor Information Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-2">
                <div className="space-y-1.5">
                  <label htmlFor="donorName" className="text-xs font-bold uppercase tracking-wider text-[#111827] block">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <Input
                    id="donorName"
                    placeholder="e.g. Eleanor Vance"
                    {...register("fullName")}
                    aria-invalid={!!errors.fullName}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-rose-500 font-medium">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="donorEmail" className="text-xs font-bold uppercase tracking-wider text-[#111827] block">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <Input
                    id="donorEmail"
                    type="email"
                    placeholder="eleanor@example.com"
                    {...register("email")}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-500 font-medium">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Transparent Payment Security Notice */}
                <div className="bg-[#F8F6F1] border border-[#E8E5DD] rounded-xl p-4 flex items-start gap-3 text-xs text-[#4B5563]">
                  <Info className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-semibold text-[#111827] block">
                      Payment Gateway Integration Notice
                    </span>
                    <p className="leading-relaxed">
                      Our official merchant donation gateway is scheduled for production integration. Online card processing is currently paused to safeguard your payment details. Contributions can be arranged directly via{" "}
                      <a href="mailto:info@jubohfoundation.org" className="underline font-bold text-[#111827] hover:text-[#C5A059]">
                        info@jubohfoundation.org
                      </a>{" "}
                      or by calling <span className="font-semibold text-[#111827]">(800) JUBOH-ORG</span>.
                    </p>
                  </div>
                </div>

                {/* Local Feedback Banner when submitted */}
                {attemptedSubmit && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 text-xs text-amber-900 animate-in fade-in-50">
                    <AlertCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <span className="font-semibold block">
                        Pledge Information Recorded Locally (${currentAmount})
                      </span>
                      <p className="leading-relaxed">
                        Thank you for your generous intent to support JUBOH Foundation. Because automated online payment processing is not yet enabled, no transaction has occurred. Please email info@jubohfoundation.org to complete your tax-deductible gift.
                      </p>
                    </div>
                  </div>
                )}

                {/* Primary Action Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full bg-[#C5A059] hover:bg-[#B38E46] text-[#111827] font-bold py-4 text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <span>Continue to Secure Donation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
