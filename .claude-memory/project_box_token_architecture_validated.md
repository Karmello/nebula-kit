---
name: project-box-token-architecture-validated
description: "The Box variant/token architecture (per-role CSS custom properties driven by per-theme config maps) is sound; problems found so far are small token-config inconsistencies, not a design flaw"
metadata: 
  node_type: memory
  type: project
  originSessionId: 479f8ff8-fb56-49a8-b4b5-ba0c89133fd7
  modified: 2026-08-28T19:31:44.190Z
---

After a long design discussion (2026-08-28) working through `Box` variant/surface behavior — outline contrast on arbitrary backgrounds, `solid-outline`'s bg vs border, border consistency when joining variants, and the elevated-neutral bug below — the user's conclusion: the overall idea (variants defined on `Box`, styled via per-role CSS custom properties like `--main-l`/`--main-l-bordered` sourced from per-theme config maps) is correct and doesn't need re-architecting. The issues found were small inconsistencies in how specific tokens were assigned, not evidence the model is wrong.

**Why:** Stated directly by the user as the wrap-up of the discussion. Don't propose restructuring the variant/token system itself (e.g. context-aware dynamic contrast, new abstraction layers) in response to friction like this — the friction is in the token *values and assignments*, not the mechanism.

**Concrete inconsistencies found this session (fix candidates, not yet applied):**
- `elevated-neutral` resolves to `--lightness-3` while `neutral` (non-elevated) resolves to `--lightness-0`, same as `--neb-background` (the literal app surface). Since `neutral` intent's whole contract is "equals the app's own surface," `elevated` shifting its tone breaks that contract — `elevated-neutral` should equal `neutral` (both `l-0`); elevation for neutral surfaces should be conveyed some other way (shadow/border/context), not a tone shift. This matters concretely for `Select`'s floating menu, which uses `intent="neutral" elevated` as an opaque stand-in for the app surface — see [[project_outline_surface_contrast]] for why outline-style children need a genuine base surface to sit on.
- Borders across `outline`/`soft-outline`/`solid-outline` should all read the same `--main-l-bordered` token so joined/adjacent boxes of different variants have matching border color at the seam.
- `solid-outline` needs its own dedicated bg token (distinct from both `--main-l`, used by `solid`, and `--main-l-bordered`) — otherwise its border can't be visually distinct from its own background once borders are unified across variants.

**How to apply:** When the user reports a variant/token looking "off," look for a token-assignment mismatch (wrong lightness stop, wrong shared/unshared token) before suggesting anything structural.
