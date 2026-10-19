import React from "react"
import { SectionHeading } from "@/components/common/section-heading"
import { EventCard } from "@/components/events/EventCard"
import type { EventItem } from "@/data/events"

interface RelatedEventsProps {
  events: EventItem[]
}

export function RelatedEvents({ events }: RelatedEventsProps) {
  // Gracefully hide component if no related events exist
  if (!events || events.length === 0) {
    return null
  }

  return (
    <section className="py-20 md:py-28 bg-[#F8F6F1] border-t border-[#E8E5DD]">
      <div className="container-custom">
        <SectionHeading
          eyebrow="More Gatherings"
          title="Upcoming & Related Events"
          subtitle="Explore additional seminars, college tours, and mastermind workshops organized by JUBOH Foundation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}
