import { JSX } from 'react'

import { GridProps } from 'lib/index.core'
import { SwitchBreakpoint } from 'lib/types'

import { SplitViewContextProps } from './SplitViewProvider/definitions'

export const SPLIT_VIEW_SIDE_POSITIONS = ['left', 'right'] as const

export type SplitViewSidePosition = (typeof SPLIT_VIEW_SIDE_POSITIONS)[number]

type ChildrenAsFuncArgs = {
  setSideOpen: (sideOpen: boolean) => Promise<boolean>
  mode: SplitViewContextProps['mode']
}

export type SplitViewOwnProps = {
  sidePosition?: SplitViewSidePosition
  switchAt?: SwitchBreakpoint
}

type PropsFromGrid = Pick<GridProps<'div'>, 'tagAttrs' | 'tagRef'> & {
  children: GridProps<'div'>['children'] | ((args: ChildrenAsFuncArgs) => JSX.Element)
}

export type SplitViewProps = PropsFromGrid & SplitViewOwnProps
