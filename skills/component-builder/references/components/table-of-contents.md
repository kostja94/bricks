# Table Of Contents

## Responsibility

A table of contents exposes the structure of a long document or page and links to meaningful sections. It helps orientation; it does not replace a coherent heading hierarchy.

## Decisions

Choose included heading levels, label shortening policy, active-section behavior, sticky placement, collapse behavior, and whether the page is long enough to benefit.

## Constraints

- Generate links from stable unique IDs and valid heading order.
- Do not include every minor heading when it harms scanning.
- Account for fixed headers when scrolling to anchors.
- Active-section tracking must not create constant noisy updates for assistive technology.

## Verify

Check every anchor, duplicate headings, back and forward navigation, keyboard focus, sticky boundaries, mobile collapse, reduced motion, and pages with few or many sections.
