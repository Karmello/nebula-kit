---
name: verify-composed-of
description: Verify every component's composedOf array in src/client/meta against what it actually renders, and optionally fix mismatches. Invoke manually; not something Claude should trigger on its own.
disable-model-invocation: true
argument-hint: "[fix]"
---

Verify that every `composedOf` array declared in `src/client/meta/<Key>/overview.ts` accurately
lists the Nebula components that `<Key>`'s implementation actually renders. Each meta entry maps
1:1 to a component or slot under `src/lib/components/core` or `src/lib/components/pro`.

Run in **report-only** mode by default. Only apply fixes if invoked as `/verify-composed-of fix`
(check `$ARGUMENTS` for the word `fix`).

## 1. Run the heuristic scan

```
node ${CLAUDE_SKILL_DIR}/scripts/check-composed-of.cjs
```

This prints a JSON array of flagged entries (`{ key, filePath, declared, used, missing, extra }`) -
only entries where declared and actually-used diverge. It maps each meta key to the `.tsx` file
whose kebab-case name matches the folder, extracts imported PascalCase names that are also known
meta keys (or the shared `DropdownList` primitive), and checks whether they're rendered as JSX
tags in that one file.

**This script has known blind spots - do not report a flag as a real bug without checking it by
hand.** It only reads one file per key, so it produces false positives whenever:

- **The real rendering is delegated elsewhere.** Some components split their implementation into
  an internal `components/` subfolder (e.g. `Autocomplete` renders almost nothing itself; the real
  composition is in `Autocomplete/components/AutocompleteMain/`). Read the top-level file's own
  render output first - if it just forwards everything to a sub-component, go read that file too.
- **The entry is a passthrough slot that its PARENT wraps.** Several slot components (`Select.Option`,
  `Autocomplete.Option`, `MultiSelect.Option`, `Tabs.Tab`, `Tabs.Panel`, etc.) are literally
  `({ children }) => children` - they render nothing themselves. Their `composedOf` documents what
  the *parent* component (`Select`, `Autocomplete`, `MultiSelect`, `Tabs`) wraps the slot's content
  in when it renders it (e.g. `Select.Option`'s `['Box', 'Text', 'Divider']` matches how `select.tsx`
  wraps each option). Trace into the parent's render function before concluding a slot's declared
  `composedOf` is wrong.
- **The component genuinely composes nothing documented.** `Floating`, `FocusTrap`, `HtmlTag`, and
  `NebkitProvider` have no `composedOf` and that's correct - they either render raw DOM, do pure
  hook/effect work with no JSX of their own, or only use undocumented shared primitives (see next
  point). Absence of `composedOf` is a valid, intentional state, not something to always fill in -
  only add it when the component truly renders a documented Nebula component directly.
- **It's an undocumented shared primitive.** `DropdownList` (`lib/components/shared/DropdownList`)
  has no meta entry of its own and is consistently *excluded* from every `composedOf` that uses it
  (`Breadcrumb`, `Select`, `Autocomplete`, `MultiSelect`, ...). Don't flag its absence as a bug. If
  you find a *different* shared/internal component like this, extend
  `KNOWN_EXTRA_COMPONENT_BASE_NAMES` in the script rather than treating every use of it as missing.

For each flagged entry, read the actual `filePath` (and, per the above, its parent's render
function or any internal `components/` subfolder it delegates to) to confirm whether `missing` and
`extra` are real. Discard anything that turns out to be a false positive for one of the reasons
above.

## 2. Report

List the confirmed real mismatches only, in a table: component, current `composedOf`, what it
should be, and the one-line reason (what JSX tag proves it). Don't list the false positives you
ruled out unless the user asks - just don't act on them.

If invoked without `fix`, stop here.

## 3. Fix (only when invoked as `/verify-composed-of fix`)

For every confirmed mismatch:
- If `composedOf` is missing entirely but should exist, add it in the conventional position inside
  the overview object (after `guidelines` if present, else after `features`, else after
  `description`/`title` - before `exposedTags`/`slots`).
- If it exists, correct its contents (add missing, remove wrong entries).

Then, **regardless of whether any entry needed a content fix**, sort every `composedOf` array
across all of `src/client/meta/*/overview.ts` alphabetically (`Array.prototype.sort` with
`localeCompare`) - including entries that were already correct. This keeps the whole set
consistent, not just the ones that changed.

## 4. Verify

This project always runs prettier alongside lint and typecheck (see saved memory). After making
changes:

```
yarn tsc --noEmit -p .
yarn lint          # yarn eslint --fix "src/**/*.{ts,tsx}" if it reports fixable errors
yarn prettier       # yarn prettify if it reports issues, then re-run yarn prettier to confirm
yarn test
NODE_ENV=production yarn vite build --config vite.client.prod.ts   # then rm -rf build
```

Report a short summary of what changed. Do not commit unless the user asks.
