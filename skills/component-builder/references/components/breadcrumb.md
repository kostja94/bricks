# Breadcrumb

## Responsibility

A breadcrumb shows the current page's position in a meaningful hierarchy and provides navigation to ancestors. It is not a history trail.

## Decisions

Derive items from stable information architecture, not arbitrary URL segments. Decide whether the current page is text or a link and how long labels collapse on small screens.

## Constraints

- Use navigation semantics with an accessible label and an ordered list.
- Separators should not be announced as item content.
- Do not invent ancestors that have no useful destination.
- Visible breadcrumb and any structured data must describe the same hierarchy.

## Verify

Check ancestor destinations, current-page state, deep hierarchies, long labels, mobile truncation, keyboard navigation, and structured data when emitted.
