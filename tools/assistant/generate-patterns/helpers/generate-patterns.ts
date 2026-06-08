import { Pattern } from '../../../../src/client/definitions/patterns/definitions'

export const generatePatterns = (patterns: Pattern[]) => {
  const lines: string[] = []

  lines.push('# Patterns')
  lines.push('')
  lines.push('Reusable NebulaKit UI patterns.')
  lines.push('')

  for (const pattern of patterns) {
    lines.push(`## ${pattern.title.trim()}`)
    lines.push('')
    lines.push(`- id: ${pattern.id}`)
    lines.push(`- category: ${pattern.category}`)
    lines.push('')
    lines.push(pattern.description.trim())
    lines.push('')

    if (pattern.code) {
      lines.push('```tsx')
      lines.push(pattern.code)
      lines.push('```')
    }

    lines.push('')
  }

  return lines.join('\n')
}
