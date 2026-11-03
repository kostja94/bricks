---
name: component-cleanup
description: Clean unused components, abandoned generated UI, and code or assets left behind by component migration. Inspect unimported component candidates and remove verified unused implementations and their exclusive support files; excludes general codebase, dependency-upgrade, or production-data cleanup.
metadata:
  version: 0.1.0
---

# Component Cleanup

Read [the component cleanup workflow](references/workflow.md). Target unused components, abandoned generated variants, replaced wrappers, and their exclusive styles, helpers, tests, exports and assets. Do not expand into unrelated application code or blanket dependency cleanup.

Include components with no imports in the candidate inventory. Before deletion, check dynamic registries, framework entry conventions, public package exports, content references and the project's explicitly retained base library. No imports is a discovery signal, not deletion proof.

Use `audit-only` when requested; otherwise implement authorized cleanup in small verified batches. Keep unresolvable candidates and explain the missing evidence. Refresh the existing component system document and report deletions, retained exceptions and validation without changing product behavior.
