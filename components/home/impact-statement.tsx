"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Sparkles, ArrowRight, Quote } from "lucide-react"
import { motion } from "motion/react"
import { PrimaryButton } from "@/components/common/primary-button"
import { ScrollReveal, ScrollStagger, ScrollItem } from "@/components/common/scroll-reveal"
import { IMAGES } from "@/lib/images"

const IMPACT_AREAS = [
  {
    number: "01",
    title: "Culturally Relevant Education",
    description: "Empowering academic excellence, college coaching, and SAT/ACT prep.",
  },
  {
    number: "02",
    title: "Entrepreneurship & Small Business",
    description: "Comprehensive business curriculum, masterminds, and funding networks.",
  },
  {
    number: "03",
    title: "Youth Leadership Development",
    description: "Youth Leadership Council, HBCU tours, and hands-on civic responsibility.",
  },
  {
    number: "04",
    title: "Affordable Workforce Housing",
    description: "CHDO development, first-time homebuyer counseling, and foreclosure aid.",
  },
  {
    number: "05",
    title: "Sustainable Clean Water & Solar",
    description: "Renewable energy and clean drinking water infrastructure in emerging villages.",
  },
  {
    number: "06",
    title: "Global Ambassadorship Network",
    description: "Mobilizing international ambassadors to foster peace, equity, and Ubuntu.",
  },
]

export function ImpactStatement() {
  return (
    <section className="relative py-24 md:py-32 bg-[#222222] text-white overflow-hidden">
      {/* Background Photography with Dark Atmospheric Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.heroCommunity.src}
          alt={IMAGES.heroCommunity.alt}
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.25] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#222222] via-[#222222]/90 to-[#222222]/80" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Authentic Statement & Maya Angelou Quote */}
          <div className="lg:col-span-6 space-y-8">
            <ScrollReveal direction="left" distance={30}>
              <div className="space-y-3">
                <span className="eyebrow-script text-xl text-[#F6B83E] block">
                  Universal Impact
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight">
                  I Am Because We Are
                </h2>
              </div>

              <p className="text-neutral-300 text-sm md:text-base leading-relaxed mt-4">
                The Ubuntu philosophy reminds us that our individual humanity is
                deeply intertwined with the well-being of those around us. By
                investing in education, affordable shelter, and sustainable
                infrastructure, we lay the foundations for lasting generational
                renewal.
              </p>

              {/* Quote Accent Card */}
              <div className="border-l-2 border-[#F6B83E] pl-6 py-2 bg-white/5 rounded-r-md mt-6">
                <p className="font-serif italic text-sm sm:text-base text-neutral-200">
                  &ldquo;I have found that among its other benefits, giving
                  liberates the soul of the giver.&rdquo;
                </p>
                <span className="block text-[11px] uppercase tracking-wider text-[#F6B83E] font-semibold mt-2">
                  — Maya Angelou
                </span>
              </div>

              <div className="pt-4">
                <PrimaryButton href="/donate" variant="gold" size="lg" withArrow>
                  Invest in Our Mission
                </PrimaryButton>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 6 Cascading Impact Pillars */}
          <div className="lg:col-span-6">
            <ScrollStagger staggerDelay={0.09} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {IMPACT_AREAS.map((area) => (
                <ScrollItem key={area.number} direction="up" distance={24} className="h-full">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 rounded-md bg-white/5 border border-white/10 hover:border-[#F6B83E]/60 hover:bg-white/10 transition-colors duration-200 h-full flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-serif text-2xl font-bold text-[#F6B83E] block mb-2 opacity-90">
                        {area.number}
                      </span>
                      <h4 className="font-serif text-sm font-bold text-white mb-2 leading-snug">
                        {area.title}
                      </h4>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </motion.div>
                </ScrollItem>
              ))}
            </ScrollStagger>
          </div>
        </div>
      </div>
    </section>
  )
}
