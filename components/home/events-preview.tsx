"use client"

import React from "react"
import Link from "next/link"
import { Calendar, Bell, ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { SectionHeading } from "@/components/common/section-heading"
import { PrimaryButton } from "@/components/common/primary-button"
import { ScrollReveal, ScrollStagger, ScrollItem } from "@/components/common/scroll-reveal"
import { getAllEvents, type EventItem } from "@/data/events"

interface EventsPreviewProps {
  events?: EventItem[]
}

export function EventsPreview({ events }: EventsPreviewProps) {
  const eventList = events ?? getAllEvents()
  const hasEvents = eventList.length > 0

  return (
    <section className="py-24 md:py-32 bg-[#F8F6F1] overflow-hidden">
      <div className="container-custom">
        <ScrollReveal direction="up" distance={30}>
          <SectionHeading
            eyebrow="Gatherings & Masterminds"
            title="Upcoming Events & Seminars"
            subtitle="Connecting our members and communities through collaborative masterminds, college tours, and empowering educational seminars."
          />
        </ScrollReveal>

        {hasEvents ? (
          <ScrollStagger staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventList.map((evt) => (
              <ScrollItem key={evt.id} direction="up" distance={30} className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="h-full bg-white p-7 rounded-lg border border-[#E8E5DD] shadow-xs hover:shadow-xl hover:border-[#F6B83E] transition-shadow duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F8F6F1] text-[#F6B83E] text-xs font-bold rounded-xs mb-4">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{evt.date}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#222222] mb-2">
                      {evt.title}
                    </h3>
                    <p className="text-xs text-[#777777] leading-relaxed mb-4">
                      {evt.description}
                    </p>
                  </div>
                  <Link
                    href={`/events/${evt.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#222222] hover:text-[#F6B83E]"
                  >
                    <span>VIEW DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              </ScrollItem>
            ))}
          </ScrollStagger>
        ) : (
          /* Tasteful Empty State with Smooth Reveal */
          <ScrollReveal direction="up" distance={30} duration={0.7}>
            <div className="max-w-2xl mx-auto bg-white p-10 md:p-12 rounded-xl border border-[#E8E5DD] shadow-xs text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#F8F6F1] border border-[#E8E5DD] text-[#F6B83E] flex items-center justify-center mx-auto">
                <Calendar className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-[#222222]">
                  New Events & Seminars Coming Soon
                </h3>
                <p className="text-xs md:text-sm text-[#777777] leading-relaxed max-w-md mx-auto">
                  Our foundation team is finalizing dates for upcoming JUBOH
                  Business Academy masterminds, HBCU College Tours, and community
                  workshops.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <PrimaryButton href="/events" variant="gold" size="sm" withArrow>
                  Visit Events Hub
                </PrimaryButton>
                <PrimaryButton href="/contact" variant="charcoal" size="sm">
                  Inquire About Hosting
                </PrimaryButton>
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
