"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Newspaper, ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { SectionHeading } from "@/components/common/section-heading"
import { PrimaryButton } from "@/components/common/primary-button"
import { NewsletterForm } from "@/components/common/newsletter-form"
import { ScrollReveal, ScrollStagger, ScrollItem } from "@/components/common/scroll-reveal"
import { getAllStories, type Story } from "@/data/stories"

interface StoriesPreviewProps {
  stories?: Story[]
}

export function StoriesPreview({ stories }: StoriesPreviewProps) {
  const allStories = stories !== undefined ? stories : getAllStories()
  const hasStories = allStories.length > 0

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container-custom">
        <ScrollReveal direction="up" distance={30}>
          <SectionHeading
            eyebrow="Community Insights & News"
            title="Stories of Impact & Progress"
            subtitle="Follow our educational initiatives, community housing milestones, and global partnership dispatches."
          />
        </ScrollReveal>

        {hasStories ? (
          <ScrollStagger staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allStories.map((story) => (
              <ScrollItem key={story.id} direction="up" distance={32} className="h-full">
                <motion.article
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="h-full bg-white rounded-lg border border-[#E8E5DD] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#C5A059]/50 transition-shadow duration-300 group flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#111827]/90 text-[#C5A059] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs">
                        {story.category}
                      </div>
                    </div>

                    <div className="p-6">
                      <span className="text-[11px] text-[#555D68] block mb-2 font-medium">
                        {story.formattedDate}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-[#111827] mb-3 group-hover:text-[#C5A059] transition-colors leading-snug">
                        {story.title}
                      </h3>
                      <p className="text-xs text-[#555D68] leading-relaxed line-clamp-3">
                        {story.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-neutral-100">
                    <Link
                      href={`/stories/${story.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111827] group-hover:text-[#C5A059] transition-colors"
                    >
                      <span>READ STORY</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.article>
              </ScrollItem>
            ))}
          </ScrollStagger>
        ) : (
          /* Editorial Teaser with Smooth Scroll Reveal */
          <ScrollReveal direction="up" distance={30} duration={0.7}>
            <div className="max-w-3xl mx-auto bg-[#F8F6F1] p-8 md:p-12 rounded-xl border border-[#E8E5DD] text-center space-y-6 shadow-xs">
              <div className="w-14 h-14 rounded-full bg-white border border-[#E8E5DD] text-[#C5A059] flex items-center justify-center mx-auto shadow-2xs">
                <Newspaper className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-[#111827]">
                  Stay Informed With Official Foundation Publications
                </h3>
                <p className="text-xs md:text-sm text-[#555D68] leading-relaxed max-w-lg mx-auto">
                  Official editorial dispatches, student stories, and CHDO housing
                  developments are published through the JUBOH Foundation Newsletter.
                  Subscribe to receive verified updates directly in your inbox.
                </p>
              </div>

              <div className="max-w-md mx-auto pt-2">
                <NewsletterForm variant="light" />
              </div>

              <div className="pt-2">
                <PrimaryButton href="/stories" variant="outlineGold" size="sm" withArrow>
                  Visit Stories & Insights Hub
                </PrimaryButton>
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
