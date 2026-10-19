import React from "react"
import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHero } from "@/components/common/page-hero"
import { SectionHeading } from "@/components/common/section-heading"
import { StoryCard } from "@/components/stories/StoryCard"
import { StorySidebar } from "@/components/stories/StorySidebar"
import { StoriesEmptyState } from "@/components/stories/StoriesEmptyState"
import { getAllStories, getRecentStories } from "@/data/stories"
import { IMAGES } from "@/lib/images"

export const metadata: Metadata = {
  title: "Stories & Insights | JUBOH Foundation - Excellence in Everything",
  description:
    "Explore inspiring stories and community insights highlighting educational excellence, business mentorship, and transformative civic progress.",
}

export default function StoriesPage() {
  const stories = getAllStories()
  const recentStories = getRecentStories(3)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Shared Global Header */}
      <Header />

      <main className="flex-1">
        {/* Section A: Page Hero */}
        <PageHero
          title="Stories & Insights"
          subtitle="Explore stories and community updates connected to education, entrepreneurship, youth development, and community empowerment."
          eyebrow="From Our Community"
          imageSrc={IMAGES.stories.hero.src}
          imageAlt={IMAGES.stories.hero.alt}
          breadcrumbs={[{ label: "Home", href: "/" }]}
          height="default"
        />

        {/* Section B & C: Editorial Content & Sidebar Layout */}
        <section className="py-20 md:py-28 bg-[#F8F6F1]/50">
          <div className="container-custom">
            <SectionHeading
              eyebrow="From Our Community"
              title="Stories That Inspire Change"
              subtitle="Explore stories and insights connected to education, entrepreneurship, youth development, and community empowerment."
            />

            {/* Two-Column Editorial Layout (2/3 Main, 1/3 Sidebar) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mt-12">
              {/* Main Content Column */}
              <div className="lg:col-span-8">
                {stories.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {stories.map((story, index) => (
                      <StoryCard
                        key={story.id}
                        story={story}
                        featured={index === 0}
                      />
                    ))}
                  </div>
                ) : (
                  <StoriesEmptyState />
                )}
              </div>

              {/* Right Sidebar Column */}
              <div className="lg:col-span-4">
                <StorySidebar recentStories={recentStories} />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Shared Global Footer */}
      <Footer />
    </div>
  )
}
