"use client"

import React from "react"
import {
  GraduationCap,
  Briefcase,
  Users,
  Home,
  Globe2,
} from "lucide-react"
import { motion } from "motion/react"
import { SectionHeading } from "@/components/common/section-heading"
import { ScrollReveal, ScrollStagger, ScrollItem } from "@/components/common/scroll-reveal"

const MISSION_PILLARS = [
  {
    icon: GraduationCap,
    title: "Education",
    subtitle: "Culturally Relevant Learning",
    description:
      "20+ award-winning courses, academic tutoring, and personalized SAT/ACT prep opening college pathways.",
  },
  {
    icon: Briefcase,
    title: "Entrepreneurship",
    subtitle: "Capital & Support",
    description:
      "Connecting underrepresented business owners to essential funding networks, masterminds, and capital access.",
  },
  {
    icon: Users,
    title: "Youth Development",
    subtitle: "Future Global Leaders",
    description:
      "Empowering youth through the Leadership Council, HBCU tours, and hands-on civic responsibility.",
  },
  {
    icon: Home,
    title: "Housing Support",
    subtitle: "CHDO Community Housing",
    description:
      "Affordable housing development, first-time homebuyer assistance, and compassionate foreclosure prevention.",
  },
  {
    icon: Globe2,
    title: "Global Engagement",
    subtitle: "Sustainable Infrastructure",
    description:
      "Deploying solar micro-grids and clean water solutions to international villages through Global Ambassadors.",
  },
]

export function MissionPreview() {
  return (
    <section className="py-24 md:py-32 bg-[#F8F6F1] overflow-hidden">
      <div className="container-custom">
        <ScrollReveal direction="up" distance={30}>
          <SectionHeading
            eyebrow="Our Foundational Purpose"
            title="Empowering Every Facet of Community Life"
            subtitle="Anchored in the spirit of Ubuntu, the JUBOH Foundation models its initiatives across five vital community pillars."
          />
        </ScrollReveal>

        <ScrollStagger staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {MISSION_PILLARS.map((pillar) => {
            const Icon = pillar.icon
            return (
              <ScrollItem key={pillar.title} direction="up" distance={32} className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="h-full bg-white p-7 rounded-lg border border-[#E8E5DD] hover:border-[#C5A059] shadow-2xs hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between text-center group"
                >
                  <div>
                    {/* Gold-Accented Icon Container */}
                    <div className="w-14 h-14 rounded-full bg-[#F8F6F1] border border-[#E8E5DD] flex items-center justify-center text-[#C5A059] mx-auto mb-5 group-hover:bg-[#C5A059] group-hover:text-[#111827] transition-colors duration-200">
                      <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block mb-1">
                      {pillar.subtitle}
                    </span>

                    <h3 className="font-serif text-lg font-bold text-[#111827] mb-3 group-hover:text-[#C5A059] transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs text-[#555D68] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollItem>
            )
          })}
        </ScrollStagger>
      </div>
    </section>
  )
}
