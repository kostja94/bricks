# Bricks: Component Layer for AI Agents

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/kostja94/bricks)](https://github.com/kostja94/bricks/stargazers)
[![Last commit](https://img.shields.io/github/last-commit/kostja94/bricks)](https://github.com/kostja94/bricks/commits/main)

Bricks gives coding agents implementation-aware contracts for building and maintaining interface components that belong in an existing product, codebase, and design system.

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

## Component Governance

Choose the entry point by the requested outcome:

| Skill | Outcome |
|---|---|
| `component-builder` | Build a missing component in its real page context |
| `component-inventory` | Discover actual pages, components and inline UI; save or refresh the project component system document |
| `component-auditor` | Analyze semantic duplicates and drift, align one family at a time, or implement confirmed reconstruction |
| `component-cleanup` | Remove verified unused components, abandoned generated UI and migration leftovers with their exclusive support files |

Install a governance entry point with `npx skills add kostja94/bricks --skill component-inventory` (substitute the required skill name).

Inventory produces a required project-owned document covering both page-to-component and component-to-page relationships, real content sources, conditional branches, project contracts, decisions, progress and verification gaps. Reuse its existing location; otherwise use `docs/component-system.md`. Large inventories may use linked generated appendices. Keep product content in its original owner.

The maintenance loop is discovery → saved component system document → semantic decisions → authorized construction or migration → verified cleanup → refreshed document. Each skill also supports bounded tasks without requiring every other skill to be installed. An unimported component is a cleanup candidate, not automatic proof of disuse: dynamic entries, public exports and retained base libraries must be checked.

For example:

```text
Use component-inventory to map every page and component in this repository.
Save the relationships and coverage gaps in our existing component system document.
Then use component-auditor in audit-only mode to propose consolidation by semantic family.
```

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

Use Pagina when the task is a complete page with page-level content, sections, routes, and multiple components. Use Bricks when the task is one named component, a bounded composition pattern, or existing-component governance. Generic page recommendations stay in Pagina; actual project consumer maps stay in the target project. Pagina remains usable without Bricks when the target project already has every component it needs.

## Boundaries

Bricks builds new interface components and bounded composition patterns, and maintains existing components through inventory, audit and cleanup. It does not plan a whole product, define a complete website, or own purely editorial copy.

Component governance handles existing UI through separate inventory, audit and cleanup skills. Cleanup is bounded to components and their support assets; whole-codebase cleanup and dependency upgrades are outside its scope. Bricks does not claim performance, accessibility, compliance, or conversion outcomes that were not actually verified in the target project.

## Repository Model

```text
skills/component-builder/
  SKILL.md                              component construction entry point
  references/
    workflow.md                         shared construction workflow
    quality-gates.md                    component acceptance criteria
    pagina.md                           page-versus-component boundary
    components/                         one reference per component concept
skills/component-inventory/              discovery workflow and project document template
skills/component-auditor/                semantic decisions and confirmed migration
skills/component-cleanup/                component retirement and supporting-asset cleanup
catalog/components.json                 machine-readable component concept catalog
schemas/component-reference.schema.json
scripts/validate.mjs                    deterministic checks
examples/                               realistic invocation examples
```

References describe semantic responsibility, contexts, variants, constraints, and verification. They may include implementation suggestions where useful, but they do not prescribe a single stack or visual result.

## Maintenance Ownership

| Maintained subject | Owner |
|---|---|
| Component concepts and implementation contracts | Existing component references linked by `catalog/components.json` |
| Source discovery and coverage rules | [Inventory workflow](skills/component-inventory/references/workflow.md) |
| Generated project document structure | [Component system template](skills/component-inventory/assets/component-system.template.md) |
| Semantic consolidation and migration decisions | [Audit workflow](skills/component-auditor/references/workflow.md) |
| Component deletion evidence and retirement | [Cleanup workflow](skills/component-cleanup/references/workflow.md) |

Skill entry points route work; references maintain detailed rules, and the template defines the output fields. Project-specific contracts, consumer relationships and progress stay in the target project's existing component system document. Content facts remain in their original source; task chronology stays in its task tracker. Generated appendices declare their source revision and are refreshed from that source rather than hand-maintained in parallel.

Public releases contain generic guidance and fictional examples only. Preserve the repository's public author and project links, but exclude client identities, internal URLs, workstation paths, credentials and copied project decisions. Bricks must run without access to the author's local knowledge or execution folders. Retired execution playbooks must not remain parallel maintained copies; external indexes may locate Bricks without duplicating its workflow rules.

## Development

```bash
npm test
```

Validation checks catalog IDs and classification fields, component reference file existence, Skill entry-point names and descriptions, and local Markdown file links. It does not prove schema conformance, semantic correctness, runtime behavior or production readiness.

## License

[MIT](LICENSE)
