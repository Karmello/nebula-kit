---
name: feedback-commit-workspace-file
description: Always include nebula-kit.code-workspace changes in commits instead of leaving them out
metadata:
  node_type: memory
  type: feedback
  modified: 2026-08-25T00:00:00.000Z
---

Always stage and commit changes to `nebula-kit.code-workspace` alongside other work, rather than excluding it as "unrelated IDE noise."

**Why:** In an earlier session, changes to this file (VSCode workspace folder entries added/edited, likely by the IDE extension as files are opened) were repeatedly left out of commits as incidental noise unrelated to the task at hand. The user explicitly corrected this: they want it committed every time, not skipped.

**How to apply:** When `git status` shows `nebula-kit.code-workspace` as modified before a commit, include it in `git add` alongside the task's real changes — no need to call it out as a separate/unrelated commit unless the user asks to keep history clean. Only exception: if its diff looks suspicious or contains something that looks like it shouldn't be committed (matches the general "double-check before staging" rule), flag it before including.
