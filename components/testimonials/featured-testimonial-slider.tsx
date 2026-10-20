"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { TESTIMONIALS } from "@/data/testimonials"

interface FeaturedTestimonialSliderProps {
  className?: string
}

export function FeaturedTestimonialSlider({ className }: FeaturedTestimonialSliderProps) {
  // Use the top 3 featured testimonials for the slider
  const featuredList = TESTIMONIALS.filter((t) => t.isFeatured).slice(0, 3)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance slider every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredList.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [featuredList.length])

  const current = featuredList[currentIndex]

  return (
    <div className={className}>
      <div className="relative rounded-2xl bg-[#44443c] text-white p-8 sm:p-12 md:p-16 lg:p-20 shadow-2xl overflow-hidden text-center max-w-5xl mx-auto border border-neutral-700/40">
        {/* Subtle Warm Accent Ambient Lighting */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Small Golden Eyebrow */}
        <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A059] block mb-6">
          TESTIMONIALS
        </span>

        {/* Animated Testimonial Content */}
        <div className="min-h-[220px] sm:min-h-[180px] md:min-h-[160px] flex flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-3xl mx-auto space-y-6"
            >
              {/* Large Editorial Quote */}
              <blockquote className="font-serif text-lg sm:text-2xl md:text-3xl font-normal text-neutral-100 leading-relaxed sm:leading-relaxed">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Thin Accent Separator Line */}
              <div className="w-16 h-px bg-white/20 mx-auto" />

              {/* Author & Role */}
              <div>
                <h4 className="font-serif text-base sm:text-lg font-bold text-white tracking-wide">
                  {current.name}
                </h4>
                <p className="text-xs sm:text-sm font-medium text-[#C5A059] mt-1">
                  {current.role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {featuredList.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === idx
                  ? "w-3 h-3 bg-[#C5A059] scale-110 shadow-xs"
                  : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
