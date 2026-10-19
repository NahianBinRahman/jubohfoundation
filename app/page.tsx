import React from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HomeHero } from "@/components/home/home-hero"
import { OverlappingCards } from "@/components/home/overlapping-cards"
import { AboutPreview } from "@/components/home/about-preview"
import { ProgramsSection } from "@/components/home/programs-section"
import { ImpactStatement } from "@/components/home/impact-statement"
import { MissionPreview } from "@/components/home/mission-preview"
import { HomeTestimonials } from "@/components/home/home-testimonials"
import { DonationCTA } from "@/components/home/donation-cta"
import { EventsPreview } from "@/components/home/events-preview"
import { GetInvolvedBanner } from "@/components/home/get-involved-banner"
import { StoriesPreview } from "@/components/home/stories-preview"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Shared Global Header (TopBar + Sticky Navbar + Mobile Drawer) */}
      <Header />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HomeHero />

        {/* 2. Overlapping Action Cards */}
        <OverlappingCards />

        {/* 3. About Preview */}
        <AboutPreview />

        {/* 4. Our Programs (Program cards - no fake fundraisers) */}
        <ProgramsSection />

        {/* 5. Impact Statement (6 authentic impact areas + Maya Angelou quote) */}
        <ImpactStatement />

        {/* 6. Mission Preview (5 core community pillars with gold icons) */}
        <MissionPreview />

        {/* 7. Community Testimonials (Featured dark slider + grid cards inspired by template) */}
        <HomeTestimonials />

        {/* 8. Donation Call to Action (100% tax deductible giving split section) */}
        <DonationCTA />

        {/* 9. Events Preview (Tasteful empty state awaiting schedules) */}
        <EventsPreview />

        {/* 10. Get Involved Banner (Full-width dark photographic banner) */}
        <GetInvolvedBanner />

        {/* 11. Stories Preview (Official publications & dispatch channel) */}
        <StoriesPreview />
      </main>

      {/* Shared Global Footer (4-column charcoal layout + newsletter) */}
      <Footer />
    </div>
  )
}
