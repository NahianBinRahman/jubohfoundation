"use client"

import React from "react"
import { GALLERY_CATEGORIES, type GalleryCategory } from "@/data/gallery"
import { cn } from "@/lib/utils"

interface GalleryFilterProps {
  selectedCategory: GalleryCategory
  onSelectCategory: (category: GalleryCategory) => void
}

export function GalleryFilter({
  selectedCategory,
  onSelectCategory,
}: GalleryFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="Gallery category filters"
      className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12"
    >
      {GALLERY_CATEGORIES.map((category) => {
        const isSelected = selectedCategory === category
        return (
          <button
            key={category}
            role="tab"
            aria-selected={isSelected}
            onClick={() => onSelectCategory(category)}
            className={cn(
              "px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer select-none",
              isSelected
                ? "bg-[#C5A059] text-[#111827] shadow-sm font-bold scale-[1.02]"
                : "bg-white text-[#4B5563] border border-[#E8E5DD] hover:border-[#C5A059] hover:text-[#111827]"
            )}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
