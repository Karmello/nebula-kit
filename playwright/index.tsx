import { beforeMount } from '@playwright/experimental-ct-react/hooks'

import { NebKitProvider } from '../src/lib/components/utility'

beforeMount(async ({ App }) => {
  return (
    <NebKitProvider>
      <App />
    </NebKitProvider>
  )
})
