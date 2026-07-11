# ITAnna — Docusaurus Site Build Instructions

> **Target:** https://itannateam.github.io  
> **Framework:** [Docusaurus v3](https://docusaurus.io)  
> **Agent:** Follow every section in order. Do not skip steps.

---

## 1. Brand & Design System

Extract these tokens directly into `src/css/custom.css`. Every color decision in the site must derive from these variables.

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--dark` | `#05175B` | Page background, navbar, footer |
| `--blue` | `#0BB7F1` | Accent, CTA buttons, highlights, links |
| `--white` | `#FFFFFF` | Cards, body text on dark backgrounds |
| `--dark-card` | `#081f7a` | Elevated card surfaces on dark backgrounds |
| `--blue-faint` | `rgba(11, 183, 241, 0.10)` | Pill/badge backgrounds, hover states |
| `--blue-border` | `rgba(11, 183, 241, 0.25)` | Borders, dividers |
| `--white-dim` | `rgba(255,255,255,0.65)` | Subtext, secondary copy on dark backgrounds |
| `--white-faint` | `rgba(255,255,255,0.08)` | Subtle surface overlays |

### Typography

```
Display / Headings : Space Grotesk (400, 500, 600, 700)
Body               : Inter (300, 400, 500, 600)
```

Import in `custom.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
```

### Design Patterns (copy faithfully)

**Ghost module numbers** — large oversized numeral (`130px`, `font-weight: 700`, `opacity: 0.055`) positioned `absolute` top-right inside each card. Color is `var(--dark)` on white cards.

**Pills / badges** — `border-radius: 100px`, `background: var(--blue-faint)`, `border: 1px solid var(--blue-border)`, `color: var(--blue)`, `font-size: 11–13px`, `letter-spacing: 0.12em`, `text-transform: uppercase`.

**Live dot** — `7px` circle, `background: var(--blue)`, animated with:
```css
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.7); }
}
```

**Eyebrow label** — `36px` horizontal line (`height: 2px`, `background: var(--blue)`) followed by `12px` uppercase text in `var(--blue)`, `letter-spacing: 0.18em`.

**CTA button** — `background: var(--blue)`, `color: var(--dark)`, `font-weight: 700`, `border-radius: 100px`, `padding: 15px 36px`, hover: `opacity: 0.88; transform: translateY(-1px)`.

**Module cards** — `background: var(--white)`, `border-radius: 20px`, `padding: 36px`, `overflow: hidden`. Topics use `22px` blue circle with white number inside.

---

## 2. Project Scaffold

### 2.1 Bootstrap Docusaurus

```bash
npx create-docusaurus@latest itanna classic --typescript
cd itanna
```

### 2.2 `docusaurus.config.ts` — Critical Settings

```ts
const config: Config = {
  title: 'ITAnna',
  tagline: 'AI Engineering for Software Engineers — No ML Background Needed',
  favicon: 'img/favicon.ico',

  url: 'https://itannateam.github.io',
  baseUrl: '/',
  organizationName: 'ITAnnaTeam',   // GitHub org/username
  projectName: 'itannateam.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    ['classic', {
      docs: false,                      // disable /docs — not needed
      blog: {
        showReadingTime: true,
        blogTitle: 'ITAnna Blog',
        blogDescription: 'AI Engineering insights, session notes, and tutorials',
        postsPerPage: 9,
        blogSidebarTitle: 'Recent Posts',
        blogSidebarCount: 'ALL',
      },
      theme: { customCss: './src/css/custom.css' },
    }],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,              // lock to dark — matches brand
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '',
      logo: { alt: 'ITAnna', src: 'img/logo.svg' },
      items: [
        { to: '/',         label: 'Home',     position: 'left' },
        { to: '/projects', label: 'Projects', position: 'left' },
        { to: '/blog',     label: 'Blog',     position: 'left' },
        {
          href: 'https://www.youtube.com/@ITAnnaTeam',
          label: 'YouTube',
          position: 'right',
        },
        {
          href: 'https://chat.whatsapp.com/DUIqf5g5hcO9wKuhgbQPAB',
          label: 'WhatsApp',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { label: 'YouTube', href: 'https://www.youtube.com/@ITAnnaTeam' },
        { label: 'WhatsApp Community', href: 'https://chat.whatsapp.com/DUIqf5g5hcO9wKuhgbQPAB' },
        { label: 'Blog', to: '/blog' },
        { label: 'Projects', to: '/projects' },
      ],
      copyright: `© ${new Date().getFullYear()} ITAnna. Built with Docusaurus.`,
    },
  },
};
```

---

## 3. Global CSS — `src/css/custom.css`

Override Docusaurus Infima variables to match the ITAnna palette:

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

/* ── INFIMA OVERRIDES ── */
:root,
[data-theme='dark'] {
  --ifm-color-primary:           #0BB7F1;
  --ifm-color-primary-dark:      #09a3d8;
  --ifm-color-primary-darker:    #0897cc;
  --ifm-color-primary-darkest:   #077caa;
  --ifm-color-primary-light:     #23c5f3;
  --ifm-color-primary-lighter:   #30c9f4;
  --ifm-color-primary-lightest:  #56d4f6;

  --ifm-background-color:        #05175B;
  --ifm-background-surface-color:#081f7a;
  --ifm-navbar-background-color: #05175B;
  --ifm-footer-background-color: #030e3a;
  --ifm-font-family-base:        'Inter', sans-serif;
  --ifm-heading-font-family:     'Space Grotesk', sans-serif;
  --ifm-font-color-base:         #FFFFFF;
  --ifm-link-color:              #0BB7F1;
  --ifm-navbar-link-color:       rgba(255,255,255,0.85);
  --ifm-navbar-link-hover-color: #0BB7F1;
  --ifm-code-font-size:          95%;

  /* ITAnna custom tokens */
  --dark:        #05175B;
  --blue:        #0BB7F1;
  --white:       #FFFFFF;
  --dark-card:   #081f7a;
  --blue-faint:  rgba(11, 183, 241, 0.10);
  --blue-border: rgba(11, 183, 241, 0.25);
  --white-dim:   rgba(255,255,255,0.65);
  --white-faint: rgba(255,255,255,0.08);
}

/* ── GLOBAL RESETS ── */
*, *::before, *::after { box-sizing: border-box; }
body { -webkit-font-smoothing: antialiased; }
h1, h2, h3, h4 { font-family: 'Space Grotesk', sans-serif; letter-spacing: -0.02em; }

/* ── NAVBAR ── */
.navbar {
  border-bottom: 1px solid var(--blue-border);
  backdrop-filter: blur(10px);
}
.navbar__brand span {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: var(--white);
}
.navbar__link--active { color: var(--blue) !important; }

/* ── FOOTER ── */
.footer { border-top: 1px solid var(--blue-border); }

/* ── SHARED COMPONENTS ── */
.eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 22px;
}
.eyebrow-line {
  width: 36px; height: 2px;
  background: var(--blue);
  border-radius: 2px;
}
.eyebrow-text {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--blue);
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--blue-faint);
  border: 1px solid var(--blue-border);
  color: var(--blue);
  font-size: 13px;
  font-weight: 500;
  padding: 7px 16px;
  border-radius: 100px;
  letter-spacing: 0.02em;
}
.pill--highlight {
  background: var(--blue);
  border-color: var(--blue);
  color: var(--dark);
  font-weight: 600;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--blue);
  color: var(--dark);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 15px;
  padding: 15px 36px;
  border-radius: 100px;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.15s;
}
.cta-btn:hover { opacity: 0.88; transform: translateY(-1px); color: var(--dark); }

.live-dot {
  width: 7px; height: 7px;
  background: var(--blue);
  border-radius: 50%;
  animation: pulse 1.8s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.7); }
}
```

---

## 4. Home Page — `src/pages/index.tsx`

The home page has **four sections** in order:

### Section 1 — Hero

```
Eyebrow:  "Free Live Sessions · AI Engineering"
H1:       "AI Engineering\nfor Software Engineers"
           (second line in --blue)
Subtext:  "No prior ML experience needed. Six modules, 23 topics,
           real production applications."
Pills:    [💻 Free Live Zoom]  [6 Modules]  [23 Topics]
CTA btn:  "Join the WhatsApp Community →"  → https://chat.whatsapp.com/DUIqf5g5hcO9wKuhgbQPAB
```

### Section 2 — AI Curriculum Grid

Section label: `"CURRICULUM"` (eyebrow style, centered, with hr dividers either side)

Render **6 module cards** in a 2-column CSS grid (`gap: 20px`). Each card:
- White background, `border-radius: 20px`, `padding: 36px`, `overflow: hidden`
- Ghost number (`position: absolute`, top-right, `130px`, `opacity: 0.055`, `color: var(--dark)`)
- Badge pill (Module 01, Module 02 … Module 06)
- Module 01 badge includes a live-dot animation
- Title (`Space Grotesk`, `21px`, `font-weight: 700`, `color: var(--dark)`)
- Topic list: numbered blue circle (`22px`, `background: var(--blue)`) + topic text (`14px`, `color: rgba(5,23,91,0.78)`)

**Module data:**

```
Module 01 — Foundations (No ML Required) [LIVE badge]
  1. AI Engineering vs. ML Engineering vs. Data Science
  2. How LLMs actually work — tokens, next-token prediction, training vs. inference (no math)
  3. Embeddings explained simply — what a vector representation is and why it matters
  4. Context windows, temperature, and other inference-time knobs

Module 02 — Talking to Models
  5.  Calling an LLM API for the first time — your first "Hello World"
  6.  Prompt engineering fundamentals — zero-shot, few-shot, chain-of-thought
  7.  Structured outputs and function calling / tool use
  8.  System prompts vs. user prompts and message roles

Module 03 — Giving LLMs Knowledge & Memory
  9.  Why LLMs hallucinate and the limits of pure prompting
  10. RAG from scratch — the core idea before any framework
  11. Vector databases — what they are and when you need one (Chroma, Pinecone, etc.)
  12. Chunking strategies and retrieval quality

Module 04 — Building Real Applications
  13. Agents — what makes something "agentic" vs. a simple chatbot
  14. Tool use and function calling in practice
  15. Frameworks overview — LangChain, LangGraph, LlamaIndex (when to use each)
  16. Multi-step workflows and orchestration

Module 05 — Making It Production-Ready
  17. Evaluation — how do you know if your AI app is actually good?
  18. Observability and tracing — logging what the model actually did
  19. Cost and latency optimization
  20. Guardrails, safety, and handling failure modes
  21. Deployment basics — from notebook to a real app

Module 06 — Where ML Knowledge Helps [OPTIONAL tag]
  22. Fine-tuning vs. RAG vs. prompting — when each approach makes sense
  23. A gentle intro to ML concepts AI engineers actually need
```

### Section 3 — Community Links

Two cards side-by-side (`display: flex`, `gap: 20px`):

**Card A — YouTube**
```
Icon:    YouTube SVG (red fill)
Label:   "Watch on YouTube"
Handle:  "@ITAnnaTeam"
Text:    "Free session recordings, concept walkthroughs,
          and AI Engineering tutorials."
Link:    https://www.youtube.com/@ITAnnaTeam
Button:  "Visit Channel →"  style: outlined (border: 1px solid var(--blue-border))
```

**Card B — WhatsApp Community**
```
Icon:    WhatsApp SVG (green fill)
Label:   "Join the Community"
Name:    "ITAnna — Q&A & Feedback"
Text:    "Get session Zoom links, ask questions, share
          feedback, and discuss with fellow learners."
Link:    https://chat.whatsapp.com/DUIqf5g5hcO9wKuhgbQPAB
Button:  "Join Now →"  style: filled (background: var(--blue))
```

Card styling: `background: var(--dark-card)`, `border: 1px solid var(--blue-border)`, `border-radius: 20px`, `padding: 36px`.

### Section 4 — Footer CTA Strip

```
Label:   "STAY UPDATED"
Heading: "Join the ITAnna WhatsApp Community for
          session links, dates & discussions"
Button:  "Join the Community →"  (full cta-btn style)
```

Background: `rgba(11, 183, 241, 0.05)`, `border-top: 1px solid var(--blue-border)`.

---

## 5. Projects Page — `src/pages/projects.tsx`

### Hero
```
Eyebrow:  "Open Source"
H1:       "Projects"
Subtext:  "Real AI Engineering projects built during ITAnna
           sessions — study the code, fork it, build on it."
```

### Project Cards Grid (2 columns)

Each card: `background: var(--white)`, `border-radius: 20px`, `padding: 32px`, `color: var(--dark)`.

Start with **two placeholder project cards** that will be replaced as sessions progress:

**Card 1 — Session Codebase**
```
Badge:   "Module 01 · Foundations"
Title:   "Session 1 — LLM Basics"
Text:    "Code from the first live session. Covers LLM API
          calls, token inspection, embeddings, and prompt
          experiments."
Tags:    [Python]  [OpenAI API]  [Embeddings]
Button:  "View on GitHub →"  href="#"  (placeholder until URL is shared)
```

**Card 2 — Coming Soon**
```
Badge:   "Module 02 · Coming Soon"
Title:   "Prompt Engineering Lab"
Text:    "Hands-on prompt engineering examples — zero-shot,
          few-shot, chain-of-thought, and structured outputs."
Tags:    [Python]  [Prompting]  [LangChain]
Button:  "Coming Soon"  (disabled state, opacity: 0.4)
```

Tag style: `background: var(--blue-faint)`, `border: 1px solid var(--blue-border)`, `color: var(--blue)`, `border-radius: 100px`, `font-size: 12px`, `padding: 3px 12px`.

---

## 6. Blog — Docusaurus Built-in

Docusaurus handles `/blog` automatically. Create one seed post:

**File:** `blog/2025-07-04-session-1-recap/index.md`

```md
---
title: "Session 1 Recap — AI Engineering Foundations"
authors:
  name: ITAnna Team
  url: https://www.youtube.com/@ITAnnaTeam
tags: [AI Engineering, LLMs, Foundations, Session Recap]
---

We ran our first live session on 4th July covering Module 1: Foundations.
Here's a quick recap of what we discussed and why it matters for software engineers
making the move into AI Engineering.

<!-- truncate -->

## What we covered

...add full recap content here...
```

---

## 7. File Structure

```
itanna/
├── docusaurus.config.ts
├── package.json
├── tsconfig.json
├── static/
│   └── img/
│       ├── logo.svg          ← "ITAnna" wordmark: "IT" white, "Anna" in #0BB7F1
│       └── favicon.ico
├── blog/
│   └── 2025-07-04-session-1-recap/
│       └── index.md
├── src/
│   ├── css/
│   │   └── custom.css        ← Section 3 above
│   ├── components/
│   │   ├── ModuleCard/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── CommunityCard/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   └── ProjectCard/
│   │       ├── index.tsx
│   │       └── styles.module.css
│   └── pages/
│       ├── index.tsx         ← Home page (Section 4)
│       ├── index.module.css
│       ├── projects.tsx      ← Projects page (Section 5)
│       └── projects.module.css
```

---

## 8. Logo SVG

Create `static/img/logo.svg` — the ITAnna wordmark. "IT" in white, "Anna" in `#0BB7F1`, `Space Grotesk`, `font-weight: 700`, `font-size: 22px`. Use an inline SVG text element. Minimum 120×32px viewBox.

---

## 9. GitHub Pages Deployment

### 9.1 `package.json` deploy script

```json
{
  "scripts": {
    "deploy": "GIT_USER=itanna USE_SSH=true docusaurus deploy"
  }
}
```

### 9.2 GitHub Actions — `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: write

jobs:
  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build website
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

### 9.3 GitHub Repo Settings

In the `ITAnnaTeam/itannateam.github.io` repository on GitHub:
- **Settings → Pages → Source:** set to `gh-pages` branch, `/ (root)`
- The site will be live at `https://itannateam.github.io` after the first successful deploy

---

## 10. Responsive Breakpoints

Apply these breakpoints consistently across all pages:

```css
/* Tablet */
@media (max-width: 996px) {
  .module-grid, .community-grid { grid-template-columns: 1fr; }
}

/* Mobile */
@media (max-width: 720px) {
  .hero-title { font-size: 38px; }
  .module-card { padding: 28px 24px; }
  .card-ghost  { font-size: 100px; }
}
```

---

## 11. Quality Checklist

Before committing, verify:

- [ ] `colorMode.disableSwitch: true` — no light/dark toggle visible
- [ ] All pages render with `background: #05175B` (no white flash)
- [ ] Ghost numbers visible at `opacity: 0.055` on module cards
- [ ] Live dot animating on Module 01 badge
- [ ] WhatsApp link opens `https://chat.whatsapp.com/DUIqf5g5hcO9wKuhgbQPAB`
- [ ] YouTube link opens `https://www.youtube.com/@ITAnnaTeam`
- [ ] Blog `/blog` route works with seed post
- [ ] `npm run build` exits 0 with no broken link errors
- [ ] Deployed URL `https://itannateam.github.io` loads correctly