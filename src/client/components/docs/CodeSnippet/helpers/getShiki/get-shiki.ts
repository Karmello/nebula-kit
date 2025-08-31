import { HighlighterCore } from 'shiki'
import { createHighlighterCore } from '@shikijs/core'
import { createJavaScriptRegexEngine } from '@shikijs/engine-javascript'

import tsx from '@shikijs/langs/tsx'
import githubLight from '@shikijs/themes/github-light'

let highlighter: Promise<HighlighterCore> | null = null

export const getShiki = () => {
  if (!highlighter) {
    highlighter = createHighlighterCore({
      engine: createJavaScriptRegexEngine(),
      langs: [tsx],
      themes: [githubLight],
    })
  }

  return highlighter
}
