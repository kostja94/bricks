# Repository instructions

- Keep `component-builder` as the default entry point for constructing new components.
- Create a separate skill only when a topic has an independent workflow, inputs, outputs, or tools.
- Maintain each component concept in one file under `references/components/`.
- Treat visual variants as choices within a component reference, not as separate skills.
- Keep guidance stack-aware and project-adaptive. Do not assume React, Tailwind, or shadcn unless the target project already uses them or the user selects them.
- Route complete new-page requests to Pagina. Pagina owns generic page-type recommendations; actual project component-to-page relationships belong in the target project component system document.
- Keep component-builder focused on new construction. Use component-inventory for discovery and its required project document, component-auditor for existing-component analysis and authorized reconstruction, and component-cleanup for verified unused components and migration leftovers.
- Reuse existing project primitives and tokens; preserve project-specific decisions. Do not treat missing imports alone as permission to delete components.
- Maintain each target project component system document at its existing location; Bricks stores generic workflows and templates, not client inventories.
- Update `catalog/components.json` whenever a component reference is added, renamed, or removed.
- Run `npm test` before completing structural changes.
- Keep detailed workflow rules with their owning skill reference; entry points and indexes summarize and link instead of duplicating full procedures.
- Keep public guidance self-contained and generic. Exclude client identities, internal URLs, workstation paths, credentials and project-specific design decisions; public repository identity is intentional.
