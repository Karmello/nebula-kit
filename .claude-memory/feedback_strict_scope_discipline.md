---
name: feedback-strict-scope-discipline
description: "Do only what was explicitly asked; don't expand a narrow fix into unrequested cleanup/migration of related call sites"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 229e9259-aa87-4941-8034-f9f835448502
  modified: 2026-09-16T06:00:32.120Z
---

When given a narrow, explicit instruction (e.g. "drop responsiveness for zIndex and transform"), execute exactly that change and stop. Do not also migrate every call site that happens to touch the same prop via `tagAttrs` or a similar escape hatch into a "cleaner" pattern, even if that migration seems like an obvious, well-justified follow-up.

**Why:** Asked to de-responsive-ize `zIndex`/`transform` on Box, the correct minimal fix was a defensive change in `box.tsx` (don't let an undefined prop clobber an existing `tagAttrs.style` value). Instead, on top of that, unrequested migrations were made across `Portal`, `Dialog`, `Snackbar`, `AppFrameHeader`, and `SplitViewSide` (adding a new `zIndex` prop to `Portal`, rewiring `Dialog` to use it, etc.). This broke AppFrame's sticky header z-index and made Tooltip stop showing entirely, in a codebase where the user does their own visual verification and expects each turn's change to be exactly what was asked, nothing more. The user's reaction: "you are breaking things, and doing too much, from NOW ON you do only what i tell u to do!"

**How to apply:** When a fix could be done multiple ways (a targeted defensive patch vs. a broader consistency migration), default to the smallest change that satisfies the literal request. If a broader cleanup seems genuinely valuable (e.g. matches an earlier-flagged inconsistency), name it explicitly and ask before doing it, rather than folding it silently into the requested change. This applies especially to `nebula-kit` work generally, given how many components/call-sites are interconnected here (see [[project_top_level_component_independence]] and the recurring `tagAttrs` escape-hatch pattern) — a "small" prop change can ripple into many files, and each ripple is a chance to introduce a regression the user has to catch visually.
