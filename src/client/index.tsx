import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import { App } from 'client/components'
import { NebKitProvider, HydrationGate } from 'lib/components'

const Node = () => (
  <BrowserRouter>
    <HydrationGate>
      <NebKitProvider defaultBorderRadius={3}>
        <App />
      </NebKitProvider>
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
