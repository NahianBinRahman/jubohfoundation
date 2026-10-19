"use client"

import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/common/section-heading"
import { PrimaryButton } from "@/components/common/primary-button"
import { ScrollReveal } from "@/components/common/scroll-reveal"
import { FeaturedTestimonialSlider } from "@/components/testimonials/featured-testimonial-slider"
import { TestimonialsGrid } from "@/components/testimonials/testimonials-grid"

export function HomeTestimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#FAF8F5] overflow-hidden">
      <div className="container-custom">
        <ScrollReveal direction="up" distance={30}>
          <SectionHeading
            eyebrow="Voices of Transformation"
            title="What Our Community Says"
            subtitle="Discover firsthand experiences from the scholars, entrepreneurs, and families empowered through our holistic programming."
          />
        </ScrollReveal>

        {/* Large Featured Dark Slider Card (matching reference image 1) */}
        <ScrollReveal direction="up" distance={36} delay={0.1} className="my-14 sm:my-16">
          <FeaturedTestimonialSlider />
        </ScrollReveal>

        {/* 3 Highlighted Cards from the Grid (matching reference image 2) */}
        <div className="mt-14">
          <TestimonialsGrid limit={3} />
        </div>

        {/* View All Testimonials Button */}
        <ScrollReveal direction="up" distance={20} delay={0.2} className="text-center mt-12">
          <PrimaryButton href="/testimonials" variant="charcoal" size="default" withArrow>
            Explore All Testimonials
          </PrimaryButton>
        </ScrollReveal>
      </div>
    </section>
  )
}
