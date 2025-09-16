import { BundledLanguage, createHighlighterCore, createJavaScriptRegexEngine, TokensResult } from 'shiki'

import tsx from '@shikijs/langs/tsx'
import nightOwl from '@shikijs/themes/night-owl'

const highlighter = await createHighlighterCore({
  engine: createJavaScriptRegexEngine(),
  langs: [tsx],
  themes: [nightOwl],
})

export const tokenizeCode = (code: string, lang: BundledLanguage): TokensResult => {
  return highlighter.codeToTokens(code, { lang, theme: 'night-owl', includeExplanation: true })
}
