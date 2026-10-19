/**
 * Stories & Articles Data Store for JUBOH Foundation
 *
 * NOTE: The original website screenshots do not establish published article records,
 * verified dates, or editorial text. In accordance with strict authenticity guidelines,
 * STORIES is initialized as an empty typed array.
 * When real articles are approved, they can be added directly to this structure.
 */

export interface Story {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string[]
  image: string
  imageAlt: string
  category: "Community" | "Business Academy" | "Youth Development" | "Global Missions" | "Housing"
  publishedAt: string // Format: YYYY-MM-DD
  formattedDate: string // e.g. "October 19, 2026"
  author?: {
    name: string
    role?: string
    avatar?: string
  }
  featured?: boolean
  readingTime?: string
  tags?: string[]
}

// Initialized as empty array per authenticity guidelines
export const STORIES: Story[] = []

export function getAllStories(): Story[] {
  return STORIES
}

export function getStoryBySlug(slug: string): Story | undefined {
  return STORIES.find((story) => story.slug === slug)
}

export function getFeaturedStory(): Story | undefined {
  return STORIES.find((story) => story.featured) || STORIES[0]
}

export function getRecentStories(limit: number = 3): Story[] {
  return [...STORIES]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
}

export function getRelatedStories(currentId: string, limit: number = 2): Story[] {
  return STORIES.filter((story) => story.id !== currentId).slice(0, limit)
}

export function getAllCategories(): { name: string; count: number }[] {
  const categoryMap = new Map<string, number>()
  for (const story of STORIES) {
    categoryMap.set(story.category, (categoryMap.get(story.category) || 0) + 1)
  }
  return Array.from(categoryMap.entries()).map(([name, count]) => ({ name, count }))
}
