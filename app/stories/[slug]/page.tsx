import React from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Calendar, Clock, ChevronRight, ArrowLeft, Share2 } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { StorySidebar } from "@/components/stories/StorySidebar"
import { PrimaryButton } from "@/components/common/primary-button"
import { getStoryBySlug, getRelatedStories, getRecentStories } from "@/data/stories"

interface StoryDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({
  params,
}: StoryDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const story = getStoryBySlug(slug)

  if (!story) {
    return {
      title: "Story Not Found | JUBOH Foundation",
    }
  }

  return {
    title: `${story.title} | JUBOH Foundation Stories`,
    description: story.excerpt,
  }
}

export default async function StoryDetailPage({ params }: StoryDetailPageProps) {
  const { slug } = await params
  const story = getStoryBySlug(slug)

  // Proper 404 handling if story does not exist
  if (!story) {
    notFound()
  }

  const relatedStories = getRelatedStories(story.id, 2)
  const recentStories = getRecentStories(3)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Shared Global Header */}
      <Header />

      <main className="flex-1">
        {/* Breadcrumb Header */}
        <div className="bg-[#111827] text-white py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-4xl space-y-4">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-400">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" />
                <Link href="/stories" className="hover:text-white transition-colors">
                  Stories
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="text-neutral-300 truncate max-w-[200px] sm:max-w-none">
                  {story.title}
                </span>
              </nav>

              <div className="inline-block bg-[#C5A059] text-[#111827] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-xs">
                {story.category}
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                {story.title}
              </h1>

              <div className="flex flex-wrap items-center gap-5 text-xs text-neutral-400 pt-2 border-t border-white/10">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{story.formattedDate}</span>
                </div>
                {story.readingTime && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{story.readingTime}</span>
                  </div>
                )}
                {story.author && (
                  <span className="text-neutral-300">
                    By {story.author.name}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Article Body & Sidebar */}
        <div className="py-16 md:py-24 bg-[#F8F6F1]/40">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Main Reading Column */}
              <article className="lg:col-span-8 bg-white rounded-xl border border-[#E8E5DD] shadow-xs p-6 sm:p-10 md:p-12 space-y-8">
                {/* Featured Cover Photo */}
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-neutral-100 border border-[#E8E5DD]">
                  <Image
                    src={story.image}
                    alt={story.imageAlt || story.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-cover"
                  />
                </div>

                {/* Excerpt Lead */}
                <p className="font-serif text-lg sm:text-xl text-[#111827] font-medium leading-relaxed italic border-l-4 border-[#C5A059] pl-4 py-1">
                  {story.excerpt}
                </p>

                {/* Body Paragraphs */}
                <div className="space-y-5 text-sm sm:text-base text-[#444444] leading-relaxed">
                  {story.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Back to Stories CTA */}
                <div className="pt-8 border-t border-[#E8E5DD] flex items-center justify-between flex-wrap gap-4">
                  <Link
                    href="/stories"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111827] hover:text-[#C5A059] transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to All Stories</span>
                  </Link>

                  <div className="flex items-center gap-2 text-xs text-[#555D68]">
                    <Share2 className="w-4 h-4 text-[#C5A059]" />
                    <span>Share This Story</span>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <div className="lg:col-span-4">
                <StorySidebar recentStories={recentStories} />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Shared Global Footer */}
      <Footer />
    </div>
  )
}
