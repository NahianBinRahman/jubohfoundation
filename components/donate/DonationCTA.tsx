import React from "react"
import { PrimaryButton } from "@/components/common/primary-button"

export function DonationCTA() {
  return (
    <section className="py-20 md:py-24 bg-[#F8F6F1] border-t border-[#E8E5DD]">
      <div className="container-custom">
        <div className="bg-[#222222] rounded-2xl p-8 sm:p-12 md:p-16 text-center text-white relative overflow-hidden space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#F6B83E] block">
              Ubuntu Philosophy In Action
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              Be Part of Lasting Change
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl mx-auto">
              Whether through community collaboration, academic partnerships, or philanthropic investment, your participation helps build stronger, more self-sufficient communities.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton href="/programs" variant="gold" size="default" withArrow>
              Explore Our Programs
            </PrimaryButton>
            <PrimaryButton href="/contact" variant="white" size="default">
              Contact Us
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}
