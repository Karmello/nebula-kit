import { BundledLanguage } from 'shiki'

import { getShiki } from '../'

export type ShikiToken = {
  content: string
  color: string
  fontStyle: number
}

export type ShikiLine = ShikiToken[]

export const highlightTokens = async (code: string, lang: BundledLanguage): Promise<ShikiLine[]> => {
  const highlighter = await getShiki()

  const lines = highlighter.codeToTokens(code, { lang, theme: 'github-light' })

  return lines as unknown as ShikiLine[]
}
