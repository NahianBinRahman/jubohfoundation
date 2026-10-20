import React from "react"
import Image from "next/image"
import { Sparkles, ShieldCheck, Heart, Award } from "lucide-react"
import { LEADERSHIP } from "@/data/site-data"

export function AboutIntroduction() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Leadership Presentation */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-[500px] lg:max-w-none">
              {/* Executive Portrait Frame with Authentic Photo */}
              <div className="relative rounded-lg overflow-hidden border border-[#E8E5DD] shadow-lg bg-[#111827] text-white">
                {/* Authentic Leadership Photograph */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                  <Image
                    src="/images/leadership/jalen-uboh-anika-carter.jpg"
                    alt="Founder Jalen Uboh and President Anika Carter"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  {/* Caption requested by user */}
                  <div className="space-y-1.5 border-b border-white/10 pb-4 text-xs sm:text-sm text-neutral-200">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                      <span>
                        <strong className="text-white">Founder and Chairman :</strong> Jalen Uboh (pictured right)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                      <span>
                        <strong className="text-white">President and Executive Director:</strong> Anika Carter (pictured left)
                      </span>
                    </div>
                  </div>

                  <p className="font-serif text-sm italic text-neutral-300 leading-relaxed">
                    &ldquo;The JUBOH Foundation was founded in 2020 with the purpose to Educate, Inspire, and to Empower the lives of those often forgotten; the marginalized, the left behind, and the most vulnerable in our society.&rdquo;
                  </p>

                  <div className="pt-2 flex items-center justify-between text-[11px] text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                      IRS 501(c)(3) Nonprofit
                    </span>
                    <span>Charitable Arm of JUBOH Companies</span>
                  </div>
                </div>
              </div>

              {/* Gold Floating Seal Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#C5A059] text-[#111827] px-5 py-3.5 rounded-lg shadow-xl border border-white/40 hidden sm:flex items-center gap-3">
                <Award className="w-6 h-6 shrink-0" />
                <div className="text-left">
                  <span className="block font-serif text-xs font-bold leading-tight uppercase tracking-wider">
                    Excellence In Everything
                  </span>
                  <span className="text-[10px] text-[#111827]/80 font-medium">
                    Sustainable Community Impact
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Foundation Overview */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="eyebrow-script text-xl text-[#C5A059] block">
                Who We Are
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#111827] tracking-tight leading-tight">
                Empowering Communities. Inspiring Change.
              </h2>
            </div>

            <p className="text-sm md:text-base text-[#555D68] leading-relaxed">
              The JUBOH Foundation, founded by Jalen &ldquo;JUBOH&rdquo; Uboh, is a
              United States IRS-recognized 501(c)(3) non-profit organization and
              the charitable arm of the JUBOH Companies global organization.
            </p>

            <p className="text-sm md:text-base text-[#555D68] leading-relaxed">
              Established in 2020, our mission was born out of a profound commitment
              to deliver excellence by empowering individuals and organizations to
              make a significant, lasting difference in the quality of life of
              people often forgotten.
            </p>

            {/* Core Values / Distinctions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="border-l-2 border-[#C5A059] pl-4 py-1">
                <h4 className="font-serif text-sm font-bold text-[#111827]">
                  The Ubuntu Philosophy
                </h4>
                <p className="text-xs text-[#555D68] mt-1 leading-relaxed">
                  Grounded in the belief that personal growth is inextricably tied to
                  the collective progress of the whole community.
                </p>
              </div>

              <div className="border-l-2 border-[#C5A059] pl-4 py-1">
                <h4 className="font-serif text-sm font-bold text-[#111827]">
                  Holistic Programming
                </h4>
                <p className="text-xs text-[#555D68] mt-1 leading-relaxed">
                  Bridging education, entrepreneurship, workforce housing, and global
                  micro-infrastructure.
                </p>
              </div>
            </div>

            <div className="pt-2 text-xs text-[#555D68] italic">
              Tagline: <strong className="text-[#111827] font-semibold">Excellence In Everything</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
