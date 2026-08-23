# JORG — Figma to code

## Current scope (this pass)
Header + Footer + shared primitives only, as agreed. No page sections (Home, Category,
New Arrivals, Collection, PDP) and no routing/navigation between pages yet.

Built:
- `components/Header` — closed nav bar + all 4 hover mega-menus (Gift, Collections,
  Categories, High Jewelry), transcribed from Figma node `25:1526`.
- `components/Footer` — transcribed from Figma node `4:2154`.
- `components/icons/Icon.tsx` — search / bag / user / arrow / chevron icons.
- `components/primitives/ImagePlaceholder.tsx` — the `#ebebed` fill block Figma
  shows behind every photograph, reused everywhere an image slot is needed.
- `components/Header/MenuColumn.tsx` — reusable "title + link list" column used
  6× across the mega-menus.
- `styles/tokens.css` — every color/spacing value sampled directly from Figma.

## Setup
This sandbox has no network access, so dependencies were never installed here.
On your machine:

```
npm install
npm run dev
```

## Asset integration (JORG-assets.zip)
Inspected the provided archive: `images/` (organized by page: Home Page,
Category, New Arrivals, Collection page, Product Detail Page) and `icons/Component 8.png`
(a single 136×848 raster sprite sheet, pixel-matching Figma's icon frame `4:1503`).

- **Header search/bag/user icons** — replaced the hand-drawn placeholders with
  real crops from `icons/Component 8.png`, cut at the exact local coordinates
  Figma reports for each glyph (search 20,92 · bag 92,20 · user 92,572, all
  24×24). Verified visually against the Figma render before wiring in. Now
  living at `public/icons/{search,bag,user}.png`, referenced by
  `components/icons/Icon.tsx`.
- **Fonts** — no font files were in the archive. Not a gap: Palanquin Dark
  (logo) and Inter (footer) are already loaded via `next/font/google` in
  `app/layout.tsx`, which serves the authentic font files for those exact
  family names — not a substitution.

### ✅ Resolved — mega-menu photography (images.zip)
All 17 Header mega-menu photographs (Categories ×4, Collections ×7 [1 hero +
6 grid], Gift ×3, High Jewelry ×3) were received, matched by folder + exact
pixel dimensions to their Figma slots, and wired into
`components/Header/MegaMenu.tsx`. Files copied as-is into
`public/images/mega-menu/{categories,collections,gift,high-jewelry}/`,
renamed only for path clarity — the original filename each renamed file came
from is documented in a comment above each panel in `MegaMenu.tsx`.

**⚠️ One open item:** Figma's MCP tool is currently rate-limited, so the
*left-to-right ordering* of images **within** each panel (which image sits in
column 1 vs column 2, etc.) could not be re-verified against the file —
panel/size assignment is certain, order within a panel is my best-effort
guess (sorted filename order). Flagged clearly in `MegaMenu.tsx`; swapping
order is a one-line change per array if anything's out of place.

### 🚩 Still flagged — missing asset
- **Footer newsletter-submit arrow** (node `54:3015`). Not part of the
  `Component 8.png` icon sprite and not in `images.zip` either. Still a
  hand-built placeholder in `components/icons/Icon.tsx` (`ArrowRightIcon`),
  clearly flagged there — swap for the real export once available.

## Other known gaps
1. **Footer vertical rhythm.** X-positions and the two horizontal dividers are
   exact (`top: 91px / 294px / 370px / 620px`, `left: 32px / 856px`). A couple
   of internal paddings inside the "Store locator" / "Stay informed" blocks
   were derived from the visible gaps rather than an explicit Figma value for
   every single one — worth a quick side-by-side check once you can view it
   live.
2. **Desktop-only**, per your call — 1710px fixed width, no responsive
   breakpoints yet.

## Fixes applied since first draft
- `Footer.tsx` needed `"use client"` — it owns an `onSubmit` handler, which
  can't be passed from a Server Component in the App Router.
- High Jewelry mega-menu (`Frame 152` / `Frame 153`) was using a flex row
  with symmetric 181px padding on both sides, but Figma's row is asymmetric
  (181px left / ~132px right). That compressed the text column under space
  pressure and dragged both images left of their real position. Rewritten
  with absolute positioning at Figma's exact coordinates instead.
- Footer email input had two horizontal lines (the input row's own
  `border-bottom` plus a separate divider `<hr>` right below it) — Figma only
  has one. Removed the redundant border; the row width and the single
  divider now both match Figma's 416px, so the submit arrow sits flush at
  the correct edge instead of overhanging it.

## Next step
Once you confirm this looks right, next up is the reusable page-level
primitives (ProductCard, Editorial Section, Carousel controls, Filter bar,
Pagination, Accordion) followed by page assembly in the order: Home →
Category → New Arrivals → Collection → Product Detail Page.
