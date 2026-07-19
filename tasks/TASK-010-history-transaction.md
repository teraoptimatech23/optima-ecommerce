# TASK-010 - History Transaction

Status: Todo

Priority: High

Estimated Complexity: Medium

---

# Objective

Implement the History Transaction page.

The page should display the user's order history in a clean, modern, and mobile-first interface.

The implementation must closely match the design reference.

Design Reference:

docs/design/E-HistoryTransaction.png

Do not redesign.

---

# Context

The application already contains:

- Login
- Register
- Home
- Product Detail
- Cart
- Summary
- Checkout

This page belongs to the Profile section.

---

# Route

/history

Future navigation:

Profile

↓

History Transaction

---

# Layout

Use the existing Main Mobile Layout.

Desktop

- Mobile viewport centered.

Mobile

- Full width.

Bottom Navigation

Visible.

Active Menu

Profile

---

# Header

Display

- Back Button
- Title
- Notification Button

Title

History Transaction

Back Button

Navigate to previous page.

---

# Search

Display a search input.

Placeholder

Search transactions, orders...

Current Version

UI only.

---

# Filter

Display a Filter button.

Current Version

UI only.

Do not implement filter modal.

---

# Status Tabs

Tabs

- All
- Completed
- Pending
- Cancelled

Behavior

Only one tab active.

Selecting a tab filters transactions locally.

---

# Transaction List

Each transaction should display

- Product Image
- Order ID
- Date
- Time
- Total Items
- Total Price
- Payment Method
- Status Badge
- Arrow Icon

---

# Transaction Status

Supported

Completed

Pending

Cancelled

Colors

Completed

Green

Pending

Orange

Cancelled

Red

---

# Payment

Display

Visa

Mastercard

Ending Card Number

Examples

Visa •••• 4242

Mastercard •••• 8888

---

# Interaction

Clicking a transaction

↓

Future

/history/:id

Current Version

Placeholder only.

---

# Empty State

Support Empty Transaction.

Reuse existing Empty State if available.

---

# Mock Data

Create

src/mock/history.ts

Approximately

8–10 transactions

Include

- Different products
- Different prices
- Different dates
- Different statuses
- Different payment methods

---

# Components

Reuse existing components whenever possible.

Possible reusable components

HistoryCard

StatusBadge

SearchBar

SectionTabs

FilterButton

EmptyState

---

# Styling

Use

LESS Modules

Existing Design Tokens

Existing Colors

Existing Typography

Existing Radius

Existing Shadows

Existing Spacing

No inline styles.

---

# Restrictions

Do not modify

- Login
- Register
- Home
- Product Detail
- Cart
- Summary
- Checkout

Do not modify

Business Logic

Authentication

Cart Store

---

# Acceptance Criteria

✓ Layout matches E-HistoryTransaction.png

✓ Header implemented.

✓ Search displayed.

✓ Filter displayed.

✓ Status tabs working locally.

✓ Transaction list displayed.

✓ Status badges correct.

✓ Bottom Navigation visible.

✓ Mock data realistic.

✓ Mobile layout preserved.

✓ Desktop wrapper preserved.

✓ Components reusable.

✓ No regressions.

---

# Deliverables

Files Created

Files Modified

Components Created

Components Reused

Mock Data Added

Summary of Implementation