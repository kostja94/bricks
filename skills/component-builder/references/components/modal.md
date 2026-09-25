# Modal

## Responsibility

A modal interrupts the current surface for a focused decision or short task that must be resolved or dismissed before normal interaction continues. Popup, dialog, and lightbox are context-dependent names, not automatic synonyms.

## Decisions

Confirm that interruption is necessary, define the opening trigger, dismissal rules, initial focus, destructive action treatment, and return focus target. Use a non-modal surface when users need the background for context or comparison.

## Constraints

- Use a maintained dialog primitive or implement focus containment and restoration correctly.
- Provide an accessible name and a visible dismissal path unless dismissal would invalidate a required system decision.
- Escape and backdrop behavior must match consequence and data-loss risk.
- Prevent background interaction and incoherent scrolling while open.

## Verify

Test opening, keyboard traversal, Escape, backdrop, nested controls, screen-reader naming, focus restoration, unsaved work, mobile viewport and virtual keyboard behavior.
