# Tabs And Accordion

## Responsibility

Tabs switch among peer views within one context. An accordion expands independent sections in a vertical flow. They are different interaction patterns and should not be selected solely for visual compactness.

## Decisions

Use tabs when users compare a small, stable set of peer views and usually need one at a time. Use an accordion when headings must remain scannable and multiple sections may be useful together. Prefer ordinary headings and content when hiding adds no value.

## Constraints

- Implement the matching keyboard and ARIA pattern or use a maintained accessible primitive.
- Preserve state only when returning users benefit from it.
- Do not hide critical safety, pricing, or task information by default.
- Avoid overflowing tab labels that become unusable on narrow screens.

## Verify

Test keyboard navigation, focus, selected or expanded state, deep links if supported, long labels, dynamic content height, and mobile behavior.
