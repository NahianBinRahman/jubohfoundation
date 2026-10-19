"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, X } from "lucide-react"
import { motion } from "motion/react"

export function HomeHero() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section className="relative w-full min-h-[620px] sm:min-h-[700px] md:min-h-[760px] lg:min-h-[820px] bg-[#1a1a1a] text-white flex items-center justify-center pt-24 sm:pt-28 md:pt-36 pb-36 sm:pb-44 md:pb-52 overflow-hidden">
      {/* Background Image: Authentic Black & White Emotive Portrait with slow subtle zoom */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/generated/hero-humanite.jpg"
          alt="Mother embracing her two sons - JUBOH Foundation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.55] contrast-[1.12]"
        />
        {/* Soft Vignette & Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/40 via-transparent to-[#1a1a1a]/70" />
        <div className="absolute inset-0 bg-black/25" />
      </motion.div>

      {/* Hero Content Container */}
      <div className="container-custom relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        {/* Main Headline with Highlighted Gold Keywords */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-white mb-6 leading-[1.14]"
        >
          Best Way To Make A <span className="text-[#F6B83E]">Difference</span>
          <br className="hidden sm:inline" /> In The{" "}
          <span className="text-[#F6B83E]">Lives</span> Of Others
        </motion.h1>

        {/* Supporting Mission Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-neutral-200 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          The JUBOH Foundation is an IRS-recognized 501(c)(3) nonprofit dedicated
          to educating, inspiring, and empowering individuals and communities
          through culturally relevant programs, housing, and global missions.
        </motion.p>

        {/* Dual CTA Buttons (Solid Gold + Circular Play Button) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8"
        >
          {/* Solid Gold Button */}
          <Link
            href="/donate"
            className="inline-flex items-center justify-center bg-[#F6B83E] hover:bg-[#e0a32e] text-[#222222] font-bold text-xs uppercase tracking-widest px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
          >
            DONATE NOW
          </Link>

          {/* Watch Video Circular Trigger */}
          <button
            onClick={() => setVideoOpen(true)}
            className="inline-flex items-center gap-3.5 group cursor-pointer focus:outline-none"
            aria-label="Watch video presentation"
          >
            <div className="w-12 h-12 rounded-full bg-white text-[#222222] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#F6B83E] transition-all duration-300">
              <Play className="w-5 h-5 fill-current ml-0.5" />
            </div>
            <span className="text-white font-bold text-xs uppercase tracking-widest group-hover:text-[#F6B83E] transition-colors">
              WATCH VIDEO
            </span>
          </button>
        </motion.div>
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#F6B83E] hover:text-[#222222] transition-colors"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="JUBOH Foundation Mission Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}
