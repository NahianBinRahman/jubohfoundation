"use client"

import React from "react"
import { Calendar } from "lucide-react"
import { HorizontalEventCard } from "@/components/events/HorizontalEventCard"
import { PrimaryButton } from "@/components/common/primary-button"
import { ScrollStagger, ScrollItem } from "@/components/common/scroll-reveal"
import type { EventItem } from "@/data/events"

interface EventsListProps {
  events: EventItem[]
}

export function EventsList({ events }: EventsListProps) {
  if (events.length > 0) {
    return (
      <ScrollStagger staggerDelay={0.12} className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">
        {events.map((event, index) => (
          <ScrollItem key={event.id} direction="up" distance={25}>
            <HorizontalEventCard event={event} index={index} />
          </ScrollItem>
        ))}
      </ScrollStagger>
    )
  }

  // Polished Empty State
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl border border-[#E8E5DD] shadow-xs p-10 sm:p-14 text-center space-y-6">
      <div className="w-16 h-16 rounded-full bg-[#F8F6F1] border border-[#E8E5DD] flex items-center justify-center text-[#C5A059] mx-auto shadow-2xs">
        <Calendar className="w-7 h-7" />
      </div>

      <div className="space-y-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] block">
          Schedule Coordination
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111827]">
          New Events Coming Soon
        </h3>
        <p className="text-xs sm:text-sm text-[#555D68] max-w-lg mx-auto leading-relaxed">
          Stay connected with Juboh Foundation for upcoming events, workshops,
          college tours, and community opportunities. Our team is finalizing our
          upcoming schedule.
        </p>
      </div>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
        <PrimaryButton href="/programs" variant="gold" size="default" withArrow>
          Explore Our Programs
        </PrimaryButton>
        <PrimaryButton href="/contact" variant="charcoal" size="default">
          Contact Us
        </PrimaryButton>
      </div>
    </div>
  )
}
