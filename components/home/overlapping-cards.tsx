"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { ScrollStagger, ScrollItem } from "@/components/common/scroll-reveal"

export function OverlappingCards() {
  return (
    <section className="relative z-20 -mt-16 sm:-mt-20 md:-mt-28 container-custom">
      <ScrollStagger
        staggerDelay={0.15}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
      >
        {/* ============================================================== */}
        {/* CARD 1: Become a Volunteer */}
        {/* ============================================================== */}
        <ScrollItem direction="up" distance={40} className="h-full">
          <motion.div
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="h-full bg-white p-8 sm:p-9 rounded-sm shadow-xl border border-neutral-100 flex flex-col items-center text-center justify-between transition-shadow duration-300 hover:shadow-2xl group cursor-pointer"
          >
            <div className="flex flex-col items-center">
              {/* Outline Volunteer Group Icon with gentle hover scale */}
              <div className="w-16 h-16 mb-5 flex items-center justify-center text-[#C5A059] transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="w-14 h-14"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="32" cy="20" r="7" />
                  <path d="M20 40c0-6.627 5.373-12 12-12s12 5.373 12 12" />
                  <circle cx="16" cy="26" r="5" />
                  <path d="M7 43c0-4.97 4.03-9 9-9 2.1 0 4.02.72 5.54 1.93" />
                  <circle cx="48" cy="26" r="5" />
                  <path d="M42.46 35.93C43.98 34.72 45.9 34 48 34c4.97 0 9 4.03 9 9" />
                </svg>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#111827] mb-3 group-hover:text-[#C5A059] transition-colors">
                Become a Volunteer
              </h3>

              <p className="text-xs text-[#555D68] leading-relaxed mb-6">
                Join our global team of dedicated mentors, teachers, and community
                advocates making a tangible generational impact.
              </p>
            </div>

            <Link
              href="/contact?topic=volunteer"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#C5A059] hover:bg-[#B38E46] text-[#111827] font-bold text-xs uppercase tracking-widest py-3 px-8 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              JOIN NOW
            </Link>
          </motion.div>
        </ScrollItem>

        {/* ============================================================== */}
        {/* CARD 2: Quick Fundraising */}
        {/* ============================================================== */}
        <ScrollItem direction="up" distance={40} className="h-full">
          <motion.div
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="h-full bg-white p-8 sm:p-9 rounded-sm shadow-xl border border-neutral-100 flex flex-col items-center text-center justify-between transition-shadow duration-300 hover:shadow-2xl group cursor-pointer"
          >
            <div className="flex flex-col items-center">
              {/* Outline Handshake & Coin Icon with gentle hover scale */}
              <div className="w-16 h-16 mb-5 flex items-center justify-center text-[#C5A059] transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="w-14 h-14"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="32" cy="14" r="6" />
                  <path d="M32 11v6M29.5 13h5" strokeWidth="1.5" />
                  <path d="M11 31l11-8 8 6-5 6-6-2-8 7-4-4 4-5z" />
                  <path d="M53 31l-11-8-8 6 5 6 6-2 8 7 4-4-4-5z" />
                  <path d="M25 35l7 7 7-7" />
                  <path d="M32 42l5 5-3 3-5-5" />
                </svg>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#111827] mb-3 group-hover:text-[#C5A059] transition-colors">
                Quick Fundraising
              </h3>

              <p className="text-xs text-[#555D68] leading-relaxed mb-6">
                Support transparent, community-led campaigns supporting student
                scholarships, workforce housing, and critical relief.
              </p>
            </div>

            <Link
              href="/programs"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#C5A059] hover:bg-[#B38E46] text-[#111827] font-bold text-xs uppercase tracking-widest py-3 px-8 transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
            >
              CHECK NOW
            </Link>
          </motion.div>
        </ScrollItem>

        {/* ============================================================== */}
        {/* CARD 3: Make Donation (Split Gold + Children Photo) */}
        {/* ============================================================== */}
        <ScrollItem direction="up" distance={40} className="md:col-span-2 h-full">
          <motion.div
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="h-full grid grid-cols-1 sm:grid-cols-2 rounded-sm shadow-xl overflow-hidden transition-shadow duration-300 hover:shadow-2xl group cursor-pointer"
          >
            {/* Left 50%: Solid Gold Panel */}
            <div className="bg-[#C5A059] p-8 sm:p-9 flex flex-col items-center text-center justify-between text-[#111827]">
              <div className="flex flex-col items-center">
                {/* Hand Holding Coin Icon */}
                <div className="w-16 h-16 mb-5 flex items-center justify-center text-[#111827] transition-transform duration-300 group-hover:scale-110">
                  <svg
                    className="w-14 h-14"
                    viewBox="0 0 64 64"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="32" cy="16" r="7" />
                    <path d="M32 12v8M30 14h4" strokeWidth="1.5" />
                    <path d="M32 6v3" />
                    <path d="M12 44h14l8-6h14a6 6 0 0 1 6 6v2a6 6 0 0 1-6 6H28l-8-4-8 1v-5z" />
                  </svg>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#111827] mb-3">
                  Make Donation
                </h3>

                <p className="text-xs text-[#111827]/85 leading-relaxed mb-6 font-medium">
                  Your charitable gift is 100% tax-deductible and directly funds
                  education, housing initiatives, and sustainable outreach.
                </p>
              </div>

              <Link
                href="/donate"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#111827] hover:bg-black text-white font-bold text-xs uppercase tracking-widest py-3 px-8 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                JOIN NOW
              </Link>
            </div>

            {/* Right 50%: Authentic Children Photo with subtle hover zoom */}
            <div className="relative min-h-[260px] sm:min-h-full w-full bg-neutral-900 overflow-hidden">
              <Image
                src="/images/generated/card-children.jpg"
                alt="Children smiling together - JUBOH Foundation"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </ScrollItem>
      </ScrollStagger>
    </section>
  )
}
