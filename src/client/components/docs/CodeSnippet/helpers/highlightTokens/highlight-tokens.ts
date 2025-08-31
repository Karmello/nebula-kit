import { BundledLanguage, TokensResult } from 'shiki'

import { getShikiHighlighter } from '../'

export const tokenizeCode = async (code: string, lang: BundledLanguage): Promise<TokensResult> => {
  const highlighter = await getShikiHighlighter()

  return highlighter.codeToTokens(code, { lang, theme: 'night-owl', includeExplanation: true })
}
