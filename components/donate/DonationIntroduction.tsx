import React from "react"
import Image from "next/image"
import { CheckCircle2, Sparkles, BookOpen, GraduationCap, Building2, Globe2, Home } from "lucide-react"
import { IMAGES } from "@/lib/images"

const PILLARS = [
  {
    icon: BookOpen,
    title: "Culturally Relevant Education",
    desc: "Empowering adults and aspiring founders through 20+ specialized curriculum courses in business, real estate, and finance.",
  },
  {
    icon: GraduationCap,
    title: "Youth Leadership & HBCU Tours",
    desc: "Guiding high school scholars through academic SAT/ACT prep, civic engagement, and life-changing college campus immersions.",
  },
  {
    icon: Building2,
    title: "Small Business Entrepreneurship",
    desc: "Facilitating capital access networks, peer masterminds, and operational mentorship to build generational wealth.",
  },
  {
    icon: Globe2,
    title: "Global Missions & Infrastructure",
    desc: "Establishing community solar micro-grids, clean drinking water wells, and youth ambassadorships worldwide.",
  },
  {
    icon: Home,
    title: "Affordable Housing (CHDO)",
    desc: "Developing single-family homes and delivering HUD-certified counseling for homeownership, foreclosure, and disaster relief.",
  },
]

export function DonationIntroduction() {
  return (
    <section className="py-20 md:py-28 bg-[#F8F6F1] border-b border-[#E8E5DD]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Documentary Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#E8E5DD] bg-neutral-100">
              <Image
                src={IMAGES.donation.community.src}
                alt={IMAGES.donation.community.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#111827]/90 backdrop-blur-xs text-[#C5A059] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-sm">
                Ubuntu Community Impact
              </div>
            </div>

            {/* Supporting Caption Pill */}
            <div className="mt-4 p-4 rounded-xl bg-white border border-[#E8E5DD] shadow-2xs flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#F8F6F1] flex items-center justify-center text-[#C5A059] shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="text-xs text-[#555D68] italic leading-snug">
                &ldquo;I am because we are&rdquo; &mdash; Grounded in mutual respect, collective growth, and lasting community resilience.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="eyebrow-script text-xl text-[#C5A059] block">
                The Power of Giving
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#111827] tracking-tight leading-tight">
                Together, We Can Build a Brighter Future
              </h2>
            </div>

            <p className="text-sm md:text-base text-[#555D68] leading-relaxed">
              At the JUBOH Foundation, every resource entrusted to our organization is directed toward systematic, sustainable empowerment. Through community-driven partnerships, we break cycles of generational disparity by investing in five vital pillars:
            </p>

            {/* 5 Program Pillars List */}
            <div className="space-y-3.5 pt-2">
              {PILLARS.map((pillar) => (
                <div key={pillar.title} className="flex items-start gap-3 text-left">
                  <div className="w-6 h-6 rounded-full bg-white border border-[#E8E5DD] flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5 shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#111827]">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#555D68] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
