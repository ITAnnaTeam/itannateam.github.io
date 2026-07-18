# ITAnna Docusaurus Theme & Styling System

This document outlines the theme colors, custom CSS variables, and typography definitions used in this Docusaurus site. You can use this as a reference or prompt for setting up the styling system in another Docusaurus project.

## Typography
- **Primary Body Font**: `'Inter', sans-serif` (imported from Google Fonts: weights 300, 400, 500, 600)
- **Heading Font**: `'Space Grotesk', sans-serif` (imported from Google Fonts: weights 400, 500, 600, 700)

## Custom Color Palette
The colors are applied globally across both light and dark modes (the current configuration forces the same values in `:root` and `[data-theme='dark']`):

| Variable / Token | Value | Purpose / Description |
| :--- | :--- | :--- |
| `--ifm-color-primary` | `#0BB7F1` | Brand Primary color (Light Blue) |
| `--ifm-color-primary-dark` | `#09a3d8` | Darker Primary variant |
| `--ifm-color-primary-darker` | `#0897cc` | Even darker variant |
| `--ifm-color-primary-darkest` | `#077caa` | Darkest variant |
| `--ifm-color-primary-light` | `#23c5f3` | Lighter Primary variant |
| `--ifm-color-primary-lighter` | `#30c9f4` | Even lighter variant |
| `--ifm-color-primary-lightest` | `#56d4f6` | Lightest variant |
| `--ifm-background-color` | `#05175B` | Page Background (Deep Dark Blue) |
| `--ifm-background-surface-color` | `#081f7a` | Component / Card Background |
| `--ifm-navbar-background-color` | `#05175B` | Navbar Background |
| `--ifm-footer-background-color` | `#030e3a` | Footer Background |
| `--ifm-font-color-base` | `#FFFFFF` | Default base font color |
| `--ifm-link-color` | `#0BB7F1` | Hyperlink color |
| `--ifm-navbar-link-color` | `rgba(255,255,255,0.85)` | Navbar link base color |
| `--ifm-navbar-link-hover-color` | `#0BB7F1` | Navbar link hover color |

### Custom Brand Tokens
```css
--dark:        #05175B;
--blue:        #0BB7F1;
--white:       #FFFFFF;
--dark-card:   #081f7a;
--blue-faint:  rgba(11, 183, 241, 0.10);
--blue-border: rgba(11, 183, 241, 0.25);
--white-dim:   rgba(255,255,255,0.65);
--white-faint: rgba(255,255,255,0.08);
```

---

## Custom CSS File (custom.css)
To apply this theme directly, insert the following contents into your Docusaurus site's `src/css/custom.css` file:

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

/* ── INFIMA OVERRIDES ── */
:root,
[data-theme='dark'] {
  --ifm-color-primary:            #0BB7F1;
  --ifm-color-primary-dark:       #09a3d8;
  --ifm-color-primary-darker:     #0897cc;
  --ifm-color-primary-darkest:    #077caa;
  --ifm-color-primary-light:      #23c5f3;
  --ifm-color-primary-lighter:    #30c9f4;
  --ifm-color-primary-lightest:   #56d4f6;

  --ifm-background-color:         #05175B;
  --ifm-background-surface-color: #081f7a;
  --ifm-navbar-background-color:  #05175B;
  --ifm-footer-background-color:  #030e3a;
  --ifm-font-family-base:         'Inter', sans-serif;
  --ifm-heading-font-family:      'Space Grotesk', sans-serif;
  --ifm-font-color-base:          #FFFFFF;
  --ifm-link-color:               #0BB7F1;
  --ifm-navbar-link-color:        rgba(255,255,255,0.85);
  --ifm-navbar-link-hover-color:  #0BB7F1;
  --ifm-code-font-size:           95%;

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

/* ── RESPONSIVE BREAKPOINTS ── */
@media (max-width: 996px) {
  .module-grid, .community-grid { grid-template-columns: 1fr; }
}

@media (max-width: 720px) {
  .hero-title { font-size: 38px; }
  .module-card { padding: 28px 24px; }
  .card-ghost  { font-size: 100px; }
}
