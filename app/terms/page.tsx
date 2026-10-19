import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHero } from "@/components/common/page-hero"
import { FileText, ShieldAlert, Award, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms & Conditions | JUBOH Foundation - Excellence in Everything",
  description:
    "Terms of use and organizational guidelines governing the JUBOH Foundation website and philanthropic materials.",
}

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        <PageHero
          title="Terms & Conditions"
          subtitle="General guidelines and nonprofit governance policies regarding website access, community conduct, and intellectual property."
          eyebrow="Governance"
          imageSrc="/images/generated/about-hero.webp"
          imageAlt="JUBOH Foundation Terms"
          breadcrumbs={[{ label: "Home", href: "/" }]}
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom max-w-4xl space-y-10">
            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#F8F6F1] p-6 rounded-xl border border-[#E8E5DD] space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#F6B83E]/20 text-[#F6B83E] flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#222222]">
                  501(c)(3) Charter
                </h3>
                <p className="text-xs text-[#777777] leading-relaxed">
                  Operated in strict compliance with federal regulations governing tax-exempt public charities.
                </p>
              </div>

              <div className="bg-[#F8F6F1] p-6 rounded-xl border border-[#E8E5DD] space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#F6B83E]/20 text-[#F6B83E] flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#222222]">
                  Educational Use
                </h3>
                <p className="text-xs text-[#777777] leading-relaxed">
                  Materials are provided for charitable, educational, and community empowerment purposes.
                </p>
              </div>

              <div className="bg-[#F8F6F1] p-6 rounded-xl border border-[#E8E5DD] space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#F6B83E]/20 text-[#F6B83E] flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#222222]">
                  Community Values
                </h3>
                <p className="text-xs text-[#777777] leading-relaxed">
                  Rooted in the Ubuntu philosophy of mutual respect, dignity, and collective uplift.
                </p>
              </div>
            </div>

            {/* Terms Body */}
            <div className="space-y-8 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-[#E8E5DD] pt-8">
              <div className="space-y-3">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#222222]">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing or browsing this website, you acknowledge that you have read and agreed to these Terms & Conditions and our Privacy Policy. If you do not agree with any part of these terms, please discontinue use of this site.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#222222]">
                  2. Intellectual Property & Brand Usage
                </h2>
                <p>
                  All content on this website—including the JUBOH Foundation name, spark emblem, educational curriculum descriptions, logos, graphics, and articles—is the property of the JUBOH Foundation, Inc. and protected by United States and international copyright and trademark laws. Content may not be reproduced for commercial purposes without prior written authorization.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#222222]">
                  3. Charitable Contributions
                </h2>
                <p>
                  Contributions made to the JUBOH Foundation support our 501(c)(3) tax-exempt missions, including education, workforce housing development, and global community assistance. Donors will receive standard charitable giving receipts for tax accounting purposes upon official processing.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#222222]">
                  4. Governance & Inquiries
                </h2>
                <p>
                  For governance inquiries, official documents, or collaborative partnership proposals, please reach out to our team at{" "}
                  <a
                    href="mailto:info@jubohfoundation.org"
                    className="text-[#F6B83E] font-medium hover:underline"
                  >
                    info@jubohfoundation.org
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
