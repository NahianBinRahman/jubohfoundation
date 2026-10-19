import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Sparkles, ChevronRight } from "lucide-react"
import { PrimaryButton } from "@/components/common/primary-button"
import type { Story } from "@/data/stories"

interface StorySidebarProps {
  recentStories?: Story[]
}

const PROGRAM_LINKS = [
  { name: "JUBOH Business Academy", href: "/programs/business-academy" },
  { name: "Youth Development & HBCU Tours", href: "/programs/youth-development" },
  { name: "Global Missions & Infrastructure", href: "/programs/global-missions" },
  { name: "Affordable Housing (CHDO)", href: "/programs/housing" },
  { name: "Founder's Strategic Initiatives", href: "/programs/founders-initiatives" },
]

const CATEGORIES = [
  { name: "Community Empowerment", count: 0 },
  { name: "Business Academy", count: 0 },
  { name: "Youth Leadership", count: 0 },
  { name: "Global Missions", count: 0 },
  { name: "Housing Initiative", count: 0 },
]

export function StorySidebar({ recentStories = [] }: StorySidebarProps) {
  return (
    <aside className="space-y-8">
      {/* 1. Latest Stories */}
      <div className="bg-white rounded-xl border border-[#E8E5DD] p-6 sm:p-7 shadow-xs">
        <h4 className="font-serif text-lg font-bold text-[#222222] mb-4 pb-3 border-b border-[#F8F6F1] flex items-center justify-between">
          <span>Latest Stories</span>
          <BookOpen className="w-4 h-4 text-[#F6B83E]" />
        </h4>

        {recentStories.length > 0 ? (
          <div className="space-y-4">
            {recentStories.map((story) => (
              <Link
                key={story.id}
                href={`/stories/${story.slug}`}
                className="group flex gap-3 items-start"
              >
                <div className="relative w-16 h-16 rounded-md overflow-hidden bg-neutral-100 shrink-0 border border-[#E8E5DD]">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="64px"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="space-y-1">
                  <h5 className="font-serif text-sm font-bold text-[#222222] group-hover:text-[#F6B83E] transition-colors line-clamp-2 leading-snug">
                    {story.title}
                  </h5>
                  <span className="text-[11px] text-[#777777] block">
                    {story.formattedDate}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-xs text-[#777777] leading-relaxed">
            New community updates and articles are currently in preparation. Check back soon for inspiring stories.
          </p>
        )}
      </div>

      {/* 2. Categories */}
      <div className="bg-white rounded-xl border border-[#E8E5DD] p-6 sm:p-7 shadow-xs">
        <h4 className="font-serif text-lg font-bold text-[#222222] mb-4 pb-3 border-b border-[#F8F6F1]">
          Categories
        </h4>
        <ul className="space-y-2.5">
          {CATEGORIES.map((cat) => (
            <li key={cat.name}>
              <Link
                href="/programs"
                className="flex items-center justify-between text-xs sm:text-sm text-[#777777] hover:text-[#222222] hover:font-medium transition-colors py-1 group"
              >
                <span className="group-hover:translate-x-0.5 transition-transform">
                  {cat.name}
                </span>
                <span className="text-[10px] text-[#777777]/70 bg-[#F8F6F1] px-2 py-0.5 rounded-full border border-[#E8E5DD]">
                  Programs
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 3. Our Programs */}
      <div className="bg-white rounded-xl border border-[#E8E5DD] p-6 sm:p-7 shadow-xs">
        <h4 className="font-serif text-lg font-bold text-[#222222] mb-4 pb-3 border-b border-[#F8F6F1]">
          Our Programs
        </h4>
        <ul className="space-y-2.5">
          {PROGRAM_LINKS.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center justify-between text-xs sm:text-sm text-[#777777] hover:text-[#F6B83E] transition-colors py-1 group"
              >
                <span className="line-clamp-1">{item.name}</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#777777]/50 group-hover:text-[#F6B83E] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 4. Get Involved CTA Card (Humanite Sidebar Pattern) */}
      <div className="bg-[#222222] rounded-xl p-7 text-white shadow-md relative overflow-hidden space-y-4">
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#F6B83E]/10 rounded-full blur-2xl" />
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#F6B83E]">
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="space-y-1.5">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#F6B83E] block">
            Make An Impact
          </span>
          <h4 className="font-serif text-xl font-bold text-white leading-snug">
            Support Our Mission
          </h4>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Your support empowers vulnerable families, fosters young leaders, and provides vital business capital.
          </p>
        </div>
        <div className="pt-2">
          <PrimaryButton href="/programs" variant="gold" size="sm" className="w-full text-center justify-center">
            Explore Programs
          </PrimaryButton>
        </div>
      </div>
    </aside>
  )
}
