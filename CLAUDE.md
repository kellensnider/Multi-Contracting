# CLAUDE.md — Multi Contracting, LLC

**Inherits from:** `../../_company/CLAUDE.md`  
**Project status:** Active — initial build complete  
**Live URL:** https://kellensnider.github.io/Multi-Contracting/  

This file documents project-specific overrides, known patterns, open TODOs,
and lessons from the initial build. Read this before touching any file.

---

## Project Context

Multi Contracting, LLC is our first client. The initial build is complete and live.
Work on this project is ongoing updates, refinements, and new pages as requested.
Read `project-brief.md` and `brand-identity.md` before making any changes.

---

## Design Deviations from Company Standards

This site predates the company scaffold and has intentional design choices that differ
from `_company/styles/base.css`. Do NOT "fix" these to match the base template.

### 1. Dark-dominant theme
The site is primarily dark (near-black backgrounds), not light. `:root` defaults are set to
light (cream) values but the visible UI is mostly dark. This is intentional brand design.
The dark-section scoping block in `css/styles.css` covers `.site-header`, `.site-footer`,
and `.guarantee-section`.

### 2. Bebas Neue is 400 weight only
Every `font-family: var(--font-heading)` or `var(--font-display)` rule must use
`font-weight: 400`. **Never write `font-weight: 700` or `font-weight: 800` on Bebas Neue.**
Doing so causes browser fallback rendering with incorrect letter-spacing. This caused
rework during the initial build.

### 3. Nav is 3 pill buttons + CCB badge (no dropdown)
The nav is intentionally minimal: three pill-style links and a CCB badge on the right.
Do not add dropdowns or more nav items without explicit instruction.

### 4. sp-wrap layout is 2-column (not 4-column)
Service page sub-cards use `grid-template-columns: 1fr 1fr` — two columns of tall cards,
not the four-column grid in the base template. The cards also use alternating dark/black
backgrounds (`.sp-card--a`, `.sp-card--b`).

### 5. Video strip on homepage
The homepage has a 4-panel vertical video strip (`<section class="video-strip">`). The video
files (`videos/*.mp4`) are **not in the git repo** — they are provided by the client separately.
Never try to add them to the repo or reference remote URLs for them.

### 6. CSS variable names differ from base.css
The existing styles.css uses legacy variable names (`--color-black`, `--color-white`,
`--color-charcoal`, `--mc-gold`, etc.) that differ from the company base template
(`--color-bg`, `--color-text`, etc.). When editing this project, use the existing
variable names — do not migrate to the base template names.

---

## File Structure

```
multi-contracting/
├── CLAUDE.md               ← This file
├── project-brief.md        ← Full client brief
├── brand-identity.md       ← Colors, fonts, component patterns
├── index.html              ← Homepage
├── about.html
├── contact.html
├── additional-services.html
├── css/
│   └── styles.css          ← All styles (one file)
├── js/
│   └── main.js             ← All JS (one file)
├── images/
│   └── logo.png            ← Transparent PNG, works any background
├── services/
│   ├── roofing.html        ← Roofing hub
│   ├── residential-roofing.html
│   ├── commercial-roofing.html
│   ├── roof-repair.html
│   ├── roof-replacement.html
│   ├── siding.html
│   ├── fencing.html
│   ├── painting.html
│   └── curbing.html
├── service-areas/
│   ├── eugene.html
│   ├── springfield.html
│   └── santa-clara.html
├── videos/                 ← NOT in git repo; client provides .mp4 files
└── brand/
    ├── brand-identity.html ← Visual brand reference (not a site page)
    └── archive/            ← Old logo versions
```

---

## CSS Architecture

All styles are in `css/styles.css`. Key section order (already established):

1. CSS custom properties
2. Dark section overrides
3. Reset & base
4. Container & utilities
5. Buttons
6. Navigation
7. Hero section
8. Video strip
9. Services dark section
10. Guarantee section
11. About section
12. Testimonials
13. Footer
14. Inner page — hero, service/area content, contact, about page styles
15. SVG icon system
16. sp-wrap (service page layout)
17. Responsive breakpoints (always last)

---

## JS Architecture

`js/main.js` — standard `'use strict'` + `DOMContentLoaded` shell. Key functions:

- `initNav()` — hamburger toggle, outside-click close, Escape key
- `initScrollAnimations()` — IntersectionObserver on `.animate-fade-up`
- `initStickyHeader()` — `is-scrolled` class on scroll
- `initVideoControls()` — per-video mute/unmute and play/pause for video strip
- `initPageTransitions()` — `is-leaving` class on `body` before navigation (fade-out)
- `initContactForm()` — validation + fetch submit for contact form

---

## Business Info (for copy and structured data)

| Field | Value |
|---|---|
| Business name | Multi Contracting, LLC |
| Phone | (541) 600-9570 |
| Phone (href) | tel:5416009570 |
| Email | multicontractllc@gmail.com |
| City | Eugene |
| State | OR |
| CCB License | #238954 |
| Years in business | 20+ (since 2004) |
| Financing | Hearth ($0 Down available) |
| Languages | English & Spanish |
| CertainTeed status | Shingle Master |

---

## Open TODOs (unresolved before launch)

- [x] Social media links in footer — Facebook: https://www.facebook.com/MultiContractingOR | Instagram: https://www.instagram.com/multicontractingllc1/
- [ ] Contact form endpoint — verify the `action` URL on `contact.html` is a live Formspree/Web3Forms endpoint
- [ ] OG image — `og:image` meta tags may be missing or pointing to a nonexistent file; create and verify before social sharing
- [x] Exact street address — 90050 Prairie Rd, Eugene, OR 97402
- [ ] Geo coordinates (lat/lng) — needed for JSON-LD schema
- [ ] Favicon — not present in repo; create 32×32px version of logo mark
- [ ] robots.txt — not present; create before treating this as production
- [ ] sitemap.xml — not present; create and ensure all page URLs are correct
- [ ] Business hours — assumed Mon–Fri 8AM–5PM; confirm with client
- [ ] Custom domain — confirm if client wants to point their domain to GitHub Pages
- [ ] Video files — `videos/*.mp4` not in repo; confirm hosting plan with client

---

## Assumptions Made During Initial Build

All assumptions are documented here per company standards. Confirm with client before launch.

| Assumption | Location |
|---|---|
| Business hours: Mon–Fri 8AM–5PM | footer.html, contact.html |
| Address: 90050 Prairie Rd, Eugene, OR 97402 | contact.html sidebar, footer |
| Social links: confirmed URLs | Footer bottom bar |
