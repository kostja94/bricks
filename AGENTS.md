# Repository instructions

- Keep `component-builder` as the default entry point for constructing new components.
- Create a separate skill only when a topic has an independent workflow, inputs, outputs, or tools.
- Maintain each component concept in one file under `references/components/`.
- Treat visual variants as choices within a component reference, not as separate skills.
- Keep guidance stack-aware and project-adaptive. Do not assume React, Tailwind, or shadcn unless the target project already uses them or the user selects them.
- Route complete new-page requests to Pagina and keep component-to-page mappings in Pagina; Bricks stores only the integration boundary and link.
- Reuse existing project primitives and design tokens, but do not use this skill to audit or reconstruct an existing component.
- Update `catalog/components.json` whenever a component reference is added, renamed, or removed.
- Run `npm test` before completing structural changes.
