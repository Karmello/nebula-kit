import { JSX } from 'react'

import { BoxProps } from 'lib/components/core/Box'
import { SwitchBreakpoint } from 'lib/types'

import { SPLIT_VIEW_SIDE_POSITIONS } from './constants'

export type SplitViewSidePosition = (typeof SPLIT_VIEW_SIDE_POSITIONS)[number]
export type SplitViewMode = 'overlay' | 'inline'

type ChildrenAsFuncArgs = {
  setSideOpen: (sideOpen: boolean) => Promise<boolean>
  mode: SplitViewMode
}

export type SplitViewProps = {
  // own
  sidePosition?: SplitViewSidePosition
  switchAt?: SwitchBreakpoint
  // Box
  tagAttrs?: BoxProps<'div'>['tagAttrs']
  tagRef?: BoxProps<'div'>['tagRef']
  children: BoxProps<'div'>['children'] | ((args: ChildrenAsFuncArgs) => JSX.Element)
}
