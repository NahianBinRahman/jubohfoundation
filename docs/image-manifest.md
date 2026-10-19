# Visual Asset Manifest — Juboh Foundation

**Project:** JUBOH Foundation  
**Phase:** 11 — Complete Premium UI/UX Refinement  
**Standard:** Editorial Nonprofit Documentary Realism & WCAG AAA Accessibility

---

## 1. Brand Identity Assets

| Asset Name | Target Path | Type | Notes |
| :--- | :--- | :--- | :--- |
| **JUBOH Spark Star Emblem** | `/images/juboh-spark-logo.svg` | SVG / Component | 8-point geometric spark icon ("Excellence in Everything") |
| **JUBOH Business Academy Logo** | `/images/juboh-business-academy.svg` | Component | Styled typography with signature serif font and gold spark |

---

## 2. Photographic Asset Inventory & Resolution Audit

| File Name | Path | Aspect Ratio | Usage Route | Attribution / Type | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `homepage-hero.jpg` | `/images/generated/homepage-hero.jpg` | 16:9 (1920x1080) | `/` (Hero) | Illustrative Documentary | Verified |
| `hero-community.jpg` | `/images/generated/hero-community.jpg` | 16:9 (1920x1080) | `/` (Impact Statement) | Illustrative Documentary | Verified |
| `about-hero.webp` | `/images/generated/about-hero.webp` | 16:9 (1920x1080) | `/about`, `/privacy`, `/terms` | Illustrative Documentary | Verified |
| `about-mission.webp` | `/images/generated/about-mission.webp` | 4:3 (1600x1200) | `/about` (Mission) | Illustrative Documentary | Verified |
| `about-mentoring.jpg` | `/images/generated/about-mentoring.jpg` | 4:3 (1600x1200) | `/` (About Preview) | Illustrative Documentary | Verified |
| `programs-hero.webp` | `/images/generated/programs-hero.webp` | 16:9 (1920x1080) | `/programs` (Hero) | Illustrative Documentary | Verified |
| `business-academy.jpg` | `/images/generated/business-academy.jpg` | 4:3 (1600x1200) | `/programs/business-academy` | Illustrative Documentary | Verified |
| `youth-leadership.jpg` | `/images/generated/youth-leadership.jpg` | 16:9 (1920x1080) | `/programs/youth-development` | Illustrative Documentary | Verified |
| `housing-initiative.jpg` | `/images/generated/housing-initiative.jpg` | 4:3 (1600x1200) | `/programs/housing` | Illustrative Documentary | Verified |
| `global-missions.jpg` | `/images/generated/global-missions.jpg` | 4:3 (1600x1200) | `/programs/global-missions` | Illustrative Documentary | Verified |
| `founders-initiatives.jpg` | `/images/generated/founders-initiatives.jpg` | 4:3 (1600x1200) | `/programs/founders-initiatives` | Illustrative Documentary | Verified |
| `gallery-hero.webp` | `/images/generated/gallery-hero.webp` | 16:9 (1920x1080) | `/gallery` (Hero) | Illustrative Documentary | Verified |
| `events-hero-v2.webp` | `/images/generated/events-hero-v2.webp` | 16:9 (1920x1080) | `/events` (Hero) | Illustrative Documentary | Verified |
| `business-events-networking-v2.webp` | `/images/generated/business-events-networking-v2.webp` | 16:11 (1600x1100) | `/events` (Card) | Illustrative Documentary | Verified |
| `stories-hero.webp` | `/images/generated/stories-hero.webp` | 16:9 (1920x1080) | `/stories` (Hero) | Illustrative Documentary | Verified |
| `faq-hero.webp` | `/images/generated/faq-hero.webp` | 16:9 (1920x1080) | `/faq` (Hero) | Illustrative Documentary | Verified |
| `contact-hero.webp` | `/images/generated/contact-hero.webp` | 16:9 (1920x1080) | `/contact` (Hero) | Illustrative Documentary | Verified |
| `donate-hero.webp` | `/images/generated/donate-hero.webp` | 16:9 (1920x1080) | `/donate` (Hero) | Illustrative Documentary | Verified |
| `donate-community.webp` | `/images/generated/donate-community.webp` | 4:3 (1600x1200) | `/donate` (Impact) | Illustrative Documentary | Verified |
| `donation-giving.jpg` | `/images/generated/donation-giving.jpg` | 16:9 (1920x1080) | `/` (Donation CTA) | Illustrative Documentary | Verified |

---

## 3. Authentic Foundation Leadership Protocol

* **Strict Policy:** Synthetic or AI-generated portraits of Chairman Jalen "JUBOH" Uboh or Executive Director Anika Carter are strictly prohibited.
* **Current Presentation:** Leadership profiles are rendered using high-elegance typographic cards with executive badges (`Shield`, `Award`), official organizational titles, and authentic biographical milestones.
* **Master High-Res Replacements:** Official studio portraits will be placed in `/public/images/leadership/` upon final client asset delivery.

---

## 4. Visual Quality Guidelines

1. **Resolution & Density:** All hero banners are minimum 1920px wide; editorial images are minimum 1600px wide with high pixel density.
2. **Color Grading:** Warm, natural, golden-hour or soft daylight documentary tones. Unnatural plastic textures, distorted anatomy, artificial corporate poses, or watermarks are rejected.
3. **Responsive Containment:** All images utilize Next.js Image with explicit `sizes` attributes, `priority` on above-the-fold heroes, and subtle hover scaling (`group-hover:scale-105 transition-transform duration-300`).
