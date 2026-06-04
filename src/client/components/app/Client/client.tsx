import { NebkitProvider } from 'lib/index.core'
import { Snackbar } from 'lib/index.pro'
import { useAppStore } from 'client/store'

import { App } from '../App'

export const Client = () => {
  const theme = useAppStore(state => state.theme)
  const brand = useAppStore(state => state.brand)
  const saturation = useAppStore(state => state.saturation)
  const borderRadiusSize = useAppStore(state => state.borderRadiusSize)
  const rippleMode = useAppStore(state => state.rippleMode)
  const showAppJump = useAppStore(state => state.showAppJump)

  return (
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
  )
}
