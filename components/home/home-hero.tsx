"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

export function HomeHero() {

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

        {/* Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center"
        >
          {/* Solid Gold Button with ambient float & tap response */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
          >
            <Link
              href="/donate"
              className="inline-flex items-center justify-center bg-[#F6B83E] hover:bg-[#e0a32e] text-[#222222] font-bold text-xs uppercase tracking-widest px-9 py-4 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer"
            >
              DONATE NOW
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
