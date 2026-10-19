"use client"

import React, { useEffect, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import type { GalleryItem } from "@/data/gallery"

interface GalleryLightboxProps {
  items: GalleryItem[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate: (index: number) => void
}

export function GalleryLightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const currentItem = items[currentIndex]

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1)
    } else {
      onNavigate(items.length - 1) // Loop to end
    }
  }, [currentIndex, items.length, onNavigate])

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onNavigate(currentIndex + 1)
    } else {
      onNavigate(0) // Loop to start
    }
  }, [currentIndex, items.length, onNavigate])

  // Keyboard navigation: Escape closes, ArrowLeft/ArrowRight navigates
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        handlePrev()
      } else if (e.key === "ArrowRight") {
        handleNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    // Lock body scroll when modal is open
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose, handlePrev, handleNext])

  if (!isOpen || !currentItem) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery photo: ${currentItem.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Top Bar with Counter and Close Button */}
      <div className="absolute top-0 left-0 right-0 z-30 p-4 sm:p-6 flex items-center justify-between text-white border-b border-white/10 bg-black/40 backdrop-blur-xs">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#F6B83E] px-2.5 py-1 rounded-xs bg-white/10">
            {currentItem.category}
          </span>
          <span className="text-xs text-neutral-400 font-medium">
            {currentIndex + 1} of {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-[#F6B83E] hover:text-[#222222] text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F6B83E]"
          aria-label="Close image lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Large Image Container */}
      <div className="relative w-full max-w-5xl max-h-[75vh] sm:max-h-[80vh] aspect-[16/10] mx-4 sm:mx-12 overflow-hidden rounded-lg shadow-2xl flex items-center justify-center">
        <Image
          src={currentItem.src}
          alt={currentItem.alt}
          fill
          priority
          sizes="(max-width: 1024px) 95vw, 1200px"
          className="object-contain"
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-[#F6B83E] text-white hover:text-[#222222] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F6B83E]"
        aria-label="Previous photograph"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-[#F6B83E] text-white hover:text-[#222222] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F6B83E]"
        aria-label="Next photograph"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Caption & Title Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 p-4 sm:p-6 text-center text-white bg-black/60 backdrop-blur-xs border-t border-white/10">
        <div className="max-w-2xl mx-auto space-y-1">
          <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
            {currentItem.title}
          </h4>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {currentItem.caption}
          </p>
          {currentItem.isIllustrative && (
            <span className="text-[10px] text-neutral-400 block pt-0.5">
              * Illustrative representation of foundation community activities.
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
