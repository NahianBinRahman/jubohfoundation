"use client"

import React from "react"
import Link from "next/link"
import { Calendar, User, FileEdit, ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import type { EventItem } from "@/data/events"

interface HorizontalEventCardProps {
  event: EventItem
  index?: number
}

export function HorizontalEventCard({ event, index = 0 }: HorizontalEventCardProps) {
  // Preset fallback badge colors matching the reference template
  const badgeColors = ["#FF5538", "#F6B83E", "#4DB6AC"]
  const currentBadgeColor = event.badgeColor || badgeColors[index % badgeColors.length]

  return (
    <motion.article
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="bg-white rounded-2xl border border-[#EAE7DF] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_-4px_rgba(0,0,0,0.12)] hover:border-[#D8D4C8] transition-all duration-300 p-6 sm:p-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-6 sm:gap-8 group cursor-pointer"
    >
      {/* Left Date Block (Coral / Gold / Teal) */}
      <div
        className="w-full sm:w-32 md:w-36 h-28 sm:h-32 md:h-36 rounded-xl sm:rounded-2xl shrink-0 flex flex-col items-center justify-center text-white shadow-xs transition-transform duration-300 group-hover:scale-[1.02]"
        style={{ backgroundColor: currentBadgeColor }}
      >
        <span className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none font-sans">
          {event.displayDay}
        </span>
        <span className="text-xs sm:text-sm font-medium tracking-wide mt-1.5 opacity-95">
          {event.displayMonth}
        </span>
      </div>

      {/* Right Content */}
      <div className="flex-1 flex flex-col justify-between space-y-3 min-w-0">
        <div>
          <Link
            href={`/events/${event.slug}`}
            className="block group-hover:text-[#FF5538] transition-colors duration-200"
          >
            <h3 className="text-xl sm:text-2xl md:text-[26px] font-bold text-[#1A1A1A] tracking-tight leading-snug line-clamp-2">
              {event.title}
            </h3>
          </Link>
          <p className="text-sm md:text-base text-[#777777] font-normal leading-relaxed mt-2 line-clamp-2">
            {event.description}
          </p>
        </div>

        {/* Metadata Row matching the reference */}
        <div className="pt-2 flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-2.5 text-xs sm:text-sm text-[#666666] font-medium border-t border-[#F2EFE9] sm:border-t-0 sm:pt-1">
          {/* Calendar Date */}
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#FF5538] shrink-0" />
            <span className="text-[#555555]">{event.dateFormatted || event.date}</span>
          </div>

          {/* Speaker */}
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-[#FF5538] shrink-0" />
            <span className="text-[#555555]">
              Speaker: <span className="text-[#333333] font-semibold">{event.speaker}</span>
            </span>
          </div>

          {/* Subject */}
          <div className="flex items-center gap-2">
            <FileEdit className="w-4 h-4 text-[#FF5538] shrink-0" />
            <span className="text-[#555555]">
              Subject: <span className="text-[#333333] font-semibold">{event.subject}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Action Arrow (Subtle on Desktop) */}
      <div className="hidden lg:flex items-center justify-center shrink-0 pl-2">
        <Link
          href={`/events/${event.slug}`}
          className="w-11 h-11 rounded-full bg-[#F8F6F1] hover:bg-[#FF5538] text-[#222222] hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs group-hover:translate-x-1"
          aria-label={`View details for ${event.title}`}
        >
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </motion.article>
  )
}
