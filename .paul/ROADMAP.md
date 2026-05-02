# Roadmap: nicolas-luginbuhl

## Overview

Écosystème web personnel : site principal bilingue (vitrine + conversion consulting) + Academy en sous-domaine (cours gratuits avec progression). V1 vise un ship complet du site et un 1er cours academy partiel sur le week-end du 2-3 mai 2026.

## Current Milestone

**v0.1 V1 Launch** (v0.1.0)
Status: In progress
Phases: 0 of 5 complete (Phase 1: 2/4 plans done)

## Phases

| Phase | Name | Plans | Status | Completed |
|-------|------|-------|--------|-----------|
| 1 | Foundation | 4 (2/4 done) | In progress | - |
| 2 | Site i18n & pages | TBD | Not started | - |
| 3 | Academy MDX engine | TBD | Not started | - |
| 4 | Auth & progression | TBD | Not started | - |
| 5 | First course + ship | TBD | Not started | - |

## Phase Details

### Phase 1 — Foundation
Bootstrap monorepo, both Next.js 15 apps running locally, base design system installed.
- **01-01** — Monorepo + 2 Next.js apps + Tailwind (✅ complete — 2026-05-02)
- **01-02** — shadcn/ui setup + base design tokens (✅ complete — 2026-05-02)
- **01-03** — Repo Git init + GitHub remote + Vercel projects linking (planned) — *Linear projet déjà créé : CRM team*
- **01-04** — Supabase project init + env scaffolding (planned)

### Phase 2 — Site i18n & pages
- next-intl configured on `apps/site` (FR/EN)
- Layout, navigation, footer
- 5 pages : Accueil, Projets/Réalisations, Services, Blog (index), Contact
- Form contact (server action + email)

### Phase 3 — Academy MDX engine
- **Decision** : Velite vs Contentlayer (à arbitrer en début de phase)
- Structure cours → modules → leçons
- Composants MDX riches (checklists, code blocks, callouts "watch out for", citations)
- Routing dynamique academy

### Phase 4 — Auth & progression
- Supabase Auth (Google + GitHub OAuth)
- Schema progression (lesson_completions)
- Tracking côté client + sync serveur
- Fallback localStorage pour anonymes

### Phase 5 — First course + ship
- 1er cours academy (contenu partiel — modules 1-2 minimum)
- Autres cours en "Coming Soon"
- Configuration domaines : nicolas-luginbuhl.com + academy.nicolas-luginbuhl.com
- Déploiement production Vercel (2 projets)
- Analytics + RGPD basique

## Post-V1 (out of scope this milestone)
- Compléter cours 1
- Cours additionnels
- Articles blog réguliers
- Démos d'outils interactifs
- Case studies projets

---
*Roadmap created: 2026-05-02*
*Last updated: 2026-05-02 (Plan 01-02 complete)*
