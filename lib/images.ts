/**
 * Centralized Image Asset Configuration for Juboh Foundation
 * Prevents hardcoded paths, enforces consistent alt text, and tracks illustrative AI vs authentic imagery.
 */

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  isIllustrative?: boolean;
  credit?: string;
}

export const IMAGES = {
  // Brand & Identity
  logo: {
    src: "/images/juboh-spark-logo.svg",
    alt: "JUBOH Foundation Emblem - Excellence in Everything",
    isIllustrative: false,
  },

  // Hero Photography
  heroCommunity: {
    src: "/images/generated/hero-community.jpg",
    alt: "Diverse community members and mentors collaborating outdoors on community development",
    width: 1920,
    height: 1080,
    isIllustrative: true,
  },

  homepageHero: {
    src: "/images/generated/homepage-hero.jpg",
    alt: "Inspiring multi-generational community members and families gathering outdoors at sunset",
    width: 1920,
    height: 1080,
    isIllustrative: true,
  },

  // About Section Photography
  aboutHero: {
    src: "/images/generated/about-hero.webp",
    alt: "Overhead view of diverse community volunteers with hands together in unity and Ubuntu spirit",
    width: 1920,
    height: 1080,
    isIllustrative: true,
  },

  aboutMission: {
    src: "/images/generated/about-mission.webp",
    alt: "Educator facilitating an engaging multicultural community learning and leadership workshop",
    width: 1600,
    height: 1200,
    isIllustrative: true,
  },

  aboutMentoring: {
    src: "/images/generated/about-mentoring.jpg",
    alt: "Dedicated community mentor guiding an attentive young student in a modern educational center",
    width: 1600,
    height: 1200,
    isIllustrative: true,
  },

  // Program Photography
  programs: {
    businessAcademy: {
      src: "/images/generated/business-academy.jpg",
      alt: "JUBOH Business Academy students and founders in workshop",
      width: 1898,
      height: 600,
      isIllustrative: false,
    },
    youthDevelopment: {
      src: "/images/generated/youth-leadership.jpg",
      alt: "Youth Leadership Council and students in an academic workshop",
      width: 1920,
      height: 1080,
      isIllustrative: true,
    },
    housingInitiative: {
      src: "/images/generated/housing-initiative.jpg",
      alt: "Newly built high-quality affordable craftsman single-family home developed by CHDO initiative",
      width: 1600,
      height: 1200,
      isIllustrative: true,
    },
    globalMissions: {
      src: "/images/generated/global-missions.jpg",
      alt: "Community clean water station and solar micro-grid infrastructure in a developing village",
      width: 1600,
      height: 1200,
      isIllustrative: true,
    },
    foundersInitiatives: {
      src: "/images/generated/founders-initiatives.jpg",
      alt: "Nonprofit community executive leaders and strategic partners in a town hall meeting",
      width: 1600,
      height: 1200,
      isIllustrative: true,
    },
  },

  // Donation & Giving
  donation: {
    hero: {
      src: "/images/generated/donate-hero.webp",
      alt: "Diverse multigenerational community and families sharing an authentic positive moment at sunset",
      width: 1920,
      height: 1080,
      isIllustrative: true,
    },
    community: {
      src: "/images/generated/donate-community.webp",
      alt: "Community members collaborating with smiles during an empowering service initiative",
      width: 1600,
      height: 1200,
      isIllustrative: true,
    },
  },
  donationGiving: {
    src: "/images/generated/donation-giving.jpg",
    alt: "Compassionate hands receiving golden grain and seeds in an uplifting humanitarian community initiative",
    width: 1920,
    height: 1080,
    isIllustrative: true,
  },

  // Events Photography
  events: {
    hero: {
      src: "/images/generated/events-hero-v2.webp",
      alt: "Diverse community leaders and members collaborating in a candid workshop gathering",
      width: 1920,
      height: 1080,
      isIllustrative: true,
    },
    businessNetworking: {
      src: "/images/generated/business-events-networking-v2.webp",
      alt: "Diverse entrepreneurs and professionals engaging in a business networking workshop and mastermind",
      width: 1600,
      height: 1100,
      isIllustrative: true,
    },
  },

  // Stories Photography
  stories: {
    hero: {
      src: "/images/generated/stories-hero.webp",
      alt: "Diverse community volunteers and educators in a collaborative workshop and mentoring session",
      width: 1920,
      height: 1080,
      isIllustrative: true,
    },
  },

  // FAQ Photography
  faq: {
    hero: {
      src: "/images/generated/faq-hero.webp",
      alt: "Nonprofit community advisor having a friendly, supportive conversation in a welcoming modern center",
      width: 1920,
      height: 1080,
      isIllustrative: true,
    },
  },

  // Contact Photography
  contact: {
    hero: {
      src: "/images/generated/contact-hero.webp",
      alt: "Welcoming nonprofit team members and advisors collaborating around a meeting table",
      width: 1920,
      height: 1080,
      isIllustrative: true,
    },
  },

  // Authentic Leadership Portraits (Awaiting high-res master replacements from user)
  founders: {
    jalenUboh: {
      src: "/images/leadership/jalen-uboh.jpg",
      alt: "Jalen 'JUBOH' Uboh - Founder & Chairman of JUBOH Foundation",
      isIllustrative: false,
    },
    anikaCarter: {
      src: "/images/leadership/anika-carter.jpg",
      alt: "Anika Carter - President & Executive Director of JUBOH Foundation",
      isIllustrative: false,
    },
  },
} as const;

export default IMAGES;
