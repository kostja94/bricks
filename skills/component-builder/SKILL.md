---
name: component-builder
description: Build new interface components and bounded composition patterns inside an existing project. Use for named components, interface blocks, and workspaces. Preserve the target project's design system and stack; for a complete new page with page-level structure and multiple sections, use Pagina page-builder instead. Do not use to audit or reconstruct an existing component, plan a whole product or website, or handle purely editorial copy requests.
metadata:
  version: 0.2.0
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

For a page composition, define the page's job and reuse child components from the catalog. Do not turn a page pattern into a second maintenance source for every component it contains.

## Load Only Relevant Guidance

Read [references/workflow.md](references/workflow.md) for construction work. Read [references/foundational-controls.md](references/foundational-controls.md) when the request involves Button, Link, Input, Select, Form, or another foundational control and [references/quality-gates.md](references/quality-gates.md) before final verification.

Read [references/pagina.md](references/pagina.md) when the request may be a complete page rather than a bounded component.

Find the component ID in [../../catalog/components.json](../../catalog/components.json), then read only its referenced component file. If the requested concept is absent, use the shared workflow, state the inferred canonical name in the result, and do not invent a permanent catalog entry unless the task includes repository maintenance.

## Build

1. Define the semantic responsibility and boundary before styling.
2. Choose a variant from context and content, not fashion.
3. Preserve project conventions and integrate real content or data contracts.
4. Implement expected states, responsive behavior, keyboard behavior, and failure handling.
5. Verify the component in its actual page context. A component that only looks correct in isolation is incomplete.

## Boundaries

- One component concept has one maintained reference. Role, placement, visual variant, and runtime state do not create new catalog entries.
- Established independent terminology and discovery intent may justify separate entries that share a model, as with Grid, List, and Masonry.
- A component reference is guidance, not a fixed code template.
- Bounded composition patterns may coordinate catalog components. Complete page construction belongs to Pagina; whole-site information architecture and product planning remain outside both component construction and this skill.
- Stop and report the scope mismatch when the named component already exists and the request is primarily an audit, optimization, or reconstruction.
- Do not add dependencies without a concrete implementation benefit.
- Do not claim compliance, performance, or conversion outcomes that were not tested.
- Use proven domain libraries when the component depends on complex editors, tables, charts, calendars, accessibility primitives, or agent runtimes.

## Completion

Report what changed, which project conventions were reused, how the component was verified, and any material constraint that remains.
