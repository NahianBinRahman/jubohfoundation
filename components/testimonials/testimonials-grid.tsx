"use client"

import React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { ScrollStagger, ScrollItem } from "@/components/common/scroll-reveal"
import { TESTIMONIALS, type Testimonial } from "@/data/testimonials"

interface TestimonialsGridProps {
  testimonials?: Testimonial[]
  className?: string
  limit?: number
}

export function TestimonialsGrid({
  testimonials = TESTIMONIALS,
  className,
  limit,
}: TestimonialsGridProps) {
  const displayItems = limit ? testimonials.slice(0, limit) : testimonials

  return (
    <div className={className}>
      <ScrollStagger
        staggerDelay={0.08}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {displayItems.map((item) => (
          <ScrollItem key={item.id} direction="up" distance={28} className="h-full">
            <motion.div
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="h-full bg-[#f4efe8] rounded-xl p-8 sm:p-9 border border-[#eae3d8] flex flex-col justify-between shadow-2xs hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              <div>
                {/* Distinctive Solid Gold Double Quotation Mark (Matching Template) */}
                <div className="text-[#F6B83E] mb-5">
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                </div>

                {/* Testimonial Quote Body */}
                <p className="text-sm md:text-base text-[#4a4a4a] leading-relaxed font-normal mb-8">
                  {item.quote}
                </p>
              </div>

              {/* Author Row with Circular Avatar */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-[#e2d9cd]">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-xs">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="48px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="font-serif text-base font-bold text-[#222222] leading-tight group-hover:text-[#F6B83E] transition-colors">
                    {item.name}
                  </h4>
                  <span className="text-xs text-[#777777] font-medium mt-0.5">
                    {item.role}
                  </span>
                </div>
              </div>
            </motion.div>
          </ScrollItem>
        ))}
      </ScrollStagger>
    </div>
  )
}
