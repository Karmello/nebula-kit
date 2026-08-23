import { JSX } from 'react'

import { BoxProps } from 'lib/index.core'
import { SwitchBreakpoint } from 'lib/types'

import { SplitViewContextProps } from './SplitViewProvider/definitions'

export const SPLIT_VIEW_SIDE_POSITIONS = ['left', 'right'] as const

export type SplitViewSidePosition = (typeof SPLIT_VIEW_SIDE_POSITIONS)[number]

type ChildrenAsFuncArgs = {
  setSideOpen: (sideOpen: boolean) => Promise<boolean>
  mode: SplitViewContextProps['mode']
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
