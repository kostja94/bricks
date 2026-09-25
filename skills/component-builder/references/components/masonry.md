# Masonry

## Responsibility

A masonry layout packs variable-height visual items into columns. It suits exploratory galleries where strict row comparison and reading sequence are secondary.

## Decisions

Confirm that visual density matters more than row alignment. Define source order, column strategy, media aspect handling, loading behavior, and a linear fallback.

## Constraints

- DOM and keyboard order must remain understandable even when visual placement differs.
- Reserve media dimensions to prevent disruptive reflow.
- Do not use masonry for forms, pricing, ordered procedures, or comparable records.
- Avoid JavaScript layout when modern CSS and target-browser support are sufficient.

## Verify

Check source order, keyboard traversal, image loading, resize, narrow fallback, variable content height, and layout stability.
