# TASK-014 — Share Product Bottom Sheet

The Product Detail page has already been implemented.

Do NOT redesign the Product Detail page.

Do NOT modify the existing product information layout.

Your task is to implement a modern **Share Product Bottom Sheet** that appears when the user taps the Share icon.

The UI should feel premium, mobile-first, and consistent with the application's existing design system.

Reference the design provided for the Share Bottom Sheet.

---

## Objective

Replace the current Share button behavior.

Current Flow:

Product Detail

↓

Tap Share Icon

↓

(No action)

New Flow:

Product Detail

↓

Tap Share Icon

↓

Open Share Bottom Sheet

↓

Select Platform

↓

Trigger Share Action

---

## Bottom Sheet

Display a modal Bottom Sheet from the bottom of the screen.

Requirements:

- Slide-up animation
- Rounded top corners (24px)
- Dimmed backdrop
- Tap outside to close
- Swipe down to close (if supported)
- Safe-area support
- Prevent background scrolling while open

The Bottom Sheet should feel similar to iOS / Shopee / Tokopedia.

---

## Header

Display:

Share Product

Subtitle:

Share this product with your friends.

Center aligned.

---

## Copy Link Section

Display a full-width rounded button.

Icon:

Link Icon

Text:

Copy Link

Behavior:

Copy the current product URL to the clipboard.

For now use a mock URL.

Example:

https://optima-commerce.com/product/123

After copying:

Show a success toast:

✓ Link copied successfully

---

## Share Platforms

Display the platforms inside a 4-column grid.

Each platform contains:

- Circular icon
- Platform name

Platforms:

- WhatsApp
- Facebook
- Instagram
- Telegram

Each icon should use the platform's official brand color.

The icons should be equally spaced.

---

## Platform Actions

Implement placeholder actions.

Example:

WhatsApp

↓

console.log("Share to WhatsApp")

Facebook

↓

console.log("Share to Facebook")

Instagram

↓

console.log("Share to Instagram")

Telegram

↓

console.log("Share to Telegram")

The implementation should be easy to replace later with:

- navigator.share()
- Deep Links
- Native Mobile Share
- Social SDKs

---

## Cancel Button

Display a full-width secondary button.

Text:

Cancel

Behavior:

Close Bottom Sheet.

---

## Animation

Opening:

- Fade backdrop
- Slide Bottom Sheet upward

Closing:

- Slide down
- Fade backdrop

Animation should use Framer Motion if already available.

Otherwise use CSS transitions.

---

## Component Structure

Create reusable components.

Suggested structure:

components/
    BottomSheet/
        BottomSheet.tsx
        BottomSheet.module.less

pages/
    ProductDetail/
        ShareProductSheet.tsx
        ShareProductSheet.module.less

The BottomSheet component should be reusable for future features:

- Shipping Method
- Payment Method
- Filter
- Sort
- Coupon Selection
- Language Selector

---

## Mock Data

Create a reusable share configuration.

Example:

const SHARE_OPTIONS = [
    {
        id: "whatsapp",
        name: "WhatsApp",
        icon: ...
    },
    {
        id: "facebook",
        name: "Facebook",
        icon: ...
    },
    {
        id: "instagram",
        name: "Instagram",
        icon: ...
    },
    {
        id: "telegram",
        name: "Telegram",
        icon: ...
    }
];

Render the UI dynamically.

Avoid hardcoding each platform.

---

## Styling

Follow the existing design system.

Reuse:

- Buttons
- Colors
- Typography
- Shadows
- Radius
- Spacing

Do not introduce another visual style.

Maintain visual consistency with:

- Checkout Bottom Sheet
- Payment Selector
- Shipping Selector

---

## Accessibility

Support:

- ESC key (desktop)
- Focus trapping
- Keyboard navigation
- Screen reader labels

---

## Future Ready

Design the component so it can later integrate with:

- Web Share API
- Native Share API
- Social Media SDK
- Dynamic Product Links

without changing the UI.

---

## Restrictions

Do NOT modify:

- Product Detail layout
- Product Gallery
- Product Information
- Product Variants
- Add To Cart
- Buy Now
- Business Logic
- Routing

Only enhance the Share feature.

---

## Acceptance Criteria

✓ Share icon opens Bottom Sheet.

✓ Smooth slide animation.

✓ Backdrop closes the Bottom Sheet.

✓ Swipe down closes the Bottom Sheet.

✓ Copy Link copies the product URL.

✓ Success toast appears after copying.

✓ Four share platforms displayed.

✓ Dynamic rendering from configuration.

✓ Reusable BottomSheet component.

✓ Existing Product Detail layout remains unchanged.

---

## Final Review

Compare the implementation against the provided Share Bottom Sheet design.

Review:

- spacing
- typography
- shadows
- icon sizes
- corner radius
- animation
- responsive layout
- safe area support

Continue refining until the implementation closely matches the reference design.

Finally provide:

1. Files modified.
2. Components created.
3. Components reused.
4. Share configuration structure.
5. Future integration points.