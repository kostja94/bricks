# Bricks: Component Layer for AI Agents

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/kostja94/bricks)](https://github.com/kostja94/bricks/stargazers)
[![Last commit](https://img.shields.io/github/last-commit/kostja94/bricks)](https://github.com/kostja94/bricks/commits/main)

Bricks gives coding agents implementation-aware contracts for building interface components that belong in an existing product, codebase, and design system.

It helps an agent understand a component's responsibility, context, variants, content, interaction states, technical boundary, and verification requirements before writing code.

## Install

```bash
npx skills add kostja94/bricks --skill component-builder
```

Give the agent a bounded component task and the context needed to integrate it:

```text
Use component-builder to build the footer for this bilingual SaaS site.

Read the existing routes, components, design tokens, framework, and responsive conventions first. Reuse project primitives, include the real product, resource, company, and legal destinations, and verify keyboard access on mobile and desktop.
```

See the complete [Footer request example](examples/footer-request.md).

## Why Bricks Exists

Agents are already capable of writing component code. The harder problem is deciding what the component is responsible for and making it fit the product around it.

A generated Footer may invent routes. A FAQ may hide answers from assistive technology. A Task Input may omit loading, cancellation, invalid input, or result recovery. An Agent Workspace may look convincing in a demo while having no workable boundary between conversation, tools, artifacts, and user control.

Bricks addresses that reasoning layer. It guides the agent toward a project-native implementation instead of shipping an isolated demo or importing a second design system by habit.

## What Bricks Is

| Bricks provides | Bricks does not provide |
|-----------------|-------------------------|
| One maintained contract per component concept | A separate Skill for every visual style |
| Semantic responsibility and ownership boundaries | A fixed React, Vue, or CSS component package |
| Context-aware variants and expected states | A universal design system |
| Integration and verification guidance | A gallery of interchangeable mockups |
| Stable component IDs for Agent tooling | Permission to replace project conventions |

One component can have many valid designs. Bricks keeps Footer guidance in one reference and lets the target product determine its layout, typography, density, content, and implementation.

## Component Coverage

The catalog spans small primitives, content structures, conversion elements, and composed Agent interfaces:

| Group | Representative components |
|-------|---------------------------|
| Navigation and orientation | Navigation Menu, Footer, Breadcrumb, Sidebar, Table of Contents |
| Content and explanation | Article Content Layout, Author Bio, FAQ Section, How-to Section, Tabs, Accordion |
| Conversion and trust | CTA, Newsletter Signup, Comparison Table, Testimonials, Trust Signals |
| Layout and presentation | Card, Grid, List, Masonry, Carousel, Modal, Announcement Banner |
| Agent and tool interfaces | Task Input, Conversation, Chat Panel, Agent Workspace, CMS Editor Workspace |

Browse the machine-readable inventory in [`catalog/components.json`](catalog/components.json). Component IDs remain stable while their references can grow as new contexts and constraints are learned.

## From Request to Integrated Component

The `component-builder` does not begin with a preferred library or visual treatment.

1. It inspects the page, nearby components, tokens, dependencies, data model, responsive conventions, and tests.
2. It identifies the canonical component concept, user task, surface, and ownership boundary.
3. It loads only the matching component reference and shared quality gates.
4. It selects a variant from real content and context.
5. It reuses the project's primitives and implements required states and interactions.
6. It verifies the component inside its actual page, not only in an isolated preview.

For components with complex domain behavior, such as editors, data grids, charts, calendars, or accessibility primitives, the agent should use a proven library when the project does not already provide one.

## Context Matters

The same component identity changes meaning across surfaces and pages.

- A public marketing Footer organizes product, resource, company, and legal destinations.
- An authenticated application Footer may be absent or reduced to operational links.
- A documentation Sidebar needs hierarchy, active state, deep navigation, and narrow-screen behavior.
- A dashboard Sidebar must also account for permissions, workspaces, collapsed states, and task frequency.

Bricks records these contextual decisions without turning every combination into a new component name.

## Working With Pagina

[Pagina](https://github.com/kostja94/pagina) and Bricks operate at different levels:

```text
Pagina defines the complete page contract
                    |
                    v
Pagina recommends required component concepts
                    |
                    v
Bricks guides project-native component construction
                    |
                    v
The target repository owns the final code and design system
```

Use Pagina when the task is a complete page with page-level content, sections, routes, and multiple components. Use Bricks when the task is one named component or a bounded composition pattern. Pagina remains usable without Bricks when the target project already has every component it needs.

## Boundaries

Bricks builds new interface components and bounded composition patterns. It does not plan a whole product, define a complete website, or own purely editorial copy.

The current Skill does not maintain a separate audit or reconstruction workflow. It also does not claim performance, accessibility, compliance, or conversion outcomes that were not actually verified in the target project.

## Repository Model

```text
skills/component-builder/
  SKILL.md                              component construction entry point
  references/
    workflow.md                         shared construction workflow
    quality-gates.md                    component acceptance criteria
    pagina.md                           page-versus-component boundary
    components/                         one reference per component concept
catalog/components.json                 machine-readable inventory
schemas/component-reference.schema.json
scripts/validate.mjs                    deterministic checks
examples/                               realistic invocation examples
```

References describe semantic responsibility, contexts, variants, constraints, and verification. They may include implementation suggestions where useful, but they do not prescribe a single stack or visual result.

## Development

```bash
npm test
```

Validation checks the component catalog, reference paths, schema expectations, page-context relationships, and the `component-builder` Skill.

## License

[MIT](LICENSE)
