import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHero } from "@/components/common/page-hero"
import { Shield, Lock, Eye, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | JUBOH Foundation - Excellence in Everything",
  description:
    "Privacy Policy and donor data protection commitments of the JUBOH Foundation, an IRS-recognized 501(c)(3) nonprofit organization.",
}

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        <PageHero
          title="Privacy Policy"
          subtitle="Our organizational commitment to confidentiality, donor privacy, and responsible stewardship of your personal information."
          eyebrow="Trust & Transparency"
          imageSrc="/images/generated/about-hero.webp"
          imageAlt="JUBOH Foundation Community Privacy"
          breadcrumbs={[{ label: "Home", href: "/" }]}
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom max-w-4xl space-y-12">
            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#F8F6F1] p-6 rounded-xl border border-[#E8E5DD] space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#F6B83E]/20 text-[#F6B83E] flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#222222]">
                  No Selling of Data
                </h3>
                <p className="text-xs text-[#777777] leading-relaxed">
                  We never sell, rent, lease, or trade subscriber or donor contact information to any third parties.
                </p>
              </div>

              <div className="bg-[#F8F6F1] p-6 rounded-xl border border-[#E8E5DD] space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#F6B83E]/20 text-[#F6B83E] flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#222222]">
                  Server-Side Security
                </h3>
                <p className="text-xs text-[#777777] leading-relaxed">
                  All submissions are protected by strict PostgreSQL Row-Level Security with zero public read access.
                </p>
              </div>

              <div className="bg-[#F8F6F1] p-6 rounded-xl border border-[#E8E5DD] space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#F6B83E]/20 text-[#F6B83E] flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#222222]">
                  Donor Confidentiality
                </h3>
                <p className="text-xs text-[#777777] leading-relaxed">
                  Contributions and communications are handled in accordance with 501(c)(3) nonprofit fiduciary standards.
                </p>
              </div>
            </div>

            {/* Policy Content */}
            <div className="space-y-8 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-[#E8E5DD] pt-8">
              <div className="space-y-3">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#222222]">
                  1. Information We Collect
                </h2>
                <p>
                  The JUBOH Foundation, Inc. (&ldquo;Foundation&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is an IRS-recognized 501(c)(3) nonprofit organization. We collect only the information voluntarily provided by individuals when:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-[#666666]">
                  <li>Subscribing to the foundation newsletter (email address).</li>
                  <li>Submitting general or programmatic inquiries via our contact form (full name, email address, inquiry subject, and message).</li>
                  <li>Submitting event participation requests for genuine scheduled gatherings.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#222222]">
                  2. Use of Information
                </h2>
                <p>
                  Any information you submit is used solely for the stated nonprofit purposes: to respond to your specific questions, provide program enrollment materials, deliver official newsletter updates, and coordinate community events. We do not use submitted information for automated marketing cascades or unrelated commercial solicitations.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#222222]">
                  3. Data Protection & Row-Level Security
                </h2>
                <p>
                  Our database architecture uses industry-standard encryption in transit and at rest. Database tables are governed by strict Row-Level Security (RLS) policies that prohibit public reading of subscriber, contact, or attendee records. Privileged operations are restricted to secured server-side functions.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#222222]">
                  4. Privacy Inquiries & Opt-Out
                </h2>
                <p>
                  You may at any time request the removal or correction of your email address from our subscriber records by contacting us at{" "}
                  <a
                    href="mailto:info@jubohfoundation.org"
                    className="text-[#F6B83E] font-medium hover:underline"
                  >
                    info@jubohfoundation.org
                  </a>{" "}
                  or writing to the foundation governance team.
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
