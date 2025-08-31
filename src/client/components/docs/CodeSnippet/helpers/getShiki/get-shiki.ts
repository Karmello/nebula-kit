import { Highlighter, getSingletonHighlighter } from 'shiki'

let highlighter: Promise<Highlighter> | null = null

export const getShiki = () => {
  if (!highlighter) {
    highlighter = getSingletonHighlighter({
      langs: ['tsx'],
      themes: ['github-light'],
    })
  }

  return highlighter
}
