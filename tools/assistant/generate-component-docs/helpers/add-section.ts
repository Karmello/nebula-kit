export const addSection = (lines: string[], title: string, content?: string) => {
  if (!content?.trim()) return

  lines.push(`## ${title}`, '', content, '')
}
