---
name: feedback-component-vs-behavior
description: "New components are for repeatable node/DOM structure; behavior and mechanics belong in hooks/functions, not new components"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 479f8ff8-fb56-49a8-b4b5-ba0c89133fd7
  modified: 2026-08-28T17:56:44.645Z
---

Don't reach for a new component to encapsulate behavior or mechanics — only create one for genuinely repeatable node/DOM structure. If the "component" would just render a single `Box` (or a couple of them) styled via props, it isn't adding structure, it's just moving `Box` prop-setting into another layer.

**Why:** Stated directly by the user after removing `SurfaceGroup` (see [[feedback_wrapper_components_vs_hooks]]). `Box` already renders a tag and lets you style it entirely through props — that's the same job a hand-written JSX file with raw HTML + classNames/data-attributes would do, just without the repetition. So a JSX file that composes `Box` elements *is* the rendering layer; wrapping more `Box` usage in another component doesn't add composition, it just relocates the same mechanics. Heavy reuse of `Box` directly inside a component like `Select` is correct and intended, not something to abstract away.

**How to apply:** When a chunk of logic looks reusable (e.g. computing per-child styles/props, resolving responsive values, coordinating multiple `Box` instances), ask whether it's producing a *new repeatable DOM shape* (→ component) or just *computing values/props* (→ hook or plain function, consumed by callers rendering `Box` directly). Default to the hook/function path unless the DOM structure itself repeats across call sites in a way worth naming.
