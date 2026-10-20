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
import { Menu, ChevronDown, Heart, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BrandLogo } from "@/components/common/brand-logo"
import { motion } from "motion/react"
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
              className="border-neutral-300 text-[#111827] hover:bg-[#F8F6F1]"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </Button>
          }
        />

        <SheetContent side="right" className="w-[310px] sm:w-[360px] p-0 flex flex-col bg-white">
          {/* Header */}
          <SheetHeader className="p-5 border-b border-[#E8E5DD] bg-[#F8F6F1]">
            <SheetTitle className="text-left">
              <BrandLogo variant="light" iconSize="sm" href="/" />
            </SheetTitle>
          </SheetHeader>

          {/* Nav List */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1">
            {SITE_CONFIG.navItems.map((item: NavItem, index: number) => {
              const isActive = pathname === item.href
              const hasChildren = Boolean(item.children && item.children.length > 0)
              const isExpanded = expandedDropdown === item.label

              if (hasChildren) {
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * index, duration: 0.25, ease: "easeOut" }}
                    className="border-b border-neutral-100 pb-1"
                  >
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={cn(
                        "w-full flex items-center justify-between py-2.5 text-xs uppercase font-bold tracking-wider transition-colors active:scale-[0.98]",
                        isExpanded ? "text-[#C5A059]" : "text-[#111827]"
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200 text-neutral-400",
                          isExpanded ? "rotate-180 text-[#C5A059]" : ""
                        )}
                      />
                    </button>

                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.2 }}
                        className="pl-3 pb-2 space-y-1 border-l-2 border-[#C5A059]/40 ml-2"
                      >
                        {item.children?.map((sub) => {
                          const isSubActive = pathname === sub.href
                          return (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setOpen(false)}
                              className={cn(
                                "block py-1.5 text-xs transition-colors active:scale-[0.98]",
                                isSubActive
                                  ? "text-[#C5A059] font-semibold"
                                  : "text-[#4B5563] hover:text-[#111827]"
                              )}
                            >
                              {sub.label}
                            </Link>
                          )
                        })}
                      </motion.div>
                    )}
                  </motion.div>
                )
              }

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * index, duration: 0.25, ease: "easeOut" }}
                  whileTap={{ scale: 0.98 }}
                  className="border-b border-neutral-100 last:border-none"
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block py-2.5 text-xs uppercase font-bold tracking-wider transition-colors",
                      isActive
                        ? "text-[#C5A059]"
                        : "text-[#111827] hover:text-[#C5A059]"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Sheet Footer with Contact & Giving Button */}
          <div className="p-5 border-t border-[#E8E5DD] bg-[#F8F6F1] space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.3 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link href="/donate" onClick={() => setOpen(false)} className="block w-full">
                <Button variant="default" className="w-full font-bold text-xs gap-2 py-5 shadow-xs">
                  <Heart className="w-4 h-4 fill-current" />
                  MAKE A DONATION
                </Button>
              </Link>
            </motion.div>

            <div className="space-y-1.5 pt-2 text-[11px] text-[#555D68]">
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3 text-[#C5A059]" />
                <span>(800) JUBOH-ORG</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3 text-[#C5A059]" />
                <span>info@jubohfoundation.org</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-[#C5A059]" />
                <span>United States • 501(c)(3) Nonprofit</span>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
