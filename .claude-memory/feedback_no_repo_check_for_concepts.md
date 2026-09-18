---
name: feedback-no-repo-check-for-concepts
description: "For general/conceptual questions (e.g. \"what's the difference between X and Y CSS features\"), answer from knowledge directly instead of grepping the repo for context."
metadata:
  type: feedback
---

When the user asks a conceptual question (e.g. comparing two CSS syntaxes/features they pasted inline), don't reach for repo tools (Read/Grep) to check current usage/consistency unless they ask about *this codebase's* convention specifically.

**Why:** After explaining `color-mix(in srgb, ...)` vs `in hsl` and cross-checking repo consistency as a bonus, the user said "dont check repo" - the repo-consistency check was unwanted, unprompted scope creep on a plain conceptual question.

**How to apply:** Default to a direct, self-contained answer for "what's the difference" / "is X wrong" style questions. Only pull in repo context when the user's question is explicitly about how *this project* does something, or when directly relevant to a task they've asked you to do.
