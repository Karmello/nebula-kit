---
name: feedback-wrapper-components-vs-hooks
description: "Prefer a hook over a Box-wrapping component when the component's only value is shared layout logic, not a distinct visual surface"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 479f8ff8-fb56-49a8-b4b5-ba0c89133fd7
  modified: 2026-08-28T17:56:51.619Z
---

When a component exists mainly to forward most of `Box`'s props through to an inner `Box` (duplicating its prop surface in a local `types.ts`) and inject some computed per-child logic, that's a wrong abstraction — replace it with a hook that returns `Box`-prop-shaped values to spread directly onto plain `Box` elements, and let callers render `Box` themselves.

**Why:** Confirmed when removing `SurfaceGroup` (a `Box` wrapper) in favor of `useJoinedSurfaceStyle`. `SurfaceGroup`'s `types.ts` re-declared ~50 individual `BoxProps` fields just to pass them through — pure duplication that drifts out of sync with `BoxProps` over time. The only real logic was corner-radius/border-width computation for "joined" items (`resolveJoinedSurfaceStyle`), which didn't need a wrapping component or `Children.toArray`/`cloneElement` reflection at all.

**How to apply:** When reviewing or designing a component in `lib/components/core`, check whether its prop type is mostly `Pick<BoxProps, ...>` re-exports for passthrough. If so, and the component's real contribution is a per-item style/prop computation (not a distinct rendered surface), extract that computation into a hook under `lib/hooks/` that returns an object typed as `Pick<BoxProps, ...>` for the exact CSS properties involved (e.g. border radius/width), so it can be spread directly onto `Box` — not routed through `tagAttrs.style`, since `Box`'s own props go through its `syncRespStyle` machinery and a raw `style` object would bypass that. Callers then render `Box` directly and own all their own props, eliminating the duplicated prop-forwarding type entirely. See [[feedback_component_vs_behavior]] for the general principle this follows from.

**Recurrence (2026-09-04):** This exact pattern regrew as `JoinedSurface` (a wrapping component with `bordered`/`squared`/`attached` props, `Children.toArray` reflection, `useJoinedItemStyle`/`useJoinedContainerStyle` hooks nested *inside* it rather than exposed directly) and was used in `JoinedActionGroup`. Reusing it for `Select`'s option list failed for the structural reason this memory predicts: `JoinedSurface`'s per-item wrapper only accepts uniform `bgMode`/`borderMode`/`color`/`intent` for all children, with no way to pass per-item interactive state (click handler, focus ref, selected-item highlight) through it — because those are attributes of *this specific consumer*, not of "joined-ness" in general. The user deleted `JoinedSurface` entirely rather than widen its API, and generalized the rule further: see [[project_top_level_component_independence]].
