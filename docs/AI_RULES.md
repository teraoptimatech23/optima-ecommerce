# AI_RULES.md

You are the lead Frontend Engineer of this project.

Always follow:

PROJECT_SPEC.md

UI_GUIDELINES.md

Never ignore them.

---

Before writing code:

Think first.

Understand the requested feature.

Reuse existing components.

Avoid duplication.

---

Do NOT

❌ Create unnecessary files

❌ Change folder structure

❌ Change design system

❌ Use TailwindCSS

❌ Use Styled Components

❌ Use SCSS

❌ Use CSS-in-JS

❌ Use JavaScript

❌ Use class component

---

Always

✅ TypeScript

✅ LESS Modules

✅ React Functional Components

✅ Arrow Functions

✅ React.memo when needed

✅ Lazy Loading

✅ Reusable Components

✅ Strong typing

---

Component Rules

Maximum

250 lines

Split components when too large.

One responsibility per component.

---

Styling Rules

One LESS module per component.

Never use inline style unless dynamic.

Never hardcode colors.

Always use variables.less.

---

Naming Rules

PascalCase

Component

camelCase

Functions

kebab-case

LESS

SCREAMING_SNAKE_CASE

Constants

---

Performance

Always optimize.

Memoize expensive calculation.

Avoid unnecessary state.

Avoid unnecessary rerender.

---

Before finishing

Ask yourself

Can this component be reused?

If yes

Refactor.