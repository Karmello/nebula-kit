import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from 'client/components'
import { NebKitProvider } from 'lib/components'

const Node = () => (
  <BrowserRouter>
    <NebKitProvider defaultBorderRadius={3}>
      <App />
    </NebKitProvider>
  </BrowserRouter>
)

const container = document.getElementById('root')

if (process.env.NODE_ENV === 'production') {
  hydrateRoot(container, <Node />, {
    onRecoverableError: (err, info) => {
      console.error('[hydrate]', err, info)
    },
  })
} else {
  const root = createRoot(container)
  root.render(<Node />)
}
