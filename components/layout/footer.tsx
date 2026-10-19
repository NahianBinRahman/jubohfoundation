"use client"

import React from "react"
import Link from "next/link"
import { Sparkles, Mail, MapPin, Phone, Heart } from "lucide-react"
import { SITE_CONFIG, CORE_PROGRAMS } from "@/data/site-data"
import { NewsletterForm } from "@/components/common/newsletter-form"

export function Footer() {
  return (
    <footer className="bg-[#222222] text-[#cccccc] pt-16 pb-8 border-t border-neutral-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-800">
          {/* Column 1: Quick Links */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F6B83E]" />
              <h4 className="font-serif text-white font-bold text-base tracking-wide">
                Quick Links
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs text-[#999999]">
              <li>
                <Link href="/" className="hover:text-[#F6B83E] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F6B83E] transition-colors">
                  About Us & Ubuntu Spirit
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-[#F6B83E] transition-colors">
                  Events & Masterminds
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#F6B83E] transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-[#F6B83E] transition-colors">
                  Impact Stories
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#F6B83E] transition-colors">
                  Community Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#F6B83E] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F6B83E] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Our Programs */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F6B83E]" />
              <h4 className="font-serif text-white font-bold text-base tracking-wide">
                Our Programs
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs text-[#999999]">
              {CORE_PROGRAMS.map((prog) => (
                <li key={prog.id}>
                  <Link
                    href={`/programs#${prog.id}`}
                    className="hover:text-[#F6B83E] transition-colors"
                  >
                    {prog.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/programs/founders-initiatives"
                  className="hover:text-[#F6B83E] transition-colors"
                >
                  Founder&apos;s Initiatives
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/housing"
                  className="hover:text-[#F6B83E] transition-colors"
                >
                  Workforce Housing (CHDO)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F6B83E]" />
              <h4 className="font-serif text-white font-bold text-base tracking-wide">
                Contact Information
              </h4>
            </div>
            
            <p className="text-xs text-[#999999] leading-relaxed">
              JUBOH Foundation, Inc. is a registered 501(c)(3) nonprofit organization.
            </p>

            <div className="space-y-2.5 text-xs text-[#999999]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F6B83E] shrink-0 mt-0.5" />
                <span>United States • Global Missions Worldwide</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F6B83E] shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-[#F6B83E] transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F6B83E] shrink-0" />
                <span>(800) JUBOH-ORG</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/donate"
                className="inline-flex items-center gap-1.5 text-xs text-[#F6B83E] font-semibold hover:underline"
              >
                <Heart className="w-3.5 h-3.5 fill-current" />
                100% Tax-Deductible Contribution
              </Link>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F6B83E]" />
              <h4 className="font-serif text-white font-bold text-base tracking-wide">
                Newsletter
              </h4>
            </div>
            <p className="text-xs text-[#999999] leading-relaxed mb-4">
              Stay updated on tips, courses, academic prep scholarships, and
              community empowerment initiatives.
            </p>
            <NewsletterForm variant="dark" />
          </div>
        </div>

        {/* Bottom Bar: Logo, Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#777777] gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[#F6B83E]/20 text-[#F6B83E] flex items-center justify-center">
              <Sparkles className="w-4 h-4 fill-current" />
            </div>
            <span className="font-serif text-sm font-bold text-white tracking-tight">
              JUBOH FOUNDATION
            </span>
            <span className="text-neutral-600 hidden sm:inline">|</span>
            <span className="text-neutral-400 text-[11px] hidden sm:inline">
              Excellence In Everything
            </span>
          </div>

          <p>{SITE_CONFIG.copyright}</p>

          <div className="flex items-center gap-5 text-[11px]">
            <Link href="/terms" className="hover:text-[#cccccc] transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-[#cccccc] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/donate" className="hover:text-[#F6B83E] transition-colors">
              Give / Donate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
