export const generateFAQ = (faq: { question: string; answer: string }[]) => {
  const lines: string[] = []

  lines.push('# FAQ')
  lines.push('')
  lines.push('Frequently asked questions about NebulaKit.')
  lines.push('')

  for (const item of faq) {
    lines.push(`## ${item.question.trim()}`)
    lines.push('')
    lines.push(item.answer.trim())
    lines.push('')
  }

  return lines.join('\n')
}
