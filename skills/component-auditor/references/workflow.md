# Audit and Migration

## Evidence before decisions

Establish source revision, known baseline failures, affected routes, actual content and current visual/interaction behavior. When inventory is missing, enumerate page entries and trace direct/indirect consumers, dynamic selections and inline sections; save these relationships in the project's existing component system document before decisions.

For every semantic family record:

- all candidate files, symbols and equivalent inline blocks;
- actual consuming pages and content sources;
- a name-independent sentence: who uses this, when, for which task, information and result;
- differences in responsibility, DOM/headings, schema, interaction, accessibility, style and responsive behavior;
- evidence that differences reflect a real task/design contract, adapter boundary, or accidental drift;
- merge, stable variant, shared primitive only, retain independent, or insufficient evidence;
- final display owner, adapters, content owner, migration and retirement plan.

Names and similar markup are clues. A wrapper may be a legitimate adapter, and similar cards may have different discovery or action responsibilities. Do not preselect canonical names or variant counts before analysis.

After establishing responsibility, use [recognizable component naming](../../component-builder/references/component-naming.md) for canonical-name proposals and any authorized renames.

If project rules, recorded decisions or implementation evidence conflict, record the competing positions and their source/version. Preserve the conflicting implementations and seek resolution for that family rather than silently selecting one; continue unaffected analysis or authorized work.

## Decide module necessity separately

Shared availability does not require every page to use FAQ, steps, scenarios, comparison or CTA. Check real page intent, useful information and supported behavior. Omit modules with no truthful relevant content. Do not invent tasks, fill slots, repeat generic copy with renamed subjects, or mechanically match word counts. Preserve meaningful facts and limits.

Keep project decisions project-local: eyebrow policy, hero layouts, CTA counts, FAQ quantity, fonts and widths are not universal Bricks rules. Distinguish webpage and export-renderer contracts.

## Design a bounded contract

Choose the clearest implementation after evidence. Define minimal semantic fields, stable item identity, optional-module absence, and project-native link/media types. Keep facts in the existing content layer. Do not create a second JSON/TS/CMS truth source or expose page-name flags.

Consolidate unexplained style drift rather than preserving every accidental variation. Retain a named variant only for a real task/design difference that cannot reasonably be expressed by responsive rules, data or composition and has actual consumers or an explicitly approved use. Different responsibilities may share a primitive while retaining independent components.

## Migrate and verify

For discussion mode, handle one family at a time, presenting real evidence and contract choices. Do not implement undecided families. For authorized behavior-equivalent work, proceed within scope without unnecessary confirmation.

Capture relevant text/link/order and visual/interaction baselines. Migrate one representative consumer, verify, then migrate by family. Shared implementations should have one editing owner if parallel work is explicitly used. Remove old files only after consumers, exports and registries migrate; search for old symbols, classes, fields and duplicate content sources.

Validate real consumers across variants, locales, narrow/wide viewports, long/short content, absent media/links/CTA, keyboard/focus behavior and schema ownership as relevant. Fixtures may cover missing states without inventing production content. Run relevant project type/lint/tests/build checks; record baseline versus new failures. Logical checks are not visual or keyboard evidence.

Update the project's component system document: decisions, canonical display and adapters, content source, consumers, status, commits, verification and unresolved exceptions. A successful build alone does not prove all consumers migrated or production deployed. Cleanup may follow only with explicit consumer evidence; do not make unrelated fixes part of consolidation.
