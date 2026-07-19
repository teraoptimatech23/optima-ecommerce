# FOLDER_STRUCTURE.md

# Optima - Project Folder Structure

Version: 1.0.0

---

# Philosophy

This project follows a scalable, component-driven architecture.

Goals:

- Mobile First
- Clean Architecture
- Reusable Components
- Easy Maintenance
- Easy Scaling
- Production Ready
- Consistent Folder Structure

Every file should have a clear responsibility.

Avoid dumping unrelated code into a single file.

---

# Project Structure

```text
optima/
│
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── manifest.webmanifest
│   └── icons/
│
├── docs/
│   ├── PROJECT_SPEC.md
│   ├── UI_GUIDELINES.md
│   ├── AI_RULES.md
│   ├── COMPONENT_LIBRARY.md
│   ├── DEVELOPMENT_PLAN.md
│   ├── AUTH_SPEC.md
│   ├── ROUTING.md
│   ├── CODING_STANDARDS.md
│   ├── FOLDER_STRUCTURE.md
│   ├── prompts/
│   └── design/
│       ├── E-login.png
│       ├── E-register.png
│       ├── E-home.png
│       ├── E-detail.png
│       └── E-summary.png
│
├── tasks/
│   ├── sprint-01/
│   ├── sprint-02/
│   ├── sprint-03/
│   └── REVIEW_CHECKLIST.md
│
├── src/
│   │
│   ├── assets/
│   │   ├── fonts/
│   │   ├── icons/
│   │   ├── images/
│   │   └── svg/
│   │
│   ├── components/
│   │   ├── auth/
│   │   ├── buttons/
│   │   ├── cards/
│   │   ├── cart/
│   │   ├── common/
│   │   ├── feedback/
│   │   ├── inputs/
│   │   ├── modal/
│   │   ├── navigation/
│   │   ├── product/
│   │   └── profile/
│   │
│   ├── layouts/
│   │   ├── AuthLayout/
│   │   ├── MainLayout/
│   │   └── MobileLayout/
│   │
│   ├── pages/
│   │   ├── Auth/
│   │   │   ├── Login/
│   │   │   ├── Register/
│   │   │   └── ForgotPassword/
│   │   │
│   │   ├── Cart/
│   │   ├── Checkout/
│   │   ├── Home/
│   │   ├── Notifications/
│   │   ├── Orders/
│   │   ├── Product/
│   │   ├── Profile/
│   │   ├── Settings/
│   │   └── Wishlist/
│   │
│   ├── router/
│   │   ├── index.tsx
│   │   ├── ProtectedRoute.tsx
│   │   └── PublicRoute.tsx
│   │
│   ├── services/
│   │   ├── api.ts
│   │   ├── auth.service.ts
│   │   ├── cart.service.ts
│   │   ├── order.service.ts
│   │   ├── product.service.ts
│   │   └── user.service.ts
│   │
│   ├── store/
│   │   ├── auth.store.ts
│   │   ├── cart.store.ts
│   │   ├── product.store.ts
│   │   └── ui.store.ts
│   │
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useCart.ts
│   │   ├── useDebounce.ts
│   │   ├── useProduct.ts
│   │   └── useTheme.ts
│   │
│   ├── mock/
│   │   ├── banners.ts
│   │   ├── cart.ts
│   │   ├── categories.ts
│   │   ├── products.ts
│   │   └── user.ts
│   │
│   ├── types/
│   │   ├── auth.ts
│   │   ├── cart.ts
│   │   ├── common.ts
│   │   ├── order.ts
│   │   └── product.ts
│   │
│   ├── constants/
│   │   ├── app.ts
│   │   ├── colors.ts
│   │   ├── queryKeys.ts
│   │   ├── routes.ts
│   │   └── storage.ts
│   │
│   ├── utils/
│   │   ├── currency.ts
│   │   ├── formatter.ts
│   │   ├── helper.ts
│   │   ├── storage.ts
│   │   └── validation.ts
│   │
│   ├── styles/
│   │   ├── global.less
│   │   ├── mixins.less
│   │   ├── reset.less
│   │   ├── typography.less
│   │   ├── utilities.less
│   │   └── variables.less
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── .env
├── .env.development
├── .env.production
│
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

# Folder Responsibilities

## public/

Contains static files that are served directly by Vite.

Examples:

- favicon
- robots.txt
- manifest.webmanifest
- PWA icons

Never place React source code here.

---

## docs/

Contains all project documentation.

Examples:

- Project Specification
- Design System
- Coding Rules
- AI Rules
- UI Guidelines
- Design References
- Architecture

This folder acts as the project's documentation center.

---

## tasks/

Contains development tasks.

Tasks are organized by sprint.

Example:

Sprint 01

- Login
- Register

Sprint 02

- Home
- Product Detail
- Cart

Never write implementation code here.

---

# src/

Contains the application source code.

---

## assets/

Contains static assets used by React.

Examples

- Fonts
- Images
- Icons
- SVGs

Rule

Assets should never contain business logic.

---

## components/

Contains reusable UI components.

Only place components here if they can be reused.

Examples

Buttons

Inputs

Cards

Dialogs

Navigation

Badges

Avatars

Rule

If a component can be reused in multiple pages,

it belongs here.

---

Recommended structure

```text
components/

buttons/

PrimaryButton/

PrimaryButton.tsx

PrimaryButton.module.less

index.ts

types.ts
```

---

## layouts/

Contains page layouts.

Examples

MobileLayout

MainLayout

AuthLayout

Layouts define page structure only.

Never place business logic here.

---

## pages/

Contains application screens.

Each page owns its own folder.

Example

```text
pages/

Home/

Home.tsx

Home.module.less

index.ts
```

Pages should compose components,

not implement reusable UI.

---

## router/

Contains all routing configuration.

Examples

- Route definitions
- Protected routes
- Public routes

Never mix routing with business logic.

---

## services/

Contains API communication.

Examples

auth.service.ts

product.service.ts

cart.service.ts

Rules

Never call fetch() or axios directly inside pages.

Always use services.

---

## store/

Contains global state using Zustand.

Each domain owns its own store.

Example

auth.store.ts

cart.store.ts

product.store.ts

Avoid one giant store.

---

## hooks/

Contains reusable custom hooks.

Examples

useCart()

useProduct()

useAuth()

useDebounce()

Hooks should not render UI.

---

## mock/

Contains dummy data.

Used before backend integration.

Never hardcode dummy data inside components.

---

## types/

Contains shared TypeScript types and interfaces.

Never duplicate interfaces.

Import shared types whenever possible.

---

## constants/

Contains application constants.

Examples

Routes

Query Keys

Storage Keys

App Config

Colors

Avoid magic strings.

---

## utils/

Contains helper functions.

Examples

formatCurrency()

capitalize()

storage()

validateEmail()

Utils must remain pure functions.

---

## styles/

Contains global LESS files.

Files

variables.less

Global design tokens.

mixins.less

Reusable LESS mixins.

typography.less

Typography rules.

utilities.less

Utility classes.

reset.less

CSS reset.

global.less

Imports all global styles.

Never place page-specific styles here.

---

# Component Architecture

Every reusable component should have its own folder.

Example

```text
ProductCard/

ProductCard.tsx

ProductCard.module.less

types.ts

index.ts
```

Benefits

- Scalable
- Easy maintenance
- Easy testing
- Better organization

---

# Page Architecture

Every page should own its own folder.

Example

```text
Home/

Home.tsx

Home.module.less

index.ts
```

If the page grows,

additional files may be added.

Example

```text
Login/

Login.tsx

Login.module.less

schema.ts

validation.ts

hooks.ts

index.ts
```

---

# Naming Convention

Components

PascalCase

Example

ProductCard

HomeHeader

PrimaryButton

---

Functions

camelCase

Example

formatCurrency

calculateTotal

getProducts

---

Folders

PascalCase

Example

ProductCard

Login

Register

---

LESS

kebab-case or Component.module.less

Example

ProductCard.module.less

---

Stores

domain.store.ts

Example

cart.store.ts

auth.store.ts

---

Services

domain.service.ts

Example

product.service.ts

auth.service.ts

---

Hooks

useSomething.ts

Example

useCart.ts

useProduct.ts

---

# General Rules

Always

✅ Use TypeScript

✅ Use LESS Modules

✅ Reuse components

✅ Keep files small

✅ Keep responsibilities clear

✅ Use composition

Never

❌ Duplicate components

❌ Fetch API inside components

❌ Store business logic inside pages

❌ Hardcode colors

❌ Hardcode spacing

❌ Create giant files

❌ Mix unrelated responsibilities

---

# Folder Ownership Rules

pages/

Responsible for composing screens.

components/

Responsible for reusable UI.

services/

Responsible for API communication.

store/

Responsible for global state.

hooks/

Responsible for reusable logic.

utils/

Responsible for helper functions.

styles/

Responsible for global styles.

assets/

Responsible for static assets.

---

# Goal

This architecture is designed to support:

- React 19
- TypeScript
- LESS Modules
- Zustand
- TanStack Query
- PWA
- Mobile First
- Scalable Development
- Production Ready
- AI-assisted development using Claude/OpenCode