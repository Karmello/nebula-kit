---
name: feedback-smaller-commit-messages
description: Keep commit messages shorter/more concise than the default verbose multi-paragraph style
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 479f8ff8-fb56-49a8-b4b5-ba0c89133fd7
  modified: 2026-08-30T22:02:54.072Z
---

Write smaller commit messages — a short summary line, and at most a couple of brief bullet points if truly needed. Don't default to the long, multi-paragraph style with full rationale, verification notes, and enumerated file lists baked into the message body.

**Why:** User explicitly asked (2026-08-30) after a run of commits that had grown into long, detailed multi-paragraph messages (rationale + full verification summary + exhaustive change lists) during an extended token-renaming session.

**How to apply:** Default to a single concise summary line for straightforward changes. Only add a couple of short bullets when the commit genuinely bundles several distinct changes that aren't obvious from the diff alone — skip restating verification steps (ts/lint/prettier/tests passing) in the message itself, that belongs in the conversation, not the commit log.
