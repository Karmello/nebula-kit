---
name: project-docs-meta-architecture
description: Why client/meta props.ts stays separate from lib types.ts instead of moving description to JSDoc
metadata:
  node_type: memory
  type: project
  modified: 2026-08-25T00:00:00.000Z
---

The `client/meta/*/props.ts` (docs data, `DocProp` objects) and `lib/components/*/types.ts` (compiler-facing prop types) split is a deliberate, validated design choice — not an oversight to "fix" by moving descriptions into JSDoc comments on the types themselves.

**Why:** `tools/release/annotate-props-jsdoc.js`, `annotate-components-jsdoc.js`, and `annotate-slots-jsdoc.js` already run as a `tsup` build hook (`TSUP_BUNDLE` env var) that reads the compiled `client/meta` `META` object and string-injects JSDoc (just the `description` field) into the shipped `dist/*/index.d.ts`. So there's already a meta → JSDoc pipeline at release time; JSDoc-in-`types.ts` would only be a source-authoring change for that one field. The other five `DocProp` fields (`options`, `defaultValue`, `isRequired`, `isResponsive`, `link`) never reach the shipped `.d.ts` at all — they're pure docs-site presentation data with no clean JSDoc equivalent (no way to `import` a real constant array like `BOX_COLORS` into a doc comment). Moving `description` alone into `types.ts` would blur the split for one field while leaving everything else exactly where it is, at the cost of bloating `types.ts` (Box alone has ~70 props) with JSDoc blocks — hurting the file's real job as a fast, scannable compiler contract for people writing implementation code.

**How to apply:** Don't propose merging `props.ts` into `types.ts` or replacing the `annotate-*.js` injection scripts with native JSDoc unless the user raises it again. See also [[project-docs-meta-flattening]] for the props.ts self-containment work this sits alongside — related but separate decision (that one is about cross-component references *within* props.ts, this one is about props.ts vs types.ts as two files).
