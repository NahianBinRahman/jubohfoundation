"use client"

import React, { useState, useMemo } from "react"
import { GalleryFilter } from "@/components/gallery/GalleryFilter"
import { GalleryCard } from "@/components/gallery/GalleryCard"
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox"
import { GALLERY_ITEMS, type GalleryCategory, type GalleryItem } from "@/data/gallery"

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("All")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Filter items based on selected category
  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") {
      return GALLERY_ITEMS
    }
    return GALLERY_ITEMS.filter((item) => item.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div>
      {/* Category Filter Pills */}
      <GalleryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={(category) => {
          setSelectedCategory(category)
          setLightboxIndex(null)
        }}
      />

      {/* Responsive Gallery Grid: 3 columns desktop, 2 columns tablet, 1 column mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredItems.map((item, index) => (
          <GalleryCard
            key={item.id}
            item={item}
            priority={index < 3}
            onOpen={() => setLightboxIndex(index)}
          />
        ))}
      </div>

      {/* Empty State fallback if a category has no items */}
      {filteredItems.length === 0 && (
        <div className="text-center py-16 bg-[#F8F6F1] rounded-lg border border-[#E8E5DD] max-w-md mx-auto">
          <p className="text-xs sm:text-sm text-[#555D68]">
            No photographs available in this category currently.
          </p>
        </div>
      )}

      {/* Interactive Lightbox Modal */}
      <GalleryLightbox
        items={filteredItems}
        currentIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </div>
  )
}
