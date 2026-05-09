import { convertElemToString } from '../../../../src/client/helpers/convertElemToString/convert-elem-to-string'

export const generateExamples = (examplesMeta: any) => {
  if (!Array.isArray(examplesMeta)) return ''

  const examples = examplesMeta
    .filter(example => !example.skip)
    .map((example, index) => {
      const title = example.description || `Example ${index + 1}`
      const lines: string[] = [`### ${title}`, '']

      const code = example.code ?? (example.jsx ? convertElemToString(example.jsx) : '')

      if (code) {
        lines.push('```tsx', code.trim(), '```', '')
      }

      return lines.join('\n')
    })
    .filter(Boolean)

  return examples.join('\n')
}
