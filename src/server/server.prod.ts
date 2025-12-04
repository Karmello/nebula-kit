import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'url'
import express from 'express'
import getPort from 'get-port'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'

import { HydrationGate, NebkitProvider, Snackbar } from 'src/lib/components'
import { App } from 'src/client/components'
import { generateTitleFromPath, getComponentDescriptionByPath } from './seo-helpers'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const buildDir = path.resolve(process.cwd(), 'build/client')
const indexHtml = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf-8')

const app = express()

app.get('/captain-nebula.webp', (req, res) => {
  res.setHeader('Cache-Control', 'public, max-age=2592000, immutable')
  res.sendFile(path.join(__dirname, '../client/captain-nebula.webp'))
})

app.use(express.static(path.join(__dirname, '../client')))
app.use(express.static(buildDir, { index: false }))

app.get(/.*/, (req, res) => {
  try {
    const appHtml = renderToString(
      createElement(
        StaticRouter,
        { location: req.originalUrl },
        createElement(
          HydrationGate,
          null,
          createElement(
            NebkitProvider,
            null,
            createElement(Snackbar, { closeOnOutsideClick: true } as any, createElement(App))
          )
        )
      )
    )

    const html = indexHtml
      .replace(
        '<title>NebulaKit | React UI System</title>',
        `<title>${generateTitleFromPath(req.url)}</title>`
      )
      .replace(
        '</head>',
        `<meta name="description" content="${getComponentDescriptionByPath(req.url)}"></head>`
      )
      .replace(
        '</head>',
        `<script async src="https://plausible.io/js/script.js" data-domain="${process.env.PLAUSIBLE_DOMAIN}"></script></head>`
      )
      .replace('<!--ssr-outlet-->', appHtml)

    res.status(200).type('html').end(html)
  } catch (err) {
    console.error('[ssr]', err)
    res.status(500).send({ message: err.message, stack: err.stack })
  }
})

const port = process.env.PORT || (await getPort({ port: 5175 }))

app.listen(Number(port), '0.0.0.0', () => {
  console.log(`▶ SSR prod server at http://localhost:${port}`)
})
