# Grid

## Responsibility

A grid arranges peer items across rows and columns for scanning or comparison. Visual grid layout does not automatically require ARIA grid interaction.

## Decisions

Choose column behavior, minimum item width, alignment, ordering, density, and whether items remain peers at every breakpoint. Use semantic lists or ordinary containers unless spreadsheet-like keyboard navigation is actually required.

## Constraints

- Preserve source order and reading order.
- Avoid viewport-width typography and unstable tracks.
- Let long content reflow rather than overlap adjacent cells.
- Do not force equal heights when doing so creates empty or misleading space.

## Verify

Check minimum and maximum widths, longest content, missing items, keyboard order, zoom, localization, and transitions between column counts.
