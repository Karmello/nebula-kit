import { ReactNode } from 'react'

import { SplitViewMode, SplitViewProps } from '../../types'

export type ProviderProps = {
  // own
  children: ReactNode
  // SplitView
  sidePosition?: SplitViewProps['sidePosition']
  switchAt?: SplitViewProps['switchAt']
}

export type { SplitViewMode }

export type SplitViewContextProps = {
  // own
  sideOpen: boolean
  setSideOpen: (sideOpen: boolean) => void
  mode: SplitViewMode
} & Omit<ProviderProps, 'children'>
