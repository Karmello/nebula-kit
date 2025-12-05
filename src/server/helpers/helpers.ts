import { capitalCase, pascalCase } from 'change-case'

import META from 'client/meta'

export const DEFAULT_TITLE = 'NebulaKit | React UI System'

export const DEFAULT_DESCRIPTION =
  'React UI system built on composition - small, consistent parts combining into larger structures with clarity and control. Each component follows the same foundation, producing apps that stay predictable, stable and effortless to scale.'

export const getHtmlMetaData = (path: string): { title: string; description: string } => {
  let title, description

  try {
    let params = path
      .split('?')[0]
      .split('/')
      .filter(p => p)

    if (!params.length) throw new Error()

    const isComponentPage = ['core', 'pro'].includes(params[0])

    if (isComponentPage) {
      const componentName = pascalCase(params[2])
      params[2] = params[2].replace('-', ' ')
      description = META[componentName][componentName].overview.title
    } else {
      description = DEFAULT_DESCRIPTION
    }

    params = params.map(p => capitalCase(p))
    if (isComponentPage) {
      params[2] = params[2].replace(' ', '')
    }

    title = ['NebulaKit', ...params].join(' | ')
  } catch {
    return { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION }
  }

  return { title, description }
}

export const getFinalIndexHtml = (indexHtml: string, appHtml: string, url: string) => {
  const { title, description } = getHtmlMetaData(url)

  return indexHtml
    .replace('<!-- title -->', `<title>${title}</title>`)
    .replace('<!-- description -->', `<meta name="description" content="${description}" />`)
    .replace('<!-- og:title -->', `<meta property="og:title" content="${title}" />`)
    .replace('<!-- og:description -->', `<meta name="og:description" content="${description}" />`)
    .replace('<!-- twitter:title -->', `<meta property="twitter:title" content="${title}" />`)
    .replace('<!-- twitter:description -->', `<meta name="twitter:description" content="${description}" />`)
    .replace(
      '</head>',
      `<script async src="https://plausible.io/js/script.js" data-domain="${process.env.PLAUSIBLE_DOMAIN}"></script></head>`
    )
    .replace('<!--ssr-outlet-->', appHtml)
}
