import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import { Client } from './components/app/Client/client'

import 'lib/styles/index.scss'

const container = document.getElementById('root')

if (!import.meta.hot?.data.bootstrapped) {
  if (import.meta.hot) {
    import.meta.hot.data.bootstrapped = true
  }

  if (container.firstElementChild !== null) {
    requestAnimationFrame(() => {
      document.getElementById('neb-ssr-dev-styles')?.remove()
    })

    hydrateRoot(
      container,
      <BrowserRouter>
        <Client />
      </BrowserRouter>,
      {
        onRecoverableError: (err, info) => {
          console.error('[hydrate]', err, info)
        },
      }
    )
  } else {
    const root = createRoot(container)
    root.render(
      <BrowserRouter>
        <Client />
      </BrowserRouter>
    )
  }
}
