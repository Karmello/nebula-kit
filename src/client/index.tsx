import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from 'client/components'
import { NebKitProvider } from 'lib/components'

import './i18n'

const Node = () => (
  <BrowserRouter>
    <NebKitProvider>
      <App />
    </NebKitProvider>
  </BrowserRouter>
)

const container = document.getElementById('root')

if (process.env.NODE_ENV === 'production') {
  hydrateRoot(container, <Node />)
} else {
  const root = createRoot(container)
  root.render(<Node />)
}
