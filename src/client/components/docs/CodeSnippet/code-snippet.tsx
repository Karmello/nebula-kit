import { BundledLanguage } from 'shiki'

import { highlightTokens } from './helpers'

export type CodeSnippetProps = {
  code: string
  lang?: BundledLanguage
}

export const CodeSnippet = async ({ code, lang = 'tsx' }: CodeSnippetProps) => {
  const tokens = await highlightTokens(code, lang)

  console.log(tokens)

  return <div />
}
