import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { ProgramItem } from "@/data/programs"

interface ProgramCardProps {
  program: ProgramItem
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <article className="bg-white rounded-lg border border-[#E8E5DD] overflow-hidden shadow-xs hover:shadow-lg hover:border-[#F6B83E]/50 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Photographic Header Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
          <Image
            src={program.heroImage}
            alt={program.heroImageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3.5 left-3.5 bg-[#222222]/90 backdrop-blur-xs text-[#F6B83E] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs shadow-xs">
            {program.category}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7">
          <span className="text-[11px] font-semibold text-[#F6B83E] uppercase tracking-wider block mb-1">
            {program.tagline}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#222222] mb-3 group-hover:text-[#F6B83E] transition-colors leading-snug">
            {program.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#777777] leading-relaxed line-clamp-3">
            {program.overview}
          </p>
        </div>
      </div>

      {/* Card Action Link */}
      <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-neutral-100 flex items-center justify-between">
        <Link
          href={`/programs/${program.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#222222] group-hover:text-[#F6B83E] transition-colors"
        >
          <span>EXPLORE PROGRAM</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
        <span className="text-[11px] text-[#999999] font-medium hidden sm:inline">
          Juboh Initiative
        </span>
      </div>
    </article>
  )
}
