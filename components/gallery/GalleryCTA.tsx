import React from "react"
import Image from "next/image"
import { Sparkles } from "lucide-react"
import { PrimaryButton } from "@/components/common/primary-button"

export function GalleryCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-[#111827] text-white overflow-hidden text-center">
      {/* Background Photography with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/generated/gallery-hero.webp"
          alt="JUBOH Foundation Community Initiatives"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.22] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-[#111827]/85" />
      </div>

      <div className="container-custom relative z-10 max-w-3xl mx-auto space-y-6">
        <span className="eyebrow-script text-2xl text-[#C5A059] block">
          Get Involved
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          Be Part of Something <span className="text-[#C5A059]">Meaningful</span>
        </h2>

        <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          Whether you want to sponsor academic workshops, mentor future leaders,
          or support our affordable housing initiatives, your partnership creates
          lasting generational change.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton href="/programs" variant="gold" size="lg" withArrow>
            Explore Our Programs
          </PrimaryButton>
          <PrimaryButton href="/contact" variant="white" size="lg">
            Contact Us
          </PrimaryButton>
        </div>
      </div>
    </section>
  )
}
