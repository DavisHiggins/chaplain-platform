# PDT Chaplain Site

## Project Overview
Fraternity leadership site for Phi Delta Theta (NC Epsilon) supporting my
Chaplain role. Deployed at phideltchaplain.vercel.app. Used by ~80 active
brothers for weekly Bible study, scripture plans, and brotherhood content.

## Tech Stack
- Vite (build tool — `vite.config.js`)
- Tailwind CSS (`tailwind.config.js`, PostCSS via `postcss.config.js`)
- Vanilla JavaScript (no React/Vue per current package.json)
- HTML entry point: `index.html`
- Source in `src/`
- Deployed via Vercel

## Repository Structure
- `index.html` — entry
- `src/` — all app source
- `tailwind.config.js`, `postcss.config.js`, `vite.config.js` — build config
- `pdt-shield.png`, `favicon.*` — brand assets

## Core Features
- Weekly Bible study calendar
- 16-week scripture plan for Fall 2026 semester
- Structured spiritual growth / accountability content
- Brotherhood development resources

## Workflow Preferences
- Mobile-first responsive design — most brothers view on phones
- Tailwind utility classes only; no custom CSS unless unavoidable
- Keep load times fast (this is a side-project, not a SaaS) — no heavy libs
- Scripture content should be easy for me (non-developer Chaplain successors
  potentially) to update — favor data files over hardcoded markup

## Content Rules
- Scripture references: use NIV by default, label if otherwise
- Tone: warm, faith-centered, accessible to brothers across the spiritual
  spectrum from devout to curious
- Brand identity: Phi Delta Theta (azure & argent, shield motif)
- No proselytizing language that would alienate brothers who attend
  Bible study casually

## Design Preferences
- Clean, calm, "Sunday morning" aesthetic
- PDT shield as anchor visual
- Typography emphasis: scripture should feel intentional, not decorative
- Avoid stock religious clipart

## Things NOT to Build
- Login / auth (the site is intentionally open)
- Payment or donation features
- Anything requiring a backend (this is a static Vite/Vercel deploy)
