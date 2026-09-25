# Pagina Integration

[Pagina](https://github.com/kostja94/pagina) provides page intelligence for AI agents. Use it when the requested outcome is a complete new page with a page-level purpose, information hierarchy, multiple visible sections, component composition, route integration, and page verification.

Bricks remains responsible for constructing a missing component or bounded interface object. Pagina recommends stable Bricks component IDs from its page catalog and publishes a generated reverse component-to-page map. Bricks does not duplicate those mappings.

Route the task to Pagina when:

- the user names a complete page type such as homepage, pricing, article, dashboard, settings, or 404;
- success depends on ordering several sections around one page task;
- the requested output includes page content, metadata, route behavior, states, and multiple components.

Keep the task in Bricks when one component or bounded interface object is the requested deliverable, even if it will later appear on a larger page.

Pagina builds new pages only. Existing-page audits, optimization, patches, and reconstruction do not become Pagina tasks merely because they affect a whole page.
