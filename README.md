# Eteernal Beautyy — Makeup Studio Website

Marketing website for **Eteernal Beautyy Makeup Studio**, a bridal and occasion
makeup studio in Bangla Bazaar, Lucknow, run by makeup artist **Sanjoli
Singh**.

The site's job is simple: show the work, explain what things cost, and make it
easy for a bride-to-be to call or message and book a trial. Most visitors arrive
on a phone, so mobile layout and the WhatsApp shortcut are treated as primary,
not as an afterthought.

## Tech stack

| Concern    | Choice                                          |
| ---------- | ----------------------------------------------- |
| Framework  | React 18 with Create React App (`react-scripts` 5) |
| Routing    | `react-router-dom` 7                            |
| Styling    | Tailwind CSS 3.4 (via PostCSS) — the only styling system |
| Motion     | `framer-motion`                                 |
| Icons      | `react-icons` (Feather + Font Awesome sets)     |
| Fonts      | Cormorant Garamond, Jost, Pinyon Script (Google Fonts) |
| Testing    | Jest + React Testing Library                    |

There is **no backend**. The contact form validates in the browser, shows a
confirmation, and hands the visitor a pre-filled WhatsApp message.

## Getting started

Requires Node 18 or newer.

```bash
npm install     # install dependencies
npm start       # dev server on http://localhost:3000
npm test        # run the smoke tests in watch mode
npm run build   # production bundle into build/
```

The production build is a static site — `build/` can be dropped onto any static
host. If the host is not configured for single-page apps, add a rewrite so every
path serves `index.html`, otherwise a hard refresh on `/services` will 404.

## Project structure

```
public/
  index.html          Document shell: SEO tags, Open Graph, Google Fonts
  manifest.json       PWA metadata
  assets/             All imagery, served from /assets/...
src/
  App.js              Router and route table
  index.css           Tailwind layers plus base/component classes (.shell, .label, .btn …)
  data/site.js        Business details and all page content
  components/
    layout/           Navbar, Footer, Layout, ScrollToTop, WhatsAppFab
    ui/               Reveal, Eyebrow, GoldMarquee, PageIntro, Lightbox, ContactCta
    home/             The home page sections, in scroll order
  Pages/
    Home/  About/  Services/  Gallery/  Contact/  NotFound/
```

### Routes

| Path        | Page      | Contents                                                     |
| ----------- | --------- | ------------------------------------------------------------ |
| `/`         | Home      | Hero, gold marquee, studio intro, service preview, signature bridal band, testimonials, gallery teaser, booking band |
| `/about`    | About     | Artist story, stats, working principles, training timeline    |
| `/services` | Services  | Full price list grouped into Bridal, Party & Occasion, Hair & Draping, Classes |
| `/gallery`  | Gallery   | Filterable masonry gallery with a lightbox                    |
| `/contact`  | Contact   | Validated enquiry form, studio details, Google Map            |
| anything else | 404     | Links back to the five real routes                            |

## Where to update content

Almost all copy lives in **`src/data/site.js`** — edit there rather than inside
components.

- **Phone, WhatsApp, email, address, hours** — the `studio` object. The phone
  number appears in the navbar, footer, contact page and every WhatsApp link;
  changing it in one place updates all of them.
- **Service names, descriptions, prices, durations** — `serviceGroups` drives
  `/services`; `signatureServices` drives the four home-page cards.
- **Testimonials** — the `testimonials` array.
- **Gallery photographs and their categories** — the `galleryImages` array. Add
  the file to `public/assets/`, then add an entry with `src`, `alt`, `category`
  (`Bridal`, `Party` or `Editorial`), `caption` and `orientation`.
- **About page numbers and training history** — `stats` and `credentials`.
- **Contact form service dropdown** — `serviceOptions`.
- **Social links** — `socialLinks`. These currently point at `#`; replace the
  `href` values with the real profiles.

Longer prose (the artist story, the working principles, the pull quote) sits
inside the relevant page component.

### Design tokens

Colours, fonts, letter spacing and keyframes are defined in
`tailwind.config.js`. Use the tokens (`ink`, `gold`, `blush`, `cream`,
`font-display`, `tracking-label`) rather than hard-coded hex values so the
palette stays consistent.

Shared class helpers live in `src/index.css`: `.shell` (page gutter),
`.label` (small-caps eyebrow), `.copy` / `.copy-invert` (body text),
`.btn` variants, `.rule` (gold hairline) and `.paper` (background texture).

### Images

Every image is local, in `public/assets/`, and referenced as `/assets/name.jpg`.
Keep new photographs under roughly 250 KB and around 1400 px on the long edge —
the existing files are sized that way and the pages are laid out for portrait
(3:4) crops.

## Accessibility notes

The site is built to keep working for people who are not using a mouse or who
have motion sensitivity: semantic landmarks throughout, alt text on every
photograph, gold focus rings, labelled form fields with inline error messages,
`aria-label` on icon-only buttons, and scroll animations plus the marquee
disabled under `prefers-reduced-motion`.
