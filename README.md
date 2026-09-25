# Component Skills

Agent-first guidance for planning, building, adapting, and validating interface components.

This repository does not ship a fixed visual system. The `component-builder` skill reads the target project's stack, design system, interface context, and existing components before it creates or changes code.

## Install

```bash
npx skills add kostja94/component-skills --skill component-builder
```

Until the public repository exists, install from a local checkout with the mechanism supported by your agent.

## Use

Ask the agent to build or improve a component:

```text
Use component-builder to build the footer for this product site.
Preserve the existing design system and implementation conventions.
```

The same entry point handles ordinary components. A component receives a separate skill only when it develops a genuinely independent workflow.

## Repository Model

```text
skills/component-builder/
  SKILL.md                       shared routing and workflow
  references/
    workflow.md                  end-to-end construction process
    quality-gates.md             shared acceptance criteria
    components/                  one maintained reference per component concept
catalog/components.json          machine-readable component inventory
schemas/component-reference.schema.json
scripts/validate.mjs             deterministic repository checks
examples/                        realistic invocation examples
```

Component references describe semantic responsibility, context, variants, constraints, and verification. They do not create a separate skill for every visual style.

## Initial Scope

The first release targets web interfaces. The catalog supports a `surfaces` field so mobile, desktop, embedded, and internal-tool guidance can be added later without changing component identity.

The future registry layer is intentionally deferred. Stable implementations may later be added without changing the skill entry point or component IDs.

## Validate

```bash
npm test
```

## License

MIT
