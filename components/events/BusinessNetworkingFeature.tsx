import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Users, Globe2, Sparkles, ArrowRight } from "lucide-react"
import { PrimaryButton } from "@/components/common/primary-button"
import { IMAGES } from "@/lib/images"

export function BusinessNetworkingFeature() {
  return (
    <section className="py-20 md:py-28 bg-[#F8F6F1] border-t border-[#E8E5DD]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Documentary Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/11] rounded-xl overflow-hidden shadow-lg border border-[#E8E5DD] bg-neutral-100">
              <Image
                src={IMAGES.events.businessNetworking.src}
                alt={IMAGES.events.businessNetworking.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute top-4 left-4 bg-[#111827]/90 backdrop-blur-xs text-[#C5A059] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm">
                Business Academy Initiative
              </div>
            </div>
          </div>

          {/* Right Column: Informational Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="eyebrow-script text-xl text-[#C5A059] block">
                Executive Engagement
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#111827] tracking-tight leading-tight">
                Business Events & Networking
              </h2>
            </div>

            <p className="text-sm md:text-base text-[#555D68] leading-relaxed">
              As part of the JUBOH Business Academy, we activate entrepreneurs,
              small business owners, and corporate partners through collaborative
              gatherings designed to build lasting commercial networks and capital
              alliances.
            </p>

            {/* Core Event Formats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-5 rounded-lg border border-[#E8E5DD] shadow-2xs space-y-1.5">
                <div className="flex items-center gap-2 text-[#111827] font-serif font-bold text-base">
                  <Users className="w-4 h-4 text-[#C5A059]" />
                  <span>In-Person Masterminds</span>
                </div>
                <p className="text-xs text-[#555D68] leading-relaxed">
                  Collaborative peer-to-peer workshops tackling real-world business
                  roadblocks, scaling tactics, and operational best practices.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-[#E8E5DD] shadow-2xs space-y-1.5">
                <div className="flex items-center gap-2 text-[#111827] font-serif font-bold text-base">
                  <Globe2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Virtual Networking</span>
                </div>
                <p className="text-xs text-[#555D68] leading-relaxed">
                  Accessible digital roundtable discussions and webinars
                  connecting founders with national business resources and mentors.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <PrimaryButton
                href="/programs/business-academy"
                variant="gold"
                size="default"
                withArrow
              >
                Explore Business Academy
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
