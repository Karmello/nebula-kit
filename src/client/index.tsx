import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from 'client/components'
import { LibProvider } from 'lib-2/components'

import './i18n'
import '../lib/i18n'
import '../lib/styles/index.scss'
import '../lib-2/styles/index.scss'

const Node = () => (
  <BrowserRouter>
    <LibProvider>
      <App />
    </LibProvider>
  </BrowserRouter>
)

const container = document.getElementById('root')

if (process.env.NODE_ENV === 'production') {
  hydrateRoot(container, <Node />)
} else {
  const root = createRoot(container)
  root.render(<Node />)
}
