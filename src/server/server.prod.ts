import fs from 'node:fs'
import path from 'node:path'
import express from 'express'
import getPort from 'get-port'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'

import { NebKitProvider } from 'src/lib/components'
import { App } from 'src/client/components'

const distDir = path.resolve(process.cwd(), 'dist/client')
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')

const app = express()

app.use(express.static(distDir, { index: false }))

app.get(/.*/, (req, res) => {
  try {
    const appHtml = renderToString(
      createElement(
        StaticRouter,
        { location: req.originalUrl },
        createElement(NebKitProvider, { defaultBorderRadius: 3 } as any, createElement(App))
      )
    )

    const html = indexHtml.replace('<!--ssr-outlet-->', appHtml)

    res.status(200).type('html').end(html)
  } catch (err) {
    console.error('[ssr]', err)
    res.status(500).send('SSR error')
  }
})

const port = await getPort({ port: 5175 })

app.listen(port, () => {
  console.log(`▶ SSR prod server at http://localhost:${port}`)
})
