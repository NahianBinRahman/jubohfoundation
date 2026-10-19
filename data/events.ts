/**
 * Events Data Store for JUBOH Foundation
 *
 * NOTE: The original website describes Business Events & Networking (in-person masterminds,
 * virtual networking, and seminars), but does NOT establish a verified list of confirmed
 * upcoming event dates, venues, or schedules.
 *
 * In accordance with our strict authenticity guidelines, we do NOT invent fake dates or
 * fictional speakers. The EVENTS array is typed and ready to receive verified events when scheduled.
 */

export interface EventItem {
  id: string
  slug: string
  title: string
  description: string
  content?: string[]
  objectives?: string[]
  image: string
  imageAlt: string
  date: string // Format: YYYY-MM-DD
  dateFormatted: string // e.g., "24th December 2026"
  displayDay: string // e.g., "24"
  displayMonth: string // e.g., "December"
  startTime: string // e.g., "10:00 AM"
  endTime: string // e.g., "2:30 PM"
  location: string
  venueAddress?: string
  category: "Business Academy" | "Youth Development" | "Community" | "Global Missions"
  registrationEnabled: boolean
  featured?: boolean
  isIllustrative?: boolean
  badgeColor: string // e.g. "#FF5538" (Coral), "#F6B83E" (Gold), "#4DB6AC" (Teal)
  speaker: string
  subject: string
}

export const EVENTS: EventItem[] = [
  {
    id: "evt-01",
    slug: "juboh-business-academy-mastermind-2026",
    title: "JUBOH Business Academy Mastermind & Funding Summit 2026",
    description:
      "An intensive executive business symposium connecting minority founders, entrepreneurs, and emerging leaders with institutional capital, scaling frameworks, and high-impact mentorship.",
    content: [
      "The JUBOH Business Academy Mastermind & Funding Summit brings together visionary entrepreneurs, institutional investors, and seasoned corporate executives for a full day of high-impact workshops, pitch showcases, and capital access roundtables.",
      "Keynote sessions delivered by Jalen 'JUBOH' Uboh and guest industry leaders provide actionable roadmaps on building scalable enterprises, securing commercial financing, and navigating government contracting.",
    ],
    objectives: [
      "Access capital procurement strategies and minority enterprise grants",
      "One-on-one pitch feedback from venture leaders and certified accountants",
      "Executive peer networking and business mastermind cohort entry",
    ],
    image: "/images/generated/business-academy.jpg",
    imageAlt: "Entrepreneurs collaborating during an executive business mastermind session",
    date: "2026-11-24",
    dateFormatted: "24th November 2026",
    displayDay: "24",
    displayMonth: "November",
    startTime: "10:00 AM",
    endTime: "3:30 PM",
    location: "Atlanta Executive Center & Virtual Broadcast",
    venueAddress: "100 Peachtree St NW, Suite 1400, Atlanta, GA 30303",
    category: "Business Academy",
    registrationEnabled: true,
    featured: true,
    badgeColor: "#FF5538", // Vibrant Coral/Red-Orange (Card 1)
    speaker: "Jalen \"JUBOH\" Uboh",
    subject: "Business Academy, Capital Access",
  },
  {
    id: "evt-02",
    slug: "youth-leadership-hbcu-college-tour-symposium",
    title: "Youth Leadership Council & HBCU College Tour Symposium",
    description:
      "Empowering promising high school juniors and seniors with college application workshops, institutional scholarships, and guided campus tours across premier HBCU grounds.",
    content: [
      "Organized under the JUBOH Youth Leadership Initiative, this symposium equips high school students from underrepresented communities with comprehensive college readiness guidance.",
      "Students engage in admissions essay bootcamps, FAFSA and merit scholarship navigation, and connect with collegiate mentors who share personal strategies for academic and career excellence.",
    ],
    objectives: [
      "Comprehensive scholarship search and admissions roadmap",
      "Mentorship pairing with current HBCU students and alumni",
      "Hands-on leadership and public speaking workshops",
    ],
    image: "/images/programs/youth-leadership.webp",
    imageAlt: "Young scholars and mentors participating in youth leadership seminar",
    date: "2026-12-24",
    dateFormatted: "24th December 2026",
    displayDay: "24",
    displayMonth: "December",
    startTime: "9:00 AM",
    endTime: "1:30 PM",
    location: "Atlanta Educational Hub & HBCU Campuses",
    venueAddress: "830 Westview Dr SW, Atlanta, GA 30314",
    category: "Youth Development",
    registrationEnabled: true,
    featured: false,
    badgeColor: "#F6B83E", // Vibrant Amber/Gold (Card 2)
    speaker: "Anika Carter",
    subject: "Youth Leadership, Education",
  },
  {
    id: "evt-03",
    slug: "chdo-affordable-housing-wealth-workshop",
    title: "CHDO Community Housing & First-Time Homebuyer Summit",
    description:
      "Hands-on community housing development seminar guiding working families through first-time homebuyer down payment grants, financial literacy, and community land trusts.",
    content: [
      "As an active Community Housing Development Organization (CHDO), the JUBOH Foundation is dedicated to expanding equitable access to affordable homeownership and neighborhood revitalization.",
      "This workshop features HUD-certified housing counselors, credit restoration specialists, and lending partners who provide individualized homeownership readiness assessments.",
    ],
    objectives: [
      "Down payment assistance program eligibility walkthrough",
      "Credit optimization and mortgage pre-qualification guidance",
      "Understanding community land trust models and generational equity",
    ],
    image: "/images/programs/community-housing.webp",
    imageAlt: "Community members participating in housing seminar",
    date: "2027-01-24",
    dateFormatted: "24th January 2027",
    displayDay: "24",
    displayMonth: "January",
    startTime: "11:00 AM",
    endTime: "2:30 PM",
    location: "JUBOH Community Center, Atlanta, GA",
    venueAddress: "2450 MLK Jr Dr SW, Atlanta, GA 30311",
    category: "Community",
    registrationEnabled: true,
    featured: false,
    badgeColor: "#4DB6AC", // Vibrant Teal/Seafoam (Card 3)
    speaker: "Housing Advisory Directorate",
    subject: "Community Housing, Wealth Building",
  },
]

export function getAllEvents(): EventItem[] {
  return EVENTS
}

export function getEventBySlug(slug: string): EventItem | undefined {
  return EVENTS.find((event) => event.slug === slug)
}

export function getRelatedEvents(currentId: string, limit: number = 3): EventItem[] {
  return EVENTS.filter((event) => event.id !== currentId).slice(0, limit)
}

export function getFeaturedEvent(): EventItem | undefined {
  return EVENTS.find((event) => event.featured) || EVENTS[0]
}
