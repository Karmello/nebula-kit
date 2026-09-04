---
name: project-top-level-component-independence
description: Top-level components render Box directly and stay structurally independent of each other; only behavior/computation is shared via hooks, never JSX shape
metadata:
  type: project
---

Every top-level component in the library (`Select`, `MultiSelect`, `Button`, etc.) composes `Box` directly in its own JSX, even when its structure looks similar to another component's. No shared "structural" middle-layer component is introduced to deduplicate that JSX, even for components that will reuse each other's *logic* (e.g. `MultiSelect` reusing `Select`'s state/positioning behavior).

**Why:** Stated directly by the user after deleting `JoinedSurface` (see [[feedback_wrapper_components_vs_hooks]]) — the second time this exact mistake was made and unwound (first as `SurfaceGroup`). Their reasoning: without a framework, a component's main JSX file is the equivalent of a plain HTML+CSS template for that one surface, with behavior extracted into JS functions/hooks only where genuinely reusable. `Box` already plays the role "raw HTML + classNames" would play — composing it directly inside each top-level component *is* the templating layer, not something to abstract further. Two components that look structurally similar today (e.g. `Select` and a future `MultiSelect` option list) reliably turn out to need small, incompatible differences once built (per-item interactive state, selection highlighting, focus refs, variant-specific divider semantics) — forcing a shared structural wrapper's prop surface to be renegotiated on every new consumer, which costs more than the duplication it was meant to save.

**How to apply:** When two or more top-level components would render near-identical `Box` trees, do NOT extract a shared wrapping component for the shape. Instead:
- If there's a real, non-trivial *computation* behind the shared look (e.g. per-item corner-radius/border-width math for a "joined" row), extract that into a hook that returns `Box`-prop-shaped values, and have each component spread those props onto its own `Box` elements directly. See [[feedback_component_vs_behavior]].
- If the only thing shared is visual style achievable via `Box` props/tokens, don't extract anything — let both components independently call `Box` with those props.
- Reuse across similar components (e.g. `Select` → `MultiSelect`) should target *behavior* (controlled-value state, `Floating` positioning, keyboard handling) via hooks, never the rendered JSX structure itself.
- `Box`, and genuinely atomic single-element primitives (`Text`, `Icon`), are the exception — they're the shared vocabulary the templates are written in, not a mid-level structural template themselves.
