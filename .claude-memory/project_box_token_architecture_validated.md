---
name: project-box-token-architecture-validated
description: "Box's CSS token architecture scopes intent/theme/brand/surface-depth via selector cascade at the point colors are defined, so consuming files only need axis-free modifier names (--surface-hover, --tint-active) — confirmed by the user as the key win of the Sept 2026 rewrite"
metadata:
  node_type: memory
  type: project
  originSessionId: 479f8ff8-fb56-49a8-b4b5-ba0c89133fd7
  modified: 2026-09-09
---

nebula-kit's Box styling went through a full architecture rewrite in September 2026 (superseding the older `--main-l`/`elevated`/`lowered` model this memory previously described). The current, validated shape:

**The core principle, confirmed by the user (2026-09-09):** scope intent (and theme, brand, surface-depth) via CSS *selectors* at the point a raw value is defined, not by baking the axis into the *variable name*. `palettes/{light,dark}.scss` define `--color-base` and `--color-primary` nested under `[data-neb-box-intent='X']` blocks (themselves inside `[data-theme][data-neb-box-color]`), so the cascade resolves "which intent's color" before any consumer ever reads the variable. The direct payoff: `box-wiring.scss` and `themes/{light,dark}.scss` only ever need short, axis-free modifier names — `--surface`, `--surface-hover`, `--surface-active`, `--tint`, `--tint-hover`, `--tint-disabled`, etc. — never something like `--color-primary-hover-raised-dark`. The user's words: "there is are only modifiers which are scoped by selectors and this is the magic... great move with this refactor."

**How the pieces fit:**
- `palettes/{light,dark}.scss` — per-hue, per-intent literal `hsl()` colors, scoped by `[data-theme][data-neb-box-color][data-neb-box-intent]`. Produces `--color-base` and `--color-primary`.
- `themes/{light,dark}.scss` — per-surface-depth, per-intent numeric/percent *offset* tokens (`--surface-hover-offset`, `--tint-disabled-offset`, etc.), scoped the same selector-first way.
- `box-wiring.scss` — pure computation: derives `--surface*`/`--tint*`/`--bg*`/`--border*`/`--text*` from `--color-base`/`--color-primary` + the offset tokens, via `oklch(from ... calc(l + var(--offset) / 100) c h)` for lightness bends and `color-mix(in srgb, var(--color-primary) var(--tint-offset), transparent)` for tinted mode. See [[project_oklch_lightness_bending]].
- `box-consuming.scss` — wires the computed `--bg`/`--border`/`--text` (+ `-hover`/`-active` variants) to actual CSS properties based on interactive state (`:hover`, `:active`, `[data-neb-box-hovered]`, etc.).

**How to apply:** When adding any new state/role axis (disabled, selection, a future one), follow the same pattern — scope the *source* value by selector (theme/intent/surface-depth as needed), keep the *consumed* token name generic. Don't fall back to encoding the axis into the variable name; that's exactly the pattern this rewrite eliminated and the user explicitly doesn't want to reintroduce. As of 2026-09-09 the rewrite is still in progress (some pieces incomplete, e.g. `disabled` state was just being wired), so verify current file contents before asserting specifics — this describes the *pattern*, not necessarily the exact current token list.
