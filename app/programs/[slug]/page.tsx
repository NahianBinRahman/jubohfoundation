import React from "react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProgramHero } from "@/components/programs/ProgramHero"
import { ProgramDetail } from "@/components/programs/ProgramDetail"
import { ProgramInitiatives } from "@/components/programs/ProgramInitiatives"
import { RelatedPrograms } from "@/components/programs/RelatedPrograms"
import { PrimaryButton } from "@/components/common/primary-button"
import { PROGRAMS_DATA, ALL_PROGRAMS } from "@/data/programs"

interface ProgramPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return ALL_PROGRAMS.map((program) => ({
    slug: program.slug,
  }))
}

export async function generateMetadata({
  params,
}: ProgramPageProps): Promise<Metadata> {
  const { slug } = await params
  const program = PROGRAMS_DATA[slug]

  if (!program) {
    return {
      title: "Program Not Found | JUBOH Foundation",
    }
  }

  return {
    title: `${program.title} | JUBOH Foundation - Excellence in Everything`,
    description: program.overview,
  }
}

export default async function ProgramDetailPage({ params }: ProgramPageProps) {
  const { slug } = await params
  const program = PROGRAMS_DATA[slug]

  if (!program) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Shared Global Header */}
      <Header />

      <main className="flex-1">
        {/* 1. Inner-Page Hero */}
        <ProgramHero
          title={program.title}
          tagline={program.tagline}
          category={program.category}
          imageSrc={program.heroImage}
          imageAlt={program.heroImageAlt}
          slug={program.slug}
        />

        {/* 2. Main Detail Content & Focus Sidebar */}
        <ProgramDetail program={program} />

        {/* 3. Key Initiatives & Assistance Grid */}
        <ProgramInitiatives program={program} />

        {/* 4. Action Banner */}
        <section className="py-20 bg-[#222222] text-white text-center">
          <div className="container-custom max-w-3xl mx-auto space-y-6">
            <span className="eyebrow-script text-2xl text-[#F6B83E] block">
              Join This Mission
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              {program.callToAction.heading}
            </h2>
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              {program.callToAction.subheading}
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <PrimaryButton
                href={program.callToAction.buttonHref}
                variant="gold"
                size="lg"
                withArrow
              >
                {program.callToAction.buttonText}
              </PrimaryButton>
              <PrimaryButton href="/donate" variant="white" size="lg">
                Donate to This Initiative
              </PrimaryButton>
            </div>
          </div>
        </section>

        {/* 5. Related Programs Grid */}
        <RelatedPrograms currentProgramId={program.id} />
      </main>

      {/* Shared Global Footer */}
      <Footer />
    </div>
  )
}
