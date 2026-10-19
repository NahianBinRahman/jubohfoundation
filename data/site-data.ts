export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export interface ProgramPillar {
  id: string;
  title: string;
  category: string;
  description: string;
  href: string;
  highlights?: string[];
}

export interface LeadershipMember {
  name: string;
  role: string;
  bio?: string;
  image?: string;
}

export const SITE_CONFIG = {
  name: "JUBOH Foundation",
  tagline: "Excellence in Everything",
  legalStatus: "IRS-recognized 501(c)(3) Nonprofit Organization",
  foundedYear: 2020,
  founders: "Jalen 'JUBOH' Uboh & Anika Carter",
  email: "info@jubohfoundation.org", // placeholder standard contact
  navItems: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Programs",
      href: "/programs",
      children: [
        { label: "Business Academy", href: "/programs/business-academy" },
        { label: "Youth Development", href: "/programs/youth-development" },
        { label: "Global Missions", href: "/programs/global-missions" },
        { label: "Housing Initiative", href: "/programs/housing" },
        { label: "Founder's Initiatives", href: "/programs/founders-initiatives" },
      ],
    },
    { label: "Events", href: "/events" },
    { label: "Gallery", href: "/gallery" },
    { label: "Stories", href: "/stories" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
  socialLinks: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
  copyright: `© ${new Date().getFullYear()} JUBOH Foundation, Inc. All rights reserved.`,
};

export const MISSION_VISION = {
  mission:
    "To harness the power of the Ubuntu philosophy in fostering a more compassionate and interconnected world, JUBOH Foundation, Inc. dedicates itself to educating, inspiring, and empowering individuals and communities. We strive to nurture a network of collaborative partnerships, believing that everyone's growth is tied to collective progress. Our commitment lies in creating sustainable change that uplifts, educates, and unites people across diverse backgrounds to build a more equitable and understanding world.",
  vision:
    "Envisioning a world imbued with the spirit of Ubuntu, where every individual and community thrives in harmony, equality, and mutual respect, JUBOH Foundation, Inc. aims to be a beacon of hope and catalyst for change. Through continuous education, motivational endeavors, and empowerment programs, we aspire to instill the Ubuntu philosophy deeply within societies worldwide, leading to a more compassionate, inclusive, and sustainable future for all.",
  quote: {
    text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Dr. Maya Angelou",
  },
  pillars: [
    {
      title: "Educate",
      description:
        "Providing culturally relevant education, academic coaching, test prep, and professional academies.",
    },
    {
      title: "Inspire",
      description:
        "Fostering civic engagement, youth leadership councils, and community pride anchored in Ubuntu.",
    },
    {
      title: "Empower",
      description:
        "Connecting entrepreneurs to funding, developing affordable housing, and implementing global clean water and solar infrastructure.",
    },
  ],
};

export const LEADERSHIP: LeadershipMember[] = [
  {
    name: "Jalen 'JUBOH' Uboh",
    role: "Founder and Chairman",
    bio: "Visionary entrepreneur and civic leader who founded the JUBOH Foundation in 2020 as the philanthropic arm of JUBOH Companies to serve the left behind and most vulnerable.",
  },
  {
    name: "Anika Carter",
    role: "President and Executive Director",
    bio: "Executive leader spearheading foundation initiatives, strategic partnerships, and community empowerment operations.",
  },
];

export const CORE_PROGRAMS = [
  {
    id: "business-academy",
    title: "JUBOH Business Academy",
    subtitle: "Educate. Inspire. Empower.",
    summary:
      "A multi-course, digital and in-person programming anchored by JUBOH Foundation's culturally relevant curriculum, comprehensive business support, and funding network.",
    features: [
      {
        title: "Business Courses & Seminars",
        description:
          "20+ culturally relevant award-winning courses and seminars across real estate, education, healthcare, transportation, and more.",
      },
      {
        title: "Business Events & Networking",
        description:
          "Member activation through in-person and virtual networking events, masterminds, and collaborative forums.",
      },
      {
        title: "Business Funding Network",
        description:
          "Connecting small business entrepreneurs with financial institutions, capital resources, and grant funding.",
      },
    ],
  },
  {
    id: "housing",
    title: "Affordable & Workforce Development Housing",
    subtitle: "Community Housing Development Organization (CHDO)",
    summary:
      "Dedicated to providing affordable housing for low to moderate income families through housing development, individualized counseling, and advocacy.",
    services: [
      {
        title: "First Time Homebuyer",
        description:
          "Comprehensive guidance through HUD-approved housing counseling every step of the journey.",
      },
      {
        title: "Foreclosure Prevention",
        description:
          "Immediate advocacy and actionable intervention when experiencing financial hardship.",
      },
      {
        title: "Homelessness Assistance",
        description:
          "Compassionate support and transitional pathways for individuals and families in crisis.",
      },
      {
        title: "Disaster Assistance",
        description:
          "Rapid response and rebuilding resources for households impacted by natural or man-made disasters.",
      },
    ],
  },
  {
    id: "youth-development",
    title: "Youth Development Initiative",
    subtitle: "Cultivating the Next Generation of Global Leaders",
    summary:
      "A comprehensive initiative designed to empower, educate, and elevate young individuals through targeted leadership, academic enrichment, and civic engagement.",
    initiatives: [
      {
        title: "Youth Leadership Council",
        description:
          "Dynamic youth leaders spearheading local community projects under the nurturing Ubuntu philosophy.",
      },
      {
        title: "SAT / ACT College Test Prep",
        description:
          "Personalized coaching and exam strategies opening pathways to higher education and scholarships.",
      },
      {
        title: "HBCU College Tours",
        description:
          "Immersive tours celebrating the heritage, academic excellence, and opportunities of Historically Black Colleges and Universities.",
      },
      {
        title: "Civic Engagement",
        description:
          "Workshops and hands-on civic experiences promoting active advocacy, democracy, and community responsibility.",
      },
    ],
  },
  {
    id: "global-missions",
    title: "Global Missions & Impact Centers",
    subtitle: "Taking Ubuntu to the Four Corners of the Globe",
    summary:
      "International outreach arm operating through Global Ambassadors and Global Impact Centers to build sustainable communities worldwide.",
    pillars: [
      {
        title: "Solar, Infrastructure & Water",
        description:
          "Sustainable clean water access, solar power grids, and essential infrastructure for underserved villages.",
      },
      {
        title: "Global Youth Mentorship",
        description:
          "International educational pipelines and mentorship empowering youth with tools for self-reliance.",
      },
      {
        title: "Global Entrepreneurship",
        description:
          "Catalyzing innovation and grassroots micro-enterprises to create resilient local economies.",
      },
    ],
  },
];
