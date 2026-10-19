"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sparkles, Menu, X, ChevronDown, Heart } from "lucide-react"
import { SITE_CONFIG } from "@/data/site-data"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E8E5DD] shadow-xs">
      <div className="container-custom flex items-center justify-between h-20">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#F6B83E]/15 border border-[#F6B83E]/40 flex items-center justify-center text-[#F6B83E] group-hover:bg-[#F6B83E] group-hover:text-[#222222] transition-colors duration-200">
            <Sparkles className="w-5 h-5 fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-tight font-bold text-[#222222]">
              JUBOH FOUNDATION
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#777777] font-medium -mt-0.5">
              Excellence In Everything
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {SITE_CONFIG.navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium tracking-wide uppercase transition-colors py-2 flex items-center gap-1",
                    isActive
                      ? "text-[#F6B83E] font-semibold"
                      : "text-[#222222] hover:text-[#F6B83E]"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-neutral-400 group-hover:text-[#F6B83E]" />
                  )}
                </Link>

                {/* Submenu Dropdown */}
                {item.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[240px] z-50">
                    <div className="bg-white rounded-md shadow-lg border border-[#E8E5DD] py-2">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-4 py-2.5 text-xs font-medium text-[#222222] hover:bg-[#F8F6F1] hover:text-[#F6B83E] transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/donate"
            className="inline-flex items-center gap-1 bg-[#F6B83E] text-[#222222] font-semibold px-3 py-1.5 rounded-sm text-xs"
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
            DONATE
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#222222] hover:text-[#F6B83E] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E8E5DD] px-5 py-4 space-y-3">
          {SITE_CONFIG.navItems.map((item) => (
            <div key={item.label} className="border-b border-neutral-100 pb-2">
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold text-[#222222] hover:text-[#F6B83E] py-1"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-4 pt-1 space-y-1">
                  {item.children.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs text-[#777777] hover:text-[#F6B83E] py-1"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  )
}
