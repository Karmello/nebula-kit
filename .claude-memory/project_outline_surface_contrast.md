---
name: project-outline-surface-contrast
description: "Box outline/soft-outline variants have no background by design — contrast against whatever they're placed on is the consumer's responsibility, not something the framework should solve"
metadata: 
  node_type: memory
  type: project
  originSessionId: 479f8ff8-fb56-49a8-b4b5-ba0c89133fd7
  modified: 2026-08-28T18:54:33.114Z
---

`Box`'s `outline`/`soft-outline` variants are intentionally transparent (no `bg`) — that's what makes them "outline" rather than "solid." Their border/text lightness is computed for a given intent against the global theme base, with no awareness of whatever they're actually nested inside (the app surface, or another `Box` with its own color/intent). Placing an outline `Box` of one intent inside a solid `Box` of a different intent can read badly.

**Why:** Established directly by the user (2026-08-28) after two wrong framings were proposed and rejected in the same conversation: first that this was about the ambient background not having gone through the token system (wrong — a proper in-system solid `Box` as the parent has the exact same issue), then that the framework should recompute children's tokens contextually against their nearest ancestor surface, e.g. an "on-color" context (also rejected). The user's actual position: an outline surface has no bg, so of course it won't look right on every background — that's expected, not a defect, and it's up to the consumer to pick an intent that reads well against whatever they've placed it on.

**How to apply:** Don't propose compositional rules (e.g. "solid surfaces should force `neutral` on nested children"), dev-time contrast warnings, or dynamic/context-aware token recalculation as fixes for outline-on-colored-surface contrast. Treat it as inherent to what a transparent, border-only variant is — no framework-level fix is wanted here.
