import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import type { Story } from "@/data/stories"

interface StoryCardProps {
  story: Story
  featured?: boolean
}

export function StoryCard({ story, featured = false }: StoryCardProps) {
  return (
    <article className="bg-white rounded-xl border border-[#E8E5DD] overflow-hidden shadow-xs hover:shadow-lg hover:border-[#F6B83E]/50 transition-all duration-300 flex flex-col group">
      {/* Featured Cover Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
        <Image
          src={story.image}
          alt={story.imageAlt || story.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-[#222222]/90 backdrop-blur-xs text-[#F6B83E] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm shadow-xs">
          {story.category}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Metadata */}
          <div className="flex items-center gap-4 text-xs text-[#777777]">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#F6B83E]" />
              <span>{story.formattedDate}</span>
            </div>
            {story.readingTime && (
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#F6B83E]" />
                <span>{story.readingTime}</span>
              </div>
            )}
          </div>

          {/* Heading */}
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#222222] group-hover:text-[#F6B83E] transition-colors leading-snug">
            <Link href={`/stories/${story.slug}`}>{story.title}</Link>
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-[#777777] line-clamp-3 leading-relaxed">
            {story.excerpt}
          </p>
        </div>

        {/* Read More Link */}
        <div className="pt-2 border-t border-[#F8F6F1]">
          <Link
            href={`/stories/${story.slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#222222] group-hover:text-[#F6B83E] transition-colors"
          >
            <span>Read More</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  )
}
