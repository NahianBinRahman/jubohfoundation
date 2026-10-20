import React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
  inverted?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  inverted = false,
  className,
}: SectionHeadingProps) {
  const alignmentClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align]

  return (
    <div className={cn("flex flex-col max-w-3xl mb-12", alignmentClass, className)}>
      {eyebrow && (
        <span className="eyebrow-script mb-2.5 block text-lg md:text-xl font-medium tracking-wide">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-serif text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight tracking-tight mb-4",
          inverted ? "text-white" : "text-[#111827]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-sm md:text-base leading-relaxed max-w-2xl",
            inverted ? "text-neutral-300" : "text-[#555D68]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
