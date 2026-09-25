# Blog Index

## Responsibility

A blog index is the main discovery surface for a publication. It helps readers understand the publication's scope, find a useful entry point, and continue browsing without turning the page into a generic card dump.

## Composition

Choose the smallest composition that supports the content model:

- a page identity with the publication name or topic and a concise description;
- an optional featured article when editorial priority is real and maintained;
- a chronological or relevance-ordered article collection;
- optional category, tag, author, search, pagination, or subscription controls;
- empty, loading, error, and no-result states when data is dynamic.

Reuse the host project's card, grid, navigation, pagination, filter, and newsletter components. A blog index defines how these parts work together; it does not create alternate versions of every child component.

## Decisions

Determine whether the page is primarily chronological, editorially curated, taxonomy-led, or search-led. Match the hierarchy to publication volume: a small blog rarely needs multiple competing discovery systems, while a large publication needs filters, pagination or progressive loading, and stable archive routes.

Featured content must not duplicate the same article without a clear visual and semantic distinction. Category controls should lead somewhere useful and should disappear when taxonomy is disabled or too sparse to aid discovery.

## Constraints

- Preserve stable article URLs and expose title, summary, publication context, date, and imagery only when each field helps selection.
- Do not make every card equally prominent; encode editorial hierarchy intentionally.
- Keep filtering, pagination, canonical URLs, and indexability consistent with the routing and content model.
- Avoid client-side-only rendering for public article discovery when the target stack supports server rendering or static generation.
- Design for long titles, missing images, sparse categories, a single article, and a large archive.

## Verify

Test first visit, scanning order, keyboard navigation, mobile wrapping, long and missing content, taxonomy disabled, no posts, pagination or filtering, canonical metadata, and links to every rendered article. Confirm that featured and latest sections do not produce confusing duplicate announcements for assistive technology.

## Reference Implementation

[OpenBlog's `BlogIndex`](https://github.com/kostja94/openblog/blob/main/packages/components/src/required/blog-index.tsx) is a runnable implementation of a Git-backed product blog index. It is an example, not a required framework or visual style.
