# Agent Workspace

## Responsibility

An agent workspace is a task environment that connects conversation with tools, artifacts, approvals, execution state, and inspectable results. A chat panel alone is not an agent workspace.

## Core Regions

- Conversation or instruction surface.
- Task status and tool activity.
- Working artifacts such as files, diffs, records, canvas, or preview.
- Approval and recovery controls for consequential actions.
- Persistent identity and task context where responsibility requires it.

The layout may use panels, tabs, drawers, or separate views. Region presence and task continuity define the concept, not a fixed three-column arrangement.

## Context Decisions

- Coding work may prioritize files, diffs, terminal output, and preview.
- Research work may prioritize sources, notes, evidence, and deliverables.
- Operational work may prioritize records, proposed actions, approvals, and audit history.
- Mobile surfaces may separate regions into steps rather than compressing a desktop workspace.

## Constraints

- Distinguish proposed, running, completed, failed, canceled, and approval-blocked actions.
- Show the action target, scope, and consequence before meaningful approval.
- Preserve user control during long-running work, including stop and recovery paths where supported.
- Do not present generated text as proof that an external action occurred.
- Keep principal, agent, task, credential, tool action, and accountable actor distinguishable when the workflow has real consequences.

## Implementation Note

Use the target project's established agent runtime and event model. Complex streaming, tool calling, editors, terminals, and sandboxes should rely on maintained libraries or platform capabilities rather than superficial mock behavior.

## Verify

Exercise at least one successful tool path, one failure path, cancellation or interruption where supported, approval behavior for consequential actions, artifact refresh, keyboard operation, and narrow-screen navigation.
