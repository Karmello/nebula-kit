import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import { App } from 'client/components'
import { useAppStore } from 'client/store'
import { loadFoundationPageModules } from 'client/pages/routes/FoundationsPageRoutes/definitions'
import { NebkitProvider, HydrationGate, Snackbar } from 'lib/components'

import 'lib/styles/index.scss'

loadFoundationPageModules()

const Node = () => {
  const theme = useAppStore(state => state.theme)
  const brand = useAppStore(state => state.brand)
  const borderRadiusSize = useAppStore(state => state.borderRadiusSize)
  const showAppJump = useAppStore(state => state.showAppJump)

  return (
    <BrowserRouter>
      <HydrationGate>
        <NebkitProvider
          theme={theme}
          brand={brand}
          borderRadiusSize={borderRadiusSize}
          lockGlobalScroll={showAppJump}
        >
          <Snackbar closeOnOutsideClick autoCloseDelay={10000}>
            <App />
          </Snackbar>
        </NebkitProvider>
      </HydrationGate>
    </BrowserRouter>
  )
}

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
