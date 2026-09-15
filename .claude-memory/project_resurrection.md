---
name: project-resurrection
description: nebula-kit is a project the user is bringing back from dormancy/inactivity
metadata: 
  node_type: memory
  type: project
  originSessionId: cdf29ddc-ead3-46f3-89ec-88239a17dbfc
  modified: 2026-08-20T23:47:16.220Z
---

The user (Kamil Noga) referred to this work as "crucial in resurrecting this project" (said 2026-08-20), implying nebula-kit had gone dormant or stalled and is now being actively revived.

**Why:** Not stated explicitly beyond "resurrecting" — treat nebula-kit as a project coming back from a period of low/no activity rather than a mature actively-maintained codebase with a large existing contributor base.

**How to apply:** Expect more foundational/structural cleanup work (like the meta.tsx/examples.tsx split and directory restructuring done in this session) rather than incremental feature work, at least in this phase. Don't assume large-scale refactors are unusual or need extra hesitation to propose — the user has explicitly welcomed them and validated the approach (see [[large-refactor-approach]]).

**Concrete state as of 2026-08-20:** Before this revival, `main` had drifted to a "project discontinued" state — a commit titled "closing" changed the app footer copy to say NebulaKit "was an experimental project... concluded and... no longer maintained," and bumped `versioning.json` to 0.10.0. The `v0.11.0` branch is the active resurrection line and deliberately discards that footer/versioning drift: merged `main` into `v0.11.0` with `git merge -s ours` so `v0.11.0`'s content wins entirely, then pushed — a later merge of `v0.11.0` into `main` will fast-forward to `v0.11.0`'s state, un-discontinuing the project. Also paused CI enforcement by commenting out the `yarn tsd` step in `.github/workflows/main.yml` (commit 78eefbd0), intended PR title "Remove tsd type-level tests, pause CI enforcement" — treat TSD/type-level-test enforcement as intentionally offline for now, not an oversight.
