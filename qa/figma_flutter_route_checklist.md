# Figma → Flutter QA Checklist

Use this checklist to validate every route after implementation.

## Acceptance criteria legend
- **Visual**: Typography, spacing, color, iconography, elevation/shadows, and component states match Figma.
- **Interaction**: Gestures, state transitions, validation, and navigation behavior match expected flow.
- **Data realism**: Local sample data and empty/loading/error states are handled.

## Route mapping + acceptance checklist

| # | Figma Route / Frame | Flutter Route | Module | Visual Acceptance Criteria | Interaction Acceptance Criteria | Data States (Sample / Empty / Loading / Error) | QA Status |
|---|---|---|---|---|---|---|---|
| 1 | _Add Figma route_ | _e.g. /auth/login_ | _feature/auth_ | Type scale, paddings, and button styles match Figma spec. | CTA, back nav, and field focus behavior match flow spec. | All 4 states implemented and testable locally. | ☐ |
| 2 | _Add Figma route_ | _e.g. /auth/register_ | _feature/auth_ | Form labels, helper text, and spacing match Figma. | Validation feedback and success transition match spec. | All 4 states implemented and testable locally. | ☐ |
| 3 | _Add Figma route_ | _e.g. /home/feed_ | _feature/home_ | Cards, avatars, and list spacing match Figma. | Scroll behavior and item tap interactions match spec. | All 4 states implemented and testable locally. | ☐ |
| 4 | _Add Figma route_ | _e.g. /search_ | _feature/search_ | Search field, chips, and results layout match Figma. | Search typing, clear, and filter interactions match spec. | All 4 states implemented and testable locally. | ☐ |
| 5 | _Add Figma route_ | _e.g. /notifications_ | _feature/notifications_ | Section headers and notification row states match Figma. | Read/unread interactions and route transitions match spec. | All 4 states implemented and testable locally. | ☐ |
| 6 | _Add Figma route_ | _e.g. /profile_ | _feature/profile_ | Profile header and stats spacing/typography match Figma. | Edit/profile actions and tab switching match spec. | All 4 states implemented and testable locally. | ☐ |
| 7 | _Add Figma route_ | _e.g. /post/create_ | _feature/post_create_ | Composer spacing, icon sizes, and states match Figma. | Add media, publish, and dismiss transitions match spec. | All 4 states implemented and testable locally. | ☐ |

## Required QA evidence per route
- [ ] Side-by-side screenshot (Figma vs Flutter)
- [ ] Route-level video/GIF for transitions where applicable
- [ ] Notes for any intentional deviation
- [ ] Approval owner + date
