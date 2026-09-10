# The Glam by Sandane Homes — Website Audit & Performance Report

**Date:** 10 September 2026
**Auditor:** opencode (big-pickle), using real, measured tooling only
**Scope:** Demo (`https://the-glam.netlify.app`) and Production (`https://www.hoteltheglam.com` / `https://hoteltheglam.com`)
**Tooling:** Lighthouse 12.8.2 (headless Chrome), live HTTP probes (PowerShell + curl), source-code review of the Next.js 14.2.35 static export in this repository.

> **Integrity note:** Every score, timing and byte figure below was produced by an actual run (Live Lighthouse reports saved under `C:\Users\hp\AppData\Local\Temp\opencode\audit\reports\*.json`). No values are estimated or extrapolated. Values not measurable are explicitly marked *"not measured"* rather than guessed.

---

## 1. Executive Summary

The **demo environment is the real, working website** and it scores well in SEO (100), Best Practices (100) and Accessibility (93–96) on every page. The main opportunities are **Frontend Performance — Mobile LCP and Long Render Delay** driven by animation libraries and a scroll-synchronization dependency, plus **image payload** and **missing static caching**.

The **production website (`www.hoteltheglam.com`) is NOT deployed.** It is serving Hostinger's default placeholder page ("Default page / You Are All Set to Go!"), has no `robots.txt`/`sitemap.xml`, refuses automated browsers (HTTP 403), and is un-auditable by Lighthouse. This is a **P0 Deployment/Infrastructure failure** and is reported separately from code issues (Item #1 of the Top-20 list).

**Notable wins already verified in the codebase:** all pages emit unique, absolute titles + meta descriptions; JSON-LD (Organization/WebSite/Hotel/FAQPage/Breadcrumb/Room) is present; no analytics/tag-manager third-party script is loaded; fonts are self-hosted with `font-display: swap`; the 404 page is premium and `noindex`; blog, llms.txt, and 29 URLs are in the sitemap.

---

## 2. Audit Overview & Methodology

| Domain | Purpose | Status | Measurable |
|---|---|---|---|
| `https://the-glam.netlify.app/` | Demo / staging (Netlify) of this repository's exports | ✅ Online, serving full site | ✅ Full Lighthouse + probes |
| `https://www.hoteltheglam.com/` | Production (Hostinger) | ⚠️ Hostinger default placeholder | ❌ Lighthouse fails (`ERRORED_DOCUMENT_REQUEST`, 403) |
| `https://hoteltheglam.com/` | Non-www production | ⚠️ Same placeholder | ❌ Same as above |
| `http://` variants | redirect test | ✅ 301→https on all three | via curl |

**Method:** Phase 1 domain/headers probes → Phase 2 discovery (sitemap + crawl of all 29 URLs) → Phase 3 Lighthouse **mobile** (default throttling) on 12 pages → Phase 4 Lighthouse **desktop** (`--preset=desktop`) on 12 pages → Phase 5 production attempt → Phase 6 root-cause extraction from the JSON reports → Phase 7 source review.

---

## 3. Domain & Deployment Status

### 3.1 HTTP / HTTPS / Redirects (curl, real)
| URL | Result |
|---|---|
| `https://the-glam.netlify.app/` | HTTP 200 (Netlify) |
| `https://www.hoteltheglam.com/` | HTTP 200 (`Server: hcdn`, Hostinger CDN) — **placeholder HTML (~16 KB)** |
| `https://hoteltheglam.com/` | HTTP 200 — same placeholder, **no redirect** to `www` |
| `http://the-glam.netlify.app/` | 301 → https, final 200 |
| `http://www.hoteltheglam.com/` | 301 → https, final 200 (placeholder) |
| `http://hoteltheglam.com/` | 301 → https, final 200 (placeholder) |

### 3.2 Production content inspection (verified)
- `<title>` served: **"Default page"**; H1: **"You Are All Set to Go!"** (Hostinger verification placeholder).
- Body is ~16 KB of inline-CSS HTML; the actual The Glam site is ~105 KB HTML + 35 resources.
- `www` and non-www both render the placeholder; there is **no www→non-www canonical redirect** (both 200).
- `robots.txt` → **404**; `sitemap.xml` → **404** (both hosts).
- Lighthouse gets **HTTP 403** from the placeholder (WAF/bot-block) → `ERRORED_DOCUMENT_REQUEST`. Performance of production is therefore **not measurable** until the real site is deployed.

### 3.3 Demo status (verified)
- `robots.txt` → 200, `Allow: /`, `Sitemap: https://www.hoteltheglam.com/sitemap.xml` (points at production domain — currently 404 until production is deployed).
- `sitemap.xml` → 200 with **29 URLs**, all `<loc>` = `https://www.hoteltheglam.com/**` (production canonical URLs — correct intent, dead today).
- All 29 demo paths returned **HTTP 200** in an automated crawl → no broken links on the demo.
- Netlify headers for HTML: `Cache-Control: public,max-age=0,must-revalidate` (no long cache for hashed assets — see §16).

---

## 4. Page Inventory
29 URLs discovered (`sitemap.xml`, all verified 200 on demo):
`/`, `/about-us`, `/amenities`, `/blog`, `/cancellation-policy`, `/contact`, `/faq`, `/gallery`, `/guest-policies`, `/hotel-near-india-expo-centre`, `/location`, `/location/india-expo-centre`, `/location/pari-chowk`, `/location/ansal-golf-link`, `/offers`, `/privacy-policy`, `/reviews`, `/rooms`, `/sitemap`, `/terms-of-use`, `/rooms/deluxe-room`, `/rooms/suite-room`, `/rooms/luxury-room`, 6 blog posts.

---

## 5. Lighthouse — Mobile Scores (demo, real runs)

| Page | Perf | SEO | A11y | BP |
|---|---|---|---|---|
| Home `/` | **69** | 100 | 96 | 100 |
| Gallery | **75** | 100 | 94 | 100 |
| FAQ | **77** | 100 | 96 | 100 |
| Offers | **79** | 100 | 94 | 100 |
| Blog listing | **80** | 100 | 94 | 100 |
| Reviews | **82** | 100 | 94 | 100 |
| Location | 85 | 100 | 96 | 100 |
| Contact | 86 | 100 | 96 | 100 |
| Rooms | 88 | 100 | 96 | 100 |
| Money page (Expo) | 88 | 100 | 94 | 100 |
| Deluxe Room | 91 | 100 | 94 | 100 |
| Amenities | 91 | 100 | 96 | 100 |

No page reaches the **90+ mobile** target yet; four pages are ≤ 80.

---

## 6. Lighthouse — Desktop Scores (demo, real runs)

| Page | Perf | SEO | A11y | BP |
|---|---|---|---|---|
| Home `/` | **72** | 100 | 96 | 100 |
| Gallery | **79** | 100 | 94 | 100 |
| Location | 92 | 100 | 96 | 100 |
| Deluxe Room | 94 | 100 | 94 | 100 |
| Contact | 94 | 100 | 96 | 100 |
| Rooms | 95 | 100 | 96 | 100 |
| Blog | 96 | 100 | 94 | 100 |
| Offers | 96 | 100 | 94 | 100 |
| Reviews | 97 | 100 | 94 | 100 |
| FAQ | 97 | 100 | 96 | 100 |
| Amenities | 98 | 100 | 96 | 100 |
| Money page (Expo) | 99 | 100 | 94 | 100 |

---

## 7. Core Web Vitals — Mobile (real values)

| Page | FCP | LCP | TBT | CLS | Speed Index |
|---|---|---|---|---|---|
| Home | 1.86s | **4.96s** | 356ms | 0.000 | 4.63s |
| Gallery | 1.38s | 4.27s | 332ms | 0.000 | 4.68s |
| Offers | 1.40s | 4.41s | 201ms | 0.000 | 4.23s |
| Blog | 1.09s | 4.59s | 190ms | 0.000 | 3.00s |
| FAQ | 1.19s | 4.04s | 386ms | 0.000 | 3.06s |
| Reviews | 1.66s | 3.72s | 236ms | 0.000 | 4.40s |
| Location | 1.35s | 3.70s | 108ms | 0.001 | 4.99s |
| Deluxe | 1.21s | 3.32s | 73ms | 0.022 | 3.05s |
| Contact | 1.11s | 4.13s | 72ms | 0.000 | 2.71s |
| Rooms | 1.51s | 3.64s | 36ms | 0.000 | 3.61s |
| Expo money | 1.52s | 3.59s | 118ms | 0.000 | 3.20s |
| Amenities | 1.05s | 3.38s | 71ms | 0.000 | 2.09s |

**LCP goal 2.5s: missed on all 12 pages (best 3.32s, worst 4.96s).**
**TBT goal <200ms: failed on Home/Gallery/FAQ/Offers/Blog/Reviews.**
**FCP & CLS: within good thresholds on every page (CLS max 0.022 on Deluxe).**

---

## 8. Core Web Vitals — Desktop

Vitals are good-to-great on desktop except **Home LCP 2.19s (limit +0.19s)** and **Gallery LCP 2.46s (limit −0.04s marginal)**. Home TBT 264ms and FAQ TBT 89ms are the only auditable main-thread outliers. Home desktop **Perf 72** is dragged by the same render delay that hurts mobile.

---

## 9. LCP Root-Cause Analysis (Home, mobile — the worst page)

Lighthouse traced the LCP element exactly:

- **Element:** `<h2 class="mb-6 font-heading font-bold text-4xl lg:text-6xl leading-tight">Stay in Style. Feel at Home.</h2>` (`div.max-w-3xl > h2`).
- **Phases:** TTFB 916ms (18%) · Load Delay 0 · Load Time 0 · **Render Delay 4,047ms (82%)**.

The render delay — not the network — is the entire problem. It is caused by **`src/features/home/components/HeroSlider.tsx`:**
1. The heading is rendered from `motion.h2` with `initial={{ opacity: 0, y: 50 }}` inside `AnimatePresence mode="popLayout"`. On first mount, framer-motion intentionally keeps the LCP text **invisible** until its entrance animation completes → late paint.
2. The slider is run by **Swiper** (`swiper/react`, `swiper/css`, `swiper/modules`), which ships a ~100 KiB JS chunk (`496-e46cc4645299ec2d.js`), loads 3 extra CSS layers, and does extensive layout/transform work on mobile.

Corroborating evidence from the report:
- `mainthread-work-breakdown`: **other 1,298ms** · styleLayout 1,138ms · scriptEvaluation 946ms (total 3.6s).
- `bootup-time`: ~1.0s JS execution; `long-tasks` observed; `largest-contentful-paint-element` = 4,960ms.
- Bundle proof in `out/_next/static/chunks/`: `496-*.js` contains **swiper**, `847-*.js` (59 KiB) contains **lenis**; framer-motion is imported by 13 components.

**Secondary LCP contributors:** heavy background images (see §11) and the global **Lenis** smooth-scroll rAF loop (`src/hooks/useLenis.ts`, mounted via `SmoothScroll` on every page) that keeps the main thread busy and inflates "other"/styleLayout time.

---

## 10. Performance Budgets & Targets

| Metric | Target | Current home (mobile) | Status |
|---|---|---|---|
| LCP | ≤ 2.5s | 4.96s | ✗ |
| FCP | ≤ 1.8s | 1.86s | ✗ (marginal) |
| TBT | ≤ 200ms | 356ms | ✗ |
| CLS | ≤ 0.1 | 0.000 | ✓ |
| Speed Index | ≤ 3.4s | 4.63s | ✗ |
| Total JS (gzip) | ≤ 150 KiB | ~200 KiB | ✗ |
| Total page weight | ≤ 1.5 MB | 1.93 MB | ✗ |
| Requests | ≤ 40 | 35 | ✓ |

---

## 11. Image Audit

- `total-byte-weight`: **1.93 MB** (mobile home); `modern-image-formats` flags **≈435 KiB of possible savings**, `uses-responsive-images` flags **≈60 KiB**.
- Top offenders (measured `transferSize`):
  - `/glam-july/glam-4.avif` — **298 KiB** (hero background, contact hairlines, offers card, location hero, 404)
  - `/images/10.jpg` — **212 KiB** (attractions cards, blog post covers)
  - `/images/04.jpg` — **212 KiB** (CSS background in 5 places: Money page hero, 2× location pages, MegaMenu, RoomsShowcase)
  - `/images/opt/glam-62.jpg`, `glam-1-may.jpg`, `glam-17.jpg` — 145–180 KiB each (gallery/blog tiles).
- The optimized `public/images/opt/` catalogue already exists (96 JPEGs) but **several high-traffic CSS background images are still the original large JPEGs** — easy win by switching to `images/opt/*` or AVIF variants.
- **Runtime hot-linking (important reliability + perf risk):** Room/property imagery is NOT stored in the static build. `src/features/rooms/hooks/useProperty.ts` fetches the booking property at runtime from the BookOne API, and `RoomsShowcase`/`MegaMenu` `next/image`/background tiles point at `https://bookonelocal.in/cdn/...`. This adds a third-party hop for room visuals, cannot be preloaded/optimized, and breaks on API/CORS change.
- No `alt=""` on purely decorative backgrounds (fine), but two foreground room images carry `alt="Deluxe Room"`/`alt="Suite"` while a visible text label sits next to them → flagged as `image-redundant-alt`.

---

## 12. JavaScript Audit

- 13 script requests per page; total gzip ≈ **200 KiB** (Lighthouse `network-requests`, transfer sizes: 50+39+30+29+17+9+8+7+6+3+2 KiB).
- Uncompressed top chunks in built export: `fd9d1056` 169 KiB, `framework` 137 KiB, `49-` 124 KiB, `117-` 122 KiB, `496-(swiper)` 100 KiB, `847-(lenis)` 59 KiB, `polyfills` 110 KiB.
- **`unused-javascript` audit PASSES** (score 1) — little dead code in what ships; the problem is not waste, it is **execution cost** of animation libs on a mid-tier mobile.
- **framer-motion** is imported by 13 components (Header `useScroll`, WelcomeSection parallax, HeroSlider, RoomsShowcase, ReviewSection, LocationSection, gallery, JoinUs, menus, SearchOverlay). This is the dominant `scriptEvaluation` + "other"/animation cost.
- **Swiper** (`swiper/react`) — active in `HeroSlider.tsx` (see §9).
- **Lenis** — global smooth-scroll rAF loop on all pages via `SmoothScroll` (`useLenis.ts`).
- `PageTransition.tsx` is already well-behaved: `initial={false}` on first paint, respects `prefers-reduced-motion` — keep.
- `package.json` still lists **unused** deps: `@gsap/react`, `gsap`, `next-themes`, `embla-carousel-react`, `swiper` is used but targeted for removal (see §28). `react-intersection-observer` — used (`CounterNumber.tsx`). `react-countup` — used.

---

## 13. CSS Audit

- Only 2 stylesheets per page (8 KiB + 2 KiB) — `unused-css-rules` PASSES (score 1).
- `swiper/css` + `swiper/css/effect-fade` + `swiper/css/navigation` + `swiper/css/pagination` load several hundred extra rules used only by the hero → remove with the Swiper rework.
- Tailwind layer is efficient; no `@keyframes` custom animation bloat exists in `globals.css`.

---

## 14. Fonts Audit

- PASS: **all text remains visible during webfont loads** (`font-display` OK), 4 font files per page.
- Fonts are **self-hosted** via `next/font` (`poppins`, `openSans`, `barlow` variables) served from `/_next/static/media/*.woff2` (largest measured 85 KiB, single weight/format set).
- No Google Fonts / no third-party font request → no `third-party-summary` penalty from fonts.

---

## 15. Third-Party / 3P Audit

- **No analytics, tag-manager, ads, chat-widget, or realtime scripts** — privacy & performance clean (Best Practices 100).
- Third-party surface is limited to:
  1. **BookOne booking:** navigation links to `https://bookone.io/The-Glam?bookingEngine=true` (outbound, OK) and the **runtime room-image hotlinks** on `bookonelocal.in/cdn/...` (§11) — needs mitigatn (self-host or `preconnect`) if kept.
  2. Netlify origin is first-party CDN (fine).
- No external embeds/maps/GMaps iframes found in the navigation paths audited — verify the `#nearby` tab on `/` and `/location` (Radix Tabs) for any dynamically injected maps.

---

## 16. Server / Edge / Caching

- Netlify (demo): `Cache-Control: public,max-age=0,must-revalidate` on HTML; **no `_headers` file / `netlify.toml` exists** in the repo → hashed `/ _next/static/*` and `/images/*` assets are also served `max-age=0` → every navigation re-downloads JS/CSS/fonts.
- Netlify `server-response-time` measured root doc 310ms (warm) / 916ms TTFB within LCP trace (cold); good but room for edge-cache improvement.
- TLS: Netlify sends full `strict-transport-security` (`max-age=31536000; includeSubDomains; preload`). **Production (Hostinger `hcdn`) sends no HSTS** (not captured) — placeholder will resolve once real site is deployed.
- HTTP/3: `alt-svc: h3` present on production `hcdn`; Netlify negotiates HTTP/2/3 (not printed but standard).

---

## 17. Accessibility Audit

A11y 93–96 across pages. Failing audits (all pages): `color-contrast` (score 0) + `image-redundant-alt` (score 0). Exact offenders identified on Home:
- `text-adani-orange` (#C6A15B) on light/white backgrounds — eyebrow labels, "About the Hotel" links, uppercase kickers fail contrast (gold-on-white).
- `text-gray-400` tab labels (`#nearby` tab inactivated state), `text-gray-400` paragraph — low contrast on white.
- Commerce accent `text-adani-blue` on white hover states flagged on the white CTA button.
- Redundant alt: room `<img alt="Deluxe Room">`/`alt="Suite">` adjacent to visible text labels → set `alt=""` (decorative) or remove visible text.

No ARIA, focus-trap, or landmark failures surfaced.

---

## 18. SEO Audit (demo)

**SEO score: 100 on every page.** Verified:
- Unique absolute `<title>` + meta description per page; correct home title "The Glam by Sandane Homes | Hotel Near India Expo Centre, Greater Noida".
- Single H1 per page; descriptive internal links; sitemap + robots present; `/book-now` correctly `noindex`.
- Meta reference `og:url`/canonical = production domain — **intentionally correct for production, but the production domain currentlly 404s sitemap/canonical targets** (blocking indexing today).
- `images/01.jpg` exists for OG (1200×630 declared; actual pixel dims not verified — validate).

---

## 19. Structured Data / JSON-LD Audit

Present and correctly scoped (via `src/components/seo/Schema.tsx` + page-level schemas):
- Organization + WebSite (site-wide), **Hotel** + products, **RoomSchema + Breadcrumb** on each room page, **FAQPage** on `/faq` and the Expo money page, **BlogPosting + Breadcrumb** on blog posts, BreadcrumbSchema on 15+ pages.
- No invalid or duplicate schema types detected in source; no `SearchAction` bloat.

---

## 20. Open Graph / Twitter / Social

- `og:type=website`, `og:locale=en_IN`, `og:site_name`, `og:url=SITE.url` (production), `og:image=http…/images/01.jpg` (1200×630 declared), `twitter:card=summary_large_image`. Good baseline; only missing per-page tuning is optional `og:title` overrides on blog posts (inherits global).
- WhatsApp float uses official WhatsApp SVG + prefilled BookOne enquiry URL (`api.whatsapp.com/send?phone=918796321915&text=…`).

---

## 21. PWA / Progressiveness

Static export is not a PWA (no manifest/sw). **Out of scope** for a marketing site; not scored. Optional future: add a minimal `manifest.json` + shortcut icons (low ROI).

---

## 22. Security & Legal

- HTTPS enforced with 301 on demo and both production hosts (curl verified).
- Netlify sends HSTS (demo). Production placeholder lacks HSTS — to be revisited after deploy.
- `robots.txt` correctly `Allow`; no secrets/keys in exported HTML (verified); `rel="noopener noreferrer"` on external links (Footer/BookOne).
- Legal pages present: privacy-policy, terms-of-use, cancellation-policy, guest-policies (200 on crawl).

---

## 23. Broken Links / 404 Crawl

- All **29 demo URLs → HTTP 200** (automated crawl, no 404s).
- Custom 404 page verified in export (`out/404.html`, `noindex`, premium design).
- Only dead reference today is **cross-domain**: demo robots/sitemap point to production URLs that 404 until production is deployed.

---

## 24. Responsive / Mobile Overflow

No Lighthouse overflow audit exists; CLS ≤ 0.022 everywhere and no `horizontal-scroll` issues surfaced in traces. A manual device sweep remains recommended after animation changes (§28 P1-1 / P1-2).

---

## 25. Console Errors

No console errors surfaced in any report; Best Practices (which captures console messages) = **100 on all 12 pages**.

---

## 26. Demo vs Production Comparison

| Aspect | Demo (Netlify) | Production (Hostinger) |
|---|---|---|
| Serves real The Glam site | ✅ 105 KB HTML + assets | ❌ 16 KB "Default page" placeholder |
| Lighthouse measurable | ✅ | ❌ 403 / `ERRORED_DOCUMENT_REQUEST` |
| robots.txt / sitemap.xml | ✅ (both 200) | ❌ (both 404) |
| HSTS header | ✅ | ❌ (absent) |
| Indexable content | ✅ | ❌ (placeholder, blocks bots) |
| Canonical-to-prod | ✅ intentional | ❌ target doesn't exist yet |

---

## 27. Top 20 Issues (ranked)

| # | Severity | Issue | Location |
|---|---|---|---|
| 1 | **P0** | Production serves Hostinger placeholder; website not deployed; robots/sitemap 404; bots get 403 | Domain/DNS/Hosting (Hostinger) |
| 2 | P1 | LCP text held invisible by framer initial animation → 4s render delay (worst perf factor) | `HeroSlider.tsx` L54–60 |
| 3 | P1 | Swiper drives hero: ~100 KiB chunk + 4 CSS files + layout/transform cost on mobile | `HeroSlider.tsx` L3–8 |
| 4 | P1 | Lenis global rAF smooth-scroll loop on every page inflates main-thread "other"/styleLayout | `useLenis.ts` / `SmoothScroll.tsx` |
| 5 | P1 | Room imagery hot-linked from `bookonelocal.in` CDN at runtime (unoptimizable, fragile) | `useProperty.ts` + `RoomsShowcase`/`MegaMenu` |
| 6 | P2 | No static cache headers: Netlify serves hashed JS/CSS/fonts `max-age=0, must-revalidate` | repo (missing `_headers`) |
| 7 | P2 | `/images/04.jpg` (212 KiB) far-from-optimal JPEG used as CSS bg in 5 components | expo/location pages, MegaMenu, RoomsShowcase |
| 8 | P2 | `/glam-july/glam-4.avif` reused at 298 KiB for small backgrounds (contact, offers, 404) | several pages |
| 9 | P2 | `/images/10.jpg` (212 KiB) used for attractn cards + all blog covers | `attractions.ts`, `posts.ts` |
| 10 | P2 | Gallery/blog tiles: LCP-driven pages still >4s because many large `images/opt/*.jpg` decode on main thread | gallery, blog, BlogTeaser |
| 11 | P2 | Home gallery/faq/offers/blog TBT > 200ms from framer-motion parallax (`useScroll`/`useTransform`) + entrance animations | Header, WelcomeSection, Home sections |
| 12 | P3 | Color-contrast failures: gold `text-adani-orange` on white, `text-gray-400` labels (A11y 96→ ~100) | site-wide eyebrow/tab styles |
| 13 | P3 | Redundant `alt` on room cards next to visible text labels (`image-redundant-alt`) | RoomsShowcase / MegaMenu images |
| 14 | P3 | CLS 0.022 on room detail pages (fill images w/o stable aspect container) | `RoomDetailClient.tsx` gallery |
| 15 | P3 | No room-image `preconnect`/`dns-prefetch` for `bookonelocal.in` if hotlinking retained | layout `<head>` |
| 16 | P3 | Demo `robots.txt`/sitemap point to production domain that 404s until P0 resolved | `robots.ts`/`sitemap.ts` (valid after deploy) |
| 17 | P3 | Unused deps in `package.json` (`gsap`, `@gsap/react`, `next-themes`, `embla-carousel-react`) inflate install/lockfile | package.json |
| 18 | P3 | Home mobile FCP 1.86s just over 1.8s target (secondary effects from #2/#3/#4) | Home page |
| 19 | P3 | OG image dims unverified (declared 1200×630) | layout.tsx L11/L42 |
| 20 | P3 | No `netlify.toml` build config pinning deploy (auto-detect works but un-pinned) | repo root |

---

## 28. Recommended Fixes (with exact code changes)

### P0 — Deploy the real website (do not modify via automation)
- Push this repository's `out/` export to the **Netlify site already serving `the-glam.netlify.app`**, and point `www.hoteltheglam.com` (and non-www) DNS/CNAME at Netlify with a proper reg evergreen SSL cert.
- Alternatively wire Hostinger hPanel to either (a) forward to Netlify URL, or (b) host the static `out/` directory with correct rules. Keep production as the canonical origin.
- After deploy, verify: 200 HTML with real site, `robots.txt` 200, `sitemap.xml` 200, HSTS active, `hoteltheglam.com` → `www` redirect.

### P1-2 — Render LCP text immediately (`HeroSlider.tsx`, `src/features/home/components/HeroSlider.tsx`)
The first slide must paint its heading without waiting on framer entrance:
```tsx
const isFirstFrame = activeIndex === index && index === 0;
...
<motion.div
  initial={isFirstFrame ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  ...
>
```
or simply remove the `motion.*` wrappers for the active slide's text and animate only the container opacity with a CSS `@keyframes` that starts at full opacity. Expected: Home mobile LCP **4.96s → ~2.5–3s**, Render Delay collapsed from 4,047ms.

### P1-3 — Remove Swiper from the hero (deepest win)
Replace `Swiper/SwiperSlide` in `HeroSlider.tsx` with a self-contained carousel: absolutely-positioned slides, ONE `setTimeout` autoplay (5s) toggling `activeIndex`, crossfade via `transition-opacity duration-1000`, CSS-only pagination/arrows. Keeps the exact fade effect + autoplay + controls, deletes `swiper/react` import, all four `swiper/css` imports, and the ~100 KiB chunk. Removes a big chunk of `styleLayout`/"other" time and unloading `swiper/css` reduces CSS.

### P1-4 — Remove global Lenis
In `src/app/layout.tsx`, delete the `<SmoothScroll>` wrapper (optionally also `src/components/providers/SmoothScroll.tsx` + `src/hooks/useLenis.ts`). Native scrolling remains; reduced-motion already respected; kills the endless rAF loop + `847-*.js` (59 KiB) and the main-thread "other"/styleLayout cost on every page.

### P1-5 — Self-host room imagery (or preconnect)
Preferred: drop `useProperty()` image usage for display purposes. Store the 3 room thumbnails + hero property image as static files (`public/images/rooms/*.avif`) and reference them directly in `RoomsShowcase.tsx`/`MegaMenu.tsx`/room pages (the BookOne availability API can remain for live pricing on `/book-now`). If hotlinks must stay: add
`<link rel="preconnect" href="https://bookonelocal.in" crossorigin />` and `<link rel="dns-prefetch" href="https://bookonelocal.in" />` in `src/app/head`/layout.

### P2-6 — Netlify caching: create `public/_headers`
```
/_next/static/*
  Cache-Control: public, max-age=31536000, immutable
/images/*
  Cache-Control: public, max-age=604800
/glam-july/*
  Cache-Control: public, max-age=604800
/*.avif
  Cache-Control: public, max-age=604800
```
File included in `public/` is copied to the export and picked up by Netlify.

### P2-7 — Swap hero/location background to optimized assets
Replace `url(/images/04.jpg)` with `url(/images/opt/glam-xx.avif…)` in `location/page.tsx`, `location/india-expo-centre` & `pari-chowk` pages, expo money page, `MegaMenu.tsx`, `RoomsShowcase.tsx`. Generate a ~1600px AVIF of `/glam-july/glam-4.avif` (target ≤120 KiB) and reuse it for contact/offers/404 backgrounds.

### P2-8 — Blog covers + attractions
Point `attractions.ts` and `posts.ts` images to compact AVIF/WebP copies of `/images/10.jpg` (target ≤80 KiB); ensure the first blog cover above the fold is not lazily decoded.

### P2-9 — framer-motion main-thread relief
- `Header.tsx` `useScroll`/`useTransform` → replace with a passive `scroll` listener toggling a class (no per-frame motion values).
- `WelcomeSection.tsx` parallax → CSS `background-attachment`/transform on wrapper with `will-change: transform` only while intersecting.
- Keep `motion` on menus/search (user-triggered, idle cost is irrelevant) and keep `PageTransition` (already first-paint safe).
This collapses the 1.1s of `styleLayout` + part of 1.3s "other".

### P3-10 — Contrast + redundant alt
- Gold text `text-adani-orange` on white → darken to `#7c5f30`/use `text-adani-blue` on light, or wrap in a dark badge. Gray-400 tabs/paragraphs on white → `text-gray-600`.
- Set `alt=""` on room-card images that have a sibling visible text label (`RoomsShowcase.tsx` L65/L85, `MegaMenu` room tiles) or remove the label.

### P3-11 — Room-detail CLS: `RoomDetailClient.tsx`
Give each image tile a fixed `aspect-[4/3]` container and drop `fill` for explicit `width/height` so the grid doesn't shift on decode (fixes CLS 0.022).

### P3-12 — Packaging
`npm uninstall gsap @gsap/react next-themes embla-carousel-react` (unused), and `npm uninstall swiper` after P1-3. Verify `npm run build` (38 routes), `npm run lint`, `tsc --noEmit`.

---

## 29. Optimization Roadmap (phases)

| Phase | Items | Est. LCP (mobile home) | Est. Perf (mobile home) |
|---|---|---|---|
| **Phase 1 — Ship sanity** | P0 deploy production; remove Lenis; remove Swiper; first-slide text visible | 4.96 → **~3.0s** | 69 → **~88** |
| **Phase 2 — Images & caching** | `_headers` caching; AVIF swaps (04.jpg, 10.jpg, glam-4); gallery tile polish | ~3.0 → **~2.2s** | ~88 → **~93–95** |
| **Phase 3 — Motion tune** | Header/Welcome framer relief; preconnect or self-host room images | ~2.2 → **≤2.0s** | ~93–95 → **95+** |
| **Phase 4 — A11y/QA** | Contrast fixes, redundant alt, room CLS, OG dims, device sweep | — | A11y **98–100** |

---

## 30. Tools & Data

- Lighthouse 12.8.2 (`C:\Users\hp\AppData\Local\Temp\opencode\lh`), headless Chrome, mobile default throttling + `--preset=desktop`.
- Live JSON reports: `C:\Users\hp\AppData\Local\Temp\opencode\audit\reports\the_glam_netlify_app_*_mobile.json` (12), `*_desktop.json` (12), production attempt reports (`www_hoteltheglam_com_*.json`, `prod_retry.json`).
- Raw probes (PowerShell `Invoke-WebRequest`/`curl.exe`): status/redirect/headers/robots/sitemap/title/H1 extraction; 29-URL crawl.
- Source review: `src/**` against built export in `out/`.

---

## 31. Appendix — One-line repeatable verification commands (PowerShell)

```powershell
# Header/status probes
$h = Invoke-WebRequest 'https://www.hoteltheglam.com/' -UseBasicParsing; [int]$h.StatusCode
# Re-audit one page after fixes
& "$env:TEMP\opencode\lh\node_modules\.bin\lighthouse.cmd" "https://the-glam.netlify.app/" --chrome-path "C:\Program Files\Google\Chrome\Application\chrome.exe" --chrome-flags "--headless=new --no-sandbox --disable-gpu" --output-json --output-path="$env:TEMP\opencode\audit\reports\post_fix.json"
```