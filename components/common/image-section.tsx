import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageSectionProps {
  src: string
  alt: string
  width?: number
  height?: number
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/2"
  priority?: boolean
  caption?: string
  isIllustrative?: boolean
  overlayBadge?: string
  className?: string
  imageClassName?: string
}

export function ImageSection({
  src,
  alt,
  width = 1200,
  height = 800,
  aspectRatio = "16/9",
  priority = false,
  caption,
  isIllustrative = false,
  overlayBadge,
  className,
  imageClassName,
}: ImageSectionProps) {
  const aspectClass = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "3/2": "aspect-[3/2]",
  }[aspectRatio]

  return (
    <figure className={cn("relative group block overflow-hidden rounded-lg", className)}>
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-lg bg-neutral-100 border border-[#E8E5DD] shadow-sm",
          aspectClass
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={cn(
            "object-cover object-center transition-transform duration-500 group-hover:scale-105",
            imageClassName
          )}
        />

        {/* Optional Overlay Badge (e.g., Campaign Count, Category) */}
        {overlayBadge && (
          <div className="absolute top-4 left-4 z-10 bg-[#C5A059] text-[#111827] text-xs font-bold px-3 py-1.5 rounded-sm shadow-md tracking-wider uppercase">
            {overlayBadge}
          </div>
        )}

        {/* Ethical Illustrative Disclosure Badge (Subtle) */}
        {isIllustrative && (
          <div className="absolute bottom-2 right-2 z-10 bg-black/60 backdrop-blur-xs text-[10px] text-white/80 px-2 py-0.5 rounded-xs pointer-events-none">
            Illustrative
          </div>
        )}
      </div>

      {caption && (
        <figcaption className="mt-2 text-xs text-[#555D68] italic text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
