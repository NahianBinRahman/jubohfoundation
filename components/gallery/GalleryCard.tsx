import React from "react"
import Image from "next/image"
import { Eye, Sparkles } from "lucide-react"
import type { GalleryItem } from "@/data/gallery"

interface GalleryCardProps {
  item: GalleryItem
  onOpen: () => void
  priority?: boolean
}

export function GalleryCard({ item, onOpen, priority = false }: GalleryCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-[#E8E5DD] shadow-xs hover:shadow-xl transition-all duration-300 text-left bg-neutral-100 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F6B83E] focus-visible:ring-offset-2"
      aria-label={`View larger image: ${item.title}`}
    >
      {/* Background Image with Gentle Zoom */}
      <Image
        src={item.src}
        alt={item.alt}
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* Category Pill Tag (Always visible top-left) */}
      <div className="absolute top-3 left-3 z-10 bg-[#222222]/85 backdrop-blur-xs text-[#F6B83E] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs">
        {item.category}
      </div>

      {/* Illustrative Metadata Badge (Bottom right) */}
      {item.isIllustrative && (
        <div className="absolute bottom-2.5 right-2.5 z-10 bg-black/60 backdrop-blur-xs text-[9px] text-white/80 px-2 py-0.5 rounded-xs">
          Illustrative
        </div>
      )}

      {/* Hover Overlay with Title and Gold Eye Icon */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#222222]/90 via-[#222222]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 space-y-1.5">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg font-bold text-white leading-snug">
              {item.title}
            </h3>
            <div className="w-8 h-8 rounded-full bg-[#F6B83E] text-[#222222] flex items-center justify-center shrink-0 shadow-sm ml-2">
              <Eye className="w-4 h-4" />
            </div>
          </div>
          <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
            {item.caption}
          </p>
        </div>
      </div>
    </button>
  )
}
