"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { SectionHeading } from "@/components/common/section-heading"
import { PrimaryButton } from "@/components/common/primary-button"
import { ScrollReveal, ScrollStagger, ScrollItem } from "@/components/common/scroll-reveal"
import { IMAGES } from "@/lib/images"

interface ProgramCardItem {
  id: string
  title: string
  category: string
  description: string
  imageSrc: string
  imageAlt: string
  href: string
}

const HOMEPAGE_PROGRAMS: ProgramCardItem[] = [
  {
    id: "business-academy",
    title: "JUBOH Business Academy",
    category: "Education & Entrepreneurship",
    description:
      "A multi-course digital and in-person curriculum featuring 20+ award-winning courses, mastermind networking events, and small business funding connections.",
    imageSrc: IMAGES.programs.businessAcademy.src,
    imageAlt: IMAGES.programs.businessAcademy.alt,
    href: "/programs/business-academy",
  },
  {
    id: "youth-development",
    title: "Youth Development",
    category: "Leadership & College Access",
    description:
      "Comprehensive programming including the Youth Leadership Council, personalized SAT/ACT coaching, HBCU College Tours, and civic engagement.",
    imageSrc: IMAGES.programs.youthDevelopment.src,
    imageAlt: IMAGES.programs.youthDevelopment.alt,
    href: "/programs/youth-development",
  },
  {
    id: "global-missions",
    title: "Global Missions",
    category: "Sustainable Infrastructure",
    description:
      "Deploying JUBOH Global Ambassadors and Global Impact Centers to implement solar energy grids, clean water access, and entrepreneurship worldwide.",
    imageSrc: IMAGES.programs.globalMissions.src,
    imageAlt: IMAGES.programs.globalMissions.alt,
    href: "/programs/global-missions",
  },
  {
    id: "housing-initiative",
    title: "Housing Initiative",
    category: "Affordable CHDO Housing",
    description:
      "Community Housing Development Organization (CHDO) dedicated to low-to-moderate income families, first-time homebuyer counseling, and foreclosure assistance.",
    imageSrc: IMAGES.programs.housingInitiative.src,
    imageAlt: IMAGES.programs.housingInitiative.alt,
    href: "/programs/housing",
  },
  {
    id: "founders-initiatives",
    title: "Founder's Initiatives",
    category: "Strategic Partnerships",
    description:
      "Executive outreach programs, corporate and civic partnerships, and high-impact collaborative initiatives championed by founder Jalen 'JUBOH' Uboh.",
    imageSrc: IMAGES.programs.foundersInitiatives.src,
    imageAlt: IMAGES.programs.foundersInitiatives.alt,
    href: "/programs/founders-initiatives",
  },
]

export function ProgramsSection() {
  return (
    <section id="programs" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container-custom">
        <ScrollReveal direction="up" distance={30}>
          <SectionHeading
            eyebrow="Our Core Programs"
            title="Empowering Communities Across Key Sectors"
            subtitle="Explore the authentic pillars anchored by the JUBOH Foundation's culturally relevant curriculum, community housing advocacy, and global mission centers."
          />
        </ScrollReveal>

        {/* 5-Card Grid with Staggered Scroll Reveal and Interactive Lift */}
        <ScrollStagger staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOMEPAGE_PROGRAMS.map((program) => (
            <ScrollItem key={program.id} direction="up" distance={36} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full bg-white rounded-lg border border-[#E8E5DD] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#F6B83E]/50 transition-shadow duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photographic Header Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                    <Image
                      src={program.imageSrc}
                      alt={program.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute top-3 left-3 bg-[#222222]/90 backdrop-blur-xs text-[#F6B83E] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs">
                      {program.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-[#222222] mb-3 group-hover:text-[#F6B83E] transition-colors leading-snug">
                      {program.title}
                    </h3>
                    <p className="text-xs text-[#777777] leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>

                {/* Action Link Footer */}
                <div className="px-6 pb-6 pt-2 border-t border-neutral-100">
                  <Link
                    href={program.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#222222] group-hover:text-[#F6B83E] transition-colors"
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </ScrollItem>
          ))}
        </ScrollStagger>

        {/* Bottom CTA to Programs Hub */}
        <ScrollReveal direction="up" distance={20} delay={0.2} className="text-center mt-12">
          <PrimaryButton href="/programs" variant="charcoal" size="default" withArrow>
            View All Programs & Initiatives
          </PrimaryButton>
        </ScrollReveal>
      </div>
    </section>
  )
}
