"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShieldCheck, CheckCircle2 } from "lucide-react"
import { motion } from "motion/react"
import { PrimaryButton } from "@/components/common/primary-button"
import { ScrollReveal } from "@/components/common/scroll-reveal"
import { IMAGES } from "@/lib/images"
import { cn } from "@/lib/utils"

const PRESET_AMOUNTS = [25, 50, 100, 250, 500]

export function DonationCTA() {
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(100)
  const [customAmount, setCustomAmount] = useState<string>("")

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Documentary Image with Reveal */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="right" distance={36} duration={0.8}>
              <div className="relative aspect-[16/11] rounded-lg overflow-hidden shadow-xl border border-[#E8E5DD] group">
                <Image
                  src={IMAGES.donationGiving.src}
                  alt={IMAGES.donationGiving.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F6B83E] block mb-1">
                    100% Tax-Deductible Charitable Giving
                  </span>
                  <p className="font-serif text-lg font-bold">
                    Every Dollar Advances Community Self-Reliance
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Giving Information & Action Box */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="left" distance={36} duration={0.8}>
              <div className="space-y-2">
                <span className="eyebrow-script text-xl text-[#F6B83E] block">
                  Make An Impact
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#222222] tracking-tight leading-tight">
                  Give to JUBOH Foundation
                </h2>
              </div>

              <p className="text-sm md:text-base text-[#777777] leading-relaxed mt-4">
                JUBOH Foundation is an IRS-recognized 501(c)(3) registered non-profit
                organization dedicated to the advancement of people all around the
                world. Your 100% tax-deductible charitable donation of any amount
                allows us to continue our vital work across workforce housing,
                education, and community empowerment.
              </p>

              {/* Preset Donation Amounts Selector */}
              <div className="pt-4 space-y-3">
                <span className="text-xs font-bold text-[#222222] uppercase tracking-wider block">
                  Select Giving Level
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {PRESET_AMOUNTS.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amt)
                        setCustomAmount("")
                      }}
                      className={cn(
                        "px-4 py-2.5 rounded-sm text-xs font-bold transition-all duration-200 border cursor-pointer",
                        selectedAmount === amt
                          ? "bg-[#F6B83E] text-[#222222] border-[#F6B83E] shadow-xs"
                          : "bg-[#F8F6F1] text-[#222222] border-[#E8E5DD] hover:border-[#F6B83E]"
                      )}
                    >
                      ${amt}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setSelectedAmount("custom")}
                    className={cn(
                      "px-4 py-2.5 rounded-sm text-xs font-bold transition-all duration-200 border cursor-pointer",
                      selectedAmount === "custom"
                        ? "bg-[#F6B83E] text-[#222222] border-[#F6B83E] shadow-xs"
                        : "bg-[#F8F6F1] text-[#222222] border-[#E8E5DD] hover:border-[#F6B83E]"
                    )}
                  >
                    Custom
                  </button>
                </div>
              </div>

              {/* Action Buttons & Tax Deductible Assurance */}
              <div className="pt-6 space-y-4">
                <div className="flex flex-wrap items-center gap-4">
                  <PrimaryButton
                    href={`/donate?amount=${selectedAmount === "custom" ? customAmount || 100 : selectedAmount}`}
                    variant="gold"
                    size="lg"
                    withArrow
                  >
                    Proceed to Donate
                  </PrimaryButton>
                  <PrimaryButton href="/contact" variant="outlineGold" size="lg">
                    Contact Giving Team
                  </PrimaryButton>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#777777]">
                  <ShieldCheck className="w-4 h-4 text-[#F6B83E]" />
                  <span>
                    Official 501(c)(3) tax receipt provided for every contribution.
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
