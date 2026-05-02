# Project State

## Project Reference

See: .paul/PROJECT.md (updated 2026-05-02)

**Core value:** Un Builder Ops/Growth montre son expertise via projets réels et cours pratiques, pour générer des leads consulting tout en construisant en public.
**Current focus:** Phase 1 (Foundation) — Plan 01-03 created, awaiting approval (Git init + GitHub remote + Vercel link)

## Current Position

Milestone: v0.1 V1 Launch
Phase: 1 of 5 (Foundation) — Planning (2/4 plans complete + 1 awaiting approval)
Plan: 01-03 created, awaiting approval (Git init + GitHub remote nicolascrm + 2 Vercel projects linking nicolas-1440)
Status: PLAN created, ready for APPLY (touchera des systèmes externes — confirmation explicite avant APPLY)
Last activity: 2026-05-02 — Created `.paul/phases/01-foundation/01-03-PLAN.md`

Progress:
- Milestone: [▓░░░░░░░░░] 10% (2/20 plans approx)
- Phase 1: [▓▓▓▓▓░░░░░] 50% (2/4 plans)

## Loop Position

Current loop state:
```
PLAN ──▶ APPLY ──▶ UNIFY
  ✓        ○        ○     [Plan 01-03 created, awaiting approval — APPLY touche GitHub + Vercel]
```

## Accumulated Context

### Decisions
- Mono-repo, 2 projets Vercel (site + academy sous-domaine) — 2026-05-02
- MDX versionné dans le repo (pas de CMS) — 2026-05-02
- Site bilingue FR/EN, Academy EN-only en V1 — 2026-05-02
- Auth Supabase optionnelle + fallback localStorage — 2026-05-02
- Velite vs Contentlayer : à arbitrer en Phase 3 — 2026-05-02
- Tickets dans Linear (source unique de vérité) — 2026-05-02
- Roadmap V1 = 5 phases (Foundation, Site i18n & pages, Academy MDX, Auth & progression, First course + ship) — 2026-05-02
- Plan 01-01 scope = monorepo pnpm + 2 apps Next.js 15 + Tailwind v4 (pas de shadcn/i18n/MDX/auth) — 2026-05-02
- Versions verrouillées Plan 01-01 : Next 15.5.15, React 19.2.5, TS 5.9.3, Tailwind 4.2.4 — 2026-05-02
- pnpm 10.33.2 (vs 9.x du plan) : aligné sur l'install local, `packageManager` field set en conséquence — 2026-05-02
- Plan 01-02 scope = shadcn/ui (style new-york, base neutral) + Inter via next/font + Button/Card sur les 2 apps (pas de packages/ui partagé, pas de toggle dark mode) — 2026-05-02
- Plan 01-02 exécuté : style **base-nova** (au lieu de new-york — `--style` deprecated CLI v4), Base UI primitives (au lieu de Radix — switch base interactive), **Geist** via next/font (au lieu d'Inter — défaut shadcn 2026 + recommandation skill Vercel) — 2026-05-02
- Bug shadcn init `--font-sans: var(--font-sans);` corrigé manuellement (literal "Geist", "Geist Fallback", ...) — 2026-05-02
- Plan 01-03 scope = git init + GitHub `nicolascrm/nicolas-luginbuhl` (public) + 2 projets Vercel (`nicolas-luginbuhl-site`, `nicolas-luginbuhl-academy`) sous scope `nicolas-1440` + build scripts approval (`pnpm.onlyBuiltDependencies`) + premier preview deploy. Pas de DNS / pas d'env Supabase / pas de GitHub Actions. — 2026-05-02
- Auth confirmé : GitHub `nicolascrm` (scopes gist/read:org/repo), Vercel `nicolas-1440` (perso) — 2026-05-02
- Décision branche : main uniquement, pas de branch protection en V1 (projet solo) — 2026-05-02
- Décision commits : 1 seul commit "feat: bootstrap monorepo + ui foundation (...)" englobant 01-01 + 01-02 (vélocité > granularité historique sur projet greenfield) — 2026-05-02

### Deferred Issues
None yet.

### Linear (source de vérité tickets)
- Workspace : CRM MANAGER IO (team: CRM MANAGER)
- Projet : `nicolas-luginbuhl` — https://linear.app/crm-manager/project/nicolas-luginbuhl-c1d296255489
- Milestone : `v0.1 V1 Launch` (target 2026-05-03)
- Tickets Plan 01-01 : CRM-84/85/86 — exécutés (à passer en Done dans Linear lors du sync — réservé à 01-03)
- Tickets Plan 01-02 : CRM-87 (Task 1 site), CRM-88 (Task 2 academy) — à créer ou à associer dans Linear
- Tickets Plan 01-03 : CRM-89 (tooling+git), CRM-90 (GitHub remote), CRM-91 (Vercel link+deploy) — à créer ou à associer dans Linear

### Blockers/Concerns
- Domaine `nicolas-luginbuhl.com` : statut DNS/registrar à vérifier (Phase 5)
- Accès Supabase + Vercel + comptes OAuth (Google/GitHub) : à vérifier (Plan 01-04)
- Vercel CLI version locale 50.37.3 (latest 53.1.0) — upgrade recommandé : `pnpm add -g vercel@latest`
- Build scripts ignorés à l'install : `sharp@0.34.5`, `unrs-resolver@1.11.1`, `msw@2.14.2` (ajouté par shadcn). À approuver avant prod Vercel (`pnpm approve-builds`) — Plan 01-03
- Port 3000 occupé par un autre dev externe — environnemental, pas un bug du plan
- Base UI vs Radix : si features IA arrivent (chat tutor academy, etc.), migrer via `npx shadcn migrate radix` — non bloquant aujourd'hui

## Session Continuity

Last session: 2026-05-02
Stopped at: Plan 01-03 created, awaiting approval (Git+GitHub+Vercel infra)
Next action: Review and approve plan, then run /paul:apply .paul/phases/01-foundation/01-03-PLAN.md
Resume file: .paul/phases/01-foundation/01-03-PLAN.md
Resume context: Foundation 2/4 plans done. Plan 01-03 nécessite les skills /vercel-plugin:vercel-cli + /vercel-plugin:deployments-cicd avant APPLY. Décisions verrouillées : GitHub `nicolascrm/nicolas-luginbuhl` (public), Vercel scope `nicolas-1440`, 2 projets `nicolas-luginbuhl-site` + `nicolas-luginbuhl-academy`, branche `main` uniquement, 1 seul commit initial pour 01-01+01-02. Checkpoint final = vérification user des 2 preview URLs. APPLY déclenchera Vercel CLI upgrade en premier (50.37.3 → 53.x). After 01-03 : 01-04 (Supabase env scaffold).

---
*STATE.md — Updated after every significant action*
