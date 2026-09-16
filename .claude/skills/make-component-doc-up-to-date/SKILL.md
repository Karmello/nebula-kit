---
name: make-component-doc-up-to-date
description: Read a component's real implementation and bring its whole DocOverview (src/client/meta/<Name>/overview.ts) up to date - fill in missing-but-crucial fields and verify existing ones (composedOf included) against what the component actually does. Requires a component name argument. Invoke manually; not something Claude should trigger on its own.
disable-model-invocation: true
argument-hint: "<ComponentName>"
---

Update the **overview** doc (`src/client/meta/<ComponentName>/overview.ts`) for exactly one named
component, by reading its real implementation and using whichever `DocOverview` fields
(`src/client/definitions/meta.ts`) are missing something a *user* genuinely needs to know before
using the component. This skill was created after a first attempt on `NebkitProvider` got several
things wrong - those mistakes are written into the rules below as the reason each rule exists, not
just the rule itself.

**Requires `$ARGUMENTS` to be a single component name** (e.g. `NebkitProvider`). If missing, ask for
it - don't guess or run this over every component.

## Scope: overview only

This skill touches only `overview.ts`. It does **not** group or edit `props.ts` (that's a separate,
already-established manual pattern - see prior session work on `Text`/`Button`/`Image`/`Tabs`/etc.),
and it does not add examples or changelog entries. Stay inside `DocOverview`.

## 1. Read before writing

- Read the component's actual render/implementation file(s) under `src/lib/components/{core,pro}/<Name>/` -
  not just `types.ts`. Behavior lives in the `.tsx` file; `types.ts` only tells you the prop shapes.
- Read `src/client/definitions/meta.ts` for the current `DocOverview` shape (fields available:
  `name`, `bundle`, `title`, `description`, `features`, `guidelines`, `composedOf`, `exposedTags`,
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
- Same failure mode with the SSR-hydration-reveal behavior: don't describe *how* (an attribute
  toggled on the next animation frame) - describe *what the user gets* ("avoids a flash of
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
  `hooks` field is specifically for hooks that ship *alongside* the component as part of its own
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
  documents what the *parent* wraps the slot's content in when it renders it - trace into the
  parent's render function before concluding a slot's declared `composedOf` is wrong.
- **It's an undocumented shared primitive.** `DropdownList` (`lib/components/shared/DropdownList`)
  has no meta entry of its own and is consistently *excluded* from every `composedOf` that uses it.
  Don't flag its absence as a bug. If you find a different shared/internal primitive like this,
  extend `KNOWN_EXTRA_COMPONENT_BASE_NAMES` in the script.
- **The component genuinely composes nothing documented** (pure hook/effect work, raw DOM, or only
  undocumented shared primitives) - absence of `composedOf` is correct here, not a gap to fill.

Confirm any real mismatch by hand (read the actual file) before changing anything - discard false
positives from the reasons above without touching the code.

## 4. `readMoreLink` must be about the component you were asked to document, not a neighbor

First attempt linked `NebkitProvider`'s overview to the `StylingIsland` foundations page, because
`NebkitProvider` renders `StylingIsland` under the hood. Wrong target: if a crucial detail actually
belongs to a *different* public component, that's a gap in *that* component's own docs, to be
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
- **`exposedTags`**: only if the component truly forwards a polymorphic tag prop that renders a
  real DOM element itself (check for `elemTag`/a component-specific `tag` prop actually reaching
  a rendered element - not present just because the component renders *some* JSX).
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
