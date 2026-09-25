---
name: component-builder
description: Build new interface components inside an existing project. Use for named components and interface blocks such as footers, heroes, navigation, cards, forms, content sections, conversations, and agent workspaces. Preserve the target project's design system and stack; do not use to audit or reconstruct an existing component, define full-page information architecture, or handle purely editorial copy requests.
metadata:
  version: 0.1.0
---

# Component Builder

Create new components that belong in the target product instead of producing isolated demo UI.

## Start With The Project

Inspect the relevant page, nearby components, design tokens, dependencies, content model, responsive conventions, and tests before choosing an implementation. Reuse established primitives and icon libraries. Do not replace an existing design system merely because another library is familiar.

Identify:

- the requested component concept and user task;
- the surface and interface type;
- where the new component belongs and which existing primitives it may reuse;
- the component's real content and states;
- the target stack and existing ownership boundary.

## Load Only Relevant Guidance

Read [references/workflow.md](references/workflow.md) for construction work and [references/quality-gates.md](references/quality-gates.md) before final verification.

Find the component ID in [../../catalog/components.json](../../catalog/components.json), then read only its referenced component file. If the requested concept is absent, use the shared workflow, state the inferred canonical name in the result, and do not invent a permanent catalog entry unless the task includes repository maintenance.

## Build

1. Define the semantic responsibility and boundary before styling.
2. Choose a variant from context and content, not fashion.
3. Preserve project conventions and integrate real content or data contracts.
4. Implement expected states, responsive behavior, keyboard behavior, and failure handling.
5. Verify the component in its actual page context. A component that only looks correct in isolation is incomplete.

## Boundaries

- One component concept has one maintained reference. Visual variants stay inside that reference.
- A component reference is guidance, not a fixed code template.
- Stop and report the scope mismatch when the named component already exists and the request is primarily an audit, optimization, or reconstruction.
- Do not add dependencies without a concrete implementation benefit.
- Do not claim compliance, performance, or conversion outcomes that were not tested.
- Use proven domain libraries when the component depends on complex editors, tables, charts, calendars, accessibility primitives, or agent runtimes.

## Completion

Report what changed, which project conventions were reused, how the component was verified, and any material constraint that remains.
