# Mobile Layout Rules

The application uses a fixed mobile layout.

Structure

StatusBar

↓

Header

↓

Scrollable Content

↓

Fixed Bottom Navigation

The Bottom Navigation must NEVER be placed inside the scroll container.

The Bottom Navigation must always remain visible.

The scrollable content must reserve enough bottom padding so that content never hides behind the Bottom Navigation.

Recommended Bottom Navigation height:

80px

Scrollable content bottom padding:

96px

# Mock Application Flow

The application should behave like a real e-commerce application.

Although backend APIs are not yet available, all user interactions should function using mock data and global state.

The application should never behave like isolated static pages.

Each page should consume shared application state.

Product Detail

↓

Add To Cart

↓

Cart Store

↓

Cart Page

↓

Summary Page

↓

Checkout Page