import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, ArrowRight } from "lucide-react"
import type { EventItem } from "@/data/events"

interface EventCardProps {
  event: EventItem
  featured?: boolean
}

export function EventCard({ event, featured = false }: EventCardProps) {
  return (
    <article className="bg-white rounded-lg border border-[#E8E5DD] overflow-hidden shadow-xs hover:shadow-lg hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Event Header Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
          <Image
            src={event.image}
            alt={event.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Gold Date Block (Humanite Events Style) */}
          <div className="absolute top-3.5 left-3.5 bg-[#C5A059] text-[#111827] rounded-xs shadow-md p-2 flex flex-col items-center justify-center min-w-[54px] text-center">
            <span className="font-serif text-lg font-bold leading-none">
              {event.displayDay}
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider mt-0.5">
              {event.displayMonth}
            </span>
          </div>

          {/* Category Tag */}
          <div className="absolute top-3.5 right-3.5 bg-[#111827]/85 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs">
            {event.category}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {/* Metadata Chips: Time and Location */}
          <div className="flex flex-wrap items-center gap-4 text-[11px] text-[#555D68] mb-3">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>
                {event.startTime} - {event.endTime}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="truncate max-w-[160px]">{event.location}</span>
            </div>
          </div>

          <h3 className="font-serif text-xl font-bold text-[#111827] mb-2.5 group-hover:text-[#C5A059] transition-colors leading-snug">
            {event.title}
          </h3>

          <p className="text-xs text-[#555D68] leading-relaxed line-clamp-3">
            {event.description}
          </p>
        </div>
      </div>

      {/* Action Link Footer */}
      <div className="px-6 pb-6 pt-2 border-t border-neutral-100 flex items-center justify-between">
        <Link
          href={`/events/${event.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111827] group-hover:text-[#C5A059] transition-colors"
        >
          <span>VIEW DETAILS</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
        <span className="text-[11px] text-[#999999] font-medium">
          {event.registrationEnabled ? "Registration Open" : "Info Only"}
        </span>
      </div>
    </article>
  )
}
