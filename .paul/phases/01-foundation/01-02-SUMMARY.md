---
phase: 01-foundation
plan: 02
subsystem: ui
tags: [shadcn, design-system, tailwind-v4, geist, css-variables, base-ui]

requires:
  - phase: 01-foundation
    provides: pnpm workspace + 2 Next.js 15 + Tailwind v4 apps (from 01-01)
provides:
  - shadcn/ui design system in both apps (style base-nova, baseColor neutral)
  - Token contract via CSS variables (light + dark)
  - Geist Sans via next/font on both apps (variable: --font-sans)
  - Button + Card components owned in apps/*/components/ui/
  - cn() utility in apps/*/lib/utils.ts
affects:
  - 01-03 (Vercel projects will inherit shadcn install)
  - Phase 2 (real pages will compose shadcn primitives — Tabs, Form, Sheet, etc.)
  - Phase 3 (academy MDX components will live alongside shadcn ui/)
  - Phase 4 (auth screens will use Card + Input + Button + Alert)

tech-stack:
  added:
    - shadcn@4.6.0 (CLI v4 + runtime registry helper)
    - "@base-ui/react@1.4.1 (Button primitives — current shadcn default in 2026)"
    - class-variance-authority@0.7.1
    - clsx@2.1.1
    - tailwind-merge@3.5.0
    - lucide-react@1.14.0
    - tw-animate-css@1.4.0
    - next/font/google → Geist
  patterns:
    - "shadcn-style tokens via @theme inline + light/dark CSS vars"
    - "Font loaded via next/font, variable applied to <html> (per skill guidance)"
    - "Literal Geist names in @theme inline (avoids the circular --font-sans: var(--font-sans) init bug)"
    - "Per-app shadcn install (no shared packages/ui workspace in V1)"
    - "data-slot attribute pattern from shadcn 2026 components"

key-files:
  created:
    - apps/site/components.json
    - apps/site/lib/utils.ts
    - apps/site/components/ui/button.tsx
    - apps/site/components/ui/card.tsx
    - apps/academy/components.json
    - apps/academy/lib/utils.ts
    - apps/academy/components/ui/button.tsx
    - apps/academy/components/ui/card.tsx
  modified:
    - apps/site/app/globals.css (full rewrite by init + manual --font-sans fix)
    - apps/site/app/layout.tsx (Geist font + html className + body semantic tokens)
    - apps/site/app/page.tsx (Card + Button demo)
    - apps/site/package.json (deps added by init)
    - apps/academy/* (mirror)

key-decisions:
  - "Style: base-nova (not new-york) — --style flag deprecated in CLI v4, base-nova is the current default"
  - "Primitive lib: Base UI (default 2026), not Radix — switching base requires interactive confirm; can migrate later via shadcn migrate radix"
  - "Font: Geist (not Inter) — shadcn init defaults; aligns with Vercel platform skill recommendation"
  - "Per-app shadcn install vs shared packages/ui — V1 simplicity; refactor only if duplication hurts"
  - "Dark CSS vars present in :root + .dark, but no toggle UI in V1"

patterns-established:
  - "Tokens-only styling: components reference --background, --foreground, --primary, etc. — never hardcoded colors"
  - "Semantic Tailwind classes (bg-background, text-foreground, text-muted-foreground) on user-visible surfaces"
  - "Font variable on <html>, NEVER on <body> (per skill guidance to avoid hydration/parse-time issues)"
  - "CSS @theme inline uses literal font family names (not var() refs) to dodge Tailwind v4 parse-time gotchas"

duration: 30min
started: 2026-05-02T13:15:00Z
completed: 2026-05-02T13:45:00Z
status: complete
date: 2026-05-02
---

# Plan 01-02 — shadcn/ui + Design Tokens : SUMMARY

## Outcome
shadcn/ui installé dans les deux apps avec Geist Sans, baseColor neutral, tokens via CSS variables (light + dark), et démo Button + Card sur les pages d'accueil. Symétrie parfaite entre site et academy (mêmes fichiers `components/ui/`, `lib/utils.ts`, `globals.css`, `components.json`).

## Tasks executed

| # | Linear | Task | Status | Qualify |
|---|--------|------|--------|---------|
| 1 | CRM-87 | Setup shadcn/ui sur apps/site (init + tokens + font + Button + Card + démo home) | DONE_WITH_CONCERNS | PASS |
| 2 | CRM-88 | Mirror shadcn/ui setup sur apps/academy | DONE | PASS |

> Concerns sur Task 1 : init a introduit `--font-sans: var(--font-sans);` (circulaire), Geist au lieu d'Inter, et style `base-nova` au lieu de `new-york`. Tous résolus ou actés comme déviations alignées avec la skill `/vercel-plugin:shadcn`.

## Files created (8) / modified (8)

### Created
- `apps/{site,academy}/components.json` — config shadcn (style base-nova, baseColor neutral, iconLibrary lucide, RSC + TSX)
- `apps/{site,academy}/lib/utils.ts` — `cn()` helper (clsx + twMerge)
- `apps/{site,academy}/components/ui/button.tsx` — Button via `@base-ui/react/button` + cva variants
- `apps/{site,academy}/components/ui/card.tsx` — Card / CardHeader / CardTitle / CardDescription / CardAction / CardContent / CardFooter

### Modified
- `apps/{site,academy}/app/globals.css` — réécrit par init (full token set + light/dark + @theme inline mapping) ; corrigé manuellement pour `--font-sans` / `--font-heading` literal Geist
- `apps/{site,academy}/app/layout.tsx` — import Geist via next/font, variable sur `<html>`, body en `bg-background text-foreground antialiased`
- `apps/{site,academy}/app/page.tsx` — démo Card + Button + classes sémantiques
- `apps/{site,academy}/package.json` — deps ajoutées par init

## Acceptance Criteria

| AC | Status | Evidence |
|---|---|---|
| AC-1 — shadcn/ui installé sur apps/site | PASS | `components.json` + `lib/utils.ts` + `components/ui/{button,card}.tsx` présents ; build OK |
| AC-2 — shadcn/ui installé sur apps/academy | PASS | Idem ; diff `globals.css`/`button.tsx`/`card.tsx`/`utils.ts`/`components.json` site↔academy = IDENTIQUE |
| AC-3 — Tokens + police actifs | PASS | CSS compilé contient `--background`, `--foreground`, `--primary`, `--primary-foreground`, `--muted`, `--muted-foreground`, `--border`, `--card`, `--radius` ; "Geist" (3 occurrences) référencé ; `.dark` présent dans `globals.css` |
| AC-4 — Pages d'accueil démontrent le système | PASS | Site (lang=fr) : Card + Button "En savoir plus" rendus avec `data-slot="button"` et `bg-primary` ; Academy (lang=en) : Card + Button "Browse courses" idem |

## Verifications run

- `pnpm install` — ✓ 0 erreur (deps shadcn ajoutées par init dans les 2 apps)
- `pnpm typecheck` — ✓ 2/2 apps clean
- `pnpm build` — ✓ 2/2 apps build, static prerender, 105 kB First Load JS (page home: 3.12 kB)
- Site dev (port 3010, port 3000 toujours occupé par dev externe) — ✓ Ready in ~2s, HTML correct
- Academy dev (port 3011) — ✓ Ready in ~2s, HTML correct
- Tokens présents dans le CSS compilé — ✓ all shadcn vars
- Geist font — ✓ référencé 3× dans le CSS compilé, `geist_*_variable` className sur `<html>`
- Symmétrie site ↔ academy : ✓ globals.css / button.tsx / card.tsx / utils.ts / components.json IDENTIQUES

## Deviations from plan

1. **Style `base-nova` (au lieu de `new-york`)** — `--style` flag est deprecated en CLI v4 (cf. skill `/vercel-plugin:shadcn`). `base-nova` est le default actuel de shadcn (2026). Pas de moyen non-interactif de forcer `new-york`. Acté.

2. **Primitive lib Base UI (au lieu de Radix attendu implicitement)** — shadcn 2026 default est `base-ui`. Le re-init avec `--base radix -f -d` a déclenché une confirmation interactive (`Switching from base to radix... continue? (y/N)`) que `-d -f` ne bypass pas. **Concern** : la skill recommande Radix pour la compat AI Elements. Si des fonctionnalités IA sont ajoutées plus tard, lancer `npx shadcn@latest migrate radix` pour basculer.

3. **Font Geist (au lieu d'Inter)** — `shadcn init` auto-installe Geist via `next/font/google`. Geist est la recommandation officielle Vercel (cf. skill : "Use Geist Sans for interface text"). Aligne avec la plateforme. Acté.

4. **Bug `--font-sans: var(--font-sans);`** — init a écrit ce pattern circulaire (documenté dans la skill comme un known issue). Corrigé manuellement vers `"Geist", "Geist Fallback", ui-sans-serif, system-ui, sans-serif`. Idem pour `--font-heading`.

5. **Dep extra : `shadcn@4.6.0` ajoutée comme runtime dep** — ajoutée par init pour le support du CLI/registry helper. Pas de problème ; left in place.

6. **Dep extra : `@base-ui/react@1.4.1`** — requise par `button.tsx` qui importe `@base-ui/react/button` (conséquence du choix Base UI ci-dessus).

7. **Tokens inattendus** — init a ajouté un set complet incluant `--sidebar-*`, `--chart-1` à `--chart-5`, `--accent`, `--popover`, `--destructive`, `--ring`, `--input`. Inertes pour l'instant ; utiles pour Phase 2/3. Acté comme superset utile.

8. **Body class manuelle** — init n'a PAS modifié le body class hérité de 01-01 (`bg-white text-slate-900`). Corrigé manuellement vers `bg-background text-foreground` pour satisfaire AC-3/4.

## Concerns flagged

- **`msw@2.14.2` build script ignored** at install — MSW est probablement transitif via shadcn deps ; non utilisé en V1. À approuver/ignorer explicitement avant prod (Plan 01-03).
- **Base UI vs Radix** — si features IA arrivent (chat tutor academy, etc.), migrer via `npx shadcn migrate radix`. Pas bloquant aujourd'hui.
- **Bundle First Load JS : 102 → 105 kB** — coût Base UI + tw-animate-css. Acceptable pour V1.
- **Style `base-nova` est récent** — moins de docs/exemples publics que `new-york`. Si ça pose souci en Phase 2, possibilité de switcher (`shadcn init --preset <code>`).

## What's NOT in this plan (boundary respected)
- Pas de packages/ui workspace partagé
- Pas d'autres composants shadcn que Button + Card
- Pas de toggle dark mode UI (vars OK, pas de switch)
- Pas de design system custom (couleurs marque) — neutral preset uniquement
- Pas d'i18n / MDX / auth / Linear sync / Vercel link

## Next

Run `/paul:unify .paul/phases/01-foundation/01-02-PLAN.md` pour clore le PLAN/APPLY/UNIFY loop.

After unify : Plan 01-03 (Git init + GitHub remote + Vercel projects linking + DNS staging).
