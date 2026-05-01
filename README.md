# Multi Contracting, LLC — Website

Production-ready static website for Multi Contracting, LLC, a licensed roofing and exterior contracting company based in Eugene, OR. Built with semantic HTML5, custom CSS (no frameworks), and vanilla JavaScript.

---

## Project Overview

**Business:** Multi Contracting, LLC  
**Location:** 90050 Prairie Rd, Eugene, OR 97402  
**Phone:** (541) 600-9570  
**Email:** multicontractllc@gmail.com  
**License:** CCB#238954 — Licensed, Bonded & Insured  
**Languages:** English & Spanish (Se Habla Español)  

---

## File & Folder Structure

```
/
├── index.html                      # Homepage
├── about.html                      # About page
├── contact.html                    # Contact page with form
├── services/
│   ├── roofing.html                # Roofing services hub
│   ├── roof-repair.html
│   ├── roof-replacement.html
│   ├── residential-roofing.html
│   ├── commercial-roofing.html
│   ├── siding.html
│   ├── fencing.html
│   ├── painting.html
│   └── curbing.html
├── service-areas/
│   ├── eugene.html
│   ├── springfield.html
│   └── santa-clara.html
├── css/
│   └── styles.css                  # All custom styles — no frameworks
├── js/
│   └── main.js                     # All JavaScript — mobile nav, form validation, animations
└── README.md
```

---

## Setup & Deployment

### View Locally
Open `index.html` in any modern browser. No build tools required — all paths are relative.

### Deploy to GitHub Pages
1. Push all files to the `main` branch.
2. Go to **Settings → Pages** → Source: `main` / `/ (root)` → Save.
3. Live at: `https://kellensnider.github.io/Multi-Contracting/`

### Deploy to Netlify
Drag the project folder onto [app.netlify.com/drop](https://app.netlify.com/drop). No build command needed.

---

## Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#1c3557` | Deep navy — nav, headings |
| `--color-secondary` | `#e05c1a` | Burnt orange — CTAs, accents |
| `--color-accent` | `#f4a823` | Amber — stars, badges |
| `--color-bg-alt` | `#f4f7fb` | Light gray sections |

### Typography
- **Headings:** Montserrat (Google Fonts), weights 600/700/800
- **Body:** Open Sans (Google Fonts), weights 400/500/600

### Breakpoints (Mobile-First)
`480px` | `768px` | `1024px` | `1280px`

---

## How to Update Common Content

| What to change | Where to find it |
|----------------|-----------------|
| Phone number | Search/replace `(541) 600-9570` and `tel:5416009570` in all HTML files |
| Business hours | Footer of each page (search `Business Hours`); also contact.html hours table |
| Testimonials | `index.html` — find `TESTIMONIALS SECTION` comment, edit each `<article class="testimonial-card">` |
| License # | Search/replace `CCB# 238954` across all files |
| Hero background image | In `css/styles.css`, find `.hero` and replace the gradient with a real `background-image` URL |
| Contact form email | Replace `action="#"` in `contact.html` with a Formspree or Netlify Forms endpoint |

---

## Hero Background Image (Production)

In `css/styles.css`, replace the `.hero` gradient with:
```css
.hero {
  background-image: linear-gradient(var(--color-overlay), var(--color-overlay)),
                    url('images/hero-roofing-eugene.jpg');
  background-size: cover;
  background-position: center top;
}
```
Place real photos in an `/images/` directory.

---

## Browser Compatibility

Chrome 90+, Firefox 88+, Safari 14+, Edge 90+, iOS Safari 14+, Android Chrome 90+.  
Uses CSS Grid, Flexbox, Custom Properties, and IntersectionObserver (with graceful fallback).

---

## Accessibility

- Semantic HTML5 throughout (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, etc.)
- ARIA labels on nav, buttons, links, images, and form fields
- `aria-expanded` on all dropdown and hamburger toggles
- `aria-required` and `aria-describedby` on form fields
- `aria-live="polite"` on form success message
- Alt text on all images
- Keyboard navigable — all interactions work without a mouse
- High contrast color scheme meeting WCAG AA standards
# test push Fri Apr 17 11:54:27 PDT 2026
