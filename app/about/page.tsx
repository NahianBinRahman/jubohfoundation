import React from "react"
import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHero } from "@/components/common/page-hero"
import { AboutIntroduction } from "@/components/about/about-introduction"
import { MissionVision } from "@/components/about/mission-vision"
import { LeadershipSection } from "@/components/about/leadership-section"
import { ValuesGrid } from "@/components/about/values-grid"
import { ImpactAreas } from "@/components/about/impact-areas"
import { AboutCTABanner } from "@/components/about/cta-banner"
import { IMAGES } from "@/lib/images"

export const metadata: Metadata = {
  title: "About Us | JUBOH Foundation - Excellence in Everything",
  description:
    "Learn about the JUBOH Foundation, founded in 2020 by Jalen 'JUBOH' Uboh. A United States IRS-recognized 501(c)(3) non-profit organization dedicated to educating, inspiring, and empowering communities through Ubuntu.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Shared Global Header */}
      <Header />

      <main className="flex-1">
        {/* Section 1: Inner-Page Hero */}
        <PageHero
          title="About Juboh Foundation"
          subtitle="Founded in 2020 by Jalen 'JUBOH' Uboh to educate, inspire, and empower individuals and communities through the transformative spirit of Ubuntu."
          eyebrow="Our History & Purpose"
          imageSrc={IMAGES.aboutHero.src}
          imageAlt={IMAGES.aboutHero.alt}
          breadcrumbs={[{ label: "Home", href: "/" }]}
          height="default"
        />

        {/* Section 2: Foundation Introduction */}
        <AboutIntroduction />

        {/* Section 3: Mission & Vision */}
        <MissionVision />

        {/* Section 4: Leadership */}
        <LeadershipSection />

        {/* Section 5: Our Values */}
        <ValuesGrid />

        {/* Section 6: Impact Areas */}
        <ImpactAreas />

        {/* Section 7: Final Call to Action */}
        <AboutCTABanner />
      </main>

      {/* Shared Global Footer */}
      <Footer />
    </div>
  )
}
