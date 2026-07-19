# Shopping Flow

Home

↓

Product Detail

↓

Add To Cart

↓

Show Success Bottom Sheet

↓

User chooses:

Continue Shopping

↓

Product List

OR

View Cart

↓

Cart

↓

Summary

↓

Checkout

↓

Payment

↓

Success

---

Rules

The application should behave like a real e-commerce application.

Every page must consume shared state.

Pages must not use isolated mock data.

The cart is the single source of truth.

Summary displays only selected cart items.

Checkout receives data only from Summary.

Payment receives data only from Checkout.

Success clears the cart.

Never skip steps.

Never navigate directly from Product Detail to Checkout.