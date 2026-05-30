# Portfolio v2 — Task Checklist

## System changes
- [x] Create branch `feat/portfolio-v2`
- [x] Install dependencies: `next-themes`, `lucide-react`, `@vercel/analytics`
- [x] Enable dark mode in `tailwind.config.ts` (`darkMode: "class"`)
- [x] Update `globals.css` with dark-mode CSS vars and base styles
- [x] Create `public/` dir with `.gitkeep`

## `src/lib/data.ts` — content overhaul
- [x] Update `personalInfo` (headline, subline, eyebrow, location, links)
- [x] Add `heroMetrics` (5 chips)
- [x] Add `work` array (7 case-study cards with metrics + detail)
- [x] Update `experiences` array (Xtelify + BharatPe + INDmoney + eClerx, with `theme` field, BharatPe period corrected)
- [x] Add `approachPrinciples`, update `tools`, update `domainExpertise`
- [x] Update `education` (keep, compact)
- [x] Add `contactLinks`
- [x] Company themes stored per `experience` as `theme` field

## `src/app/layout.tsx` — system wiring
- [x] Wrap with `ThemeProvider` (next-themes, `attribute="class"`, `defaultTheme="light"`)
- [x] Add `suppressHydrationWarning` to `<html>`
- [x] Add `<Analytics />` from `@vercel/analytics/next`

## Components
- [x] `Header.tsx` — new nav (`Work · Career · Approach · Connect`), dark/light toggle, résumé download, mobile hamburger
- [x] `Hero.tsx` — eyebrow + headline + subline + 3 CTAs + metric strip
- [x] `SelectedWork.tsx` — responsive grid, expand-in-place cards with metrics
- [x] `CareerStints.tsx` — collapsible company-themed cards, first expanded
- [x] `Approach.tsx` — numbered principles + tools chip cloud + domain list
- [x] `Education.tsx` — compact two-row block (updated for dark mode)
- [x] `GetInTouch.tsx` — large icon links (email, LinkedIn, résumé, GitHub)
- [x] `Footer.tsx` — two-line centered footer
- [x] `page.tsx` — new section order, old sections stubbed

## Verification
- [x] `npm run build` passes with zero TS errors
- [x] Dark mode: ThemeProvider + mounted guard + suppressHydrationWarning (no flash)
- [x] All CV metrics present in Work + Career sections (none dropped)
- [x] Career cards: company-themed (left border + bg tint per theme field)
- [x] `<Analytics />` in layout
- [x] `public/.gitkeep` tracked
- [x] README replaced

## README
- [x] Replace boilerplate README with professional project README

## PR
- [x] PR opened: https://github.com/kamal-sanwal-11/my_portfolio/pull/2

---

## Review section

**Build:** `npm run build` — passed, zero TypeScript errors, zero lint errors.

**All tasks:** Complete.

**Framer Motion v12 guardrail:** All animations use inline `transition` props; no `ease` inside shared Variants objects.

**Owner TODOs (called out in PR body):**
1. Drop `public/resume.pdf` — links return 404 until added (expected).
2. Verify dates — BharatPe: Feb 2024 – Jan 2026; Xtelify: Jan 2026 – Present.
3. Add quantified Xtelify metrics to `data.ts` when available.
4. Confirm Airtel/Xtelify theme color (defaulted to `#E40000`).
