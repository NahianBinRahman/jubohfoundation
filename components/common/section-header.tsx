import React from "react"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center" | "right"
  inverted?: boolean
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  inverted = false,
  className,
}: SectionHeaderProps) {
  const alignmentClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align]

  return (
    <div className={cn("flex flex-col max-w-3xl mb-12", alignmentClass, className)}>
      {eyebrow && (
        <span className="eyebrow-script mb-2 block font-medium">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-serif text-3xl md:text-4xl lg:text-[42px] leading-tight font-bold tracking-tight mb-4",
          inverted ? "text-white" : "text-[#222222]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-sm md:text-base leading-relaxed",
            inverted ? "text-neutral-300" : "text-[#777777]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
