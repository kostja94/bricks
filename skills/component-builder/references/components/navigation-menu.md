# Navigation Menu

## Responsibility

A navigation menu exposes the destinations and actions users need to move through a product or site. Its structure follows information architecture and user priority, not the organization's internal chart.

## Decisions

Define primary destinations, active state, hierarchy, authenticated variations, mobile behavior, overflow, and whether a disclosure, menu, or navigation list matches the interaction.

## Constraints

- Use links for destinations and buttons for disclosures or commands.
- Do not apply application-menu ARIA semantics to ordinary website navigation.
- Preserve keyboard access, visible focus, active-page indication, and escape from overlays.
- Avoid hiding essential destinations behind hover-only interaction.

## Verify

Test every destination, keyboard and pointer interaction, active state, mobile open and close, focus restoration, long labels, authentication states, and resize while open.
