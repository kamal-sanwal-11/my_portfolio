# Kamal Sanwal — Product Portfolio

Personal portfolio of Kamal Sanwal, Senior Product Manager. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

**Live:** _deploy to Vercel and add URL here_

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion v12 |
| Theming | next-themes (dark / light) |
| Analytics | Vercel Analytics |

---

## Content model

**All copy and data lives in one file: `src/lib/data.ts`.**

Every section component imports from it — components are purely presentational. To change any text, metric, or link, edit `data.ts` and push. No CMS, no admin panel, no auth.

Exported objects:
- `personalInfo` — name, headline, links
- `heroMetrics` — five stat chips
- `work` — Selected Work case cards (7 items)
- `experiences` — Career Stints (Xtelify → BharatPe → INDmoney → eClerx)
- `approachPrinciples` — numbered PM principles
- `tools`, `domainExpertise` — Approach section lists
- `education` — two rows
- `contactLinks` — Get in Touch section

---

## Project structure

```
src/
  app/
    layout.tsx        # ThemeProvider + Analytics wrapper
    page.tsx          # Section order
    globals.css
  components/
    layout/
      Header.tsx      # Nav, dark/light toggle, résumé download
      Footer.tsx
    sections/
      Hero.tsx
      SelectedWork.tsx
      CareerStints.tsx
      Approach.tsx
      Education.tsx
      GetInTouch.tsx
  lib/
    data.ts           # Single source of truth for all content
public/
  resume.pdf          # Add this file — see note below
tasks/
  todo.md
```

---

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

Build check:

```bash
npm run build
```

---

## Deploy

Hosted on Vercel. Auto-deploys on every push to `main`. No extra config needed — Vercel Analytics collects page views automatically post-deploy.

---

## Updating content

Edit `src/lib/data.ts`. Every value maps 1:1 to what is rendered. Example:

- Change a metric chip → edit `heroMetrics`
- Add a career stint → append to `experiences` array
- Update contact links → edit `contactLinks`

### Adding a new section

1. Create `src/components/sections/NewSection.tsx`
2. Export a default component that reads from `data.ts`
3. Add the import + `<NewSection />` to `src/app/page.tsx`
4. Add a nav link in `Header.tsx`

---

## Resume

Place the PDF at **`public/resume.pdf`**. The header, hero, and "Get in Touch" section all link to `/resume.pdf` with `download` attribute. Until the file is added, the link returns 404 — that is expected.

---

## Analytics

Vercel Analytics is wired in `src/app/layout.tsx`. Page views appear in the Vercel dashboard under Analytics after the first deploy. No additional configuration required.
