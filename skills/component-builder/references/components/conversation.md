# Conversation

## Responsibility

A conversation presents an ordered exchange whose later messages depend on earlier context. It owns message continuity, composition, streaming behavior, and any supported conversation persistence. It does not automatically include tool execution, files, previews, or a broader agent workspace.

## Core Model

Use stable conversation and message identifiers when persistence, retries, branching, or tool results require them. Model message content according to the selected runtime rather than flattening rich parts into an invented universal string format.

Decide before implementation:

- supported roles and content parts;
- streaming and interruption behavior;
- retry, edit, regenerate, and branch semantics;
- persistence and authentication boundary;
- attachment limits and retention;
- rendering policy for Markdown, code, links, and unsafe content.

## Interaction

- Enter and multiline behavior must match the product and input method.
- During streaming, provide an explicit stop action when the runtime supports cancellation.
- Follow new output only while the user remains near the latest message; do not steal scroll position after deliberate upward navigation.
- Communicate streaming updates without flooding assistive technology.
- Empty states should help begin the real task rather than display decorative prompts unrelated to product capability.

## Security And Failure

Keep model credentials and privileged tools behind the server boundary. Treat rendered model output as untrusted content. Show transport failure, rate limits, canceled output, and retry consequences honestly; do not append a fake success message after a failed stream.

## Verify

Complete multiple turns, interrupt a response, retry a failure, navigate long messages and code, test keyboard and screen-reader behavior, verify scroll ownership, refresh according to the chosen persistence policy, and confirm secrets never reach the client bundle.
