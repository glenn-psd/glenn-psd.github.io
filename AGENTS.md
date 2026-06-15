# AGENTS.md

## Project rules

This is a static HTML/CSS/JS website.

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
