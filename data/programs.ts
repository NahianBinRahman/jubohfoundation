import { IMAGES } from "@/lib/images"

export interface ProgramInitiative {
  title: string
  subtitle?: string
  description: string
  iconName?: string
  imageSrc?: string
  imageAlt?: string
  details?: string[]
}

export interface AssistanceCategory {
  title: string
  subtitle: string
  description: string
  actionLabel?: string
  actionHref?: string
}

export interface ProgramItem {
  id: string
  slug: string
  title: string
  tagline: string
  category: string
  overview: string
  fullDescription: string[]
  heroImage: string
  heroImageAlt: string
  featuredImage: string
  featuredImageAlt: string
  initiativesTitle: string
  initiativesSubtitle: string
  initiatives: ProgramInitiative[]
  assistanceCategories?: AssistanceCategory[]
  galleryImages?: { src: string; alt: string; caption?: string }[]
  keyFocus: string[]
  callToAction: {
    heading: string
    subheading: string
    buttonText: string
    buttonHref: string
  }
}

export const PROGRAMS_DATA: Record<string, ProgramItem> = {
  "business-academy": {
    id: "business-academy",
    slug: "business-academy",
    title: "JUBOH Business Academy",
    tagline: "Educate. Inspire. Empower.",
    category: "Education & Entrepreneurship",
    overview:
      "A multi-course digital and in-person initiative anchored by JUBOH Foundation's culturally relevant curriculum, comprehensive business support, and funding network.",
    fullDescription: [
      "The JUBOH Business Academy is designed to bridge the opportunity gap for underserved entrepreneurs and aspiring business owners. By combining culturally attuned educational content with actionable execution frameworks, we empower founders to launch, scale, and sustain impactful enterprises.",
      "Our curriculum addresses real-world operational challenges across diverse sectors including real estate development, healthcare services, transportation, technology, and modern commerce. Through our robust business funding network, we connect entrepreneurs directly to financial institutions, investors, and grant programs.",
    ],
    heroImage: IMAGES.programs.businessAcademy.src,
    heroImageAlt: "Diverse entrepreneurs and business leaders in an executive strategy workshop",
    featuredImage: IMAGES.programs.businessAcademy.src,
    featuredImageAlt: "Small business founders collaborating in the JUBOH Business Academy",
    initiativesTitle: "Academy Core Pillars",
    initiativesSubtitle: "Comprehensive curriculum, peer masterminds, and direct capital networks.",
    initiatives: [
      {
        title: "Business Courses & Seminars",
        subtitle: "20+ Sector-Specific Curriculums",
        description:
          "The JUBOH Business Academy features 20+ culturally relevant, award-winning courses and seminars covering real estate, education, healthcare, transportation, and finance.",
        details: [
          "Real Estate Investment & Property Management",
          "Healthcare Practice Administration & Compliance",
          "Transportation, Logistics & Fleet Operations",
          "Small Business Accounting, Tax Strategy & Cash Flow",
        ],
      },
      {
        title: "Business Events & Networking",
        subtitle: "In-Person Masterminds & Virtual Roundtables",
        description:
          "JUBOH Business Academy activates its members through in-person and virtual mastermind events, structured networking opportunities, and executive roundtables.",
        details: [
          "Monthly Founder Masterminds and Peer Circles",
          "Quarterly Executive Networking Mixers",
          "Virtual Strategy Sessions with Industry Veterans",
          "Collaborative Pitch & Growth Workshops",
        ],
      },
      {
        title: "Business Funding Network",
        subtitle: "Connecting Founders to Capital Resources",
        description:
          "Funding is the backbone of any business—big or small. JUBOH Foundation works with small business entrepreneurs to connect them with the right organizations, banks, and resources to obtain funding.",
        details: [
          "Commercial Lending & CDFI Application Support",
          "Micro-Grant & Working Capital Guidance",
          "Investor Readiness & Pitch Deck Coaching",
          "Banking Relationship Navigation",
        ],
      },
    ],
    keyFocus: [
      "Culturally Grounded Curriculum",
      "Executive Mentorship Circles",
      "Direct Capital Connections",
      "Multi-Sector Training",
    ],
    callToAction: {
      heading: "Advance Your Business Journey",
      subheading:
        "Connect with the JUBOH Business Academy to explore courses, participate in founder events, or access our business funding network.",
      buttonText: "Inquire About Courses",
      buttonHref: "/contact?subject=Business%20Academy",
    },
  },

  "youth-development": {
    id: "youth-development",
    slug: "youth-development",
    title: "Youth Development",
    tagline: "Cultivating Tomorrow's Global Leaders",
    category: "Youth & Higher Education",
    overview:
      "A comprehensive initiative designed to empower, educate, and elevate young individuals through targeted leadership, academic enrichment, college tours, and civic responsibility.",
    fullDescription: [
      "The JUBOH Foundation Youth Development Program prepares young scholars to navigate higher education, professional careers, and community leadership with dignity and resilience. We believe every young person possesses limitless potential when provided with personalized mentorship and equitable access to academic resources.",
      "Anchored in the nurturing spirit of Ubuntu, our initiatives emphasize that personal achievement finds its highest fulfillment in service to the collective community. From rigorous standardized test coaching to immersive college campus tours, we guide students every step of their pathway.",
    ],
    heroImage: IMAGES.programs.youthDevelopment.src,
    heroImageAlt: "Youth Leadership Council and high school students in an academic workshop",
    featuredImage: IMAGES.programs.youthDevelopment.src,
    featuredImageAlt: "Empowered young scholars collaborating on academic goals",
    initiativesTitle: "Four Youth Initiatives",
    initiativesSubtitle: "Targeted programs elevating leadership, college access, and civic empowerment.",
    initiatives: [
      {
        title: "Youth Leadership Council",
        subtitle: "Empowering Young Community Leaders",
        description:
          "A dynamic group empowering young leaders through community service projects, fostering leadership, teamwork, and civic responsibility, all within the nurturing spirit of Ubuntu.",
        details: [
          "Student-Led Grassroots Community Projects",
          "Peer Mentorship and Conflict Resolution",
          "Public Speaking & Executive Communication",
          "Ubuntu Ethics and Collective Leadership",
        ],
      },
      {
        title: "SAT / ACT College Test Prep",
        subtitle: "Personalized Coaching for Higher Education",
        description:
          "Equips students with essential strategies and personalized coaching to excel in crucial standardized exams, opening doors to higher education, scholarships, and career success.",
        details: [
          "Diagnostic Testing & Personalized Study Roadmaps",
          "Math, Reading & Writing Strategy Sessions",
          "Timed Practice Exam Simulations",
          "College Admissions Essay & Scholarship Guidance",
        ],
      },
      {
        title: "HBCU College Tours",
        subtitle: "Heritage, Excellence & Educational Immersion",
        description:
          "Explore, inspire, and connect with our HBCU College Tours, designed to immerse students in the heritage, excellence, and diverse opportunities of Historically Black Colleges and Universities.",
        details: [
          "Multi-Day Campus Visits to Renowned HBCUs",
          "Direct Engagement with Admissions Officers & Faculty",
          "Undergraduate Student Panels & Campus Culture",
          "Financial Aid & Scholarship Information Sessions",
        ],
      },
      {
        title: "Civic Engagement",
        subtitle: "Active Citizenship & Social Advocacy",
        description:
          "Cultivates informed, active citizens through workshops and hands-on experiences, fostering community involvement, voting awareness, and societal contribution under Ubuntu principles.",
        details: [
          "Voter Literacy & Democratic Participation Workshops",
          "Town Hall Discussions on Local Community Policies",
          "Volunteer Service Days with Regional Nonprofits",
          "Advocacy and Grassroots Organizing Skills",
        ],
      },
    ],
    keyFocus: [
      "Youth Leadership Council",
      "Standardized Test Preparation",
      "HBCU Educational Tours",
      "Active Civic Responsibility",
    ],
    callToAction: {
      heading: "Empower a Young Scholar Today",
      subheading:
        "Partner with our Youth Development team to sponsor college test prep scholarships, chaperone college tours, or enroll a student.",
      buttonText: "Enroll or Volunteer",
      buttonHref: "/contact?subject=Youth%20Development",
    },
  },

  "global-missions": {
    id: "global-missions",
    slug: "global-missions",
    title: "Global Missions",
    tagline: "Taking Ubuntu to the Four Corners of the Globe",
    category: "International Outreach & Infrastructure",
    overview:
      "The international outreach and community engagement arm of JUBOH Foundation, accomplished through Global Ambassadors and Global Impact Centers worldwide.",
    fullDescription: [
      "JUBOH Foundation Global Mission extends our commitment to human dignity beyond geographic borders. Operating through trained Global Ambassadors and localized Global Impact Centers, we partner with grassroots communities to implement sustainable, locally owned solutions.",
      "Our work focuses on foundational human needs: installing solar energy grids for reliable power, establishing clean drinking water infrastructure, equipping local youth with educational mentorship, and catalyzing micro-entrepreneurship for enduring economic self-reliance.",
    ],
    heroImage: IMAGES.programs.globalMissions.src,
    heroImageAlt: "Solar-powered community clean water installation in a rural village",
    featuredImage: IMAGES.programs.globalMissions.src,
    featuredImageAlt: "Sustainable infrastructure and community water station",
    initiativesTitle: "Global Mission Pillars",
    initiativesSubtitle: "Sustainable solutions empowering villages and fostering lasting positive change.",
    initiatives: [
      {
        title: "Solar, Infrastructure & Water",
        subtitle: "Renewable Power & Clean Water Access",
        description:
          "Global initiatives spanning solar energy, water access, and community infrastructure to provide sustainable solutions, empower communities, and foster positive change worldwide.",
        details: [
          "Solar-Powered Deep Water Well Installations",
          "Off-Grid Community Micro-Power Stations",
          "Rainwater Catchment & Filtration Systems",
          "Community Facility Renovation & Construction",
        ],
      },
      {
        title: "Global Youth Development",
        subtitle: "International Mentorship & Learning",
        description:
          "Prioritizes mentorship and academic guidance to empower young individuals globally, fostering personal growth and creating opportunities for a brighter future.",
        details: [
          "Cross-Border Educational Partnerships",
          "Digital Literacy & Vocational Skills Training",
          "Leadership Mentorship Pipelines",
          "School Supply & Book Resource Distribution",
        ],
      },
      {
        title: "Global Entrepreneurship",
        subtitle: "Catalyzing Grassroots Innovation",
        description:
          "Catalyzes innovation and enterprise support, driving sustainable development and economic self-reliance in underserved communities worldwide.",
        details: [
          "Micro-Enterprise Seed Capital & Equipment",
          "Agricultural & Cooperative Business Training",
          "Market Access & Trade Networking",
          "Financial Literacy & Cooperative Banking",
        ],
      },
      {
        title: "Global Ambassadorship Program",
        subtitle: "Instruments of Peace & Change",
        description:
          "Become a JUBOH Foundation Global Ambassador and become an instrument of positive change, cultural exchange, and sustainable peace throughout the world.",
        details: [
          "Diplomatic & Humanitarian Engagement Training",
          "Field Mission Deployments & Project Auditing",
          "Cultural Exchange & Cross-Community Dialogue",
          "Global Ubuntu Advocacy & Storytelling",
        ],
      },
    ],
    keyFocus: [
      "Solar Micro-Grids",
      "Clean Drinking Water Access",
      "Global Ambassadorship Program",
      "Micro-Enterprise Development",
    ],
    callToAction: {
      heading: "Become a Global Ambassador",
      subheading:
        "Join our international network of envoys and help deliver solar power, clean water, and Ubuntu philosophy across the globe.",
      buttonText: "Apply as Global Ambassador",
      buttonHref: "/contact?subject=Global%20Ambassador",
    },
  },

  "housing": {
    id: "housing",
    slug: "housing",
    title: "Affordable & Workforce Development Housing",
    tagline: "Community Housing Development Organization (CHDO)",
    category: "Housing & Community Development",
    overview:
      "A nonprofit Community Housing Development Organization (CHDO) dedicated to providing affordable housing for low to moderate income families through housing development, individualized counseling, and advocacy.",
    fullDescription: [
      "The JUBOH Foundation Housing Initiative is a certified nonprofit Community Housing Development Organization (CHDO). We believe stable, quality housing is the cornerstone of family security, economic mobility, and community health.",
      "We specialize in developing single-family homes and workforce residential communities for low-to-moderate income households. In addition to physical development, our counselors provide comprehensive HUD-approved guidance for first-time homebuyers, foreclosure prevention, homelessness assistance, and disaster recovery.",
    ],
    heroImage: IMAGES.programs.housingInitiative.src,
    heroImageAlt: "Newly constructed modern craftsman single-family affordable home",
    featuredImage: IMAGES.programs.housingInitiative.src,
    featuredImageAlt: "CHDO single-family home development with landscaped front yard",
    initiativesTitle: "Housing Assistance Services",
    initiativesSubtitle: "Need housing assistance? HUD-approved counseling and individual advocacy.",
    initiatives: [
      {
        title: "Housing Development & Construction",
        subtitle: "Building Quality Single-Family Homes",
        description:
          "Developing modern, energy-efficient single-family residences in revitalized suburban and urban communities to expand affordable homeownership.",
        details: [
          "Craftsman-Style Single-Family Home Construction",
          "Energy-Efficient Building Standards & Modern Layouts",
          "Neighborhood Revitalization & Infill Development",
          "Community Groundbreakings & Homebuyer Dedications",
        ],
      },
      {
        title: "HUD-Approved Housing Counseling",
        subtitle: "Guidance Every Step of the Way",
        description:
          "Individualized financial counseling, credit restoration, and pre-purchase education preparing families for successful long-term homeownership.",
        details: [
          "Budget Analysis & Credit Score Optimization",
          "Down Payment Assistance (DPA) Grant Navigation",
          "Mortgage Qualification & Lender Negotiation",
          "Post-Purchase Home Maintenance Education",
        ],
      },
    ],
    assistanceCategories: [
      {
        title: "First Time Homebuyer",
        subtitle: "HUD-Approved Counseling",
        description:
          "Buying a home is exciting, but it can also be overwhelming. It doesn't have to be. Your HUD-approved housing counseling agency can be available every step of the way.",
        actionLabel: "Homebuyer Counseling",
        actionHref: "/contact?subject=First%20Time%20Homebuyer",
      },
      {
        title: "Foreclosure Prevention",
        subtitle: "Hardship Advocacy & Relief",
        description:
          "You worked hard to save and purchase a home—but financial hardships can happen to anyone and now you've fallen behind. Your first step now should be to contact a HUD-approved agency.",
        actionLabel: "Foreclosure Assistance",
        actionHref: "/contact?subject=Foreclosure%20Assistance",
      },
      {
        title: "Homelessness Assistance",
        subtitle: "Crisis Intervention & Shelter",
        description:
          "One crisis can change someone's world. The best of us can be battered by misfortune, illness, disability, personal trauma—by life. And too often, homelessness can be the result.",
        actionLabel: "Homelessness Support",
        actionHref: "/contact?subject=Homelessness%20Assistance",
      },
      {
        title: "Disaster Assistance",
        subtitle: "Rapid Housing Recovery",
        description:
          "When disaster strikes, whether natural or man-made, households and businesses alike find themselves facing monumental challenges and making life-changing choices in the blink of an eye.",
        actionLabel: "Disaster Relief",
        actionHref: "/contact?subject=Disaster%20Assistance",
      },
    ],
    keyFocus: [
      "Certified CHDO Organization",
      "First-Time Homebuyer Counseling",
      "Foreclosure Prevention Advocacy",
      "Disaster & Emergency Housing",
    ],
    callToAction: {
      heading: "Need Housing Assistance?",
      subheading:
        "Connect with our certified housing counseling team for individualized guidance, homebuyer preparation, or foreclosure intervention.",
      buttonText: "Request Housing Counseling",
      buttonHref: "/contact?subject=Housing%20Assistance",
    },
  },

  "founders-initiatives": {
    id: "founders-initiatives",
    slug: "founders-initiatives",
    title: "Founder's Initiatives",
    tagline: "Visionary Leadership for Systemic Change",
    category: "Strategic Leadership & Partnerships",
    overview:
      "Strategic outreach programs, corporate and civic partnerships, and high-impact collaborative masterminds championed by founder Jalen 'JUBOH' Uboh.",
    fullDescription: [
      "The Founder's Initiatives represent the strategic vanguard of the JUBOH Foundation, guided directly by Founder and Chairman Jalen 'JUBOH' Uboh. These initiatives forge high-level collaborative partnerships with municipal leaders, financial institutions, and civic organizations to dismantle barriers to generational wealth.",
      "By coordinating cross-sector alliances, Founder's Initiatives activate the Business Academy, drive capital into underserved communities, and orchestrate visionary community forums designed to inspire transformative collective progress.",
    ],
    heroImage: IMAGES.programs.foundersInitiatives.src,
    heroImageAlt: "Civic executive leaders and strategic partners in a collaborative forum",
    featuredImage: IMAGES.programs.foundersInitiatives.src,
    featuredImageAlt: "Town hall strategic initiative meeting led by JUBOH leadership",
    initiativesTitle: "Strategic Focus Areas",
    initiativesSubtitle: "Cross-sector initiatives expanding capital access and collaborative alliances.",
    initiatives: [
      {
        title: "JUBOH Business Academy Synergy",
        subtitle: "Comprehensive Entrepreneurship Pipeline",
        description:
          "Anchoring entrepreneurship education with 20+ sector-specific courses, executive mentorship, and culturally attuned frameworks that build sustainable wealth.",
        details: [
          "Executive Leadership Masterminds",
          "Cross-Sector Curriculum Integration",
          "Founders Advisory Circle",
        ],
      },
      {
        title: "Business Events & Executive Networking",
        subtitle: "Activating Collaborative Coalitions",
        description:
          "Activating members and regional leaders through in-person and virtual networking events, masterminds, and strategic forums that foster deal-making and joint ventures.",
        details: [
          "Annual Foundation Leadership Summit",
          "B2B Partnership Exchange Forums",
          "Civic & Corporate Roundtable Series",
        ],
      },
      {
        title: "Business Funding Network Alliances",
        subtitle: "Strategic Capital Intermediation",
        description:
          "Connecting high-potential minority and underrepresented entrepreneurs with commercial lenders, venture partners, and CDFI capital pools.",
        details: [
          "Institutional Banking Coalitions",
          "Community Capital Access Funds",
          "Strategic Philanthropic Grants",
        ],
      },
    ],
    keyFocus: [
      "Founder-Led Vision",
      "Institutional Alliances",
      "Capital Intermediation",
      "Executive Masterminds",
    ],
    callToAction: {
      heading: "Collaborate With Foundation Leadership",
      subheading:
        "Explore corporate sponsorship, strategic civic partnerships, or joint community development initiatives with Founder Jalen Uboh and the executive team.",
      buttonText: "Inquire About Partnerships",
      buttonHref: "/contact?subject=Founders%20Initiatives",
    },
  },
}

export const ALL_PROGRAMS = Object.values(PROGRAMS_DATA)
