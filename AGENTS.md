# Project Agent Instructions

This project is built using the AI Site Engine.

## Source of truth

Always use these files:

- brief/original-prompt.md
- brief/brief-summary.md
- site-spec.json
- docs/DEVELOPMENT_METHOD.md
- agent/TASK_QUEUE.md
- agent/TASK_STATE.json
- agent/CURRENT_TASK_PROMPT.md

## Execution Rules

- Execute only the current task
- Do not implement future tasks
- Follow DEVELOPMENT_METHOD strictly
- Use reusable components
- Mobile-first responsive layout
- Clean semantic HTML

## Completion

After completing a task:

1. Run a build check
2. Update agent/AGENT_REPORT.md
3. Do not change TASK_STATE.json manually
