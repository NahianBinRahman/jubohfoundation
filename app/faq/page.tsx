import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHero } from "@/components/common/page-hero"
import { SectionHeading } from "@/components/common/section-heading"
import { FAQAccordion } from "@/components/faq/FAQAccordion"
import { FAQSidebar } from "@/components/faq/FAQSidebar"
import { PrimaryButton } from "@/components/common/primary-button"
import { FAQ_ITEMS } from "@/data/faq"
import { IMAGES } from "@/lib/images"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | JUBOH Foundation - Excellence in Everything",
  description:
    "Find answers to frequently asked questions regarding the JUBOH Foundation, its 501(c)(3) nonprofit status, Ubuntu mission, and programmatic pillars.",
}

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Shared Global Header */}
      <Header />

      <main className="flex-1">
        {/* Section A: Page Hero */}
        <PageHero
          title="Frequently Asked Questions"
          subtitle="Find answers about the JUBOH Foundation, our Ubuntu guiding philosophy, leadership, and community development initiatives."
          eyebrow="How Can We Help?"
          imageSrc={IMAGES.faq.hero.src}
          imageAlt={IMAGES.faq.hero.alt}
          breadcrumbs={[{ label: "Home", href: "/" }]}
          height="default"
        />

        {/* Section B, C & D: FAQ Accordion + Right Sidebar */}
        <section className="py-20 md:py-28 bg-[#F8F6F1]/50">
          <div className="container-custom">
            <SectionHeading
              eyebrow="How Can We Help?"
              title="Frequently Asked Questions"
              subtitle="Find answers about Juboh Foundation, its mission, and its areas of work."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mt-12">
              {/* Left Column: Accessible Accordion */}
              <div className="lg:col-span-8">
                <FAQAccordion items={FAQ_ITEMS} />
              </div>

              {/* Right Column: Information Panel */}
              <div className="lg:col-span-4">
                <FAQSidebar />
              </div>
            </div>
          </div>
        </section>

        {/* Section E: Final CTA (Modest, visually consistent) */}
        <section className="py-16 bg-white border-t border-[#E8E5DD]">
          <div className="container-custom">
            <div className="bg-[#222222] rounded-2xl p-8 sm:p-12 md:p-16 text-center text-white relative overflow-hidden space-y-6">
              <div className="max-w-2xl mx-auto space-y-3">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#F6B83E] block">
                  Excellence In Everything
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                  Ready to Learn More About Our Work?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl mx-auto">
                  Explore how our Business Academy, youth leadership tours, and housing initiatives create lasting, systemic impact across our communities.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <PrimaryButton href="/programs" variant="gold" size="default" withArrow>
                  Explore Our Programs
                </PrimaryButton>
                <PrimaryButton href="/contact" variant="white" size="default">
                  Contact Our Team
                </PrimaryButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Shared Global Footer */}
      <Footer />
    </div>
  )
}
