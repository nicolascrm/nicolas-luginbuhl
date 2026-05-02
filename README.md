# nicolas-luginbuhl

Monorepo of [nicolas-luginbuhl.com](https://nicolas-luginbuhl.com) — a Builder Ops/Growth showcase site and a free practical Academy.

## Stack

- **Monorepo:** pnpm workspaces
- **Apps:** Next.js 15 (App Router) + React 19 + TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **Hosting:** Vercel (configured in a later phase)

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

## Status

Phase 1 / Plan 01-01 — Foundation. See `.paul/ROADMAP.md` for the full V1 roadmap.
