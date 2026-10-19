import React from "react"
import { Sparkles, Shield, Award, Users } from "lucide-react"
import { SectionHeading } from "@/components/common/section-heading"

export function LeadershipSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Foundation Governance"
          title="The People Behind Our Mission"
          subtitle="Guided by visionary civic leadership and executive dedication to community empowerment and collective progress."
        />

        {/* Two Leadership Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Jalen "JUBOH" Uboh */}
          <div className="bg-white rounded-lg border border-[#E8E5DD] shadow-xs hover:border-[#F6B83E] hover:shadow-lg transition-all duration-300 p-8 flex flex-col justify-between group">
            <div className="space-y-5">
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F6B83E] bg-[#F8F6F1] px-3 py-1 rounded-xs">
                  Executive Board
                </span>
                <div className="w-8 h-8 rounded-full bg-[#F6B83E]/10 text-[#F6B83E] flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
              </div>

              {/* Identity Details */}
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#F6B83E] uppercase tracking-wider block">
                  Founder & Chairman
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#222222] group-hover:text-[#F6B83E] transition-colors">
                  Jalen &ldquo;JUBOH&rdquo; Uboh
                </h3>
              </div>

              {/* Bio & Authentic Facts */}
              <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
                Visionary entrepreneur and civic leader who founded the JUBOH
                Foundation in 2020 as the philanthropic arm of the JUBOH Companies
                global organization. Champion of the Ubuntu philosophy, dedicated
                to empowering the marginalized, the left behind, and the most
                vulnerable in our society through education and capital access.
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-100 mt-6 flex items-center justify-between text-xs text-[#777777]">
              <span className="font-medium text-[#222222]">JUBOH Companies</span>
              <span className="text-[11px] text-[#F6B83E] font-semibold">
                Founded 2020
              </span>
            </div>
          </div>

          {/* Card 2: Anika Carter */}
          <div className="bg-white rounded-lg border border-[#E8E5DD] shadow-xs hover:border-[#F6B83E] hover:shadow-lg transition-all duration-300 p-8 flex flex-col justify-between group">
            <div className="space-y-5">
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F6B83E] bg-[#F8F6F1] px-3 py-1 rounded-xs">
                  Executive Direction
                </span>
                <div className="w-8 h-8 rounded-full bg-[#F6B83E]/10 text-[#F6B83E] flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
              </div>

              {/* Identity Details */}
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#F6B83E] uppercase tracking-wider block">
                  President & Executive Director
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#222222] group-hover:text-[#F6B83E] transition-colors">
                  Anika Carter
                </h3>
              </div>

              {/* Bio & Authentic Facts */}
              <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
                Executive leader spearheading foundation operations, strategic
                collaborative partnerships, and grassroots program deployment.
                Committed to uniting diverse communities, advancing CHDO affordable
                workforce housing, and developing sustainable youth leadership
                initiatives nationwide.
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-100 mt-6 flex items-center justify-between text-xs text-[#777777]">
              <span className="font-medium text-[#222222]">Executive Leadership</span>
              <span className="text-[11px] text-[#F6B83E] font-semibold">
                Strategic Operations
              </span>
            </div>
          </div>
        </div>

        {/* Authentic Attribution Note */}
        <div className="text-center mt-12 max-w-xl mx-auto">
          <p className="text-[11px] text-[#777777] italic">
            * Executive governance verified from original foundation charter and
            IRS-recognized 501(c)(3) documentation.
          </p>
        </div>
      </div>
    </section>
  )
}
