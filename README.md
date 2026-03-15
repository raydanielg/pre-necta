# PRE NECTA Mwanza Form Six Results 2026 — Next.js

A Next.js 14 (App Router) conversion of the original HTML portal, keeping the **exact same UI** with full responsiveness.

## Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | CSS Modules |
| Images | `next/image` |

## Project Structure

```
prenecta-mwanza/
├── app/
│   ├── globals.css          # Global styles (body bg, marquee animation)
│   ├── layout.tsx           # Root layout + metadata (SEO / OG / Twitter)
│   └── page.tsx             # Home page
├── components/
│   ├── SiteHeader.tsx       # Blue header with logos, marquee
│   ├── SiteHeader.module.css
│   ├── SchoolsGrid.tsx      # Search + alpha filter + 3-column grid (client)
│   └── SchoolsGrid.module.css
├── data/
│   └── schools.ts           # All 40 schools as typed data
├── public/
│   ├── results/             # ← Place your PDF files here
│   ├── logo/                # ← flag-tanzania.jpg etc.
│   ├── ngao.png
│   └── thumb_33_102x110_0_0_crop.png
├── next.config.js
├── package.json
└── tsconfig.json
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Add your assets
#    - public/ngao.png
#    - public/thumb_33_102x110_0_0_crop.png
#    - public/logo/flag-tanzania.jpg
#    - public/results/*.pdf  (all the school PDFs)

# 3. Run development server
npm run dev
# → http://localhost:3000

# 4. Build for production
npm run build
npm start
```

## Adding / Removing Schools

Edit `data/schools.ts` — add or remove objects from the `schools` array:

```ts
{ code: "S9999", name: "NEW SCHOOL SECONDARY SCHOOL", file: "S9999-NEW SCHOOL SECONDARY.pdf" },
```

The grid re-distributes automatically into three balanced columns.

## Deploying

Works out of the box on **Vercel** (just push to GitHub and import).  
For other hosts: `npm run build` then serve the `.next` folder.
