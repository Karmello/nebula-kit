import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import { HydrationGate, NebkitProvider, Snackbar } from 'lib/components'
import { App } from 'client/components'
import { useAppStore } from 'client/store'

import 'lib/styles/index.scss'

const Node = () => {
  const theme = useAppStore(state => state.theme)
  const brand = useAppStore(state => state.brand)
  const saturation = useAppStore(state => state.saturation)
  const borderRadiusSize = useAppStore(state => state.borderRadiusSize)
  const rippleMode = useAppStore(state => state.rippleMode)
  const showAppJump = useAppStore(state => state.showAppJump)

  return (
    <BrowserRouter>
      <HydrationGate>
        <NebkitProvider
          theme={theme}
          brand={brand}
          saturation={saturation}
          borderRadiusSize={borderRadiusSize}
          rippleMode={rippleMode}
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
