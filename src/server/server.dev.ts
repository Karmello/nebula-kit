import { createElement } from 'react'
import express from 'express'
import getPort from 'get-port'
import { renderToString } from 'react-dom/server'
import { createServer as createViteServer, ViteDevServer } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

import { getFinalIndexHtml } from './helpers'

const renderApp = async (vite: ViteDevServer, url: string) => {
  const { StaticRouter } = await vite.ssrLoadModule('react-router')
  const { Client } = await vite.ssrLoadModule('src/client/components/app/Client/client.tsx')

  return renderToString(createElement(StaticRouter, { location: url }, createElement(Client)))
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

      let indexHtml = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf-8')
      indexHtml = await vite.transformIndexHtml(url, indexHtml)
      indexHtml = indexHtml.replace(
        '</head>',
        `<style id='neb-ssr-dev-styles'>${css}</style></head>`
      )

      const appHtml = await renderApp(vite, url)
      indexHtml = indexHtml.replace('<!--ssr-outlet-->', appHtml)

      res
        .status(200)
        .set({ 'Content-Type': 'text/html' })
        .end(getFinalIndexHtml(indexHtml, appHtml, url))
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
