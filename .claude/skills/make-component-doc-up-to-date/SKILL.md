---
name: make-component-doc-up-to-date
description: Read a component's real implementation and bring its whole DocOverview (src/client/meta/<Name>/overview.ts) up to date - fill in missing-but-crucial fields and verify existing ones (composedOf included) against what the component actually does. Requires a component name argument. Invoke manually; not something Claude should trigger on its own.
disable-model-invocation: true
argument-hint: '<ComponentName>'
---

Update the **overview** doc (`src/client/meta/<ComponentName>/overview.ts`) for exactly one named
component, by reading its real implementation and using whichever `DocOverview` fields
(`src/client/definitions/meta.ts`) are missing something a _user_ genuinely needs to know before
using the component. This skill was created after a first attempt on `NebkitProvider` got several
things wrong - those mistakes are written into the rules below as the reason each rule exists, not
just the rule itself.

**Requires `$ARGUMENTS` to be a single component name** (e.g. `NebkitProvider`). If missing, ask for
it - don't guess or run this over every component.

## Scope: overview only

This skill touches only `overview.ts`. It does **not** group or edit `props.ts` (that's a separate,
already-established manual pattern - documented in full in section 7 below so the conventions are
written down instead of living only in session history), and it does not add examples or changelog
entries. Stay inside `DocOverview`.

## 1. Read before writing

- Read the component's actual render/implementation file(s) under `src/lib/components/{core,pro}/<Name>/` -
  not just `types.ts`. Behavior lives in the `.tsx` file; `types.ts` only tells you the prop shapes.
- Read `src/client/definitions/meta.ts` for the current `DocOverview` shape (fields available:
  `name`, `bundle`, `title`, `description`, `features`, `guidelines`, `composedOf`, `rendersAs`,
  `slots`, `hooks`, `readMoreLink`).
- Read the current `src/client/meta/<Name>/overview.ts` to see what's already there.
- Skim 2-3 sibling `overview.ts` files (e.g. `Dialog`, `Box`, `Snackbar`) to match tone/phrasing -
  short, outcome-focused bullets, not paragraphs.

## 2. The rule that mattered most: outcomes, not internals

**Docs are for a user getting started with the component from the outside, not for understanding
how it's built.** Only mention an implementation fact if it has a directly observable, actionable
effect the user needs to plan around.

- First attempt on `NebkitProvider` wrote: "applies theme by setting `data-theme`, `data-brand`
  and a `--neb-border-radius` CSS variable on the document root." That's mechanism, not outcome -
  a user starting with the component doesn't need the attribute/variable names to use it correctly.
  Corrected to: "configures the global theme, brand and border radius for the whole application
  and makes them available to every NebulaKit component automatically."
- Same failure mode with the SSR-hydration-reveal behavior: don't describe _how_ (an attribute
  toggled on the next animation frame) - describe _what the user gets_ ("avoids a flash of
  unstyled content while server-rendered markup is hydrating").
- Counter-example showing this isn't "never mention implementation": `Dialog`'s overview says
  "renders above the page using Portal." That's fine, because (a) `Portal` is itself a real public
  component the user could reach for directly, and (b) knowing a dialog portals out has a concrete
  actionable consequence (z-index/stacking-context, CSS scoping). The test is "public building
  block + actionable consequence," not "zero implementation words ever."

Before writing a `description` or `features` bullet, ask: would a user need to know this to use the
component correctly, or does it only matter to someone reading the source? If the latter, cut it.

## 3. `composedOf` and `hooks`: public API only, verified, not guessed

Both fields exist to tell a user "here's what else you could also reach for." That guarantee is
broken if either field lists something the user can't actually import from the published package.

**How to check if something is genuinely public** (do this for every candidate, don't assume):

1. Find where it's defined: a component under `src/lib/components/{core,pro}/<Thing>/`, or a hook
   under `src/lib/hooks/<useThing>/` or colocated inside another component's folder.
2. Check whether it is re-exported from `src/lib/components/core/index.ts` or
   `src/lib/components/pro/index.ts` - these two barrels are the **only** things re-exported by the
   actual package entry points, `src/lib/index.core.ts` (`export * from './components/core'`) and
   `src/lib/index.pro.ts` (`export * from './components/pro'`).
3. If it only lives under `src/lib/hooks/` and is exported by `src/lib/hooks/index.ts` - that barrel
   is **never** re-exported by `index.core.ts`/`index.pro.ts`. It is invisible to a package
   consumer. It does not belong in `composedOf` or `hooks`, no matter how central it is to the
   component's own behavior.

First attempt on `NebkitProvider` got both fields wrong this way:

- `composedOf: ['StylingIsland', 'useGlobalScrollLock']` - `StylingIsland` is correct (exported
  from `components/core/index.ts`, and it's literally what's rendered in JSX). `useGlobalScrollLock`
  is wrong - it lives under `lib/hooks/`, is never re-exported by `index.core.ts`, and a consumer
  cannot import it. Removed.
- `hooks: ['useCurrentTheme']` - also wrong, same reason (`lib/hooks/`, not re-exported). The
  `hooks` field is specifically for hooks that ship _alongside_ the component as part of its own
  public surface - the model is `Snackbar`, whose barrel entry is
  `export { Snackbar, type SnackbarProps, useSnackbar } from './Snackbar'` inside
  `components/pro/index.ts`. `useSnackbar` is colocated with `Snackbar` and exported from the same
  barrel line. A hook has to clear that same bar - defined inside the component's own folder (or a
  sibling folder) and exported from the same `components/{core,pro}/index.ts` line, or a line right
  next to it - to belong in `hooks`. An internal hook the component happens to call, defined
  elsewhere in `lib/hooks/`, never qualifies, however central it is to what the component does.

If nothing clears this bar, leave the field out entirely - an absent `composedOf`/`hooks` is a
valid, correct state (`Floating`, `FocusTrap`, and a few others intentionally have no `composedOf` -
see section 3b for how to tell intentional absence from a real gap).

## 3b. Cross-check `composedOf` with the heuristic scanner

This folds in what used to be a separate `verify-composed-of` skill - it's now just part of keeping
one component's overview accurate, not a standalone bulk-check tool.

```
node ${CLAUDE_SKILL_DIR}/scripts/check-composed-of.cjs
```

This prints a JSON array of every meta entry whose declared `composedOf` diverges from what its
implementation file actually imports-and-renders as JSX. Find `<ComponentName>` in the output (it
scans everything, since that's cheap - just ignore every entry that isn't yours).

**This script is a heuristic first pass, not a verdict.** It only reads one file per key (the one
whose kebab-case name matches the component's folder), so it will misfire whenever:

- **The real rendering is delegated elsewhere.** Some components split implementation into an
  internal `components/` subfolder (e.g. `Autocomplete` renders almost nothing itself; the real
  composition is in `Autocomplete/components/AutocompleteMain/`). If the top-level file just
  forwards to a sub-component, read that file too before trusting the flag.
- **The entry is a passthrough slot wrapped by its PARENT.** Several slots (`Select.Option`,
  `Tabs.Tab`, `Tabs.Panel`, etc.) are literally `({ children }) => children`. Their `composedOf`
  documents what the _parent_ wraps the slot's content in when it renders it - trace into the
  parent's render function before concluding a slot's declared `composedOf` is wrong.
- **It's an undocumented shared primitive.** `DropdownList` (`lib/components/shared/DropdownList`)
  has no meta entry of its own and is consistently _excluded_ from every `composedOf` that uses it.
  Don't flag its absence as a bug. If you find a different shared/internal primitive like this,
  extend `KNOWN_EXTRA_COMPONENT_BASE_NAMES` in the script.
- **The component genuinely composes nothing documented** (pure hook/effect work, raw DOM, or only
  undocumented shared primitives) - absence of `composedOf` is correct here, not a gap to fill.

Confirm any real mismatch by hand (read the actual file) before changing anything - discard false
positives from the reasons above without touching the code.

## 4. `readMoreLink` must be about the component you were asked to document, not a neighbor

First attempt linked `NebkitProvider`'s overview to the `StylingIsland` foundations page, because
`NebkitProvider` renders `StylingIsland` under the hood. Wrong target: if a crucial detail actually
belongs to a _different_ public component, that's a gap in _that_ component's own docs, to be
raised as a separate, explicitly-scoped follow-up - not something to bolt onto the component
currently being worked on as a cross-link. Stay inside the one named component. Only use
`readMoreLink` when the extra material genuinely belongs to what you were asked to document (e.g.
`Icon`'s link to the full icon list - that page is about `Icon` itself, not a different component).

## 5. Field-by-field checklist

Go through every `DocOverview` field and decide deliberately (skip fields with nothing genuine to
add - don't pad):

- **`title`**: one line, what it is. Usually already fine; only touch if inaccurate.
- **`description`**: one sentence, outcome-level, only if `title` alone leaves out something a
  user needs (see the `description` example above). Not every component needs one - `Dialog`'s
  overview has none and is complete without it.
- **`features`**: bullet list of real, user-observable capabilities or guarantees. Each bullet must
  survive the section 2 test.
- **`guidelines`**: hard constraints/usage rules the user must follow (e.g. "must wrap the
  application root", "must be used within a Snackbar provider context").
- **`composedOf`**: see sections 3 and 3b. Verified-public only, cross-checked against the scanner.
- **`rendersAs`**: only if the component's polymorphic tag prop genuinely resolves to **more than
  one** real HTML tag (backed by a multi-value `*_TAGS` constant, e.g. `BUTTON_TAGS`, `TEXT_TAGS`,
  `CALLOUT_TAGS`, or an inline multi-value array like Breadcrumb's `['div', 'nav', 'section']`). If
  the component always renders exactly one fixed tag, **omit the field entirely** - a single-item
  array isn't a meaningful, user-facing choice. (Renamed from `exposedTags` this session; every
  single-tag component had the field removed for this reason.)
- **`slots`**: only real `Component.SlotName` sub-components, verified against `useSlots` config or
  equivalent in the implementation.
- **`hooks`**: see section 3. Same-barrel, same-folder public companion hooks only.
- **`readMoreLink`**: see section 4.

## 6. Verify

```
yarn ts
npx prettier --check src/client/meta/<Name>/overview.ts
```

Report a short summary: which fields you added/changed and, just as importantly, which fields you
deliberately left alone and why (don't fill a field just because it exists). Do not touch other
components' docs, and do not commit unless asked.

## 7. Props doc grouping (`props.ts`) - established conventions

This is a separate, actively-used convention for `src/client/meta/<Name>/props.ts` (the `DocProp`
records rendered by `PropsTable`). It is out of this skill's own scope (see above), but it's
documented here so it stays consistent no matter who touches a `props.ts` file or when. Apply it
whenever asked to "group props" for a component, or when adding a new prop to an already-grouped
file.

### 7a. The ungrouped (unnamed) section always renders first

`PropsTable` (`src/client/pages/library/LibraryPropsPage/PropsTable/props-table.tsx`) builds
`sections = [['', ungroupedNames] as const, ...Object.entries(groupedNames)]` - the unnamed section
is forced first regardless of where it sits in the source file. Named groups render in the order
their _first_ prop is declared in `props.ts` - reordering a group on the page means physically
moving that block of object-literal entries in the source.

Within the ungrouped section, keep this relative order when the props are present at all:
`children` (when it's required slot content) → `elemTag` → `elemRef` → `elemAttrs` → `className`
(rare). **`elemRef` must always precede `elemAttrs`** - never the reverse; this was swept fixed
across every `props.ts` in the codebase this session.

A component's single most essential prop - the one thing a user reaches for above everything else -
is deliberately left ungrouped and positioned right after `elemAttrs`, even where a group would
technically fit, so it renders prominently in the first table. Precedent: `onClick` on
`Button`/`IconButton`, `active` on `Loader`, `visible` on `Resize`, `tree` on `Breadcrumb`.

### 7b. Standard wording for the structural props

Every `props.ts` uses these exact descriptions (confirmed identical across every file in the
codebase this session, then applied to any stragglers):

- `className` -> "CSS class applied to the element."
- `elemTag` -> "The HTML tag to be rendered."
- `elemRef` -> "Reference to the element."
- `elemAttrs` -> "Additional HTML attributes applied to the element."

### 7c. Group naming vocabulary

Group names are lowercase and never self-referential (don't name a group after the component
itself - no "input" group on `Input`, no "table" group on `Table`). Pick from this established,
recurring set rather than inventing a new name for a concept one of these already covers:

- **`value`** - controlled/uncontrolled state and its change handler (`value`, `defaultValue`,
  `onChange`), plus constraints that are really about the value being entered (`maxLength`,
  `readOnly`, a `placeholder` that describes the value's format rather than page layout).
- **`events`** - DOM event handlers other than the component's single primary action (see 7a):
  `onFocus`, `onBlur`, `onKeyDown`, `onLoad`, `onError`, etc.
- **`surface`** - the visual variant/color system: `variant`, `intent`, `color`, `surfaceDepth`,
  `bgMode`, `borderMode`, `status` (when it drives semantic coloring), etc. Order inside the group
  is always **`variant` -> `intent` -> `color`** (intent before color - confirmed and applied
  repeatedly this session; `status` goes wherever it reads best for that component, e.g. first in
  `content` on `Callout` since it also picks the default heading/body copy).
- **`content`** - what is displayed: labels, `initials`, `staticLabel`, `noOptionsLabel`, `alt`/
  `title` on media, a `placeholder` that's really about display copy, `heading`, list-visibility
  counts like `visibleItemsCount`.
- **`appearance`** - remaining visual-detail props that don't fit `surface` (`textAlign`,
  `aspectRatio`, `opacity`, `borderRadius`; on small components like `Icon`, `size`/`name` also
  land here since there's no separate `surface` concept for them).
- **`layout`** - position/display/structural placement: `display`, `position`, `placement`,
  `orientation`, `stickyHeader`, `switchAt`, a table's `layout` algorithm prop, `objectFit`/
  `objectPosition` (placed last within the group).
- **`size`** - dimensions: `scale`, the `blockSize`/`inlineSize` family and their min/max variants.
- **`padding`** - always in this exact order when present: `padding`, `paddingInline`,
  `paddingBlock`, `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`.
- **`margin`** - same shape as `padding`, margin equivalents.
- **`interaction`** - `disabled`, `cursor`, `pointerEvents`, `ripple`, `activeOnFocus`, a `mode`
  prop that picks which interaction opens something.
- **`state`** - open/close lifecycle props that are more than a plain controlled value: `open`,
  `onClose`, `closeOnBackdropClick` on `Dialog`; `open`/`onOpenChange` on `Floating`.
- **`animation`** - `duration`, `easing`, `property`, and an animation hook/component's own
  transform props (`axis`, `from`, `to`, `origin` on `useScale`); the hook's `visible` toggle goes
  first in this group when the whole hook exists to drive that one transition.
- **`span`** - table cell spanning: `colSpan`, `rowSpan`.
- **`scroll`** - scroll-behavior props: `scrollToIndex`, `scrollAlign`, `ensureVisibleIndex`,
  `overscan`.
- **`filtering`** - search/filter behavior distinct from the value itself: `debounceDelay`,
  `disableFiltering`.
- **`navigation`** - URL/routing-related: `href`, `target`, `hrefBuilder`.

A single-prop group is completely fine when the concept is genuinely distinct and doesn't belong
anywhere else - e.g. `Spacer`'s lone `blockSize` under `size`, `MarkerList`'s lone `gap` under
`layout`, `Toolbar`'s lone `switchAt` under `layout`.

### 7d. When grouping a whole component family (root + slots)

Design the group vocabulary once against the root component, then apply the same group names and
prop ordering to every slot that shares the same props (e.g. all of `Table`'s slots share
`surface`/`padding`/`appearance`; only `Table` itself additionally needs `layout` and `size`, and
only `Table.Cell`/`Table.HeaderCell` need `span`). Don't invent a different name for the same
concept in a sibling slot's file.

### 7e. Verify

```
yarn ts
npx prettier --check src/client/meta/<Name>/props.ts
```

Same as section 6 - typecheck and prettier are the two checks that matter; there's no other
automated verification for prop doc grouping.
