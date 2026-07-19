# optima-commerce — Agent guide

## Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Vite dev server |
| `npm run build` | `tsc -b && vite build` — typecheck then bundle (not parallel, no lint) |
| `npm run lint` | ESLint entire project |
| `npm run preview` | Preview production build |

`npm run build` does **not** run lint — just `tsc -b && vite build`. No test script exists yet (vitest + @testing-library/react installed but unconfigured).

## Mock login

Login validates against hardcoded credentials in `src/services/auth.service.ts:4-5`:
- Phone: `081211112222`
- Password: `tera123`

Use these when manually testing auth.

## TypeScript strictness (will bite you)

- `verbatimModuleSyntax` → type-only imports **must** use `import type { ... }`.
- `erasableSyntaxOnly` → no `enum`, no `namespace`, no parameter properties.
- `noUnusedLocals` + `noUnusedParameters` → unused bindings fail the build.
- No path aliases — every cross-folder import is relative (e.g. `../../../components/...`).

## Architecture

- **Entry:** `src/main.tsx` → `src/App.tsx` with `BrowserRouter`. Routes: `/`→`/login`, `/login`, `/register`, `/home`, `/products/:id`.
- **Auth:** `AuthLayout` wraps Login/Register (extend its props, don't duplicate markup). Login calls `auth.service.ts` mock and persists via Zustand `auth.store.ts` (localStorage key `optima-auth`).
- **Post-auth shell:** `MainLayout` (fixed header slot + scrollable content + `BottomNavigation`). Used by Home, ProductDetail.
- **Zustand** is wired (auth store with `persist` middleware). React Query and axios are installed but **not yet wired** — mock data from `src/data/` is consumed directly.
- **Mock data:** `src/data/categories.tsx` is `.tsx` because it embeds lucide-icon elements; other data files are `.ts`. Product images are SVG data URIs from `src/data/productPlaceholder.ts`.

## Hard conventions

- **LESS Modules only** (`.module.less` per component) — no Tailwind, SCSS, CSS-in-JS. No inline styles unless dynamic. Colors from `variables.less` only.
- Arrow function components, `React.memo` and `useMemo`/`useCallback` where helpful.
- Naming: `PascalCase` components, `camelCase` functions, `kebab-case` LESS files, `SCREAMING_SNAKE_CASE` constants.
- Component max 250 lines, single responsibility.
- Mobile-first (390–430px). Desktop centers the app on `#ECECEC` — no desktop-responsive layouts.
- `#root` uses `min-height` (never fixed `height`). `BottomNavigation` is `sticky`, not `fixed`.
- Only **lucide-react** for icons. `src/components/icons/BrandIcons.tsx` has Google/Apple brand icons.
- Zod v4: `z.email()` (top-level), not deprecated `.email()` chain.

## Prereads

Before coding: `docs/UI_GUIDELINES.md`, `docs/COMPONENT_LIBRARY.md`. Reference mockups in `docs/design/`. Task files in `tasks/TASK-*.md` are the authoritative spec per screen.

`docs/PROJECT_SPEC.md` exists (layout + app flow rules) — read it.

## Still not wired

@tanstack/react-query, Zustand for non-auth stores, axios for real API, vite-plugin-pwa config, test config, `router/`, `hooks/`, `types/`, `constants/` directories (some exist in `FOLDER_STRUCTURE.md` but not yet created).
