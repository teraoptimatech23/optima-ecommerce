Implement `tasks/TASK-013-learning.md`.

Before making any changes:

Read:

- docs/PROJECT_SPEC.md
- docs/UI_GUIDELINES.md
- docs/FOLDER_STRUCTURE.md
- docs/COMPONENT_LIBRARY.md
- docs/AI_RULES.md
- docs/ROUTING.md

Analyze the design reference:

docs/design/E-Learning.png

Review the existing project before creating new components.

Reuse existing components whenever possible.

---

# Objective

Implement the Learning page.

The page should closely match the provided design reference.

Do not redesign.

Do not simplify.

The Learning page should become the main hub for educational content inside the application.

---

# Route

/learning

The Bottom Navigation Learning tab should navigate to this page.

The Learning tab should remain active while viewing this page.

---

# Layout

Use the existing Main Mobile Layout.

Desktop

- Keep the mobile viewport centered.

Mobile

- Full width.

Bottom Navigation

Visible.

Although the design reference does not display the Bottom Navigation, it MUST remain visible because Learning is a primary navigation page.

The active menu should be:

Learning

---

# Header

Display:

- Title
- Greeting
- Notification Button

Example:

My Learning

Hi, {{user.name}} 👋

Keep learning, grow every day.

Retrieve the user name from the existing authentication store.

Do not hardcode the user name.

The Notification icon should navigate to:

/history

Reuse the existing notification icon.

---

# Search

Display a search input.

Placeholder:

Search courses, topics, or skills...

Current Version

UI only.

No search functionality is required yet.

---

# Hero Banner

Display a promotional learning banner.

Use the existing banner style from the Home page.

Recommended content:

Title

Upgrade your skills,
unlock your future

Subtitle

Learn anytime, anywhere
and achieve your goals.

Primary Button

Explore Courses

Current Version

The button may remain as a placeholder.

---

# Categories

Display this section immediately below the Hero Banner.

Do NOT place Categories below Continue Learning.

The order of the page must be:

Search

↓

Hero Banner

↓

Categories

↓

Continue Learning

↓

Recommended for You

Display categories horizontally.

Example:

- All Courses
- Technology
- Design
- Business
- Photography
- More

Current Version

UI only.

Filtering is not required.

---

# Continue Learning

Display the user's current course.

Include:

- Thumbnail
- Course Title
- Instructor
- Progress Bar
- Progress Percentage
- Remaining Time
- Total Lessons
- Continue Button

The card should closely match the design.

Current Version

Use mock data.

---

# Recommended for You

Display a horizontal list of recommended courses.

Each course card should include:

- Thumbnail
- Bookmark Button
- Course Title
- Instructor
- Rating
- Difficulty
- Duration
- Total Lessons

Create approximately:

6–8 mock courses.

Horizontal scrolling should be supported.

---

# Mock Data

Create:

src/mock/learning.ts

Include:

Banner

Categories

Continue Learning

Recommended Courses

Do not hardcode data inside React components.

---

# Navigation

Learning

↓

Learning Page

Notification

↓

History Transaction

Explore Courses

↓

Placeholder Page

Continue Learning Card

↓

Placeholder Page

Recommended Course

↓

Placeholder Page

Reuse the existing Placeholder page for features that have not yet been implemented.

---

# Components

Inspect the project before creating new components.

Reuse existing components whenever possible.

Potential reusable components:

LearningBanner

CategoryChip

ContinueLearningCard

CourseCard

ProgressBar

SearchBar

BookmarkButton

Do not duplicate UI.

---

# Styling

Use:

- LESS Modules
- Existing Design Tokens
- Existing Colors
- Existing Typography
- Existing Radius
- Existing Shadows
- Existing Spacing

Do not hardcode colors.

Do not hardcode spacing.

Avoid inline styles.

---

# Restrictions

Do not modify:

- Home
- Categories
- Cart
- Profile
- History
- Checkout
- Summary

Do not modify:

- Cart Store
- Business Logic
- Authentication Flow

Only add navigation where required.

---

# Acceptance Criteria

✓ Layout closely matches E-Learning.png.

✓ Bottom Navigation remains visible.

✓ Learning tab is active.

✓ Greeting uses authenticated user.

✓ Search displayed.

✓ Hero Banner displayed.

✓ Categories appear ABOVE Continue Learning.

✓ Continue Learning displayed.

✓ Recommended Courses displayed.

✓ Horizontal scrolling works.

✓ Components are reusable.

✓ Mobile layout preserved.

✓ Desktop wrapper preserved.

✓ No regressions introduced.

---

# Final Review

Before completing the task:

Compare the implementation against:

docs/design/E-Learning.png

Review:

- spacing
- typography
- icon sizes
- search bar
- hero banner
- categories
- continue learning
- recommended cards
- bottom navigation
- paddings
- shadows

Pay special attention to the page order.

The correct order must be:

Header

↓

Search

↓

Hero Banner

↓

Categories

↓

Continue Learning

↓

Recommended for You

↓

Bottom Navigation

If any visible differences remain,

continue refining until the implementation closely matches the design.

Finally provide:

1. Files created.
2. Files modified.
3. Components created.
4. Components reused.
5. Mock data added.
6. Navigation implemented.