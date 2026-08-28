---
name: feedback-memory-lives-in-repo
description: "The harness's own memory path is ephemeral in this container; .claude-memory/ inside nebula-kit is the real, persistent copy — always keep it committed"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 479f8ff8-fb56-49a8-b4b5-ba0c89133fd7
  modified: 2026-08-28T18:00:19.341Z
---

This container's rootfs is a plain overlay mount with no persistent volume backing `/root/.claude` — nothing written there survives a container rebuild. `/usr/src/nebula-kit/.claude-memory/` is the actual persistence mechanism: it's a plain directory inside the `nebula-kit` git repo, mirroring the harness's own memory files, and `docker-entrypoint.sh` copies it into the runtime memory path on container start (only when that path is empty, so a plain restart never clobbers newer in-container notes).

**Why:** Corrected directly by the user (2026-08-28) after a session where new memory files were written only to the harness's runtime path and never copied into the repo — "everything in memory should be committed... we were already doing this." Established originally in commit 19960c5d ("Persist Claude memory notes across container rebuilds") and continued in 557dffb1.

**How to apply:** Every time a memory file is created, edited, or removed via the normal auto-memory flow (`/root/.claude/projects/-usr-src-nebula-kit/memory/`), mirror the same change into `/usr/src/nebula-kit/.claude-memory/` in the repo (including `MEMORY.md`) and commit it there — don't wait to be asked. Because the restore-on-boot only fires when the runtime path is empty, also check at the start of a session whether the two directories have drifted (files present in one but not the other) and reconcile both ways, since a mid-lived container can silently miss files added to the repo after boot.
