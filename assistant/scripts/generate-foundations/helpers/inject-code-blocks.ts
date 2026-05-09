export const injectCodeBlocks = (html: string) => {
  return html.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/g, (_, code) => {
    const cleaned = code.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').trim()

    if (!cleaned) return ''

    return `\n\n\`\`\`bash\n${cleaned}\n\`\`\`\n\n`
  })
}
