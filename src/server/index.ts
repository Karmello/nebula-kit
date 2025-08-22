import express from 'express'
import { createServer } from 'http'
import bodyParser from 'body-parser'
import helmet from 'helmet'

import { RootController, InfoController, FakeApiController } from './controllers'

const { NODE_ENV, SERVER_PORT, LOCAL_ENV } = process.env

const PORT = SERVER_PORT || process.env.PORT

const app = express()

app.use(bodyParser.json())

if (NODE_ENV === 'production') {
  app.enable('trust proxy')
  app.use((req, res, next) => {
    if (req.secure || LOCAL_ENV === 'true') {
      next()
    } else {
      res.redirect('https://' + req.hostname + req.url)
    }
  })
}

app.use(helmet.frameguard())
app.use(helmet.hidePoweredBy())

if (NODE_ENV === 'production') {
  app.get(/.*[a-z]\.js$/, (req, res, next) => {
    if (req.header('Accept-Encoding').includes('br')) {
      req.url = req.url + '.br'
      res.set('Content-Encoding', 'br')
      res.set('Content-Type', 'application/javascript; charset=UTF-8')
    }
    next()
  })
}

app.get('/fake-api/:action', FakeApiController)
app.post('/fake-api/:action', FakeApiController)
app.put('/fake-api/:action', FakeApiController)

app.get('/info', InfoController)

app.get('/', RootController)
app.use(express.static('build/client'))
app.get(/(.*)/, RootController)

if (NODE_ENV !== 'test') {
  const onStarted = () => {
    console.log(`Server listening on port ${PORT}`, { NODE_ENV }, '\n')
  }
  createServer(app).listen(PORT, onStarted)
}

export default app
