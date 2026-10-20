import React from "react"
import { BookOpen } from "lucide-react"
import { PrimaryButton } from "@/components/common/primary-button"

export function StoriesEmptyState() {
  return (
    <div className="bg-white rounded-xl border border-[#E8E5DD] shadow-xs p-10 sm:p-14 text-center space-y-6">
      {/* Icon Emblem */}
      <div className="w-16 h-16 rounded-full bg-[#F8F6F1] border border-[#E8E5DD] flex items-center justify-center text-[#C5A059] mx-auto shadow-2xs">
        <BookOpen className="w-7 h-7" />
      </div>

      <div className="space-y-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] block">
          Editorial Insights
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111827]">
          Stories Coming Soon
        </h3>
        <p className="text-xs sm:text-sm text-[#555D68] max-w-lg mx-auto leading-relaxed">
          We&apos;re preparing new stories and updates. In the meantime, explore the
          programs and initiatives of Juboh Foundation.
        </p>
      </div>

      <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
        <PrimaryButton href="/programs" variant="gold" size="default" withArrow>
          Explore Our Programs
        </PrimaryButton>
        <PrimaryButton href="/about" variant="charcoal" size="default">
          About Our Mission
        </PrimaryButton>
      </div>
    </div>
  )
}
