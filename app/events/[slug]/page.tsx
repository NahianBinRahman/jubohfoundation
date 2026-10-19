import React from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import {
  Calendar,
  Clock,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  ChevronRight,
  Share2,
} from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { EventRegistrationForm } from "@/components/events/EventRegistrationForm"
import { RelatedEvents } from "@/components/events/RelatedEvents"
import { getAllEvents, getEventBySlug, getRelatedEvents } from "@/data/events"

interface EventDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({
  params,
}: EventDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const event = getEventBySlug(slug)

  if (!event) {
    return {
      title: "Event Not Found | JUBOH Foundation",
    }
  }

  return {
    title: `${event.title} | JUBOH Foundation Events`,
    description: event.description,
  }
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params
  const event = getEventBySlug(slug)

  // Proper 404 handling if event doesn't exist
  if (!event) {
    notFound()
  }

  const relatedEvents = getRelatedEvents(event.id)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Shared Global Header */}
      <Header />

      <main className="flex-1">
        {/* Inner-Page Hero */}
        <section className="relative w-full bg-[#222222] text-white py-24 md:py-32 overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src={event.image}
              alt={event.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center brightness-[0.32] contrast-[1.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#222222] via-[#222222]/70 to-[#222222]/85" />
          </div>

          <div className="container-custom relative z-10 w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F6B83E] block">
                {event.category}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                {event.title}
              </h1>
            </div>

            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-xs font-medium text-neutral-300 bg-black/40 backdrop-blur-xs px-4 py-2 rounded-full border border-white/10 self-start md:self-auto shrink-0"
            >
              <Link href="/" className="hover:text-[#F6B83E] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#F6B83E]" />
              <Link href="/events" className="hover:text-[#F6B83E] transition-colors">
                Events
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#F6B83E]" />
              <span className="text-[#F6B83E] font-semibold truncate max-w-[140px]">
                {event.title}
              </span>
            </nav>
          </div>
        </section>

        {/* Main Details Body */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Event Media, Story & Registration Form (8 cols) */}
              <div className="lg:col-span-8 space-y-10">
                {/* Event Photo Container */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg border border-[#E8E5DD] bg-neutral-100">
                  <Image
                    src={event.image}
                    alt={event.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute top-4 left-4 bg-[#F6B83E] text-[#222222] rounded-xs shadow-md p-2 flex flex-col items-center justify-center min-w-[54px] text-center">
                    <span className="font-serif text-xl font-bold leading-none">
                      {event.displayDay}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider mt-0.5">
                      {event.displayMonth}
                    </span>
                  </div>
                </div>

                {/* Event Overview & Content */}
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#222222]">
                    About This Event
                  </h2>
                  <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                    {event.description}
                  </p>
                  {event.content &&
                    event.content.map((para, idx) => (
                      <p key={idx} className="text-sm sm:text-base text-[#555555] leading-relaxed">
                        {para}
                      </p>
                    ))}
                </div>

                {/* Objectives if present */}
                {event.objectives && event.objectives.length > 0 && (
                  <div className="bg-[#F8F6F1] p-7 rounded-xl border border-[#E8E5DD] space-y-3">
                    <h3 className="font-serif text-xl font-bold text-[#222222]">
                      Event Objectives & Highlights
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#444444]">
                      {event.objectives.map((obj, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#F6B83E] font-bold">•</span>
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Reusable Event Registration Form */}
                <EventRegistrationForm
                  eventTitle={event.title}
                  eventSlug={event.slug}
                  registrationEnabled={event.registrationEnabled}
                />
              </div>

              {/* Right Sidebar: Details Card & Metadata (4 cols) */}
              <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
                <div className="bg-[#F8F6F1] p-7 rounded-xl border border-[#E8E5DD] shadow-2xs space-y-5">
                  <h3 className="font-serif text-xl font-bold text-[#222222] border-b border-[#E8E5DD] pb-3">
                    Event Details
                  </h3>

                  <div className="space-y-4 text-xs sm:text-sm text-[#555555]">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-4 h-4 text-[#F6B83E] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[#222222] block">Date</span>
                        <span>{event.date}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-[#F6B83E] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[#222222] block">Time</span>
                        <span>
                          {event.startTime} - {event.endTime}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#F6B83E] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[#222222] block">Location</span>
                        <span>{event.location}</span>
                        {event.venueAddress && (
                          <span className="text-neutral-400 block text-xs">
                            {event.venueAddress}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-[#F6B83E] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[#222222] block">Organizer</span>
                        <a
                          href="mailto:info@jubohfoundation.org"
                          className="hover:text-[#F6B83E] transition-colors"
                        >
                          info@jubohfoundation.org
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E8E5DD]">
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#777777]">
                      <ShieldCheck className="w-4 h-4 text-[#F6B83E]" />
                      Official JUBOH Foundation Event
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Events Section (Cleanly hides itself when empty) */}
        <RelatedEvents events={relatedEvents} />
      </main>

      {/* Shared Global Footer */}
      <Footer />
    </div>
  )
}
