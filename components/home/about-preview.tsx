"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, X } from "lucide-react"
import { motion } from "motion/react"
import { ScrollReveal, ScrollStagger, ScrollItem } from "@/components/common/scroll-reveal"

export function AboutPreview() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section className="py-24 md:py-32 bg-[#FFFFFF] relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ============================================================== */}
          {/* LEFT: Multi-Layered Black & White Photographic Collage */}
          {/* ============================================================== */}
          <div className="lg:col-span-6 relative flex justify-center">
            <ScrollReveal direction="right" distance={40} duration={0.8} className="w-full max-w-[500px]">
              <div className="relative aspect-[500/910] w-full rounded-sm overflow-hidden shadow-xl group">
                <Image
                  src="/images/generated/about-collage.jpg"
                  alt="JUBOH Foundation volunteers joining hands and working in community"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Floating Gold Play Button (Overlay positioned exactly over the image's play button) */}
                <button
                  onClick={() => setVideoOpen(true)}
                  style={{ top: "20.4%", left: "84%", width: "9.8%", height: "5.5%" }}
                  className="absolute bg-[#F6B83E] hover:bg-[#e0a32e] text-[#222222] flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-115 cursor-pointer z-10"
                  aria-label="Play About Us video"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" />
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* ============================================================== */}
          {/* RIGHT: Narrative, 4-Point Checklist & Solid Gold Stat Card */}
          {/* ============================================================== */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            {/* Script Eyebrow & Headline */}
            <ScrollReveal direction="up" distance={28} duration={0.7}>
              <span className="eyebrow-script text-[#F6B83E] text-2xl sm:text-3xl font-normal block mb-2">
                ABOUT US
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#222222] tracking-tight leading-[1.18]">
                We Are In A Mission To Help The Helpless
              </h2>
            </ScrollReveal>

            {/* Exact Authentic About Us Copy */}
            <ScrollReveal direction="up" distance={24} delay={0.1} duration={0.7}>
              <div className="space-y-3.5">
                <p className="text-sm md:text-base text-[#777777] leading-relaxed">
                  The JUBOH Foundation, founded by Jalen &ldquo;JUBOH&rdquo; Uboh, is a United States IRS-recognized 501(c)3 non-profit organization and charitable arm of the JUBOH Companies global organization.
                </p>
                <p className="text-sm md:text-base text-[#777777] leading-relaxed">
                  The JUBOH Foundation was founded in 2020 with the purpose to <strong className="text-[#222222] font-semibold">Educate, Inspire, and to Empower</strong> the lives of those often forgotten; the marginalized, the left behind, and the most vulnerable in our society.
                </p>
              </div>
            </ScrollReveal>

            {/* Leadership Photo & Authentic Caption */}
            <ScrollReveal direction="up" distance={24} delay={0.15} duration={0.7}>
              <figure className="bg-[#F8F6F1] border border-[#E8E5DD] p-3.5 sm:p-4 rounded-sm flex flex-col sm:flex-row items-center gap-4 shadow-xs transition-shadow duration-300 hover:shadow-md">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-xs overflow-hidden shadow-xs border border-[#E8E5DD]">
                  <Image
                    src="/images/leadership/jalen-uboh-anika-carter.jpg"
                    alt="Founder Jalen Uboh and President Anika Carter"
                    fill
                    className="object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <figcaption className="text-xs text-[#555555] leading-relaxed space-y-1 text-center sm:text-left">
                  <div>
                    <strong className="text-[#222222]">Founder and Chairman :</strong> Jalen Uboh (pictured right)
                  </div>
                  <div>
                    <strong className="text-[#222222]">President and Executive Director:</strong> Anika Carter (pictured left)
                  </div>
                </figcaption>
              </figure>
            </ScrollReveal>

            {/* 4 Checklist Items with Cascading Staggered Animation */}
            <ScrollStagger staggerDelay={0.08} delayChildren={0.1} className="space-y-3 pt-2">
              {[
                "Support people in extreme need",
                "Largest global crowdfunding community",
                "Make the world a better place",
                "Share your love for community",
              ].map((item, index) => (
                <ScrollItem key={index} direction="up" distance={16} className="flex items-center gap-3.5">
                  <div className="w-5 h-5 text-[#F6B83E] shrink-0 flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                      <polyline points="15 6 9 12" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-[#444444] font-medium">
                    {item}
                  </span>
                </ScrollItem>
              ))}
            </ScrollStagger>

            {/* Bottom Solid Gold Stat Card with Reveal */}
            <ScrollReveal direction="up" distance={24} delay={0.2} scale={0.96} duration={0.65}>
              <div className="pt-2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#F6B83E] px-8 py-6 inline-flex items-center gap-6 shadow-md rounded-xs transition-shadow duration-300 hover:shadow-xl cursor-pointer select-none"
                >
                  {/* Money Sack with Stacks of Coins SVG Icon */}
                  <div className="text-[#222222] shrink-0">
                    <svg
                      className="w-12 h-12"
                      viewBox="0 0 64 64"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 20h20l4 8c4 8 2 24-14 24s-18-16-14-24l4-8z" />
                      <path d="M22 20c-2-4-2-7 0-9 2-2 6-1 10-1s8-1 10 1c2 2 2 5 0 9" />
                      <line x1="20" y1="20" x2="44" y2="20" strokeWidth="3" />
                      <path d="M32 28v12M29 31c0-1.5 1.5-2 3-2s3 .5 3 2-1.5 2-3 2-3 .5-3 2 1.5 2 3 2s3-.5 3-2" strokeWidth="2" />
                      <ellipse cx="14" cy="46" rx="6" ry="2.5" />
                      <path d="M8 46v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4" />
                      <path d="M8 50v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4" />
                    </svg>
                  </div>

                  {/* Stat Number & Label */}
                  <div className="flex flex-col">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#222222] leading-none tracking-tight">
                      70,458
                    </span>
                    <span className="text-xs font-semibold text-[#222222]/85 tracking-wide mt-1.5">
                      Successfull Campaigns
                    </span>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
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
              title="About JUBOH Foundation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}
