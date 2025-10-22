import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import { App } from 'client/components'
import { NebkitProvider, HydrationGate } from 'lib/components'

const Node = () => (
  <BrowserRouter>
    <HydrationGate>
      <NebkitProvider>
        <App />
      </NebkitProvider>
    </HydrationGate>
  </BrowserRouter>
)

const container = document.getElementById('root')

if (container.firstElementChild !== null) {
  requestAnimationFrame(() => {
    document.getElementById('neb-ssr-dev-styles')?.remove()
  })

  hydrateRoot(container, <Node />, {
    onRecoverableError: (err, info) => {
      console.error('[hydrate]', err, info)
    },
  })
} else {
  const root = createRoot(container)
  root.render(<Node />)
}
