import React from "react"
import { Mail, Phone, MapPin, ShieldCheck, HeartHandshake, Clock } from "lucide-react"

export function ContactInformation() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <span className="eyebrow-script text-xl text-[#C5A059] block">
          Reach Our Leadership
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111827] tracking-tight leading-tight">
          We&apos;d Love to Hear From You
        </h2>
        <p className="text-sm sm:text-base text-[#555D68] leading-relaxed">
          Whether you are an aspiring entrepreneur interested in the Business Academy, a school partner seeking youth leadership tours, or a civic organization interested in housing collaboration, we welcome your inquiries.
        </p>
      </div>

      {/* Verified Contact Details Grid */}
      <div className="space-y-4 pt-2">
        <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[#E8E5DD] shadow-2xs">
          <div className="w-10 h-10 rounded-full bg-[#F8F6F1] border border-[#E8E5DD] flex items-center justify-center text-[#C5A059] shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111827]">
              Email Communications
            </h4>
            <a
              href="mailto:info@jubohfoundation.org"
              className="text-sm sm:text-base text-[#111827] font-serif font-bold hover:text-[#C5A059] transition-colors mt-0.5 block"
            >
              info@jubohfoundation.org
            </a>
            <p className="text-xs text-[#555D68] mt-1">
              General inquiries, partnership proposals, and press relations.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[#E8E5DD] shadow-2xs">
          <div className="w-10 h-10 rounded-full bg-[#F8F6F1] border border-[#E8E5DD] flex items-center justify-center text-[#C5A059] shrink-0">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111827]">
              Toll-Free Inquiries
            </h4>
            <span className="text-sm sm:text-base text-[#111827] font-serif font-bold mt-0.5 block">
              (800) JUBOH-ORG
            </span>
            <p className="text-xs text-[#555D68] mt-1">
              Monday through Friday, 9:00 AM – 5:00 PM EST.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[#E8E5DD] shadow-2xs">
          <div className="w-10 h-10 rounded-full bg-[#F8F6F1] border border-[#E8E5DD] flex items-center justify-center text-[#C5A059] shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111827]">
              Operational Reach
            </h4>
            <span className="text-sm sm:text-base text-[#111827] font-serif font-bold mt-0.5 block">
              United States &bull; Global Missions
            </span>
            <p className="text-xs text-[#555D68] mt-1">
              Operating nationally across the United States with clean water and solar infrastructure initiatives globally.
            </p>
          </div>
        </div>
      </div>

      {/* Governance & Authenticity Card */}
      <div className="bg-[#F8F6F1] p-6 rounded-xl border border-[#E8E5DD] space-y-2.5">
        <div className="flex items-center gap-2 text-[#111827] font-serif font-bold text-sm">
          <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
          <span>Official 501(c)(3) Nonprofit Governance</span>
        </div>
        <p className="text-xs text-[#555D68] leading-relaxed">
          JUBOH Foundation, Inc. is an IRS-recognized 501(c)(3) tax-exempt organization established in 2020. Donations and charitable contributions are tax-deductible to the fullest extent permitted by law.
        </p>
      </div>
    </div>
  )
}
