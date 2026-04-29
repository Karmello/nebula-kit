export const CODE_SNIPPET_LANGS = ['log', 'bash', 'tsx', 'ts', 'jsx', 'js', 'css', 'json'] as const

export type CodeSnippetLang = (typeof CODE_SNIPPET_LANGS)[number]

export type CodeSnippetProps = {
  code: string
  lang: CodeSnippetLang
  borderRadius?: boolean
  description?: string
  boldDescription?: boolean
  descriptionIcon?: boolean
  fullBg?: boolean
}
