# Sidebar

## Responsibility

A sidebar contains secondary navigation, filtering, context, or tools adjacent to a primary work area. It should improve repeated access without stealing space from the main task.

## Decisions

Define purpose, persistence, width, collapse behavior, mobile replacement, active state, scroll ownership, and whether content belongs globally or only to the current section.

## Constraints

- Collapsed states need recognizable controls and accessible names.
- On narrow screens, use an intentional drawer, sheet, or separate view rather than squeezing both regions.
- Avoid multiple competing vertical scroll containers.
- Keep critical content available when the sidebar is hidden.

## Verify

Check expanded and collapsed states, keyboard navigation, mobile opening and dismissal, focus restoration, long labels, independent scrolling, and persistence across navigation.
