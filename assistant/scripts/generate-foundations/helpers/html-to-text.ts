import { decodeEntities } from './decode-entities'

/**
 * Very simple HTML → text converter.
 * We intentionally keep it dumb first.
 */
export const htmlToText = (html: string) => {
  return decodeEntities(
    html
      .replace(/<style[^>]*>.*?<\/style>/gs, '')
      .replace(/<script[^>]*>.*?<\/script>/gs, '')

      // links → markdown
      .replace(/<a[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/g, (_, href, text) => {
        return `[${text.trim()}](${href})`
      })

      // tables → markdown table
      .replace(/<table[^>]*>(.*?)<\/table>/gs, (_, tableHtml) => {
        const rows = [...tableHtml.matchAll(/<tr[^>]*>(.*?)<\/tr>/gs)].map(r => r[1])

        const parsedRows = rows.map(row =>
          [...row.matchAll(/<(td|th)[^>]*>(.*?)<\/\1>/gs)].map(cell => cell[2].replace(/<[^>]+>/g, '').trim())
        )

        if (!parsedRows.length) return ''

        const [header, ...body] = parsedRows

        const headerLine = `| ${header.join(' | ')} |`
        const separator = `| ${header.map(() => '---').join(' | ')} |`
        const bodyLines = body.map(row => `| ${row.join(' | ')} |`)

        return `\n\n${[headerLine, separator, ...bodyLines].join('\n')}\n\n`
      })

      // preserve code block boundaries
      .replace(/<pre[^>]*>/g, '\n```\n')
      .replace(/<\/pre>/g, '\n```\n')
      .replace(/<code[^>]*>/g, '')
      .replace(/<\/code>/g, '')

      // convert block elements → double newline
      .replace(/<\/(p|div|section)>/g, '\n\n')

      // line breaks
      .replace(/<br\s*\/?>/g, '\n')

      // strip remaining tags
      .replace(/<[^>]+>/g, '')

      // normalize whitespace but KEEP paragraphs
      .replace(/[ \t]+/g, ' ')
      .replace(/\n{3,}/g, '\n\n')
      .trim()
  )
}
