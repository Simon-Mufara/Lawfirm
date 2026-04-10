# Visual Identity Guidelines - Premium Law Firm Brand

## Brand Overview

**Brand Essence:**
Professional, trustworthy, approachable, modern legal expertise without arrogance.

**Visual Character:**
- Dark, elegant, minimal aesthetic
- Gold accents suggesting premium quality without ostentation
- Strong typography and generous whitespace
- Refined, not corporate or sterile

**Audience:**
- Business owners, individuals facing legal challenges
- Those who want professional representation plus personal attention
- People who value clarity over complexity

---

## Color Palette

### Primary Colors

**Navy (Dark Primary)**
- Hex: #0f1419
- RGB: (15, 20, 25)
- Usage: Hero sections, navbar, footers, primary backgrounds
- Feel: Professional, trustworthy, sophisticated

**Black (Secondary Dark)**
- Hex: #1a1f2e
- RGB: (26, 31, 46)
- Usage: Sections with navy (creates depth), card backgrounds, modal overlays
- Feel: Deep, authoritative

**Gold (Accent)**
- Hex: #d4af37
- RGB: (212, 175, 55)
- Usage: Headings, button text, hover states, underlines, service icons
- Feel: Premium, elegant, highlights without screaming

### Neutral Colors

**White (Primary Text Background)**
- Hex: #ffffff
- RGB: (255, 255, 255)
- Usage: Body text, primary backgrounds for readability
- Feel: Clean, modern

**Light Gray (Subtle Background)**
- Hex: #f5f5f5
- RGB: (245, 245, 245)
- Usage: Alternate sections, card backgrounds for lighter sections
- Feel: Subtle, approachable

**Dark Gray (Muted Text)**
- Hex: #b8bccf
- RGB: (184, 188, 207)
- Usage: Secondary copy, fine print, hints, disabled states
- Feel: Professional without dominance

### System Colors

**Success (Forms)**
- Hex: #10b981
- RGB: (16, 185, 129)
- Usage: Form success states, checkmarks, confirmations

**Error (Forms)**
- Hex: #ef4444
- RGB: (239, 68, 68)
- Usage: Form errors, required field indicators, alerts

**Warning**
- Hex: #f59e0b
- RGB: (245, 158, 11)
- Usage: Urgent notices, CCMA warnings, etc.

---

## Color Application

### Typography
- **Headlines (H1-H3):** Gold (#d4af37) on dark backgrounds, navy on light backgrounds
- **Body text:** White on dark, navy/black on light
- **Secondary text:** Dark gray (#b8bccf) for hints, captions, fine print

### Backgrounds
- **Full-width sections:** Navy (#0f1419) or white with light gray (#f5f5f5)
- **Cards/containers:** Black (#1a1f2e) on navy, white on light gray
- **Section alternation:** Never white-to-white or navy-to-navy (creates visual rhythm)

### Buttons
- **Primary CTA:** Gold button text on navy/black background
- **Secondary CTA:** Gold border, transparent background, gold text
- **Hover state:** Slightly lighter gold + subtle box shadow
- **Inactive:** Gray (#b8bccf)

### Borders & Dividers
- **Subtle dividers:** Dark gray (#b8bccf) at 30% opacity
- **Accent borders:** Gold for important elements
- **Form inputs:** Light gray border, gold on focus

---

## Typography

### Font Stack
```css
Primary (Headings): "Segoe UI", "Helvetica Neue", sans-serif
Secondary (Body): "Segoe UI", "Helvetica Neue", sans-serif
Fallback: system-ui, sans-serif
```

**Why:** Clean, modern, available on all systems. No external font dependencies needed (optional: Google Fonts "Poppins" or "Inter" for added polish).

### Font Sizes & Hierarchy

**Desktop Sizing:**
```
H1 (Hero):         48px, bold (700), line-height 1.2
H2 (Section):      36px, bold (700), line-height 1.2
H3 (Subsection):   24px, semi-bold (600), line-height 1.3
H4 (Card title):   18px, semi-bold (600), line-height 1.4
Body (Paragraph):  16px, regular (400), line-height 1.6
Body (Small):      14px, regular (400), line-height 1.5
Caption:           12px, regular (400), line-height 1.4
```

**Mobile Sizing:**
```
H1 (Hero):         32px, bold
H2 (Section):      24px, bold
H3 (Subsection):   18px, semi-bold
H4 (Card title):   16px, semi-bold
Body (Paragraph):  14px, regular
Body (Small):      12px, regular
Caption:           11px, regular
```

### Font Weights
- **Regular (400):** Body copy, descriptions
- **Semi-bold (600):** Subtitles, card headings, emphasis within paragraphs
- **Bold (700):** Main headings, section titles, strong emphasis

### Line Length
- **Optimal:** 50–70 characters per line
- Implementation: Max-width 700px for body text columns
- Justified: Never (use left-align for better readability)

### Letter Spacing
- **Headlines:** Slightly tighter (-0.5px)
- **Body:** Normal (default)
- **All-caps text:** Loose (+1px for readability)

---

## Typography Examples

**Heading Usage (H2 - Section Title):**
"Our Expertise"
- Color: Gold (#d4af37)
- Size: 36px (desktop), 24px (mobile)
- Weight: Bold (700)
- Spacing: 80px top margin, 40px bottom margin

**Body Usage (Paragraph):**
"Over [X] years of proven experience across key legal disciplines. We solve problems, not just process documents."
- Color: White (#ffffff, on navy) or navy (#0f1419, on white)
- Size: 16px (desktop), 14px (mobile)
- Weight: Regular (400)
- Line-height: 1.6
- Max-width: 700px

**Button Text:**
"Schedule Consultation"
- Color: Navy (#0f1419, text on gold button)
- Size: 16px
- Weight: Semi-bold (600)
- Letter-spacing: Default

---

## Imagery & Photography

### Style
- **Professional legal environments:** Offices, courtrooms, meeting rooms
- **Candid team moments:** Serious but approachable (not forced smiles)
- **Cityscapes:** Urban professional settings (Johannesburg skyline, business districts)
- **Abstract/minimal:** Geometric shapes, neutral colors (support not dominate)

### What NOT to Use
- Stock photos of people in generic "law" poses (scales of justice, people with briefcases)
- Bright colors clashing with brand palette
- Cartoonish illustrations or icons
- Overly casual/playful imagery
- Unrelated images (nature, random objects)

### Image Treatment
- **Size constraint:** All images optimized (WebP format, <100KB)
- **Aspect ratios:** 16:9 for hero images, 1:1 for team photos, 4:3 for testimonials
- **Blending:** Subtle overlay (navy at 20% opacity) to maintain text contrast
- **Consistency:** All images have same tonal quality (not too bright, not too dark)

### Where Imagery Fits
- **Hero section:** Full-width background image (with overlay for text readability)
- **About section:** Team photos (2-3 lawyers/key staff)
- **Services section:** Optional small icons or illustrations (minimal style)
- **Testimonials:** Client photos if available (headshot style, 150px circle)
- **Office location:** Google Map embed or professional office photo

---

## Icons & Visual Elements

### Icon Style
- **Approach:** Minimalist, line-based (not filled)
- **Stroke weight:** 2px
- **Sizes:** 24px for inline, 48px for cards, 64px for section markers
- **Color:** Gold (#d4af37) on dark, navy (#0f1419) on light
- **Consistency:** All icons from same source (FontAwesome, Feather Icons, or custom)

### Service Icons (Examples)
```
Criminal Law:         Gavel or shield
Family Law:          People/family silhouette
Civil Litigation:    Handshake or briefcase
Labour:              People/organizational chart
Contracts:           Document or checklist
Bail:                Key or lock (unlocked state)
```

### UI Icons
- Hamburger menu (mobile)
- Chevron/arrow (dropdown, "learn more")
- Checkmark (form success, benefits list)
- X/cross (form error, close button)
- Phone/email/WhatsApp (contact options)
- Search (if applicable)

**Avoid:**
- Emoji (unprofessional)
- Multiple icon styles on same page
- Oversized/decorative icons taking up space
- Icons that aren't immediately clear

---

## Layout & Spacing System

### Spacing Grid
Based on 8px increments (scalable, consistent):
```
8px  (xs)   - Small gaps between related elements
16px (sm)   - Standard gaps, padding, margins
24px (md)   - Medium spacing
32px (lg)   - Large gaps between sections
40px (xl)   - Extra large spacing
80px (2xl)  - Section-level spacing (desktop)
```

**Mobile adjustments:**
- Reduce multipliers: Use 40px instead of 80px vertically
- Horizontal: 20px padding instead of 40px

### Component Spacing

**Cards:**
- Padding: 32px (desktop), 24px (mobile)
- Gap between cards: 24px (desktop), 16px (mobile)
- Border radius: 8px (subtle rounding, not excessive)
- Shadow: `0 4px 12px rgba(0,0,0,0.15)` (subtle depth)

**Sections:**
- Top/bottom padding: 80px (desktop), 40px (mobile)
- Horizontal padding: 40px (desktop), 20px (mobile)
- Max-width: 1200px (content area)

**Form Fields:**
- Height: 48px (touch-friendly)
- Padding: 12px 16px (vertical/horizontal)
- Border radius: 4px (subtle)
- Label margin-bottom: 8px

**Buttons:**
- Height: 48px (minimum touch target)
- Padding: 12px 24px (horizontal)
- Border radius: 4px (consistent with inputs)
- Text size: 16px
- Gap between buttons: 16px

---

## Visual Hierarchy Priority

**Hierarchy from most to least important:**
1. **Main headlines** (H1, H2) - Large, gold, high contrast
2. **Buttons** - Gold, obvious, high contrast
3. **Body copy** - White on dark or dark on light, readable size
4. **Secondary info** - Smaller size, lower contrast (gray text)
5. **Decorative elements** - Minimal, doesn't compete

**Visual Weight:**
- Gold attracts attention (use sparingly)
- Large text attracts attention (headlines only)
- White space makes content breathe (generous)
- Dark backgrounds create depth (navy is quiet, inviting) • Shadow/elevation creates layering (cards, modals)

---

## Dark Mode Behavior

**Current Design:** Already dark-friendly (navy + white + gold)

**If Light Mode Variant Needed:**
- Background: White (#ffffff)
- Text: Navy (#0f1419)
- Accents: Keep gold (#d4af37)
- Cards: Light gray (#f5f5f5) background
- Same hierarchy principles apply

---

## Motion & Animation

### Purpose
All motion enhances usability or adds polish—not distraction.

### Animation Guidelines

**Hover states (200ms):**
```css
button:hover {
  background-color: #e0c14a; /* Lighter gold */
  box-shadow: 0 6px 16px rgba(0,0,0,0.2);
  transition: all 200ms ease-out;
}
```

**Focus states (visible, no animation):**
```css
input:focus {
  outline: 3px solid #d4af37;
  outline-offset: 2px;
}
```

**Scroll animations (fade-in on viewport entry):**
```
Elements fade in + slight slide-up as viewport reaches them
Duration: 600ms
Easing: ease-out
Respects prefers-reduced-motion
```

**Menu transitions (300ms):**
```
Mobile menu slides in from left
Opacity fade
Respects prefers-reduced-motion
```

### Accessibility
- Respect `prefers-reduced-motion` media query
- No auto-playing animations
- Motion is additive (doesn't replace visual feedback)

---

## Component Examples

### Button - Primary CTA

**Desktop:**
```
Size: 48px height × 160px width (flexible)
Background: Gold (#d4af37)
Text: Navy (#0f1419), 16px, bold
Padding: 12px 24px
Border-radius: 4px
Hover: Lighter gold (#e0c14a) + shadow
Active: Darker gold (#c9a72d)
```

**Mobile:**
```
Size: 48px height × 100% width
Same styling, full-width button
```

### Card - Service Feature

```
Background: Black (#1a1f2e) on navy section
Padding: 32px
Border-radius: 8px
Box-shadow: 0 4px 12px rgba(0,0,0,0.15)

Title: 18px, semi-bold, gold
Icon: 64px, gold, centered top
Body text: 14px, gray (#b8bccf)
CTA link: 14px, gold, underline on hover
```

### Form Input

```
Height: 48px
Padding: 12px 16px
Border: 1px solid #b8bccf
Border-radius: 4px
Font: 16px (prevents zoom on mobile)
Focus: Blue outline 3px, offset 2px
Error state: Red border + error message below
Success state: Green checkmark right side
```

### Testimonial Card

```
Background: Light gray (#f5f5f5) or black (#1a1f2e)
Padding: 32px
Quote: 16px, regular, navy/white
Attribution: 14px, gray, semi-bold
Author role: 12px, gray, regular
Photo (optional): 60px circle, top left of card
```

---

## Responsive Behavior

### Typography Scaling
- H1: 48px → 32px (desktop → mobile)
- H2: 36px → 24px
- H3: 24px → 18px
- Body: 16px → 14px

### Spacing Scaling
- Section padding: 80px → 40px (vertical)
- Card gaps: 24px → 16px
- Button width: Fixed width → 100%

### Layout Changes
- 3-column grid → 2-column → 1-column
- Sidebars → Stack vertically
- Complex layouts → Simplified stacking

### Image Handling
- Hero images: Full-width, constrained height, optimized for device ratio
- Card images: Responsive aspect ratio (16:9 maintained)
- Team photos: Become smaller thumbnails on mobile

---

## Accessibility Color Contrast

**WCAG AA Compliance (4.5:1 minimum):**

✓ White (#ffffff) on navy (#0f1419): 12:1 ✓
✓ White on black (#1a1f2e): 12:1 ✓
✓ Gold (#d4af37) on navy: 6.5:1 ✓
✓ NavyText on light gray (#f5f5f5): 9:1 ✓
✓ Gray (#b8bccf) on white: 5.5:1 ✓

**Text to Avoid:**
✗ Gold on black (insufficient contrast) — use white text instead
✗ Gray (#b8bccf) on navy (too low contrast) — use lighter gray (#d8dce8) instead

---

## Brand Misuse - What NOT to Do

| ✗ Avoid | ✓ Instead |
|---------|----------|
| Bright colors (lime, neon) | Use navy, black, white, gold palette |
| Stretched/pixelated logos | Use properly scaled vector files |
| Cartoonish icons | Use professional, minimalist icons |
| Comic Sans or playful fonts | Use clean sans-serif (Segoe UI) |
| Cheesy stock images | Use professional photography or minimal illustration |
| Crowded layouts | Use generous whitespace |
| All-caps body text | Use sentence case (all-caps only for emphasis) |
| Animated GIFs | Use smooth CSS animations or no motion |
| Multiple accent colors | Stick to gold only |
| Low-contrast text | Test with contrast checker (4.5:1+) |

---

## File Specifications

### Logo Files
- **SVG** (primary) - Scalable, clean at any size
- **PNG** (fallback) - 300dpi minimum, transparent background
- **Sizes:** Full logo, stacked logo, icon-only version

### Icon Sets
- **SVG** (primary) - Consistent line weight, sized to 24px base
- **PNG sprite sheet** (optional fallback) - For older browser support

### Images
- **Format:** JPG (photos), WebP (primary), PNG (fallback)
- **Sizes:** Optimized for web (compressed, <100KB typical)
- **Aspect ratios:** 16:9 (hero), 1:1 (team), 4:3 (testimonials)

### Downloadable Brand Kit
Provide (if distributing):
- Logo files (all formats)
- Color palette (CSS variables, swatch files)
- Typography files (if custom fonts used)
- Icon library
- Usage guidelines (this document)

---

## Implementation Notes

### CSS Variables (for consistency)
```css
:root {
  --primary-navy: #0f1419;
  --secondary-black: #1a1f2e;
  --accent-gold: #d4af37;
  --text-white: #ffffff;
  --text-gray: #b8bccf;
  --bg-light: #f5f5f5;

  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 32px;
  --spacing-xl: 40px;
  --spacing-2xl: 80px;

  --font-primary: "Segoe UI", sans-serif;
  --font-size-h1: 48px;
  --font-size-body: 16px;
}
```

### Quick Customization
To adapt this design for a different firm:
1. Change color palette (keep 5-color structure: 2 darks, 1 accent, 2 neutrals)
2. Swap logo and team photos
3. Update firm name/contact throughout
4. Keep typography and spacing system (core to premium feel)
5. Test responsive behavior after edits

---

## Design Approval Checklist

Before launching, verify:
- [ ] All text meets WCAG AA contrast requirements
- [ ] Colors match brand palette (no unapproved exceptions)
- [ ] Typography hierarchy is clear (headings distinct from body)
- [ ] Spacing is consistent (uses grid system)
- [ ] Images are professional, optimized, sized correctly
- [ ] Buttons have clear hover/active states
- [ ] Mobile view looks polished (spacing, stacking, touch targets)
- [ ] No placeholder content remains
- [ ] All links work
- [ ] Forms display correctly
- [ ] Icons are consistent in style
- [ ] Animation respects prefers-reduced-motion
- [ ] No comic sans, bright colors, or cartoonish elements
- [ ] Brand voice is consistent (professional, not robotic or casual)

---

## Brand Evolution
This design is refined and modular—can scale to dark mode, additional pages, or new features without losing coherence. Stick to the principles (minimalism, trust, clarity) and the system will stay strong.
