# Pragya Rajput: portfolio

A one-page portfolio in a night-sky theme: a starry purple hero with a cut-out portrait, a "What I do" diagram, a centred experience timeline, selected projects, results from real work, skills and contact.

## Stack

- Next.js 16 (App Router) with React 19 and TypeScript
- Tailwind CSS 4
- Instrument Serif, Geist, Geist Mono and Caveat through `next/font`
- Lenis for smooth scrolling (off when the visitor prefers reduced motion)

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build && npm start
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/data/profile.ts` | Content: experience, projects, skills, education, links. Edit this, not the components. |
| `src/components/sections/` | One file per page section. |
| `src/app/globals.css` | Theme tokens (colours, fonts) and shared styles: sky, stars, buttons, cards. |
| `public/` | Resume PDF, the PostDrip screen recording and the hero portrait. |

## Accessibility

- Every section works with the keyboard; the "What I do" circles are focusable and their text is also listed below the diagram.
- Reduced motion: no smooth scroll, no twinkling stars, no entrance animation.
- Decorative layers (sky, stars, glows) are hidden from screen readers.

## Deploying

Deployed on Vercel (no environment variables needed). `siteUrl` in `src/data/profile.ts` should match the live address so social previews resolve.
