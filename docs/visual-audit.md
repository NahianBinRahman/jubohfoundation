# Visual Audit & UI/UX Inspection — Juboh Foundation

**Date:** 2026-10-20  
**Phase:** 11 — Complete Premium UI/UX Refinement  
**Visual Benchmark:** Humanite Charity & Donation Template Kit (Jegtheme)  
**Content Source of Truth:** Authentic Juboh Foundation charter, mission, and leadership records

---

## 1. Inspection Methodology

All public routes across the website were visually inspected across two primary viewports:
1. **Desktop Viewport:** 1280px × 800px (standard modern laptop/desktop viewing experience)
2. **Mobile Viewport:** 390px × 844px (standard modern mobile experience)

Inspected routes:
- `/` (Homepage)
- `/about` (About Us)
- `/programs` (Programs Hub)
- `/programs/business-academy` (Program Detail: Business Academy)
- `/programs/youth-development` (Program Detail: Youth Leadership & Tours)
- `/programs/housing` (Program Detail: Affordable Workforce Housing)
- `/programs/global-missions` (Program Detail: Clean Water & Infrastructure)
- `/programs/founders-initiatives` (Program Detail: Strategic Initiatives)
- `/gallery` (Media & Photo Gallery)
- `/events` (Events & Masterminds Listing)
- `/stories` (Stories & Articles)
- `/faq` (Frequently Asked Questions)
- `/contact` (Contact Us)
- `/donate` (Support Our Mission & Donations)

---

## 2. Classification of Discovered Issues

Issues are categorized by severity:
- **Critical:** Layout breakage, broken controls, or content occlusion.
- **Major:** Visual discrepancies from Humanite reference design language, awkward cropping, or truncated typography.
- **Minor:** Spacing micro-adjustments, border-radius consistency, and hover transition refinements.

---

## 3. Detailed Audit Findings by Component & Section

### A. Global Header & Navigation
- **Issue H-1 (Major): Sticky Navigation Scroll Constraint**  
  *Finding:* In `components/layout/header.tsx`, `<header>` is wrapped inside a parent `div` alongside `<TopBar>`. Because the parent `div` ends after the initial header height, the `sticky top-0` style stops sticking once the parent scrolls past, causing the navigation bar to disappear on scroll rather than sticking smoothly.  
  *Fix:* Make the main navigation bar independently sticky with `sticky top-0 z-50`, persistent `backdrop-blur-md`, and smooth elevation shadow when `scrollY > 30`.
- **Issue H-2 (Minor): Dropdown Hover Zone & Shadow Depth**  
  *Finding:* The "Programs" dropdown in desktop navigation had a tight vertical gap that could collapse if moving the cursor briskly.  
  *Fix:* Ensure seamless hover bridge (`pt-1` padding buffer) and crisp floating elevation (`shadow-xl border-[#E8E5DD]`).

### B. Common Page Hero (`components/common/page-hero.tsx`)
- **Issue PH-1 (Major): Breadcrumb Title Truncation**  
  *Finding:* Breadcrumbs on inner pages (e.g. `/about`, `/programs/business-academy`, `/events`) applied `truncate max-w-[140px]`. As a result, page titles rendered as `"About Juboh Foundati..."` or `"JUBOH Business Acad..."`.  
  *Fix:* Remove the restrictive `max-w-[140px]` on desktop (`sm:max-w-none` or `max-w-xs md:max-w-none`) so titles display fully and gracefully.
- **Issue PH-2 (Minor): Hero Gradient Overlay Density**  
  *Finding:* Some inner page heroes had slightly uneven dark overlay gradients that made fine serif titles slightly harder to read against bright outdoor photographic skies.  
  *Fix:* Calibrate gradient overlay with `bg-gradient-to-t from-[#222222] via-[#222222]/65 to-[#222222]/75` for optimal WCAG AAA text contrast.

### C. Homepage (`/`)
- **Issue HP-1 (Major): Hero Section Padding & CTA Above-the-Fold Placement**  
  *Finding:* In `components/home/home-hero.tsx`, excessive vertical padding (`pt-32 pb-44`) pushed the primary CTA buttons (`Support Our Mission` and `Explore Programs`) near or below the 800px viewport fold on desktop.  
  *Fix:* Calibrate hero padding to `pt-16 pb-28 md:pt-24 md:pb-36` with refined line-height so the gold action button and white secondary button are immediately visible above the fold while leaving balanced room for the overlapping cards.
- **Issue HP-2 (Minor): Overlapping Action Cards Elevation**  
  *Finding:* Overlapping cards on mobile stacked without adequate bottom separation before the About Preview section.  
  *Fix:* Ensure clean negative margin on desktop (`-mt-16 md:-mt-24`) that gracefully resets on mobile (`mt-4 md:-mt-24`), preventing overlapping text on narrow viewports.

### D. Programs & Program Details (`/programs/*`)
- **Issue PR-1 (Minor): Cause Card Progress Bar Height Consistency**  
  *Finding:* Program cards across `/programs` use progress bars and goal metrics. The progress bars on certain screen widths could appear slightly thin.  
  *Fix:* Ensure standard `h-2 rounded-full` track with `#F6B83E` fill and clear percentage badge floating above the track.
- **Issue PR-2 (Minor): Program Detail Sidebar CTA Contrast**  
  *Finding:* In `app/programs/[slug]/page.tsx`, the donation and contact sidebar cards had slight variations in button padding.  
  *Fix:* Standardize sidebar CTA buttons with uniform primary gold styling.

### E. Gallery & Media (`/gallery`)
- **Issue GL-1 (Minor): Lightbox Caption Visibility & Aspect Ratio Containment**  
  *Finding:* In the gallery grid, images load properly in 4:3 and 16:9 aspect ratios. On very large screens, the masonry gap benefits from a standard 1.5rem (`gap-6`) to match Humanite's editorial rhythm.  
  *Fix:* Refine grid gaps and add discreet "Illustrative image" attribution overlay badges where appropriate.

### F. Events (`/events`)
- **Issue EV-1 (Minor): Empty State Typography & Inactive Button Styling**  
  *Finding:* As confirmed upcoming event dates are pending official scheduling, the locked registration banner cleanly informs visitors. Button text is set to "Registration Currently Unavailable" with a lock icon.  
  *Fix:* Preserve authentic state and ensure contrast ratio exceeds 4.5:1.

### G. Stories & Articles (`/stories`)
- **Issue ST-1 (Minor): Article Card Title Clamping & Read More Links**  
  *Finding:* Article titles varied in length; enforcing a 2-line title clamp (`line-clamp-2`) ensures all cards in the grid maintain uniform vertical alignment and card height.  
  *Fix:* Add `line-clamp-2` to story card titles and standardize arrow hover micro-animation.

### H. Contact (`/contact`) & FAQ (`/faq`)
- **Issue CF-1 (Minor): FAQ Accordion Border & Focus State**  
  *Finding:* Accordion items open smoothly; border separator colors should strictly use `#E8E5DD` with gold chevron indicators.  
  *Fix:* Ensure smooth accordion transition and consistent ivory hover background (`hover:bg-[#F8F6F1]`).

---

## 4. Execution Plan for Phase 11
1. Fix breadcrumb truncation in `components/common/page-hero.tsx`.
2. Fix sticky header behavior in `components/layout/header.tsx`.
3. Optimize homepage hero padding and CTA placement in `components/home/home-hero.tsx`.
4. Refine overlapping cards mobile/desktop transitions in `components/home/overlapping-cards.tsx`.
5. Audit and polish typography, buttons, and card borders across all pages.
6. Verify photographic assets and update `docs/image-manifest.md`.
7. Execute automated TypeScript and visual regression checks.
8. Produce final `docs/visual-refinement-report.md`.
