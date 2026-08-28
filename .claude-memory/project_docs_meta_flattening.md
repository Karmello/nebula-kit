---
name: project-docs-meta-flattening
description: props.ts files were flattened to remove cross-component DocProp references; punch-list of pre-existing bugs surfaced but left untouched
metadata: 
  node_type: memory
  type: project
  originSessionId: 30643ef2-d119-442f-93d4-7e3acd9fda9b
  modified: 2026-08-25T18:44:41.685Z
---

All 72 of 78 `client/meta/*/props.ts` files (everything except `Box`, `Floating`, `FloatingContent`, `HtmlTag`, `Link`, `NebkitProvider`, which were already self-contained) were refactored to remove cross-component `X_META.props.Y` references. Each file now writes every `DocProp` object out in full, in place — no more borrowing/spreading another component's docs entry.

**Why:** the user found the reference/spread pattern hard to read and fragile to maintain (jumping files to see what a prop documents, silent propagation when a shared entry changes, friction when they wanted to override a description or narrow an inherited union per-component). Decision was to duplicate the doc content (Option B from that discussion) rather than keep referencing, specifically because a zero-exception "never reference another component's meta" rule is far easier for both a human and an AI to audit than a hybrid rule with judgment calls. See [[project_docs_meta_architecture]] for the adjacent (separate) decision about *not* moving descriptions into JSDoc on types.ts.

**The one thing NOT flattened:** the `options` field still imports the real backing constant (e.g. `BOX_COLORS`, or a component's own narrowed constant like `SWITCH_INTENTS`) rather than duplicating literal string arrays — that's a deliberate exception, since those arrays are genuine compiler-adjacent source-of-truth values, not docs-authoring duplication.

**How to apply:** if asked to touch `props.ts` files again, follow the same rule — no `X_META.props.Y` references, `options` sourced from whichever constant genuinely backs the prop's real declared type (check `types.ts`, not the old docs). A punch-list of pre-existing doc/type bugs was surfaced during this pass and deliberately left unfixed for a later editorial pass — don't assume these are fixed:
- `MarkerList.gap` describes `rowGap` (copy-paste bug)
- `MultiSelectOption.children` / `SelectOption.children` typed `string` but documented as `ReactNode`
- `IconButton.tag`'s `defaultValue: 'div'` isn't a member of its own `ICON_BUTTON_TAGS` options
- `SideNav.intent`, `SideNavCategory.align`, `SideNavItem.intent`/`variant`/`align`/`iconPlacement` carry defaults borrowed from `Button` rather than sourced from `SideNav`'s own `DEFAULT_SIDE_NAV_*` constants (values coincidentally match, so nothing visibly wrong on the docs site)
- `Tooltip.maxInlineSize`/`minInlineSize`, `TabsTab.minInlineSize`, `FloatingTrigger.display` carry a stale `link: true` inherited from Box despite being locally-typed/narrowed props
- `Avatar.shape` uses an `AVATAR_SHAPES as never` cast
