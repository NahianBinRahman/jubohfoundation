# Design Reference — Humanite Template Visual System

This document outlines the visual patterns, layout structures, typography, and component styling derived from the **Humanite Charity & Donation Template Kit** by Jegtheme. It serves as the visual benchmark for our rebuild of the Juboh Foundation web platform.

---

## 1. Color Palette & Semantics

| Token | Hex / HSL | Usage & Meaning |
| :--- | :--- | :--- |
| **Charcoal** | `#222222` | Primary dark tone; top bar background, footer background, primary heading text, contrast cards. |
| **Gold / Amber** | `#F6B83E` | Signature accent color; CTA buttons, active states, progress bars, eyebrow text, highlight badges. |
| **Gold Hover** | `#E0A32E` | Interactive hover state for gold primary buttons. |
| **Warm Ivory** | `#F8F6F1` | Subtle section backgrounds providing warmth without cold grey sterility. |
| **White** | `#FFFFFF` | Core surface background for cards, navbar, dropdown menus, and text on dark sections. |
| **Muted Text** | `#777777` | Body paragraph text, secondary metadata, dates, and non-active links. |
| **Border Subtle** | `#E8E5DD` | Delicate borders dividing cards, input fields, and table rows. |

---

## 2. Typography Hierarchy

| Role | Font Family | Weight / Style | Characteristics |
| :--- | :--- | :--- | :--- |
| **Headings (H1–H3)** | **Playfair Display** (Google Font) | 600, 700 Serif | Elegant, editorial, trustworthy, dignified. Generous line-height, tight letter spacing. |
| **Eyebrows / Subheadings** | **Caveat** / Accent Script | 600 Cursive / Script | Playful warmth, organic human feel, rendered in `#F6B83E`. Example: *Our Causes*, *Help Us*. |
| **Body & UI Elements** | **DM Sans** (Google Font) | 400 Regular, 500 Medium | Highly readable modern grotesque sans-serif; clean rendering across mobile and desktop. |
| **Badges & Numbers** | **DM Sans** / Numeric | 600 SemiBold, 700 Bold | Crisp numerical metrics for fundraising goals, dates, and campaign statistics. |

---

## 3. Structural & Layout Patterns

### A. Dual-Tier Navigation Header
1. **Utility Top Bar (Charcoal `#222222`)**:
   - Left: Contact items (Email address, Phone number, Headquarters location) with delicate gold icons.
   - Right: Standout golden `DONATE NOW` button + social icon links.
2. **Main Navigation Bar (White `#FFFFFF`)**:
   - Clean logo left-aligned.
   - Horizontal navigation links (`Home`, `About Us`, `Programs`, `Events`, `Shop`, `Donate`).
   - Sticky / glassmorphic behavior on scroll.

### B. Hero Section with Overlapping Action Cards
- Full-width hero image with an atmospheric dark overlay (`rgba(34, 34, 34, 0.7)`).
- Centered or left-aligned serif headline with highlighted gold words.
- Primary CTA (`DONATE NOW` gold button) paired with a circular `WATCH VIDEO` play button.
- **3 Overlapping Feature Cards** floating across the boundary of the hero section:
  1. Card 1: *Become a Volunteer* (white card, icon, description, button).
  2. Card 2: *Quick Fundraising* (white card, icon, description, button).
  3. Card 3: *Make Donation* (golden card or featured photo with dark overlay, button).

### C. Section Title Pattern
Every major section follows a disciplined visual rhythm:
1. Centered or left-aligned script eyebrow: `<span className="eyebrow-script">Our Mission</span>`
2. High-impact serif heading: `<h2 className="font-serif text-3xl md:text-4xl text-charcoal">We Are In A Mission To Help</h2>`
3. Restrained sub-paragraph in muted text (`max-w-2xl text-muted-text`).

### D. Campaign / Cause Card Pattern
- Clean white card with subtle box shadow (`shadow-sm hover:shadow-md transition-shadow`).
- High-quality image container with subtle 1.03x zoom hover effect.
- Percentage progress indicator:
  - Progress track (`bg-neutral-100 h-2 rounded-full`).
  - Active fill (`bg-gold h-2 rounded-full`).
  - Dark floating badge showing exact percentage (`70%`, `85%`).
- Dual metrics row: `$Raised` on left, `$Goal` on right.
- Dual button footer: Primary `DONATE` gold pill/button + subtle text `DETAILS →` link.

### E. Impact Counter / Funfact Section
- High-contrast charcoal section (`bg-charcoal text-white`).
- Split layout:
  - Left: Inspiring headline, paragraph, and 2x2 grid of metric counters (e.g., 2,450+ Volunteers, 20+ Business Seminars).
  - Right: Full portrait photography with an overlapping golden quote card (*"Give A Hand To Make The Better World"*).

### F. Event Listing Card Pattern
- Clean card with a dedicated **Date Block**:
  - Gold square or badge with Day (bold number, e.g., `15`) and Month (`Aug`).
- Metadata chips: Location pin icon with venue, Clock icon with event time.
- Event title in serif font with hover color transition to gold.
- `VIEW DETAILS →` arrow link.

### G. Quick Donation & Contact Split
- Left: Interactive donation form card (Name, Phone, Email, Amount buttons/input, Program selector, Message, `DONATE NOW` submit button).
- Right: Foundation office hours and regional contact information with warm ivory accents.

### H. Multi-Tier Charcoal Footer
- Dark charcoal background (`#222222`).
- 4 Columns:
  1. Quick Links
  2. Other Pages / Policies
  3. Contact Information (Phone, Email, Headquarters address)
  4. Newsletter Subscription Form with inline input and gold `SEND` button.
- Sub-footer: Copyright notice and legal disclaimer.
