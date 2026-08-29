---
name: project-box-token-architecture-validated
description: "The Box variant/token architecture (per-role CSS custom properties driven by per-theme config) is sound; friction found is token-config inconsistencies and naming, not a design flaw"
metadata: 
  node_type: memory
  type: project
  originSessionId: 479f8ff8-fb56-49a8-b4b5-ba0c89133fd7
  modified: 2026-08-29T22:54:23.600Z
---

Across a long design discussion (2026-08-28 to 2026-08-29) working through `Box` variant/surface/intent behavior, the user's repeated conclusion: the overall model — variants defined on `Box`, styled via per-role CSS custom properties (`--main-l`, `--main-l-hover`, etc.) sourced from per-theme, per-intent token config — is correct and doesn't need re-architecting. Friction encountered was token-value mismatches and naming, not evidence the mechanism is wrong. Don't propose context-aware dynamic contrast, runtime color derivation (`calc()`/`color-mix()` toward `transparent` or reacting to ambient surfaces), or new abstraction layers in response to this kind of friction.

**Resolved decisions from this arc (current state as of commit d07b4465, v0.11.0):**
- **Outline contrast is the consumer's job.** `outline`/`soft-outline` are intentionally transparent; contrast against whatever background they sit on (even another in-system `Box`) is not something the framework auto-aligns — CSS itself can't sample a rendered backdrop, and `Box` deliberately has each instance self-declare its own `--h`/`--s`/`--main-l` rather than inherit ambient color. See [[project_outline_surface_contrast]].
- **Borders now just read `--main-l` directly** (the same token `solid`'s bg uses) instead of a separate `-bordered` token — so a joined solid + bordered-variant group always agrees at the seam by construction. The earlier `-bordered` token idea was tried and abandoned.
- **The depth axis is three peers, not two:** `base` / `raised` (renamed from `elevated`) / `lowered` (new) — each with its own per-theme token file (`light-base.scss`, `light-raised.scss`, `light-lowered.scss`, and dark equivalents), replacing the old single `main-tokens.scss` + `elevated` variant. `raised`/`lowered` were chosen over `elevated`/`recessed` or `elevated`/`sunken` for register consistency (raise/lower is the most natural antonym pair) — full writeup of the naming tradeoffs is what led here, not just a coin flip.
- **`inverse` intent was dropped entirely.** It duplicated `neutral` + `theme="global-flipped"` exactly — verified numerically identical (light theme's `inverse` stop and dark theme's `neutral` stop resolved to the same literal lightness) — so it was pure redundant hand-tuning of something `Box` already gave for free. `BOX_INTENTS` is now 5 values, not 6.
- **Box's `surface` prop values:** kept as `dividing | selected | edge` (not the fully-consistent `divider | selection | edge` noun-set, to avoid an immediate rename of already-used values) — `edge` is a *tone* nudge (reads as a boundary without an actual `border`), unrelated to the border-color discussion above despite the similar-sounding name.
- **Palette lightness ladders stay hand-tuned by eye, not OKLCH-derived.** A real OKLCH-based generation attempt was built and tested (evenly-spaced perceptual `L` ladder + gamut-mapped chroma per hue) — technically sound but visually rejected by the user ("horrible") and reverted. Don't suggest regenerating the palette via color-math again without being asked; by-eye tuning is the intended approach here.

**How to apply:** When the user reports a variant/token looking "off," look for a token-assignment or naming mismatch before suggesting anything structural. When proposing new token axes, check whether the concept is a *whole alternate identity* (peer of base/raised/lowered) or a *single-role tone nudge* (peer of `dividing`/`selected`/`edge`) — these are different mechanisms and shouldn't be conflated.
