"use client"

import React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { PrimaryButton } from "@/components/common/primary-button"
import { ScrollReveal } from "@/components/common/scroll-reveal"
import { IMAGES } from "@/lib/images"

export function GetInvolvedBanner() {
  return (
    <section className="relative py-20 md:py-28 bg-[#111827] text-white overflow-hidden text-center">
      {/* Background Photography with Dark Atmospheric Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.homepageHero.src}
          alt="Juboh Foundation Community Volunteers"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.25] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-[#111827]/85" />
      </div>

      <div className="container-custom relative z-10 max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up" distance={30} duration={0.75}>
          <span className="eyebrow-script text-2xl text-[#C5A059] block">
            Become An Ambassador
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mt-2">
            Be Part of the <span className="text-[#C5A059]">Change</span>
          </h2>

          <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto mt-4">
            Whether you want to mentor young scholars, facilitate small business
            workshops, or join the JUBOH Global Ambassadorship network, your
            partnership shapes a more equitable future.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton href="/contact" variant="gold" size="lg" withArrow>
              Connect With Us
            </PrimaryButton>
            <PrimaryButton href="/about" variant="white" size="lg">
              About Our Mission
            </PrimaryButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
