# Implementation Plan — Juboh Foundation Web Platform

This document details the frontend architecture, component hierarchy, page routing, and phased roadmap for rebuilding the Juboh Foundation website.

---

## 1. Technical Architecture & Principles

- **Framework**: Next.js App Router (16+) with TypeScript.
- **Styling**: Tailwind CSS (v4) with CSS variables matching the Humanite color token system (`#222222`, `#F6B83E`, `#F8F6F1`, `#FFFFFF`, `#777777`).
- **Typography**: Google Fonts loaded via `next/font/google` (`Playfair Display`, `DM Sans`, `Caveat`).
- **Components**: Reusable, modular components adhering to shadcn/ui principles and accessible ARIA standards.
- **Animations**: Restrained, elegant micro-interactions powered by `motion`.
- **Forms**: Type-safe validation using `react-hook-form` and `zod`.

---

## 2. Directory Structure

```
f:/Project/JUBOH FOUNDATION/
├── app/
│   ├── layout.tsx              # Root layout with Google Fonts, metadata, and providers
│   ├── globals.css             # Design tokens, CSS variables, utility classes
│   ├── page.tsx                # Homepage (Full Humanite-inspired layout)
│   ├── about/
│   │   └── page.tsx            # About Us, Founders, Ubuntu philosophy, Mission & Vision
│   ├── programs/
│   │   ├── page.tsx            # Programs Hub (4 core pillars)
│   │   ├── business-academy/
│   │   │   └── page.tsx        # JUBOH Business Academy detail page
│   │   ├── housing/
│   │   │   └── page.tsx        # Affordable & Workforce Housing (CHDO)
│   │   ├── youth-development/
│   │   │   └── page.tsx        # Youth Development, SAT Prep, HBCU Tours
│   │   └── global-missions/
│   │   │   └── page.tsx        # Global Missions & Ambassadorship
│   ├── events/
│   │   └── page.tsx            # Events listing with date badges
│   ├── causes/
│   │   └── page.tsx            # Causes & Initiatives fundraising overview
│   ├── donate/
│   │   └── page.tsx            # Dedicated Giving page (100% tax-deductible 501(c)(3))
│   ├── contact/
│   │   └── page.tsx            # Contact information, inquiry form
│   └── faq/
│       └── page.tsx            # Foundation FAQs and support accordion
├── components/
│   ├── layout/
│   │   ├── top-bar.tsx         # Dark utility header (contact + donate CTA)
│   │   ├── navbar.tsx          # White sticky navigation with dropdowns
│   │   ├── mobile-nav.tsx      # Slide-out responsive mobile navigation
│   │   └── footer.tsx          # 4-column charcoal footer + newsletter
│   ├── ui/
│   │   ├── button.tsx          # Multi-variant button system (Gold, Charcoal, Outlines)
│   │   ├── card.tsx            # Clean elevated card containers
│   │   ├── progress.tsx        # Fundraising progress bar with percentage badge
│   │   ├── badge.tsx           # Status and category badges
│   │   └── accordion.tsx       # Accessible FAQ accordion
│   ├── common/
│   │   ├── section-header.tsx  # Script eyebrow + serif heading + subtext
│   │   ├── video-modal.tsx     # Accessible modal video popup
│   │   └── stat-counter.tsx    # Animated metric counter
│   ├── home/
│   │   ├── hero-section.tsx    # Full-width photo hero with dual CTAs
│   │   ├── feature-cards.tsx   # 3 overlapping hero action cards
│   │   ├── about-preview.tsx   # Staggered image layout + Ubuntu mission checklist
│   │   ├── featured-causes.tsx # Cause cards with progress bars
│   │   ├── impact-counter.tsx  # Charcoal 4-metric counter + quote banner
│   │   ├── quick-donation.tsx  # Quick giving form + contact details
│   │   ├── upcoming-events.tsx # Event grid with date badges
│   │   ├── volunteer-cta.tsx   # Full-width volunteer banner
│   │   └── news-section.tsx    # Editorial blog/updates grid
├── data/
│   └── site-data.ts            # Authentic Juboh Foundation data (Programs, Leadership, Mission)
├── docs/
│   ├── content-inventory.md    # Verified content extracted from current site
│   ├── design-reference.md     # Visual guidelines from Humanite template
│   └── implementation-plan.md  # Architectural roadmap
├── lib/
│   └── utils.ts                # cn utility function
└── public/
    └── images/                 # Optimized local photography and assets
```

---

## 3. Phased Execution Roadmap

### Phase 1: Foundation, Tokens & Base Layout (Current Step)
- [x] Initialize Next.js with App Router, TypeScript, Tailwind CSS.
- [x] Set up shadcn/ui and install core utilities (`lucide-react`, `motion`, `zod`, `react-hook-form`).
- [x] Configure design tokens in `globals.css` (Charcoal, Gold, Warm Ivory, Muted Text).
- [x] Implement Google Fonts (`Playfair Display`, `DM Sans`, `Caveat`).
- [x] Build multi-variant `Button` component with hover micro-interactions.
- [x] Build data store in `data/site-data.ts`.
- [x] Produce complete documentation: `content-inventory.md`, `design-reference.md`, `implementation-plan.md`.
- [ ] Create layout scaffolding (`TopBar`, `Navbar`, `Footer`).
- [ ] Verify local dev server without errors.

### Phase 2: Core Layout Scaffolding & Shared Components
- Build `TopBar` component with email, phone, and gold `DONATE NOW` button.
- Build sticky `Navbar` with brand logo, desktop dropdowns, and responsive `MobileNav` drawer.
- Build `Footer` with 4-column layout, quick links, authentic 501(c)(3) statement, and newsletter subscription form.
- Build `SectionHeader` with stylized script eyebrow and serif title.

### Phase 3: Homepage Build
- **Hero Section**: High-contrast typography (*"Welcome to the JUBOH Foundation"*, *"Excellence in Everything"*), dual CTAs.
- **Overlapping Action Cards**: 3 floating cards (*Become an Ambassador*, *Explore Programs*, *Make a 100% Tax-Deductible Donation*).
- **About & Ubuntu Section**: Overview of 2020 foundation founding, Jalen Uboh & Anika Carter, Ubuntu philosophy, and Maya Angelou quote.
- **Programs & Causes Showcase**: Interactive cards for Business Academy, Affordable Housing (CHDO), Youth Development, and Global Missions with progress indicators.
- **Impact Counter Section**: Dark charcoal background with key metrics and quote card.
- **Quick Donation / Inquiry Box**: Interactive giving form with amount presets ($25, $50, $100, $250, custom) and designation selector.
- **Upcoming Events & Seminars**: Event cards featuring date badges, locations, and details.
- **Volunteer & Ambassador CTA**: Full-width high-contrast recruitment banner.

### Phase 4: Sub-Pages Implementation
- `app/about/page.tsx`: Leadership profiles (Founder & Chairman Jalen Uboh, President Anika Carter), detailed Ubuntu narrative, Mission & Vision statements.
- `app/programs/page.tsx`: Full programs hub with dedicated tabs/sections for Business Academy, Housing Initiative, Youth Development, and Global Missions.
- `app/donate/page.tsx`: Dedicated donation experience explaining 501(c)(3) status, tax-deductibility, giving options, and program allocation.
- `app/events/page.tsx`: Full calendar/list of foundation webinars, college tours, and networking events.

### Phase 5: Verification & Quality Assurance
- Cross-browser responsive testing (Mobile, Tablet, Desktop).
- Zero console and TypeScript compilation errors.
- Visual alignment check against Humanite template references.
- Accessibility review (ARIA tags, contrast compliance, keyboard navigability).
