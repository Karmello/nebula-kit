import { ReactNode } from 'react'

import { SplitViewProps } from 'lib/components'

export type ProviderProps = Pick<SplitViewProps, 'sidePosition' | 'switchAt'> & {
  children: ReactNode
}

export type SplitViewMode = 'overlay' | 'inline'

export type SplitViewContextProps = Omit<ProviderProps, 'children'> & {
  sideOpen: boolean
  setSideOpen: (sideOpen: boolean) => void
  mode: SplitViewMode
}
