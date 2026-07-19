# CHECKOUT_SPEC.md

# Checkout Page Specification

Version: 1.0.0

---

# Purpose

The Checkout page is responsible for reviewing an order before payment.

Users should be able to:

- Review shipping information
- Select shipping method
- Select payment method
- Review order summary
- Continue to payment

The Checkout page must remain simple, clean, and easy to complete.

---

# Layout

The Checkout page uses the Main Mobile Layout.

Desktop

- Mobile viewport centered
- Preserve desktop wrapper

Mobile

- Full width

The page scrolls vertically.

No Bottom Navigation is displayed on this page.

---

# Page Structure

The page contains the following sections in order.

1. Header

2. Shipping Address

3. Shipping Method

4. Payment Method

5. Order Summary

6. Continue to Payment Button

---

# Header

Contains

- Back Button
- Title

Title

Checkout

Back button returns to the previous page.

---

# Shipping Address

Display

- Recipient Name
- Default Badge
- Street Address
- City
- Country
- Phone Number

A "Change" action is displayed.

Current Version

The Change button is a placeholder.

Future Version

The Change button will open Address Management.

---

# Shipping Method

The page displays the currently selected shipping method.

Selecting the card opens a Bottom Sheet.

Available methods

- JNE Regular
- J&T Express
- SiCepat REG
- AnterAja

Each shipping method contains

- Radio Button
- Logo
- Name
- Estimated Delivery
- Price

Selection is temporary.

The selected shipping method is applied only after pressing Apply.

Closing the Bottom Sheet without pressing Apply should discard temporary changes.

---

# Payment Method

The page displays the selected payment method.

Selecting the card opens a Bottom Sheet.

Available methods

- Visa
- Mastercard

Additional option

- Add New Card

Current Version

Add New Card is a placeholder.

Future Version

It opens Add Card page.

Selection becomes active only after pressing Apply.

Closing the Bottom Sheet without Apply should cancel temporary changes.

---

# Order Summary

Display

Subtotal

Shipping

Discount

Total

Formula

Total =

Subtotal

+

Shipping

-

Discount

Total should update immediately after a shipping method is successfully applied.

---

# Continue Button

Label

Continue to Payment

Current Version

Button is enabled.

Navigation after pressing the button can be a placeholder.

Future Version

Navigate to Payment Gateway.

---

# Bottom Sheet

Used by

Shipping Method

Payment Method

Behavior

Open

↓

Slide Up

↓

Dark Overlay

↓

User Selects Option

↓

Press Apply

↓

Bottom Sheet Closes

↓

Selected Value Updates

The Bottom Sheet should never update values before Apply is pressed.

---

# Mock Data

Current implementation uses mock data.

Recommended files

src/mock/

address.ts

shipping.ts

payment.ts

checkout.ts

No mock data should exist inside React components.

---

# State Management

Checkout should maintain the following state.

Shipping Address

Selected Shipping

Selected Payment

Subtotal

Shipping Cost

Discount

Total

State should remain local unless global persistence becomes necessary.

---

# Business Rules

Only one address can be active.

Only one shipping method can be selected.

Only one payment method can be selected.

Shipping cost contributes to Total.

Discount reduces Total.

Subtotal is read-only.

Total is calculated automatically.

Users cannot manually edit prices.

---

# Future Features

The architecture should support:

- Multiple Addresses
- Edit Address
- Promo Code
- Voucher
- Coupon
- Reward Points
- Add New Card
- Multiple Payment Methods
- Digital Wallet
- Bank Transfer
- Installment
- Payment Gateway Integration
- Order Confirmation

The current implementation should not prevent these future features.

---

# UI Rules

Use existing Design System.

Use existing spacing tokens.

Use existing typography.

Use existing colors.

Use LESS Modules.

No inline styling.

No hardcoded spacing.

No hardcoded colors.

---

# Component Structure

Recommended reusable components

CheckoutHeader

AddressCard

ShippingMethodCard

PaymentMethodCard

OrderSummary

SummaryRow

ShippingBottomSheet

PaymentBottomSheet

RadioListItem

Components should remain reusable.

Avoid page-specific duplicated components.

---

# Routing

Recommended Route

/checkout

Continue button

↓

Future

/payment

Back Button

↓

Cart

---

# Acceptance Criteria

The implementation is complete when:

✓ Layout matches the design reference.

✓ Shipping Address is displayed correctly.

✓ Shipping Bottom Sheet behaves correctly.

✓ Payment Bottom Sheet behaves correctly.

✓ Apply button updates selections.

✓ Closing Bottom Sheet cancels temporary selections.

✓ Total updates correctly.

✓ Continue button is displayed.

✓ Mobile layout is preserved.

✓ Desktop wrapper remains centered.

✓ Existing pages remain unaffected.

✓ No regressions are introduced.

---

# Backend Compatibility

The current implementation uses mock data.

When backend integration is available:

Replace mock data with API calls.

Recommended endpoints

GET /checkout

GET /shipping-methods

GET /payment-methods

POST /checkout

No UI changes should be required after backend integration.

Only service implementations should change.