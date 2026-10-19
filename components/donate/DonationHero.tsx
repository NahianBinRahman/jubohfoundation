"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ArrowDown, Heart } from "lucide-react"
import { PrimaryButton } from "@/components/common/primary-button"
import { IMAGES } from "@/lib/images"

export function DonationHero() {
  const scrollToDonation = () => {
    const el = document.getElementById("donation-form")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center justify-center bg-[#222222] overflow-hidden">
      {/* Background Image with Dark Vignette Overlay */}
      <Image
        src={IMAGES.donation.hero.src}
        alt={IMAGES.donation.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#222222]/95 via-[#222222]/80 to-[#222222]/60" />
      <div className="absolute inset-0 bg-radial from-transparent via-[#222222]/40 to-[#222222]/90" />

      {/* Hero Content */}
      <div className="container-custom relative z-10 py-24 sm:py-28 md:py-32">
        <div className="max-w-3xl space-y-6">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#F6B83E]" />
            <span className="text-neutral-200">Donate</span>
          </nav>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-[#F6B83E]/20 border border-[#F6B83E]/40 px-3.5 py-1 rounded-full backdrop-blur-xs">
            <Heart className="w-3.5 h-3.5 text-[#F6B83E] fill-current" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#F6B83E]">
              Make a Difference
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
            Your Generosity Creates Opportunities
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed max-w-2xl">
            Help Juboh Foundation continue its commitment to education, empowerment, entrepreneurship, and community development under the spirit of Ubuntu.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToDonation}
              className="inline-flex items-center gap-2 bg-[#F6B83E] hover:bg-[#e0a32e] text-[#222222] font-bold text-sm tracking-wide px-6 py-3.5 rounded-sm shadow-md transition-all duration-200 cursor-pointer"
            >
              <span>Support Our Mission</span>
              <ArrowDown className="w-4 h-4" />
            </button>
            <PrimaryButton href="/programs" variant="white" size="default">
              Explore Our Programs
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}
