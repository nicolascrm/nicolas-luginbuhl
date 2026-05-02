# nicolas-luginbuhl

Monorepo of [nicolas-luginbuhl.com](https://nicolas-luginbuhl.com) — a Builder Ops/Growth showcase site and a free practical Academy.

## Stack

- **Monorepo:** pnpm workspaces
- **Apps:** Next.js 15 (App Router) + React 19 + TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **Hosting:** Vercel — 2 projects under scope `nicolas-projects-a113dfc5`
  - `nicolas-luginbuhl-site` (rootDirectory: `apps/site`)
  - `nicolas-luginbuhl-academy` (rootDirectory: `apps/academy`)
- **CI/CD:** Vercel auto-deploys from GitHub `nicolascrm/nicolas-luginbuhl` (`main` → production, branches → preview)

## Structure

```
.
├── apps/
│   ├── site/        Public site (FR/EN, port 3000)
│   └── academy/     Free courses (EN, port 3001)
├── tsconfig.base.json
├── pnpm-workspace.yaml
└── package.json
```

## Getting started

```bash
pnpm install
pnpm dev          # runs both apps in parallel (3000 + 3001)
pnpm dev:site     # site only — http://localhost:3000
pnpm dev:academy  # academy only — http://localhost:3001
```

## Scripts

- `pnpm build` — build both apps
- `pnpm lint` — lint both apps
- `pnpm typecheck` — typecheck both apps

## Live previews

> Vercel Deployment Protection is currently enabled — visiting the URLs below requires Vercel auth (project owner). Will be disabled / opened to public when the custom domain is wired in Phase 5.

- Site: https://nicolas-luginbuhl-site-rle4krlen-nicolas-projects-a113dfc5.vercel.app
- Academy: https://nicolas-luginbuhl-academy-i4k0kdvje-nicolas-projects-a113dfc5.vercel.app

## Status

Phase 1 / Plan 01-03 — Foundation (Git + GitHub + Vercel infra). See `.paul/ROADMAP.md` for the full V1 roadmap.
