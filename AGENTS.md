# AGENTS.md

## Project rules

This is a static HTML/CSS/JS website.

## Model usage and token optimization

Maintain overall quality while minimizing token cost by assigning work according to its difficulty and importance.

### High-performance model responsibilities

Use the strongest available reasoning model for:

- Analyzing requirements and interpreting ambiguous conditions.
- Planning the overall work and implementation strategy.
- Designing system architecture and data structures.
- Changes that affect multiple files or features.
- Complex debugging and root-cause analysis.
- Decisions that may affect security, performance, or compatibility.
- Decisions that change the existing implementation approach or task scope.
- Final code review and verification after implementation.

The high-performance model must analyze the problem first, divide it into independent tasks, and assign an appropriate model level to each task.

### Low-cost model responsibilities

Delegate work requiring little judgment or reasoning to a low-cost model whenever possible, including:

- Straightforward coding from an approved plan.
- Repetitive component or boilerplate generation.
- Bulk renaming of files, variables, or strings.
- Formatting, lint fixes, and code cleanup.
- Simple test additions.
- Documentation, comments, and type-definition updates.
- Rule-based code transformations.
- Replication of an established pattern.

Low-cost models must stay within the approved plan and scope and must not change architecture or requirements independently.

### Escalation to a high-performance model

A low-cost model must stop and escalate instead of guessing when:

- Requirements are ambiguous or conflicting.
- A choice between two or more implementation approaches is required.
- An unexpected error or structural issue is discovered.
- The work expands across multiple features or files.
- Security, performance, data-loss, or compatibility risks arise.
- The approved plan must change.

### Token-saving principles

- Do not repeat the same analysis across models.
- Pass only essential decisions and constraints from the high-performance model.
- Give lower-cost models only the minimum context required for their task.
- Do not revisit settled decisions.
- Reduce unnecessary explanations and progress reports when results are clear.
- Never sacrifice quality or correctness to reduce cost.

The default operating principle is: high-performance models judge and plan; low-cost models execute clearly defined work.

## Code quality workflow

- Do not run full lint after every small edit.
- During implementation, check only the files changed in the current task when needed.
- Before commit, rely on Husky and lint-staged to check only staged files.
- Before completing a feature or opening a PR, run `npm run check` once.
- If lint-staged fails, fix only the reported errors with minimal changes.
- Report warnings without fixing them unless explicitly requested.
- Avoid unrelated formatting, refactoring, or visual changes.
- Preserve existing HTML structure, class names, and CSS architecture unless the task explicitly requires changes.
- Prefer minimal, targeted changes.

## UI rules

- Do not change the visual design unless explicitly requested.
- Do not rename classes unless necessary.
- Do not introduce large dependencies without approval.
- Keep HTML semantic and CSS maintainable.
