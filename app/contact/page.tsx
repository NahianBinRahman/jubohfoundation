import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHero } from "@/components/common/page-hero"
import { SectionHeading } from "@/components/common/section-heading"
import { ContactInformation } from "@/components/contact/ContactInformation"
import { ContactForm } from "@/components/contact/ContactForm"
import { PrimaryButton } from "@/components/common/primary-button"
import { IMAGES } from "@/lib/images"

export const metadata: Metadata = {
  title: "Contact Us | JUBOH Foundation - Excellence in Everything",
  description:
    "Connect with the JUBOH Foundation team to learn more about our business academy, youth development initiatives, affordable housing, or partnership opportunities.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Shared Global Header */}
      <Header />

      <main className="flex-1">
        {/* Section A: Page Hero */}
        <PageHero
          title="Get in Touch"
          subtitle="Connect with our team to inquire about educational courses, youth tours, affordable housing counseling, or philanthropic alliances."
          eyebrow="Contact Us"
          imageSrc={IMAGES.contact.hero.src}
          imageAlt={IMAGES.contact.hero.alt}
          breadcrumbs={[{ label: "Home", href: "/" }]}
          height="default"
        />

        {/* Section B, C & D: Two-Column Form & Contact Information */}
        <section className="py-20 md:py-28 bg-[#F8F6F1]/50">
          <div className="container-custom">
            <SectionHeading
              eyebrow="Contact Us"
              title="We'd Love to Hear From You"
              subtitle="Reach out to the JUBOH Foundation to discuss collaborative programs, student mentorship, small business funding networks, and community empowerment."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
              {/* Left Column: Verified Information */}
              <div className="lg:col-span-6">
                <ContactInformation />
              </div>

              {/* Right Column: Interactive Form */}
              <div className="lg:col-span-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Section E: Get Involved Compact CTA */}
        <section className="py-16 bg-white border-t border-[#E8E5DD]">
          <div className="container-custom">
            <div className="bg-[#222222] rounded-2xl p-8 sm:p-12 text-center text-white relative overflow-hidden space-y-5">
              <div className="max-w-xl mx-auto space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#F6B83E] block">
                  Collaborative Impact
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Interested in Exploring Our 5 Core Programs?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Discover how our Business Academy, Youth Development, Global Missions, and Housing Initiatives transform communities.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <PrimaryButton href="/programs" variant="gold" size="default" withArrow>
                  Explore Our Programs
                </PrimaryButton>
                <PrimaryButton href="/about" variant="white" size="default">
                  About Our Mission
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
