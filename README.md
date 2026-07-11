# ITAnna — AI Engineering for Software Engineers

A [Docusaurus v3](https://docusaurus.io) static site deployed to [itannateam.github.io](https://itannateam.github.io).

---

## Project Overview

ITAnna is a free live-session AI Engineering curriculum for software engineers with no prior ML background. The site is the public face of the programme and serves:

- **Home page** — hero, 6-module curriculum grid, community links (YouTube + WhatsApp), CTA strip
- **Projects page** — open-source session codebases
- **Blog** — session recaps, tutorials, AI Engineering insights

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Docusaurus v3 (TypeScript) |
| Language | TypeScript + React (TSX) |
| Styling | CSS Modules + global `custom.css` (Infima overrides) |
| Fonts | Space Grotesk (headings), Inter (body) — Google Fonts |
| Hosting | GitHub Pages (`gh-pages` branch) |
| CI/CD | GitHub Actions (`.github/workflows/deploy.yml`) |
| Package manager | **npm** |

---

## Brand & Design Tokens

All tokens live in `src/css/custom.css` as CSS custom properties.

| Token | Value | Usage |
|---|---|---|
| `--dark` | `#05175B` | Page background, navbar, footer |
| `--blue` | `#0BB7F1` | Accent, CTAs, links, highlights |
| `--white` | `#FFFFFF` | Cards, body text on dark surfaces |
| `--dark-card` | `#081f7a` | Elevated card surfaces |
| `--blue-faint` | `rgba(11,183,241,0.10)` | Badge/pill backgrounds, hover states |
| `--blue-border` | `rgba(11,183,241,0.25)` | Borders, dividers |
| `--white-dim` | `rgba(255,255,255,0.65)` | Subtext, secondary copy |
| `--white-faint` | `rgba(255,255,255,0.08)` | Subtle overlays |

Dark mode is **locked** (`colorMode.disableSwitch: true`). There is no light mode.

---

## Repository Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          ← GitHub Actions CI/CD
├── blog/
│   └── 2025-07-04-session-1-recap/
│       └── index.md            ← Seed blog post (Session 1 recap)
├── docs/                       ← Unused (docs: false in config)
├── src/
│   ├── css/
│   │   └── custom.css          ← Global styles, brand tokens, Infima overrides
│   ├── components/
│   │   ├── ModuleCard/         ← Curriculum module card (ghost number, live dot, topic list)
│   │   ├── CommunityCard/      ← YouTube / WhatsApp community card
│   │   └── ProjectCard/        ← Open-source project card with tags
│   └── pages/
│       ├── index.tsx           ← Home page (hero + curriculum + community + CTA)
│       ├── index.module.css
│       ├── projects.tsx        ← Projects page
│       └── projects.module.css
├── static/
│   └── img/
│       ├── logo.svg            ← "IT" white + "Anna" #0BB7F1 wordmark (Space Grotesk 700)
│       └── favicon.ico
├── docusaurus.config.ts        ← Site config (URLs, navbar, footer, theme)
├── sidebars.ts                 ← Unused (docs disabled)
├── package.json
├── tsconfig.json
├── instructions.md             ← Full build spec (design system, page layouts, module data)
└── reference_html.md           ← Original HTML reference design
```

---

## Key Configuration (`docusaurus.config.ts`)

- `url`: `https://itannateam.github.io`
- `baseUrl`: `/`
- `organizationName`: `ITAnnaTeam`
- `projectName`: `itannateam.github.io`
- `deploymentBranch`: `gh-pages`
- `docs: false` — the `/docs` route is disabled
- `colorMode.disableSwitch: true` — dark mode only, no toggle

---

## Components

### `ModuleCard`
Props: `moduleNum`, `badge`, `isLive?`, `isOptional?`, `title`, `topics[]`  
Renders a white card with a ghost oversized number, a badge pill (with animated live dot if `isLive`), a title, and a numbered topic list.

### `CommunityCard`
Props: `icon`, `label`, `name`, `text`, `href`, `buttonLabel`, `buttonFilled?`  
Dark card (`--dark-card`) for YouTube / WhatsApp links. Button can be outlined or filled.

### `ProjectCard`
Props: `badge`, `title`, `text`, `tags[]`, `buttonLabel`, `href`, `disabled?`  
White card for open-source projects. Supports a disabled/coming-soon state.

---

## Navbar Links

| Label | Target |
|---|---|
| Home | `/` |
| Projects | `/projects` |
| Blog | `/blog` |
| YouTube | `https://www.youtube.com/@ITAnnaTeam` |
| WhatsApp | `https://chat.whatsapp.com/DUIqf5g5hcO9wKuhgbQPAB` |

---

## Local Development

```bash
npm install
npm start        # dev server at http://localhost:3000
```

## Build

```bash
npm run build    # output in ./build
npm run serve    # preview the production build locally
```

## Deploy

The site deploys automatically via GitHub Actions on every push to `main`.

To deploy manually:

```bash
GIT_USER=itanna npm run deploy
```

GitHub Pages settings: **Settings → Pages → Source** → `gh-pages` branch, `/ (root)`.

---

## Adding Content

### New blog post
Create `blog/YYYY-MM-DD-slug/index.md` with frontmatter:
```md
---
title: "Post Title"
authors:
  name: ITAnna Team
  url: https://www.youtube.com/@ITAnnaTeam
tags: [AI Engineering, ...]
---
```
Use `{/* truncate */}` (not `<!-- truncate -->`) to set the preview cutoff — the site uses MDX.

### New project card
Add an entry to the `PROJECTS` array in `src/pages/projects.tsx`.

### New module
Add an entry to the `MODULES` array in `src/pages/index.tsx` following the existing shape.

