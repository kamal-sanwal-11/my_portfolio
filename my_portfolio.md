# my_portfolio — Project Context for Claude Code

## What This Is
Personal portfolio website for **Kamal Sanwal**, Senior Product Manager with 6+ years of experience in fintech (WealthTech, Payments, Remittances). Built from scratch in a single session using Next.js 14, TypeScript, and Tailwind CSS.

## Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (`whileInView` scroll-triggered)
- **Icons**: react-icons (`react-icons/fi`)
- **Font**: Inter via `next/font/google`
- **Deployment**: Vercel (auto-deploys on push to `main`)
- **Repo**: `kamal-sanwal-11/my_portfolio` on GitHub

## Commands
```bash
npm run dev      # local dev server at localhost:3000
npm run build    # production build (must pass before pushing)
npm run lint     # ESLint check
```

## Project Structure
```
src/
  app/
    layout.tsx         # Root layout — Inter font, metadata, Header + Footer wrappers
    page.tsx           # Assembles all section components in order
    globals.css        # Tailwind directives, smooth scroll, custom scrollbar
  components/
    layout/
      Header.tsx       # Sticky nav, scroll-aware bg, mobile hamburger menu
      Footer.tsx       # Simple copyright line
    sections/
      Hero.tsx         # Full-screen hero, staggered mount animations, social links
      About.tsx        # Bio, initials avatar, contact info, competency chips
      Experience.tsx   # Vertical timeline — bullets, achievements, award badges
      Skills.tsx       # 4-category card grid with staggered chip animations
      Education.tsx    # 2-card grid (MBA + B.Tech)
      Contact.tsx      # Clickable contact cards (email, phone, LinkedIn, GitHub)
  lib/
    data.ts            # *** SINGLE SOURCE OF TRUTH for all content ***
```

## Content Architecture
**All portfolio content lives in `src/lib/data.ts`** — every section component imports from here. To update any real-world detail (job titles, achievements, contact info, skills), edit only this file.

Exports in `data.ts`:
- `personalInfo` — name, title, tagline, email, phone, GitHub, LinkedIn, location
- `aboutText` — multi-paragraph bio string (split on `\n\n` to render paragraphs)
- `competencies` — string[] of core competency labels (rendered as chips in About)
- `tools` — string[] of tools/technologies (used in Skills section)
- `experiences` — array of `{ company, role, period, context, summary, bullets[], achievements[], award }` — in reverse-chronological order
- `education` — array of `{ degree, field, institution, period }`

## Design System
- **Background**: white / `gray-50` alternating sections
- **Text**: `gray-900` headings, `gray-600` body, `gray-500` secondary
- **Accent**: `indigo-600` (links, labels, icons, chips)
- **Chip style**: `bg-indigo-50 text-indigo-700 rounded-full`
- **Cards**: `bg-white rounded-2xl border border-gray-100 shadow-sm`
- **Section pattern**: `indigo-600` uppercase label above bold `gray-900` h2

## Animation Pattern
Every section uses the same Framer Motion pattern:
```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
>
```
Staggered children (Skills chips): wrap in `variants` container with `staggerChildren: 0.08`.

> Note: framer-motion v12 does not accept `ease` inside shared `Variants` objects — use `transition` inline on the `motion.*` element instead.

## Sections & IDs (for nav anchor links)
| Section    | `id`          | Background  |
|------------|---------------|-------------|
| Hero       | *(none)*      | `indigo-50→white` gradient |
| About      | `#about`      | `white`     |
| Experience | `#experience` | `gray-50`   |
| Skills     | `#skills`     | `white`     |
| Education  | `#education`  | `gray-50`   |
| Contact    | `#contact`    | `white`     |

## What's Not Built Yet (potential next steps)
- **Projects section** — no projects added; a `projects` export can be added to `data.ts` and a `Projects.tsx` component created following the same pattern
- **Profile photo** — currently shows `KS` initials placeholder in About; replace by adding a photo to `public/` and updating `About.tsx` to use `next/image`
- **Resume download** — add `resume.pdf` to `public/` and add a download button in the Hero CTA area
- **Contact form** — Contact section currently shows static links; a form using Formspree or Resend can be added with no backend

## Deployment
- **Vercel project**: import `kamal-sanwal-11/my_portfolio` from GitHub
- Framework preset auto-detects as Next.js — no config changes needed
- Every push to `main` triggers a production deploy automatically
- Preview deploys are created for every PR branch
