import React from "react"
import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { DonationHero } from "@/components/donate/DonationHero"
import { DonationIntroduction } from "@/components/donate/DonationIntroduction"
import { DonationInterface } from "@/components/donate/DonationInterface"
import { DonationPrograms } from "@/components/donate/DonationPrograms"
import { DonationStatement } from "@/components/donate/DonationStatement"
import { DonationFAQ } from "@/components/donate/DonationFAQ"
import { DonationCTA } from "@/components/donate/DonationCTA"

export const metadata: Metadata = {
  title: "Support Our Mission & Donate | JUBOH Foundation - Excellence in Everything",
  description:
    "Make a 100% tax-deductible charitable contribution to the JUBOH Foundation. Support our Business Academy, youth leadership tours, affordable housing, and global missions.",
}

export default function DonatePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Shared Global Header */}
      <Header />

      <main className="flex-1">
        {/* Section A: Premium Hero */}
        <DonationHero />

        {/* Section B: Why Your Support Matters */}
        <DonationIntroduction />

        {/* Section C: Primary Donation Interface */}
        <DonationInterface />

        {/* Section D: Core Program Areas */}
        <DonationPrograms />

        {/* Section E: Foundation Ubuntu Statement */}
        <DonationStatement />

        {/* Section F: Donation FAQ Accordion */}
        <DonationFAQ />

        {/* Section G: Final Call to Action */}
        <DonationCTA />
      </main>

      {/* Shared Global Footer */}
      <Footer />
    </div>
  )
}
