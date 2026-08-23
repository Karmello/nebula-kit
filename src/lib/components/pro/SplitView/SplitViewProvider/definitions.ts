import { ReactNode } from 'react'

import { SplitViewProps } from 'lib/index.pro'

export type ProviderProps = {
  // own
  children: ReactNode
  // SplitView
  sidePosition?: SplitViewProps['sidePosition']
  switchAt?: SplitViewProps['switchAt']
}

export type SplitViewMode = 'overlay' | 'inline'

export type SplitViewContextProps = {
  // own
  sideOpen: boolean
  setSideOpen: (sideOpen: boolean) => void
  mode: SplitViewMode
} & Omit<ProviderProps, 'children'>
