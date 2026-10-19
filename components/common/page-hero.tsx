import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeroProps {
  title: string
  subtitle?: string
  eyebrow?: string
  imageSrc?: string
  imageAlt?: string
  breadcrumbs?: BreadcrumbItem[]
  height?: "default" | "tall" | "compact"
  children?: React.ReactNode
  className?: string
}

export function PageHero({
  title,
  subtitle,
  eyebrow,
  imageSrc = "/images/generated/hero-community.jpg",
  imageAlt = "Juboh Foundation Community",
  breadcrumbs = [{ label: "Home", href: "/" }],
  height = "default",
  children,
  className,
}: PageHeroProps) {
  const heightClasses = {
    compact: "py-16 md:py-20",
    default: "py-24 md:py-32",
    tall: "py-32 md:py-44",
  }[height]

  return (
    <section
      className={cn(
        "relative w-full bg-[#222222] text-white overflow-hidden flex items-center",
        heightClasses,
        className
      )}
    >
      {/* Background Image with Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.4] contrast-[1.05]"
        />
        {/* Subtle Charcoal Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#222222] via-[#222222]/60 to-[#222222]/80" />
      </div>

      {/* Hero Content */}
      <div className="container-custom relative z-10 w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-2xl">
          {eyebrow && (
            <span className="eyebrow-script text-xl md:text-2xl mb-2 block font-normal">
              {eyebrow}
            </span>
          )}

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-white mb-4">
            {title}
          </h1>

          {subtitle && (
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-xl">
              {subtitle}
            </p>
          )}

          {children && <div className="mt-6">{children}</div>}
        </div>

        {/* Humanite Style Breadcrumbs (Right-Aligned) */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-neutral-300 bg-black/30 backdrop-blur-xs px-4 py-2 rounded-full border border-white/10 self-start md:self-auto"
          >
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={crumb.label}>
                {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-[#F6B83E] shrink-0" />}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-[#F6B83E] transition-colors whitespace-nowrap"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#F6B83E] font-semibold whitespace-nowrap">
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            ))}
            <ChevronRight className="w-3.5 h-3.5 text-[#F6B83E] shrink-0" />
            <span className="text-[#F6B83E] font-semibold whitespace-nowrap">
              {title}
            </span>
          </nav>
        )}
      </div>
    </section>
  )
}
