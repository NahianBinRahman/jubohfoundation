"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, ChevronDown, Sparkles, Heart, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG, type NavItem } from "@/data/site-data"
import { cn } from "@/lib/utils"

export function MobileNavigation() {
  const [open, setOpen] = useState(false)
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>("Programs")
  const pathname = usePathname()

  const toggleDropdown = (label: string) => {
    setExpandedDropdown(expandedDropdown === label ? null : label)
  }

  return (
    <div className="lg:hidden flex items-center gap-3">
      {/* Quick Mobile Donate Button */}
      <Link href="/donate">
        <Button variant="default" size="sm" className="font-semibold text-xs gap-1.5 shadow-xs">
          <Heart className="w-3.5 h-3.5 fill-current" />
          DONATE
        </Button>
      </Link>

      {/* Sheet Trigger */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <Button
              variant="outline"
              size="icon"
              className="border-neutral-300 text-[#222222] hover:bg-[#F8F6F1]"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </Button>
          }
        />

        <SheetContent side="right" className="w-[310px] sm:w-[360px] p-0 flex flex-col bg-white">
          {/* Header */}
          <SheetHeader className="p-5 border-b border-[#E8E5DD] bg-[#F8F6F1]">
            <SheetTitle className="flex items-center gap-2.5 text-left">
              <div className="w-8 h-8 rounded-full bg-[#F6B83E]/20 text-[#F6B83E] flex items-center justify-center">
                <Sparkles className="w-4 h-4 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base font-bold text-[#222222] leading-tight">
                  JUBOH FOUNDATION
                </span>
                <span className="text-[9px] tracking-wider uppercase text-[#777777]">
                  Excellence in Everything
                </span>
              </div>
            </SheetTitle>
          </SheetHeader>

          {/* Nav List */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1">
            {SITE_CONFIG.navItems.map((item: NavItem) => {
              const isActive = pathname === item.href
              const hasChildren = Boolean(item.children && item.children.length > 0)
              const isExpanded = expandedDropdown === item.label

              if (hasChildren) {
                return (
                  <div key={item.label} className="border-b border-neutral-100 pb-1">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={cn(
                        "w-full flex items-center justify-between py-2.5 text-xs uppercase font-bold tracking-wider transition-colors",
                        isExpanded ? "text-[#F6B83E]" : "text-[#222222]"
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200 text-neutral-400",
                          isExpanded ? "rotate-180 text-[#F6B83E]" : ""
                        )}
                      />
                    </button>

                    {isExpanded && (
                      <div className="pl-3 pb-2 space-y-1 border-l-2 border-[#F6B83E]/40 ml-2">
                        {item.children?.map((sub) => {
                          const isSubActive = pathname === sub.href
                          return (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setOpen(false)}
                              className={cn(
                                "block py-1.5 text-xs transition-colors",
                                isSubActive
                                  ? "text-[#F6B83E] font-semibold"
                                  : "text-[#555555] hover:text-[#222222]"
                              )}
                            >
                              {sub.label}
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <div key={item.label} className="border-b border-neutral-100 last:border-none">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block py-2.5 text-xs uppercase font-bold tracking-wider transition-colors",
                      isActive
                        ? "text-[#F6B83E]"
                        : "text-[#222222] hover:text-[#F6B83E]"
                    )}
                  >
                    {item.label}
                  </Link>
                </div>
              )
            })}
          </div>

          {/* Sheet Footer with Contact & Giving Button */}
          <div className="p-5 border-t border-[#E8E5DD] bg-[#F8F6F1] space-y-3">
            <Link href="/donate" onClick={() => setOpen(false)} className="block w-full">
              <Button variant="default" className="w-full font-bold text-xs gap-2 py-5 shadow-xs">
                <Heart className="w-4 h-4 fill-current" />
                MAKE A DONATION
              </Button>
            </Link>

            <div className="space-y-1.5 pt-2 text-[11px] text-[#777777]">
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3 text-[#F6B83E]" />
                <span>(800) JUBOH-ORG</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3 text-[#F6B83E]" />
                <span>info@jubohfoundation.org</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-[#F6B83E]" />
                <span>United States • 501(c)(3) Nonprofit</span>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
