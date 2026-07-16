# Aman Tokyo – Vue Project Context

## What this is
A simplified Vue 3 + Vite rebuild of the Aman Tokyo hotel page (originally from https://www.aman.com/hotels/aman-tokyo), converted from a 3,483-line Drupal 11 HTML snapshot into a clean, component-based frontend. All analytics, OneTrust, Slick/Blazy JS, and Drupal markup have been stripped. Images load from aman.com's CDN directly (no local image files needed).

## Source files
- `HTMLorig.html` — "Save as HTML only" browser download of the original page (no assets folder). Used as the content source.
- `orig.html` — full browser save including companion `_files/` folder (not present). Not used.

## Project location
`C:\Users\User\Documents\VSC\WebsiteProj\aman-tokyo\`

## Tech stack
- Vue 3 (Composition API, `<script setup>`)
- Vite 8
- Plain CSS (no Tailwind, no component library)
- No Vue Router (single page)

## Running the project
```bash
cd "C:\Users\User\Documents\VSC\WebsiteProj\aman-tokyo"
npm install       # if not already done
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
```
Build output: 89 kB JS / 8 kB CSS. Builds clean with zero errors.

## File structure
```
src/
├── main.js                        ← mounts app, imports main.css
├── App.vue                        ← composes all sections top to bottom
├── assets/
│   └── main.css                   ← ALL styles (CSS custom properties, full design system)
├── data/
│   └── content.js                 ← all text, image URLs, nav links, contact info
└── components/
    ├── TheHeader.vue              ← full-bleed sticky header (Menu+search, logo, English, Reserve) + property sub-nav; fullscreen slide-in menu
    ├── HeroSection.vue            ← full-width image banner on top, centered title/description below on cream (Vimeo film is domain-locked, so a CDN poster image is used)
    ├── GallerySection.vue         ← 30-image crossfade carousel, dot indicators, prev/next arrows
    ├── AccommodationSection.vue   ← 2-column square card grid (Suites / Signature Suites)
    ├── FeaturedSection.vue        ← 3-column portrait card grid on sand bg (Offers/Dining/Wellness)
    ├── JourneySection.vue         ← "Journey through Japan" 2-col promo (image + copy + Discover more)
    ├── LocationSection.vue        ← "Getting here": Google Maps embed + transit/airport directions + address/phone/email + Reserve CTA
    ├── IntroSection.vue           ← "The Peace of Aman in the Heart of Tokyo" 2-col editorial (copy + image) on sand bg
    ├── NearbyResortsSection.vue   ← "Nearby resorts" 3-card grid (Amanemu / Aman Kyoto / Amanpulo)
    └── TheFooter.vue              ← dark footer (logo, nav links, contact, social, copyright)
```

## Design tokens (in main.css :root)
```css
--cream:      #f3eee7   /* page background */
--cream-dark: #e9e3da   /* borders, dividers */
--sand:       #ece6dc   /* featured section bg */
--charcoal:   #2c2c2c   /* text, dark buttons, footer bg */
--mid-grey:   #696969   /* body text, labels */
--light-grey: #b8b0a7   /* footer text, dots */
--font-serif: Georgia, Times New Roman, serif
--font-sans:  Helvetica Neue, Helvetica, Arial, sans-serif
```

## Content data (src/data/content.js)
All content is in one file, exported as named constants:
- `hero` — subtitle, title, description text, Vimeo URL
- `navLinks` — property nav items with optional `children` arrays (drives the fullscreen menu)
- `propNavLinks` — property sub-nav tabs (Gallery … Contact Us)
- `galleryImages` — 30 objects with `{ src, alt }`, all pointing to aman.com CDN
- `accommodationCards` — 2 cards (Suites, Signature Suites)
- `featureCards` — 3 cards (Exclusive Offers, Musashi by Aman, Aman Spa)
- `journey` — "Journey through Japan" promo card
- `intro` — "The Peace of Aman in the Heart of Tokyo" (title, 2 paragraphs, image, CTA)
- `nearbyResorts` — 3 cards (Amanemu, Aman Kyoto, Amanpulo)
- `contact` — address, phone, reservationPhone, email, reservationUrl, `directions[]`
- `footerLinks` — 6 footer nav links
- `socialLinks` — Instagram, Facebook, Twitter

## Current status
Header CSS has been reworked to match the real site (full-bleed layout, Menu label + search icon, "English" selector, wider Reserve, larger logo, framed property sub-nav with all 11 tabs).

Four previously-dropped content blocks from the original page have now been re-added, in the original DOM order (after FeaturedSection): **Journey through Japan**, **Getting here** directions (folded into LocationSection), **The Peace of Aman in the Heart of Tokyo** (IntroSection), and **Nearby resorts** (NearbyResortsSection). Body section order in App.vue is now: Hero → Gallery → Accommodation → Featured → Journey → Location → Intro → NearbyResorts.

Still intentionally omitted (corporate/global, not property content): the "More information" corporate link list and the global "Destinations" mega-menu.

**Note on tooling:** the Linux sandbox can't run `npm run build` (Vite 8's `rolldown` native binary is Windows-only in node_modules), and the bash mount can serve stale copies of just-edited files. Verify visually with `npm run dev` on Windows.

## Known things that may need work
- The Vimeo embed in the hero uses `background=1` mode (autoplay, muted, no controls) — may not load without internet
- Google Maps embed in LocationSection uses a placeholder embed URL — may need a real API key or coordinates
- The property sub-nav sits below the header using `margin-top: 68px` — may need adjustment if header height changes
- Gallery is a simple crossfade; the original used a 5-up centered Slick carousel
- No mobile menu animation beyond a basic Vue `<Transition>` fade
- Fonts: using system Georgia/Helvetica instead of the original Lyon Display + Whitney (licensed fonts, not included)

## What the original site had that this doesn't
- Global mega-menu (all Aman destinations worldwide)
- Language switcher (EN / 简体中文 / 日本語 / Français / Italiano / Español)
- Booking date-picker bar
- Vimeo player with poster image fallback
- Photoswipe lightbox on gallery
- Mapbox interactive map (replaced with Google Maps iframe)
- Search sidebar
- Cookie consent banner (OneTrust)
- Full Drupal schema.org JSON-LD structured data
