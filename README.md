# Maison Faye — Bakery Website (Next.js + TypeScript + Tailwind)

A single-page bakery site built with the Next.js App Router, TypeScript, and Tailwind CSS. The booking section links out to WhatsApp, Email, and TikTok.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Before you publish

All contact placeholders live in one file: **`src/config/site.ts`**

```ts
export const siteConfig = {
  name: "Maison Faye",
  whatsappNumber: "10000000000", // international format, no + or spaces
  whatsappMessage: "Hi Maison Faye! I'd like to ask about ordering a cake.",
  email: "hello@maisonfaye.example",
  emailSubject: "Cake Inquiry",
  emailBody: "Hi Maison Faye,\n\nI'd like to ask about ordering a cake for...",
  tiktokHandle: "@maisonfaye",
  tiktokUrl: "https://www.tiktok.com/@maisonfaye",
};
```

Update these fields with your real WhatsApp number, email, and TikTok handle — the WhatsApp/email/TikTok links across the booking section and footer are all generated from this one config, so there's nothing else to hunt down.

Also swap the sample copy (About section, menu items, reviews) in `src/components/` and the site name in `src/app/layout.tsx` for your own content.

## Project structure

```
src/
  app/
    layout.tsx      — root layout, fonts, metadata
    page.tsx         — assembles the page sections
    globals.css      — Tailwind directives + a few custom effects
  components/
    Header.tsx
    Hero.tsx
    About.tsx
    Menu.tsx
    Reviews.tsx
    Order.tsx        — the WhatsApp / Email / TikTok booking section
    Footer.tsx
  config/
    site.ts           — all contact details in one place
```

## Build for production

```bash
npm run build
npm start
```

Deploys cleanly to Vercel, Netlify, or any Node hosting that supports Next.js.
