# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Command | Notes |
|---------|-------|
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | `tsc -b && vite build` — typechecks first, then bundles. **Does not run lint.** |
| `npm run lint` | ESLint over the whole project |
| `npm run preview` | Serve the production build locally |

Package manager is **npm** (a `package-lock.json` is committed).

**Tests:** `vitest` + `@testing-library/react` + `jsdom` are installed but there is **no `test` script and no vitest config yet**. Wire up `vitest.config.ts` (or a `test` block in `vite.config.ts`) with `environment: 'jsdom'` before writing tests; there is no established pattern to copy.

## Project state (important)

The starter template has been replaced. Routing is wired up in `App.tsx` with `react-router-dom` (`BrowserRouter`/`Routes`): `/` redirects to `/login`, `/login` renders Login, `/register` renders Register, `/home` renders Home. Auth pages are UI-only — `onSubmit` is a no-op, no auth logic or API calls exist.

What exists so far:
- **`src/pages/auth/AuthLayout/AuthLayout.tsx`** — shared shell for auth screens (logo, intro heading, social-login row, footer nav link via `react-router-dom`'s `Link`). Login and Register each render their own `<form>` as `children` and pass `title`/`subtitle`/footer copy as props; **do not re-duplicate this markup back into the pages** — extend `AuthLayout`'s props instead.
- **`src/pages/home/Home/Home.tsx`** — first non-auth screen. Renders entirely from `src/data/` (`categories.tsx`, `products.ts`, `banners.ts`) mapped through components, per `docs/DEVELOPMENT_PLAN.md`'s "no hardcoded repeated UI" rule — copy this data-driven pattern for Product/Cart rather than inlining JSX per item. `categories.tsx` is `.tsx` (not `.ts`) because it embeds lucide icon elements directly in the data; the other data files don't need JSX and stay `.ts`. Product images are self-contained SVG placeholder data URIs (`src/data/productPlaceholder.ts`) — there's no real product photography in the repo yet.
- **Design tokens**: `src/styles/variables.less` (colors, spacing, radius, shadows, motion — matches `docs/UI_GUIDELINES.md`) and `src/styles/mixins.less` (shared LESS mixins, e.g. `.input-base()`). `src/styles/global.less` has the reset and the app-frame shell (see "Desktop frame" below). When a screen needs a color/gradient the design doesn't already have a token for, prefer deriving it from an existing token with LESS's `mix()`/`lighten()`/`fade()` (see `@color-category-bg-lavender`, `@gradient-banner`) over hardcoding a new hex.
- **UI components** (`src/components/ui/`): growing library covering auth (`Button`, `Input`/`PasswordInput`/`Field`, `Divider`, `Logo`, `SocialButton`) and Home/shop screens (`Header`, `SearchInput`, `BannerCard`, `CategoryCard`, `ProductCard`, `BottomNavigation`, `IconButton`, `Badge`, `Rating`, `Price`). Check `docs/COMPONENT_LIBRARY.md` for the full intended inventory before adding a new one. Plus `src/components/icons/BrandIcons.tsx` for one-off brand icons (Google/Apple) that don't belong in lucide-react.
- **Validation**: `src/schemas/auth.ts` has Zod v4 `loginSchema` and `registerSchema`, consumed via `zodResolver` — this is the pattern to copy for new forms. Note `z.email()` (top-level), not the deprecated `.email()` chain method.

### Desktop frame

`#root` in `global.less` is intentionally sized by `min-height` (a floor), never a fixed `height` — do not add `height: 100%` back onto `#root`. A fixed height clips overflowing content instead of letting the frame grow, which made footers render outside the visible card. Below `@app-max-width` (430px) the frame is edge-to-edge with no radius/shadow (mobile); at or above it, a `@media (min-width: @app-max-width)` block adds `border-radius: @radius-card`, the soft shadow, and `overflow: hidden` for the desktop "device card" look.

For the same reason, `BottomNavigation` uses `position: sticky`, not `fixed` — `fixed` positions against the real viewport and would break out of the centered desktop card the same way a fixed-height `#root` did; `sticky` respects the frame's bounds while still pinning to the bottom of the scrolled page.

Still **not wired up**: @tanstack/react-query, Zustand, axios, vite-plugin-pwa, and there is no test script/config yet. Each screen has a spec in `tasks/TASK-00N-*.md` (login, register, home done; product-detail and cart are next) — check there before `docs/DEVELOPMENT_PLAN.md`'s phase list, it's more specific.

## Stack

- **React 19**, **TypeScript ~6.0**, **Vite 8**
- **Routing:** react-router-dom v7, wired up (`BrowserRouter` in `App.tsx`) · **Server state:** @tanstack/react-query v5 (not wired up) · **Client state:** Zustand v5 (not wired up)
- **Forms:** react-hook-form + **Zod v4** (`@hookform/resolvers`). Zod v4 has breaking changes vs v3 — verify current API.
- **HTTP:** axios · **Animation:** framer-motion · **Icons:** lucide-react (only icon library — never mix) · **Carousel:** swiper · **Classnames:** clsx
- **PWA:** vite-plugin-pwa installed but not configured; neither is added in `vite.config.ts` (only `@vitejs/plugin-react`).

## Hard conventions

These come from `docs/AI_RULES.md` and the `AGENTS.md` guide and are strictly enforced for this project:

- **TypeScript + arrow-function components only.** No `.js`, no class components.
- **Styling is LESS Modules** (one `.module.less` per component) — not Tailwind, SCSS, CSS-in-JS, or styled-components. No inline styles unless the value is dynamic. Never hardcode colors; pull from `src/styles/variables.less`.
- Component files max ~250 lines, single responsibility. Reuse before creating; check `docs/COMPONENT_LIBRARY.md` for the intended component inventory.
- Naming: `PascalCase` components, `camelCase` functions/vars, `kebab-case` LESS files, `SCREAMING_SNAKE_CASE` constants.
- Use `React.memo`, `useMemo`/`useCallback`, and lazy loading where they help.

### TypeScript strictness that will bite you

`tsconfig.app.json` enables:
- `verbatimModuleSyntax` → type-only imports **must** use `import type { ... }`.
- `erasableSyntaxOnly` → **no `enum`, no `namespace`, no parameter properties.** Use union types / plain objects instead.
- `noUnusedLocals` + `noUnusedParameters` → unused bindings fail the build.

### No path aliases

There is no `@/` alias in `vite.config.ts` or `tsconfig.app.json` — every cross-folder import is relative (e.g. `../../../components/ui/Button/PrimaryButton` from a page two levels deep). Match this existing pattern rather than introducing an alias unilaterally.

## Design system (mobile-first)

The target app ("Optima") is a **mobile-only** e-commerce PWA. See `docs/UI_GUIDELINES.md` for the full spec.

- Design width **390px**, max **430px**. On desktop the app is **centered** on a `#ECECEC` background — **do not build desktop-responsive layouts**; desktop is only a preview frame.
- Primary color `#6C4DFF` (gradient `#7B4DFF → #5E3CFF`), text `#111111`, font **Inter** (fallback system-ui, weights 400–700).
- Buttons 54px tall / 18px radius, cards 22px radius, inputs 54px tall. Animations subtle, 200–300ms `ease`/`ease-in-out`, never bounce.

## Reading order before coding

Read `docs/AI_RULES.md`, `docs/UI_GUIDELINES.md`, and `docs/COMPONENT_LIBRARY.md` first. If the screen you're building has a `tasks/TASK-00N-*.md` file, that's the authoritative spec (objective, required sections, acceptance criteria) — read it before `docs/DEVELOPMENT_PLAN.md`, which only gives the coarse phase order (foundation → components → auth → home → product → cart → checkout → PWA).

Note: `AI_RULES.md` references `docs/PROJECT_SPEC.md`, which **does not exist** — treat that reference as aspirational.

Reference mockups for built/planned screens (login, register, home, detail, summary) are PNGs under `docs/design/`.

## Skills

Agent skills are pinned in `skills-lock.json` (remote repos) and mirrored under `.agents/skills/`.
