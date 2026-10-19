export type GalleryCategory =
  | "All"
  | "Education"
  | "Youth Development"
  | "Entrepreneurship"
  | "Global Missions"
  | "Housing"

export interface GalleryItem {
  id: string
  src: string
  alt: string
  title: string
  category: "Education" | "Youth Development" | "Entrepreneurship" | "Global Missions" | "Housing"
  isIllustrative: boolean
  caption: string
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "All",
  "Education",
  "Youth Development",
  "Entrepreneurship",
  "Global Missions",
  "Housing",
]

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gallery-education",
    src: "/images/generated/about-mission.webp",
    alt: "Interactive adult education and community development workshop",
    title: "Community Education Workshop",
    category: "Education",
    isIllustrative: true,
    caption:
      "Multicultural community learning and strategic curriculum facilitation under Ubuntu principles.",
  },
  {
    id: "gallery-mentorship",
    src: "/images/generated/about-mentoring.jpg",
    alt: "Dedicated mentor coaching young student in learning center",
    title: "One-on-One Youth Mentorship",
    category: "Education",
    isIllustrative: true,
    caption:
      "Personalized academic coaching and study support in an inspiring educational center.",
  },
  {
    id: "gallery-youth",
    src: "/images/generated/youth-leadership.jpg",
    alt: "Youth Leadership Council and high school students in seminar",
    title: "Youth Leadership Council",
    category: "Youth Development",
    isIllustrative: true,
    caption:
      "Empowering young scholars with teamwork, civic responsibility, and college preparation strategies.",
  },
  {
    id: "gallery-entrepreneurship",
    src: "/images/generated/business-academy.jpg",
    alt: "Diverse entrepreneurs discussing business strategy around conference table",
    title: "Business Academy Mastermind",
    category: "Entrepreneurship",
    isIllustrative: true,
    caption:
      "Founders and small business leaders collaborating on scaling strategies and capital access.",
  },
  {
    id: "gallery-executive",
    src: "/images/generated/founders-initiatives.jpg",
    alt: "Executive community leaders in strategic planning town hall",
    title: "Founder's Strategic Summit",
    category: "Entrepreneurship",
    isIllustrative: true,
    caption:
      "Cross-sector civic and business leaders shaping community economic initiatives.",
  },
  {
    id: "gallery-housing",
    src: "/images/generated/housing-initiative.jpg",
    alt: "Craftsman style single family affordable home with landscaped lawn",
    title: "CHDO Single-Family Housing",
    category: "Housing",
    isIllustrative: true,
    caption:
      "Quality, energy-efficient workforce residential home developed for low-to-moderate income families.",
  },
  {
    id: "gallery-global-water",
    src: "/images/generated/global-missions.jpg",
    alt: "Solar-powered clean drinking water station in rural community",
    title: "Solar Water Station",
    category: "Global Missions",
    isIllustrative: true,
    caption:
      "Providing reliable renewable solar energy and clean drinking water access in rural communities.",
  },
  {
    id: "gallery-community-service",
    src: "/images/generated/programs-hero.webp",
    alt: "Diverse community volunteers collaborating on garden and neighborhood project",
    title: "Community Outreach & Service",
    category: "Youth Development",
    isIllustrative: true,
    caption:
      "Grassroots community collaboration embodying the core Ubuntu philosophy.",
  },
  {
    id: "gallery-hands-unity",
    src: "/images/generated/about-hero.webp",
    alt: "Overhead view of community volunteers with hands together in unity",
    title: "The Spirit of Ubuntu",
    category: "Global Missions",
    isIllustrative: true,
    caption:
      "Collective unity and mutual support: 'I am because we are.'",
  },
]
