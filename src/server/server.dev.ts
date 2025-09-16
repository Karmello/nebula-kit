import fs from 'node:fs'
import path from 'node:path'
import express from 'express'
import { createServer as createViteServer } from 'vite'

import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

const renderApp = async (vite: import('vite').ViteDevServer, url: string) => {
  // const { createElement } = await vite.ssrLoadModule('react')
  // const { renderToString } = await vite.ssrLoadModule('react-dom/server')
  // const { StaticRouter } = await vite.ssrLoadModule('react-router-dom')
  const { NebKitProvider } = await vite.ssrLoadModule('src/lib/components/index.ts')
  const { App } = await vite.ssrLoadModule('/src/client/components/index.ts')

  const tree = createElement(
    StaticRouter,
    { location: url },
    createElement(NebKitProvider, { defaultBorderRadius: 3 }, createElement(App, null))
  )

  return renderToString(tree)
}

async function start() {
  const app = express()

  const vite = await createViteServer({
    configFile: path.resolve(process.cwd(), 'vite.client.dev.ts'),
    server: { middlewareMode: true },
    appType: 'custom',
  })

  app.use(vite.middlewares)

  app.get(/.*/, async (req, res, next) => {
    try {
      const url = req.originalUrl

      let template = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf-8')
      template = await vite.transformIndexHtml(url, template)

      const appHtml = await renderApp(vite, url)

      const html = template.replace('<!--ssr-outlet-->', appHtml)
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (ex) {
      vite.ssrFixStacktrace(ex as Error)
      next(ex)
    }
  })

  app.listen(5174, () => {
    console.log('SSR dev server running at http://localhost:5174')
  })
}

start()
