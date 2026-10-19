import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/common/section-heading"
import { IMAGES } from "@/lib/images"

const ABOUT_IMPACT_AREAS = [
  {
    id: "business-academy",
    title: "JUBOH Business Academy",
    subtitle: "Entrepreneurship & Capital",
    description:
      "Culturally relevant business education with 20+ courses, networking masterminds, and connections to critical funding resources.",
    imageSrc: IMAGES.programs.businessAcademy.src,
    imageAlt: IMAGES.programs.businessAcademy.alt,
    href: "/programs/business-academy",
  },
  {
    id: "youth-development",
    title: "Youth Development",
    subtitle: "Academic Coaching & Civic Leadership",
    description:
      "Empowering students through the Youth Leadership Council, personalized SAT/ACT prep, HBCU tours, and community civic engagement.",
    imageSrc: IMAGES.programs.youthDevelopment.src,
    imageAlt: IMAGES.programs.youthDevelopment.alt,
    href: "/programs/youth-development",
  },
  {
    id: "global-missions",
    title: "Global Missions",
    subtitle: "Clean Water & Solar Infrastructure",
    description:
      "Deploying international Global Impact Centers to build sustainable solar power grids, clean drinking water wells, and grassroots self-reliance.",
    imageSrc: IMAGES.programs.globalMissions.src,
    imageAlt: IMAGES.programs.globalMissions.alt,
    href: "/programs/global-missions",
  },
  {
    id: "housing-initiative",
    title: "Housing Initiative",
    subtitle: "Workforce & Affordable Housing (CHDO)",
    description:
      "Certified Community Housing Development Organization providing affordable single-family housing, homebuyer education, and foreclosure advocacy.",
    imageSrc: IMAGES.programs.housingInitiative.src,
    imageAlt: IMAGES.programs.housingInitiative.alt,
    href: "/programs/housing",
  },
]

export function ImpactAreas() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Our Active Pillars"
          title="Where We Model Our Impact"
          subtitle="Explore the four primary operational divisions driving sustainable transformation across communities in the United States and abroad."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ABOUT_IMPACT_AREAS.map((area) => (
            <div
              key={area.id}
              className="bg-white rounded-lg border border-[#E8E5DD] overflow-hidden shadow-xs hover:shadow-lg hover:border-[#F6B83E]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <Image
                    src={area.imageSrc}
                    alt={area.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#222222]/90 backdrop-blur-xs text-[#F6B83E] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs">
                    {area.subtitle}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-lg font-bold text-[#222222] mb-2.5 group-hover:text-[#F6B83E] transition-colors leading-snug">
                    {area.title}
                  </h3>
                  <p className="text-xs text-[#777777] leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-neutral-100">
                <Link
                  href={area.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#222222] group-hover:text-[#F6B83E] transition-colors"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
