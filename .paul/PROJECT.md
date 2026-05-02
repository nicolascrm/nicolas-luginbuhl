# nicolas-luginbuhl

## What This Is

Écosystème web personnel autour du positionnement **Builder Ops/Growth** : un site principal bilingue (FR/EN) qui sert de vitrine professionnelle et convertit en missions consulting, couplé à une Academy en sous-domaine (EN) qui propose des cours gratuits structurés (cours → modules → leçons) avec progression utilisateur. Le projet sert aussi de terrain d'apprentissage pour devenir expert Claude Code en shippant régulièrement.

## Core Value

Un Builder Ops/Growth (HubSpot, n8n, automatisation, IA) montre son expertise via des projets réels et des cours pratiques, pour générer des leads consulting tout en construisant en public.

## Current State

| Attribute | Value |
|-----------|-------|
| Type | Application (web — site + academy) |
| Version | 0.0.0 |
| Status | Initializing |
| Last Updated | 2026-05-02 |

**Production URLs:** (à configurer)
- nicolas-luginbuhl.com — site principal (FR + EN)
- academy.nicolas-luginbuhl.com — academy (EN)

## Requirements

### Core Features

- **Site principal bilingue (FR/EN)** : Accueil, Projets/Réalisations, Services, Blog, Contact
- **Academy (EN)** : structure cours → modules → leçons, composants riches (checklists, blocs code, encadrés "watch out for", citations)
- **Auth optionnelle Supabase** (Google/GitHub) pour suivre la progression dans l'academy
- **Système de progression** : tracking par utilisateur connecté + fallback localStorage pour anonymes
- **Contenu en MDX** versionné dans le repo (Velite ou Contentlayer)

### Validated (Shipped)
None yet.

### Active (In Progress)
None yet.

### Planned (Next)
- V1 : site principal complet (5 pages) + 1er cours academy partiel + login/progression fonctionnels — visé fin de journée/weekend (2026-05-02 / 2026-05-03)
- V1.x : compléter le 1er cours academy
- V2+ : cours additionnels, démos d'outils interactifs, articles blog réguliers

### Out of Scope (V1)
- Cours academy multiples complets — seulement le 1er en partiel + autres en "Coming Soon"
- Inscription obligatoire — l'auth reste optionnelle
- Academy en français — EN uniquement en V1
- CMS externe — tout reste en MDX dans le repo

## Target Users

**Primary :** Prospects consulting (CMOs, ops leads, fondateurs early-stage)
- Cherchent quelqu'un qui ship vite avec l'IA
- Ont des besoins concrets : optimisation CRM (HubSpot), automatisation, lead gen
- Évaluent la crédibilité via projets concrets et contenu technique

**Secondary :** Apprenants academy
- Touchent à HubSpot, n8n, Claude Code, ops/growth
- Veulent du contenu pratique et structuré
- Convertissent éventuellement en leads consulting

## Context

**Business Context :**
- Génération de leads consulting via positionnement éditorial Ops/Growth
- Construction en public — vélocité de shipping > perfection
- L'Academy gratuite alimente l'autorité et le SEO

**Technical Context :**
- Mono-repo, deux projets Vercel (site principal + academy en sous-domaine)
- Stack choisie pour vélocité Claude Code maximale
- Toutes les tâches sont trackées dans **Linear** (projet à créer/identifier)

## Constraints

### Technical Constraints
- Next.js 15 App Router + TypeScript
- Tailwind + shadcn/ui pour l'UI
- MDX via Velite ou Contentlayer (à arbitrer en planning)
- next-intl pour FR/EN
- Supabase pour auth + Postgres
- Hébergement Vercel — un repo, deux projets Vercel

### Business Constraints
- **Timeline V1 : fin de journée 2026-05-02 ou week-end (2026-05-03)** — site en ligne avec 1er cours partiel
- Projet solo — vélocité critique
- Toutes les tâches doivent exister sous forme de tickets Linear

### Compliance Constraints
- RGPD basique (formulaire contact, cookies si analytics)

## Key Decisions

| Decision | Rationale | Date | Status |
|----------|-----------|------|--------|
| Mono-repo, 2 projets Vercel | Simplicité maintenance + sous-domaine propre | 2026-05-02 | Active |
| MDX versionné (pas de CMS) | Contenu avec le code, vélocité, pas d'admin externe | 2026-05-02 | Active |
| Bilingue site / EN-only academy V1 | Réduit le scope V1 sans bloquer l'expansion | 2026-05-02 | Active |
| Auth Supabase optionnelle + fallback localStorage | Friction minimale pour visiteurs anonymes | 2026-05-02 | Active |
| Velite ou Contentlayer | À arbitrer en planning | 2026-05-02 | Pending |
| Tickets dans Linear | Source unique de vérité pour le travail à faire | 2026-05-02 | Active |

## Success Metrics

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Site en ligne (5 pages bilingues) | V1 — 2026-05-03 | - | Not started |
| 1er cours Academy partiel publié | V1 — 2026-05-03 | - | Not started |
| Login Google/GitHub fonctionnel | V1 — 2026-05-03 | - | Not started |
| Tracking progression (connecté + localStorage) | V1 — 2026-05-03 | - | Not started |
| Premier lead consulting via le site | V1.x | - | Not started |

## Tech Stack / Tools

| Layer | Technology | Notes |
|-------|------------|-------|
| Framework | Next.js 15 (App Router) + TypeScript | Vélocité Claude Code |
| Styling | Tailwind CSS + shadcn/ui | Design system rapide |
| Contenu | MDX via Velite ou Contentlayer | À arbitrer en planning |
| i18n | next-intl | FR + EN sur site principal |
| Auth | Supabase (Google + GitHub OAuth) | Optionnelle, fallback localStorage |
| Database | Supabase Postgres | Progression academy uniquement V1 |
| Hosting | Vercel — 2 projets, 1 repo | Site principal + sous-domaine academy |
| Tickets | Linear | Source unique de vérité |

## Links

| Resource | URL |
|----------|-----|
| Repository | (à init) |
| Production (site) | nicolas-luginbuhl.com |
| Production (academy) | academy.nicolas-luginbuhl.com |
| Tickets | https://linear.app/crm-manager/project/nicolas-luginbuhl-c1d296255489 (team CRM MANAGER, prefix `CRM-`) |

---
*PROJECT.md — Updated when requirements or context change*
*Last updated: 2026-05-02*
