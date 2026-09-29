# Itzfizz Motion

A React + Vite frontend assignment built around a scroll-driven hero animation for Itzfizz Digital.

## What is included

- React + Vite
- Tailwind CSS 4
- GSAP + ScrollTrigger
- Staggered page-load intro animation
- Scroll-linked car movement from left to right
- 300vh scroll track with a 100vh sticky hero stage
- Responsive desktop/mobile layout
- Reduced-motion support
- No backend or external API
- Inline SVG car artwork

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build

```bash
npm run build
```

## Animation notes

The main hero uses GSAP ScrollTrigger with `start: "top top"` and `end: "bottom bottom"`. The car position is animated with a transform so its movement follows the scroll progress of the hero track.

The hero keeps the visual focus on one scroll-driven interaction instead of adding unnecessary animation libraries or application state.

## Notes

The percentage cards are intentionally illustrative demo metrics, not Itzfizz business results.

The car artwork is a simple inline SVG, so the assignment does not depend on a third-party asset host.
