import React from "react"
import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHero } from "@/components/common/page-hero"
import { SectionHeading } from "@/components/common/section-heading"
import { EventsList } from "@/components/events/EventsList"
import { BusinessNetworkingFeature } from "@/components/events/BusinessNetworkingFeature"
import { getAllEvents } from "@/data/events"
import { IMAGES } from "@/lib/images"

export const metadata: Metadata = {
  title: "Events & Activities | JUBOH Foundation - Excellence in Everything",
  description:
    "Explore upcoming events, educational seminars, college tours, and business mastermind gatherings organized by the JUBOH Foundation.",
}

export default function EventsPage() {
  const events = getAllEvents()

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Shared Global Header */}
      <Header />

      <main className="flex-1">
        {/* Section 1: Events Listing Hero */}
        <PageHero
          title="Events & Activities"
          subtitle="Connecting our communities through educational workshops, college access seminars, and executive business masterminds."
          eyebrow="Connect & Participate"
          imageSrc={IMAGES.events.hero.src}
          imageAlt={IMAGES.events.hero.alt}
          breadcrumbs={[{ label: "Home", href: "/" }]}
          height="default"
        />

        {/* Section 2 & 3: Events Template Listing Section */}
        <section className="py-20 md:py-28 bg-[#FAF8F5]">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto mb-10 md:mb-14">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#FF5538] uppercase tracking-wider mb-2.5">
                <span className="w-6 h-[2.5px] bg-[#FF5538] inline-block rounded-full"></span>
                <span>Events</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-[54px] font-bold text-[#1A1A1A] tracking-tight leading-tight">
                Upcoming Events
              </h2>
              <p className="text-sm sm:text-base text-[#555D68] max-w-2xl mt-3 leading-relaxed">
                Join the JUBOH Foundation across executive business masterminds, college leadership tours, and community housing summits designed to educate, inspire, and empower.
              </p>
            </div>

            {/* Event Cards Grid */}
            <EventsList events={events} />
          </div>
        </section>

        {/* Section 6: Business Events & Networking Supporting Editorial Feature */}
        <BusinessNetworkingFeature />
      </main>

      {/* Shared Global Footer */}
      <Footer />
    </div>
  )
}
