# Photography & Image Generation Guidelines

This document governs visual asset strategy, editorial style, and ethical boundaries for photography used across the **Juboh Foundation** website.

---

## 1. Visual Direction & Style

- **Tone & Mood**: Premium editorial documentary nonprofit photography. Authentic, human-centered, and dignified.
- **Atmosphere**: Warm natural lighting, golden-hour exterior light, soft natural interior ambient lighting.
- **Compositions**:
  - **Hero Backgrounds**: 16:9 or wider landscape orientation with intentional negative space (centered or left) to host headlines, badges, and action buttons legibly.
  - **Program & Card Imagery**: 4:3 or 16:9 landscape aspect ratio.
  - **Editorial & Leadership Portraits**: 3:4 or 1:1 portrait orientation.
- **Realism Standards**:
  - Genuine candid human expressions and realistic interactions.
  - Realistic skin textures and natural anatomy without plastic or oversaturated artifacts.
  - 35mm documentary photography depth-of-field.
  - **Zero Typography / Logos in Photos**: No generated text, watermarks, fake labels, or badges inside the raw photography.

---

## 2. Real Content Protection & Ethical AI Usage

1. **Non-Negotiable Leadership Protection**:
   - Never replace the authentic portraits of founder **Jalen "JUBOH" Uboh** or executive director **Anika Carter** with AI-generated individuals.
   - When leadership imagery is displayed, only genuine photographs provided by the foundation may be utilized.

2. **No Misrepresentation of Beneficiaries**:
   - AI-generated photography serves exclusively as **illustrative mood and atmospheric storytelling** (e.g. community volunteers building raised garden beds, high school test-prep workshops).
   - Generated individuals must never be labeled or falsely attributed as specific real-world named staff, named donors, or verified beneficiaries.
   - Any image that could be construed as documentary evidence must carry metadata attributing it as illustrative (`isIllustrative: true` in [`lib/images.ts`](file:///f:/Project/JUBOH%20FOUNDATION/lib/images.ts)).

3. **Incremental Just-in-Time Generation**:
   - Do not mass-generate hundreds of unused stock images.
   - Generate only the specific photographic assets required as each page or section is developed.

---

## 3. Technical & Performance Optimization

- **Storage Location**: All AI-generated images reside in `public/images/generated/`.
- **Descriptive Naming**: Use kebab-case descriptive filenames (e.g. `hero-community.jpg`, `youth-leadership.jpg`, `workforce-housing.jpg`).
- **Next.js Image Component**:
  - Always render photography using Next.js `next/image` (`<Image />`) for automatic WebP conversion, responsive `srcset`, lazy loading, and prevention of Cumulative Layout Shift (CLS).
  - Use `priority` attribute only on above-the-fold hero imagery.
- **Centralized Reference**: Never hardcode file paths across components. Import all asset configurations from [`lib/images.ts`](file:///f:/Project/JUBOH%20FOUNDATION/lib/images.ts).
