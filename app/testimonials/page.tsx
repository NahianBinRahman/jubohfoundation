import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FeaturedTestimonialSlider } from "@/components/testimonials/featured-testimonial-slider"
import { TestimonialsGrid } from "@/components/testimonials/testimonials-grid"
import { ScrollReveal } from "@/components/common/scroll-reveal"

export const metadata: Metadata = {
  title: "Testimonials | JUBOH Foundation - Excellence in Everything",
  description:
    "Read inspiring stories and firsthand testimonials from scholars, entrepreneurs, community partners, and volunteers empowered by the JUBOH Foundation.",
}

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      {/* Shared Global Header */}
      <Header />

      <main className="flex-1">
        {/* Page Header matching reference image 1 */}
        <section className="pt-20 pb-12 sm:pt-24 sm:pb-16 text-center">
          <div className="container-custom">
            <ScrollReveal direction="up" distance={24}>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#222222] tracking-tight mb-4">
                Testimonials
              </h1>

              {/* Breadcrumb matching reference image 1 */}
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#777777]">
                <Link href="/" className="hover:text-[#F6B83E] transition-colors">
                  Home
                </Link>
                <span className="text-[#F6B83E]">&rarr;</span>
                <span className="text-[#222222] font-semibold">Testimonials</span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 1: Large Featured Testimonial Slider Card (matching reference image 1) */}
        <section className="pb-20 sm:pb-28">
          <div className="container-custom">
            <ScrollReveal direction="up" distance={30} delay={0.1}>
              <FeaturedTestimonialSlider />
            </ScrollReveal>
          </div>
        </section>

        {/* Section 2: 3x3 Testimonials Grid (matching reference image 2) */}
        <section className="py-20 sm:py-28 bg-[#F4EFE8] border-t border-[#EAE3D8]">
          <div className="container-custom">
            <ScrollReveal direction="up" distance={24} className="text-center max-w-2xl mx-auto mb-16">
              <span className="eyebrow-script text-2xl text-[#F6B83E] block mb-2">
                Voices of Hope
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#222222] tracking-tight leading-tight">
                Stories of Resilience & Ubuntu
              </h2>
              <p className="text-sm md:text-base text-[#777777] mt-3 leading-relaxed">
                Hear directly from the students, entrepreneurs, families, and
                volunteers who partner with JUBOH Foundation across our key initiatives.
              </p>
            </ScrollReveal>

            {/* Complete 9-Card Grid */}
            <TestimonialsGrid />
          </div>
        </section>
      </main>

      {/* Shared Global Footer */}
      <Footer />
    </div>
  )
}
