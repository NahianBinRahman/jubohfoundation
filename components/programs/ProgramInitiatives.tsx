import React from "react"
import Link from "next/link"
import { Check, ArrowRight, ShieldCheck, Home, FileText } from "lucide-react"
import { SectionHeading } from "@/components/common/section-heading"
import { Button } from "@/components/ui/button"
import type { ProgramItem } from "@/data/programs"

interface ProgramInitiativesProps {
  program: ProgramItem
}

export function ProgramInitiatives({ program }: ProgramInitiativesProps) {
  return (
    <div className="py-24 md:py-32 bg-[#F8F6F1]">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Key Components"
          title={program.initiativesTitle}
          subtitle={program.initiativesSubtitle}
        />

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {program.initiatives.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 sm:p-8 rounded-xl border border-[#E8E5DD] hover:border-[#F6B83E] shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="font-serif text-2xl font-bold text-[#F6B83E] block mb-2">
                  0{idx + 1}
                </span>

                {item.subtitle && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#777777] block mb-1">
                    {item.subtitle}
                  </span>
                )}

                <h3 className="font-serif text-xl font-bold text-[#222222] mb-3 group-hover:text-[#F6B83E] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#777777] leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Detail Bullet Points if present */}
                {item.details && item.details.length > 0 && (
                  <ul className="space-y-2 pt-4 border-t border-neutral-100 mb-4">
                    {item.details.map((detail, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-start gap-2 text-xs text-[#555555]"
                      >
                        <Check className="w-3.5 h-3.5 text-[#F6B83E] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Specific Assistance Categories Section for Housing Initiative */}
        {program.assistanceCategories && program.assistanceCategories.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#E8E5DD]">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="eyebrow-script text-xl text-[#F6B83E] block mb-2">
                Counseling & Support
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#222222] mb-3">
                Need Housing Assistance?
              </h3>
              <p className="text-xs sm:text-sm text-[#777777] max-w-xl mx-auto leading-relaxed">
                As a nonprofit Community Housing Development Organization (CHDO),
                we provide individualized assistance, resources, and advocacy.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {program.assistanceCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-xl border border-[#E8E5DD] hover:border-[#F6B83E] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F6B83E] block mb-1">
                      {cat.subtitle}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#222222] mb-3 leading-snug">
                      {cat.title}
                    </h4>
                    <p className="text-xs text-[#777777] leading-relaxed mb-6">
                      {cat.description}
                    </p>
                  </div>

                  {cat.actionHref && (
                    <Link
                      href={cat.actionHref}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#222222] hover:text-[#F6B83E] transition-colors pt-2 border-t border-neutral-100"
                    >
                      <span>{cat.actionLabel || "Request Assistance"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
