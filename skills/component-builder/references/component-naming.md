# Recognizable Component Names

Name a component so a reader can infer its user-facing function without opening its implementation. Establish the actual responsibility before choosing the name.

- Prefer familiar functional terms: `ComparisonTable` compares alternatives; `FinalCTA` closes a page with its next action; `RelatedExamples` introduces examples and links to related categories; `RelatedLinks` is a compact navigation list.
- Qualify names when the distinction matters: a final page CTA differs from an inline CTA, and an interactive example differs from a use-case explanation. Do not encode page names, colors or layout choices as new component identities when responsibility stays the same.
- Avoid vague labels such as `ContentBlock`, `CustomSection` or `Evidence` when a more recognizable functional name is available. Established framework primitives and domain terms may remain when their meaning is clear in the project.
- One responsibility should have one canonical display name. Adapters and internal helpers may have different names that explain their role; do not count them as competing displays.
- Keep project casing and file conventions. These examples illustrate meaning, not a mandatory catalog, acronym style, or instruction to create new components.

During inventory, record actual names unchanged and explain their responsibilities; flag unclear names as candidates. During audit, compare real content, behavior and consumers before recommending names or consolidation. Similar names do not prove the same function, and different names do not prove different functions.

Renaming requires implementation authorization. Migrate consumers, re-exports, registries and project documentation together; record old-to-new names and verification in the existing project component system document. A clearer name alone does not authorize a behavioral change or the creation of a duplicate component.
