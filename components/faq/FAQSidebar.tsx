import React from "react"
import Link from "next/link"
import { CheckCircle2, MessageSquare, ArrowRight, Sparkles } from "lucide-react"
import { PrimaryButton } from "@/components/common/primary-button"

const TOPICS = [
  "JUBOH Business Academy & Masterminds",
  "Youth Leadership Council & HBCU Tours",
  "Solar Water & Micro-Grid Missions",
  "Affordable Housing (CHDO) Assistance",
  "Founder's Strategic Community Alliances",
  "Ubuntu Philanthropic Collaboration",
]

export function FAQSidebar() {
  return (
    <aside className="space-y-8 sticky top-28">
      {/* Information Panel */}
      <div className="bg-white rounded-xl border border-[#E8E5DD] p-7 sm:p-8 shadow-xs space-y-6">
        <div className="space-y-2">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#F6B83E] block">
            Need Guidance?
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#222222]">
            Need More Information?
          </h3>
          <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
            Have specific questions regarding our educational programs, community housing development, or strategic alliances? Our team is here to assist.
          </p>
        </div>

        {/* Verified Topics Checklist */}
        <div className="space-y-3 pt-2 border-t border-[#F8F6F1]">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#222222]">
            Core Areas of Focus
          </h4>
          <ul className="space-y-2.5">
            {TOPICS.map((topic) => (
              <li key={topic} className="flex items-start gap-2.5 text-xs text-[#555555]">
                <CheckCircle2 className="w-4 h-4 text-[#F6B83E] shrink-0 mt-0.5" />
                <span className="leading-snug">{topic}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact CTA */}
        <div className="pt-2">
          <PrimaryButton
            href="/contact"
            variant="gold"
            size="default"
            className="w-full text-center justify-center"
            withArrow
          >
            Contact Our Team
          </PrimaryButton>
        </div>
      </div>

      {/* Explore Programs Card */}
      <div className="bg-[#222222] rounded-xl p-7 text-white shadow-md relative overflow-hidden space-y-4">
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#F6B83E]">
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="space-y-1.5">
          <h4 className="font-serif text-lg font-bold text-white">
            Discover Our 5 Core Programs
          </h4>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Learn more about our entrepreneurship courses, housing initiatives, and clean water missions.
          </p>
        </div>
        <div>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F6B83E] hover:text-white transition-colors"
          >
            <span>Explore All Programs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </aside>
  )
}
