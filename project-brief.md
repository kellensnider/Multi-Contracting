# Project Brief — Multi Contracting, LLC

**Prepared by:** Sower Creative Tech  
**Status:** Active — initial build complete, ongoing updates  
**Live URL:** https://kellensnider.github.io/Multi-Contracting/  
**GitHub repo:** https://github.com/kellensnider/Multi-Contracting  

---

## Client Overview

**Business name:** Multi Contracting, LLC  
**Industry:** Exterior contracting — roofing, siding, fencing, painting, curbing  
**Primary location:** Eugene, Oregon  
**Service region:** Lane County and the greater Willamette Valley  
**Phone:** (541) 600-9570  
**Email:** multicontractllc@gmail.com  
**Address:** 90050 Prairie Rd, Eugene, OR 97402  
**License:** CCB #238954 — Licensed, Bonded & Insured in Oregon  
**Founded:** ~2004 (20+ years in business)  
**Languages:** English & Spanish (Se Habla Español)  

### Tagline
> "Integrity in Every Layer"

### About the business
Multi Contracting, LLC is a family-operated company founded in Eugene on a mission to deliver
honest, high-quality exterior contracting at a fair price. They are a bilingual company serving
the full diversity of Lane County. They offer financing through Hearth ($0 Down available).

---

## Credentials

| Credential | Detail |
|---|---|
| CertainTeed Shingle Master | Certified installer for premium CertainTeed roofing systems |
| CCB Licensed #238954 | Licensed, bonded & fully insured in Oregon |
| 20+ Years Experience | Trusted in Lane County since 2004 |
| Bilingual Team | Full service in English & Spanish |
| Hearth Financing | Flexible payment options, $0 Down available |

---

## Pages Built

### Root level
| File | Description |
|---|---|
| index.html | Homepage — hero, video strip, services dark section, guarantee, about, testimonials |
| about.html | About page |
| contact.html | Contact page with form |
| additional-services.html | Siding, fencing, painting, curbing overview |

### Services (services/)
| File | Service |
|---|---|
| roofing.html | Roofing hub (links to sub-services) |
| residential-roofing.html | Residential Roofing |
| commercial-roofing.html | Commercial Roofing |
| roof-repair.html | Roof Repair |
| roof-replacement.html | Roof Replacement |
| siding.html | Siding |
| fencing.html | Chain Link Fencing |
| painting.html | Interior & Exterior Painting |
| curbing.html | Curbing Designs |

### Service Areas (service-areas/)
| File | City |
|---|---|
| eugene.html | Eugene, OR |
| springfield.html | Springfield, OR |
| santa-clara.html | Santa Clara, OR |

---

## Service Lists

**Roofing division:**
- Roof Repair
- Roof Replacement
- Residential Roofing
- Commercial Roofing
- Roof Inspections

**Additional services:**
- Siding
- Chain Link Fencing
- Interior & Exterior Painting
- Curbing Designs

---

## Key Features

- **4-panel vertical video strip** on homepage (financing, neighbors, structural-damage, what-makes-us-different)
  - Video files: `videos/financing.mp4`, `videos/neighbors.mp4`, `videos/structural-damage.mp4`, `videos/what-makes-us-different.mp4`
  - Note: video files are NOT in the repo — client serves/provides separately
- **Hearth financing** — $0 Down, mentioned in videos and footer
- **Bilingual** — "Se Habla Español" noted in guarantee and about sections
- **Contact form** — on contact.html (check endpoint before launch)
- **sp-wrap layout** — used on all service detail pages

---

## Nav Structure

3 pill buttons (no dropdowns) + CCB badge on the right:
1. Roofing Services → services/roofing.html
2. Additional Services → additional-services.html
3. Contact Us → contact.html

---

## Testimonials (verified Google reviews)

| Reviewer | Quote excerpt |
|---|---|
| Nicola Calvert | "Multi Contracting LLC did a wonderful job installing all new sheathing and installing a new roof... I'm a Realtor and I've worked with a lot of roofers over the years. I very much recommend Multi Contracting!" |
| Marilyn A. Hanes | "He is authentically professional in every step of the way from an estimate to a completed job. He did everything he said he would do and then some..." |
| Mona Ragab | "This company did a superb job in record time. Gerald and the crew are experienced and highly motivated... Pricing was reasonable too." |

---

## Deployment

- **Platform:** GitHub Pages (subdirectory deployment)
- **Owner account:** kellensnider
- **Repo:** Multi-Contracting
- **Live URL:** https://kellensnider.github.io/Multi-Contracting/
- **Custom domain:** Not configured (TODO — confirm with client)
- **HTTPS:** Enforced via GitHub Pages

---

## Open TODOs

- [ ] Social media links are placeholders (facebook.com, instagram.com) — get actual business profile URLs
- [ ] Contact form endpoint — verify Formspree/Web3Forms URL is active
- [ ] OG image (og-image.jpg) — not confirmed in repo; og:image meta tags may be missing
- [ ] Exact street address — needed for LocalBusiness JSON-LD schema
- [ ] Geo coordinates — needed for LocalBusiness JSON-LD schema
- [ ] Custom domain — confirm if client wants multicontractingllc.com pointed here
- [ ] Favicon — not present in repo
- [ ] robots.txt and sitemap.xml — not present in repo
- [ ] Business hours — assumed Mon-Fri 8AM-5PM, confirm with client
- [ ] Video files (videos/*.mp4) — not in repo, confirm how client intends to host them
