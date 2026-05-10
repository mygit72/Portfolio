# Vansh Mahendru — Portfolio

Personal portfolio site. Cinematic, Ferrari-F1-inspired design (Rosso Corsa on near-black, oversized display type, scroll motion).

Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

All copy lives in [`lib/data.ts`](./lib/data.ts):

- `PROFILE` — name, contact links, education
- `PROJECTS` — featured + secondary cards (set `featured: true` to promote)
- `SKILLS` — capability groups shown on the Skills section
- `CERTIFICATIONS` — credentials timeline

Components live in [`components/`](./components/) and are composed in [`app/page.tsx`](./app/page.tsx).

## Deploy to Vercel

1. Push this folder to a new GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Vercel auto-detects Next.js — accept defaults and click **Deploy**.
4. (Optional) add a custom domain under Project → Settings → Domains.

## Structure

```
app/
  layout.tsx        // root layout, fonts, metadata
  page.tsx          // composes all sections
  globals.css       // Tailwind + custom CSS
components/
  Nav.tsx
  Hero.tsx
  Marquee.tsx
  About.tsx
  Skills.tsx
  Projects.tsx
  Certifications.tsx
  Contact.tsx
  Footer.tsx
  SectionHeader.tsx
lib/
  data.ts           // single source of truth for site content
```

## Build

```bash
npm run build
npm start
```
