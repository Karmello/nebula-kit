import { CalloutProps } from 'lib/components'
import { ReactNode } from 'react'

type SnackbarOwnProps = {
  children: ReactNode
}

export type SnackbarProps = CalloutProps & SnackbarOwnProps
