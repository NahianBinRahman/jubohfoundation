import React from "react"
import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHero } from "@/components/common/page-hero"
import { SectionHeading } from "@/components/common/section-heading"
import { GalleryGrid } from "@/components/gallery/GalleryGrid"
import { GalleryCTA } from "@/components/gallery/GalleryCTA"

export const metadata: Metadata = {
  title: "Our Gallery | JUBOH Foundation - Excellence in Everything",
  description:
    "Explore photography from the JUBOH Foundation capturing moments of education, youth development, small business entrepreneurship, workforce housing, and global missions.",
}

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Shared Global Header */}
      <Header />

      <main className="flex-1">
        {/* Section 1: Page Hero */}
        <PageHero
          title="Our Gallery"
          subtitle="A visual record of collective progress, community education, workforce development, and global outreach."
          eyebrow="Moments That Inspire"
          imageSrc="/images/generated/gallery-hero.webp"
          imageAlt="Diverse community members collaborating on service initiatives"
          breadcrumbs={[{ label: "Home", href: "/" }]}
          height="default"
        />

        {/* Section 2: Introduction & Section 3-6: Photo Gallery with Filter & Lightbox */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container-custom">
            <SectionHeading
              eyebrow="Our Gallery"
              title="Moments That Inspire Change"
              subtitle="The JUBOH Foundation models its impact across education, entrepreneurship, youth development, workforce housing, and global missions. Explore visual moments that reflect our commitment to excellence and the Ubuntu spirit."
            />

            {/* Interactive Filter & Gallery Grid with Modal Lightbox */}
            <GalleryGrid />
          </div>
        </section>

        {/* Section 7: Get Involved CTA */}
        <GalleryCTA />
      </main>

      {/* Shared Global Footer */}
      <Footer />
    </div>
  )
}
