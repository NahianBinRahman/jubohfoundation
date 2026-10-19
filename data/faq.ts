/**
 * Frequently Asked Questions (FAQ) Data for JUBOH Foundation
 *
 * NOTE: All questions and answers are strictly sourced from verified organizational
 * records, leadership profiles, and program documents. No fictional policies,
 * unverified scholarship eligibility, or fabricated deadlines are included.
 */

export interface FAQItem {
  id: string
  question: string
  answer: string
  category: "General" | "Programs" | "Engagement"
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "what-is-juboh-foundation",
    category: "General",
    question: "What is the JUBOH Foundation?",
    answer:
      "JUBOH Foundation, Inc. is a United States IRS-recognized 501(c)(3) nonprofit organization and the charitable arm of the global JUBOH Companies organization. Our mission is to educate, inspire, and empower marginalized, left-behind, and vulnerable individuals and communities.",
  },
  {
    id: "when-was-it-founded",
    category: "General",
    question: "When was the JUBOH Foundation founded?",
    answer:
      "The JUBOH Foundation was established in 2020 with the guiding motto 'Excellence in Everything.' Since its founding, the organization has remained committed to systemic community uplift and economic self-sufficiency.",
  },
  {
    id: "who-founded-the-foundation",
    category: "General",
    question: "Who founded the JUBOH Foundation?",
    answer:
      "The foundation was founded by entrepreneur and philanthropist Jalen 'JUBOH' Uboh, who serves as Founder and Chairman. Daily operational execution and community initiatives are guided by President and Executive Director Anika Carter.",
  },
  {
    id: "what-is-the-mission",
    category: "General",
    question: "What is the guiding philosophy and mission of the foundation?",
    answer:
      "Our work is anchored in the ancient African philosophy of Ubuntu ('I am because we are')—the belief that everyone's individual growth is inextricably tied to collective progress. We dedicate ourselves to creating sustainable change that uplifts, educates, and unites people across diverse backgrounds.",
  },
  {
    id: "what-programs-are-offered",
    category: "Programs",
    question: "What programmatic pillars does the foundation support?",
    answer:
      "The foundation operates five core initiatives: the JUBOH Business Academy, Youth Development, Global Missions & Sustainable Infrastructure, Affordable & Workforce Development Housing (CHDO), and Founder's Strategic Initiatives.",
  },
  {
    id: "what-is-the-business-academy",
    category: "Programs",
    question: "What is the JUBOH Business Academy?",
    answer:
      "The JUBOH Business Academy provides multi-course digital and in-person education spanning 20+ culturally relevant disciplines. It activates members through executive business masterminds, peer networking, and direct connections to capital resources through the Business Funding Network.",
  },
  {
    id: "what-does-youth-development-include",
    category: "Programs",
    question: "What initiatives are included in the Youth Development program?",
    answer:
      "Our Youth Development program encompasses the Youth Leadership Council, SAT/ACT test preparation, transformative HBCU College Campus Tours, and civic engagement workshops designed to prepare emerging generations for academic and civic leadership.",
  },
  {
    id: "what-is-the-housing-initiative",
    category: "Programs",
    question: "What is the Affordable & Workforce Development Housing program?",
    answer:
      "As a designated Community Housing Development Organization (CHDO), the foundation develops high-quality single-family homes and offers individualized counseling across four key assistance areas: First-Time Homebuyer education, Foreclosure Prevention, Homelessness Assistance, and Disaster Response Aid.",
  },
  {
    id: "how-can-i-learn-more",
    category: "Engagement",
    question: "How can I learn more or partner with the foundation?",
    answer:
      "You can explore comprehensive breakdowns of each initiative on our Programs pages, or reach out directly to our leadership and program coordination team through our Contact page.",
  },
]
