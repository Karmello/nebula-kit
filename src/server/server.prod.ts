import { createElement } from 'react'
import express from 'express'
import getPort from 'get-port'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { fileURLToPath } from 'url'
import fs from 'node:fs'
import path from 'node:path'

import { Client } from 'client/components/app/Client/client'

import { getFinalIndexHtml } from './helpers'

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
    const appHtml = renderToString(createElement(StaticRouter, { location: req.originalUrl }, createElement(Client)))

    res
      .status(200)
      .type('html')
      .end(getFinalIndexHtml(indexHtml, appHtml, req.url))
  } catch (err) {
    console.error('[ssr]', err)
    res.status(500).send({ message: err.message, stack: err.stack })
  }
})

const port = process.env.PORT || (await getPort({ port: 5175 }))

app.listen(Number(port), '0.0.0.0', () => {
  console.log(`▶ SSR prod server at http://localhost:${port}`)
})
