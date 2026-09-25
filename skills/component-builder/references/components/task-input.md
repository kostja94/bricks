# Task Input

## Responsibility

A task input accepts one bounded input, validates it against the product's real capability, and starts a task. It is appropriate for URL analyzers, uploads, generators, converters, and other workflows where the submission begins a process rather than a conversation.

## Input Contract

Define one source of truth for accepted input type, source restrictions, validation, hint text, examples, and backend capability. A page that claims to accept a source the backend cannot process is broken even when its frontend validation passes.

Possible inputs include URL, domain, text, file, media identifier, or a small combination selected by explicit modes. Avoid adding modes merely to make the control look more capable.

## Composition

- An accessible label or equally clear visible prompt.
- The input control and optional mode selector.
- A primary submit action.
- Constraint, validation, progress, and error feedback.
- Optional examples that use the same input contract as real submissions.

## Submission

The task may continue on the same page, navigate to an application route, or open an authenticated flow. Keep submission behavior separate from input validation so the component can integrate with the project's actual task lifecycle.

## Constraints

- Do not present Task Input as a chat composer when it does not preserve conversational context.
- Disable accidental repeated submission while a non-idempotent task is starting.
- Validate cheaply on the client and authoritatively on the server.
- Do not expose provider credentials or imply support based only on URL shape.
- Examples must remain valid, safe, and representative.

## Verify

Exercise valid and invalid inputs, keyboard submission, paste behavior, loading, repeated submission, backend rejection, narrow layouts, long filenames or URLs, and each advertised input mode.
