---
name: component-auditor
description: Analyze existing components and inline sections for semantic duplication, style drift, and justified variants. Use for audit-only analysis, component-by-component alignment, or authorized reconstruction; preserve project-specific design and content decisions.
metadata:
  version: 0.1.0
---

# Component Auditor

Read [the audit and migration workflow](references/workflow.md). Use a current project component system document; if missing or stale, establish the affected inventory before deciding. The inventory skill is optional convenience: this workflow defines the evidence needed without requiring another installed skill.

Choose the requested mode: `audit-only`, `align-and-implement`, or `implement-confirmed`. When the user wants discussion one component at a time, present evidence and proposed contract for that family before implementing undecided changes. Previously authorized decisions need no repeated approval.

Reuse project primitives and component contracts. Semantic responsibility, actual content and consumers determine consolidation, not naming or visual similarity. Keep content edits separate from behavior-equivalent migration unless authorized.

Update the existing component system document with decisions, consumer migrations, remaining gaps, and validation. Publishing, pushing, and merging remain separate actions requiring task authorization.
