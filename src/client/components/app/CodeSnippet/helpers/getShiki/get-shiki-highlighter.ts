import { HighlighterCore } from 'shiki'
import { createHighlighterCore } from '@shikijs/core'
import { createJavaScriptRegexEngine } from '@shikijs/engine-javascript'

import tsx from '@shikijs/langs/tsx'
import nightOwl from '@shikijs/themes/night-owl'

let highlighter: Promise<HighlighterCore> | null = null

export const getShikiHighlighter = () => {
  if (!highlighter) {
    highlighter = createHighlighterCore({
      engine: createJavaScriptRegexEngine(),
      langs: [tsx],
      themes: [nightOwl],
    })
  }

  return highlighter
}
