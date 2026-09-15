---
name: feedback-commit-workspace-file
description: Always include nebula-kit.code-workspace changes in commits instead of leaving them out
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 30643ef2-d119-442f-93d4-7e3acd9fda9b
  modified: 2026-08-25T18:30:11.041Z
---

Always stage and commit changes to `nebula-kit.code-workspace` alongside other work, rather than excluding it as "unrelated IDE noise."

**Why:** Earlier in a session I repeatedly left this file out of commits, treating its changes (VSCode workspace folder entries added/edited, likely by the IDE extension as files are opened) as incidental noise unrelated to the task at hand. The user explicitly corrected this: they want it committed every time, not skipped.

**How to apply:** When running `git status` before a commit and `nebula-kit.code-workspace` shows as modified, include it in `git add` alongside the task's real changes — no need to call it out as a separate/unrelated commit unless the user asks to keep history clean. Only exception: if its diff looks suspicious or contains something that looks like it shouldn't be committed (matches the general "double-check before staging" rule), flag it before including.
