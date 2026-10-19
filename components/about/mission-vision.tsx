import React from "react"
import Image from "next/image"
import { Compass, Eye, Sparkles, Heart } from "lucide-react"
import { SectionHeading } from "@/components/common/section-heading"
import { MISSION_VISION } from "@/data/site-data"
import { IMAGES } from "@/lib/images"

export function MissionVision() {
  return (
    <section className="py-24 md:py-32 bg-[#F8F6F1]">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Our North Star"
          title="Our Mission & Vision"
          subtitle="Guided by the enduring wisdom of Ubuntu, we dedicate every initiative to building an interconnected, compassionate, and equitable world."
        />

        {/* Two-Column Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="bg-white p-8 md:p-10 rounded-lg border border-[#E8E5DD] shadow-xs hover:border-[#F6B83E]/50 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#F8F6F1] border border-[#E8E5DD] flex items-center justify-center text-[#F6B83E]">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F6B83E] block">
                      Foundational Purpose
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#222222]">
                      Mission Statement
                    </h3>
                  </div>
                </div>
                <Sparkles className="w-5 h-5 text-[#F6B83E]/40" />
              </div>

              <blockquote className="font-serif text-sm md:text-base leading-relaxed text-[#444444] italic border-l-2 border-[#F6B83E] pl-4 py-2">
                &ldquo;{MISSION_VISION.mission}&rdquo;
              </blockquote>
            </div>

            <div className="pt-6 border-t border-neutral-100 mt-6 grid grid-cols-3 gap-2 text-center text-[11px] text-[#777777]">
              <div className="p-2 rounded bg-[#F8F6F1]">
                <strong className="block text-[#222222] font-semibold">Educate</strong>
                <span>Culturally Grounded</span>
              </div>
              <div className="p-2 rounded bg-[#F8F6F1]">
                <strong className="block text-[#222222] font-semibold">Inspire</strong>
                <span>Collective Unity</span>
              </div>
              <div className="p-2 rounded bg-[#F8F6F1]">
                <strong className="block text-[#222222] font-semibold">Empower</strong>
                <span>Self-Reliance</span>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 md:p-10 rounded-lg border border-[#E8E5DD] shadow-xs hover:border-[#F6B83E]/50 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#F8F6F1] border border-[#E8E5DD] flex items-center justify-center text-[#F6B83E]">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F6B83E] block">
                      The Future We Build
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#222222]">
                      Vision Statement
                    </h3>
                  </div>
                </div>
                <Sparkles className="w-5 h-5 text-[#F6B83E]/40" />
              </div>

              <blockquote className="font-serif text-sm md:text-base leading-relaxed text-[#444444] italic border-l-2 border-[#F6B83E] pl-4 py-2">
                &ldquo;{MISSION_VISION.vision}&rdquo;
              </blockquote>
            </div>

            <div className="pt-6 border-t border-neutral-100 mt-6 grid grid-cols-3 gap-2 text-center text-[11px] text-[#777777]">
              <div className="p-2 rounded bg-[#F8F6F1]">
                <strong className="block text-[#222222] font-semibold">Harmony</strong>
                <span>Mutual Respect</span>
              </div>
              <div className="p-2 rounded bg-[#F8F6F1]">
                <strong className="block text-[#222222] font-semibold">Inclusion</strong>
                <span>Equitable Access</span>
              </div>
              <div className="p-2 rounded bg-[#F8F6F1]">
                <strong className="block text-[#222222] font-semibold">Sustainability</strong>
                <span>Enduring Change</span>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Documentary Photography Frame */}
        <div className="relative rounded-xl overflow-hidden border border-[#E8E5DD] shadow-md bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto lg:h-[380px]">
              <Image
                src={IMAGES.aboutMission.src}
                alt={IMAGES.aboutMission.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
            </div>
            <div className="lg:col-span-5 p-8 lg:p-10 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F6B83E] block">
                The Ubuntu Philosophy
              </span>
              <h4 className="font-serif text-2xl font-bold text-[#222222] leading-snug">
                &ldquo;I Am Because We Are&rdquo;
              </h4>
              <p className="text-xs md:text-sm text-[#777777] leading-relaxed">
                Ubuntu is more than a cultural concept; it is our operational ethos.
                By recognizing our shared humanity, every course we teach, every home
                we develop, and every well we power reflects our dedication to the
                dignity and flourishing of the whole community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
