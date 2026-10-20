"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { SITE_CONFIG, type NavItem } from "@/data/site-data"
import { cn } from "@/lib/utils"

export function DesktopNavigation() {
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
      {SITE_CONFIG.navItems.map((item: NavItem) => {
        const isActive =
          pathname === item.href ||
          (item.children && item.children.some((child) => pathname === child.href))

        if (item.children) {
          return (
            <div
              key={item.label}
              className="relative py-2"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={cn(
                  "text-xs uppercase tracking-wider font-bold transition-colors flex items-center gap-1 select-none",
                  isActive
                    ? "text-[#C5A059]"
                    : "text-[#111827] hover:text-[#C5A059]"
                )}
                aria-expanded={openDropdown === item.label}
              >
                {item.label}
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200 text-neutral-400 group-hover:text-[#C5A059]",
                    openDropdown === item.label ? "rotate-180 text-[#C5A059]" : ""
                  )}
                />
              </Link>

              {/* Animated Floating Dropdown Menu */}
              <div
                className={cn(
                  "absolute top-full left-0 pt-2 min-w-[240px] z-50 transition-all duration-200 origin-top",
                  openDropdown === item.label
                    ? "opacity-100 scale-100 visible pointer-events-auto"
                    : "opacity-0 scale-95 invisible pointer-events-none"
                )}
              >
                <div className="bg-white rounded-md shadow-xl border border-[#E8E5DD] py-2 overflow-hidden">
                  <div className="px-4 py-1.5 text-[10px] uppercase font-bold tracking-wider text-[#C5A059] border-b border-neutral-100 bg-[#F8F6F1]/60 mb-1">
                    Juboh Initiatives
                  </div>
                  {item.children.map((sub) => {
                    const isSubActive = pathname === sub.href
                    return (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className={cn(
                          "block px-4 py-2 text-xs font-semibold transition-all duration-150 border-l-2",
                          isSubActive
                            ? "border-[#C5A059] bg-[#F8F6F1] text-[#111827]"
                            : "border-transparent text-[#444444] hover:border-[#C5A059] hover:bg-[#F8F6F1] hover:text-[#111827]"
                        )}
                      >
                        {sub.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "text-xs uppercase tracking-wider font-bold transition-colors py-2 relative",
              isActive
                ? "text-[#C5A059]"
                : "text-[#111827] hover:text-[#C5A059]"
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
