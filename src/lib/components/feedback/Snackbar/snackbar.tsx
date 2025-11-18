import { Callout } from 'lib/components'

import { SnackbarProps } from './definitions'
import { SnackbarContext } from './SnackbarProvider'

const SnackbarComponent = ({
  // own
  children,
  // Callout
  ...calloutProps
}: SnackbarProps) => {
  return (
    <>
      <Callout {...calloutProps} />
      {children}
    </>
  )
}

export const Snackbar = (props: SnackbarProps) => {
  return (
    <SnackbarContext value={null}>
      <SnackbarComponent {...props} />
    </SnackbarContext>
  )
}

Snackbar.displayName = 'Snackbar'
