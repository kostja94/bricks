# CMS Editor Workspace

## Responsibility

A CMS editor workspace lets an author create, structure, review, and move content through its publishing lifecycle. It coordinates editing, metadata, assets, preview, validation, collaboration, and publishing state without hiding consequential actions behind an undifferentiated form.

This pattern describes a visual editorial workspace. It is independent of OpenBlog, whose current editing model is Git, Markdown, and agent-assisted changes rather than a visual CMS console.

## Composition

Build the workspace from the capabilities the product actually supports:

- document identity, save state, and lifecycle status;
- title, slug, summary, author, taxonomy, dates, social metadata, and other structured fields;
- rich-text, Markdown, block, or structured-content editor;
- media library or asset picker;
- outline, validation, SEO or publishing checks;
- preview across representative destinations and viewports;
- revision history, comments, approvals, scheduling, and publishing controls when collaboration requires them;
- explicit loading, autosaving, saved, conflict, offline, validation-error, permission, and publish-failure states.

Do not display unsupported collaboration or publishing capabilities as inert decoration. A simple single-author editor may need only the editor, metadata, preview, validation, and publish controls.

## Decisions

First determine the content model, source of truth, editing model, roles, publishing workflow, and preview target. Choose split view, tabbed view, staged workflow, or focused writing mode according to screen size and task frequency. Keep frequent writing actions close to the editor while separating destructive or publication-wide actions.

Prefer proven editor frameworks for document modeling, selection, history, paste handling, collaboration, and accessibility. The saved document format must remain stable even when the visual editor changes.

## Constraints

- Distinguish draft persistence from publishing; an autosave indicator is not publication confirmation.
- Never overwrite a newer revision silently. Surface conflicts with enough information to resolve them.
- Keep preview faithful to the real renderer, content schema, theme, and route context.
- Bind permissions to actions and content scope, not merely to whether a control is visible.
- Preserve keyboard access, focus, undo and redo behavior, text selection, composition input, and long-document performance.
- Warn before navigation only when unsaved work is genuinely at risk.
- Expose validation near the affected field and provide a navigable summary for page-wide failures.

## Verify

Test new and existing content, autosave interruption, concurrent edits, stale revisions, offline recovery, validation failure, media upload failure, preview divergence, role restrictions, scheduling boundaries, publish retries, long documents, paste from common sources, keyboard-only editing, and mobile or constrained-window behavior where supported.
