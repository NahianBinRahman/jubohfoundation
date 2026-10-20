import React from "react"
import Link from "next/link"
import { LogoIcon } from "@/components/common/logo-icon"
import { cn } from "@/lib/utils"

interface BrandLogoProps {
  className?: string
  iconSize?: "sm" | "md" | "lg"
  variant?: "light" | "dark"
  href?: string
}

export function BrandLogo({
  className,
  iconSize = "md",
  variant = "light",
  href = "/",
}: BrandLogoProps) {
  const isDark = variant === "dark"

  const sizeClasses = {
    sm: {
      wrapper: "w-8 h-8",
      icon: "w-5 h-5",
      title: "text-sm",
      tagline: "text-[8px]",
    },
    md: {
      wrapper: "w-10 h-10 sm:w-11 sm:h-11",
      icon: "w-6 h-6 sm:w-7 sm:h-7",
      title: "text-lg sm:text-xl",
      tagline: "text-[10px]",
    },
    lg: {
      wrapper: "w-12 h-12 sm:w-14 sm:h-14",
      icon: "w-8 h-8 sm:w-9 sm:h-9",
      title: "text-xl sm:text-2xl",
      tagline: "text-xs",
    },
  }[iconSize]

  const content = (
    <div className={cn("flex items-center gap-3 shrink-0 group select-none", className)}>
      {/* Circle Medallion Container with Hands In Circle Logo */}
      <div
        className={cn(
          sizeClasses.wrapper,
          "rounded-full flex items-center justify-center transition-all duration-300 shadow-xs group-hover:scale-105 shrink-0",
          isDark
            ? "bg-[#111827] border border-[#C5A059]/30 text-[#C5A059] group-hover:border-[#C5A059] group-hover:shadow-[0_0_15px_rgba(246,184,62,0.25)]"
            : "bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#C5A059] group-hover:bg-[#C5A059]/25 group-hover:border-[#C5A059]"
        )}
      >
        <LogoIcon className={sizeClasses.icon} variant="gold" />
      </div>

      {/* Typography */}
      <div className="flex flex-col text-left">
        <span
          className={cn(
            "font-serif font-bold tracking-tight leading-none transition-colors",
            sizeClasses.title,
            isDark
              ? "text-white group-hover:text-[#C5A059]"
              : "text-[#111827] group-hover:text-[#C5A059]"
          )}
        >
          JUBOH FOUNDATION
        </span>
        <span
          className={cn(
            "tracking-[0.2em] uppercase font-medium mt-1 leading-none transition-colors",
            sizeClasses.tagline,
            isDark ? "text-[#C5A059]" : "text-[#555D68] group-hover:text-[#C5A059]"
          )}
        >
          Excellence In Everything
        </span>
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} aria-label="JUBOH Foundation Homepage">
        {content}
      </Link>
    )
  }

  return content
}
