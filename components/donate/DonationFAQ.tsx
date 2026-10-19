"use client"

import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { SectionHeading } from "@/components/common/section-heading"

const DONATION_FAQS = [
  {
    id: "tax-deductible",
    question: "Is my charitable donation tax-deductible?",
    answer:
      "Yes. JUBOH Foundation, Inc. is a United States IRS-recognized 501(c)(3) nonprofit organization founded in 2020. All charitable contributions of any amount are 100% tax-deductible to the fullest extent permitted by law.",
  },
  {
    id: "which-programs",
    question: "Which programs does the JUBOH Foundation support?",
    answer:
      "Contributions support our five programmatic pillars: the JUBOH Business Academy, Youth Development (including the Youth Leadership Council and HBCU College Tours), Global Missions (solar micro-grids and clean water), Affordable Housing (CHDO single-family housing and counseling), and Founder's Strategic Initiatives.",
  },
  {
    id: "how-to-contribute-now",
    question: "How can I arrange a gift while online checkout is being integrated?",
    answer:
      "You can coordinate direct contributions, wire transfers, corporate sponsorships, and donor-advised fund gifts directly with our administrative office by emailing info@jubohfoundation.org or calling toll-free at (800) JUBOH-ORG.",
  },
  {
    id: "where-to-learn-more",
    question: "Where can I learn more about the foundation's leadership and governance?",
    answer:
      "You can visit our About Us page to read about our organizational history, founder and chairman Jalen 'JUBOH' Uboh, president and executive director Anika Carter, and our guiding Ubuntu philosophy.",
  },
]

export function DonationFAQ() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-[#E8E5DD]">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Questions & Clarity"
          title="Donation & Giving Questions"
          subtitle="Clear, verified answers regarding our 501(c)(3) tax status, stewardship, and program allocations."
        />

        <div className="max-w-3xl mx-auto mt-12">
          <Accordion type="single" defaultValue="tax-deductible" className="space-y-4">
            {DONATION_FAQS.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
