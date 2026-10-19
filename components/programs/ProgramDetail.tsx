import React from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, ShieldCheck, Heart, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { ProgramItem } from "@/data/programs"

interface ProgramDetailProps {
  program: ProgramItem
}

export function ProgramDetail({ program }: ProgramDetailProps) {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E8E5DD]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Editorial Content Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-3">
              <span className="eyebrow-script text-xl text-[#F6B83E] block">
                Overview & Impact
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight leading-tight">
                {program.overview}
              </h2>
            </div>

            {/* Featured Photography Frame */}
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg border border-[#E8E5DD] bg-neutral-100">
              <Image
                src={program.featuredImage}
                alt={program.featuredImageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover object-center"
              />
              <div className="absolute top-4 left-4 bg-[#222222]/90 backdrop-blur-xs text-[#F6B83E] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm">
                {program.category}
              </div>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#555555] leading-relaxed pt-2">
              {program.fullDescription.map((p, idx) => (
                <p key={idx} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Sidebar / Key Highlights Card (4 cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Focus Card */}
            <div className="bg-[#F8F6F1] p-7 rounded-xl border border-[#E8E5DD] shadow-2xs space-y-5">
              <div className="flex items-center gap-2.5 border-b border-[#E8E5DD] pb-3">
                <div className="w-8 h-8 rounded-full bg-[#F6B83E]/20 text-[#F6B83E] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 fill-current" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#222222]">
                  Strategic Focus
                </h3>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-[#444444]">
                {program.keyFocus.map((focus, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F6B83E] shrink-0 mt-0.5" />
                    <span>{focus}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-[#E8E5DD] space-y-3">
                <Link href={program.callToAction.buttonHref} className="block w-full">
                  <Button variant="default" className="w-full font-bold text-xs uppercase py-3 shadow-xs">
                    {program.callToAction.buttonText}
                  </Button>
                </Link>
                <Link href="/donate" className="block w-full">
                  <Button variant="secondary" className="w-full text-xs font-medium gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-[#F6B83E] fill-current" />
                    Support This Initiative
                  </Button>
                </Link>
              </div>
            </div>

            {/* 501(c)(3) Transparency Box */}
            <div className="bg-white p-5 rounded-lg border border-[#E8E5DD] shadow-2xs flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#F6B83E] shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-[#222222] block">
                  IRS-Recognized 501(c)(3)
                </span>
                <span className="text-[#777777]">
                  All donations are 100% tax-deductible as allowed by law.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
