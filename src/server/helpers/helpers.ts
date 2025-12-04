import { pascalCase } from 'change-case'

import META from 'client/meta'

const DEFAULT_TITLE = 'NebulaKit | React UI System'

const DEFAULT_DESCRIPTION =
  'React UI system built on composition - small, consistent parts combining into larger structures with clarity and control. Each component follows the same foundation, producing apps that stay predictable, stable and effortless to scale.'

const getMetaData = (path: string): { title: string; description: string } => {
  let title, description

  try {
    let params = path.split('?')[0].split('/')
    const isComponentPage = ['core', 'pro'].includes(params[0])

    if (isComponentPage) {
      const componentName = pascalCase(params[2])
      params[2] = params[2].replace('-', ' ')
      description = META[componentName][componentName].overview.title
    } else {
      description = DEFAULT_DESCRIPTION
    }

    params = params.map(p => pascalCase(p))
    if (isComponentPage) {
      params[2] = params[2].replace(' ', '')
    }

    title = params.join(' | ')
  } catch {
    return { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION }
  }

  return { title, description }
}

export const getFinalIndexHtml = (indexHtml: string, appHtml: string, url: string) => {
  const { title, description } = getMetaData(url)

  return indexHtml
    .replace('<title>NebulaKit | React UI System</title>', `<title>${title}</title>`)
    .replace('</head>', `<meta name="description" content="${description}"></head>`)
    .replace(
      '</head>',
      `<script async src="https://plausible.io/js/script.js" data-domain="${process.env.PLAUSIBLE_DOMAIN}"></script></head>`
    )
    .replace('<!--ssr-outlet-->', appHtml)
}
