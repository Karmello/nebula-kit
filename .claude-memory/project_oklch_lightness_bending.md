---
name: project_oklch_lightness_bending
description: nebula-kit's divider/edge/raised/hover color mechanics use oklch(from ...) relative color lightness bending instead of hsl(from ...), confirmed visually better
metadata:
  type: project
---

nebula-kit's Box style variants (divider/edge borders, raised surface depth, hover state) bend a base color's lightness by a fixed per-intent delta using CSS relative color syntax: `oklch(from var(--color-X) calc(l + var(--delta) / 100) c h)`, not `hsl(from ...)`.

**Why:** HSL's `l` channel is not perceptually uniform across hue ((max+min)/2 of RGB, not true luminance), so the same numeric delta (e.g. `-5`) looks like a much bigger or smaller shift depending on hue (barely visible on yellow, jarring on blue). OKLCH's `L` channel is designed to be perceptually uniform, so one shared delta token reads as the same strength of lightness change across all 8 brand hues (gray, red, amber, green, teal, blue, purple, pink). The user did a side-by-side comparison (2026-09-08) and confirmed OKLCH felt subtly but meaningfully better across the whole color system ("almost not visible, but it makes a difference... this is huge").

The theme.scss delta tokens (`--divider-X`, `--edge-X`, `--raised-X`, and any future `--hover-X`) keep the same HSL-percentage-point numeric values; the conversion just divides by 100 inside `calc()` to rescale into OKLCH's 0-1 `l` range, so the same token values remain meaningful under either function.

**How to apply:** When adding any new "bend this base color's lightness by a fixed delta" mechanic (future hover, active, selection states), default to `oklch(from ...)`, not `hsl(from ...)`, for consistency with divider/edge/raised. Don't mix color spaces between these related mechanics. See [[project_box_token_architecture_validated]] for the broader token model this sits inside.
