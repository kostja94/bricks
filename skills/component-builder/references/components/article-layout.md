# Article Layout

## Responsibility

An article layout turns a structured publication entry into a focused reading experience while preserving orientation, credibility, navigation, media, and machine-readable publishing metadata. It owns page composition around the article body, not the editorial truth of the article itself.

## Composition

Select from these regions according to the publication and article type:

- breadcrumbs or another return path;
- category or series context;
- title, dek, author, publication date, update date, and reading time;
- cover media and optional concise summary;
- table of contents for sufficiently structured long-form content;
- article body with typography for prose and rich embedded elements;
- tags, sharing, author information, related articles, and previous or next navigation.

Use existing breadcrumb, table-of-contents, author, social-share, media, and card components. Keep each optional region conditional on real data and product configuration.

## Decisions

Choose the reading width, metadata density, navigation aids, and supporting modules from the content type and expected reading behavior. A short announcement, technical tutorial, opinion essay, and research report should not receive identical chrome merely because they share a route template.

The main article must remain visually and semantically dominant. Related content and conversion elements belong after or beside the reading flow only when they do not interrupt comprehension.

## Constraints

- Render one clear page title and one canonical article identity.
- Keep published and updated dates semantically distinct; do not rewrite publication history to imply freshness.
- Support headings, paragraphs, lists, tables, code, images, video, embeds, quotations, and references without forcing every article to use every element.
- Reserve media dimensions to prevent layout shift and provide useful alternatives or fallbacks.
- Keep heading anchors, table of contents, structured data, social metadata, and visible content consistent.
- Treat user-supplied embeds and rich HTML as a security boundary.

## Verify

Test short and long articles, missing optional metadata, long titles, narrow screens, keyboard navigation, heading anchors, code overflow, tables, media failure, embeds, print or reader modes where relevant, canonical metadata, structured data, and links to taxonomy and adjacent content.

## Reference Implementation

[OpenBlog's `ArticleLayout`](https://github.com/kostja94/openblog/blob/main/packages/components/src/required/article-layout.tsx) demonstrates a configurable composition for Markdown-backed articles. It is a reference implementation, not a required dependency.
