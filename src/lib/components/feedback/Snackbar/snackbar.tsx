import { Callout } from 'lib/components'

import { SnackbarProps } from './definitions'
import { SnackbarProvider } from './SnackbarProvider'

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
    <SnackbarProvider>
      <SnackbarComponent {...props} />
    </SnackbarProvider>
  )
}

Snackbar.displayName = 'Snackbar'
