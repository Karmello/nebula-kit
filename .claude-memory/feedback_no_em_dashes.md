---
name: feedback-no-em-dashes
description: "Never use em dashes (—) in code, docs, meta descriptions, or commit messages — use normal hyphens (-) instead"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 479f8ff8-fb56-49a8-b4b5-ba0c89133fd7
  modified: 2026-08-31T18:32:56.019Z
---

Never use em dashes (—, "long hyphens") anywhere in this repo — meta prop descriptions, comments, commit messages, docs. Always use a normal hyphen (-) instead.

**Why:** User explicitly said "I hate those — long hyphens, always use normal hyphens." Confirmed while fixing em dashes in `client/meta/Box/props.ts` descriptions.

**How to apply:** Before writing or editing any user-facing text in this repo (meta descriptions, docstrings, comments, commit messages), check for em dashes and use `-` instead. When editing existing text that already contains em dashes, replace them too, not just new text.
