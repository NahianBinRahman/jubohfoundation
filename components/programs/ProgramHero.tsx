import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Sparkles } from "lucide-react"

interface ProgramHeroProps {
  title: string
  tagline: string
  category: string
  imageSrc: string
  imageAlt: string
  slug?: string
}

export function ProgramHero({
  title,
  tagline,
  category,
  imageSrc,
  imageAlt,
}: ProgramHeroProps) {
  return (
    <section className="relative w-full bg-[#111827] text-white py-24 md:py-32 overflow-hidden flex items-center">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.32] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/70 to-[#111827]/85" />
      </div>

      <div className="container-custom relative z-10 w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-2xl">
          {/* Eyebrow / Tagline */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/15 text-[#C5A059] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3 h-3 fill-current" />
            <span>{category}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.15]">
            {title}
          </h1>

          <p className="text-neutral-300 text-base md:text-lg italic font-serif max-w-xl">
            &ldquo;{tagline}&rdquo;
          </p>
        </div>

        {/* Humanite Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs font-medium text-neutral-300 bg-black/40 backdrop-blur-xs px-4 py-2.5 rounded-full border border-white/10 self-start md:self-auto shrink-0"
        >
          <Link href="/" className="hover:text-[#C5A059] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" />
          <Link href="/programs" className="hover:text-[#C5A059] transition-colors">
            Programs
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
          <span className="text-[#C5A059] font-semibold whitespace-nowrap">
            {title}
          </span>
        </nav>
      </div>
    </section>
  )
}
