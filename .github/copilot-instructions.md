# Itzfizz Motion — Copilot Instructions

This repository is a small React + Vite frontend assignment: a polished scroll-driven hero animation for Itzfizz Digital.

## Stack
- React
- Vite
- Tailwind CSS
- GSAP with ScrollTrigger
- Modern JavaScript/JSX
- No backend, database, auth, Next.js, or extra services unless explicitly requested.

## Coding style
- Write code like a practical human developer maintaining a small project.
- Prefer the simplest working implementation. Follow YAGNI: do not add abstractions, utilities, wrappers, hooks, components, or dependencies unless they solve a real problem.
- Read existing code before changing it. Reuse existing components and patterns instead of creating duplicates.
- Keep components small, but do not split every few lines into a component.
- Prefer clear variable names and straightforward control flow over clever one-liners.
- Do not generate generic AI-style comments. Comment only when the reason for a decision is not obvious from the code.
- Do not add placeholder architecture, speculative APIs, or unused configuration.
- Avoid unnecessary state. For animation state, prefer GSAP/DOM transforms rather than React state on every scroll tick.
- Keep diffs focused: change only what the task requires.

## Animation requirements
- Use GSAP + ScrollTrigger for the main scroll-linked animation.
- Tie motion to scroll progress; do not use autoplay timers for the core hero movement.
- Prefer transform and opacity for animated properties.
- Avoid forced layout reads/writes inside frequent scroll callbacks.
- Clean up GSAP contexts/triggers when components unmount.
- Support responsive layouts. Do not assume desktop dimensions.
- Respect prefers-reduced-motion where practical without breaking the page.

## UI requirements
- Semantic HTML and accessible interactive elements.
- Good keyboard/focus behavior.
- Images need useful alt text unless they are purely decorative.
- Do not invent real Itzfizz business metrics. Demo statistics must be presented as illustrative content.
- Keep the visual design clean and restrained. Avoid adding unrelated sections or effects just to make the project larger.

## Validation
For non-trivial changes, leave behind the smallest useful check: a focused test, self-check, or documented manual verification step. Do not introduce a testing framework solely for a trivial change.
Before considering work complete:
1. Run the build command from package.json.
2. Check the hero at desktop and mobile widths.
3. Verify scroll forward and backward.
4. Verify the initial-load animation.
5. Check for console errors and broken asset paths.

## Dependency rule
Before adding a package, check whether Vite, React, Tailwind, GSAP, or the browser already provides the needed capability. Do not add a dependency for convenience alone.
