import React from "react"
import Image from "next/image"
import { Heart, ArrowRight } from "lucide-react"
import { PrimaryButton } from "@/components/common/primary-button"
import { IMAGES } from "@/lib/images"

export function AboutCTABanner() {
  return (
    <section className="relative py-24 md:py-32 bg-[#222222] text-white overflow-hidden text-center">
      {/* Background Photography with Dark Atmospheric Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.aboutHero.src}
          alt="Juboh Foundation Collective Ubuntu Action"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.22] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-[#222222]/85" />
      </div>

      <div className="container-custom relative z-10 max-w-3xl mx-auto space-y-6">
        <span className="eyebrow-script text-2xl text-[#F6B83E] block">
          Collective Progress
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          Together, We Can Make a <span className="text-[#F6B83E]">Difference.</span>
        </h2>

        <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          We invite you to partner with the JUBOH Foundation in our commitment
          to culturally relevant education, entrepreneurship, workforce housing,
          and sustainable global community empowerment.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton href="/donate" variant="gold" size="lg" withArrow>
            Support Our Mission
          </PrimaryButton>
          <PrimaryButton href="/programs" variant="white" size="lg">
            Explore Our Programs
          </PrimaryButton>
        </div>
      </div>
    </section>
  )
}
