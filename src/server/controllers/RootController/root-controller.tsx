import fs from 'fs'
import { Request, Response } from 'express'
import ReactDOMServer from 'react-dom/server'
import { createMemoryHistory } from 'history'
import { StaticRouter } from 'react-router-dom/server'

import { App } from 'client/components'

export const RootController = (req: Request, res: Response) => {
  const { location } = createMemoryHistory()

  const env = {}

  const app = ReactDOMServer.renderToString(
    <StaticRouter location={location}>
      <App />
    </StaticRouter>
  )

  fs.readFile('build/client/index.html', 'utf8', (err, file) => {
    if (!err && file) {
      res.send(
        file.replace(
          '<div id="root"></div>',
          `
            <div id="root">${app}</div>
            <div id="env" style="display:none">
              ${encodeURIComponent(JSON.stringify(env))}
            </div>
          `
        )
      )
    } else {
      return res.status(404).end(JSON.stringify(err))
    }
  })
}
