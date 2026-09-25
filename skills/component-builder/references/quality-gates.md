# Shared Quality Gates

Apply the gates relevant to the component. A simple static badge does not need the same test depth as navigation or an agent workspace.

## Product Fit

- The component serves a clear user task in its page context.
- Its hierarchy matches the page rather than competing with it.
- Real content fits without clipping, overlap, or unexplained truncation.
- Empty and unavailable content do not leave broken shells.

## Design-System Fit

- Existing tokens, primitives, icons, spacing, and naming are reused.
- New variants have a reason beyond visual novelty.
- Fixed-format controls have stable dimensions and do not shift during interaction.

## Interaction And Accessibility

- Native semantics are preferred where they provide the required behavior.
- Keyboard access, visible focus, labels, state communication, and reading order are correct.
- Hidden content cannot receive accidental focus.
- Motion respects reduced-motion preferences when motion is present.

## Responsive Behavior

- The component works at narrow mobile and wide desktop sizes.
- Text and controls do not overlap or escape their containers.
- Reflow preserves task order and does not hide essential actions.

## Engineering

- Data, state, and error ownership are explicit.
- Dependencies are justified and compatible with the project.
- Tests cover behavior proportional to risk.
- No secrets, environment-specific paths, or invented backend capabilities are embedded.
