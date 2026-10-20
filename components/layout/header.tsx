"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { TopBar } from "@/components/layout/top-bar"
import { DesktopNavigation } from "@/components/layout/desktop-navigation"
import { MobileNavigation } from "@/components/layout/mobile-navigation"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* 1. Charcoal Top Bar with Logo, Contact Details & Donate CTA */}
      <TopBar />

      {/* 2. Floating White Navigation Bar */}
      <div
        className={cn(
          "w-full z-40 transition-all duration-300 relative",
          isScrolled
            ? "sticky top-0 bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-[#E8E5DD]"
            : "bg-transparent -mb-8 lg:-mb-10 pt-3"
        )}
      >
        <div className="container-custom">
          <div
            className={cn(
              "w-full bg-white transition-all duration-200 px-6 sm:px-8 py-3.5 flex items-center justify-between",
              isScrolled
                ? "shadow-none border-none py-1"
                : "shadow-xl border border-neutral-100 rounded-sm relative z-30"
            )}
          >
            {/* Left: Navigation Links */}
            <DesktopNavigation />

            {/* Right: "Follow Us :" and Circular Social Icons */}
            <div className="hidden lg:flex items-center gap-3">
              <span className="text-xs font-semibold text-[#4B5563] tracking-wide">
                Follow Us :
              </span>
              <div className="flex items-center gap-2">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full border border-[#C5A059]/60 text-[#C5A059] hover:bg-[#C5A059] hover:text-[#111827] flex items-center justify-center transition-all duration-200 text-xs font-bold"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.7 5H18V0h-3.8C10.5 0 9 1.5 9 4.667V8z" />
                  </svg>
                </a>

                {/* Twitter / X */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-8 h-8 rounded-full bg-[#C5A059] text-[#111827] hover:bg-[#B38E46] flex items-center justify-center transition-all duration-200 text-xs font-bold shadow-xs"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full border border-[#C5A059]/60 text-[#C5A059] hover:bg-[#C5A059] hover:text-[#111827] flex items-center justify-center transition-all duration-200 text-xs font-bold"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Mobile Navigation Trigger inside floating bar if rendered */}
            <div className="lg:hidden flex items-center justify-between w-full">
              <span className="font-serif text-sm font-bold text-[#111827]">
                Menu
              </span>
              <MobileNavigation />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
