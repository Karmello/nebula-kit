---
name: feedback-never-run-dev-server
description: Never start the nebula-kit dev server (yarn dev / vite) or any long-running server process inside this container
metadata:
  type: feedback
---

Never run `yarn dev`, `vite`, `yarn dev:ssr`, or any other long-running dev/server process in this container, even in the background.

**Why:** the user reported, twice and emphatically, that launching a server inside this container causes the container itself to stop/crash. This happened when attempting to start the Vite dev server to visually verify a Select component refactor via a headless browser.

**How to apply:** never use the `run` skill or manual `yarn dev`/background-server commands in this repo to visually verify changes, no matter how useful a screenshot would be. The user does all visual verification themselves and reports back — don't offer to check visually or ask them to check for you; just state facts about what changed (including any visible/behavioral trade-offs) and stop there. Rely on typecheck (`yarn ts`), lint (`yarn lint`), prettier (`yarn prettier`), and the vitest suite (`yarn test`) as the verification tools in this repo instead — these are safe. [[feedback_verify_prettier]]
