import React from "react"
import Image from "next/image"
import { PrimaryButton } from "@/components/common/primary-button"
import { IMAGES } from "@/lib/images"

export function DonationStatement() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#111827] text-white overflow-hidden">
      {/* Background Image with Dark Gradient */}
      <Image
        src={IMAGES.aboutHero.src}
        alt={IMAGES.aboutHero.alt}
        fill
        sizes="100vw"
        className="object-cover object-center opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/85 to-[#111827]" />

      <div className="container-custom relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C5A059] block">
            JUBOH Foundation Philosophy
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            &ldquo;Excellence in Everything&rdquo;
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed font-serif italic max-w-2xl mx-auto">
            &ldquo;To harness the power of the Ubuntu philosophy in fostering a more compassionate and interconnected world, dedicating ourselves to educating, inspiring, and empowering individuals and communities.&rdquo;
          </p>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Founded in 2020 by Jalen &ldquo;JUBOH&rdquo; Uboh, the foundation champions sustainable change by pairing educational mastery with practical economic opportunities.
          </p>

          <div className="pt-2 flex justify-center">
            <PrimaryButton href="/about" variant="gold" size="default" withArrow>
              Discover Our Mission
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}
