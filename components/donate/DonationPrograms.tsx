import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/common/section-heading"
import { IMAGES } from "@/lib/images"

const PROGRAMS_LIST = [
  {
    title: "JUBOH Business Academy",
    category: "Entrepreneurship",
    description:
      "Culturally relevant education across 20+ courses, executive masterminds, peer networking, and the Business Funding Network for small business owners.",
    image: IMAGES.programs.businessAcademy.src,
    imageAlt: IMAGES.programs.businessAcademy.alt,
    href: "/programs/business-academy",
  },
  {
    title: "Youth Development",
    category: "Education & Leadership",
    description:
      "Empowering high school scholars through the Youth Leadership Council, SAT/ACT preparation, civic engagement, and transformative HBCU college tours.",
    image: IMAGES.programs.youthDevelopment.src,
    imageAlt: IMAGES.programs.youthDevelopment.alt,
    href: "/programs/youth-development",
  },
  {
    title: "Global Missions",
    category: "Sustainable Infrastructure",
    description:
      "Developing sustainable clean drinking water systems, community solar micro-grids, and global youth leadership ambassadorships worldwide.",
    image: IMAGES.programs.globalMissions.src,
    imageAlt: IMAGES.programs.globalMissions.alt,
    href: "/programs/global-missions",
  },
  {
    title: "Affordable Housing (CHDO)",
    category: "Community Development",
    description:
      "Building high-quality single-family homes and providing individualized counseling for homeownership, foreclosure prevention, and disaster relief.",
    image: IMAGES.programs.housingInitiative.src,
    imageAlt: IMAGES.programs.housingInitiative.alt,
    href: "/programs/housing",
  },
]

export function DonationPrograms() {
  return (
    <section className="py-20 md:py-28 bg-[#F8F6F1]/50 border-t border-[#E8E5DD]">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Where We Focus"
          title="Support a Mission That Matters"
          subtitle="Explore the core programmatic pillars of the JUBOH Foundation, where every initiative is grounded in community empowerment and Ubuntu collective progress."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12">
          {PROGRAMS_LIST.map((program) => (
            <article
              key={program.title}
              className="bg-white rounded-xl border border-[#E8E5DD] overflow-hidden shadow-xs hover:shadow-lg hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Cover */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <Image
                    src={program.image}
                    alt={program.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#111827]/90 backdrop-blur-xs text-[#C5A059] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs">
                    {program.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-2.5">
                  <h3 className="font-serif text-lg font-bold text-[#111827] group-hover:text-[#C5A059] transition-colors leading-snug">
                    <Link href={program.href}>{program.title}</Link>
                  </h3>
                  <p className="text-xs text-[#555D68] leading-relaxed line-clamp-3">
                    {program.description}
                  </p>
                </div>
              </div>

              {/* Footer Link */}
              <div className="px-6 pb-6 pt-2 border-t border-[#F8F6F1]">
                <Link
                  href={program.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111827] group-hover:text-[#C5A059] transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
