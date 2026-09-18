import { capitalCase } from 'change-case'

import { LIBRARY_ITEM_LABEL_BY_KEY } from 'client/definitions'
import META from 'client/meta'

export const DEFAULT_TITLE = 'NebulaKit | React UI System'

export const DEFAULT_DESCRIPTION =
  'React UI system designed to minimize interface development effort, letting you focus on application logic while keeping products consistent, maintainable and resistant to entropy.'

export const getHtmlMetaData = (path: string): { title: string; description: string } => {
  try {
    const params = path
      .split('?')[0]
      .split('/')
      .filter(p => p)

    if (!params.length) throw new Error()

    const isLibraryPage = params[0] === 'library'
    const itemLabel = isLibraryPage ? LIBRARY_ITEM_LABEL_BY_KEY[params[2]] : undefined

    const description =
      itemLabel && META[itemLabel]?.[itemLabel]
        ? META[itemLabel][itemLabel].overview.title
        : DEFAULT_DESCRIPTION

    const titleParams = params.map((p, i) => (i === 2 && itemLabel ? itemLabel : capitalCase(p)))
    const title = ['NebulaKit', ...titleParams].join(' | ')

    return { title, description }
  } catch {
    return { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION }
  }
}

export const getFinalIndexHtml = (indexHtml: string, appHtml: string, url: string) => {
  const { title, description } = getHtmlMetaData(url)

  return indexHtml
    .replace('<!-- title -->', `<title>${title}</title>`)
    .replace('<!-- description -->', `<meta name="description" content="${description}" />`)
    .replace('<!-- og:title -->', `<meta property="og:title" content="${title}" />`)
    .replace('<!-- og:description -->', `<meta name="og:description" content="${description}" />`)
    .replace('<!-- twitter:title -->', `<meta property="twitter:title" content="${title}" />`)
    .replace(
      '<!-- twitter:description -->',
      `<meta name="twitter:description" content="${description}" />`
    )
    .replace(
      '</head>',
      `<script async src="https://plausible.io/js/script.js" data-domain="${process.env.PLAUSIBLE_DOMAIN}"></script></head>`
    )
    .replace('<!--ssr-outlet-->', appHtml)
}
