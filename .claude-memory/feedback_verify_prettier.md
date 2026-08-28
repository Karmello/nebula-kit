---
name: feedback-verify-prettier
description: Always run yarn prettier (and yarn prettify to fix) alongside lint and typecheck when verifying changes in nebula-kit
metadata: 
  node_type: memory
  type: feedback
  originSessionId: f4813b32-bf48-43e7-8b2a-04da4b2b19ff
  modified: 2026-08-25T15:03:23.481Z
---

When verifying a change in this repo, run `yarn prettier` (format check) together with `yarn lint` and `yarn tsc --noEmit -p .` — not just lint and typecheck. If `yarn prettier` reports issues, run `yarn prettify` to auto-fix them, then re-verify.

**Why:** User explicitly asked for this to be part of the standard verification loop, not an optional extra step (said while doing a large mechanical refactor where prettier caught import-order-adjacent formatting drift that lint's autofix alone didn't fully resolve).

**How to apply:** Treat `prettier`/`prettify` as a required step in the same verification pass as lint + typecheck for any nebula-kit change, especially after scripted/bulk file edits (e.g. codemods, mass moves) where formatting drift is likely.
