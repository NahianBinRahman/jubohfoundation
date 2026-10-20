import React from "react"
import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHero } from "@/components/common/page-hero"
import { SectionHeading } from "@/components/common/section-heading"
import { ProgramCard } from "@/components/programs/ProgramCard"
import { PrimaryButton } from "@/components/common/primary-button"
import { ALL_PROGRAMS } from "@/data/programs"
import { Sparkles, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Programs | JUBOH Foundation - Excellence in Everything",
  description:
    "Explore the JUBOH Foundation's core initiatives: Business Academy, Youth Development, Global Missions, Workforce Housing, and Founder's Initiatives.",
}

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Shared Global Header */}
      <Header />

      <main className="flex-1">
        {/* Section 1: Page Hero */}
        <PageHero
          title="Our Programs"
          subtitle="Creating opportunities and fostering self-reliance through culturally relevant curriculum, workforce housing, and sustainable global development."
          eyebrow="What We Do"
          imageSrc="/images/generated/programs-hero.webp"
          imageAlt="Diverse community members participating in a collaborative service project"
          breadcrumbs={[{ label: "Home", href: "/" }]}
          height="default"
        />

        {/* Section 2: Programs Introduction & Grid */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container-custom">
            <SectionHeading
              eyebrow="What We Do"
              title="Creating Opportunities. Empowering Communities."
              subtitle="The JUBOH Foundation works across education, entrepreneurship, youth development, global community initiatives, and housing support to empower individuals and communities often forgotten."
            />

            {/* Section 3: Program Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ALL_PROGRAMS.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Mission Commitment Banner */}
        <section className="py-20 bg-[#F8F6F1] border-t border-[#E8E5DD] text-center">
          <div className="container-custom max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/20 text-[#111827] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059] fill-current" />
              <span>Ubuntu In Action</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#111827]">
              Need Additional Information or Guidance?
            </h3>

            <p className="text-xs sm:text-sm text-[#555D68] leading-relaxed max-w-xl mx-auto">
              Our foundation directors and initiative leads are available to assist
              with program enrollments, housing counseling, or corporate
              collaborative partnerships.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <PrimaryButton href="/contact" variant="gold" size="default" withArrow>
                Contact Foundation Team
              </PrimaryButton>
              <PrimaryButton href="/donate" variant="charcoal" size="default">
                Support These Programs
              </PrimaryButton>
            </div>
          </div>
        </section>
      </main>

      {/* Shared Global Footer */}
      <Footer />
    </div>
  )
}
