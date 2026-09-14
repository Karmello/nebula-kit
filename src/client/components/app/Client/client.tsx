import { NebkitProvider } from 'lib/index.core'
import { Snackbar } from 'lib/index.pro'
import { useAppStore } from 'client/store'

import { App } from '../App'

export const Client = () => {
  const theme = useAppStore(state => state.theme)
  const borderRadiusSize = useAppStore(state => state.borderRadiusSize)
  const ripple = useAppStore(state => state.ripple)
  const showAppJump = useAppStore(state => state.showAppJump)

  return (
    <NebkitProvider
      theme={theme}
      borderRadiusSize={borderRadiusSize}
      ripple={ripple}
      lockGlobalScroll={showAppJump}
    >
      <Snackbar closeOnOutsideClick autoCloseDelay={10000}>
        <App />
      </Snackbar>
    </NebkitProvider>
  )
}
