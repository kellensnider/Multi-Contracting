# Brand Identity — Multi Contracting, LLC

**Version:** 2.0 (Warm Cream / Gold Amber)  
**Source:** brand/brand-identity.html + css/styles.css  

---

## Brand Personality

**Tagline:** Integrity in Every Layer  
**Tone:** Industrial, Bold, Rugged, Reliable, Approachable, No-Nonsense  

The brand speaks like a contractor who has been doing this for 20 years and doesn't need
to oversell himself. Confident, direct, and community-rooted. Copy should feel earned, not
promotional. Bilingual capacity (English & Spanish) is a genuine differentiator and should
be mentioned naturally, not as a footnote.

---

## Color Palette

| Variable | Name | Hex | Role |
|---|---|---|---|
| `--mc-cream` | Warm Cream | `#F5F0E8` | Primary page background |
| `--mc-concrete` | Concrete | `#EAE5DC` | Section / card background |
| `--mc-gold` | Gold Amber | `#E8A000` | Primary accent / CTA |
| `--mc-orange` | Burnt Orange | `#E05A00` | Secondary accent / eyebrow text |
| `--mc-black` | Near Black | `#1A1A1A` | Primary text / dark sections (nav, footer, hero) |
| `--mc-body-text` | Dark Tan | `#4A4438` | Body copy on light backgrounds |
| `--mc-muted` | Warm Gray | `#7A7060` | Labels / muted text |
| `--mc-sand` | Sand | `#D8D0C0` | Borders / dividers |

### Usage notes
- The site uses a **dark-dominant** scheme: the primary theme color is near-black (`#1A1A1A`),
  not the warm cream. The cream is used for body backgrounds on light-content sections.
- Dark sections (nav, footer, hero, guarantee, services dark): `--mc-black` background
- Light sections (about light, card backgrounds): `--mc-concrete` or `--mc-cream`
- Gold (`#E8A000`) is the CTA and accent color on dark backgrounds
- Burnt orange (`#E05A00`) is used for eyebrow labels, secondary buttons, and hover states

---

## Typography

### Fonts (Google Fonts import)
```
https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;1,600;1,700&family=Inter:wght@300;400;500;600&display=swap
```

| Variable | Family | Weight(s) | Usage |
|---|---|---|---|
| `--font-display` | Bebas Neue | **400 only** | Hero titles, section headings, display text |
| `--font-heading` | Bebas Neue | **400 only** | h1–h3 |
| `--font-body` | Barlow Condensed | 400, 600, 700 | Nav, labels, buttons, UI text |
| `--font-script` | Barlow Condensed | 600 italic | Tagline text, eyebrow labels |
| `--font-text` | Inter | 300, 400, 500, 600 | Body paragraphs, fine print |

### Critical font note — Bebas Neue
**Bebas Neue is a single-weight font: 400 only.**  
Every heading rule must use `font-weight: 400`. Writing `font-weight: 700` or `font-weight: 800`
causes browser fallback rendering with incorrect letter-spacing and sizing.

### Type style rules
- Headings (`font-display`/`font-heading`): always `text-transform: uppercase`, `letter-spacing: 0.04em`
- Nav / buttons (`font-body`): `text-transform: uppercase`, `letter-spacing: 0.12em`, `font-weight: 800`
- Eyebrow labels (`font-script`): `font-style: italic`, `letter-spacing: 0.2em`, `text-transform: uppercase`
- Body copy (`font-text`): normal case, `font-size: 15px` (0.85rem at 18px base), `line-height: 1.7`

---

## Logo

- **File:** `images/logo.png`
- **Format:** Transparent PNG — works on any background
- **Inner pages:** `../images/logo.png` (one level up)
- **No separate light version** — the single transparent PNG works on dark and light backgrounds
- **Display size in nav:** 180px wide × 120px tall (`object-fit: contain`)
- **Display size in footer:** 88px tall

### Logo rule
To swap the logo sitewide: change the `src` attribute on every `<img class="site-logo">` tag.
The logo always lives in `/images/` relative to site root.

---

## Buttons

### Primary (dark bg context)
```css
background: #E8A000;  /* --mc-gold */
color: #1A1A1A;       /* --mc-black */
font-family: Bebas Neue, sans-serif;
font-size: 1.1rem;
letter-spacing: 0.12em;
padding: 14px 32px;
text-transform: uppercase;
clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
```
Note: the brand-identity doc shows a clip-path parallelogram button. The live site uses pill
(`border-radius: 9999px`) buttons. The pill variant is the current standard.

### Secondary / outline
```css
border: 2px solid #1A1A1A;
color: #1A1A1A;
background: transparent;
```

### Hover states
- Primary: `background: #E05A00` (burnt orange), `transform: scale(1.03)`
- CTA pill: same

---

## Component Patterns

### Dark section scoping
The site is dark-dominant. The `:root` defaults are set to light (cream) values, then
`.site-header, .site-footer, .guarantee-section` restore dark values:

```css
/* Dark-section override block */
.site-header,
.site-footer,
.guarantee-section {
  --color-black:        #1A1A1A;
  --color-white:        #F5F0E8;
  --color-text:         #F5F0E8;
  --color-text-light:   rgba(245,240,232,0.60);
  --color-border:       rgba(245,240,232,0.15);
}
```

Add any new dark sections (service pages dark cards, etc.) to this selector list.

### Nav
- Sticky, dark background, 120px tall
- 3 pill buttons centered + CCB badge right-aligned
- No dropdowns
- Mobile: hamburger toggle, CCB badge hidden

### Video strip
- 4 vertical panels, 4:5 aspect ratio
- Padding-top trick for ratio
- Per-video mute/play-pause controls
- Orange bottom bumper label
- **Videos are NOT in the repo** — client provides `.mp4` files separately

### sp-wrap (service pages)
- Hero card → 2-col cards grid → Why Us → CTA card
- All cards use dark (`#1A1A1A`) or charcoal (`#EAE5DC`) backgrounds
- See css/styles.css for `.sp-wrap`, `.sp-hero-card`, `.sp-cards-grid`, `.sp-why-card`, `.sp-cta-card`

---

## Do Not Use
- Emoji in any user-facing content
- Any font other than Bebas Neue, Barlow Condensed, or Inter
- `font-weight: 700` or `font-weight: 800` on Bebas Neue headings (400 only)
- Root-relative paths (`/images/...`) — use relative paths only
- Hardcoded hex values in selectors — all colors must reference CSS variables
