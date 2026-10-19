import React from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Sparkles } from "lucide-react"
import { MobileNavigation } from "@/components/layout/mobile-navigation"

export function TopBar() {
  return (
    <div className="bg-[#222222] text-white border-b border-neutral-800 relative z-30">
      <div className="container-custom py-3 sm:py-4 flex items-center justify-between gap-4">
        {/* Authentic Juboh Foundation Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F6B83E]/15 border border-[#F6B83E]/40 flex items-center justify-center text-[#F6B83E] group-hover:bg-[#F6B83E] group-hover:text-[#222222] transition-colors duration-200">
            <Sparkles className="w-5 h-5 fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#F6B83E] transition-colors">
              JUBOH FOUNDATION
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#F6B83E] font-medium -mt-0.5">
              Excellence In Everything
            </span>
          </div>
        </Link>

        {/* Center: Contact Information Blocks (Visible on Medium and Large Screens) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-left">
          {/* Email Block */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#F6B83E]/10 flex items-center justify-center text-[#F6B83E] shrink-0 border border-[#F6B83E]/30">
              <Mail className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col text-xs leading-tight">
              <span className="text-[#a0a0a0] text-[10px] font-medium">Email Address</span>
              <a
                href="mailto:info@jubohfoundation.org"
                className="text-white font-semibold hover:text-[#F6B83E] transition-colors text-xs"
              >
                info@jubohfoundation.org
              </a>
            </div>
          </div>

          {/* Phone Block */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#F6B83E]/10 flex items-center justify-center text-[#F6B83E] shrink-0 border border-[#F6B83E]/30">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col text-xs leading-tight">
              <span className="text-[#a0a0a0] text-[10px] font-medium">Phone Number</span>
              <a
                href="tel:18005826467"
                className="text-white font-semibold hover:text-[#F6B83E] transition-colors text-xs"
              >
                (800) JUBOH-ORG
              </a>
            </div>
          </div>

          {/* Location Block */}
          <div className="hidden lg:flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#F6B83E]/10 flex items-center justify-center text-[#F6B83E] shrink-0 border border-[#F6B83E]/30">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col text-xs leading-tight">
              <span className="text-[#a0a0a0] text-[10px] font-medium">Our Location</span>
              <span className="text-white font-semibold text-xs">
                Atlanta, GA • Global
              </span>
            </div>
          </div>
        </div>

        {/* Right CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <Link
            href="/donate"
            className="hidden sm:inline-flex items-center justify-center bg-[#F6B83E] hover:bg-[#e0a32e] text-[#222222] font-bold text-xs uppercase tracking-widest px-6 py-3 transition-colors duration-200 shadow-sm"
          >
            DONATE NOW
          </Link>
          <MobileNavigation />
        </div>
      </div>
    </div>
  )
}
