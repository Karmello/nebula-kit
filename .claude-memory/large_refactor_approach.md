---
name: large-refactor-approach
description: "Approach validated for large mechanical multi-file refactors in nebula-kit — establish convention manually, then delegate in parallel batches"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: cdf29ddc-ead3-46f3-89ec-88239a17dbfc
  modified: 2026-08-20T22:53:17.343Z
---

For large mechanical refactors touching many similar files (e.g. extracting JSX examples out of 52 component meta.tsx files into sibling examples.tsx files, then later moving them into meta/ subfolders), the approach that worked well and was praised by the user ("you really proved you can do long refactor very well," 2026-08-20):

1. Manually convert 2-3 files first covering the different structural cases (simple case, shared-import case, multi-component/multi-array case) to nail down the exact convention.
2. Verify each manual conversion with `yarn ts` (tsc typecheck) and `npx eslint --fix` before scaling up.
3. Split the remaining files into ~10-file batches and delegate to parallel background general-purpose agents, each given: the convention, pointers to the 2-3 reference files to read, the exact file list, and instructions to self-verify with `yarn ts` (grepped for their own filenames, since other batches edit concurrently) and eslint.
4. After all batches report back, run a final full-repo `yarn ts`, full-repo eslint, and `yarn test` before committing.
5. Purely mechanical moves (like renaming meta.tsx → meta.ts, or meta.ts → meta/index.ts) can be scripted directly (git mv + a small Node script for relative-import path fixups) rather than delegated — faster and lower-risk when the transform is a deterministic path computation.

**Why:** This kept every batch typecheck/lint-clean with zero manual fixups needed afterward, across 52 files and multiple structural variants (single component, shared prop imports, multi-slot components with multiple examples arrays, deeply nested relative imports like Table's `./slots/...`).

**How to apply:** Default to this pattern for future large-scale mechanical refactors in this repo (renames, extractions, restructuring) — establish + verify convention solo first, then parallelize, then verify again at the end. Don't ask permission to use subagents for this kind of work; the user has validated it. Still confirm before pushing (see git workflow: commit when asked, push only when asked — user said "commit do not push" at one point in this session).
