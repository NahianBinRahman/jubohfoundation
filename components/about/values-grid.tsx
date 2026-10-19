import React from "react"
import {
  Users,
  GraduationCap,
  Sparkles,
  HeartHandshake,
  Globe2,
} from "lucide-react"
import { SectionHeading } from "@/components/common/section-heading"

const FOUNDATION_VALUES = [
  {
    icon: Users,
    title: "Ubuntu & Community",
    description:
      "Believing that our humanity is intertwined, collective progress guides all our collaborative partnerships.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Culturally relevant curriculum, academic coaching, and college access opening doors for the next generation.",
  },
  {
    icon: Sparkles,
    title: "Empowerment",
    description:
      "Providing tangible resources, business funding networks, and workforce housing for true self-reliance.",
  },
  {
    icon: HeartHandshake,
    title: "Compassion",
    description:
      "Serving the marginalized, the left behind, and the most vulnerable in our society with dignity and care.",
  },
  {
    icon: Globe2,
    title: "Sustainable Impact",
    description:
      "Building lasting infrastructure, renewable solar energy, clean water, and long-term community resilience.",
  },
]

export function ValuesGrid() {
  return (
    <section className="py-24 md:py-32 bg-[#F8F6F1]">
      <div className="container-custom">
        <SectionHeading
          eyebrow="What Drives Us"
          title="Our Guiding Values"
          subtitle="Every initiative of the JUBOH Foundation is anchored in core principles that honor human dignity and collective progress."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {FOUNDATION_VALUES.map((val) => {
            const Icon = val.icon
            return (
              <div
                key={val.title}
                className="bg-white p-7 rounded-lg border border-[#E8E5DD] hover:border-[#F6B83E] shadow-2xs hover:shadow-md transition-all duration-300 text-center flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-full bg-[#F8F6F1] border border-[#E8E5DD] flex items-center justify-center text-[#F6B83E] mx-auto mb-5 group-hover:bg-[#F6B83E] group-hover:text-[#222222] transition-colors duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#222222] mb-2.5">
                    {val.title}
                  </h3>
                  <p className="text-xs text-[#777777] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
