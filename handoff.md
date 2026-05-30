# Portfolio Project Handoff

## What We Built
A personal portfolio website for **Kamal Sanwal**, Senior Product Manager (fintech, 6+ years). Built from scratch using **Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion**. The site is clean, light, and professional — white/off-white background, indigo accent, Inter font, smooth scroll animations.

The source code lives at: **https://github.com/kamal-sanwal-11/my_portfolio**  
Active branch: `claude/trusting-cori-Lb9Sd` (PR #1 open to merge into `main`)  
Deployment target: **Vercel** (auto-deploys on push to `main`)

---

## Kamal's Details (from CV)
- **Name**: Kamal Sanwal
- **Title**: Senior Product Manager
- **Email**: kmlsnwl@gmail.com
- **Phone**: +91 7017581141
- **LinkedIn**: linkedin.com/in/kamalsanwal
- **GitHub**: github.com/kamal-sanwal-11
- **Location**: India
- **Summary**: PM with 6+ years in digital investment products, cross-border remittance, and fintech payment platforms. Known for 0→1 builds, compliance integration, and customer-first thinking.

### Experience
1. **BharatPe** — Product Manager, Devices (POS & Speakers) | Feb 2024–Present
   - Led BharatPe One POS to 100K+ devices, ~40% of Card TPV
   - Launched Payment Timelines (reduced VoC tickets from 800 to <70)
   - Building Interoperable Speaker (industry-first UPI intercept feature)
   - Award: BharatPe Rockstar Award, Jan 2025

2. **INDmoney** — Senior Product Manager, US Stocks | Aug 2021–Feb 2024
   - Built US Stocks + RBI-compliant remittance from 0→1 → 500K+ users
   - Grew monthly remittance from <$1K to $60M
   - Captured 34% of India's outbound equity remittance market
   - Award: Remittance Rainmaker, 2023

3. **eClerx** — Business Process Manager, Digital Product | May 2019–Aug 2021
   - Improved funnel conversion from 7.2% to 13.6% for Fortune 500 clients
   - Reduced support contact volume by 10K+/year

### Education
- MBA (Marketing | Analytics | Strategy) — IIM Kashipur, 2017–2019
- B.Tech (Information Technology) — College of Engineering Roorkee, 2013–2017

---

## Codebase Structure

```
my_portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout — Inter font, metadata, Header + Footer
│   │   ├── page.tsx         # Assembles all sections
│   │   └── globals.css      # Tailwind + smooth scroll + custom scrollbar
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx   # Sticky nav, mobile hamburger
│   │   │   └── Footer.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Experience.tsx
│   │       ├── Skills.tsx
│   │       ├── Education.tsx
│   │       └── Contact.tsx
│   └── lib/
│       └── data.ts          # ← ALL content lives here
├── my_portfolio.md          # Claude Code context doc
└── handoff.md               # This file
```

### The most important file: `src/lib/data.ts`
Every section component imports its content from this single file. To update any text, job details, or skills — edit only `data.ts`. The exports are:
- `personalInfo` — name, title, tagline, contact details
- `aboutText` — bio paragraphs (separated by `\n\n`)
- `competencies` — string[] of core competency chips
- `tools` — string[] of tools (Mixpanel, Figma, Tableau, etc.)
- `experiences` — array with `{ company, role, period, summary, bullets[], achievements[], award }`
- `education` — array with `{ degree, field, institution, period }`

---

## Design Decisions

| Decision | Choice | Reason |
|---|---|---|
| Framework | Next.js 14 App Router | Best for Vercel deployment, SEO, static generation |
| Styling | Tailwind CSS | Utility-first, no separate CSS files to maintain |
| Animations | Framer Motion `whileInView` | Clean scroll-triggered reveals, `once: true` so they don't repeat |
| Accent color | Indigo-600 | Professional, distinctive, pairs well with white/gray |
| Content architecture | Single `data.ts` file | One place to update all real-world details |
| Sections | No Projects section yet | Kamal's CV is PM-focused, not engineering projects |

---

## What's Not Built Yet

These are the natural next steps:

1. **Projects section** — Add a `projects` array to `data.ts` and a `src/components/sections/Projects.tsx` card grid. Each project: `{ title, description, tech[], link }`.

2. **Profile photo** — Currently shows "KS" initials. Add a photo to `public/profile.jpg` and update `About.tsx` to use `<Image src="/profile.jpg" ... />` from `next/image`.

3. **Resume download** — Add `public/resume.pdf` and add a "Download Resume" button in the Hero section (`<a href="/resume.pdf" download>`).

4. **Contact form** — Contact section shows static links only. A functional form can be added using [Formspree](https://formspree.io) (free tier, no backend needed) — just `POST` to their endpoint.

5. **Custom domain** — After deploying to Vercel, add a custom domain in Vercel project settings → Domains.

---

## How to Continue Development

### Run locally
```bash
cd my_portfolio
npm install
npm run dev   # → http://localhost:3000
```

### Deploy
1. Merge PR #1 on GitHub (`claude/trusting-cori-Lb9Sd` → `main`)
2. Go to vercel.com → Add New Project → Import `kamal-sanwal-11/my_portfolio`
3. Framework auto-detected as Next.js — click Deploy
4. Every future push to `main` auto-deploys

### Update content
Edit `src/lib/data.ts` only — all sections pull from there.

### Add a new section
1. Create `src/components/sections/NewSection.tsx`
2. Add its data export to `src/lib/data.ts`
3. Import and render it in `src/app/page.tsx`
4. Add a nav link in `src/components/layout/Header.tsx`

---

## Known Gotcha
Framer Motion v12 (which this project uses) does **not** accept `ease` as a property inside shared `Variants` objects — it throws a TypeScript error. Use `transition` as an inline prop on the `motion.*` element instead:
```tsx
// ✗ breaks in framer-motion v12
const variants = { visible: { opacity: 1, transition: { ease: "easeOut" } } }

// ✓ works fine
<motion.div transition={{ duration: 0.6, ease: "easeOut" }} />
```
