export const CODE_SNIPPET_LANGS = ['log', 'bash', 'tsx', 'ts', 'jsx', 'js', 'css', 'json'] as const
export const DEFAULT_MAX_BLOCK_SIZE = '350px'

export type CodeSnippetLang = (typeof CODE_SNIPPET_LANGS)[number]

export type CodeSnippetProps = {
  code: string
  usage?: string
  lang: CodeSnippetLang
  borderRadius?: boolean
  description?: string
  boldDescription?: boolean
  descriptionIcon?: boolean
  fullBg?: boolean
  maxBlockSize?: string
}
