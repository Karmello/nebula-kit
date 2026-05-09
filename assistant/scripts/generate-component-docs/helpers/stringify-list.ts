export const stringifyList = (items?: string[]) => {
  if (!items?.length) return ''
  return items.map(item => `- ${item}`).join('\n')
}
