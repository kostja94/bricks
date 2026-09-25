# Chat Panel

## Responsibility

A chat panel is a bounded conversational region embedded beside another primary work surface. It provides discussion or assistance without becoming the complete product workspace.

## Context Decisions

- A document editor may use it for questions and suggested revisions.
- An analytics view may use it to explain the visible data.
- A support console may use it to draft or summarize while the record remains primary.
- A builder may place it beside files or preview, but the complete arrangement is an Agent Workspace when tools and artifacts share task state.

## Composition

Use the Conversation guidance for messages, composition, streaming, failure, and persistence. Add only the context bridge required by the host surface, such as current selection, visible record, or document section.

## Constraints

- Make panel scope visible so users know which artifact or record the conversation concerns.
- Preserve enough space for the primary work surface; use a drawer or separate view on narrow screens when side-by-side use becomes incoherent.
- Closing and reopening must follow an explicit persistence policy.
- Do not label a panel as an Agent Workspace when it cannot show or control tools, actions, and artifacts.

## Verify

Check context changes, stale context warnings where needed, resize or drawer behavior, focus transfer, close and reopen behavior, long conversations, and whether the primary surface remains usable.
