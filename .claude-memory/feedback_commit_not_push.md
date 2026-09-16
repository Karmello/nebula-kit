---
name: feedback-commit-not-push
description: "Commit it all" authorizes a commit only, never a push -- push requires its own explicit ask
metadata:
  type: feedback
---

"Commit it all" (or any variant of "commit") means create the commit locally. It does NOT authorize pushing to the remote, even though earlier in this same project's history pushes were sometimes bundled with commit requests.

**Why:** user explicitly corrected an unrequested push after a "commit it all" instruction -- treating commit and push as one action was wrong.

**How to apply:** after committing, stop and wait. Only run `git push` when the user says "push" (or equivalent) as its own instruction, in the same or a later message. If a single message clearly asks for both ("commit and push", "commit it all and push"), that's fine -- the distinction is about not inferring push from commit alone.
