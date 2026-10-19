export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  avatar: string
  program?: string
  isFeatured?: boolean
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "thomas-andre",
    name: "Thomas Andre",
    role: "Volunteer & Community Partner",
    quote:
      "The JUBOH Foundation transformed our community's future. Through the Business Academy curriculum and compassionate housing advocacy, they gave our families the tools to build generational self-reliance and collective pride.",
    avatar: "/images/avatars/avatar-4.jpg",
    program: "Global Ambassadorship",
    isFeatured: true,
  },
  {
    id: "luna-galvin",
    name: "Luna Galvin",
    role: "Business Academy Alumna & Founder",
    quote:
      "Enrolling in the JUBOH Business Academy gave me the actionable frameworks, funding connections, and executive mentorship needed to scale my enterprise. The Ubuntu philosophy is at the core of everything they teach.",
    avatar: "/images/avatars/avatar-1.jpg",
    program: "Business Academy",
    isFeatured: true,
  },
  {
    id: "rachel-lawson",
    name: "Rachel Lawson",
    role: "Affordable Housing Beneficiary",
    quote:
      "Navigating first-time homeownership felt impossible until JUBOH's CHDO housing initiative stepped in. They provided credit coaching, mortgage navigation, and genuine compassion every step of the journey.",
    avatar: "/images/avatars/avatar-2.jpg",
    program: "Housing Initiative",
    isFeatured: true,
  },
  {
    id: "jonah-houston",
    name: "Jonah Houston",
    role: "Youth Leadership Council Scholar",
    quote:
      "The Youth Leadership Council and HBCU College Tour completely altered my trajectory. Seeing leaders who excelled and believed in us gave me the confidence to pursue higher education and serve my neighborhood.",
    avatar: "/images/avatars/avatar-3.jpg",
    program: "Youth Development",
    isFeatured: false,
  },
  {
    id: "adam-marcus",
    name: "Adam Marcus",
    role: "Global Missions Field Volunteer",
    quote:
      "Deploying sustainable clean water filtration and solar infrastructure with JUBOH showed me what authentic, culturally grounded aid looks like. They don't just provide resources; they build long-term local capacity.",
    avatar: "/images/avatars/avatar-4.jpg",
    program: "Global Missions",
    isFeatured: false,
  },
  {
    id: "sophia-bennett",
    name: "Sophia Bennett",
    role: "SAT/ACT Prep Scholar",
    quote:
      "The personalized SAT coaching and mentorship provided by the JUBOH team helped me raise my score by 240 points and secure a college scholarship. They invest in scholars who are too often left behind.",
    avatar: "/images/avatars/avatar-1.jpg",
    program: "Youth Development",
    isFeatured: false,
  },
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    role: "Small Business Entrepreneur",
    quote:
      "The Business Networking Masterminds connected me directly to capital partners and mentors who believed in our vision. JUBOH bridges opportunity gaps that traditional institutions ignore.",
    avatar: "/images/avatars/avatar-3.jpg",
    program: "Business Academy",
    isFeatured: false,
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    role: "Civic Partner & Mentor",
    quote:
      "What sets JUBOH Foundation apart is their unwavering dedication to excellence in everything. Every curriculum module, housing counseling session, and volunteer initiative is delivered with profound integrity.",
    avatar: "/images/avatars/avatar-2.jpg",
    program: "Founder's Initiatives",
    isFeatured: false,
  },
  {
    id: "david-kalu",
    name: "David Kalu",
    role: "Community Housing Advocate",
    quote:
      "Working alongside the JUBOH leadership has shown me what true grassroots dedication achieves. Their commitment to uplifting the most vulnerable members of society is authentic and enduring.",
    avatar: "/images/avatars/avatar-4.jpg",
    program: "Housing Initiative",
    isFeatured: false,
  },
]
