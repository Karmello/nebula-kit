---
name: feedback-verify-prettier
description: Always run yarn prettier (and yarn prettify to fix) alongside lint and typecheck when verifying changes in nebula-kit
metadata:
  node_type: memory
  type: feedback
  modified: 2026-08-25T00:00:00.000Z
---

When verifying a change in this repo, run `yarn prettier` (format check) together with `yarn lint` and `yarn ts` (typecheck) — not just lint and typecheck. If `yarn prettier` reports issues, run `yarn prettify` to auto-fix them, then re-verify.

**Why:** User explicitly asked for this to be part of the standard verification loop, not an optional extra step (said while doing a large mechanical refactor where prettier caught import-order-adjacent formatting drift that lint's autofix alone didn't fully resolve).

**How to apply:** Treat `prettier`/`prettify` as a required step in the same verification pass as lint + typecheck for any nebula-kit change, especially after scripted/bulk file edits (e.g. codemods, mass moves) where formatting drift is likely.
