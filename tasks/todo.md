# Portfolio v2 — Task Checklist

## System changes
- [ ] Create branch `feat/portfolio-v2`
- [ ] Install dependencies: `next-themes`, `lucide-react`, `@vercel/analytics`
- [ ] Enable dark mode in `tailwind.config.ts` (`darkMode: "class"`)
- [ ] Update `globals.css` with dark-mode CSS vars and base styles
- [ ] Create `public/` dir with `.gitkeep`

## `src/lib/data.ts` — content overhaul
- [ ] Update `personalInfo` (headline, subline, eyebrow, location, links)
- [ ] Add `heroMetrics` (5 chips)
- [ ] Add `work` array (7 case-study cards with metrics + detail)
- [ ] Update `experiences` array (Xtelify + BharatPe + INDmoney + eClerx, with `theme` field, BharatPe period corrected)
- [ ] Add `approachPrinciples`, update `tools`, update `domainExpertise`
- [ ] Update `education` (keep, compact)
- [ ] Add `contactLinks`, `footerText`
- [ ] Add `companyThemes` map

## `src/app/layout.tsx` — system wiring
- [ ] Wrap with `ThemeProvider` (next-themes, `attribute="class"`, `defaultTheme="light"`)
- [ ] Add `suppressHydrationWarning` to `<html>`
- [ ] Add `<Analytics />` from `@vercel/analytics/next`

## Components
- [ ] `Header.tsx` — new nav (`Work · Career · Approach · Connect`), dark/light toggle, résumé download, mobile hamburger
- [ ] `Hero.tsx` — eyebrow + headline + subline + 2 CTAs + metric strip
- [ ] `SelectedWork.tsx` — responsive grid, expand-in-place cards with metrics
- [ ] `CareerStints.tsx` — collapsible company-themed cards, first expanded
- [ ] `Approach.tsx` — numbered principles + tools chip cloud + domain list
- [ ] `Education.tsx` — compact two-row block (update for dark mode)
- [ ] `GetInTouch.tsx` — large icon links (email, LinkedIn, résumé, GitHub)
- [ ] `Footer.tsx` — two-line centered footer
- [ ] `page.tsx` — new section order, remove About/Skills

## Verification
- [ ] `npm run build` passes with zero TS errors
- [ ] Dark mode toggle works, persists, no theme flash
- [ ] All CV metrics present in Work + Career sections
- [ ] Career cards collapse/expand with correct per-company theming
- [ ] Nav anchors, mobile hamburger, résumé link all functional
- [ ] `<Analytics />` in layout
- [ ] `public/.gitkeep` tracked
- [ ] README replaced

## README
- [ ] Replace boilerplate README with professional project README

## PR
- [ ] Open PR `feat/portfolio-v2 → main` with full description

---

## Review section (post-implementation)
- [ ] Build passed (zero TS errors)
- [ ] All todo items above completed
- [ ] Owner TODOs called out in PR body:
  1. Drop `public/resume.pdf`
  2. Verify dates (BharatPe: Feb 2024 – Jan 2026; Xtelify: Jan 2026 – Present)
  3. Add quantified Xtelify metrics when ready
  4. Confirm Airtel theme color (defaulted `#E40000`)
