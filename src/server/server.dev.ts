import fs from 'node:fs'
import path from 'node:path'
import express from 'express'
import getPort from 'get-port'
import { createServer as createViteServer, ViteDevServer } from 'vite'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'

const renderApp = async (vite: ViteDevServer, url: string) => {
  const { StaticRouter } = await vite.ssrLoadModule('react-router')
  const { HydrationGate } = await vite.ssrLoadModule('src/lib/components/index.ts')
  const { NebKitProvider } = await vite.ssrLoadModule('src/lib/components/index.ts')
  const { App } = await vite.ssrLoadModule('src/client/components/index.ts')

  return renderToString(
    createElement(
      StaticRouter,
      { location: url },
      createElement(
        HydrationGate,
        null,
        createElement(NebKitProvider, { defaultBorderRadius: 3 }, createElement(App))
      )
    )
  )
}

const start = async () => {
  const app = express()

  const vite = await createViteServer({
    configFile: path.resolve(process.cwd(), 'vite.client.dev.ts'),
    server: { middlewareMode: true },
    appType: 'custom',
  })

  const css: string = (await vite.ssrLoadModule('/src/server/ssr-dev-styles.scss?inline')).default

  app.use(vite.middlewares)

  app.get(/.*/, async (req, res, next) => {
    try {
      const url = req.originalUrl

      let template = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf-8')
      template = await vite.transformIndexHtml(url, template)
      template = template.replace('</head>', `<style id='neb-ssr-dev-styles'>${css}</style></head>`)

      const appHtml = await renderApp(vite, url)

      const html = template.replace('<!--ssr-outlet-->', appHtml)
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (ex) {
      vite.ssrFixStacktrace(ex as Error)
      next(ex)
    }
  })

  const port = await getPort({ port: 5174 })

  app.listen(port, () => {
    console.log(`▶ SSR dev server at http://localhost:${port}`)
  })
}

start()
