# Component Cleanup

## Scope and baseline

Inspect Git state and preserve unrelated edits. Record source revision, retained base-library directories, component inventory and available validation. Include unimported components, abandoned generated variants, replaced wrappers, old component folders and their support files. If no inventory exists, trace the affected entries and consumers and save that bounded evidence in the project's component system document.

Helpers, hooks, types, styles, images, fixtures, stories, tests and dependencies enter scope only when exclusively supporting a component being removed. Do not turn this into general application cleanup, framework upgrades or production-data deletion.

## Establish deletion evidence

For each candidate record original responsibility, replacement if any, direct/indirect consumers, dynamic or external boundaries and decision. Search symbol and path aliases, JSX, re-exports, package exports, framework auto-discovered entries, registries, component-valued props, CMS content, CSS/resource URLs, scripts and tests. Generated code must be fixed at its source.

No static import makes a component a candidate. Framework routing, dynamic registries and public exports can keep it active. Explicitly retained base libraries remain unless the task authorizes trimming them. Keep unresolved candidates with concrete missing evidence.

File-level deletion needs at least two independent evidence types, such as entry reachability plus exact consumer search, or a verified replacement history plus current registry/content checks. A passing build alone does not prove no runtime consumer. Distinguish no active page usage from no supported package consumer.

## Remove in bounded batches

Migrate consumers before deleting providers. Process one component family or risk class per batch. Remove obsolete imports, exports, registrations and exclusively owned support files together. Preserve shared helpers, assets and dependencies with remaining consumers. Uninstall an exclusively orphaned dependency only after source/config/script checks, using the existing package manager and synchronizing the lockfile; never upgrade dependencies as part of deletion.

Use exact resolved paths. Do not delete unrelated user files, broad directory patterns or unknown temporary artifacts. Removing a component must not silently remove a still-required feature, route, copy, link or interaction.

## Verify and close

Search old symbols, paths, classes and registry keys; explain intentional residual references. Run relevant type/lint/tests/build checks and inspect affected runtime states and asset URLs where appropriate. Compare route/public-export output if touched. Distinguish existing failures from cleanup regressions.

Refresh component-system relationships, retirement status and remaining candidates. Report removed families and support assets, evidence, retained exceptions and checks. Do not claim production acceptance from a local build or automatically commit, push, merge or publish without task authorization.
