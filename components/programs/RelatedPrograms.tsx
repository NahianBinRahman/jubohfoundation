import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/common/section-heading"
import { ALL_PROGRAMS, type ProgramItem } from "@/data/programs"

interface RelatedProgramsProps {
  currentProgramId: string
}

export function RelatedPrograms({ currentProgramId }: RelatedProgramsProps) {
  const otherPrograms = ALL_PROGRAMS.filter((p) => p.id !== currentProgramId)

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Explore More"
          title="Other Foundation Programs"
          subtitle="Discover how the JUBOH Foundation models community transformation across education, housing, leadership, and global missions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherPrograms.slice(0, 4).map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-lg border border-[#E8E5DD] overflow-hidden shadow-2xs hover:shadow-md hover:border-[#C5A059]/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <Image
                    src={program.heroImage}
                    alt={program.heroImageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#111827]/90 text-[#C5A059] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs">
                    {program.category}
                  </div>
                </div>

                <div className="p-5">
                  <h4 className="font-serif text-base font-bold text-[#111827] mb-2 group-hover:text-[#C5A059] transition-colors leading-snug">
                    {program.title}
                  </h4>
                  <p className="text-xs text-[#555D68] line-clamp-2 leading-relaxed">
                    {program.overview}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-neutral-100">
                <Link
                  href={`/programs/${program.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#111827] group-hover:text-[#C5A059] transition-colors"
                >
                  <span>VIEW DETAILS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
