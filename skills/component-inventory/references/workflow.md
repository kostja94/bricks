# Inventory Workflow

## Establish scope

Record repository, commit, branch, relevant uncommitted changes, date, surfaces and exclusions. Read project instructions, route conventions, shared packages, component libraries, content schemas and generation rules. Inspect any existing component system document before creating another. Scope may be whole-site or explicitly bounded; never label a sample as exhaustive.

## Enumerate pages before classifying components

Cross-check file/config routes, layouts, template registries, dynamic parameter generation and actual content records. Distinguish route templates, page families, locales and concrete instances. Include application, marketing, article, admin, error/loading/empty states and conditional overlays as applicable. List redirects and non-UI handlers separately. Email, image and PDF renderers are separate surfaces.

Independently enumerate all in-scope component-bearing source files and symbols using filesystem and language-aware inspection, including files with no route or import reachability. Compare this complete implementation set with the entry-reachable graph; register the difference as unreachable or unresolved candidates, not automatic deletions.

Trace each entry through static/dynamic imports, aliases, re-exports, shared packages, component-valued props and registries. Include file-local subcomponents, anonymous renderers and inline sections outside component folders. Reverse-check implementations against direct and indirect consumers. Unresolved dynamic edges remain explicit gaps.

Separate display components, adapters, page compositions and primitives. Read real content records to explain titles, items, media, links and conditional branches. A reachable media component does not mean every page renders it. Identify components by file plus symbol or inline location, not name alone.

Apply [recognizable component naming](../../component-builder/references/component-naming.md) when describing responsibilities and flagging unclear names. Preserve actual symbols in the inventory; proposed names are not implemented renames.

## Save the project document

Generate or refresh a component system document before handing off to duplicate analysis. Preserve its existing location; otherwise suggest `docs/component-system.md`. Use the bundled template, adapting sections to actual project needs. Keep source content in its established JSON/TS/Markdown/CMS owner, not copied into the report.

Provide both page-to-component and component-to-page tables. Page-group aliases must expand to the actual inventory; avoid repeated long route lists. Summarize high-level components in the main document and use appendices or generated tables for large primitive/subcomponent inventories. All discovered implementations need consumers, retained-library status, or an unresolved explanation.

Record counts with definitions: files, named components, inline blocks, route templates and instances are different quantities. Hooks, types, ordinary functions, third-party internals and icons must have explicit inclusion rules. Component counts are never duplicate counts.

## Verify and maintain

Use existing tools or language-aware analysis where useful; text search is discovery support. No permanent analyzer dependency is required. Verify unique templates, dynamic selections, variants and important states at runtime where access permits. Record browser observations separately from source relationships, build output and production checks. Unavailable authentication or data is a coverage limitation.

Audit-only work does not require unrelated test suites. Do not claim visual, keyboard, or interaction validation unless performed. After source changes refresh affected relationships and the baseline, or mark the old inventory stale. Preserve project decisions and progress while updating derived implementation facts.

## Handoff

Report saved document path, baseline, coverage, gaps and candidate questions. Duplicate assessment and cleanup consume this same document instead of maintaining a second full inventory. Project inventories stay in target projects; Bricks contains only generic method and templates, never private routes, credentials or client facts.
