---
name: feedback_distinguish_talk_vs_task
description: distinguish philosophical/reflective messages from task requests before acting; a conclusion or observation is not a request to do work
metadata:
  type: feedback
---

When the user shares a conclusion, observation, or reflection (e.g. "this refactor turned out great, the scoping approach is the magic here"), that is conversational, not a task request. Do not respond by taking action, writing memory files, editing code, running commands, unless they explicitly ask for something to be done.

**Why:** Corrected directly by the user (2026-09-09) after they shared a positive reflection on the Box token architecture rewrite ("great move with this refactor") and I responded by unilaterally writing and committing memory file updates without being asked. Their words: "when i write a conclusion like that i dont expect u to do any work, i just want to talk, you need to figure out conversation type, its either task to do or philosophical conversation and this is explicite said always by me, you have problem figuring this out." This is a recurring pattern they've flagged before, not a one-off.

**How to apply:** Before acting on a message, classify it: is this an explicit instruction/request (edit this, fix that, commit, run X), or is it a reflection/observation/philosophical remark about something already done or noticed? For the latter, just respond conversationally, engage with the substance, agree/disagree/add nuance, but don't reach for tools. If genuinely unsure which type a message is, ask, don't default to action. This applies even when the reflection touches on something worth remembering, saving a memory is still an action and still requires it being warranted by an actual request or a clearly appropriate moment, not triggered automatically by any positive/interesting statement.
