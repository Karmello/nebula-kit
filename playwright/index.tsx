import { beforeMount } from '@playwright/experimental-ct-react/hooks'

import { NebkitProvider } from '../src/lib/components'

import 'lib/styles/index.scss'

beforeMount(async ({ App, hooksConfig }) => {
  const { theme, brand } = hooksConfig ?? ({} as any)

  document.documentElement.setAttribute('data-theme', theme)
  document.documentElement.setAttribute('data-brand', brand)

  return (
    <NebkitProvider theme={theme} brand={brand}>
      <App />
    </NebkitProvider>
  )
})
